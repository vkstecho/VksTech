# GEMINI IMAGE PROMPTS — Blog 35: Roll OD Calculator

## Quick Reference

**4 images required** — 1 cover + 2 bilingual concept diagrams + 1 standalone cheat sheet

| # | Filename | Aspect | What it shows |
|---|---|---|---|
| 1 | `cover.png` | 16:9 | Cover — film roll cross-section + the killer formula + chuck-fit visual |
| 2A | `roll-od-diagram-en.png` | 16:9 | Annular geometry diagram showing how the formula derives (English) |
| 2B | `roll-od-diagram-hi.png` | 16:9 | Same as 2A in Hindi |
| 3 | `chuck-fit-cheat-sheet.png` | 4:5 portrait | **Standalone cheat sheet** — 7 common roll OD presets + chuck limits |

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
| Orange | `#E85D26` | Accents, hero numbers, "warning/borderline" |
| Teal | `#0D8C7E` | Secondary, "safe/within-limit" indicators |
| Cream | `#FAF9F6` | Backgrounds |
| Grey | `#5A5A5A` | Subtitles, captions |

**Convention:** Orange = warning/borderline (over chuck limit risk). Teal = safe/within limit. Used consistently in chuck-fit indicators across cover and cheat sheet.

**Fonts:** Inter, Söhne, Helvetica Neue (Latin); Hind, Mukta (Devanagari). Big numbers in Bebas Neue, Anton, or Oswald.

**Critical numbers:** **694 mm** (standard PET 12μm 30,000m / 152mm core) · **887 mm** (large PET 12μm 50,000m — borderline) · **600/800/900 mm** (common chuck limits) · **76/152 mm** (common core sizes).

**Rules:** No identifiable faces, no clipart, no decorative flourishes. WSJ / Bloomberg / HBR editorial style only.

---

## IMAGE 1 — Cover (`cover.png`)

**Save as:** `cover.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** Visual hook for the OD formula. Make the reader instantly understand "this is the calculator for roll-fits-on-chuck."

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. The output must be widescreen landscape. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized for fast loading (target file size 400-700 KB). No JPEG artifacts, no blur, no fuzzy edges on text.
>
> Create an editorial magazine-cover image for a flexible-packaging industry blog post titled "Roll OD Calculator — The 30-Second Answer to 'Will This Jumbo Fit?'"
>
> **Composition** — left two-thirds is a cross-section visual of a film roll, right one-third is a hero text panel.
>
> **LEFT TWO-THIRDS — film roll cross-section visual:**
>
> A horizontal stage on a clean cream `#FAF9F6` background with subtle paper-grain texture. Centred on the stage, a large flat-vector cross-section view of a film roll, viewed end-on:
>
> - **Outer circle (the predicted OD)**: a navy `#1A2744` thick ring representing the wound film, radius scaled to roughly 50% of stage height. Dimension arrow inside the ring with "OD = 694 mm" label in white bold caps.
> - **Inner circle (the core)**: a smaller orange `#E85D26` filled circle in the centre, representing the 152 mm core. Inside the core, small white text: "152 mm CORE"
> - **Annular space**: between the outer ring and core, the wound film is shown as a gradient of fine concentric lines (radial pattern, very subtle, suggesting wound layers — like a tree-ring cross-section). Use a very light navy on cream.
> - **Below the cross-section**, a thin orange dimension line showing the radial thickness with label "RADIAL FILM = 271 mm" in tiny navy caps.
>
> To the right of the cross-section, a small inset showing a slitter chuck silhouette with three concentric circles labelled "600 mm", "800 mm", "900 mm" — and a green tick mark next to the 800 and 900 indicators (showing the 694 mm OD fits comfortably). Inset title above: "CHUCK FIT-CHECK"
>
> Above the entire visual, a single line of text in tiny navy caps centred: **EVERY METALLISER ROLL HAS A PREDICTABLE OD. CALCULATE IT BEFORE YOU CYCLE.**
>
> Below the visual, the formula displayed prominently in a centred horizontal box:
> Box style: navy `#1A2744` background, white monospace text: **OD = √( (4 × L × μm) / π + Core² )**
>
> **RIGHT ONE-THIRD — navy `#1A2744` editorial panel with subtle paper-grain texture:**
>
> - Top eyebrow strip in orange `#E85D26`, all caps, small letterspacing: **vksTech.com / FREE CALCULATORS**
> - Main title in white Inter Bold or Söhne Bold (3-4 lines, large): **Roll OD Calculator**
> - Subtitle (smaller italic, grey `#FAF9F6` opacity 0.8): *Will this jumbo fit on the slitter chuck? Find out in 30 seconds.*
> - HORIZONTAL DIVIDER (orange `#E85D26`, 2 px thin)
> - HERO STAT BLOCK — three rows showing the example progression:
>   - **30,000 m** (white, ~50pt Bebas Neue): 12 μm PET → **694 mm OD** (in teal — safe)
>   - **50,000 m** (white, ~50pt): 12 μm PET → **887 mm OD** (in orange — borderline)
>   - **MAX LENGTH** (white, ~50pt): for 900 mm chuck → **51,500 m** (in orange/teal mix)
> - Small text below: PET 12 μm on 152 mm core. Other thicknesses in the blog table.
> - Bottom strip: small text — **Vivek Kumar | M.Tech NIT Uttarakhand | 9+ Years Flexible Packaging**
> - In the bottom-right corner of this panel, place the attached VKS Tech logo at ~100×100 px on a thin white round backplate
>
> **Mood:** technical, useful, the cover of a reference document an operator would screenshot and share. NOT decorative. NOT marketing. Reads like an *Engineering News-Record* or *Industrial Engineer* feature header.
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No red except orange. No green outside teal. No yellow.

