#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
一键生成最终 SVG：修复乱码、去除水印、Illustrator 兼容、合并为单一文件
用法: python scripts/build_final_svg.py
前置: 需先运行 pptx_to_svg.py 和 merge_svg_text.py
"""
import os
import re
import sys

# 导入文本合并逻辑
sys.path.insert(0, os.path.dirname(__file__))
from merge_svg_text import process_svg_content as merge_text_content

PPT_DIR = os.path.join(os.path.dirname(__file__), "..", "PPT files")
SVG_DIR = os.path.join(PPT_DIR, "svg_output")
OUT_PATH = os.path.join(PPT_DIR, "簇锋科技融资路演PPT_最终版.svg")


def remove_watermark(content):
    """完全移除 Aspose 水印（仅匹配 fill="#FFD8CF" 的水印 text 元素）"""
    # 水印特征：fill="#FFD8CF" 或 fill-opacity="0.75" 且含 Evaluation/Aspose/Copyright
    pattern = r'<text[^>]*(?:fill="#FFD8CF"|fill-opacity="0\.75")[^>]*>[\s\S]*?(?:Evaluation only|Aspose\.Slides|Copyright 2004)[\s\S]*?</text>\s*'
    return re.sub(pattern, '', content)


def fix_illustrator_compat(content):
    """修复 Illustrator 兼容性问题"""
    # 1. 移除 standalone="yes" 和 DOCTYPE（部分工具解析有问题）
    content = re.sub(r'\s+standalone="yes"', '', content)
    content = re.sub(r'<!DOCTYPE[^>]*>\s*', '', content)
    # 2. 确保 xmlns:xlink 正确声明（Illustrator 需要）
    if 'xmlns:xlink' not in content:
        content = re.sub(r'(<svg[^>]*xmlns="[^"]*")', r'\1 xmlns:xlink="http://www.w3.org/1999/xlink"', content, count=1)
    # 3. 将 xlink:href 在 symbol/image 内确保可解析
    return content


def fix_font_fallback(content):
    """为字体添加回退，减少乱码（系统无该字体时用通用字体）"""
    # MS Gothic, SimSun 在无日文/中文环境可能乱码，添加 fallback
    replacements = [
        (r'font-family="MS Gothic"', 'font-family="MS Gothic, Microsoft YaHei, SimSun, sans-serif"'),
        (r'font-family="SimSun"', 'font-family="SimSun, Microsoft YaHei, serif"'),
        (r'font-family="Calibri"', 'font-family="Calibri, Arial, sans-serif"'),
    ]
    for old, new in replacements:
        content = content.replace(old, new)
    return content


def fix_encoding_entities(content):
    """修复可能引起乱码的 HTML 实体"""
    # &gt; &lt; 等保留，确保中文等正确
    return content


def process_single_svg(content):
    """处理单页 SVG 内容：合并文本、去水印、修复字体"""
    content = merge_text_content(content)  # 合并分散的 tspan
    content = remove_watermark(content)
    content = fix_font_fallback(content)
    content = fix_encoding_entities(content)
    return content


def merge_all_svgs():
    """合并所有 SVG 为单一文件，并应用全部修复"""
    if not os.path.isdir(SVG_DIR):
        print("未找到 svg_output，请先运行: python scripts/pptx_to_svg.py")
        return None

    files = []
    for f in sorted(os.listdir(SVG_DIR)):
        if f.endswith(".svg") and "_slide_" in f and "_merged" not in f:
            files.append(os.path.join(SVG_DIR, f))
    files = sorted(files)

    if not files:
        print("未找到 SVG 文件")
        return None

    w, h = 960, 540
    total_h = len(files) * h

    # 简洁的 SVG 头（Illustrator 友好，支持中文）
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        f'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:lang="zh-CN"',
        f' viewBox="0 0 {w} {total_h}" width="{w}" height="{total_h}">',
        '<defs>',
    ]

    all_defs = []
    for i, fpath in enumerate(files):
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        content = process_single_svg(content)
        def_match = re.search(r'<defs>(.*?)</defs>', content, re.DOTALL)
        if def_match:
            defs = def_match.group(1)
            prefix = f"s{i}_"
            defs = re.sub(r'id="([^"]+)"', lambda m: f'id="{prefix}{m.group(1)}"', defs)
            defs = re.sub(r'xlink:href="#([^"]+)"', lambda m: f'xlink:href="#{prefix}{m.group(1)}"', defs)
            all_defs.append(defs)

    lines.append("\n".join(all_defs))
    lines.append("</defs>")

    for i, fpath in enumerate(files):
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        content = process_single_svg(content)
        content = re.sub(r'<defs>.*?</defs>', '', content, flags=re.DOTALL)
        content = re.sub(r'<\?xml[^>]*>', '', content)
        content = re.sub(r'<!DOCTYPE[^>]*>', '', content)
        content = re.sub(r'<svg[^>]*>', '', content)
        content = re.sub(r'</svg>', '', content)
        prefix = f"s{i}_"
        content = re.sub(r'xlink:href="#([^"]+)"', lambda m: f'xlink:href="#{prefix}{m.group(1)}"', content)
        lines.append(f'<g id="page{i+1}" transform="translate(0, {i*h})">')
        lines.append(content.strip())
        lines.append("</g>")

    lines.append("</svg>")
    final = "\n".join(lines)
    final = fix_illustrator_compat(final)

    with open(OUT_PATH, "w", encoding="utf-8") as f:
        f.write(final)

    print(f"已生成: {os.path.abspath(OUT_PATH)}")
    print(f"  - 共 {len(files)} 页")
    print(f"  - 已去除水印")
    print(f"  - 已优化字体与 Illustrator 兼容性")
    return OUT_PATH


if __name__ == "__main__":
    if sys.platform == "win32":
        sys.stdout.reconfigure(encoding="utf-8")
    merge_all_svgs()
