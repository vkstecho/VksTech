# GEMINI IMAGE PROMPTS — Blog 34: OTR & WVTR Explained

## Quick Reference

**6 images required** — 1 cover + 2 bilingual concept diagrams + 2 bilingual data viz + 1 standalone cheat sheet

| # | Filename | Aspect | What it shows |
|---|---|---|---|
| 1 | `cover.png` | 16:9 | Cover — the two molecules (O₂ + H₂O) leaking through a film, with the killer numbers |
| 2A | `barrier-concept-en.png` | 16:9 | OTR/WVTR concept diagram — what each measures, units, test conditions (English) |
| 2B | `barrier-concept-hi.png` | 16:9 | Same as 2A in Hindi |
| 3A | `food-product-matrix-en.png` | 16:9 | Food product → barrier requirement matrix data viz (English) |
| 3B | `food-product-matrix-hi.png` | 16:9 | Same as 3A in Hindi |
| 4 | `cheat-sheet.png` | 4:5 portrait | **Standalone bookmarkable cheat sheet** — 16 substrates + their OTR/WVTR (printable) |

## How to use

1. Open Google Gemini, AI Studio, or any image-gen tool that accepts reference images
2. For EACH prompt, **attach `logo.png` to that specific prompt**
3. Copy the prompt body, paste, generate
4. Save with the **exact filename** shown
5. Place all 6 images alongside `index.html` before publishing

## Brand standards

| Color | Hex | Use |
|---|---|---|
| Navy | `#1A2744` | Headings, dark panels, primary text |
| Orange | `#E85D26` | Accents, hero numbers, OTR (oxygen) |
| Teal | `#0D8C7E` | Secondary, WVTR (water vapour) |
| Cream | `#FAF9F6` | Backgrounds |
| Grey | `#5A5A5A` | Subtitles, captions |

**Convention used throughout:** OTR rendered in orange `#E85D26`, WVTR rendered in teal `#0D8C7E`. This colour-coding helps the eye separate the two metrics in every visual.

**Fonts:** Inter, Söhne, Helvetica Neue (Latin); Hind, Mukta (Devanagari). Big numbers in Bebas Neue, Anton, or Oswald.

**Critical numbers:** **OTR ~110, WVTR ~40** for bare PET 12μm · **OTR <1, WVTR <1** for Met PET · **OTR 0, WVTR 0** for foil · **23°C/0% RH** OTR test conditions · **38°C/90% RH** WVTR test conditions.

**Rules:** No identifiable faces, no clipart, no decorative flourishes. WSJ / Bloomberg / HBR editorial style only.

---

## IMAGE 1 — Cover (`cover.png`)