### Plan B
If the cross-section visual looks weak, simplify to two concentric circles (outer = navy, inner = orange) with dimension arrows and labels. The formula in the centre carries the meaning even with simple geometry.

---

## IMAGE 2A — Roll OD Diagram (English) (`roll-od-diagram-en.png`)

**Save as:** `roll-od-diagram-en.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** A clean teaching diagram explaining how the OD formula works geometrically. Show the conservation-of-area derivation visually.

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
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **THE GEOMETRY BEHIND THE FORMULA**
> - Title (navy `#1A2744`, large bold sans-serif): **Why OD = √( (4 × L × μm) / π + Core² )**
> - Subtitle (grey `#5A5A5A`): *Conservation of area: unrolled film cross-section equals annular ring cross-section.*
>
> **Main visual zone (middle 80%) — TWO PANELS side by side, 50/50 split, connected by a centre "= EQUALS =" symbol in orange:**
>
> **LEFT PANEL — UNROLLED FILM (showing the input quantities):**
> - Top tag (orange `#E85D26` filled rounded rectangle, white caps): IF UNROLLED FLAT
> - Visual: A long horizontal flat strip of film, navy `#1A2744` outline, with very light fill. Length dimension along the bottom labeled "LENGTH = L (metres)". Thickness dimension on the left side labeled "THICKNESS = μm (microns)". Width direction visible but not emphasized.
> - Below the visual: a small equation box (light orange tinted background, navy text): **Area (end-on view) = L × μm**
>
> **RIGHT PANEL — WOUND ON CORE (showing the output OD):**
> - Top tag (teal `#0D8C7E` filled rounded rectangle, white caps): WHEN WOUND ON A CORE
> - Visual: A circular ring (annulus) cross-section. Outer circle navy `#1A2744` thick ring representing the OD. Inner circle orange `#E85D26` filled circle representing the core. The annular area between them is shown with very subtle concentric lines (suggesting wound layers).
>   - Dimension arrow inside the ring with label "OD = ?"
>   - Inside the core, small white text: "Core"
>   - On the side, a small label arrow pointing to the annulus: "Annular ring (the wound film)"
> - Below the visual: a small equation box (light teal tinted background, navy text): **Annular Area = (π/4) × (OD² − Core²)**
>
> **Below both panels — SOLVE STRIP (full width, navy background):**
> Navy `#1A2744` background. Single centred equation rendered in white monospace, large:
> **L × μm = (π/4) × (OD² − Core²)**
> Below this, a tiny arrow ↓
> Then the rearranged formula in white bold larger: **OD = √( (4 × L × μm) / π + Core² )**
>
> **Bottom callout strip (full-width, 8% of height):**
> Navy `#1A2744` background. Two-column split:
> - LEFT (orange `#E85D26` text, bold): **⚡ One assumption:**
> - RIGHT (white text): *Perfect winding, no air gaps, no telescoping. Real metalliser-wound film is 1-3% looser — design with safety margin against chuck limits.*
>
> **Bottom-right corner:** VKS Tech logo at ~80×80 px on white circle backplate.
> **Bottom-left corner:** small grey footer text: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif throughout. Tag chips in semibold caps. Equation in monospace (Menlo, Consolas, or similar).
>
> **What to AVOID:** clipart, cartoons, hand-drawn elements, photorealism, isometric/3D effects, decorative borders, gradients beyond very subtle box shadows.

