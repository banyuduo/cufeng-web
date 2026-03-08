#!/usr/bin/env python3
"""
簇锋科技 (ToSpike) 融资路演 PPT 生成脚本
借鉴 簇锋科技 融资路演内容纲要.docx 大纲
运行: python scripts/generate_pitch_deck.py
输出: PPT files/簇锋科技融资路演PPT.pptx
"""

from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_CONNECTOR_TYPE, MSO_SHAPE
import os
import tempfile

try:
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    import numpy as np
    HAS_MATPLOTLIB = True
except ImportError:
    HAS_MATPLOTLIB = False

# 配色（参考 20260305 公司宣传ppt pdf版：深灰核心页 + 白详情页 + 亮蓝强调）
BG_DARK = RGBColor(0x2b, 0x2b, 0x2b)     # 核心页深灰背景 #2B2B2B
BG_LIGHT = RGBColor(0xff, 0xff, 0xff)    # 详情页白色背景
TEXT_DARK = RGBColor(0x1e, 0x29, 0x3b)   # 深色文字
TEXT_BODY = RGBColor(0x47, 0x56, 0x6b)   # 正文灰
TEXT_MUTED = RGBColor(0x94, 0xa3, 0xb8)  # 次要文字
TEXT_ON_DARK = RGBColor(0xff, 0xff, 0xff)  # 深色背景上的白字
ACCENT_BLUE = RGBColor(0x00, 0x7a, 0xff)  # 强调色亮蓝 #007AFF
ACCENT_HIGHLIGHT = RGBColor(0x00, 0x7a, 0xff)  # 与 ACCENT_BLUE 统一
LINE_COLOR = RGBColor(0xe2, 0xe8, 0xf0)  # 分隔线
WATERMARK = RGBColor(0x3d, 0x3d, 0x3d)   # 深色页水印
ACCENT_RED = RGBColor(0xdc, 0x26, 0x26)  # 红框：融资第一优先级
FONT_TITLE = "Source Han Sans CN"         # 思源黑体（标题 Bold 32pt）
FONT_BODY = "Source Han Sans CN"          # 思源黑体（正文 Regular 16pt）
FONT_NUM = "Arial"                        # 数字用 Arial
FONT_MONO = "Consolas"                    # 技术参数等宽

SLIDE_WIDTH = Inches(13.333)
SLIDE_HEIGHT = Inches(7.5)
MARGIN = 100 / 96.0  # 100 像素 ≈ 1.04 英寸
LINE_SPACING = 1.2   # 1.2 倍行高


def apply_title_font(p, size=32):
    """标题：思源黑体 Bold"""
    try:
        p.font.name = FONT_TITLE
    except Exception:
        p.font.name = "Microsoft YaHei"
    p.font.size = Pt(size)
    p.font.bold = True


def apply_body_font(p, size=16):
    """正文：思源黑体 Regular，1.2 倍行高"""
    try:
        p.font.name = FONT_BODY
    except Exception:
        p.font.name = "Microsoft YaHei"
    p.font.size = Pt(size)
    p.font.bold = False
    try:
        p.paragraph_format.line_spacing = LINE_SPACING  # 1.2 倍行高
    except Exception:
        pass


def apply_num_font(p):
    """数字使用 Arial"""
    try:
        p.font.name = FONT_NUM
    except Exception:
        pass


def set_slide_background(slide, color):
    background = slide.background
    fill = background.fill
    fill.solid()
    fill.fore_color.rgb = color


def add_line(slide, x1, y1, x2, y2, color=LINE_COLOR):
    line = slide.shapes.add_connector(MSO_CONNECTOR_TYPE.STRAIGHT,
        Inches(x1), Inches(y1), Inches(x2), Inches(y2))
    line.line.color.rgb = color
    line.line.width = Pt(0.5)


def add_footer(slide, is_dark=False):
    """底部导航：NanJing Cu Feng Mechanical & Electrical Technology | Four-Stage Path"""
    foot = slide.shapes.add_textbox(Inches(MARGIN), Inches(7.15), Inches(12), Inches(0.25))
    tf = foot.text_frame
    p = tf.paragraphs[0]
    p.text = "NanJing Cu Feng Mechanical & Electrical Technology | Four-Stage Path"
    p.font.size = Pt(8)
    p.font.color.rgb = TEXT_MUTED if not is_dark else RGBColor(0x99, 0x99, 0x99)
    p.alignment = PP_ALIGN.CENTER


def add_pdf_header_footer(slide, page_label=None, is_dark=False):
    """页眉页脚（兼容旧调用），page_label 用于深色页水印"""
    add_footer(slide, is_dark)
    if page_label and is_dark:
        lbl = slide.shapes.add_textbox(Inches(0.5), Inches(5.0), Inches(5), Inches(1.2))
        tf = lbl.text_frame
        p = tf.paragraphs[0]
        p.text = page_label.replace(" ", "\n")
        p.font.size = Pt(36)
        p.font.bold = True
        p.font.color.rgb = WATERMARK


def add_title_box(slide, title, y=1.0, font_size=32, is_dark=False):
    box = slide.shapes.add_textbox(Inches(MARGIN), Inches(y), Inches(13.333 - 2 * MARGIN), Inches(0.9))
    tf = box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = title
    apply_title_font(p, font_size)
    p.font.color.rgb = TEXT_ON_DARK if is_dark else TEXT_DARK


def add_content_slide(prs, title, blocks, page_label=None, title_font=32, body_font=16):
    """通用内容页：思源黑体标题32pt + 正文16pt，1.2倍行高，100px边距"""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, BG_LIGHT)
    add_pdf_header_footer(slide, page_label)
    add_title_box(slide, title, font_size=title_font)
    add_line(slide, MARGIN, 1.7, 13.333 - MARGIN, 1.7)
    y = 1.9
    for b in blocks:
        if "title" in b:
            hbox = slide.shapes.add_textbox(Inches(MARGIN), Inches(y), Inches(13.333 - 2 * MARGIN), Inches(0.6))
            tf = hbox.text_frame
            p = tf.paragraphs[0]
            p.text = b["title"]
            apply_title_font(p, 18)
            p.font.color.rgb = ACCENT_BLUE
            y += 0.7
        for item in b.get("items", []):
            cbox = slide.shapes.add_textbox(Inches(MARGIN), Inches(y), Inches(13.333 - 2 * MARGIN), Inches(0.75))
            tf = cbox.text_frame
            tf.word_wrap = True
            p = tf.paragraphs[0]
            p.text = ("• " + item) if not item.startswith("•") else item
            apply_body_font(p, body_font)
            p.font.color.rgb = TEXT_BODY
            y += 0.7
        y += 0.2
    return slide