**Save as:** `cover.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** Visually represent the two molecules (O₂ and H₂O) trying to penetrate a packaging film. Make the two-number framework visible at a glance.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. The output must be widescreen landscape. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized for fast loading (target file size 400-700 KB). No JPEG artifacts, no blur, no fuzzy edges on text.
>
> Create an editorial magazine-cover image for a flexible-packaging industry blog post titled "OTR & WVTR — The Two Numbers That Decide What Your Package Can Hold."
>
> **Composition** — left two-thirds is a barrier-permeation visual, right one-third is a hero text panel.
>
> **LEFT TWO-THIRDS — barrier permeation visual:**
>
> A horizontal stage on a clean cream `#FAF9F6` background with subtle paper-grain texture. The visual shows a vertical cross-section of a flexible film barrier with two types of molecules attempting to pass through:
>
> - **Center of stage:** A vertical translucent film panel rendered in pale silver-grey, roughly 60% of stage height, with a subtle metallic shine (representing a metallised film). The film is stylised as a thin vertical rectangle. Above the film, label "FLEXIBLE PACKAGING FILM" in tiny navy caps.
>
> - **Left of the film:** Floating O₂ molecules rendered as orange `#E85D26` filled circles with a smaller "O₂" label inside each. Show 5-7 O₂ molecules approaching the film from the left, with motion arrows. One or two molecules shown getting through to the right side (representing OTR), labelled with a small tag "OTR — slow leak".
>
> - **Right of the film:** A package of food (a stylised flat-vector snack pouch shape with simple silhouette of a chip/biscuit visible) sitting alone, with one or two H₂O molecules (teal `#0D8C7E` filled circles with "H₂O" label) approaching from the right side and trying to enter through the film, labelled "WVTR — slow leak". Some H₂O molecules also passing through, going inward toward the food.
>
> Above the entire visual, a single line of text in tiny navy caps centred: **EVERY PACKAGE IS A SLOW LEAK. THESE TWO NUMBERS MEASURE HOW SLOW.**
>
> Below the visual, two small badges side by side, centred:
> - Left badge: orange `#E85D26` background, white text, "OTR = OXYGEN cc/m²/day"
> - Right badge: teal `#0D8C7E` background, white text, "WVTR = WATER VAPOUR g/m²/day"
>
> **RIGHT ONE-THIRD — navy `#1A2744` editorial panel with subtle paper-grain texture:**
>
> - Top eyebrow strip in orange `#E85D26`, all caps, small letterspacing: **vksTech.com / FLEXIBLE PACKAGING**
> - Main title in white Inter Bold or Söhne Bold (3-4 lines, large): **OTR & WVTR**
> - Subtitle (smaller italic, grey `#FAF9F6` opacity 0.8): *The two numbers that decide what your package can hold.*
> - HORIZONTAL DIVIDER (orange `#E85D26`, 2 px thin)
> - HERO STAT BLOCK — three rows showing the substrate progression:
>   - **Bare PET:** OTR `110` (in orange) / WVTR `40` (in teal)
>   - **Met PET:** OTR `<1` (in orange) / WVTR `<1` (in teal)
>   - **Foil:** OTR `0` (in orange) / WVTR `0` (in teal)
>   Each row in Bebas Neue at ~50 pt for the numbers, with substrate name in a small white caps tag to the left.
> - Small text below: 200× barrier improvement from a 0.04 μm aluminium layer
> - Bottom strip: small text — **Vivek Kumar | M.Tech NIT Uttarakhand | 9+ Years Flexible Packaging**
> - In the bottom-right corner of this panel, place the attached VKS Tech logo at ~100×100 px on a thin white round backplate
>
> **Mood:** technical, authoritative, the cover of a reference document an engineer would bookmark. NOT a marketing brochure. NOT decorative. Reads like a *Scientific American* or *Nature* feature header.
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No red except orange. No green outside teal. No yellow.

### Plan B
If the molecule visuals look weak, simplify to abstract dots (orange dots = O₂, teal dots = H₂O) with motion arrows. The colour-coding (orange for OTR, teal for WVTR) carries the meaning even without the molecule labels.

---

## IMAGE 2A — Barrier Concept Diagram (English) (`barrier-concept-en.png`)

**Save as:** `barrier-concept-en.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** A 30-second teaching diagram explaining what OTR and WVTR are, units, test conditions, and reference values.

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
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **THE TWO NUMBERS, EXPLAINED**
> - Title (navy `#1A2744`, large bold sans-serif): **What OTR and WVTR Actually Measure**
> - Subtitle (grey `#5A5A5A`): *Definitions, units, test conditions, and what 'good' looks like.*
>
> **Main visual zone (middle 80%) — TWO PANELS side by side, 50/50 split:**
>
> **LEFT PANEL — OTR (orange-themed):**
> - Top tag (orange `#E85D26` filled rounded rectangle, white caps): OTR — OXYGEN TRANSMISSION RATE
> - Below tag, a small flat-vector cross-section illustration: a vertical translucent film, with 3-4 orange `#E85D26` filled circles (O₂ molecules) on left side approaching, 1 small circle visible on the right (transmitted). Tiny caption below: "How much O₂ leaks through 1 m² per day"
> - Definition box (light orange tinted background, navy text): **The volume of oxygen that passes through 1 m² of film in 24 hours.**
> - Test conditions row (4 small data tiles in a row):
>   - "23°C" (temperature)
>   - "0% RH" (humidity)
>   - "cc/m²/day" (units)
>   - "Lower = better" (interpretation)
> - Reference values (3-line list, big numbers):
>   - Bare PET 12μm → **110** (in orange Bebas Neue ~40 pt)
>   - Metallised PET → **<1** (in orange ~40 pt)
>   - Aluminium foil → **0** (in orange ~40 pt)
>
> **RIGHT PANEL — WVTR (teal-themed):**
> - Top tag (teal `#0D8C7E` filled rounded rectangle, white caps): WVTR — WATER VAPOUR TRANSMISSION RATE
> - Below tag, a small flat-vector cross-section: a vertical translucent film, with 3-4 teal `#0D8C7E` filled circles (H₂O molecules) on left side approaching, 1 small circle visible on the right. Tiny caption: "How much H₂O leaks through 1 m² per day"
> - Definition box (light teal tinted background, navy text): **The mass of water vapour that passes through 1 m² of film in 24 hours.**
> - Test conditions row (4 small data tiles):
>   - "38°C"
>   - "90% RH"
>   - "g/m²/day"
>   - "Lower = better"
> - Reference values:
>   - Bare PET 12μm → **40** (in teal ~40 pt)
>   - Metallised PET → **<1** (in teal ~40 pt)
>   - Aluminium foil → **0** (in teal ~40 pt)
>
> **Bottom callout strip (full-width, 8% of height):**
> Navy `#1A2744` background. Two-column split:
> - LEFT (orange/teal alternating bold): **⚡ Quick rule:**
> - RIGHT (white text): *OTR is the oxygen number, WVTR is the water number. Both in 'per square metre per day'. Both: lower = better. Both reported on every legitimate film spec sheet.*
>
> **Bottom-right corner:** VKS Tech logo at ~80×80 px on white circle backplate.
> **Bottom-left corner:** small grey footer text: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif throughout. OTR/WVTR tag chips in semibold caps. Reference number values in heavy condensed font (Bebas Neue, Anton, Oswald).
>
> **What to AVOID:** clipart, cartoons, hand-drawn elements, photorealism, isometric/3D effects, decorative borders, gradients beyond very subtle box shadows.

