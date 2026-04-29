"""
Bare Film Waste Reconciliation Sheet — VKS Tech print-ready format
Landscape A4, blank for shop-floor entry
"""
from reportlab.lib.pagesizes import A4, landscape
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# Brand colors
NAVY = HexColor('#1A2744')
ORANGE = HexColor('#E85D26')
TEAL = HexColor('#0D8C7E')
CREAM = HexColor('#FAF9F6')
GREY = HexColor('#5A5A5A')
LIGHT_GREY = HexColor('#E2DDD4')
ROW_ALT = HexColor('#F5F2EC')

OUT_PATH = '/home/claude/blog-batch/26-bare-film-waste-reduction/VKS-MET-F-BareFilmWaste.pdf'
LOGO_PATH = '/home/claude/blog-batch/26-bare-film-waste-reduction/logo.png'

# Page setup
PAGE_W, PAGE_H = landscape(A4)  # 842 x 595 pt
MARGIN = 24

c = canvas.Canvas(OUT_PATH, pagesize=landscape(A4))
c.setTitle("Bare Film Waste Reconciliation Sheet — VKS Tech")
c.setAuthor("vksTech.com")
c.setSubject("Per-Jumbo Bare Film Waste Tracking Format")

# ============ HEADER BAND (Navy strip) ============
HEADER_H = 56
c.setFillColor(NAVY)
c.rect(0, PAGE_H - HEADER_H, PAGE_W, HEADER_H, fill=1, stroke=0)

# Logo top-left
try:
    c.drawImage(LOGO_PATH, MARGIN, PAGE_H - HEADER_H + 8, width=40, height=40,
                mask='auto', preserveAspectRatio=True)
except Exception as e:
    print(f"Logo issue: {e}")

# Brand name next to logo
c.setFillColor(white)
c.setFont("Helvetica-Bold", 14)
c.drawString(MARGIN + 50, PAGE_H - 24, "VKS TECH")
c.setFillColor(ORANGE)
c.setFont("Helvetica", 8)
c.drawString(MARGIN + 50, PAGE_H - 36, "vksTech.com")
c.setFillColor(HexColor('#FAF9F6'))
c.setFont("Helvetica-Oblique", 7)
c.drawString(MARGIN + 50, PAGE_H - 47, "Free Formats. Real Plant Methodology.")

# Title (center)
c.setFillColor(white)
c.setFont("Helvetica-Bold", 16)
title = "BARE FILM WASTE RECONCILIATION SHEET"
title_w = c.stringWidth(title, "Helvetica-Bold", 16)
c.drawString((PAGE_W - title_w) / 2, PAGE_H - 26, title)
c.setFillColor(ORANGE)
c.setFont("Helvetica", 9)
subtitle = "Per-Jumbo Tracking — Metalliser"
sub_w = c.stringWidth(subtitle, "Helvetica", 9)
c.drawString((PAGE_W - sub_w) / 2, PAGE_H - 40, subtitle)

# Format info top-right
c.setFillColor(white)
c.setFont("Helvetica-Bold", 8)
right_x = PAGE_W - MARGIN
c.drawRightString(right_x, PAGE_H - 22, "Format No: VKS/MET/F/BFW-01")
c.setFont("Helvetica", 7)
c.drawRightString(right_x, PAGE_H - 33, "Rev: 00  |  Issue Date: ___/___/______")
c.drawRightString(right_x, PAGE_H - 44, "Page: 1 of 1")

# ============ METADATA STRIP ============
META_Y = PAGE_H - HEADER_H - 30
META_H = 24
c.setFillColor(CREAM)
c.rect(MARGIN, META_Y, PAGE_W - 2 * MARGIN, META_H, fill=1, stroke=1)
c.setStrokeColor(NAVY)
c.setLineWidth(0.5)
c.rect(MARGIN, META_Y, PAGE_W - 2 * MARGIN, META_H, fill=0, stroke=1)

