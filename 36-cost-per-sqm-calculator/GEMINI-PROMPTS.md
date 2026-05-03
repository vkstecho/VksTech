# GEMINI IMAGE PROMPTS — Blog 36: Cost per Square Metre Calculator

## Quick Reference

**4 images required** — 1 cover + 2 bilingual concept diagrams + 1 standalone cheat sheet

| # | Filename | Aspect | What it shows |
|---|---|---|---|
| 1 | `cover.png` | 16:9 | Cover — supplier ratecard vs customer pouch + the killer formula + counter-intuitive PET-vs-BOPP comparison |
| 2A | `cost-flow-en.png` | 16:9 | Two-step conversion diagram: ₹/kg → GSM → ₹/sqm (English) |
| 2B | `cost-flow-hi.png` | 16:9 | Same as 2A in Hindi |
| 3 | `cost-cheat-sheet.png` | 4:5 portrait | **Standalone cheat sheet** — 9 common film-rate-cost combinations, printable |

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
| Orange | `#E85D26` | Accents, hero numbers, ₹/kg side (supplier-facing) |
| Teal | `#0D8C7E` | Secondary, ₹/sqm side (customer-facing) |
| Cream | `#FAF9F6` | Backgrounds |
| Grey | `#5A5A5A` | Subtitles, captions |

**Convention used throughout:** Orange = ₹/kg / supplier ratecard side. Teal = ₹/sqm / customer reality side. The two-colour split helps the eye separate the two units in every visual.

**Fonts:** Inter, Söhne, Helvetica Neue (Latin); Hind, Mukta (Devanagari). Big numbers in Bebas Neue, Anton, or Oswald. Formulas in monospace (Menlo, Consolas).

**Critical numbers:** **PET 12μm @ ₹120/kg = ₹1.99/sqm** (benchmark) · **BOPP 18μm @ ₹150/kg = ₹2.46/sqm** (counter-intuitive comparison) · **LDPE 50μm @ ₹110/kg = ₹5.06/sqm** · Densities: **PET 1.38, BOPP 0.91, CPP 0.90, LDPE 0.92, Paper 0.80**.

**Rules:** No identifiable faces, no clipart, no decorative flourishes. WSJ / Bloomberg / HBR editorial style only.

---

## IMAGE 1 — Cover (`cover.png`)