### Plan B
If the cross-section annulus visualisation looks weak, replace with two simple concentric circles (outer dark navy ring, inner orange circle) with the equation labels carrying the meaning.

---

## IMAGE 2B — Roll OD Diagram (Hindi) (`roll-od-diagram-hi.png`)

**Save as:** `roll-od-diagram-hi.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 300-600 KB). No blur on Devanagari text.
>
> Create a flat-vector editorial concept-diagram with EXACTLY the same layout, colour palette, and structure as the English Roll OD Diagram. Mathematical symbols (L, μm, OD, Core, π), units (metres, microns, mm), and equations stay in English/symbolic. Only title, subtitle, panel tags (where translatable), and bottom callout translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow (orange #E85D26, English): THE GEOMETRY BEHIND THE FORMULA
> - Title (Hindi, navy bold, large): **OD = √( (4 × L × μm) / π + Core² ) क्यों?**
> - Subtitle (Hindi, grey): *Conservation of area: unrolled film cross-section = annular ring cross-section।*
>
> **LEFT PANEL — UNROLLED FILM:**
> - Tag (English): IF UNROLLED FLAT
> - Visual: same as English version
> - Equation box (Hindi+English mix): **Area (end-on view) = L × μm**
>
> **RIGHT PANEL — WOUND ON CORE:**
> - Tag (English): WHEN WOUND ON A CORE
> - Visual: same as English version with "Core" label inside core circle (English)
> - Side label (Hindi): "Annular ring (wound film)"
> - Equation box: **Annular Area = (π/4) × (OD² − Core²)**
>
> **SOLVE STRIP (navy background):**
> Same equations in white monospace as English version (mathematical equations are universal).
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ एक assumption:**
> - RIGHT (white text, Hindi): *Perfect winding, no air gaps, no telescoping। Real metalliser-wound film 1-3% looser होती है — chuck limits के against safety margin से design करें।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 2A.

### Plan B for Hindi
Generate Image 2A first, then replace title, subtitle, side labels, and bottom callout with proper Devanagari text using Hind or Mukta font in Photopea/Canva. Mathematical equations and symbols stay in English.

---

## IMAGE 3 — Chuck-Fit Cheat Sheet (`chuck-fit-cheat-sheet.png`)

**Save as:** `chuck-fit-cheat-sheet.png` · **Target dimensions:** 1200×1500 px (4:5 portrait)
**Goal:** A standalone bookmarkable artefact. Operators screenshot this, print and laminate it, paste it next to the slitter unwind chuck for instant reference.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1200 pixels wide by 1500 pixels tall, 4:5 portrait aspect ratio**. This is a vertical (portrait) format, NOT landscape. Do NOT generate square (1:1) or landscape formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 400-700 KB). Designed to be saved as a phone wallpaper or printed on A4 paper.
>
> Create a clean, professional, bookmark-quality reference cheat sheet — the kind of one-page printable that operators on a flexible packaging shop floor would tape next to their slitter unwind. NOT a marketing brochure. A working tool.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture.
>
> **Header zone (top 12% of image):**
> - VKS Tech logo (the attached logo.png) at top-left, ~100×100 px
> - To the right of the logo, two-line header:
>   - Eyebrow line in orange `#E85D26` small caps: VKSTECH.COM REFERENCE CHEAT SHEET
>   - Main title in navy `#1A2744` bold large: **Roll OD vs Chuck Limits**
> - Below the title, a thin orange `#E85D26` horizontal divider
>
> **Body zone (middle 76% of image) — TWO sections:**
>
> **TOP SECTION — Common Roll OD Predictions table:**
>
> Title above the table (navy bold, small): COMMON ROLL OD PREDICTIONS
>
> Each row of the table:
> - Film type (left, navy bold)
> - Length (semibold)
> - Thickness (semibold)
> - Core (semibold)
> - **Predicted OD** (right-aligned, large, in colour-coded text — see below)
>
> Header row at top: | FILM | LENGTH | μm | CORE | OD |
>
> Rows (with OD colour-coded by chuck-fit safety: teal #0D8C7E if ≤800mm, orange #E85D26 if >800mm):
>
> 1. PET — 30,000 m — 12 μm — 152 mm — **694 mm** (teal, safe)
> 2. PET — 50,000 m — 12 μm — 152 mm — **887 mm** (orange, borderline)
> 3. PET — 20,000 m — 12 μm — 76 mm — **558 mm** (teal, safe)
> 4. BOPP — 25,000 m — 18 μm — 152 mm — **772 mm** (teal, safe)
> 5. BOPP — 18,000 m — 25 μm — 76 mm — **761 mm** (teal, safe)
> 6. CPP — 12,000 m — 30 μm — 152 mm — **694 mm** (teal, safe)
> 7. LDPE — 6,000 m — 50 μm — 76 mm — **623 mm** (teal, safe)
>
> **MIDDLE DIVIDER STRIP — small orange horizontal line.**
>
> **BOTTOM SECTION — Chuck Limits Reference (3-tile horizontal grid):**
>
> Title above (navy bold, small): SLITTER CHUCK LIMITS
>
> Three tiles in a row:
>
> Tile 1 (orange-tinted top stripe):
> - Top label: SMALL MACHINE
> - Big number (Bebas Neue, ~80pt): **600 mm** (orange)
> - Subtext (grey): tightest typical chuck OD
>
> Tile 2 (teal-tinted top stripe):
> - Top label: STANDARD MACHINE
> - Big number: **800 mm** (teal)
> - Subtext: most common chuck capacity
>
> Tile 3 (orange-tinted top stripe):
> - Top label: LARGE INDUSTRIAL
> - Big number: **900 mm** (teal)
> - Subtext: max for big slitters
>
> **Footer zone (bottom 12% of image):**
>
> Three columns:
> - LEFT: A small teal-themed key showing "**TEAL = SAFE FIT**"
> - CENTER: A small orange-themed key showing "**ORANGE = BORDERLINE / CHECK**"
> - RIGHT: A small navy panel: *Formula: OD = √( (4 × L × μm) / π + Core² ). Real winding is 1-3% looser — design with safety margin.*
>
> Above the footer columns, a thin orange divider.
>
> Bottom-most strip with grey small caps: *vkstech.com — More calculators, more cheat sheets, real-plant methodology · Vivek Kumar | M.Tech NIT Uttarakhand*
>
> **Mood:** clean, dense, useful, professional. The kind of reference doc a real engineer would print and use. Information density is a feature, not a bug.
>
> **Typography:** Inter or Söhne sans-serif throughout. Numbers in semibold. Film type names bold navy.
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No others.
>
> **What to AVOID:** decorative borders, clipart, drop shadows, gradients, 3D effects.

### Plan B
If the table format looks too cramped at 1200×1500, simplify to 5 rows by combining lower-volume entries (drop CPP and LDPE rows; their use cases are less common). The 5 most-used rows still cover 90% of real-world planning scenarios.

### Quality check for the cheat sheet
- All 7 roll examples visible with correct OD values (694, 887, 558, 772, 761, 694, 623)
- OD values colour-coded (teal ≤800, orange >800)
- Three chuck-limit tiles visible with correct numbers (600, 800, 900)
- Logo at top-left, brand markers at footer
- Portrait format (taller than wide) — NOT square or landscape
- Clean enough to laminate and use on a shop floor

---

## REVIEW — 8-Point Check Before Publishing

### 1. Brand colour discipline
✅ Pass: only Navy `#1A2744`, Orange `#E85D26`, Teal `#0D8C7E`, Cream `#FAF9F6`, white, grey

### 2. Typography quality
✅ Pass: clean sans-serif (Inter/Söhne), big numbers in heavy condensed (Bebas/Anton), formulas in monospace

### 3. Number accuracy (HARD)
**Image 1 (Cover):** "OD = 694 mm" / "RADIAL = 271 mm" / "152 mm CORE" / "30,000 m → 694 mm" / "50,000 m → 887 mm" / "MAX 51,500 m for 900 mm chuck"
**Image 2A/2B (Geometry):** Both equations rendered correctly: "Area = L × μm" and "Annular Area = (π/4) × (OD² − Core²)"
**Image 3 (Cheat sheet):** All 7 row OD values (694, 887, 558, 772, 761, 694, 623) and all 3 chuck limits (600, 800, 900)

### 4. Source attribution
N/A — formulaic content, no external citations needed.

### 5. Image format and file size
✅ Pass: Images 1, 2A, 2B at 1600×900 widescreen PNG (300-700 KB)
✅ Image 3 at 1200×1500 portrait PNG (400-700 KB)

### 6. Logo placement
✅ Pass: VKS Tech logo at bottom-right (Images 1-2) or top-left (Image 3 cheat sheet), ~80–110 px

### 7. Information density
✅ Pass: cover reads as "roll cross-section + formula + chuck-fit" in 5 sec; geometry diagram reads in 10 sec; cheat sheet dense by design

### 8. No AI-tells
❌ Avoid: identifiable faces, distorted hands, garbled small text, AI watermarks

---

## TROUBLESHOOTING

- **Image comes out as a square (1:1):** Re-paste the prompt and re-emphasize the IMAGE SPEC line. For Image 3, double-check it's portrait (1200×1500).
- **Numbers come out wrong:** Always overlay correct numbers in an editor afterward. AI image models are unreliable with numerics.
- **Cross-section visualisation looks confusing:** Replace with two simple concentric circles. The formula carries the meaning.
- **Hindi renders as gibberish:** Generate EN version first, replace text in Photopea/Canva using Hind or Mukta font.
- **Decorative clutter:** Add: *"STRICTLY no decorative elements, no clipart, no flourishes."*

## Folder Structure When Complete

```
35-roll-od-calculator/
├── index.html
├── logo.png                       (already provided)
├── cover.png                      (Image 1)
├── roll-od-diagram-en.png         (Image 2A)
├── roll-od-diagram-hi.png         (Image 2B)
├── chuck-fit-cheat-sheet.png      (Image 3 — STANDALONE BOOKMARK)
├── GEMINI-PROMPTS.md              (markdown reference)
└── GEMINI-PROMPTS.html            (interactive page with copy buttons)
```