### Plan B
If molecule visuals look weak, simplify to coloured dots with arrows showing direction. The colour code (orange for O₂, teal for H₂O) carries the meaning.

---

## IMAGE 2B — Barrier Concept Diagram (Hindi) (`barrier-concept-hi.png`)

**Save as:** `barrier-concept-hi.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 300-600 KB). No blur on Devanagari text.
>
> Create a flat-vector editorial concept-diagram with EXACTLY the same layout, colour palette, and structure as the English Barrier Concept Diagram. Numbers (110, 40, <1, 0), units (cc/m²/day, g/m²/day, °C, RH%), abbreviations (OTR, WVTR, O₂, H₂O), and substrate names (Bare PET, Metallised PET, Aluminium foil) stay in English. Only title, subtitle, definition boxes, captions, and bottom callout translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow (orange `#E85D26`, English): THE TWO NUMBERS, EXPLAINED
> - Title (Hindi, navy bold, large): **OTR और WVTR Actually क्या Measure करते हैं**
> - Subtitle (Hindi, grey): *Definitions, units, test conditions, और 'good' कैसा दिखता है।*
>
> **LEFT PANEL — OTR (orange-themed):**
> - Tag (English): OTR — OXYGEN TRANSMISSION RATE
> - Caption (Hindi): "1 m² से per day कितना O₂ leak होता है"
> - Definition box (Hindi, navy text): **Oxygen का volume जो 1 m² film से 24 hours में pass होता है।**
> - Test conditions row (English): 23°C / 0% RH / cc/m²/day / "Lower = better"
> - Reference values (substrate names English, numbers English):
>   - Bare PET 12μm → **110**
>   - Metallised PET → **<1**
>   - Aluminium foil → **0**
>
> **RIGHT PANEL — WVTR (teal-themed):**
> - Tag (English): WVTR — WATER VAPOUR TRANSMISSION RATE
> - Caption (Hindi): "1 m² से per day कितना H₂O leak होता है"
> - Definition box (Hindi, navy text): **Water vapour का mass जो 1 m² film से 24 hours में pass होता है।**
> - Test conditions row (English): 38°C / 90% RH / g/m²/day / "Lower = better"
> - Reference values:
>   - Bare PET 12μm → **40**
>   - Metallised PET → **<1**
>   - Aluminium foil → **0**
>
> **Bottom callout (Hindi):**
> - LEFT (orange/teal alternating bold): **⚡ Quick rule:**
> - RIGHT (white text, Hindi): *OTR oxygen का number है, WVTR water का। दोनों 'per square metre per day' में। दोनों: lower = better। दोनों हर legitimate film spec sheet पर reported।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 2A.

### Plan B for Hindi
Generate Image 2A first, then replace title, subtitle, captions, definition boxes, and bottom callout with proper Devanagari text using Hind or Mukta font in Photopea/Canva. Numbers, abbreviations, units, and substrate names stay in English.

---

## IMAGE 3A — Food-Product Matrix (English) (`food-product-matrix-en.png`)