**Save as:** `cover.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** Visual hook for the conversion. Make readers instantly understand "this is the calculator that translates supplier-speak to customer-speak."

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. The output must be widescreen landscape. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized for fast loading (target file size 400-700 KB). No JPEG artifacts, no blur, no fuzzy edges on text.
>
> Create an editorial magazine-cover image for a flexible-packaging industry blog post titled "Cost Per Square Metre Calculator — Why ₹/kg is the Wrong Way to Compare Films."
>
> **Composition** — left two-thirds is a side-by-side comparison visual showing the unit mismatch, right one-third is a hero text panel.
>
> **LEFT TWO-THIRDS — unit mismatch visual:**
>
> A horizontal stage on a clean cream `#FAF9F6` background with subtle paper-grain texture. The visual shows the disconnect between supplier and customer:
>
> - **LEFT HALF (orange-themed) — SUPPLIER VIEW:**
>   - Top tag (small navy caps): SUPPLIER QUOTES
>   - Visual: A simplified flat-vector ratecard / invoice document, navy outline on cream. The visible content shows three line items in monospace:
>     - "PET 12μm — ₹120/kg"
>     - "BOPP 18μm — ₹150/kg"  
>     - "LDPE 50μm — ₹110/kg"
>   - Below the document, small orange `#E85D26` rounded badge: "₹/kg"
>   - Mini-caption italic small grey: *"How suppliers bill"*
>
> - **CENTER — CONVERSION ARROW:**
>   - A large vertical orange `#E85D26` divider with a centred filled circle
>   - Inside the circle, white text: "= GSM ="
>   - Above the divider: small navy text "× Density"
>
> - **RIGHT HALF (teal-themed) — CUSTOMER VIEW:**
>   - Top tag (small navy caps): CUSTOMER PAYS
>   - Visual: A simplified flat-vector pouch silhouette (snack pouch shape), with three callout values pointing into the pouch outline:
>     - "PET 12μm → ₹1.99/sqm"
>     - "BOPP 18μm → ₹2.46/sqm"
>     - "LDPE 50μm → ₹5.06/sqm"
>   - Below the pouch, small teal `#0D8C7E` rounded badge: "₹/sqm"
>   - Mini-caption italic small grey: *"How customers think"*
>
> Above the entire visual, a single line of text in tiny navy caps centred: **EVERY POUCH HAS A REAL COST. ₹/kg HIDES IT. ₹/sqm REVEALS IT.**
>
> Below the visual, the formula displayed prominently in a centred horizontal box:
> Box style: navy `#1A2744` background, white monospace text: **₹/sqm = ₹/kg × GSM ÷ 1000**
>
> **RIGHT ONE-THIRD — navy `#1A2744` editorial panel with subtle paper-grain texture:**
>
> - Top eyebrow strip in orange `#E85D26`, all caps, small letterspacing: **vksTech.com / FREE CALCULATORS**
> - Main title in white Inter Bold or Söhne Bold (3-4 lines, large): **Cost Per Square Metre Calculator**
> - Subtitle (smaller italic, grey `#FAF9F6` opacity 0.8): *Why ₹/kg is the wrong way to compare films.*
> - HORIZONTAL DIVIDER (orange `#E85D26`, 2 px thin)
> - HERO STAT BLOCK — three rows showing the counter-intuitive comparison:
>   - **PET 12μm** (white, ~40pt): ₹120/kg → **₹1.99/sqm** (in teal — winner)
>   - **BOPP 18μm** (white, ~40pt): ₹150/kg → **₹2.46/sqm** (in orange — costlier)
>   - **The lesson** (white, ~40pt): same GSM, different ₹/sqm because of ₹/kg gap
> - Small text below: *Densities: PET 1.38, BOPP 0.91, CPP 0.90, LDPE 0.92*
> - Bottom strip: small text — **Vivek Kumar | M.Tech NIT Uttarakhand | 9+ Years Flexible Packaging**
> - In the bottom-right corner of this panel, place the attached VKS Tech logo at ~100×100 px on a thin white round backplate
>
> **Mood:** procurement-team practical, the cover of a reference document a sourcing manager would screenshot and share with their team. NOT decorative. NOT marketing. Reads like a *Procurement Magazine* or *Supply Chain Quarterly* feature header.
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No red except orange. No green outside teal. No yellow.

### Plan B
If the ratecard/pouch visualisations look weak, simplify to two coloured boxes with the rate values listed inside (left orange box: "₹/kg" stack of three numbers; right teal box: "₹/sqm" stack of three numbers). The numbers carry the meaning.

---

## IMAGE 2A — Cost Flow Diagram (English) (`cost-flow-en.png`)