# Metadata fields with underlines
meta_fields = [
    ("Date:", 55),
    ("Shift:", 38),
    ("Machine No:", 50),
    ("Operator Name:", 95),
    ("Supervisor:", 90),
    ("Film Spec:", 95),
]
x = MARGIN + 6
c.setFillColor(NAVY)
for label, line_w in meta_fields:
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(x, META_Y + 8, label)
    label_w = c.stringWidth(label, "Helvetica-Bold", 8.5)
    # Underline for input
    c.setStrokeColor(NAVY)
    c.setLineWidth(0.4)
    c.line(x + label_w + 4, META_Y + 7, x + label_w + 4 + line_w, META_Y + 7)
    x += label_w + 4 + line_w + 14

# ============ MAIN TABLE ============
TABLE_TOP = META_Y - 8
TABLE_BOTTOM = MARGIN + 70  # leave room for footer/totals
TABLE_H = TABLE_TOP - TABLE_BOTTOM

# Column definitions: (header, sub-header, width)
columns = [
    ("S.No", "", 25),
    ("Bare Roll No", "", 65),
    ("Met Roll No", "", 65),
    ("Weight\n(kg)", "", 48),
    ("Width\n(mm)", "", 42),
    ("Length\n(m)", "", 50),
    ("Top Waste", "Ramp-Down (kg)", 65),
    ("Bottom Waste", "Start-Up (kg)", 65),
    ("Misc Waste", "(kg)", 50),
    ("Total Waste", "(kg)", 50),
    ("% Waste", "", 42),
    ("Reason for Extra Waste", "", 0),  # rest of width
]

available_width = PAGE_W - 2 * MARGIN
fixed_total = sum(col[2] for col in columns[:-1])
columns[-1] = (columns[-1][0], columns[-1][1], available_width - fixed_total)

# Compute X positions
col_x = [MARGIN]
for col in columns:
    col_x.append(col_x[-1] + col[2])

# --- Header row ---
HEADER_ROW_H = 30
header_y = TABLE_TOP - HEADER_ROW_H

c.setFillColor(NAVY)
c.rect(MARGIN, header_y, available_width, HEADER_ROW_H, fill=1, stroke=0)

# Header text
c.setFillColor(white)
for i, (head, sub, w) in enumerate(columns):
    cx = col_x[i] + w / 2
    if sub:
        c.setFont("Helvetica-Bold", 7.5)
        c.drawCentredString(cx, header_y + HEADER_ROW_H - 12, head)
        c.setFillColor(ORANGE)
        c.setFont("Helvetica", 6.5)
        c.drawCentredString(cx, header_y + 8, sub)
        c.setFillColor(white)
    else:
        c.setFont("Helvetica-Bold", 8)
        # Multi-line headers
        if "\n" in head:
            lines = head.split("\n")
            c.drawCentredString(cx, header_y + HEADER_ROW_H - 12, lines[0])
            c.setFont("Helvetica-Bold", 7.5)
            c.drawCentredString(cx, header_y + 8, lines[1])
        else:
            c.drawCentredString(cx, header_y + HEADER_ROW_H / 2 - 3, head)

# Header column dividers
c.setStrokeColor(white)
c.setLineWidth(0.4)
for i in range(1, len(columns)):
    c.line(col_x[i], header_y, col_x[i], header_y + HEADER_ROW_H)

# --- Data rows ---
TOTAL_ROW_H = 22
data_area_h = header_y - TABLE_BOTTOM - TOTAL_ROW_H
NUM_ROWS = 15
row_h = data_area_h / NUM_ROWS

c.setStrokeColor(LIGHT_GREY)
c.setLineWidth(0.3)

for r in range(NUM_ROWS):
    row_y = header_y - (r + 1) * row_h
    # Alternating row background
    if r % 2 == 0:
        c.setFillColor(ROW_ALT)
        c.rect(MARGIN, row_y, available_width, row_h, fill=1, stroke=0)
    
    # Row number pre-filled
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 8)
    c.drawCentredString(col_x[0] + columns[0][2] / 2, row_y + row_h / 2 - 3, str(r + 1))
    
    # Horizontal line at bottom of row
    c.setStrokeColor(LIGHT_GREY)
    c.line(MARGIN, row_y, MARGIN + available_width, row_y)

