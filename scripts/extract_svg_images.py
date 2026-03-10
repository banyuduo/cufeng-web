#!/usr/bin/env python3
"""从 20260305 公司宣传ppt 2纯净版.svg 提取嵌入的 base64 图片"""
import re
import base64
import os

SVG_PATH = os.path.join(os.path.dirname(__file__), "..", "PPT files", "20260305 公司宣传ppt 2纯净版.svg")
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "PPT files", "svg_assets")

def extract_images():
    os.makedirs(OUT_DIR, exist_ok=True)
    with open(SVG_PATH, "r", encoding="utf-8") as f:
        content = f.read()
    
    # 匹配 data:image/jpeg;base64,XXXX 或 data:image/png;base64,XXXX（base64 可能跨行）
    pattern = r'xlink:href="data:image/(jpeg|png);base64,([^"]+)"'
    matches = re.findall(pattern, content, re.DOTALL)
    
    names = ["product_image", "logo_banner", "tech_background"]
    for i, (fmt, b64) in enumerate(matches):
        b64_clean = re.sub(r'\s+', '', b64)  # 移除所有空白（含换行）
        ext = "jpg" if fmt == "jpeg" else "png"
        name = names[i] if i < len(names) else f"image_{i}"
        path = os.path.join(OUT_DIR, f"{name}.{ext}")
        try:
            data = base64.b64decode(b64_clean)
            with open(path, "wb") as out:
                out.write(data)
            print(f"已保存: {path} ({len(data)} bytes, base64 len={len(b64_clean)})")
        except Exception as e:
            print(f"解码失败 {name}: {e}")
    
    return OUT_DIR

if __name__ == "__main__":
    extract_images()
