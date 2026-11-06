# GEMINI IMAGE PROMPTS — Blog 38: Production Yield % Calculator

## Quick Reference

**4 images required** — 1 cover + 2 bilingual concept diagrams + 1 standalone cheat sheet

| # | Filename | Aspect | What it shows |
|---|---|---|---|
| 1 | `cover.png` | 16:9 | Cover — input/output flow with the compound multiplier story |
| 2A | `yield-flow-en.png` | 16:9 | Multi-stage compound yield diagram (English) |
| 2B | `yield-flow-hi.png` | 16:9 | Same as 2A in Hindi |
| 3 | `yield-benchmark-cheat-sheet.png` | 4:5 portrait | **Standalone cheat sheet** — 7 process stage benchmarks + loss-rupee table |

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
| Orange | `#E85D26` | Accents, hero numbers, loss/waste indicators |
| Teal | `#0D8C7E` | Secondary, yield/good output indicators |
| Cream | `#FAF9F6` | Backgrounds |
| Grey | `#5A5A5A` | Subtitles, captions |

**Convention:** Teal = yield / good output (kept). Orange = loss / waste (lost). Used consistently across cover, flow diagram, and cheat sheet.

**Fonts:** Inter, Söhne, Helvetica Neue (Latin); Hind, Mukta (Devanagari). Big numbers in Bebas Neue, Anton, or Oswald. Formulas in monospace (Menlo, Consolas).

**Critical numbers:** **5,000 kg input → 4,100 kg final pouch output = 82% end-to-end yield** (the compound trap). Per-stage benchmarks: metalliser 96-98%, slitting 96-97%, lamination 97-98%, printing 94-96%, pouching 93-95%. Loss-in-rupees: 1% yield gap costs ₹9,500-19,000 per 5,000 kg cycle.

**Rules:** No identifiable faces, no clipart, no decorative flourishes. WSJ / Bloomberg / HBR editorial style only.

---

## IMAGE 1 — Cover (`cover.png`)

**Save as:** `cover.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** Visual hook for the compound trap. Show that 5 stages × 95% does NOT equal 95% — it equals 77%.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. The output must be widescreen landscape. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized for fast loading (target file size 400-700 KB).
>
> Create an editorial magazine-cover image for a flexible-packaging industry blog post titled "Production Yield % — The Deceptively Simple Formula That Hides 18% of Your Output."
>
> **Composition** — left two-thirds is a flow visual showing the compound yield decay across stages, right one-third is the hero text panel.
>
> **LEFT TWO-THIRDS — compound decay flow visual:**
>
> A horizontal stage on a clean cream `#FAF9F6` background with subtle paper-grain texture. The visual shows a flow from left to right with quantities decreasing at each stage:
>
> Five connected vertical bars / panels in a row, decreasing in height:
>
> - **Bar 1 — INPUT:** Tallest, navy `#1A2744` filled. Top label: "INPUT". Big number inside in white: "5000 kg". Below the bar: "PET jumbo"
> - **Arrow with × 0.97 (small)**
> - **Bar 2 — METALLISER:** ~97% of bar 1 height. Teal `#0D8C7E`. Top label: "METALLISER 97%". Big number: "4850 kg".
> - **Arrow with × 0.96**
> - **Bar 3 — SLITTING:** ~93% of bar 1 height. Teal. Top label: "SLITTING 96%". Big number: "4656 kg"
> - **Arrow with × 0.97**
> - **Bar 4 — LAMINATION:** ~91% of bar 1 height. Teal. Top label: "LAMINATION 97%". Big number: "4516 kg"
> - **Arrow with × 0.95**
> - **Bar 5 — PRINTING:** ~86% of bar 1 height. Teal. Top label: "PRINTING 95%". Big number: "4290 kg"
> - **Arrow with × 0.93**
> - **Bar 6 — POUCHING:** ~80% of bar 1 height. Orange `#E85D26` (warning colour because output is significantly less). Top label: "POUCHING 93%". Big number: "3990 kg"
>
> Above all bars, a curved arc spanning from Bar 1 to Bar 6 in orange, with text along the arc: "END-TO-END = 0.97 × 0.96 × 0.97 × 0.95 × 0.93 = 80% (NOT the average of 95.6%)"
>
> Below the bars, a tiny caption in italic grey: *Each stage looks healthy. The compound result is the trap.*
>
> Above the entire visual, a single line of text in tiny navy caps centred: **5 STAGES × 95% EACH = 77%, NOT 95%.**
>
> Below the visual, the formula displayed prominently in a centred horizontal box:
> Box style: navy `#1A2744` background, white monospace text: **Yield % = (Output ÷ Input) × 100**
>
> **RIGHT ONE-THIRD — navy `#1A2744` editorial panel with subtle paper-grain texture:**
>
> - Top eyebrow strip in orange `#E85D26`, all caps, small letterspacing: **vksTech.com / FREE CALCULATORS**
> - Main title in white Inter Bold or Söhne Bold (3-4 lines, large): **Production Yield % Calculator**
> - Subtitle (smaller italic, grey `#FAF9F6` opacity 0.8): *The deceptively simple formula that hides 18% of your output.*
> - HORIZONTAL DIVIDER (orange `#E85D26`, 2 px thin)
> - HERO STAT BLOCK — three rows showing the compound trap:
>   - **Single stage** (white, ~40pt): 96% yield (in teal)
>   - **5 stages chained** (white, ~40pt): 0.96⁵ = 81.5% (in orange)
>   - **The cost** (white, ~40pt): 18% loss = ₹15+ lakh/month (in orange)
> - Small text below: *Average ≠ Compound. Multiplying matters.*
> - Bottom strip: small text — **Vivek Kumar | M.Tech NIT Uttarakhand | 9+ Years Flexible Packaging**
> - In the bottom-right corner of this panel, place the attached VKS Tech logo at ~100×100 px on a thin white round backplate
>
> **Mood:** plant-manager attention-grabbing. The cover of a reference document a production head would screenshot and share with their team. NOT decorative. NOT marketing.
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No red except orange. No green outside teal. No yellow.