def gen_phonon_comparison_img():
    """生成声子传输对比图：左灰色混乱散射，右蓝色平滑有序"""
    if not HAS_MATPLOTLIB:
        return None
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(4, 2))
    np.random.seed(42)
    # 左：传统界面，混乱散射
    for _ in range(25):
        x, y = np.random.rand(2) * 0.8 + 0.1
        dx, dy = (np.random.rand(2) - 0.5) * 0.4
        ax1.arrow(x, y, dx, dy, head_width=0.04, head_length=0.03, fc='#94a3b8', ec='#64748b', lw=0.8)
    ax1.set_xlim(0, 1)
    ax1.set_ylim(0, 1)
    ax1.set_aspect('equal')
    ax1.axis('off')
    ax1.set_title('传统界面', fontsize=9, color='#64748b')
    # 右：ToSpike，平滑有序
    for i in range(8):
        y = 0.2 + i * 0.1
        ax2.arrow(0.15, y, 0.7, 0, head_width=0.02, head_length=0.05, fc='#00b4d8', ec='#0e74c6', lw=1.2)
    ax2.set_xlim(0, 1)
    ax2.set_ylim(0, 1)
    ax2.set_aspect('equal')
    ax2.axis('off')
    ax2.set_title('ToSpike共价键合', fontsize=9, color='#00b4d8')
    plt.tight_layout()
    path = os.path.join(tempfile.gettempdir(), 'tospike_phonon.png')
    fig.savefig(path, dpi=150, bbox_inches='tight', facecolor='white')
    plt.close()
    return path


def gen_radar_chart_img():
    """五维雷达图：导热性、减重、可靠性、工艺成本、CTE匹配度"""
    if not HAS_MATPLOTLIB:
        return None
    categories = ['导热性', '减重', '可靠性', '工艺成本', 'CTE匹配度']
    N = len(categories)
    angles = [n / float(N) * 2 * np.pi for n in range(N)]
    angles += angles[:1]
    # ToSpike全碳：五维全满（工艺成本标注中试阶段可控，不夸大，取75）
    tospike = [95, 95, 95, 75, 95]  # 工艺成本75
    tospike += tospike[:1]
    # 金刚石铜：导热性高，其他低
    diamond_cu = [85, 30, 40, 60, 35]
    diamond_cu += diamond_cu[:1]
    # 金刚石碳化硅：各项中等
    diamond_sic = [65, 55, 50, 55, 50]
    diamond_sic += diamond_sic[:1]
    fig, ax = plt.subplots(figsize=(3.5, 3.5), subplot_kw=dict(projection='polar'))
    ax.plot(angles, tospike, 'o-', linewidth=2, color='#007AFF', label='ToSpike全碳')
    ax.fill(angles, tospike, alpha=0.25, color='#007AFF')
    ax.plot(angles, diamond_cu, 'o-', linewidth=1.5, color='#64748b', label='金刚石铜')
    ax.fill(angles, diamond_cu, alpha=0.15, color='#94a3b8')
    ax.plot(angles, diamond_sic, 'o-', linewidth=1.5, color='#94a3b8', label='金刚石碳化硅')
    ax.fill(angles, diamond_sic, alpha=0.1, color='#cbd5e1')
    ax.set_xticks(angles[:-1])
    ax.set_xticklabels(categories, fontsize=7)
    ax.set_ylim(0, 100)
    ax.legend(loc='upper right', bbox_to_anchor=(1.25, 1.05), fontsize=6)
    plt.tight_layout()
    path = os.path.join(tempfile.gettempdir(), 'tospike_radar.png')
    fig.savefig(path, dpi=150, bbox_inches='tight', facecolor='white')
    plt.close()
    return path


def set_mono_font(p_or_run, size=10):
    """技术参数使用等宽字体，数字类用 Arial"""
    f = p_or_run.font if hasattr(p_or_run, 'font') else p_or_run
    try:
        f.name = FONT_NUM  # 数字用 Arial
    except Exception:
        try:
            f.name = FONT_MONO
        except Exception:
            pass
    if hasattr(p_or_run, 'font') and hasattr(p_or_run.font, 'size'):
        p_or_run.font.size = Pt(size)


def add_rect_card(slide, left, top, width, height, fill_color=WATERMARK, no_line=False):
    """添加圆角矩形卡片背景"""
    shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE,
        Inches(left), Inches(top), Inches(width), Inches(height))
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill_color
    if no_line:
        shape.line.width = Pt(0)
    else:
        shape.line.color.rgb = LINE_COLOR
        shape.line.width = Pt(0.5)
    shape.adjustments[0] = 0.03
    return shape


def add_cover_slide(prs):
    """封面：深灰背景核心页"""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, BG_DARK)
    add_pdf_header_footer(slide, is_dark=True)
    # 主标题（思源黑体 Bold 32pt）
    title = slide.shapes.add_textbox(Inches(MARGIN), Inches(2.2), Inches(13.333 - 2 * MARGIN), Inches(1.2))
    tf = title.text_frame
    p = tf.paragraphs[0]
    p.text = "簇锋科技 | ToSpike：sp²–sp³碳基界面工程平台"
    apply_title_font(p, 32)
    p.font.color.rgb = TEXT_ON_DARK
    p.alignment = PP_ALIGN.CENTER
    # 副标题（亮蓝高亮）
    sub = slide.shapes.add_textbox(Inches(MARGIN), Inches(3.5), Inches(13.333 - 2 * MARGIN), Inches(0.7))
    tf = sub.text_frame
    p = tf.paragraphs[0]
    p.text = "Pre-A轮融资 | 800-1000万 | 10项发明专利"
    apply_body_font(p, 22)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p.alignment = PP_ALIGN.CENTER
    # 底部
    foot = slide.shapes.add_textbox(Inches(MARGIN), Inches(5.2), Inches(13.333 - 2 * MARGIN), Inches(0.5))
    tf = foot.text_frame
    p = tf.paragraphs[0]
    p.text = "座落于南京江北新区"
    apply_body_font(p, 12)
    p.font.color.rgb = RGBColor(0x99, 0x99, 0x99)
    p.alignment = PP_ALIGN.CENTER
    return slide


def add_slide_opening(prs):
    """开场页：算力革命的隐形瓶颈——散热（核心页深灰背景）"""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, BG_DARK)
    add_pdf_header_footer(slide, is_dark=True)
    add_title_box(slide, "算力革命的隐形瓶颈——散热", font_size=32, is_dark=True)
    add_line(slide, MARGIN, 1.65, 13.333 - MARGIN, 1.65)
    add_line(slide, 6.5, 1.8, 6.5, 6.2)
    # 左侧：芯片功耗密度趋势图占位（深色页用深色卡片）
    add_rect_card(slide, MARGIN, 1.9, 5.5, 2.2, fill_color=RGBColor(0x3d, 0x3d, 0x3d))
    left_ph = slide.shapes.add_textbox(Inches(MARGIN + 0.15), Inches(2.0), Inches(5.2), Inches(2.0))
    tf = left_ph.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "芯片功耗密度趋势"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p2 = tf.add_paragraph()
    p2.text = "100 W/cm² → 1000+ W/cm²（持续攀升）"
    p2.font.size = Pt(12)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(6)
    p3 = tf.add_paragraph()
    p3.text = "【插入：功耗密度随代际增长曲线图】"
    p3.font.size = Pt(10)
    p3.font.italic = True
    p3.font.color.rgb = TEXT_MUTED
    p3.space_before = Pt(8)
    # 右侧：传统散热材料性能停滞图占位
    add_rect_card(slide, 6.7, 1.9, 5.5, 2.2, fill_color=RGBColor(0x3d, 0x3d, 0x3d))
    right_ph = slide.shapes.add_textbox(Inches(6.85), Inches(2.0), Inches(5.2), Inches(2.0))
    tf = right_ph.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "传统散热材料性能停滞"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = TEXT_MUTED
    p2 = tf.add_paragraph()
    p2.text = "铜、铝、金刚石铜——热导率长期徘徊"
    p2.font.size = Pt(12)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(6)
    p3 = tf.add_paragraph()
    p3.text = "【插入：铜/铝/金刚石铜热导率对比图】"
    p3.font.size = Pt(10)
    p3.font.italic = True
    p3.font.color.rgb = TEXT_MUTED
    p3.space_before = Pt(8)
    # 中间核心文案
    add_rect_card(slide, MARGIN, 4.3, 13.333 - 2 * MARGIN, 1.4, fill_color=RGBColor(0x1a, 0x4d, 0x7a))
    center = slide.shapes.add_textbox(Inches(MARGIN + 0.15), Inches(4.45), Inches(13.333 - 2 * MARGIN - 0.3), Inches(1.1))
    tf = center.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "传统材料已到物理极限，簇锋用原子级界面工程打破这堵墙"
    p.font.size = Pt(18)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p.alignment = PP_ALIGN.CENTER
    return slide