**Save as:** `cost-flow-en.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** A clean teaching diagram showing the two-step conversion: ₹/kg → GSM → ₹/sqm. The middle step (GSM = micron × density) is the bridge that makes the conversion possible.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 300-600 KB). No JPEG artifacts, no blur on text.
>
> Create a clean flat-vector editorial concept-diagram. NOT photorealistic. NOT 3D. Pure flat vector with crisp typography. *The Economist* / *Harvard Business Review* methodology-diagram style.
>
> **Background:** cream `#FAF9F6` with subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 10%):**
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **THE TWO-STEP CONVERSION**
> - Title (navy `#1A2744`, large bold sans-serif): **From Supplier ₹/kg to Customer ₹/sqm**
> - Subtitle (grey `#5A5A5A`): *GSM is the bridge. Two simple multiplications turn one unit into the other.*
>
> **Main visual zone (middle 80%) — THREE PANELS in a horizontal row, connected by orange arrows:**
>
> **PANEL 1 — INPUT (orange-themed, left):**
> - Top tag (orange `#E85D26` filled rounded rectangle, white caps): SUPPLIER RATE
> - Big number block: **₹120** (Bebas Neue, ~100 pt, in orange) above tiny label "per kg"
> - Below the big number, smaller text: "× 12 μm thickness"
> - Below that: "× 1.38 density (PET)"
>
> **ARROW between Panel 1 and Panel 2:** large orange `#E85D26` rightward arrow with text above: "Step 1: GSM = μm × density →"
>
> **PANEL 2 — BRIDGE (navy-themed, centre):**
> - Top tag (navy `#1A2744` filled rounded rectangle, white caps): GSM (THE BRIDGE)
> - Big number block: **16.6** (Bebas Neue, ~100 pt, in white on navy panel) above tiny label "g/m²"
> - Below the big number, smaller text: "12 × 1.38 = 16.56"
> - Caption italic: *"grams of material per square metre"*
>
> **ARROW between Panel 2 and Panel 3:** large orange `#E85D26` rightward arrow with text above: "Step 2: ₹/sqm = ₹/kg × GSM ÷ 1000 →"
>
> **PANEL 3 — OUTPUT (teal-themed, right):**
> - Top tag (teal `#0D8C7E` filled rounded rectangle, white caps): CUSTOMER COST
> - Big number block: **₹1.99** (Bebas Neue, ~100 pt, in teal) above tiny label "per sqm"
> - Below the big number, smaller text: "120 × 16.6 ÷ 1000"
> - Caption italic: *"the number your customer actually pays"*
>
> **Below all three panels — DENSITY REFERENCE STRIP (full width, navy background):**
> Navy `#1A2744` background. Single horizontal row of small density tiles:
> Title in orange caps: COMMON DENSITIES (g/cm³)
> Then: PET = 1.38 · BOPP = 0.91 · CPP = 0.90 · LDPE = 0.92 · HDPE = 0.95 · Paper = 0.80 · Nylon = 1.14
>
> **Bottom callout strip (8%):**
> Navy `#1A2744` background, two-column split:
> - LEFT (orange `#E85D26` text, bold): **⚡ The trap to avoid:**
> - RIGHT (white text): *Same ₹/kg does NOT mean same ₹/sqm. PET is 50% denser than BOPP — same micron at same ₹/kg gives different yields. The conversion is not optional.*
>
> **Bottom-right corner:** VKS Tech logo at ~80×80 px on white circle backplate.
> **Bottom-left corner:** small grey footer text: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif throughout. Tag chips in semibold caps. Big numbers in heavy condensed font (Bebas Neue, Anton, Oswald). Formula text in monospace (Menlo, Consolas).
>
> **What to AVOID:** clipart, cartoons, hand-drawn elements, photorealism, isometric/3D effects, decorative borders.

### Plan B
If the three-panel flow looks too cramped, drop the density reference strip (move it to the cheat sheet) and give the three panels more vertical space.

---

## IMAGE 2B — Cost Flow Diagram (Hindi) (`cost-flow-hi.png`)