### Plan B
If the 6-bar decay visualisation looks cluttered, simplify to 3 bars: INPUT → MIDDLE STAGES → FINAL OUTPUT, showing only 5000 → ~4500 → ~4000 with the compound multiplier number prominent in the middle.

---

## IMAGE 2A — Yield Flow Diagram (English) (`yield-flow-en.png`)

**Save as:** `yield-flow-en.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** A clean teaching diagram showing how compound yield works mathematically. The reader should see why averaging is wrong and multiplying is right.

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
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **THE COMPOUND TRAP**
> - Title (navy `#1A2744`, large bold sans-serif): **Why Stage Yields MULTIPLY, Not Average**
> - Subtitle (grey `#5A5A5A`): *Same five stage yields, two different end-to-end answers.*
>
> **Main visual zone (middle 76%) — TWO PANELS side by side, comparing wrong vs right calculation:**
>
> **LEFT PANEL — WRONG: AVERAGING (red/orange theme):**
> - Top tag (orange `#E85D26` filled rounded rectangle, white caps): WRONG — AVERAGING
> - Five small tiles in a row inside this panel:
>   - "95%" / "96%" / "97%" / "95%" / "96%" (each in orange)
> - Below the tiles, equation: "Average = (95+96+97+95+96) ÷ 5 = **95.8%**"
> - Big number block (Bebas Neue, ~80pt, in orange): **95.8%**
> - Caption italic grey: *"The optimistic number. Plant managers love this. It's wrong."*
> - Cross-out (X) symbol overlaid faintly on the big number to indicate it's wrong
>
> **RIGHT PANEL — RIGHT: MULTIPLYING (teal theme):**
> - Top tag (teal `#0D8C7E` filled rounded rectangle, white caps): RIGHT — COMPOUND
> - Five small tiles in a row inside this panel:
>   - "0.95" / "0.96" / "0.97" / "0.95" / "0.96" (each in teal)
> - Below the tiles, equation: "Compound = 0.95 × 0.96 × 0.97 × 0.95 × 0.96 = **0.805**"
> - Big number block (Bebas Neue, ~80pt, in teal): **80.5%**
> - Caption italic grey: *"The honest number. The actual end-to-end output."*
> - Tick mark (✓) overlaid faintly on the big number to indicate it's correct
>
> **Below both panels — DIFFERENCE STRIP (full width, navy background):**
> Navy `#1A2744` background. Single centred line with the loss highlighted:
> "The 15.3-percentage-point gap between WRONG and RIGHT is not a math curiosity — it is your real losses being hidden."
>
> **Bottom callout strip (8%):**
> Navy `#1A2744` background, two-column split:
> - LEFT (orange `#E85D26` text, bold): **⚡ The fix:**
> - RIGHT (white text): *Multiply stage yields, never average them. Always report end-to-end yield as the product, not as a stage average.*
>
> **Bottom-right corner:** VKS Tech logo at ~80×80 px on white circle backplate.
> **Bottom-left corner:** small grey footer: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif throughout. Big numbers in Bebas Neue / Anton. Tag chips in semibold caps. Equations in monospace.
>
> **What to AVOID:** clipart, cartoons, hand-drawn elements, photorealism, 3D effects.

