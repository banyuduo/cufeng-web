#!/usr/bin/env python3
"""
将 PPT 转为 SVG 格式
依赖: pip install aspose.slides
用法: python scripts/pptx_to_svg.py [pptx路径]
默认转换: PPT files/簇锋科技融资路演PPT - 测试.pptx
"""
import os
import sys

def find_pptx():
    ppt_dir = os.path.join(os.path.dirname(__file__), "..", "PPT files")
    for f in os.listdir(ppt_dir):
        if f.endswith(".pptx") and "测试" in f:
            return os.path.join(ppt_dir, f)
    return os.path.join(ppt_dir, "簇锋科技融资路演PPT - 测试.pptx")

def convert(pptx_path, out_dir=None):
    import aspose.slides as slides
    if not os.path.exists(pptx_path):
        print(f"文件不存在: {pptx_path}")
        return
    if out_dir is None:
        out_dir = os.path.join(os.path.dirname(pptx_path), "svg_output")
    os.makedirs(out_dir, exist_ok=True)
    base_name = os.path.splitext(os.path.basename(pptx_path))[0]
    with slides.Presentation(pptx_path) as prs:
        for i, slide in enumerate(prs.slides):
            out_path = os.path.join(out_dir, f"{base_name}_slide_{i+1:02d}.svg")
            with open(out_path, "wb") as f:
                slide.write_as_svg(f)
            print(f"已生成: {out_path}")
    print(f"\n共 {len(prs.slides)} 页，已保存到: {os.path.abspath(out_dir)}")

if __name__ == "__main__":
    pptx = sys.argv[1] if len(sys.argv) > 1 else find_pptx()
    convert(pptx)
