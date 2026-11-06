# GEMINI IMAGE PROMPTS — Blog 39: Machine Utilisation % Calculator

## Quick Reference

**4 images required** — 1 cover + 2 bilingual concept diagrams + 1 standalone cheat sheet

| # | Filename | Aspect | What it shows |
|---|---|---|---|
| 1 | `cover.png` | 16:9 | Cover — shift timeline showing setup/downtime/running breakdown |
| 2A | `utilisation-flow-en.png` | 16:9 | Utilisation vs OEE comparison diagram (English) |
| 2B | `utilisation-flow-hi.png` | 16:9 | Same as 2A in Hindi |
| 3 | `utilisation-cheat-sheet.png` | 4:5 portrait | **Standalone cheat sheet** — 6 shift scenarios + 3 definitions table |

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
| Orange | `#E85D26` | Accents, hero numbers, downtime/setup blocks |
| Teal | `#0D8C7E` | Secondary, running-time blocks |
| Cream | `#FAF9F6` | Backgrounds |
| Grey | `#5A5A5A` | Subtitles, captions |

**Convention:** Teal = running time (productive). Orange = setup + downtime (lost time). Used consistently across cover, comparison diagram, and cheat sheet.

**Fonts:** Inter, Söhne, Helvetica Neue (Latin); Hind, Mukta (Devanagari). Big numbers in Bebas Neue, Anton, or Oswald. Formulas in monospace (Menlo, Consolas).

**Critical numbers:** Excellent 8-hr shift = **89.6%** util · Average 8-hr shift = **78.1%** · Standard 12-hr = **83.3%** · Utilisation × Performance × Quality = **OEE** (the most-confused relationship in flex-pack).

**Rules:** No identifiable faces, no clipart, no decorative flourishes. WSJ / Bloomberg / HBR editorial style only.

---

## IMAGE 1 — Cover (`cover.png`)

**Save as:** `cover.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** Visual hook for utilisation. Show the 8-hour shift broken into setup, downtime, and running blocks.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. The output must be widescreen landscape. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized for fast loading (target file size 400-700 KB).
>
> Create an editorial magazine-cover image for a flexible-packaging industry blog post titled "Machine Utilisation % — The Metric Most Plant Managers Confuse with OEE."
>
> **Composition** — left two-thirds is a horizontal shift-timeline visual, right one-third is the hero text panel.
>
> **LEFT TWO-THIRDS — shift timeline visual:**
>
> A horizontal stage on a clean cream `#FAF9F6` background with subtle paper-grain texture. The visual is a single long horizontal time-bar representing an 8-hour metalliser shift, divided into 3 colour-coded zones:
>
> - **The bar:** A long horizontal rectangle spanning ~80% of the panel width. The bar is divided horizontally into three segments:
>   - **Setup zone (LEFT):** orange `#E85D26` filled, ~10% of bar width. Inside the segment, white text: "SETUP / 45 min / 9.4%"
>   - **Running zone (MIDDLE):** teal `#0D8C7E` filled, ~78% of bar width. Inside, white bold large text: "RUNNING / 375 min / 78.1%"
>   - **Downtime zone (RIGHT):** orange `#E85D26` filled, ~12% of bar width. Inside, white text: "DOWNTIME / 60 min / 12.5%"
> - Above the bar, a tick-mark scale showing time progression in hours: 0h ─ 1h ─ 2h ─ 3h ─ 4h ─ 5h ─ 6h ─ 7h ─ 8h
> - Below the bar, a single line connecting the entire bar with the label "TOTAL SHIFT = 480 min (8 hours)"
> - Below this label, a centred bracket pointing to just the teal middle zone with the text: "RUNNING ÷ TOTAL = 375 ÷ 480 = **78.1% UTILISATION**"
>
> Above the timeline, a single line of text in tiny navy caps centred: **THE METRIC THAT SETS THE CEILING ON CAPACITY.**
>
> Below the visual, the formula displayed prominently in a centred horizontal box:
> Box style: navy `#1A2744` background, white monospace text: **Utilisation % = (Running ÷ Shift) × 100**
>
> **RIGHT ONE-THIRD — navy `#1A2744` editorial panel with subtle paper-grain texture:**
>
> - Top eyebrow strip in orange `#E85D26`, all caps, small letterspacing: **vksTech.com / FREE CALCULATORS**
> - Main title in white Inter Bold or Söhne Bold (3-4 lines, large): **Machine Utilisation %**
> - Subtitle (smaller italic, grey `#FAF9F6` opacity 0.8): *The metric most plant managers confuse with OEE.*
> - HORIZONTAL DIVIDER (orange `#E85D26`, 2 px thin)
> - HERO STAT BLOCK — three rows showing benchmark tiers:
>   - **≥85%** (white, ~50pt Bebas Neue): EXCELLENT (in teal)
>   - **78-83%** (white, ~50pt): ON BENCHMARK
>   - **≤75%** (white, ~50pt): INVESTIGATE (in orange)
> - Small text below: *Setup + Downtime + Running = Total Shift Time. Pick a definition; stick to it.*
> - Bottom strip: small text — **Vivek Kumar | M.Tech NIT Uttarakhand | 9+ Years Flexible Packaging**
> - In the bottom-right corner of this panel, place the attached VKS Tech logo at ~100×100 px on a thin white round backplate
>
> **Mood:** plant-floor reference. The cover of an engineering-magazine feature for industrial supervisors. NOT decorative.
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No red except orange. No green outside teal.

