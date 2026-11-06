# GEMINI IMAGE PROMPTS — Blog 37: GSM ↔ Micron Conversion Calculator

## Quick Reference

**4 images required** — 1 cover + 2 bilingual concept diagrams + 1 standalone cheat sheet

| # | Filename | Aspect | What it shows |
|---|---|---|---|
| 1 | `cover.png` | 16:9 | Cover — the bidirectional bridge between Micron and GSM with density as the link |
| 2A | `conversion-flow-en.png` | 16:9 | Two-way conversion diagram with density as the bridge (English) |
| 2B | `conversion-flow-hi.png` | 16:9 | Same as 2A in Hindi |
| 3 | `gsm-cheat-sheet.png` | 4:5 portrait | **Standalone cheat sheet** — 12 micron→GSM conversions + 7 polymer densities |

## How to use

1. Open Google Gemini, AI Studio, or any image-gen tool that accepts reference images
2. For EACH prompt, **attach `logo.png` to that specific prompt**
3. Copy the prompt body, paste, generate
4. Save with the **exact filename** shown
5. Place all 4 images alongside `index.html` before publishing

## Brand standards

| Color | Hex | Use |
|---|---|---|
| Navy | `#1A2744` | Headings, dark panels, primary text |
| Orange | `#E85D26` | Accents, hero numbers, micron side (left) |
| Teal | `#0D8C7E` | Secondary, GSM side (right) |
| Cream | `#FAF9F6` | Backgrounds |
| Grey | `#5A5A5A` | Subtitles, captions |

**Convention:** Orange = Micron side (μm). Teal = GSM side (g/m²). The bidirectional arrows in the centre carry both colours, since the conversion goes both ways.

**Fonts:** Inter, Söhne, Helvetica Neue (Latin); Hind, Mukta (Devanagari). Big numbers in Bebas Neue, Anton, or Oswald. Formulas in monospace (Menlo, Consolas).

**Critical numbers:** PET 12μm = **16.56 GSM** · BOPP 18μm = **16.38 GSM** (counter-intuitive: nearly identical area-weight, very different micron) · Densities: PET 1.38, BOPP 0.91, CPP 0.90, LDPE 0.92, HDPE 0.95, Paper 0.80, Nylon 1.14.

**Rules:** No identifiable faces, no clipart, no decorative flourishes. WSJ / Bloomberg / HBR editorial style only.

---

## IMAGE 1 — Cover (`cover.png`)