# Vertical column dividers (full table height)
c.setStrokeColor(NAVY)
c.setLineWidth(0.5)
for i in range(len(columns) + 1):
    c.line(col_x[i], TABLE_BOTTOM + TOTAL_ROW_H, col_x[i], TABLE_TOP)

# Top, bottom of table (thicker)
c.setLineWidth(0.8)
c.line(MARGIN, TABLE_TOP, MARGIN + available_width, TABLE_TOP)
c.line(MARGIN, header_y, MARGIN + available_width, header_y)
c.line(MARGIN, TABLE_BOTTOM + TOTAL_ROW_H, MARGIN + available_width, TABLE_BOTTOM + TOTAL_ROW_H)

# --- Total row ---
total_y = TABLE_BOTTOM
c.setFillColor(NAVY)
c.rect(MARGIN, total_y, available_width, TOTAL_ROW_H, fill=1, stroke=0)
c.setFillColor(white)
c.setFont("Helvetica-Bold", 9)
# "TOTAL" label spans first 3 columns
total_label_w = columns[0][2] + columns[1][2] + columns[2][2]
c.drawCentredString(col_x[0] + total_label_w / 2, total_y + TOTAL_ROW_H / 2 - 3, "TOTAL / SHIFT AVERAGE")

# Total dividers
c.setStrokeColor(white)
c.setLineWidth(0.4)
for i in range(1, len(columns)):
    c.line(col_x[i], total_y, col_x[i], total_y + TOTAL_ROW_H)

# ============ FOOTER (Sign + Notes + Brand) ============
foot_y = TABLE_BOTTOM - 10

# Signatures row
c.setFillColor(NAVY)
c.setFont("Helvetica-Bold", 8.5)
sig_labels = [
    ("Operator Sign:", MARGIN + 10),
    ("Shift In-Charge Sign:", MARGIN + 200),
    ("Process Engineer Sign:", MARGIN + 410),
    ("HOD Production Sign:", MARGIN + 620),
]
for label, sx in sig_labels:
    c.setFillColor(NAVY)
    c.drawString(sx, foot_y - 12, label)
    label_w = c.stringWidth(label, "Helvetica-Bold", 8.5)
    c.setStrokeColor(NAVY)
    c.setLineWidth(0.4)
    c.line(sx + label_w + 4, foot_y - 13, sx + label_w + 4 + 110, foot_y - 13)

# Reference note + benchmark
note_y = foot_y - 28
c.setFillColor(GREY)
c.setFont("Helvetica-Oblique", 6.5)
c.drawString(MARGIN, note_y,
    "Top Waste = Ramp-Down at metalliser (end of cycle, top of slit roll)  |  "
    "Bottom Waste at slitter = Start-Up at metalliser (first wound, sits at core)  |  "
    "Benchmark: Total Waste \u2264 27 kg/jumbo @ 12 mic PET 54000m  |  "
    "% Waste = (Total Waste / Weight) \u00D7 100"
)

# Brand strip at very bottom
brand_y = MARGIN - 8
c.setFillColor(ORANGE)
c.rect(MARGIN, brand_y, available_width, 1.5, fill=1, stroke=0)
c.setFillColor(NAVY)
c.setFont("Helvetica-Bold", 7.5)
c.drawString(MARGIN, brand_y - 12, "vksTech.com")
c.setFillColor(GREY)
c.setFont("Helvetica", 7)
c.drawString(MARGIN + 65, brand_y - 12, "\u2022  Free Formats for Flexible Packaging Professionals")
c.setFont("Helvetica-Oblique", 7)
c.drawRightString(PAGE_W - MARGIN, brand_y - 12, "Modify for your plant. Share with your team.")

c.save()
print(f"PDF generated: {OUT_PATH}")

import os
print(f"Size: {os.path.getsize(OUT_PATH):,} bytes")