### Plan B
If the side-by-side panels look weak, render the WRONG panel above and RIGHT panel below in a two-row stack, with the difference strip between them.

---

## IMAGE 2B — Yield Flow Diagram (Hindi) (`yield-flow-hi.png`)

**Save as:** `yield-flow-hi.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 300-600 KB). No blur on Devanagari text.
>
> Create a flat-vector editorial concept-diagram with EXACTLY the same layout, colour palette, and structure as the English Yield Flow Diagram. Numbers (95%, 96%, 97%, 0.95, etc.), equations, and percentages stay in English/numeric. Only title, subtitle, panel tags (where translatable), captions, and bottom callout translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow (orange #E85D26, English): THE COMPOUND TRAP
> - Title (Hindi, navy bold, large): **Stage Yields MULTIPLY होते हैं, Average नहीं**
> - Subtitle (Hindi, grey): *Same पाँच stage yields, दो different end-to-end answers।*
>
> **LEFT PANEL — WRONG (orange):**
> - Tag (English): WRONG — AVERAGING
> - 5 tiles same as English: 95% / 96% / 97% / 95% / 96%
> - Equation (mixed): "Average = (95+96+97+95+96) ÷ 5 = 95.8%"
> - Big "95.8%" in orange
> - Caption (Hindi italic): *"Optimistic number। Plant managers इसे love करते हैं। ग़लत है।"*
>
> **RIGHT PANEL — RIGHT (teal):**
> - Tag (English): RIGHT — COMPOUND
> - 5 tiles: 0.95 / 0.96 / 0.97 / 0.95 / 0.96
> - Equation: "Compound = 0.95 × 0.96 × 0.97 × 0.95 × 0.96 = 0.805"
> - Big "80.5%" in teal
> - Caption (Hindi italic): *"Honest number। Actual end-to-end output।"*
>
> **DIFFERENCE STRIP (Hindi):**
> "WRONG और RIGHT के बीच 15.3-percentage-point gap math curiosity नहीं है — आपके real losses छिप रहे हैं।"
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ Fix:**
> - RIGHT (white text, Hindi): *Stage yields multiply करें, कभी average नहीं। End-to-end yield हमेशा product के रूप में report करें, stage average की तरह नहीं।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 2A.

### Plan B for Hindi
Generate Image 2A first, then replace title, subtitle, panel captions, difference strip, and bottom callout with Devanagari text using Hind or Mukta font in Photopea/Canva. Numbers and equations stay in English.

---

## IMAGE 3 — Yield Benchmark Cheat Sheet (`yield-benchmark-cheat-sheet.png`)

**Save as:** `yield-benchmark-cheat-sheet.png` · **Target dimensions:** 1200×1500 px (4:5 portrait)
**Goal:** A standalone bookmarkable artefact. Production heads screenshot this for plant review meetings.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1200 pixels wide by 1500 pixels tall, 4:5 portrait aspect ratio**. This is a vertical (portrait) format, NOT landscape. Do NOT generate square (1:1) or landscape formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 400-700 KB).
>
> Create a clean, professional, bookmark-quality reference cheat sheet — the kind of one-page printable that a plant manager in flexible packaging would tape to their office wall. NOT a marketing brochure. A working tool.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture.
>
> **Header zone (top 12% of image):**
> - VKS Tech logo (the attached logo.png) at top-left, ~100×100 px
> - To the right of the logo, two-line header:
>   - Eyebrow line in orange `#E85D26` small caps: VKSTECH.COM REFERENCE CHEAT SHEET
>   - Main title in navy `#1A2744` bold large: **Yield Benchmark — Indian Flex-Pack**
> - Below the title, a thin orange `#E85D26` horizontal divider
>
> **Body zone (middle 76% of image) — TWO sections:**
>
> **TOP SECTION — Process Stage Benchmarks table (7 rows):**
>
> Title above the table (navy bold, small): YIELD BENCHMARKS BY STAGE
>
> Each row:
> - Process stage (left, navy bold)
> - Good (top 25%) — in teal `#0D8C7E` semibold
> - Average — in navy semibold
> - Poor (bottom 25%) — in orange `#E85D26` semibold
> - Main loss source (small grey italic on the right)
>
> Header row at top: | STAGE | GOOD | AVG | POOR | LOSS SOURCE |
>
> Rows (7 entries):
> 1. Metalliser (PET) — ≥98% — 96-97% — ≤95% — Pinholes, source clean
> 2. Slitting (bare) — ≥98% — 96-97% — ≤94% — Edge trim, splice
> 3. Slitting (metallised) — ≥97% — 95-96% — ≤93% — Edge trim, scratch
> 4. Lamination — ≥98% — 97% — ≤95% — Setup, splice
> 5. Printing (8-color) — ≥96% — 94-95% — ≤92% — Make-ready, registration
> 6. Pouching (FFS) — ≥95% — 93-94% — ≤91% — Seal rejection, weight
> 7. **End-to-end (5 stages)** — **≥88%** — **82-85%** — **≤78%** — **Compound effect**
>
> **MIDDLE DIVIDER STRIP — small orange horizontal line.**
>
> **BOTTOM SECTION — Loss in ₹ table (4 rows):**
>
> Title above (navy bold, small): YIELD GAP IN RUPEES (per 5,000 kg cycle)
>
> Each row:
> - Yield % (left, navy bold)
> - Loss kg (semibold)
> - **Loss ₹/cycle** (right-aligned, large, in orange `#E85D26` bold)
>
> Header row: | YIELD | LOSS kg | LOSS ₹ |
>
> 4 rows:
> 1. 98% — 100 kg — **₹19,000**
> 2. 96% — 200 kg — **₹38,000**
> 3. 94% — 300 kg — **₹57,000**
> 4. 92% — 400 kg — **₹76,000**
>
> Below the loss table, a small footer line: *Assumes ₹140/kg substrate + ₹50/kg conversion = ₹190/kg combined*
>
> **Footer zone (bottom 12% of image):**
>
> Three columns:
> - LEFT: A small teal-themed key showing "**TEAL = YIELD (good output)**"
> - CENTER: A small orange-themed key showing "**ORANGE = LOSS (₹ cost)**"
> - RIGHT: A small navy panel: *Formula: Yield % = (Output ÷ Input) × 100 · End-to-end = product of stage yields, NOT average*
>
> Above the footer columns, a thin orange divider.
>
> Bottom-most strip with grey small caps: *vkstech.com — More calculators, more cheat sheets, real-plant methodology · Vivek Kumar | M.Tech NIT Uttarakhand*
>
> **Mood:** clean, dense, useful, professional. The kind of reference doc a real production engineer would print and use weekly.
>
> **Typography:** Inter or Söhne sans-serif throughout. Yield benchmarks colour-coded (teal good, navy average, orange poor). Loss-rupee values in orange Bebas Neue.
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No others.
>
> **What to AVOID:** decorative borders, clipart, drop shadows, gradients, 3D effects.