**Save as:** `cost-flow-hi.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 300-600 KB). No blur on Devanagari text.
>
> Create a flat-vector editorial concept-diagram with EXACTLY the same layout, colour palette, and structure as the English Cost Flow Diagram. Numbers (₹120, 12μm, 1.38, 16.6, ₹1.99, all densities), units (₹/kg, g/m², ₹/sqm, μm), formulas, and material names (PET, BOPP, CPP, LDPE, HDPE, Paper, Nylon) stay in English. Only title, subtitle, panel tags (where translatable), captions, and bottom callout translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow (orange #E85D26, English): THE TWO-STEP CONVERSION
> - Title (Hindi, navy bold, large): **Supplier ₹/kg से Customer ₹/sqm तक**
> - Subtitle (Hindi, grey): *GSM bridge है। दो simple multiplications एक unit को दूसरी में बदलती हैं।*
>
> **PANEL 1 — INPUT (orange):**
> - Tag (English): SUPPLIER RATE
> - Big number ₹120 with English label "per kg"
> - Below: "× 12 μm thickness"
> - Below: "× 1.38 density (PET)"
>
> **ARROW between Panel 1 and 2 (Hindi text):** "Step 1: GSM = μm × density →"
>
> **PANEL 2 — BRIDGE (navy):**
> - Tag (English): GSM (THE BRIDGE)
> - Big number 16.6 with label "g/m²"
> - Below: "12 × 1.38 = 16.56"
> - Caption (Hindi italic): *"per square metre material के grams"*
>
> **ARROW between Panel 2 and 3 (Hindi text):** "Step 2: ₹/sqm = ₹/kg × GSM ÷ 1000 →"
>
> **PANEL 3 — OUTPUT (teal):**
> - Tag (English): CUSTOMER COST
> - Big number ₹1.99 with label "per sqm"
> - Below: "120 × 16.6 ÷ 1000"
> - Caption (Hindi italic): *"वो number जो customer actually pay करता है"*
>
> **DENSITY REFERENCE STRIP** (English): COMMON DENSITIES (g/cm³): PET = 1.38 · BOPP = 0.91 · CPP = 0.90 · LDPE = 0.92 · HDPE = 0.95 · Paper = 0.80 · Nylon = 1.14
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ Avoid करने वाला trap:**
> - RIGHT (white text, Hindi): *Same ₹/kg का मतलब same ₹/sqm नहीं है। PET BOPP से 50% denser है — same ₹/kg पर same micron पर different yields देता है। Conversion optional नहीं है।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 2A.

### Plan B for Hindi
Generate Image 2A first, then replace title, subtitle, captions, arrow text, and bottom callout with proper Devanagari text using Hind or Mukta font in Photopea/Canva. Numbers, units, and material names stay in English.

---

## IMAGE 3 — Cost Cheat Sheet (`cost-cheat-sheet.png`)

**Save as:** `cost-cheat-sheet.png` · **Target dimensions:** 1200×1500 px (4:5 portrait)
**Goal:** A standalone bookmarkable artefact. Procurement teams screenshot this and reference during supplier negotiations. The 9-row reference table covers the most common quote-to-cost translations in Indian flexible packaging.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1200 pixels wide by 1500 pixels tall, 4:5 portrait aspect ratio**. This is a vertical (portrait) format, NOT landscape. Do NOT generate square (1:1) or landscape formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 400-700 KB). Designed to be saved as a phone wallpaper or printed on A4 paper.
>
> Create a clean, professional, bookmark-quality reference cheat sheet — the kind of one-page printable that procurement managers in flexible packaging would tape to the wall next to their supplier ratecard binder. NOT a marketing brochure. A working tool.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture.
>
> **Header zone (top 12% of image):**
> - VKS Tech logo (the attached logo.png) at top-left, ~100×100 px
> - To the right of the logo, two-line header:
>   - Eyebrow line in orange `#E85D26` small caps: VKSTECH.COM REFERENCE CHEAT SHEET
>   - Main title in navy `#1A2744` bold large: **Film Rate to ₹/sqm Quick Reference**
> - Below the title, a thin orange `#E85D26` horizontal divider
>
> **Body zone (middle 76% of image) — TWO sections:**
>
> **TOP SECTION — Common Film-Rate-Cost combinations table:**
>
> Title above the table (navy bold, small): COMMON ₹/kg → ₹/sqm CONVERSIONS
>
> Each row of the table:
> - Film type (left, navy bold)
> - Thickness (semibold)
> - GSM (semibold, smaller)
> - Rate ₹/kg (in orange `#E85D26` semibold)
> - **Cost ₹/sqm** (right-aligned, large, in teal `#0D8C7E` bold)
> - Yield sqm/kg (small, grey)
>
> Header row at top: | FILM | μm | GSM | ₹/kg | ₹/sqm | YIELD |
>
> Rows (9 entries, the same 9 as the blog body table):
> 1. PET — 12 — 16.6 — ₹120 — **₹1.99** — 60.4
> 2. PET — 12 — 16.6 — ₹140 — **₹2.32** — 60.4
> 3. BOPP — 18 — 16.4 — ₹150 — **₹2.46** — 61.1
> 4. BOPP — 25 — 22.8 — ₹145 — **₹3.30** — 43.9
> 5. CPP — 30 — 27.0 — ₹140 — **₹3.78** — 37.0
> 6. LDPE — 50 — 46.0 — ₹110 — **₹5.06** — 21.7
> 7. LDPE — 80 — 73.6 — ₹108 — **₹7.95** — 13.6
> 8. Paper — 80 — 64.0 — ₹75 — **₹4.80** — 15.6
> 9. Nylon (BOPA) — 15 — 17.1 — ₹280 — **₹4.79** — 58.5
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
> - LEFT: A small orange-themed key showing "**ORANGE = SUPPLIER (₹/kg)**"
> - CENTER: A small teal-themed key showing "**TEAL = CUSTOMER (₹/sqm)**"
> - RIGHT: A small navy panel: *Formula: ₹/sqm = ₹/kg × GSM ÷ 1000 · GSM = micron × density · Inverse: max ₹/kg = ₹/sqm × 1000 ÷ GSM*
>
> Above the footer columns, a thin orange divider.
>
> Bottom-most strip with grey small caps: *vkstech.com — More calculators, more cheat sheets, real-plant methodology · Vivek Kumar | M.Tech NIT Uttarakhand*
>
> **Mood:** clean, dense, useful, professional. The kind of reference doc a real procurement engineer would print, laminate, and use weekly. Information density is a feature.
>
> **Typography:** Inter or Söhne sans-serif throughout. ₹/kg values in orange semibold. ₹/sqm values in teal bold. Density values in white Bebas Neue.
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No others.
>
> **What to AVOID:** decorative borders, clipart, drop shadows, gradients, 3D effects.