### Plan B
If the timeline bar visualisation is unclear, simplify to two stacked bars: top = "TOTAL SHIFT 480 min" (navy), bottom = "RUNNING 375 min" (teal), with the difference labelled "SETUP+DOWNTIME 105 min" (orange).

---

## IMAGE 2A — Utilisation vs OEE Diagram (English) (`utilisation-flow-en.png`)

**Save as:** `utilisation-flow-en.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** Show why utilisation alone is not OEE. Make the 3-leg structure of OEE obvious.

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
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **UTILISATION ≠ OEE**
> - Title (navy `#1A2744`, large bold sans-serif): **Three Legs of OEE — Why Utilisation is Only One**
> - Subtitle (grey `#5A5A5A`): *Same machine, same utilisation, dramatically different real output.*
>
> **Main visual zone (middle 76%) — a 3-PANEL formula visual + bottom comparison strip:**
>
> **TOP — Formula visual (3 columns multiplied together to give OEE):**
>
> Three equal-width panels in a row, with × symbols between them and = OEE on the right:
>
> - **Panel 1 — UTILISATION (orange theme):**
>   - Top tag (orange filled): UTILISATION
>   - Big number: **85%** (Bebas Neue, ~70pt)
>   - Sub-formula: "Running ÷ Shift"
>   - Sub-caption italic: *Was the machine running?*
>
> - **× symbol** (large navy)
>
> - **Panel 2 — PERFORMANCE (teal theme):**
>   - Top tag (teal filled): PERFORMANCE
>   - Big number: **70%** (Bebas Neue, ~70pt)
>   - Sub-formula: "Actual ÷ Rated speed"
>   - Sub-caption italic: *Was it running fast?*
>
> - **× symbol** (large navy)
>
> - **Panel 3 — QUALITY (orange theme):**
>   - Top tag (orange filled): QUALITY
>   - Big number: **95%** (Bebas Neue, ~70pt)
>   - Sub-formula: "Good ÷ Total output"
>   - Sub-caption italic: *Was the output good?*
>
> - **= symbol** (large navy)
>
> - **OEE Result (navy theme):**
>   - Top tag (navy filled): OEE
>   - Big number: **57%** (Bebas Neue, ~80pt, in teal)
>   - Sub-caption italic: *0.85 × 0.70 × 0.95*
>
> **BOTTOM — Comparison strip — TWO MACHINES, SAME UTILISATION (full width navy background):**
> Title (orange caps): TWO METALLISERS — IDENTICAL UTILISATION, DIFFERENT REALITY
> Two-column split:
> - LEFT: "Machine A: 85% utilisation × 100% speed × 99% quality = **84% OEE**" (in teal)
> - RIGHT: "Machine B: 85% utilisation × 70% speed × 92% quality = **55% OEE**" (in orange)
> Small caption below, centred: *Same headline number. 29-point gap in real output. Tracking only utilisation hides this.*
>
> **Bottom callout strip (8%):**
> Navy `#1A2744` background, two-column split:
> - LEFT (orange `#E85D26` text, bold): **⚡ The fix:**
> - RIGHT (white text): *Track utilisation, performance, and quality separately. Report all three. OEE without the breakdown is a comfort number, not a management tool.*
>
> **Bottom-right corner:** VKS Tech logo at ~80×80 px on white circle backplate.
> **Bottom-left corner:** small grey footer: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif throughout. Big numbers in Bebas Neue. Tag chips in semibold caps. Equations in monospace.
>
> **What to AVOID:** clipart, cartoons, hand-drawn elements, photorealism, 3D effects.

### Plan B
If the 4-panel formula visual is too cramped horizontally, stack the three input panels vertically with an arrow flowing into a single OEE result panel on the right.

---