**Save as:** `cover.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** Visual hook for the bidirectional conversion. Show that Micron and GSM are two sides of the same coin, linked by density.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. The output must be widescreen landscape. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized for fast loading (target file size 400-700 KB). No JPEG artifacts, no blur, no fuzzy edges on text.
>
> Create an editorial magazine-cover image for a flexible-packaging industry blog post titled "GSM ↔ Micron Conversion — The Two-Way Bridge."
>
> **Composition** — left two-thirds is the bidirectional bridge visual, right one-third is the hero text panel.
>
> **LEFT TWO-THIRDS — bidirectional bridge visual:**
>
> A horizontal stage on a clean cream `#FAF9F6` background with subtle paper-grain texture. The visual shows Micron and GSM as two equal-weight panels connected by a central density bridge:
>
> - **LEFT SIDE — MICRON (orange-themed):**
>   - Top tag (small navy caps): MICRON (μm)
>   - Visual: A simplified flat-vector film cross-section, viewed end-on. A long horizontal line representing the film, with a thickness dimension arrow on the left labelled "12 μm" in orange `#E85D26` bold. Below the cross-section, a caption "How thick the film is."
>   - Below the visual, big number block: **12** (Bebas Neue, ~120pt, in orange) above tiny label "μm thickness"
>
> - **CENTRE — DENSITY BRIDGE:**
>   - A vertical navy `#1A2744` rounded rectangle panel
>   - Top: "× ÷" symbols in white
>   - Middle: "DENSITY" in white caps, large
>   - Below: "PET 1.38 g/cm³" in orange
>   - Two large arrows pointing in opposite directions (left arrow in teal, right arrow in orange) — top arrow says "GSM = μm × ρ →"; bottom arrow says "← μm = GSM ÷ ρ"
>
> - **RIGHT SIDE — GSM (teal-themed):**
>   - Top tag (small navy caps): GSM (g/m²)
>   - Visual: A simplified flat-vector 1m × 1m square (representing 1 square metre), viewed top-down. The square has a label inside "1 m²" and below it a small badge "16.56 g" in teal bold.
>   - Below the visual, big number block: **16.56** (Bebas Neue, ~120pt, in teal) above tiny label "GSM"
>
> Above the entire visual, a single line of text in tiny navy caps centred: **TWO UNITS, ONE FILM. DENSITY IS THE BRIDGE.**
>
> Below the visual, the formulas displayed prominently in a centred horizontal box:
> Box style: navy `#1A2744` background, white monospace text in TWO LINES: **GSM = Micron × Density** / **Micron = GSM ÷ Density**
>
> **RIGHT ONE-THIRD — navy `#1A2744` editorial panel with subtle paper-grain texture:**
>
> - Top eyebrow strip in orange `#E85D26`, all caps, small letterspacing: **vksTech.com / FREE CALCULATORS**
> - Main title in white Inter Bold or Söhne Bold (3-4 lines, large): **GSM ↔ Micron Conversion**
> - Subtitle (smaller italic, grey `#FAF9F6` opacity 0.8): *The two-way bridge between how labs measure and how suppliers quote.*
> - HORIZONTAL DIVIDER (orange `#E85D26`, 2 px thin)
> - HERO STAT BLOCK — three rows showing the counter-intuitive comparison:
>   - **PET 12μm** (white, ~40pt): → **16.56 GSM**
>   - **BOPP 18μm** (white, ~40pt): → **16.38 GSM**
>   - *Same area-weight,* (white italic, smaller): *very different thickness*
> - Small text below: *Densities used: PET 1.38, BOPP 0.91, CPP 0.90, LDPE 0.92, HDPE 0.95, Paper 0.80, Nylon 1.14*
> - Bottom strip: small text — **Vivek Kumar | M.Tech NIT Uttarakhand | 9+ Years Flexible Packaging**
> - In the bottom-right corner of this panel, place the attached VKS Tech logo at ~100×100 px on a thin white round backplate
>
> **Mood:** technical, useful, like the cover of an engineering reference card. NOT decorative. NOT marketing. Reads like a *Flexible Packaging Magazine* technical feature header.
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No red except orange. No green outside teal. No yellow.

### Plan B
If the dual-direction visual looks weak, simplify to two large coloured circles (orange "12 μm" on left, teal "16.56 GSM" on right) connected by an orange↔teal arrow with "× 1.38" / "÷ 1.38" labels.

---

## IMAGE 2A — Conversion Flow Diagram (English) (`conversion-flow-en.png`)

