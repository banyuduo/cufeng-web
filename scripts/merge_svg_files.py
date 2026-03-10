#!/usr/bin/env python3
"""
将 PPT 转换得到的多个 SVG 合并为单一文件
所有页面垂直堆叠，每页 960x540 像素
"""
import os
import re

PPT_DIR = os.path.join(os.path.dirname(__file__), "..", "PPT files")
SVG_DIR = os.path.join(PPT_DIR, "svg_output")
OUT_DIR = PPT_DIR

def find_svg_files():
    if not os.path.isdir(SVG_DIR):
        return []
    files = []
    for f in sorted(os.listdir(SVG_DIR)):
        if f.endswith(".svg") and "_slide_" in f:
            files.append(os.path.join(SVG_DIR, f))
    return sorted(files)

def merge_svgs():
    files = find_svg_files()
    if not files:
        print("未找到 SVG 文件，请先运行 pptx_to_svg.py")
        return None
    # 每页尺寸 (Aspose 输出约 959x540)
    w, h = 960, 540
    total_h = len(files) * h
    merged = []
    merged.append('<?xml version="1.0" encoding="utf-8"?>')
    merged.append(f'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"')
    merged.append(f' viewBox="0 0 {w} {total_h}" width="{w}px" height="{total_h}px">')
    merged.append('<defs>')
    all_defs = []
    for i, fpath in enumerate(files):
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        # 提取 defs 中的 symbol 等，重写 ID 避免冲突
        def_match = re.search(r'<defs>(.*?)</defs>', content, re.DOTALL)
        if def_match:
            defs_content = def_match.group(1)
            # 重写 symbol id 和 xlink:href 引用
            prefix = f"s{i}_"
            defs_content = re.sub(r'id="([^"]+)"', lambda m: f'id="{prefix}{m.group(1)}"', defs_content)
            defs_content = re.sub(r'xlink:href="#([^"]+)"', lambda m: f'xlink:href="#{prefix}{m.group(1)}"', defs_content)
            all_defs.append(defs_content)
    merged.append("\n".join(all_defs))
    merged.append("\n</defs>")
    # 逐页添加内容
    for i, fpath in enumerate(files):
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        # 提取 svg 内 defs 之后的内容（主 g 组）
        content = re.sub(r'<defs>.*?</defs>', '', content, flags=re.DOTALL)
        content = re.sub(r'<\?xml[^>]*>', '', content)
        content = re.sub(r'<!DOCTYPE[^>]*>', '', content)
        content = re.sub(r'<svg[^>]*>', '', content)
        content = re.sub(r'</svg>', '', content)
        # 重写本页内的 xlink:href 引用
        prefix = f"s{i}_"
        content = re.sub(r'xlink:href="#([^"]+)"', lambda m: f'xlink:href="#{prefix}{m.group(1)}"', content)
        merged.append(f'<g id="page{i+1}" transform="translate(0, {i*h})">')
        merged.append(content.strip())
        merged.append("</g>")
    merged.append("</svg>")
    out_path = os.path.join(OUT_DIR, "簇锋科技融资路演PPT - 测试_合并.svg")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(merged))
    print(f"已合并 {len(files)} 页为: {os.path.abspath(out_path)}")
    return out_path

if __name__ == "__main__":
    merge_svgs()
