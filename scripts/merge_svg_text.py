#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
将 SVG 中分散的 tspan（单字/单词）合并为连续的文本块
使文本成为可编辑的整体（一句或一段）
"""
import os
import re

PPT_DIR = os.path.join(os.path.dirname(__file__), "..", "PPT files")
SVG_DIR = os.path.join(PPT_DIR, "svg_output")
OUT_DIR = SVG_DIR  # 输出到同目录，覆盖或加后缀


def parse_tspans(text_content):
    """解析 text 元素内的所有 tspan，返回 [(x, y, content, full_tag), ...]
    无 x/y 的 tspan 继承前一个 tspan 的值
    """
    pattern = r'<tspan\s+([^>]*)>([^<]*)</tspan>'
    results = []
    last_x, last_y = 0, 0
    for m in re.finditer(pattern, text_content):
        attrs, content = m.group(1), m.group(2)
        x = re.search(r'\bx="([^"]*)"', attrs)
        y = re.search(r'\by="([^"]*)"', attrs)
        x_val = float(x.group(1)) if x and x.group(1) else last_x
        y_val = float(y.group(1)) if y and y.group(1) else last_y
        last_x, last_y = x_val, y_val
        results.append((x_val, y_val, content, m.group(0)))
    return results


def merge_tspans_in_text(text_elem):
    """
    将同一 text 内、同一行（y 相近）的 tspan 合并为单个 tspan
    返回替换后的 text 内容
    """
    inner = re.search(r'<text[^>]*>(.*?)</text>', text_elem, re.DOTALL)
    if not inner:
        return text_elem
    inner_content = inner.group(1)
    tspans = parse_tspans(inner_content)
    if len(tspans) <= 1:
        return text_elem

    # 按 y 分组（同一行，容差 0.5）
    groups = []
    current_group = [tspans[0]]
    for i in range(1, len(tspans)):
        x, y, content, _ = tspans[i]
        prev_y = current_group[-1][1]
        if abs(y - prev_y) < 0.5:
            current_group.append(tspans[i])
        else:
            groups.append(current_group)
            current_group = [tspans[i]]
    groups.append(current_group)

    # 每组合并为一个 tspan
    new_inner_parts = []
    for group in groups:
        first_x, first_y, _, _ = group[0]
        combined = "".join(t[2] for t in group)
        # 跳过 Aspose 水印（避免重复合并）
        if "Evaluation only" in combined or "Aspose" in combined or "Copyright" in combined:
            # 水印通常有 shadow+正文 重复，只保留一份
            if combined.count("Evaluation only") == 2:
                combined = "Evaluation only."
            elif combined.count("Created with") == 2:
                combined = "Created with Aspose.Slides for Python via .NET 26.2."
            elif combined.count("Copyright") == 2:
                combined = "Copyright 2004-2026 Aspose Pty Ltd."
        # 继承第一个 tspan 的 stroke 等常用属性
        first_tag = group[0][3]
        stroke = re.search(r'stroke="([^"]*)"', first_tag)
        stroke_w = re.search(r'stroke-width="([^"]*)"', first_tag)
        font_w = re.search(r'font-weight="([^"]*)"', first_tag)
        font_f = re.search(r'font-family="([^"]*)"', first_tag)
        attrs = []
        if stroke:
            attrs.append(f'stroke="{stroke.group(1)}"')
        if stroke_w:
            attrs.append(f'stroke-width="{stroke_w.group(1)}"')
        if font_w:
            attrs.append(f'font-weight="{font_w.group(1)}"')
        if font_f:
            attrs.append(f'font-family="{font_f.group(1)}"')
        attr_str = " " + " ".join(attrs) if attrs else ""
        new_tspan = f'<tspan x="{first_x}" y="{first_y}"{attr_str}>{combined}</tspan>'
        new_inner_parts.append(new_tspan)

    new_inner = "\n".join(new_inner_parts)
    # 替换原 text 的 inner 部分
    new_text = re.sub(r'(<text[^>]*>)(.*?)(</text>)', r'\1' + new_inner + r'\3', text_elem, flags=re.DOTALL)
    return new_text


def process_svg_content(content):
    """处理整个 SVG 内容，合并所有 text 内的 tspan"""
    # 找到每个 <text ...>...</text> 块（可能跨行）
    text_pattern = r'<text[^>]*>.*?</text>'
    # 需要非贪婪且能匹配嵌套... tspan 在 text 内，无嵌套 text，用 DOTALL
    text_blocks = list(re.finditer(r'<text[^>]*>.*?</text>', content, re.DOTALL))
    if not text_blocks:
        return content

    result = content
    for m in reversed(text_blocks):  # 从后往前替换，避免偏移
        orig = m.group(0)
        merged = merge_tspans_in_text(orig)
        if merged != orig:
            result = result[: m.start()] + merged + result[m.end() :]
    return result


def process_file(in_path, out_path=None, in_place=False):
    """处理单个 SVG 文件。in_place=True 时覆盖原文件"""
    if out_path is None:
        out_path = in_path if in_place else in_path.replace(".svg", "_merged.svg")
    with open(in_path, "r", encoding="utf-8") as f:
        content = f.read()
    new_content = process_svg_content(content)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    return out_path


def process_all(in_place=True):
    """处理 svg_output 下所有单页 SVG。in_place=True 时直接覆盖原文件"""
    if not os.path.isdir(SVG_DIR):
        print("未找到 svg_output 目录")
        return
    count = 0
    for f in sorted(os.listdir(SVG_DIR)):
        if f.endswith(".svg") and "_slide_" in f and "_merged" not in f:
            fpath = os.path.join(SVG_DIR, f)
            out = process_file(fpath, in_place=in_place)
            count += 1
            print(f"已处理: {f}")
    if count:
        print(f"\n共处理 {count} 个文件，文本已合并为连续可编辑块。")
    else:
        print("未找到待处理的 SVG 文件")


if __name__ == "__main__":
    process_all()