def add_slide_1_company(prs):
    """第一部分：公司概况——三视觉卡片（面向投资人）"""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, BG_LIGHT)
    add_pdf_header_footer(slide)
    add_title_box(slide, "簇锋科技 | ToSpike：公司概况")
    add_line(slide, 0.8, 1.65, 12.5, 1.65)
    # 卡片1：技术定位
    add_rect_card(slide, 0.8, 1.85, 3.8, 2.6)
    c1 = slide.shapes.add_textbox(Inches(0.95), Inches(1.95), Inches(3.5), Inches(2.4))
    tf = c1.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "技术定位"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p2 = tf.add_paragraph()
    p2.text = "sp²–sp³ 原子级共价键合平台，从物理混合到化学焊接。依托活性熔固工艺，构建从金刚石工具到全碳复合材料的完整技术链路。"
    p2.font.size = Pt(10)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(6)
    # 卡片2：核心资产
    add_rect_card(slide, 4.8, 1.85, 3.8, 2.6)
    c2 = slide.shapes.add_textbox(Inches(4.95), Inches(1.95), Inches(3.5), Inches(2.4))
    tf = c2.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "核心资产"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p2 = tf.add_paragraph()
    p2.text = "10 项发明专利"
    p2.font.size = Pt(12)
    p2.font.bold = True
    p2.font.color.rgb = ACCENT_HIGHLIGHT
    p2.space_before = Pt(6)
    p3 = tf.add_paragraph()
    p3.text = "体视热导率 ≥680 W/m·K  ·  可交付样品"
    p3.font.size = Pt(11)
    p3.font.bold = True
    p3.font.color.rgb = ACCENT_HIGHLIGHT
    set_mono_font(p3, 11)
    p3.space_before = Pt(4)
    p4 = tf.add_paragraph()
    p4.text = "金刚石铜复合材料、柔性垫片、全碳平台均有样品"
    p4.font.size = Pt(9)
    p4.font.color.rgb = TEXT_BODY
    p4.space_before = Pt(2)
    # 卡片3：目标市场
    add_rect_card(slide, 8.8, 1.85, 3.8, 2.6)
    c3 = slide.shapes.add_textbox(Inches(8.95), Inches(1.95), Inches(3.5), Inches(2.4))
    tf = c3.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "目标市场"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p2 = tf.add_paragraph()
    p2.text = "AI 芯片、功率半导体、固态电池、消费电子"
    p2.font.size = Pt(11)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(6)
    # 底部补充
    foot = slide.shapes.add_textbox(Inches(0.8), Inches(4.7), Inches(11.7), Inches(1.8))
    tf = foot.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "企业愿景"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = ACCENT_BLUE
    p2 = tf.add_paragraph()
    p2.text = "致力于成为客户理想的方案解决商，通过持续技术创新，为高功率密度热管理、新能源、固态电池等前沿领域提供突破性材料解决方案。"
    p2.font.size = Pt(10)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(4)
    return slide


def add_slide_2_stages(prs):
    """第二部分第1页：技术深化路径（四阶段演化）"""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, BG_LIGHT)
    add_pdf_header_footer(slide)
    add_title_box(slide, "从工程工具到物理平台——一条清晰的演化曲线")
    add_line(slide, 0.8, 1.65, 12.5, 1.65)
    stages = [
        ("Stage 01 - 起点（工程工具）", "精密活性熔固钻石工具，建立极端工况下的界面连接与结构稳定性能力。"),
        ("Stage 02 - 跃迁（功能材料）", "金刚石-铜复合散热基底，实现从工程工具向功能材料的跃迁。"),
        ("Stage 03 - 平台（全碳体系）", "全碳复合功能材料，构建完全由碳体系组成的复合材料平台，引入内生应力调控。"),
        ("Stage 04 - 平台延展", "固态电池骨架、先进封装散热、前沿探索（合作研究阶段）。"),
    ]
    y = 1.9
    for stitle, sdesc in stages:
        box = slide.shapes.add_textbox(Inches(0.8), Inches(y), Inches(11.7), Inches(0.9))
        tf = box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = stitle
        p.font.size = Pt(13)
        p.font.bold = True
        p.font.color.rgb = ACCENT_BLUE
        p2 = tf.add_paragraph()
        p2.text = sdesc
        p2.font.size = Pt(11)
        p2.font.color.rgb = TEXT_BODY
        p2.space_before = Pt(2)
        if y > 1.9:
            add_line(slide, 0.8, y - 0.05, 12.5, y - 0.05)
        y += 1.1
    return slide