## IMAGE 2B — Utilisation vs OEE Diagram (Hindi) (`utilisation-flow-hi.png`)

**Save as:** `utilisation-flow-hi.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 300-600 KB). No blur on Devanagari text.
>
> Create a flat-vector editorial concept-diagram with EXACTLY the same layout, colour palette, and structure as the English Utilisation vs OEE Diagram. Numbers (85%, 70%, 95%, 57%, etc.), formulas, and metric names (OEE, UTILISATION, PERFORMANCE, QUALITY) stay in English. Only title, subtitle, panel sub-captions, comparison strip caption, and bottom callout translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow (orange #E85D26, English): UTILISATION ≠ OEE
> - Title (Hindi, navy bold, large): **OEE के तीन Legs — Utilisation सिर्फ़ एक है**
> - Subtitle (Hindi, grey): *Same machine, same utilisation, dramatically different real output।*
>
> **TOP formula visual:**
> - Panel 1 UTILISATION sub-caption (Hindi italic): *Machine running थी?*
> - Panel 2 PERFORMANCE sub-caption (Hindi italic): *Fast running थी?*
> - Panel 3 QUALITY sub-caption (Hindi italic): *Output good था?*
> - All formulas, numbers, panel tags stay in English
>
> **BOTTOM comparison strip:**
> - Title (English): TWO METALLISERS — IDENTICAL UTILISATION, DIFFERENT REALITY
> - Both two-column lines stay in English (numerical comparison)
> - Caption below (Hindi italic): *Same headline number। Real output में 29-point gap। सिर्फ़ utilisation track करना ये छिपाता है।*
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ Fix:**
> - RIGHT (white text, Hindi): *Utilisation, performance, और quality separately track करें। तीनों report करें। Breakdown के बिना OEE comfort number है, management tool नहीं।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 2A.

### Plan B for Hindi
Generate Image 2A first, then replace title, subtitle, sub-captions, comparison caption, and bottom callout with Devanagari text using Hind or Mukta font in Photopea/Canva. Numbers, formulas, and metric names stay in English.

---

## IMAGE 3 — Utilisation Cheat Sheet (`utilisation-cheat-sheet.png`)

**Save as:** `utilisation-cheat-sheet.png` · **Target dimensions:** 1200×1500 px (4:5 portrait)
**Goal:** A standalone bookmarkable artefact. Shift supervisors screenshot this for daily use at metalliser handover meetings.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1200 pixels wide by 1500 pixels tall, 4:5 portrait aspect ratio**. This is a vertical (portrait) format, NOT landscape. Do NOT generate square (1:1) or landscape formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 400-700 KB).
>
> Create a clean, professional, bookmark-quality reference cheat sheet — the kind of one-page printable that a metalliser shift supervisor would tape to the wall next to the shift handover desk. NOT a marketing brochure. A working tool.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture.
>
> **Header zone (top 12% of image):**
> - VKS Tech logo (the attached logo.png) at top-left, ~100×100 px
> - To the right of the logo, two-line header:
>   - Eyebrow line in orange `#E85D26` small caps: VKSTECH.COM REFERENCE CHEAT SHEET
>   - Main title in navy `#1A2744` bold large: **Metalliser Shift Utilisation**
> - Below the title, a thin orange `#E85D26` horizontal divider
>
> **Body zone (middle 76% of image) — TWO sections:**
>
> **TOP SECTION — Shift Scenarios table (6 rows):**
>
> Title above the table (navy bold, small): SHIFT SCENARIOS REFERENCE
>
> Each row:
> - Scenario (left, navy bold)
> - Shift / Setup / Down (semibold, smaller)
> - Running (semibold, in teal `#0D8C7E`)
> - **Utilisation %** (right-aligned, large, colour-coded by tier: teal if ≥85, navy if 78-84, orange if <78)
> - Verdict (small grey italic on the right)
>
> Header row at top: | SCENARIO | SHIFT/SETUP/DOWN | RUNNING | UTIL % | VERDICT |
>
> Rows (6 entries):
> 1. Excellent 8-hr — 480/30/20 — 430 min — **89.6%** (teal) — Top quartile
> 2. Average 8-hr — 480/45/60 — 375 min — **78.1%** (navy) — Median
> 3. Poor 8-hr (breakdown) — 480/60/180 — 240 min — **50.0%** (orange) — Investigate
> 4. Standard 12-hr — 720/60/60 — 600 min — **83.3%** (navy) — On benchmark
> 5. 12-hr mid-cycle issue — 720/90/180 — 450 min — **62.5%** (orange) — Below average
> 6. 24-hr day — 1440/90/120 — 1230 min — **85.4%** (teal) — Healthy day
>
> **MIDDLE DIVIDER STRIP — small orange horizontal line.**
>
> **BOTTOM SECTION — 3 Definitions table:**
>
> Title above (navy bold, small): SAME SHIFT, THREE DEFINITIONS
>
> Each row:
> - Definition (left, navy bold)
> - Setup includes (small semibold)
> - Downtime includes (small semibold)
> - **Sample utilisation** (right-aligned, in colour-coded text)
>
> Header row: | DEFINITION | SETUP INCLUDES | DOWNTIME INCLUDES | UTIL % |
>
> 3 rows:
> 1. Strict (operator-friendly) — Only first-roll setup — Only unplanned breakdown — **91%** (teal)
> 2. Standard (most plants) — All changeover + start-up — All unplanned + boat changes — **78%** (navy)
> 3. Strict (capacity-planning) — All non-running including PM — All non-running including breaks — **65%** (orange)
>
> Below the table, small footer line: *Same actual events, three categorisation choices. Pick one. Document. Stick with it.*
>
> **Footer zone (bottom 12% of image):**
>
> Three columns:
> - LEFT: A small teal-themed key showing "**TEAL = RUNNING TIME**"
> - CENTER: A small orange-themed key showing "**ORANGE = SETUP + DOWNTIME**"
> - RIGHT: A small navy panel: *Formula: Util % = (Run ÷ Shift) × 100. Where Run = Shift − Setup − Down. OEE = Util × Performance × Quality.*
>
> Above the footer columns, a thin orange divider.
>
> Bottom-most strip with grey small caps: *vkstech.com — More calculators, more cheat sheets, real-plant methodology · Vivek Kumar | M.Tech NIT Uttarakhand*
>
> **Mood:** clean, dense, useful, professional. The kind of reference doc a real metalliser supervisor would print, laminate, and use weekly.
>
> **Typography:** Inter or Söhne sans-serif throughout. Utilisation values colour-coded (teal good, navy average, orange poor). Big numbers in semibold or Bebas Neue.
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No others.
>
> **What to AVOID:** decorative borders, clipart, drop shadows, gradients, 3D effects.