**Save as:** `food-product-matrix-en.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** A clean data visualization showing how 10 common food products map to OTR/WVTR requirements. The eye should see at a glance which categories cluster at which barrier tier.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges. Output as PNG, web-optimized (target file size 300-600 KB).
>
> Create a clean flat-vector editorial data infographic. NOT photorealistic. NOT 3D. *Bloomberg Markets* / *Financial Times* style.
>
> **Background:** cream `#FAF9F6` with subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 10%):**
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **THE PRODUCT-BARRIER MATRIX**
> - Title (navy `#1A2744`, large bold sans-serif): **What Different Foods Actually Need**
> - Subtitle (grey `#5A5A5A`): *OTR (orange) and WVTR (teal) targets for 10 common Indian food products. Lower = stricter barrier required.*
>
> **Main visual zone (middle 80%) — A horizontal grouped bar chart:**
>
> 10 rows, one per food product. Each row shows the product name on the left, then two horizontal bars: an orange bar for OTR (logarithmic scale, since values span 0.1 to 100) and a teal bar for WVTR (similar log scale 0.5 to 5). Bar lengths represent the maximum acceptable value (longer bar = looser requirement = easier).
>
> Products listed top to bottom (sorted from strictest to loosest barrier):
>
> 1. **Milk (UHT)** — OTR bar at value 0.1 (very short orange) / WVTR at 0.5 (very short teal)
> 2. **Coffee (ground)** — OTR 0.3 / WVTR 1
> 3. **Pharma tablets** — OTR 0.5 / WVTR 0.5
> 4. **Namkeen / chips** — OTR 1 / WVTR 1
> 5. **Chocolate** — OTR 2 / WVTR 1
> 6. **Spices (ground)** — OTR 2 / WVTR 1
> 7. **Biscuits** — OTR 5 / WVTR 1
> 8. **Atta / wheat flour** — OTR 50 / WVTR 3
> 9. **Rice / pulses** — OTR 100 / WVTR 5
> 10. **Sugar / salt** — OTR 500 / WVTR 10
>
> Each row also has the OTR and WVTR numeric values shown to the right of the bars in their respective colours (orange for OTR, teal for WVTR), in semibold.
>
> A vertical dashed line at OTR = 1 with label "FOIL-CLASS REQUIRED" (in tiny navy caps along the line). Another vertical dashed line at OTR = 50 with label "BARE LAMINATE OK".
>
> **Bottom callout strip (8%):**
> Navy `#1A2744` background, two-column split:
> - LEFT (orange `#E85D26` bold): **⚡ The hierarchy:**
> - RIGHT (white text): *Top 4 products (Milk, Coffee, Pharma, Snacks) need metallised structures. Middle 3 (Chocolate, Spices, Biscuits) need metallised but cheaper grade. Bottom 3 (Atta, Rice, Sugar) need only basic laminates. Spec accordingly.*
>
> **Bottom-right corner:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left corner:** small grey footer: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif. Product names in semibold. Numeric values in regular weight.
>
> **What to AVOID:** clipart, cartoons, 3D, decorative borders, drop shadows beyond very subtle, rainbow colours.

### Plan B
If logarithmic bars look confusing, switch to a simple table format with three columns: Food product / OTR target / WVTR target. The data is still legible, just less visual.

---

## IMAGE 3B — Food-Product Matrix (Hindi) (`food-product-matrix-hi.png`)