def add_slide_3_principle(prs):
    """核心技术原理页（最关键一页）：三点呈现 + 原子级共价桥接示意图"""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, BG_LIGHT)
    add_pdf_header_footer(slide, "CORE\nPRINCIPLE")
    add_title_box(slide, "sp²–sp³原子级共价键合：从物理混合到化学焊接", font_size=20)
    add_line(slide, 0.8, 1.65, 12.5, 1.65)
    add_line(slide, 5.2, 1.8, 5.2, 6.2)
    # 左侧：声子传输对比图（传统界面 vs ToSpike）
    add_rect_card(slide, 0.8, 1.9, 4.2, 2.5)
    phonon_path = gen_phonon_comparison_img()
    if phonon_path and os.path.exists(phonon_path):
        slide.shapes.add_picture(phonon_path, Inches(0.9), Inches(1.95), Inches(4.0), Inches(2.2))
    else:
        left_ph = slide.shapes.add_textbox(Inches(0.95), Inches(2.1), Inches(1.9), Inches(0.5))
        tf = left_ph.text_frame
        p = tf.paragraphs[0]
        p.text = "传统界面，声子散射严重"
        p.font.size = Pt(9)
        p.font.color.rgb = TEXT_MUTED
        right_ph = slide.shapes.add_textbox(Inches(2.95), Inches(2.1), Inches(1.9), Inches(0.5))
        tf = right_ph.text_frame
        p = tf.paragraphs[0]
        p.text = "ToSpike共价键合，声子高速公路"
        p.font.size = Pt(9)
        p.font.color.rgb = ACCENT_HIGHLIGHT
    cap = slide.shapes.add_textbox(Inches(0.95), Inches(4.25), Inches(3.9), Inches(0.35))
    tf = cap.text_frame
    p = tf.paragraphs[0]
    p.text = "声子传输效率从 40-60% 提升至 >90%"
    p.font.size = Pt(10)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p.alignment = PP_ALIGN.CENTER
    # 右侧：三点核心
    points = [
        ("① 区别于传统物理混合", "声子传输效率 > 90%，极低界面热阻。传统金刚石-铜仅 40%-60%。"),
        ("② 可调控参数空间", "sp²/sp³ 比例、温度、压力三者实现材料性能精准定制。"),
        ("③ 平台化能力", "同一套界面技术衍生多款产品：AI芯片散热垫片、固态电池骨架、金刚石厨具等。"),
    ]
    y = 1.9
    for h, c in points:
        hbox = slide.shapes.add_textbox(Inches(5.4), Inches(y), Inches(6.9), Inches(0.45))
        tf = hbox.text_frame
        p = tf.paragraphs[0]
        p.text = h
        p.font.size = Pt(12)
        p.font.bold = True
        p.font.color.rgb = ACCENT_HIGHLIGHT
        y += 0.5
        cbox = slide.shapes.add_textbox(Inches(5.4), Inches(y), Inches(6.9), Inches(0.9))
        tf = cbox.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = c
        p.font.size = Pt(10)
        p.font.color.rgb = TEXT_BODY
        y += 1.05
        if h != points[-1][0]:
            add_line(slide, 5.4, y - 0.05, 12.5, y - 0.05)
        y += 0.15
    return slide


def add_slide_4_tech_compare(prs):
    """技术对比：无框表格 + 簇锋方案列蓝色高亮 + 雷达图"""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, BG_LIGHT)
    add_pdf_header_footer(slide)
    add_title_box(slide, "全碳复合材料 vs. 现有方案：性能代差与成本优势", font_size=32)
    add_line(slide, MARGIN, 1.7, 13.333 - MARGIN, 1.7)
    # 无框表格（移除表格线，簇锋方案列蓝色高亮）
    rows = [
        ["维度", "金刚石-铜", "金刚石-碳化硅", "簇锋方案"],
        ["界面结合力", "物理浸润/微机械嵌合", "反应烧结(脆性)", "同质化共价键合界面(强韧)"],
        ["声子输运效率", "40%-60%", "60%-75%", ">90%"],
        ["热导率 (TC)", "450-600 W/m·K", "500-700 W/m·K", "800-1200+ W/m·K"],
        ["密度", "~7.8(极重)", "~3.2(中等)", "~2.0(超轻)"],
        ["比导热系数 (TC/ρ)", "~60-77", "~156-219", "~400-600"],
        ["可靠性", "易永久变形", "易脆性断裂", "高模量+韧性骨架"],
    ]
    col_w = [1.8, 2.6, 2.6, 3.5]
    rh = 0.4
    sy, sx = 1.9, MARGIN
    for ri, row in enumerate(rows):
        for ci, cell in enumerate(row):
            if ci >= len(col_w):
                break
            x = sx + sum(col_w[:ci])
            # 簇锋方案列（ci==3）加浅蓝背景
            if ci == 3:
                add_rect_card(slide, x, sy + ri * rh, col_w[ci], rh, fill_color=RGBColor(0xe8, 0xf4, 0xfd), no_line=True)
            box = slide.shapes.add_textbox(Inches(x + 0.05), Inches(sy + ri * rh + 0.05), Inches(col_w[ci] - 0.1), Inches(rh - 0.08))
            tf = box.text_frame
            tf.word_wrap = True
            p = tf.paragraphs[0]
            p.text = cell
            apply_body_font(p, 12)
            if ri == 0:
                p.font.bold = True
                p.font.color.rgb = ACCENT_BLUE if ci == 3 else TEXT_DARK
            elif (ri == 2 or ri == 3 or ri == 5) and ci == 3:
                p.font.bold = True
                p.font.color.rgb = ACCENT_HIGHLIGHT
                set_mono_font(p, 12)
            elif ri == 3 or ri == 5 or (ri == 2 and ci >= 1):
                set_mono_font(p, 12)
            elif ci == 3:
                p.font.color.rgb = ACCENT_HIGHLIGHT
            else:
                p.font.color.rgb = TEXT_BODY if ci > 0 else TEXT_MUTED
    # CTE 对比模块（无框）
    cte_rows = [
        ["材料", "CTE (×10⁻⁶/K)", "与芯片匹配度"],
        ["硅芯片", "2.6", "—"],
        ["传统金刚石铜", "6.5-8.0", "不匹配，易开裂"],
        ["ToSpike全碳", "3.0-4.5（可调控）", "完美匹配，消除热应力"],
    ]
    cw = [2.0, 2.8, 1.8]
    ch = 0.32
    cy, cx = 4.5, 0.8
    for ri, row in enumerate(cte_rows):
        for ci, cell in enumerate(row):
            if ci >= len(cw):
                break
            x = cx + sum(cw[:ci])
            box = slide.shapes.add_textbox(Inches(x), Inches(cy + ri * ch), Inches(cw[ci] - 0.04), Inches(ch - 0.03))
            tf = box.text_frame
            tf.word_wrap = True
            p = tf.paragraphs[0]
            p.text = cell
            p.font.size = Pt(10)
            if ri == 0:
                p.font.bold = True
                p.font.color.rgb = ACCENT_BLUE
            elif ri == 3 and ci > 0:
                p.font.bold = True
                p.font.color.rgb = ACCENT_HIGHLIGHT
            else:
                p.font.color.rgb = TEXT_BODY if ci > 0 else TEXT_MUTED
    cte_note = slide.shapes.add_textbox(Inches(0.8), Inches(5.8), Inches(5.6), Inches(0.45))
    tf = cte_note.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "通过内生应力调控，实现CTE与芯片的原子级匹配，从根本上解决热疲劳失效问题。"
    p.font.size = Pt(9)
    p.font.italic = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    # 壁垒与成本总结
    sum_box = slide.shapes.add_textbox(Inches(0.8), Inches(6.35), Inches(5.6), Inches(0.5))
    tf = sum_box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "壁垒：原子级共价键合工艺 + 10 项专利全链条覆盖，竞争对手难以绕过。"
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p2 = tf.add_paragraph()
    p2.text = "成本：全碳体系原料成本可控，中试线建成后具备规模化降本空间。"
    p2.font.size = Pt(10)
    p2.font.bold = True
    p2.font.color.rgb = ACCENT_HIGHLIGHT
    p2.space_before = Pt(2)
    # 五维雷达图：导热性、减重、可靠性、工艺成本、CTE匹配度
    add_rect_card(slide, 6.6, 4.5, 5.5, 2.7)
    radar_path = gen_radar_chart_img()
    if radar_path and os.path.exists(radar_path):
        slide.shapes.add_picture(radar_path, Inches(6.75), Inches(4.55), Inches(5.2), Inches(2.5))
    rad_cap = slide.shapes.add_textbox(Inches(6.75), Inches(7.08), Inches(5.2), Inches(0.3))
    tf = rad_cap.text_frame
    p = tf.paragraphs[0]
    p.text = "ToSpike全碳方案五维全面领先（工艺成本：中试阶段可控）"
    p.font.size = Pt(9)
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p.alignment = PP_ALIGN.CENTER
    return slide