**Save as:** `conversion-flow-en.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** A clean teaching diagram showing how density connects micron and GSM. The reader should see at a glance why same micron of different polymers gives different GSM.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 300-600 KB).
>
> Create a clean flat-vector editorial concept-diagram. NOT photorealistic. NOT 3D. Pure flat vector with crisp typography. *The Economist* / *Harvard Business Review* methodology-diagram style.
>
> **Background:** cream `#FAF9F6` with subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 12%):**
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **WHY MICRON ≠ GSM**
> - Title (navy `#1A2744`, large bold sans-serif): **Same Micron, Different GSM — Density is the Reason**
> - Subtitle (grey `#5A5A5A`): *PET is 50% denser than BOPP. Same thickness, different area-weight.*
>
> **Main visual zone (middle 76%) — 2 ROWS, 3 COLUMNS each:**
>
> **Row layout (top row — PET, bottom row — BOPP):**
>
> Each row has three panels: MICRON → DENSITY → GSM
>
> **TOP ROW (PET, navy-themed accent):**
> - LEFT panel: Big "12 μm" in orange Bebas Neue, ~80pt. Below: "PET — same thickness as bottom row"
> - CENTRE panel (orange bridge): "× 1.38" in white on orange `#E85D26` rounded rectangle. Below: "PET density (g/cm³)"
> - RIGHT panel: Big "16.56" in teal Bebas Neue, ~80pt. Below: "GSM (g/m²) — high"
>
> **BOTTOM ROW (BOPP, lighter accent):**
> - LEFT panel: Big "12 μm" in orange Bebas Neue, ~80pt. Below: "BOPP — same thickness as top row"
> - CENTRE panel (orange bridge): "× 0.91" in white on orange `#E85D26` rounded rectangle. Below: "BOPP density (g/cm³)"
> - RIGHT panel: Big "10.92" in teal Bebas Neue, ~80pt. Below: "GSM (g/m²) — lower"
>
> **Between the two rows, in the middle column, a small navy bracket connecting them with the text:** *Same micron — Different GSM*
>
> **Below the rows — DENSITY REFERENCE STRIP (full width, navy background):**
> Navy `#1A2744` background. Single horizontal row of small density tiles in white Bebas Neue:
> Title in orange caps: COMMON FLEXIBLE PACKAGING DENSITIES (g/cm³)
> Then: PET = 1.38 · BOPP = 0.91 · CPP = 0.90 · LDPE = 0.92 · HDPE = 0.95 · Paper = 0.80 · Nylon = 1.14
>
> **Bottom callout strip (8%):**
> Navy `#1A2744` background, two-column split:
> - LEFT (orange `#E85D26` text, bold): **⚡ Why this matters:**
> - RIGHT (white text): *A 12μm spec across two polymers is two different products. Specs in micron alone — without polymer or density — are ambiguous.*
>
> **Bottom-right corner:** VKS Tech logo at ~80×80 px on white circle backplate.
> **Bottom-left corner:** small grey footer: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif throughout. Big numbers in Bebas Neue / Anton / Oswald. Tag chips in semibold caps.
>
> **What to AVOID:** clipart, cartoons, hand-drawn elements, photorealism, isometric/3D effects, decorative borders.

### Plan B
If the 2-row 3-column grid looks too busy, simplify to a single horizontal flow with PET on top and BOPP below, sharing a vertical density column in the middle.

---

## IMAGE 2B — Conversion Flow Diagram (Hindi) (`conversion-flow-hi.png`)

