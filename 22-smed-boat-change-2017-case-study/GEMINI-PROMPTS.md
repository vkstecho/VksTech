# 🎨 Gemini Image Prompts — Blog #22 SMED Boat Change Case Study

**Workflow:** Generate `cover.png` (bilingual EN+HI) before publishing
**Total images:** 1 (cover only — blog is text-heavy and uses tables for data visualization)
**Blog scope:** Real 2017 MET-1 boat-set changeover SMED case study — 65 to 35 minutes
**Published:** April 2026 (9-year validation arc since 2017 project)

---

# 🌟 IMAGE 1: BILINGUAL COVER — `cover.png`

## Why bilingual on the cover

The cover image is **always visible** regardless of which language the reader is reading the blog in. Hindi readers see the same cover as English readers. So the cover should support **both** languages — not look like an "English-only" graphic to Hindi readers.

For inline content diagrams in future blogs, we'll use **separate `*-en.png` and `*-hi.png`** versions that swap based on language toggle. But the cover stays bilingual.

## Recommended dimensions
1600 × 900 px (16:9 aspect ratio for LinkedIn/web)

## Style direction
- **Mood:** Confident, real-plant-engineering, modern industrial
- **Palette:** VKS Tech navy (#1A2744) + orange accents (#E85D26) + teal highlights (#0D8C7E) + cream background (#FAF9F6)
- **Style:** Editorial illustration, clean and professional, NOT photo-realistic
- **Typography:** Bold sans-serif (Inter or Bebas Neue) for English, clean Devanagari (Hind, Mukta, or Noto Sans Devanagari) for Hindi

## Composition

**Left side (40%):** Stylised illustration of a metalliser chamber with a stopwatch graphic transitioning from 65 → 35 minutes. The stopwatch can have an animation-feel arrow or motion lines. Keep it minimalist.

**Right side (60%):** Bold title card on cream background with **bilingual title stack**:

**English title (in NAVY, BOLD, larger):**
> How I Cut Metalliser Boat Change Time from 65 to 35 Minutes

**Hindi title (in NAVY, BOLD, slightly smaller, below):**
> मैंने Metalliser Boat Change Time को 65 से 35 Minutes तक कैसे लाया

**Subtitle in ORANGE (bilingual on one line):**
> A 2017 Case Study  |  एक 2017 Case Study

**Bottom strip — thin teal banner with white text (bilingual-friendly numerals):**
> 65 → 35 min  |  46% reduction  |  Zero capex  |  12-week project

## Visual elements

- **Top-right corner:** Small VKS Tech logo (tri-color heart) with "VKS Tech" text below it, in NAVY
- **Bottom-left of stopwatch:** Subtle "ECRS" letter cluster as a watermark
- **Background texture:** Subtle grid lines or dot pattern in cream tones
- **Optional:** Thin orange divider line between stopwatch and title card

## What to avoid

- Do NOT use photo-realistic plant imagery
- Do NOT include any individual person's face or identifiable features
- Do NOT use stock-photo metalliser images
- Do NOT include any text not specified above
- Do NOT use red color (reserved for warnings in VKS Tech brand)

## Prompt for Gemini / similar AI image generator

```
Create a 1600x900 px editorial illustration for a manufacturing blog cover. The cover is BILINGUAL — must include both English and Hindi (Devanagari script) text.

Composition: Split into two sides.

LEFT SIDE (40% of width): Stylized minimalist illustration of a metalliser chamber with a large stopwatch in front, transitioning from "65 min" (in red strike-through) to "35 min" (in bright orange). Motion lines suggest improvement. Editorial illustration style, not photo-realistic.

RIGHT SIDE (60% of width): Clean cream colored background (#FAF9F6) with bilingual typography stack:

Top headline (large, dark navy #1A2744, bold):
"How I Cut Metalliser Boat Change Time from 65 to 35 Minutes"

Below it, in slightly smaller dark navy bold (Devanagari script):
"मैंने Metalliser Boat Change Time को 65 से 35 Minutes तक कैसे लाया"

Below both, in orange (#E85D26):
"A 2017 Case Study  |  एक 2017 Case Study"

Bottom strip with teal background (#0D8C7E) and white text:
"65 → 35 min  |  46% reduction  |  Zero capex  |  12-week project"

TOP-RIGHT corner: Small VKS Tech tri-color heart logo with "VKS Tech" in navy underneath.

BACKGROUND: Subtle dot grid pattern in light cream tones, suggesting engineering paper.

STYLE: Editorial illustration, clean lines, professional. Modern industrial aesthetic. NOT photo-realistic. Use only the brand colors: navy #1A2744, orange #E85D26, teal #0D8C7E, cream #FAF9F6.

CRITICAL: Devanagari (Hindi) script must be rendered correctly. Use a Hindi-supporting typeface like Hind, Mukta, or Noto Sans Devanagari.

NO faces, NO individual people identifiable, NO red colors except for the strike-through "65 min", NO stock-photo imagery.
```

## Alternative prompt — simpler stopwatch focus

```
Editorial blog cover, 1600x900 px. BILINGUAL.

Background: Cream (#FAF9F6) with subtle dot grid texture.

CENTER: A large minimalist analog stopwatch graphic. The clock face shows "65" being crossed out in faded gray. Below the clock face, in bright orange (#E85D26) bold, the number "35" appears prominently. Motion lines suggest transformation.

ABOVE the stopwatch: Bilingual headline stack
- Bold dark navy (#1A2744): "How I Cut Boat Change Time from 65 to 35 Minutes"
- Bold dark navy Hindi (Devanagari): "मैंने Boat Change Time को 65 से 35 Minutes तक कैसे लाया"

BELOW the stopwatch: Orange subtitle
- "A 2017 Case Study | एक 2017 Case Study"

TOP-RIGHT corner: VKS Tech logo and name in navy.

BOTTOM: Thin teal strip with white numerals: "46% reduction | Zero capex | 12-week project"

Brand colors only: navy, orange, teal, cream. Editorial illustration aesthetic. Devanagari must render correctly.
```

---

# 🇬🇧 IMAGE 2: 8-Week Progression Chart (English) — `progression-en.png`

**Dimensions:** 1600 × 900
**Placement in blog:** After the "Step 1 Progression" section header in EN

```
Create a clean editorial data visualization, 1600x900 px, on a cream background (#FAF9F6).

TITLE at top (bold dark navy #1A2744, centered, 36pt):
"8-Week SMED Progression — MET-1 Boat Change Time"

SUBTITLE below title (orange #E85D26, italic, 18pt):
"July to September 2017 — Real Plant Data"

MAIN VISUAL: A line chart with markers showing this exact progression:
- Baseline: 65 min (gray dotted horizontal reference line, labelled "Baseline")
- Week 1 (20 July): 60 min
- Week 2 (28 July): 55 min — annotation arrow: "Tool boxes installed"
- Week 3 (4 August): 47 min — annotation arrow: "Check list rolled out"
- Week 4 (8-12 August): 43-47 min average plotted as 45
- Week 5 (17 August): 38 min — annotation arrow: "First sub-40"
- Week 6 (21 August): 39 min
- Step 1 final: 38 min average (highlighted with orange marker)
- Then continuing into Step 2:
- Step 2 start: 52 min (re-baseline)
- Week 9 (26 August): 41 min
- Week 10 (30 August): 38 min
- Week 12 (7 September): 35 min — final marker, large green star

Y-axis range: 30-70 min, gridlines every 5 min
Y-axis label: "Boat Change Time (minutes)"
X-axis: Week labels (W1 through W12)

LINE STYLE: 
- Thick navy (#1A2744) line for main data
- Markers in orange (#E85D26) at intervention points
- Final marker in green (#2E8B57) showing target hit

CALLOUT BOXES (small annotations near intervention points):
- Tool boxes (week 2): teal background, white text
- Check list (week 3): orange background, white text
- Sub-40 (week 5): green background, white text
- 35-min target (week 12): navy background, white text "TARGET ACHIEVED"

BOTTOM-RIGHT: Small VKS Tech logo + "vkstech.com" in navy, 14pt

STYLE: Clean editorial data viz, Financial Times / Bloomberg aesthetic. NOT photo-realistic. Use only brand colors.

NO axis labels in red. NO clipart icons. NO 3D effects.
```

---

# 🇮🇳 IMAGE 3: 8-Week Progression Chart (Hindi) — `progression-hi.png`

**Dimensions:** 1600 × 900
**Placement in blog:** After the "Step 1 Progression" section header in HI

```
Create a clean editorial data visualization, 1600x900 px, on a cream background (#FAF9F6). All text in Hindi (Devanagari script) where applicable.

TITLE at top (bold dark navy #1A2744, centered, 36pt, Devanagari):
"8-Week SMED Progression — MET-1 Boat Change Time"

SUBTITLE below title (orange #E85D26, italic, 18pt, Devanagari):
"July से September 2017 — Real Plant Data"

MAIN VISUAL: Same line chart as English version showing:
- Baseline: 65 min (labelled "Baseline" in navy)
- Week 1: 60 min
- Week 2: 55 min — annotation in Hindi: "Tool boxes installed"
- Week 3: 47 min — annotation in Hindi: "Check list rolled out"
- Week 4: 45 min
- Week 5: 38 min — annotation: "पहला sub-40"
- Step 1 final: 38 min
- Step 2 start: 52 min (label: "Step 2 शुरू")
- Week 12: 35 min — final marker label: "TARGET हासिल"

Y-axis label (Devanagari): "Boat Change Time (minutes)"
X-axis: Week labels W1-W12

CALLOUT BOXES (Hindi annotations):
- Tool boxes लगे
- Check list rolled out  
- पहला sub-40
- 35-min TARGET हासिल

LINE STYLE: Same as English version (navy main line, orange interventions, green final).

BOTTOM-RIGHT: Small VKS Tech logo + "vkstech.com" in navy, 14pt

STYLE: Clean editorial data viz. CRITICAL: Devanagari script must render correctly. Use Hindi-supporting typeface like Hind, Mukta, or Noto Sans Devanagari.

Use only brand colors: navy #1A2744, orange #E85D26, teal #0D8C7E, green #2E8B57, cream #FAF9F6.
```

---

# 🇬🇧 IMAGE 4: 3 Tool Box System (English) — `tool-boxes-en.png`

**Dimensions:** 1600 × 1000
**Placement in blog:** After "Tool Box System" section header in EN

```
Create a clean isometric infographic, 1600x1000 px, on cream background (#FAF9F6).

TITLE at top (bold dark navy #1A2744, centered, 32pt):
"The 3 Tool Box System — MET-1 Metalliser, 2017"

SUBTITLE (orange #E85D26, 16pt italic):
"Designed by the project team to eliminate tool-fetching during boat change"

MAIN VISUAL: Three labelled tool boxes shown as isometric line drawings:

LEFT BOX — "Box 1 — Inside Chamber":
- Dimensions label: "16 × 4 × 4 inch"
- Position label: "Fixed mount inside chamber"
- Contents listed below box (small font):
  • Round chisel rod (1)
  • Scrapper plate 1-foot (1)
  • Small scrapper 9-inch (2)
  • Screw driver (1)
  • Plier (1)
- Box rendered in teal (#0D8C7E) outline

CENTER BOX — "Box 2 — Inside Chamber":
- Dimensions label: "9 × 6 × 6 inch"
- Position label: "Fixed mount inside chamber"
- Contents:
  • Guide pipe (2)
  • Copper clamp set (1)
- Box rendered in orange (#E85D26) outline

RIGHT BOX — "Box 3 — Outside on Carriage":
- Dimensions label: "16 × 8 × 4 inch"
- Position label: "Bolted on the carriage"
- Contents:
  • Spanner 14/15/16 (3)
  • L-N key set 4/5/6/8/10
  • Nut and bolt for chamber closing (2 sets)
- Box rendered in navy (#1A2744) outline

BELOW the boxes — KEY INSIGHT BANNER:
Navy background, white text, 18pt bold:
"Each station has its own tools. No sharing. No fetching. Within 1 week of installation: 60 → 55 min average."

BOTTOM-RIGHT: VKS Tech logo + "vkstech.com" in navy, 14pt

STYLE: Clean isometric infographic, Toyota Production System manual aesthetic. NOT photo-realistic. Engineering-paper feel.

Use only brand colors: navy, orange, teal, cream.
NO 3D photo-realism. NO clipart. NO red colors.
```

---

# 🇮🇳 IMAGE 5: 3 Tool Box System (Hindi) — `tool-boxes-hi.png`

**Dimensions:** 1600 × 1000
**Placement in blog:** After "Tool Box System" section header in HI

```
Create a clean isometric infographic, 1600x1000 px, on cream background (#FAF9F6). All text in Hindi where applicable, with technical terms (Box 1, dimensions, tool names) staying in English.

TITLE at top (bold dark navy #1A2744, centered, 32pt, Devanagari):
"3 Tool Box System — MET-1 Metalliser, 2017"

SUBTITLE (orange #E85D26, 16pt italic, Devanagari):
"Project team ने design किया, boat change के दौरान tool-fetching eliminate करने के लिए"

MAIN VISUAL: Same three tool boxes as English version:

LEFT BOX — "Box 1 — Chamber के अंदर":
- "16 × 4 × 4 inch"
- "Chamber के अंदर fixed mount"
- Contents (English tool names with Hindi quantity tags):
  • Round chisel rod (1)
  • Scrapper plate 1-foot (1)
  • Small scrapper 9-inch (2)
  • Screw driver (1)
  • Plier (1)
- Teal outline

CENTER BOX — "Box 2 — Chamber के अंदर":
- "9 × 6 × 6 inch"
- Same content as English
- Orange outline

RIGHT BOX — "Box 3 — Carriage पर बाहर":
- "16 × 8 × 4 inch"
- "Carriage पर bolted"
- Same content
- Navy outline

KEY INSIGHT BANNER (Devanagari):
Navy background, white text, 18pt bold:
"हर station के अपने tools। कोई sharing नहीं। कोई fetching नहीं। Installation के 1 week के अंदर: 60 → 55 min average।"

BOTTOM-RIGHT: VKS Tech logo + "vkstech.com" in navy, 14pt

STYLE: Same as English version. CRITICAL: Devanagari script must render correctly. Use Hind, Mukta, or Noto Sans Devanagari.

Use only brand colors. NO 3D photo-realism. NO red colors.
```

---

# 🇬🇧 IMAGE 6: ECRS Framework Diagram (English) — `ecrs-en.png`

**Dimensions:** 1600 × 900
**Placement in blog:** After "ECRS Discipline" section header in EN

```
Create a 2x2 grid framework diagram, 1600x900 px, on cream background (#FAF9F6).

TITLE at top (bold dark navy #1A2744, centered, 32pt):
"ECRS — The Toyota Discipline Applied at MET-1"

SUBTITLE (orange #E85D26, 16pt italic):
"How 76 activities became 25-30 minutes of saved time per cycle"

MAIN VISUAL: Four equal quadrants in a 2x2 grid:

TOP-LEFT — "E — ELIMINATE":
- Quadrant background: light green (#E8F5E9)
- Header: "E — ELIMINATE" (bold, dark green #2E8B57, 24pt)
- Tagline: "Remove activity entirely"
- Real example from MET-1: "Tool taking (23 sec) — eliminated by tool box system"
- Real example: "Chamber close→open→shield→close (281 sec) — eliminated by proper sequencing"
- Project count: "6 activities eliminated"

TOP-RIGHT — "C — COMBINE":
- Quadrant background: light orange (#FFE5D9)
- Header: "C — COMBINE" (bold, orange #E85D26, 24pt)
- Tagline: "Merge two activities, remove transition"
- Real example: "Shutter cleaning outside + inside (121 sec) — combined into single pass"
- Real example: "3 scrapper rounds (467 sec) — combined to 1 round"
- Project count: "4 activities combined"

BOTTOM-LEFT — "R — REARRANGE":
- Quadrant background: light teal (#E0F2F1)
- Header: "R — REARRANGE" (bold, teal #0D8C7E, 24pt)
- Tagline: "Move offline (before chamber opens)"
- Real example: "Tool fetching, wire spool, masking tape, graphite — all moved offline"
- Real example: "Boat & graphite tape — staged 1 hour prior"
- Project count: "11 activities rearranged"

BOTTOM-RIGHT — "S — SIMPLIFY":
- Quadrant background: light purple (#F3E5F5)
- Header: "S — SIMPLIFY" (bold, purple #7B3FA0, 24pt)
- Tagline: "Better tool, position, or method"
- Real example: "Custom clamp face cleaner: 30 sec/clamp → 20 sec/clamp"
- Real example: "Better scrappers, dedicated tool boxes, pre-cut graphite tape"
- Project count: "8 activities simplified"

CENTER OVERLAP: Small navy circle with white text "29 changes total"

BOTTOM CENTER: Banner in navy with white text:
"Result: 65 min → 35 min in 12 weeks. Zero capex."

BOTTOM-RIGHT corner: VKS Tech logo + "vkstech.com"

STYLE: Clean infographic, NOT photo-realistic. Toyota manual aesthetic.

Use only brand colors. NO red. NO clipart. NO 3D.
```

---

# 🇮🇳 IMAGE 7: ECRS Framework Diagram (Hindi) — `ecrs-hi.png`

**Dimensions:** 1600 × 900
**Placement in blog:** After "ECRS Discipline" section header in HI

```
Create a 2x2 grid framework diagram, 1600x900 px, on cream background (#FAF9F6). Same structure as English version, with text in Hindi where natural.

TITLE at top (bold dark navy #1A2744, centered, 32pt, Devanagari):
"ECRS — MET-1 पर लागू Toyota Discipline"

SUBTITLE (orange #E85D26, 16pt italic, Devanagari):
"कैसे 76 activities ने हर cycle 25-30 minutes saving दी"

QUADRANTS (same 2x2 layout):

TOP-LEFT — "E — ELIMINATE":
- Light green background
- Hindi tagline: "Activity को पूरी तरह हटाओ"
- Real example: "Tool taking (23 sec) — tool box system से eliminate"
- Real example: "Chamber close→open→shield→close (281 sec) — proper sequencing से हटाया"
- Count: "6 activities eliminate"

TOP-RIGHT — "C — COMBINE":
- Light orange background
- Hindi tagline: "दो activities मिलाओ, transition हटाओ"
- Real example: "Shutter cleaning outside + inside (121 sec) — single pass में combined"
- Real example: "3 scrapper rounds (467 sec) — 1 round में combined"
- Count: "4 activities combine"

BOTTOM-LEFT — "R — REARRANGE":
- Light teal background
- Hindi tagline: "Offline करो (chamber खुलने से पहले)"
- Real example: "Tool fetching, wire spool, masking tape, graphite — सब offline move"
- Real example: "Boat & graphite tape — 1 hour pहले staged"
- Count: "11 activities rearrange"

BOTTOM-RIGHT — "S — SIMPLIFY":
- Light purple background
- Hindi tagline: "Better tool, position, या method"
- Real example: "Custom clamp face cleaner: 30 sec/clamp → 20 sec/clamp"
- Real example: "Better scrappers, dedicated tool boxes"
- Count: "8 activities simplify"

CENTER OVERLAP: Navy circle, white text "29 total changes"

BOTTOM BANNER (Devanagari):
"Result: 12 weeks में 65 min → 35 min। Zero capex।"

BOTTOM-RIGHT: VKS Tech logo + "vkstech.com"

STYLE: Same as English version. CRITICAL: Devanagari script must render correctly.

Use only brand colors. NO red, NO clipart, NO 3D.
```

---

# 📋 Image Generation Order

Recommended generation order:
1. **cover.png** (bilingual) — most critical, always-visible
2. **progression-en.png** + **progression-hi.png** — strongest data visual
3. **tool-boxes-en.png** + **tool-boxes-hi.png** — most distinctive concept
4. **ecrs-en.png** + **ecrs-hi.png** — methodology summary

Total: 7 images (1 bilingual cover + 6 inline = 3 EN + 3 HI)

---

# ✅ Publishing Checklist

Before going live with Blog #22:

- [ ] Generate `cover.png` from bilingual prompt above
- [ ] Verify **Devanagari script renders correctly** (no boxes, no garbled characters)
- [ ] Save as PNG (not JPG) to preserve sharp text
- [ ] Place in `/blog/22-smed-boat-change-2017-case-study/cover.png`
- [ ] Verify cover renders correctly in BOTH EN and HI section views
- [ ] Check Action Card PDF download link works
- [ ] Test LinkedIn share preview (Open Graph image should be cover.png)

Once `cover.png` is in place with both languages rendering correctly, the blog is publication-ready.

---

# 🌐 Bilingual Image Pattern (For Future Blogs)

For VKS Tech blogs going forward, the standard pattern is:

| Image type | Language strategy | Example filenames |
|---|---|---|
| **Cover** | Single bilingual image (EN + HI on same image) | `cover.png` |
| **Inline diagrams** | Separate EN and HI versions, swap on language toggle | `diagram-en.png`, `diagram-hi.png` |
| **Logo/branding** | Always brand-color, no language text | `logo.png` |

The HTML structure for inline diagrams:
```html
<!-- In EN section -->
<img src="diagram-en.png" alt="...">

<!-- In HI section -->
<img src="diagram-hi.png" alt="...">
```

This keeps Hindi readers fully immersed in Hindi content while saving cover image effort.
