import argparse
import gzip
import re
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("svgz_path", type=str)
    parser.add_argument("--write-svg", action="store_true", help="Write decompressed SVG next to SVGZ")
    args = parser.parse_args()

    svgz_path = Path(args.svgz_path)
    data = gzip.open(svgz_path, "rb").read()
    text = data.decode("utf-8", "replace")

    if args.write_svg:
        out_svg = svgz_path.with_suffix(".svg")
        out_svg.write_text(text, encoding="utf-8")
        print(f"wrote_svg={out_svg}")

    rx_sizes = re.compile(r'font-size\s*[:=]\s*"?([0-9.]+)(px|pt)?')
    rx_weight = re.compile(r'font-weight\s*[:=]\s*"?([0-9]+|bold|normal|lighter|bolder)')
    rx_ls = re.compile(r'letter-spacing\s*[:=]\s*"?([-0-9.]+)(px|em)?')
    rx_ff = re.compile(r'font-family\s*[:=]\s*"([^"]+)"')
    rx_lh = re.compile(r'line-height\s*[:=]\s*"?([0-9.]+)(px|em|%)?')

    sizes = [float(m.group(1)) for m in rx_sizes.finditer(text)]
    weights = [m.group(1) for m in rx_weight.finditer(text)]
    letter_spacings = [float(m.group(1)) for m in rx_ls.finditer(text)]
    families = [m.group(1) for m in rx_ff.finditer(text)]
    line_heights = [float(m.group(1)) for m in rx_lh.finditer(text)]

    def summarize_num(name: str, values: list[float]) -> None:
        uniq = sorted(set(values))
        print(f"{name}.count={len(values)}")
        print(f"{name}.unique_count={len(uniq)}")
        print(f"{name}.unique_sorted={uniq[:120]}")

    print(f"bytes={len(data)}")
    summarize_num("font_size", sizes)
    print(f"font_weight.unique_sorted={sorted(set(weights))[:120]}")
    summarize_num("letter_spacing", letter_spacings)
    summarize_num("line_height", line_heights)
    print(f"font_family.unique_count={len(set(families))}")
    # Preserve order
    seen = set()
    sample = []
    for f in families:
        if f not in seen:
            seen.add(f)
            sample.append(f)
        if len(sample) >= 20:
            break
    print(f"font_family.sample={sample}")


if __name__ == "__main__":
    main()