**Save as:** `conversion-flow-hi.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 300-600 KB). No blur on Devanagari text.
>
> Create a flat-vector editorial concept-diagram with EXACTLY the same layout, colour palette, and structure as the English Conversion Flow Diagram. Numbers (12 μm, 1.38, 0.91, 16.56, 10.92, all densities), units (μm, g/cm³, GSM, g/m²), and material names (PET, BOPP, CPP, LDPE, HDPE, Paper, Nylon) stay in English. Only title, subtitle, panel sub-labels, the inter-row bracket text, and bottom callout translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow (orange #E85D26, English): WHY MICRON ≠ GSM
> - Title (Hindi, navy bold, large): **Same Micron, Different GSM — Density है Reason**
> - Subtitle (Hindi, grey): *PET BOPP से 50% denser है। Same thickness, different area-weight।*
>
> **TOP ROW (PET):**
> - LEFT panel: "12 μm" big number, Hindi sub-label: "PET — bottom row के same thickness"
> - CENTRE bridge: "× 1.38", Hindi sub-label: "PET density (g/cm³)"
> - RIGHT panel: "16.56" big number, Hindi sub-label: "GSM (g/m²) — high"
>
> **BOTTOM ROW (BOPP):**
> - LEFT panel: "12 μm" big number, Hindi sub-label: "BOPP — top row के same thickness"
> - CENTRE bridge: "× 0.91", Hindi sub-label: "BOPP density (g/cm³)"
> - RIGHT panel: "10.92" big number, Hindi sub-label: "GSM (g/m²) — lower"
>
> **Inter-row bracket (Hindi):** *Same micron — Different GSM*
>
> **DENSITY REFERENCE STRIP** (English text in navy panel): COMMON FLEXIBLE PACKAGING DENSITIES (g/cm³): PET = 1.38 · BOPP = 0.91 · CPP = 0.90 · LDPE = 0.92 · HDPE = 0.95 · Paper = 0.80 · Nylon = 1.14
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ ये क्यों matter करता है:**
> - RIGHT (white text, Hindi): *दो polymers across 12μm spec दो different products हैं। Polymer या density के बिना micron में specs ambiguous हैं।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 2A.

### Plan B for Hindi
Generate Image 2A first, then replace title, subtitle, sub-labels, bracket text, and bottom callout with Devanagari text using Hind or Mukta font in Photopea/Canva. Numbers, units, and material names stay in English.

---

## IMAGE 3 — GSM Cheat Sheet (`gsm-cheat-sheet.png`)

**Save as:** `gsm-cheat-sheet.png` · **Target dimensions:** 1200×1500 px (4:5 portrait)
**Goal:** A standalone bookmarkable artefact. Lab technicians and procurement teams screenshot this for daily reference.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1200 pixels wide by 1500 pixels tall, 4:5 portrait aspect ratio**. This is a vertical (portrait) format, NOT landscape. Do NOT generate square (1:1) or landscape formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 400-700 KB).
>
> Create a clean, professional, bookmark-quality reference cheat sheet — the kind of one-page printable that lab technicians in flexible packaging would tape next to their precision balance. NOT a marketing brochure. A working tool.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture.
>
> **Header zone (top 12% of image):**
> - VKS Tech logo (the attached logo.png) at top-left, ~100×100 px
> - To the right of the logo, two-line header:
>   - Eyebrow line in orange `#E85D26` small caps: VKSTECH.COM REFERENCE CHEAT SHEET
>   - Main title in navy `#1A2744` bold large: **Micron → GSM Quick Reference**
> - Below the title, a thin orange `#E85D26` horizontal divider
>
> **Body zone (middle 76% of image) — TWO sections:**
>
> **TOP SECTION — 12-row Micron→GSM conversion table:**
>
> Title above the table (navy bold, small): COMMON CONVERSIONS
>
> Each row of the table:
> - Film type (left, navy bold)
> - Micron (semibold, in orange `#E85D26`)
> - Density (semibold, smaller)
> - **GSM** (right-aligned, large, in teal `#0D8C7E` bold)
>
> Header row at top: | FILM | μm | DENSITY | GSM |
>
> Rows (12 entries):
> 1. PET — 8 — 1.38 — **11.04**
> 2. PET — 12 — 1.38 — **16.56**
> 3. PET — 23 — 1.38 — **31.74**
> 4. PET — 36 — 1.38 — **49.68**
> 5. BOPP — 15 — 0.91 — **13.65**
> 6. BOPP — 18 — 0.91 — **16.38**
> 7. BOPP — 25 — 0.91 — **22.75**
> 8. CPP — 30 — 0.90 — **27.00**
> 9. LDPE — 50 — 0.92 — **46.00**
> 10. LDPE — 80 — 0.92 — **73.60**
> 11. Paper — 80 — 0.80 — **64.00**
> 12. Nylon (BOPA) — 15 — 1.14 — **17.10**
>
> **MIDDLE DIVIDER STRIP — small orange horizontal line.**
>
> **BOTTOM SECTION — Density Reference (single horizontal row of 7 small tiles):**
>
> Title above (navy bold, small): POLYMER DENSITIES (g/cm³)
>
> 7 small tiles in a row, each navy `#1A2744` rounded rectangle with orange-tinted top stripe:
> - PET — **1.38**
> - BOPP — **0.91**
> - CPP — **0.90**
> - LDPE — **0.92**
> - HDPE — **0.95**
> - Paper — **0.80**
> - Nylon — **1.14**
>
> Big number in white Bebas Neue, ~50 pt. Material name in tiny orange caps above.
>
> **Footer zone (bottom 12% of image):**
>
> Three columns:
> - LEFT: A small orange-themed key showing "**ORANGE = MICRON (μm)**"
> - CENTER: A small teal-themed key showing "**TEAL = GSM (g/m²)**"
> - RIGHT: A small navy panel: *Forward: GSM = μm × density · Inverse: μm = GSM ÷ density · Yield: 1000 ÷ GSM = sqm/kg*
>
> Above the footer columns, a thin orange divider.
>
> Bottom-most strip with grey small caps: *vkstech.com — More calculators, more cheat sheets, real-plant methodology · Vivek Kumar | M.Tech NIT Uttarakhand*
>
> **Mood:** clean, dense, useful, professional. The kind of reference doc a real lab technician would print, laminate, and use weekly.
>
> **Typography:** Inter or Söhne sans-serif throughout. Micron values in orange. GSM values in teal Bebas Neue or bold. Density values in white Bebas Neue.
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No others.
>
> **What to AVOID:** decorative borders, clipart, drop shadows, gradients, 3D effects.