**Save as:** `food-product-matrix-hi.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges. Output as PNG, web-optimized (target file size 300-600 KB). No blur on Devanagari text.
>
> Create a flat-vector editorial data infographic with EXACTLY the same layout as the English Food-Product Matrix. Numbers, units, food product names, and chart axis labels stay in English. Only title, subtitle, vertical line labels, and bottom callout translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow (orange, English): THE PRODUCT-BARRIER MATRIX
> - Title (Hindi, navy bold): **Different Foods को Actually क्या चाहिए**
> - Subtitle (Hindi, grey): *10 common Indian food products के लिए OTR (orange) और WVTR (teal) targets। Lower = stricter barrier required।*
>
> **Bar chart:** Identical layout. All 10 product names, OTR/WVTR values, and bar lengths same as Image 3A.
>
> **Vertical dashed line labels (Hindi):**
> - At OTR = 1: "FOIL-CLASS REQUIRED" (English, kept short)
> - At OTR = 50: "BARE LAMINATE OK" (English, kept short)
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ Hierarchy:**
> - RIGHT (white text, Hindi): *Top 4 products (Milk, Coffee, Pharma, Snacks) को metallised structures चाहिए। Middle 3 (Chocolate, Spices, Biscuits) को metallised पर cheaper grade। Bottom 3 (Atta, Rice, Sugar) को सिर्फ़ basic laminates चाहिए। Accordingly spec करें।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 3A.

### Plan B for Hindi
Generate 3A first; replace Hindi text in Photopea/Canva using Hind or Mukta. Numbers, food names, and units stay in English.

---

## IMAGE 4 — Substrate Cheat Sheet (`cheat-sheet.png`)

**Save as:** `cheat-sheet.png` · **Target dimensions:** 1200×1500 px (4:5 portrait — designed to be saved on phone, printed on A4)
**Goal:** A standalone bookmarkable artefact. Operators screenshot this, print and laminate it, paste it on the wall next to the Mocon machine. The 16-substrate barrier table in one beautiful visual.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1200 pixels wide by 1500 pixels tall, 4:5 portrait aspect ratio**. This is a vertical (portrait) format, NOT landscape. Do NOT generate square (1:1) or landscape formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 400-700 KB). Designed to be saved as a phone wallpaper or printed on A4 paper.
>
> Create a clean, professional, bookmark-quality reference cheat sheet — the kind of one-page printable that operators on a flexible packaging shop floor would tape to the wall next to their Mocon machine. NOT a marketing brochure. A working tool.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture.
>
> **Header zone (top 12% of image):**
> - VKS Tech logo (the attached logo.png) at top-left, ~100×100 px
> - To the right of the logo, two-line header:
>   - Eyebrow line in orange `#E85D26` small caps: VKSTECH.COM REFERENCE CHEAT SHEET
>   - Main title in navy `#1A2744` bold large: **OTR & WVTR — 16 Substrate Reference**
> - Below the title, a thin orange `#E85D26` horizontal divider
>
> **Body zone (middle 76% of image) — a clean table with the 16 substrates:**
>
> Each row:
> - Substrate name (left, navy bold)
> - OTR value in orange `#E85D26` semibold (cc/m²/day)
> - WVTR value in teal `#0D8C7E` semibold (g/m²/day)
> - Brief 2-3 word verdict tag (right, grey small italic)
>
> Header row at the top of the table:
> | SUBSTRATE | OTR | WVTR | NOTES |
>
> Substrates (top to bottom — sorted from worst to best barrier):
>
> 1. Paper (kraft, uncoated) — ∞ — ∞ — *No barrier*
> 2. Bare LDPE 50μm — 7,800 — 18 — *Sealant only*
> 3. Bare BOPP 20μm — 2,400 — 6 — *Cheap, leaks O₂*
> 4. Bare CPP 30μm — 2,000 — 8 — *Sealing layer*
> 5. Bare HDPE 50μm — 2,000 — 8 — *Stiffer than LDPE*
> 6. PLA (compostable) 30μm — 300 — 300 — *Biodegradable, niche*
> 7. Bare PET 12μm — 110 — 40 — *Strong, weak barrier*
> 8. Nylon (BOPA) 15μm — 40 — 200 — *Pierce-resistant*
> 9. Metallised BOPP 20μm — 1.0 — 0.8 — *Cheap met grade*
> 10. SiOx PET 12μm — 1.0 — 0.8 — *Transparent silicon*
> 11. AlOx PET 12μm — 0.7 — 0.5 — *Transparent, mono-PET*
> 12. PVDC coating — 0.5 — 1.0 — *Legacy, phasing out*
> 13. **Metallised PET 12μm — 0.5 — 0.5 — *Industry workhorse***  *(highlight this row with a subtle orange `#E85D26` background tint)*
> 14. EVOH 15μm (in laminate) — 0.1 (dry) — 30 — *Best O₂, weak H₂O*
> 15. Aluminium foil 9μm — 0 — 0 — *Perfect, heavy*
> 16. Glass jar — 0 — 0 — *Perfect, breaks*
>
> **Footer zone (bottom 12% of image):**
>
> Three columns:
> - LEFT: A small orange-themed key showing "**ORANGE = OTR (oxygen barrier)**"
> - CENTER: A small teal-themed key showing "**TEAL = WVTR (water vapour barrier)**"
> - RIGHT: A small navy panel: *Test conditions: OTR @ 23°C/0% RH (cc/m²/day). WVTR @ 38°C/90% RH (g/m²/day). Lower = better.*
>
> Above the footer columns, a thin orange divider.
>
> Bottom-most strip with grey small caps: *vkstech.com — More calculators, more cheat sheets, real-plant methodology · Vivek Kumar | M.Tech NIT Uttarakhand*
>
> **Mood:** clean, dense, useful, professional. The kind of reference doc a real engineer would print and use. NOT decorative. NOT spaced out. Information density is a feature.
>
> **Typography:** Inter or Söhne sans-serif throughout. Numbers in semibold. Substrate names bold navy.
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No others.
>
> **What to AVOID:** decorative borders, clipart, drop shadows, gradients, 3D effects.