### Plan B
If the table format looks too cramped at 1200×1500, simplify to 7 rows by combining LDPE entries (drop the 80μm row) and the 145 BOPP entry. The 7 most-used rows still cover 90% of real-world procurement conversations.

### Quality check for the cheat sheet
- All 9 rows visible with correct ₹/kg and ₹/sqm values
- ₹/kg values consistently in orange `#E85D26`
- ₹/sqm values consistently in teal `#0D8C7E`
- All 7 density tiles visible with correct values
- Logo at top-left, brand markers at footer
- Portrait format (taller than wide) — NOT square or landscape
- Clean enough to laminate and use on a procurement desk

---

## REVIEW — 8-Point Check Before Publishing

### 1. Brand colour discipline
✅ Pass: only Navy `#1A2744`, Orange `#E85D26`, Teal `#0D8C7E`, Cream `#FAF9F6`, white, grey
✅ Convention: Orange = ₹/kg side. Teal = ₹/sqm side. Used consistently.

### 2. Typography quality
✅ Pass: clean sans-serif (Inter/Söhne), big numbers in heavy condensed (Bebas/Anton), formulas in monospace

### 3. Number accuracy (HARD)
**Image 1 (Cover):** "PET 12μm @ ₹120/kg → ₹1.99/sqm" / "BOPP 18μm @ ₹150/kg → ₹2.46/sqm" / "LDPE 50μm @ ₹110/kg → ₹5.06/sqm"
**Image 2A/2B (Flow diagram):** "₹120 → 16.6 GSM → ₹1.99/sqm" with all 7 density values
**Image 3 (Cheat sheet):** All 9 row values (1.99, 2.32, 2.46, 3.30, 3.78, 5.06, 7.95, 4.80, 4.79) and all 7 densities

### 4. Source attribution
N/A — formulaic content, no external citations needed.

### 5. Image format and file size
✅ Pass: Images 1, 2A, 2B at 1600×900 widescreen PNG (300-700 KB)
✅ Image 3 at 1200×1500 portrait PNG (400-700 KB)

### 6. Logo placement
✅ Pass: VKS Tech logo at bottom-right (Images 1-2) or top-left (Image 3 cheat sheet), ~80–110 px

### 7. Information density
✅ Pass: cover reads as "supplier ratecard vs customer pouch + formula" in 5 sec; flow diagram reads in 10 sec; cheat sheet dense by design

### 8. No AI-tells
❌ Avoid: identifiable faces, distorted hands, garbled small text, AI watermarks

---

## TROUBLESHOOTING

- **Image comes out as a square (1:1):** Re-paste the prompt and re-emphasize the IMAGE SPEC line. For Image 3, double-check it's portrait (1200×1500).
- **Numbers come out wrong:** Always overlay correct numbers in an editor afterward. AI image models are unreliable with numerics.
- **Ratecard / pouch visualisation looks confusing:** Replace with two simple coloured boxes (orange box: ₹/kg stack of 3 numbers; teal box: ₹/sqm stack of 3 numbers).
- **Hindi renders as gibberish:** Generate EN version first, replace text in Photopea/Canva using Hind or Mukta font.
- **Decorative clutter:** Add: *"STRICTLY no decorative elements, no clipart, no flourishes."*

## Folder Structure When Complete

```
36-cost-per-sqm-calculator/
├── index.html
├── logo.png                       (already provided)
├── cover.png                      (Image 1)
├── cost-flow-en.png               (Image 2A)
├── cost-flow-hi.png               (Image 2B)
├── cost-cheat-sheet.png           (Image 3 — STANDALONE BOOKMARK)
├── GEMINI-PROMPTS.md              (markdown reference)
└── GEMINI-PROMPTS.html            (interactive page with copy buttons)
```