def add_slide_5_patent(prs):
    """第三部分：四层护城河矩阵（从清单到矩阵图示）"""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, BG_LIGHT)
    add_pdf_header_footer(slide, "CORE\nPATENT")
    add_title_box(slide, "四层护城河矩阵：全链条 IP 覆盖，确保技术不可逾越")
    add_line(slide, 0.8, 1.65, 12.5, 1.65)
    # 四象限网格线
    cx, cy = 6.5, 4.0  # 中心
    add_line(slide, cx, 1.8, cx, 6.2)
    add_line(slide, 0.8, cy, 12.5, cy)
    # 象限1：底层物理（左上）— 标注专利数量
    q1 = slide.shapes.add_textbox(Inches(0.9), Inches(1.9), Inches(5.4), Inches(2.0))
    tf = q1.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "① 底层物理（2项）"
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p2 = tf.add_paragraph()
    p2.text = "sp²–sp³ 键合原理专利"
    p2.font.size = Pt(10)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(4)
    p3 = tf.add_paragraph()
    p3.text = "化学键合内生应力复合材料及制备方法——底层专利定义物理边界"
    p3.font.size = Pt(9)
    p3.font.color.rgb = TEXT_MUTED
    p3.space_before = Pt(2)
    # 象限2：核心制备（右上）
    q2 = slide.shapes.add_textbox(Inches(6.7), Inches(1.9), Inches(5.4), Inches(2.0))
    tf = q2.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "② 核心制备（3项）"
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p2 = tf.add_paragraph()
    p2.text = "活性熔固、原位石墨化"
    p2.font.size = Pt(10)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(4)
    p3 = tf.add_paragraph()
    p3.text = "金刚石铜复合材料、原位低温石墨化键合、低温催化键合三维碳骨架——核心制备工艺护城河"
    p3.font.size = Pt(9)
    p3.font.color.rgb = TEXT_MUTED
    p3.space_before = Pt(2)
    # 象限3：战略产品（左下）
    q3 = slide.shapes.add_textbox(Inches(0.9), Inches(4.2), Inches(5.4), Inches(1.9))
    tf = q3.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "③ 战略产品（3项）"
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p2 = tf.add_paragraph()
    p2.text = "AI 散热垫片、固态电池骨架"
    p2.font.size = Pt(10)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(4)
    p3 = tf.add_paragraph()
    p3.text = "柔性高导热复合材料、高模量多孔碳宿主、一体化全固态电池——战略产品卡位"
    p3.font.size = Pt(9)
    p3.font.color.rgb = TEXT_MUTED
    p3.space_before = Pt(2)
    # 象限4：民用验证（右下）
    q4 = slide.shapes.add_textbox(Inches(6.7), Inches(4.2), Inches(5.4), Inches(1.9))
    tf = q4.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "④ 民用验证（2项）"
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p2 = tf.add_paragraph()
    p2.text = "金刚石固着厨具"
    p2.font.size = Pt(10)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(4)
    p3 = tf.add_paragraph()
    p3.text = "基于钻石固着的新型不粘锅具——民用专利验证固着强度，打开消费市场"
    p3.font.size = Pt(9)
    p3.font.color.rgb = TEXT_MUTED
    p3.space_before = Pt(2)
    # 底部强调
    foot = slide.shapes.add_textbox(Inches(0.8), Inches(6.25), Inches(11.7), Inches(0.5))
    tf = foot.text_frame
    p = tf.paragraphs[0]
    p.text = "全链条 IP 保护，竞争对手难以绕过 · 10 项核心发明专利"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p.alignment = PP_ALIGN.CENTER
    return slide


def add_slide_5_market_a(prs):
    """AI芯片热管理方案：市场数据 + 客户验证 + 系统级协同示意图"""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, BG_LIGHT)
    add_pdf_header_footer(slide)
    add_title_box(slide, "高性能计算与数据中心：AI 芯片热管理方案", font_size=20)
    add_line(slide, 0.8, 1.65, 12.5, 1.65)
    add_line(slide, 5.5, 1.8, 5.5, 6.2)
    # 左侧：芯片→基板→散热器全链路热管理示意图（标注各环节材料）
    add_rect_card(slide, 0.8, 1.9, 4.5, 2.5)
    # 三个环节框
    boxes = [
        (1.0, 2.1, 1.1, 0.5, "芯片", "Si/封装"),
        (2.3, 2.1, 1.1, 0.5, "基板", "金刚石铜\n全碳复合材料"),
        (3.6, 2.1, 1.1, 0.5, "散热器", "铝/铜+鳍片"),
    ]
    for x, y, w, h, title, mat in boxes:
        shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x), Inches(y), Inches(w), Inches(h))
        shape.fill.solid()
        shape.fill.fore_color.rgb = WATERMARK
        shape.line.color.rgb = ACCENT_BLUE
        shape.line.width = Pt(0.5)
        tf = shape.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = title + "\n" + mat
        p.font.size = Pt(8)
        p.font.color.rgb = TEXT_DARK
        p.alignment = PP_ALIGN.CENTER
    # 箭头（芯片→基板→散热器）
    for (x1, y1, x2, y2) in [(2.1, 2.35, 2.3, 2.35), (3.4, 2.35, 3.6, 2.35)]:
        conn = slide.shapes.add_connector(MSO_CONNECTOR_TYPE.STRAIGHT, Inches(x1), Inches(y1), Inches(x2), Inches(y2))
        conn.line.color.rgb = ACCENT_HIGHLIGHT
        conn.line.width = Pt(1)
    # 热流标注
    flow = slide.shapes.add_textbox(Inches(1.5), Inches(2.7), Inches(2.0), Inches(0.4))
    tf = flow.text_frame
    p = tf.paragraphs[0]
    p.text = "热流 → TIM垫片 →"
    p.font.size = Pt(8)
    p.font.color.rgb = TEXT_MUTED
    p.alignment = PP_ALIGN.CENTER
    # 右侧：市场数据 + 方案 + 客户验证（压缩高度以留出客户收益表空间）
    right = slide.shapes.add_textbox(Inches(5.7), Inches(1.9), Inches(6.6), Inches(2.4))
    tf = right.text_frame
    tf.word_wrap = True
    blocks = [
        ("市场数据（Yole/IDC）", "先进封装热管理市场快速增长；AI 芯片功率密度持续攀升，散热成为关键瓶颈。"),
        ("方案核心", "几何耦合 + 高通量均热 + 系统级协同。3D 共形封装贴合异形芯片，TC ≥ 680 W/m·K。"),
        ("客户验证进展", "计划 Q3 完成柔性垫片工程样件，送测 AI 芯片厂商。"),
    ]
    y_off = 0
    for h, c in blocks:
        p = tf.paragraphs[0] if y_off == 0 else tf.add_paragraph()
        p.text = h
        p.font.size = Pt(12)
        p.font.bold = True
        p.font.color.rgb = ACCENT_HIGHLIGHT
        if y_off > 0:
            p.space_before = Pt(12)
        p2 = tf.add_paragraph()
        p2.text = c
        p2.font.size = Pt(10)
        p2.font.color.rgb = TEXT_BODY
        p2.space_before = Pt(4)
        y_off += 1
    p3 = tf.add_paragraph()
    p3.text = "应用场景：AI 芯片、工业激光器、超算中心、IGBT 模块、5G 基站、相控阵雷达。"
    p3.font.size = Pt(9)
    p3.font.color.rgb = TEXT_MUTED
    p3.space_before = Pt(8)
    # 客户收益对比表（全宽，位于页面下方）
    add_line(slide, 0.8, 4.4, 12.5, 4.4)
    benefit_rows = [
        ["指标", "传统方案", "ToSpike方案", "客户收益"],
        ["芯片结温", "95℃", "83℃", "降低12℃"],
        ["散热器体积", "100%", "70%", "减重30%"],
        ["界面热阻", "0.15 K/W", "0.09 K/W", "降低40%"],
    ]
    bw, bh = [2.2, 2.8, 2.8, 3.2], 0.42
    by, bx = 4.5, 0.8
    for ri, row in enumerate(benefit_rows):
        if ri > 0:
            add_line(slide, bx, by + ri * bh - 0.02, bx + sum(bw), by + ri * bh - 0.02)
        for ci, cell in enumerate(row):
            if ci >= len(bw):
                break
            x = bx + sum(bw[:ci])
            box = slide.shapes.add_textbox(Inches(x), Inches(by + ri * bh), Inches(bw[ci] - 0.05), Inches(bh - 0.04))
            tf = box.text_frame
            tf.word_wrap = True
            p = tf.paragraphs[0]
            p.text = cell
            p.font.size = Pt(11)
            if ri == 0:
                p.font.bold = True
                p.font.color.rgb = ACCENT_BLUE
            elif ci == 3 and ri > 0:  # 客户收益列高亮（降低12℃、减重30%、降低40%）
                p.font.bold = True
                p.font.color.rgb = ACCENT_HIGHLIGHT
                set_mono_font(p, 11)
            else:
                p.font.color.rgb = TEXT_BODY if ci > 0 else TEXT_MUTED
    return slide