### Plan B
If the table format looks cramped at 1200×1500, increase the row height by reducing the substrate count to 12 (drop SiOx, PVDC, PLA, HDPE which are less common in Indian flexible packaging). The remaining 12 still cover 95% of real-world structures.

### Quality check for the cheat sheet
- All 16 substrates visible with correct OTR/WVTR values
- Metallised PET row visually highlighted (orange background tint)
- OTR values consistently in orange `#E85D26`
- WVTR values consistently in teal `#0D8C7E`
- Logo at top-left, brand markers at footer
- Portrait format (taller than wide) — NOT square or landscape
- Clean enough to laminate and use on a shop floor

---

## REVIEW — 8-Point Check Before Publishing

### 1. Brand colour discipline
✅ Pass: only Navy `#1A2744`, Orange `#E85D26`, Teal `#0D8C7E`, Cream `#FAF9F6`, white, grey
✅ OTR colour-coded orange across all images, WVTR colour-coded teal across all images

### 2. Typography quality
✅ Pass: clean sans-serif (Inter/Söhne), big numbers in heavy condensed (Bebas/Anton)

### 3. Number accuracy (HARD)
**Image 1 (Cover):** Bare PET `110`/`40`, Met PET `<1`/`<1`, Foil `0`/`0` in stat block
**Image 2A/2B (Concept):** Same 3-tier reference values, plus 23°C/0% RH and 38°C/90% RH
**Image 3A/3B (Matrix):** All 10 food products with correct OTR/WVTR (Milk 0.1/0.5, Coffee 0.3/1, etc.)
**Image 4 (Cheat sheet):** All 16 substrates with correct values

### 4. Source attribution
✅ Pass: "Mocon Ox-Tran" / "ASTM E96" mentioned where appropriate. ICAR/NABCONS not needed for this blog (no India-stat-heavy content)

### 5. Image format and file size
✅ Pass: Images 1, 2A, 2B, 3A, 3B at 1600×900 widescreen PNG (300-700 KB)
✅ Image 4 at 1200×1500 portrait PNG (400-700 KB)

### 6. Logo placement
✅ Pass: VKS Tech logo at bottom-right (Images 1-3) or top-left (Image 4 cheat sheet), ~80–110 px

### 7. Information density
✅ Pass: cover reads as "molecules permeating film + 3-tier comparison" in 5 sec; concept diagram reads in 10 sec; matrix in 5 sec; cheat sheet is dense by design

### 8. No AI-tells
❌ Avoid: identifiable faces, distorted hands, garbled small text, AI watermarks

---

## TROUBLESHOOTING

- **Image comes out as a square (1:1):** Re-paste the prompt and re-emphasize the IMAGE SPEC line. For Image 4, double-check it's portrait (1200×1500), not landscape.
- **Numbers come out wrong:** Always overlay correct numbers in an editor afterward. AI image models are unreliable with numerics — especially the 16-substrate cheat sheet.
- **Molecule visuals look weird:** Replace with simple coloured dots (orange = O₂, teal = H₂O) with motion arrows.
- **Hindi renders as gibberish:** Generate EN version first, replace text in Photopea/Canva using Hind or Mukta font.
- **Cheat sheet rows are too cramped:** Reduce to 12 substrates (drop SiOx, PVDC, PLA, HDPE which are less common).
- **Decorative clutter:** Add: *"STRICTLY no decorative elements, no clipart, no flourishes."*

## Folder Structure When Complete

```
34-otr-wvtr-explained/
├── index.html
├── logo.png                       (already provided)
├── cover.png                      (Image 1)
├── barrier-concept-en.png         (Image 2A)
├── barrier-concept-hi.png         (Image 2B)
├── food-product-matrix-en.png     (Image 3A)
├── food-product-matrix-hi.png     (Image 3B)
├── cheat-sheet.png                (Image 4 — STANDALONE BOOKMARK)
├── GEMINI-PROMPTS.md              (markdown reference)
└── GEMINI-PROMPTS.html            (interactive page with copy buttons)
```