### Plan B
If both tables together look cramped, drop the loss-rupee table and add it as a separate cheat sheet later. The 7-row benchmark table alone is a complete deliverable.

---

## REVIEW — 8-Point Check Before Publishing

### 1. Brand colour discipline
✅ Pass: only Navy / Orange / Teal / Cream / white / grey
✅ Convention: Teal = yield/good. Orange = loss/waste.

### 2. Typography quality
✅ Pass: clean sans-serif, big numbers in heavy condensed, formulas in monospace

### 3. Number accuracy (HARD)
**Cover:** "5000 → 4850 → 4656 → 4516 → 4290 → 3990" cascade, end-to-end 80%
**Flow 2A/2B:** Wrong panel "95.8%", Right panel "80.5%", gap 15.3 pp
**Cheat sheet:** All 7 stage benchmarks correct, all 4 loss-rupee values (₹19k/₹38k/₹57k/₹76k)

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
❌ Avoid: identifiable faces, distorted hands, garbled small text

---

## TROUBLESHOOTING

- **Image comes out as a square (1:1):** Re-paste the prompt and re-emphasize the IMAGE SPEC line.
- **Numbers come out wrong:** Always overlay correct numbers in an editor afterward.
- **Hindi renders as gibberish:** Generate EN version first, replace text in Photopea/Canva using Hind or Mukta font.

## Folder Structure When Complete

```
38-production-yield-percent/
├── index.html
├── logo.png                          (already provided)
├── cover.png                         (Image 1)
├── yield-flow-en.png                 (Image 2A)
├── yield-flow-hi.png                 (Image 2B)
├── yield-benchmark-cheat-sheet.png   (Image 3 — STANDALONE BOOKMARK)
├── GEMINI-PROMPTS.md                 (markdown reference)
└── GEMINI-PROMPTS.html               (interactive page with copy buttons)
```