def add_slide_7_roadmap(prs):
    """第五部分：三级火箭模式——产品与项目进展"""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, BG_LIGHT)
    add_pdf_header_footer(slide, "CURRENT\nPROGRESS")
    add_title_box(slide, "三级火箭模式——从落地产品到未来布局")
    add_line(slide, 0.8, 1.65, 12.5, 1.65)
    rows = [
        ["层次", "产品/项目", "定位", "当前进展与2026年目标", "投资看点"],
        ["P0（商业化起步）", "大功率无线充电线圈", "现金流，练团队", "已有合同，Q2交付回款，建立SOP。", "保生存"],
        ["", "金刚石铜复合材料", "核心主业，立品牌", "样件已完成，TC≥680，计划Q2获取TC>1000第三方认证，送样头部客户。", ""],
        ["P1（战略卡位）", "柔性高导热垫片", "AI散热主战场", "已申请专利，Q3工程样件，送测AI芯片厂商。", "定估值"],
        ["", "全碳复合材料", "下一代平台", "已申请核心专利，计划提交PCT申请。", ""],
        ["", "金刚石涂层不粘锅", "跨界变现样板间", "已申请2项专利，Q4签署品牌联名协议。", ""],
        ["P2（未来储备）", "固态电池骨架材料", "新能源门票", "已申请2项专利，计划完成模量>30 GPa数据验证。", "筑护城河"],
        ["", "水处理电极粒子", "远期探索", "维持专利，暂不投入。", ""],
    ]
    col_w = [1.1, 2.2, 1.5, 4.2, 1.2]
    rh = 0.45
    sy, sx = 1.75, 0.8
    for ri, row in enumerate(rows):
        if ri > 0:
            add_line(slide, sx, sy + ri * rh - 0.02, sx + sum(col_w), sy + ri * rh - 0.02)
        for ci, cell in enumerate(row):
            if ci >= len(col_w):
                break
            x = sx + sum(col_w[:ci])
            box = slide.shapes.add_textbox(Inches(x), Inches(sy + ri * rh), Inches(col_w[ci] - 0.06), Inches(rh - 0.04))
            tf = box.text_frame
            tf.word_wrap = True
            p = tf.paragraphs[0]
            p.text = cell
            p.font.size = Pt(10)
            if ri == 0:
                p.font.bold = True
                p.font.color.rgb = ACCENT_BLUE
            elif ci == 4 and cell and cell in ("保生存", "定估值", "筑护城河"):
                p.font.bold = True
                p.font.color.rgb = ACCENT_HIGHLIGHT
            else:
                p.font.color.rgb = TEXT_BODY if ci > 0 else TEXT_MUTED
    # 底部总结
    foot = slide.shapes.add_textbox(Inches(0.8), Inches(5.5), Inches(11.7), Inches(0.5))
    tf = foot.text_frame
    p = tf.paragraphs[0]
    p.text = "三级火箭模式：P0 保生存，P1 定估值，P2 筑护城河"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p.alignment = PP_ALIGN.CENTER
    return slide