### Plan B
If the 12-row table looks cramped at 1200×1500, drop the BOPP 25 and the LDPE 80 rows (least common). The 10 remaining rows still cover 95% of typical specs.

---

## REVIEW — 8-Point Check Before Publishing

### 1. Brand colour discipline
✅ Pass: only Navy / Orange / Teal / Cream / white / grey
✅ Convention: Orange = Micron. Teal = GSM.

### 2. Typography quality
✅ Pass: clean sans-serif, big numbers in heavy condensed (Bebas/Anton), formulas in monospace

### 3. Number accuracy (HARD)
**Cover:** "PET 12μm → 16.56 GSM" / "BOPP 18μm → 16.38 GSM" / "× 1.38" / both formulas
**Flow 2A/2B:** PET row 12μm × 1.38 = 16.56; BOPP row 12μm × 0.91 = 10.92; all 7 densities
**Cheat sheet:** All 12 GSM values (11.04, 16.56, 31.74, 49.68, 13.65, 16.38, 22.75, 27.00, 46.00, 73.60, 64.00, 17.10) and all 7 densities

### 4. Source attribution
N/A — formulaic content, no external citations needed.

### 5. Image format and file size
✅ Images 1, 2A, 2B at 1600×900 widescreen PNG (300-700 KB)
✅ Image 3 at 1200×1500 portrait PNG (400-700 KB)

### 6. Logo placement
✅ Bottom-right (Images 1-2) or top-left (Image 3 cheat sheet), ~80–110 px

### 7. Information density
✅ Cover 5 sec, flow diagram 10 sec, cheat sheet dense by design

### 8. No AI-tells
❌ Avoid: identifiable faces, distorted hands, garbled small text, AI watermarks

---

## TROUBLESHOOTING

- **Image comes out as a square (1:1):** Re-paste the prompt and re-emphasize the IMAGE SPEC line. For Image 3, double-check it's portrait (1200×1500).
- **Numbers come out wrong:** Always overlay correct numbers in an editor afterward.
- **Hindi renders as gibberish:** Generate EN version first, replace text in Photopea/Canva using Hind or Mukta font.

## Folder Structure When Complete

```
37-gsm-micron-conversion/
├── index.html
├── logo.png                       (already provided)
├── cover.png                      (Image 1)
├── conversion-flow-en.png         (Image 2A)
├── conversion-flow-hi.png         (Image 2B)
├── gsm-cheat-sheet.png            (Image 3 — STANDALONE BOOKMARK)
├── GEMINI-PROMPTS.md              (markdown reference)
└── GEMINI-PROMPTS.html            (interactive page with copy buttons)
```