### Plan B
If both tables together look cramped, drop one of the 6 shift scenario rows (the 24-hr reference) to save space, or render the bottom 3-definitions table at smaller font size with simpler labels.

---

## REVIEW — 8-Point Check Before Publishing

### 1. Brand colour discipline
✅ Pass: only Navy / Orange / Teal / Cream / white / grey
✅ Convention: Teal = running. Orange = setup/downtime.

### 2. Typography quality
✅ Pass: clean sans-serif, big numbers in heavy condensed, formulas in monospace

### 3. Number accuracy (HARD)
**Cover:** Setup 45/9.4%, Running 375/78.1%, Downtime 60/12.5%, Total 480 min
**Flow 2A/2B:** "85% × 70% × 95% = 57% OEE", Machine A 84% vs Machine B 55%
**Cheat sheet:** All 6 scenario util values (89.6%, 78.1%, 50.0%, 83.3%, 62.5%, 85.4%) and 3 definition values (91%, 78%, 65%)

### 4. Source attribution
N/A — formulaic content, no external citations needed.

### 5. Image format and file size
✅ Images 1, 2A, 2B at 1600×900 widescreen PNG (300-700 KB)
✅ Image 3 at 1200×1500 portrait PNG (400-700 KB)

### 6. Logo placement
✅ Bottom-right (Images 1-2) or top-left (Image 3 cheat sheet), ~80–110 px

### 7. Information density
✅ Cover 5 sec, comparison diagram 10 sec, cheat sheet dense by design

### 8. No AI-tells
❌ Avoid: identifiable faces, distorted hands, garbled small text

---

## TROUBLESHOOTING

- **Image comes out as a square (1:1):** Re-paste the prompt and re-emphasize the IMAGE SPEC line.
- **Numbers come out wrong:** Always overlay correct numbers in an editor afterward.
- **Hindi renders as gibberish:** Generate EN version first, replace text in Photopea/Canva using Hind or Mukta font.

## Folder Structure When Complete

```
39-machine-utilisation-percent/
├── index.html
├── logo.png                        (already provided)
├── cover.png                       (Image 1)
├── utilisation-flow-en.png         (Image 2A)
├── utilisation-flow-hi.png         (Image 2B)
├── utilisation-cheat-sheet.png     (Image 3 — STANDALONE BOOKMARK)
├── GEMINI-PROMPTS.md               (markdown reference)
└── GEMINI-PROMPTS.html             (interactive page with copy buttons)
```