def add_slide_8_team(prs):
    """团队与治理：29项专利/17年军工经验加粗 + 治理机制卡片 + 团队合影占位"""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, BG_LIGHT)
    add_pdf_header_footer(slide)
    add_title_box(slide, "专业互补的铁三角，清晰稳固的治理结构")
    add_line(slide, 0.8, 1.65, 12.5, 1.65)
    add_line(slide, 6.8, 1.8, 6.8, 6.2)
    # 左侧：核心团队（关键数据加粗）
    team_items = [
        ("王波（技术研发与应用负责人）", "工学博士，累计申请并获得授权发明专利及实用新型专利达 ", "29 项", "。擅长针对钛合金、镍基高温合金、碳化硅及 CFRP 等极端工况，通过 sp²–sp³ 界面参数的深度匹配提供定制化方案。"),
        ("何军（工程设计与结构负责人）", "机械工程硕士，高级工程师，", "17 年以上军工电子设备研发经验", "。擅长复杂电子设备的结构-热耦合一体化设计，具备从系统方案到工程实现的全链路能力。"),
        ("张工（应用工程与现场支持负责人）", "资深金刚石工具应用专家，深耕超硬磨料磨具及材料切削机理。擅长攻克复杂工业磨削难题，致力于高端新能源载具装配工具的创新应用与市场推广。", None, None),
    ]
    y = 1.9
    for name_role, pre, bold_part, post in team_items:
        nbox = slide.shapes.add_textbox(Inches(0.8), Inches(y), Inches(5.8), Inches(0.35))
        tf = nbox.text_frame
        p = tf.paragraphs[0]
        p.text = name_role
        p.font.size = Pt(11)
        p.font.bold = True
        p.font.color.rgb = ACCENT_HIGHLIGHT
        y += 0.42
        cbox = slide.shapes.add_textbox(Inches(0.8), Inches(y), Inches(5.8), Inches(0.9))
        tf = cbox.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        if bold_part:
            p.clear()
            r1 = p.add_run()
            r1.text = pre
            r1.font.size = Pt(10)
            r1.font.color.rgb = TEXT_BODY
            r2 = p.add_run()
            r2.text = bold_part
            r2.font.bold = True
            r2.font.size = Pt(10)
            r2.font.color.rgb = ACCENT_HIGHLIGHT
            r3 = p.add_run()
            r3.text = post or ""
            r3.font.size = Pt(10)
            r3.font.color.rgb = TEXT_BODY
        else:
            p.text = pre
            p.font.size = Pt(10)
            p.font.color.rgb = TEXT_BODY
        y += 1.0
    # 右侧：治理机制卡片 + 团队合影占位
    add_rect_card(slide, 7.0, 1.9, 5.2, 2.2)
    gov = slide.shapes.add_textbox(Inches(7.15), Inches(2.0), Inches(4.9), Inches(2.0))
    tf = gov.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "治理机制"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p2 = tf.add_paragraph()
    p2.text = "《创始合伙协议》：4年股权成熟期、分级回购、递延薪酬。"
    p2.font.size = Pt(9)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(4)
    p3 = tf.add_paragraph()
    p3.text = "《一致行动协议》：核心决策效率，创始团队稳固控制权。"
    p3.font.size = Pt(9)
    p3.font.color.rgb = TEXT_BODY
    p3.space_before = Pt(2)
    p4 = tf.add_paragraph()
    p4.text = "10 项核心专利布局"
    p4.font.size = Pt(10)
    p4.font.bold = True
    p4.font.color.rgb = ACCENT_HIGHLIGHT
    p4.space_before = Pt(4)
    add_rect_card(slide, 7.0, 4.3, 5.2, 1.8)
    ph = slide.shapes.add_textbox(Inches(7.15), Inches(4.7), Inches(4.9), Inches(1.2))
    tf = ph.text_frame
    p = tf.paragraphs[0]
    p.text = "【插入：团队合影】"
    p.font.size = Pt(11)
    p.font.italic = True
    p.font.color.rgb = TEXT_MUTED
    p.alignment = PP_ALIGN.CENTER
    return slide


def add_slide_9a_funding_overview(prs):
    """融资需求概览：估值逻辑 + 核心条款"""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, BG_LIGHT)
    add_pdf_header_footer(slide)
    add_title_box(slide, "融资需求——加速产品验证与平台布局")
    add_line(slide, 0.8, 1.65, 12.5, 1.65)
    # 三列卡片
    add_rect_card(slide, 0.8, 1.9, 3.8, 1.6)
    c1 = slide.shapes.add_textbox(Inches(0.95), Inches(2.0), Inches(3.5), Inches(1.35))
    tf = c1.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "融资金额"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p2 = tf.add_paragraph()
    p2.text = "800万 - 1000万人民币"
    p2.font.size = Pt(14)
    p2.font.bold = True
    p2.font.color.rgb = ACCENT_HIGHLIGHT
    p2.space_before = Pt(6)
    add_rect_card(slide, 4.8, 1.9, 3.8, 1.6)
    c2 = slide.shapes.add_textbox(Inches(4.95), Inches(2.0), Inches(3.5), Inches(1.35))
    tf = c2.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "出让股份"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p2 = tf.add_paragraph()
    p2.text = "10% - 12%（投后估值约8000万 - 1亿）"
    p2.font.size = Pt(12)
    p2.font.bold = True
    p2.font.color.rgb = ACCENT_HIGHLIGHT
    p2.space_before = Pt(6)
    add_rect_card(slide, 8.8, 1.9, 3.8, 1.6)
    c3 = slide.shapes.add_textbox(Inches(8.95), Inches(2.0), Inches(3.5), Inches(1.35))
    tf = c3.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "估值逻辑"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    p2 = tf.add_paragraph()
    p2.text = "对标一盛新材料等热管理材料企业"
    p2.font.size = Pt(10)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(6)
    # 核心逻辑
    logic = slide.shapes.add_textbox(Inches(0.8), Inches(3.7), Inches(11.7), Inches(1.2))
    tf = logic.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "核心逻辑"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = ACCENT_BLUE
    p2 = tf.add_paragraph()
    p2.text = "0→1 物理闭环已完成，本轮资金用于 1→10 标准化测试与 Tier-1 供应链准入准备（如 NVIDIA、华为）。"
    p2.font.size = Pt(11)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(4)
    return slide


def add_rect_red_box(slide, left, top, width, height):
    """红框：融资第一优先级等强调"""
    shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE,
        Inches(left), Inches(top), Inches(width), Inches(height))
    shape.fill.solid()
    shape.fill.fore_color.rgb = RGBColor(0xfe, 0xe2, 0xe2)  # 浅红底
    shape.line.color.rgb = ACCENT_RED
    shape.line.width = Pt(1.5)
    shape.adjustments[0] = 0.03
    return shape


def add_slide_9b_funding_details(prs):
    """资金用途与下一轮里程碑：400万拆细 + 红框标出第三方认证"""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, BG_LIGHT)
    add_pdf_header_footer(slide)
    add_title_box(slide, "资金用途与下一轮里程碑")
    add_line(slide, 0.8, 1.65, 12.5, 1.65)
    # 产品研发与验证（400万）拆细
    add_line(slide, 0.8, 1.9, 12.5, 1.9)
    h1 = slide.shapes.add_textbox(Inches(0.8), Inches(1.95), Inches(11.7), Inches(0.4))
    tf = h1.text_frame
    p = tf.paragraphs[0]
    p.text = "产品研发与验证（400万）"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = ACCENT_BLUE
    # 第三方权威认证（150万）——红框
    add_rect_red_box(slide, 0.8, 2.4, 11.7, 1.1)
    r1 = slide.shapes.add_textbox(Inches(0.95), Inches(2.5), Inches(11.4), Inches(0.9))
    tf = r1.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "第三方权威认证（150万）"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = ACCENT_RED
    p2 = tf.add_paragraph()
    p2.text = "融资后第一优先级投入，计划 Q2 完成 TC>1000 认证"
    p2.font.size = Pt(10)
    p2.font.italic = True
    p2.font.color.rgb = ACCENT_RED
    p2.space_before = Pt(4)
    # 中试线、工程样件
    items = [
        "中试线建设（200万）：高性能碳基复合材料中试生产线（Pilot Line）建设。",
        "工程样件送测（50万）：柔性垫片工程样件送测、固态电池骨架材料预研。",
    ]
    y = 3.6
    for item in items:
        box = slide.shapes.add_textbox(Inches(0.8), Inches(y), Inches(11.7), Inches(0.5))
        tf = box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = "• " + item
        p.font.size = Pt(11)
        p.font.color.rgb = TEXT_BODY
        y += 0.55
    # 其他用途
    add_line(slide, 0.8, 4.7, 12.5, 4.7)
    other = [
        "专利与IP布局（200万）：核心专利 PCT 国际申请、专利维护。",
        "团队建设与运营（300万）：核心团队薪酬（含递延薪酬清偿）、招聘研发人员、18 个月运营开支。",
        "市场与销售（100万）：行业展会、客户拜访、样品制作。",
    ]
    y = 4.75
    for item in other:
        box = slide.shapes.add_textbox(Inches(0.8), Inches(y), Inches(11.7), Inches(0.5))
        tf = box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = "• " + item
        p.font.size = Pt(11)
        p.font.color.rgb = TEXT_BODY
        y += 0.5
    # 下一轮里程碑
    add_line(slide, 0.8, 6.3, 12.5, 6.3)
    mh = slide.shapes.add_textbox(Inches(0.8), Inches(6.35), Inches(11.7), Inches(0.4))
    tf = mh.text_frame
    p = tf.paragraphs[0]
    p.text = "下一轮里程碑（Pre-A 轮）——做到什么，估值到多少"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = ACCENT_HIGHLIGHT
    m1 = slide.shapes.add_textbox(Inches(0.8), Inches(6.8), Inches(11.7), Inches(0.5))
    tf = m1.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "• 至少 1 款产品获得头部客户（AI 芯片/军工/新能源）验证意向 → 估值预期 1.5-2 亿。"
    p.font.size = Pt(11)
    p.font.color.rgb = TEXT_BODY
    p2 = tf.add_paragraph()
    p2.text = "• 完成核心技术的 PCT 国际专利布局。"
    p2.font.size = Pt(11)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(2)
    p3 = tf.add_paragraph()
    p3.text = "• 固态电池骨架材料完成实验室数据验证。"
    p3.font.size = Pt(11)
    p3.font.color.rgb = TEXT_BODY
    p3.space_before = Pt(2)
    return slide


# 合作愿景页专用色（深色背景 + 主色#00B4D8）
BG_VISION = RGBColor(0x0a, 0x0a, 0x0a)      # #0A0A0A
TEXT_VISION = RGBColor(0xf5, 0xf5, 0xf5)     # 浅灰白
ACCENT_VISION = RGBColor(0x00, 0xb4, 0xd8)   # #00B4D8
LINE_VISION = RGBColor(0x33, 0x33, 0x33)     # 浅色分隔线


def add_slide_vision_merged(prs):
    """合作愿景与核心理念（合并页）：深色背景，上2/3伙伴类型，下1/3核心理念"""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    set_slide_background(slide, BG_VISION)
    add_footer(slide, is_dark=True)
    # 标题：合作愿景与核心理念（32pt，#00B4D8）
    title_box = slide.shapes.add_textbox(Inches(MARGIN), Inches(0.6), Inches(13.333 - 2 * MARGIN), Inches(0.9))
    tf = title_box.text_frame
    p = tf.paragraphs[0]
    p.text = "合作愿景与核心理念"
    apply_title_font(p, 32)
    p.font.color.rgb = ACCENT_VISION
    p.alignment = PP_ALIGN.CENTER
    # 上部：我们寻找的伙伴（约占2/3，2x2网格）
    section_title = slide.shapes.add_textbox(Inches(MARGIN), Inches(1.6), Inches(11.2), Inches(0.6))
    tf = section_title.text_frame
    p = tf.paragraphs[0]
    p.text = "我们寻找的伙伴"
    apply_title_font(p, 24)
    p.font.color.rgb = ACCENT_VISION
    partners = [
        ("研究机构", "对界面物理、材料底层具有长期研究兴趣"),
        ("产业方", "愿意在应用场景中共同定义产品边界"),
        ("技术团队", "能够理解「平台价值」而非单点产品"),
        ("战略投资者", "关注中长期技术拐点、具备耐心与独立判断能力"),
    ]
    col_w = 5.4
    row_h = 1.4
    for i, (ptype, pdesc) in enumerate(partners):
        col, row = i % 2, i // 2
        x = MARGIN + col * (col_w + 0.4)
        y = 2.3 + row * row_h
        # 极简线条图标：小矩形块，主色#00B4D8
        icon_shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE,
            Inches(x), Inches(y), Inches(0.25), Inches(0.35))
        icon_shape.fill.solid()
        icon_shape.fill.fore_color.rgb = ACCENT_VISION
        icon_shape.line.width = Pt(0)
        # 内容
        content = slide.shapes.add_textbox(Inches(x + 0.35), Inches(y), Inches(col_w - 0.45), Inches(row_h - 0.1))
        tf = content.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = ptype
        apply_body_font(p, 24)
        p.font.bold = True
        p.font.color.rgb = TEXT_VISION
        try:
            p.paragraph_format.line_spacing = 1.4
        except Exception:
            pass
        p2 = tf.add_paragraph()
        p2.text = pdesc
        apply_body_font(p2, 20)  # 正文20pt
        p2.font.color.rgb = RGBColor(0xcc, 0xcc, 0xcc)
        p2.space_before = Pt(4)
        try:
            p2.paragraph_format.line_spacing = 1.4
        except Exception:
            pass
    # 分隔线（约在页面2/3处，7.5*2/3≈5.0）
    sep = slide.shapes.add_connector(MSO_CONNECTOR_TYPE.STRAIGHT,
        Inches(MARGIN), Inches(5.0), Inches(13.333 - MARGIN), Inches(5.0))
    sep.line.color.rgb = LINE_VISION
    sep.line.width = Pt(0.5)
    # 下部：核心理念（约占1/3）
    quote_box = slide.shapes.add_textbox(Inches(MARGIN + 0.5), Inches(5.3), Inches(12.2), Inches(1.2))
    tf = quote_box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "❝ 技术的真正价值，往往并不在它被命名的那一刻，而在它被理解之前，所保留的那段空间。 ❞"
    apply_body_font(p, 28)
    p.font.italic = True
    p.font.color.rgb = TEXT_VISION
    p.alignment = PP_ALIGN.CENTER
    try:
        p.paragraph_format.line_spacing = 1.4
    except Exception:
        pass
    sub_quote = slide.shapes.add_textbox(Inches(MARGIN), Inches(6.55), Inches(13.333 - 2 * MARGIN), Inches(0.55))
    tf = sub_quote.text_frame
    p = tf.paragraphs[0]
    p.text = "我们是一个不断演化的材料与物理平台，期待认知层面一致的伙伴。"
    apply_body_font(p, 18)
    p.font.color.rgb = RGBColor(0x99, 0x99, 0x99)
    p.alignment = PP_ALIGN.CENTER
    return slide


def main():
    prs = Presentation()
    prs.slide_width = SLIDE_WIDTH
    prs.slide_height = SLIDE_HEIGHT

    add_cover_slide(prs)
    add_slide_opening(prs)
    add_slide_1_company(prs)
    add_slide_2_stages(prs)
    add_slide_3_principle(prs)
    add_slide_4_tech_compare(prs)
    add_slide_5_patent(prs)
    add_slide_5_market_a(prs)
    add_slide_7_roadmap(prs)
    add_slide_8_team(prs)
    add_slide_9a_funding_overview(prs)
    add_slide_9b_funding_details(prs)
    add_slide_vision_merged(prs)

    out_dir = os.path.join(os.path.dirname(__file__), "..", "PPT files")
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "簇锋科技融资路演PPT.pptx")
    prs.save(out_path)
    print(f"PPT 已生成: {os.path.abspath(out_path)}")


if __name__ == "__main__":
    main()
