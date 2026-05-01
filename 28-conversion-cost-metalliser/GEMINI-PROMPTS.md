# GEMINI IMAGE PROMPTS — Blog 28: Metalliser Conversion Cost (Actual vs Equivalent)

## Quick Reference

**5 images required** (1 cover + 2 cost-build-up bilingual + 2 equivalence-factors bilingual)

| # | Filename | Aspect | What it shows |
|---|---|---|---|
| 1 | `cover.png` | 16:9 | Hero cover with the two killer numbers ₹15.59 vs ₹12.13 |
| 2A | `cost-build-up-en.png` | 16:9 | Stacked-bar showing 8 cost heads building to ₹15.59/kg (English) |
| 2B | `cost-build-up-hi.png` | 16:9 | Same as 2A in Hindi |
| 3A | `equivalence-factors-en.png` | 16:9 | The 5 equivalence factors (OD, Sp.Mat, Micron, Width, Length) (English) |
| 3B | `equivalence-factors-hi.png` | 16:9 | Same as 3A in Hindi |

## How to use this file

1. Open Google Gemini, AI Studio, or any image-gen tool that accepts reference images
2. For EACH prompt, **attach `logo.png` to that specific prompt** (Gemini doesn't reliably retrieve files from earlier turns — re-attach every time)
3. Copy the prompt body exactly as written, paste, generate
4. Save the output with the **exact filename** shown (case-sensitive, dashes not underscores)
5. Place all 5 images alongside `index.html` in the same folder before publishing

## Brand standards (non-negotiable)

| Color | Hex | Use |
|---|---|---|
| Navy | `#1A2744` | Headings, dark panels, primary text |
| Orange | `#E85D26` | Accents, hero numbers, callouts |
| Teal | `#0D8C7E` | Secondary, subordinate cost heads |
| Cream | `#FAF9F6` | Backgrounds |
| Grey | `#5A5A5A` | Subtitles, captions |

**No other colors.** No red except `#E85D26`. No blue except navy. No yellow, no green outside teal.

**No photorealistic identifiable faces.** People may appear back-view, hands-only, silhouette, or face-obscured.

**No decorative clipart** — confetti, hearts, sparkles, cartoon icons. WSJ / Bloomberg / Harvard Business Review editorial style only.

**Fonts to request:** Inter, Söhne, Helvetica Neue (Latin); Hind, Mukta (Devanagari). Big numbers should use Bebas Neue, Anton, or Oswald — heavy condensed sans-serif.

---

## IMAGE 1 — Cover (`cover.png`)

**Save as:** `cover.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Hero image that makes the reader stop scrolling and want to read 18 minutes.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create an editorial magazine-cover image for a flexible-packaging industry blog post on metalliser conversion cost. The image is for an 18-minute deep-dive read, so it must convey both technical authority and visual punch.
>
> **Composition** — split scene 60/40:
> - LEFT 60%: a softly-lit modern metalliser plant control room shot from a low angle. Visible elements: large monitors showing line graphs and ₹/kg dashboards, a metalliser machine in the background through a glass window with subtle steam/cooling vapour, a single operator silhouette (back to camera, hands on a console). Lighting is warm with a slight blue tint from monitors. Industrial documentary photography style, shallow depth of field, professional, NOT futuristic-sci-fi.
> - RIGHT 40%: a clean dark navy `#1A2744` panel that holds the title and the two killer numbers. The panel has a subtle paper-grain texture so it doesn't look pure flat.
>
> **Text overlay on the navy panel (right side):**
> - Top eyebrow strip in orange `#E85D26`, all caps, small letterspacing: **vksTech.com / FINANCIAL CONTROLS**
> - Main title in white Inter Bold or Söhne Bold (3 lines, large): **The Complete Guide to Metalliser Conversion Cost**
> - Subtitle in lighter grey `#FAF9F6` italic: *Actual vs Equivalent — and why most plants report only the wrong one*
> - HORIZONTAL DIVIDER (orange `#E85D26`, 2 px thin)
> - HERO NUMBERS — TWO numbers stacked vertically, very large (Bebas Neue or Anton, ~140 pt), with a clear visual hierarchy:
>   - **₹15.59/kg** in bright orange `#E85D26`, label below in tiny grey caps: ACTUAL
>   - Below it, ₹12.13/kg in white, label below in tiny orange caps: EQUIVALENT
>   - A small orange arrow connecting them implying "the gap is ₹3.46/kg of mix difficulty, not a real loss"
> - Bottom strip on the navy panel: small text — **Vivek Kumar | M.Tech NIT Uttarakhand | 9+ Years Flexible Packaging**
> - In the **bottom-right corner**, place the attached VKS Tech logo at ~110×110 px with a thin white round backplate
>
> **Mood**: editorial, executive-grade, confident, not dramatic. Think *The Wall Street Journal* manufacturing feature. NOT cinematic, NOT sci-fi, NOT cartoonish. The reader should feel: "this is for serious plant managers, not influencers."
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, cream `#FAF9F6`, white. No red except orange. No green, no yellow.

### Plan B (if logo not embedded)

If Gemini ignores the attached logo or generates a placeholder, generate without the logo and composite manually in Canva, Photopea, or GIMP — place `logo.png` at bottom-right at ~110×110 px on a white round backplate.

---

## IMAGE 2A — Cost Build-Up Diagram, English (`cost-build-up-en.png`)

**Save as:** `cost-build-up-en.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Show how the eight cost heads stack to ₹15.59/kg, and which ones to fix first.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a clean flat-vector editorial infographic. NOT photorealistic. NOT 3D. Pure flat infographic with crisp typography. Inspired by *The Economist* / *Harvard Business Review* visual style.
>
> **Background:** cream `#FAF9F6` with a very subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 15%):**
> - Eyebrow strip in orange `#E85D26`: small caps, letterspaced: **METALLISER FINANCIAL ANATOMY**
> - Title (navy `#1A2744`, large bold sans-serif): **The 8 Building Blocks of Metalliser Conversion Cost**
> - Subtitle (grey `#5A5A5A`, regular weight): *Each cost head has its own owner, its own formula, its own monthly target — they all stack into one ₹/kg number.*
>
> **Main visual zone (middle 70%) — split 50/50:**
>
> LEFT HALF — vertical stacked-bar chart, bar is wide and rises from a baseline at the bottom. Stack from BOTTOM to TOP in this exact order with these exact numbers:
> 1. (BOTTOM, largest segment, deep orange `#E85D26`): **Power — ₹5.14/kg**
> 2. (Wire, medium orange): **Wire — ₹3.70/kg**
> 3. (Boat, medium-light orange): **Boat — ₹3.28/kg**
> 4. (Wastage, teal `#0D8C7E`): **Wastage — ₹1.81/kg**
> 5. (Manpower, lighter teal): **Manpower — ₹1.00/kg**
> 6. (Consumables & Spares, light teal): **Cons & Spares — ₹0.38/kg**
> 7. (Indirect, muted teal): **Indirect — ₹0.26/kg**
> 8. (B-Grade, smallest sliver, palest teal): **B-Grade — ₹0.02/kg**
>
> Above the bar, in a navy `#1A2744` rounded rectangle: **TOTAL ₹15.59/kg ACTUAL** (white text, bold)
> Each segment must show its own ₹ value AS A LABEL inside or to the right of the segment, plus the cost head name. Segments must be proportional to their actual ₹ values.
>
> RIGHT HALF — a clean numbered list of the same 8 heads with their owners. Each row has:
> - Cost head name (navy bold)
> - Owner (grey, smaller)
> - A small filled circle showing the colour-code matching the bar segment
>
> Rows in order:
> 1. Wire — Met Operator + Procurement
> 2. Boat — Met Operator + Procurement
> 3. Power — Met Operator + Maintenance
> 4. Wastage — Met Op + Slit Op
> 5. Manpower — HR / Production Head
> 6. Consumables & Spares — Stores + Maintenance
> 7. Indirect — Plant Overhead
> 8. B-Grade — Met Op + QC
>
> **Bottom callout (full-width strip, 10% of height):**
> Navy `#1A2744` background. Two-column split:
> - LEFT (orange `#E85D26` text, bold): **⚡ Reader Insight:**
> - RIGHT (white text): *Power alone is bigger than Wire + Boat combined. If you have time to fix only ONE cost head this month, fix power consumption.*
>
> **Bottom-right corner of the entire image:** place the attached VKS Tech logo at ~80×80 px on a small white circle/rounded-square backplate.
>
> **Bottom-left corner:** small grey footer text: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif throughout. Cost head names in **semibold**, ₹ values in **bold**. Subtitle in regular weight. NEVER use serif or display fonts here. Crisp, dense, executive-ready. Print-friendly so engineers can stick this on a cabin wall and read at 1.5m distance.
>
> **What to AVOID:** clipart, cartoons, hand-drawn elements, gradients other than within bar segments, drop shadows beyond very subtle, photorealism, isometric/3D effects, decorative borders.

### Plan B

If logo is missing, composite manually after generation. Place at bottom-right at ~80×80 px.

### Quality check before accepting

- All 8 ₹ values present and correct (5.14, 3.70, 3.28, 1.81, 1.00, 0.38, 0.26, 0.02)
- TOTAL ₹15.59/kg correctly displayed
- Bar segments visually proportional to their values
- Owner column readable
- Logo present at bottom-right
- No extra decorative elements

---

## IMAGE 2B — Cost Build-Up Diagram, Hindi (`cost-build-up-hi.png`)

**Save as:** `cost-build-up-hi.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Hindi mirror of Image 2A. Same data, Hindi labels.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a flat-vector editorial infographic with EXACTLY the same layout, colour palette, and structure as the English Cost Build-Up infographic. The cost head NAMES stay in English (Wire, Boat, Power, Wastage, Manpower, Cons & Spares, Indirect, B-Grade) because that is how Indian shop floors actually use them. Only the title, subtitle, owner labels, and callout translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text. Numbers stay in English numerals.
>
> **Header:**
> - Eyebrow strip (orange `#E85D26`, English): **METALLISER FINANCIAL ANATOMY**
> - Title (Hindi, navy `#1A2744`, large bold): **Metalliser Conversion Cost के 8 Building Blocks**
> - Subtitle (Hindi, grey `#5A5A5A`): *हर cost head का अपना owner, अपना formula, अपना monthly target — सब एक ₹/kg number में stack होते हैं।*
>
> **Stacked bar (left half):** identical to Image 2A — 8 segments with English cost head names + ₹ values (Power ₹5.14, Wire ₹3.70, Boat ₹3.28, Wastage ₹1.81, Manpower ₹1.00, Cons & Spares ₹0.38, Indirect ₹0.26, B-Grade ₹0.02). Top label: **TOTAL ₹15.59/kg ACTUAL**.
>
> **Right half — owners list with Hindi notes:**
> 1. Wire — Met Operator + Procurement
> 2. Boat — Met Operator + Procurement
> 3. Power — Met Operator + Maintenance
> 4. Wastage — Met Op + Slit Op
> 5. Manpower — HR / Production Head
> 6. Consumables & Spares — Stores + Maintenance
> 7. Indirect — Plant Overhead
> 8. B-Grade — Met Op + QC
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ Reader Insight:**
> - RIGHT (white text, Hindi): *Power अकेले Wire + Boat combined से बड़ा है। अगर इस महीने सिर्फ़ एक cost head fix करने का time है, तो Power consumption fix करें।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 2A. Same colour palette, same fonts (Inter for English, Hind/Mukta for Hindi). Same proportions.

### Plan B for Hindi rendering issues

Most image-gen models render Devanagari incorrectly — joined letters break, vowel marks misalign. **Recommended workflow:**
1. Generate the EN version (Image 2A) first and confirm it's good
2. Use that as a base in Photopea/Canva
3. Replace the English title, subtitle, and callout text with Hindi rendered through a proper Devanagari source (Google Fonts Hind/Mukta, or simply type into Photopea with the right font installed)

This produces cleaner Hindi text than asking the model to render it directly.

---

## IMAGE 3A — Five Equivalence Factors, English (`equivalence-factors-en.png`)

**Save as:** `equivalence-factors-en.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Visual reference for the 5 factors that build the equivalence multiplier. **This image is the conceptual heart of the blog** — readers will return to it repeatedly, so make it information-dense but scannable.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a flat-vector editorial infographic. Five-card grid layout (3 cards top row, 2 cards bottom row, OR 5 cards in one row if width allows). Pure flat vector, *Harvard Business Review* educational poster aesthetic.
>
> **Background:** cream `#FAF9F6` with subtle paper grain (5% max).
>
> **Header zone:**
> - Eyebrow strip (orange `#E85D26`, small caps): **WHY 1 MT IS NOT ALWAYS 1 MT**
> - Title (navy `#1A2744`, large bold): **The 5 Equivalence Factors of Metalliser Output**
> - Subtitle (grey `#5A5A5A`, regular): *Multiply these together to convert your Actual MT into Equivalent baseline MT. Diverse mix = track all five separately. Narrow mix = simplify.*
>
> **Main grid — 5 cards, each card is a vertical column:**
>
> **CARD 1 — OD Equivalence**
> - Top icon (simple line-icon, navy `#1A2744`, ~60 px): a stylised "optical density gauge" — a horizontal scale with a needle pointing to "M2.2"; NOT a roll cross-section. Important: OD here means OPTICAL DENSITY (deposition thickness), not roll diameter.
> - Title (navy bold, large): **1. OD Equivalence**
> - Sub-tag (orange `#E85D26`, small caps): HIGHER DENSITY = HARDER
> - Three rows in a small table format:
>   - **OD M2.2** → 1.00× (Baseline)
>   - **OD M2.5** → 1.24×
>   - **OD M2.8** → 1.44×
> - Footer caption (grey, small italic): *Higher OD = thicker aluminium deposition = more wire, more boats, slower line speed.*
>
> **CARD 2 — Special Material Equivalence**
> - Top icon: a stylised flask or molecule — abstract chemistry symbol
> - Title: **2. Special Material Equivalence**
> - Sub-tag: SPECIAL CHEMISTRY = HARDER
> - Three rows:
>   - **Standard Transparent** → 1.00× (Baseline)
>   - **Reverse / Release Coat (RC)** → 2.17×
>   - **AlOx (Aluminium Oxide)** → 3.00×
> - Footer caption: *Special chemistry needs slower speeds, tighter QC, and special non-standard width/length metallised — setup time per cycle increases.*
>
> **CARD 3 — Micron Equivalence**
> - Top icon: three horizontal bars of decreasing thickness representing 12μm / 10μm / 8μm
> - Title: **3. Micron Equivalence**
> - Sub-tag: THINNER = HARDER
> - Three rows:
>   - **12 micron** → 1.00× (Baseline)
>   - **10 micron** → 1.20×
>   - **8 micron** → 1.875×
> - Footer caption: *Thinner film breaks more, runs slower, demands tighter tension control.*
>
> **CARD 4 — Width Equivalence**
> - Top icon: two horizontal arrows showing slit widths (3000mm full, 1500mm half)
> - Title: **4. Width Equivalence**
> - Sub-tag: NARROWER SLIT = HARDER
> - Three rows:
>   - **3000mm (full)** → 1.00× (Baseline)
>   - **2000mm** → ~1.50×
>   - **1500mm** → ~2.00×
> - Footer caption: *Narrower-than-baseline runs trigger more slitter changeovers per MT of output.*
>
> **CARD 5 — Length Equivalence**
> - Top icon: a circular roll silhouette with a "length" indicator showing "54,000m"
> - Title: **5. Length Equivalence**
> - Sub-tag: SHORTER JUMBO = HARDER
> - Three rows:
>   - **54,000m (12μm PET)** → 1.00× (Baseline)
>   - **24,000–48,000m (RC)** → up-multiplier (varies)
>   - **Short jumbo** → up-multiplier
> - Footer caption: *Shorter jumbo = more metalliser changeovers per MT = more pump-down cycles + start-up ramps.*
>
> **Bottom unifying band (full-width, navy `#1A2744` background, white + orange text):**
> Centred, three-line message:
> - Line 1 (white): **Combined Eqv Factor = OD × Sp.Material × Micron × Width × Length**
> - Line 2 (orange `#E85D26` accent): *Worked example:* AlOx (`PET_12_M0.3_AlOx`) → 1.00 × 3.00 × 1.00 × 1.00 × 1.00 = **3.00×**
> - Line 3 (small italic, white): *Full derivation methodology in Blog #29 — How to Calculate the Equivalent Factor for Any Material*
>
> **Bottom-right corner:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Card design rules:**
> - Equal card heights and widths
> - Soft white card backgrounds with thin 1px navy border
> - Title large, sub-tag distinct (smaller, orange caps)
> - Tables clean, with the "Baseline" row highlighted faintly
> - Use simple monoline icons (lucide.dev / heroicons style) — never cute clipart
>
> **Typography:** Inter or Söhne. Numbers (1.00×, 1.24×, etc.) in tabular figures, slightly heavier weight.
>
> **AVOID:** decorative flourishes, drop shadows beyond very subtle, photorealistic icons, isometric, 3D, gradients (except in subtle card backgrounds), red colours other than `#E85D26`.

### Plan B

If logo missing, composite manually. If 5-card grid is too dense, fall back to 3-top-2-bottom. If a model insists on rendering OD as a roll diameter, RE-PROMPT with: *"OD here is OPTICAL DENSITY of metallisation, NOT roll outer diameter. Use a density-gauge or thickness-meter icon, NOT a circular cross-section."*

### Quality check before accepting

- All 5 factor cards present
- OD icon is **density/gauge**, NOT roll cross-section
- Special Material card explicitly shows **AlOx** (not "Alubond"), and **Reverse/Release Coat**
- Micron card values: 1.00 / 1.20 / 1.875
- Width card mentions 3000mm baseline
- Length card mentions 54,000m baseline + 24,000–48,000m for RC
- Bottom band shows the multiplication formula and the AlOx worked example
- Logo at bottom-right
- **No "Alubond" anywhere** — must say AlOx

---

## IMAGE 3B — Five Equivalence Factors, Hindi (`equivalence-factors-hi.png`)

**Save as:** `equivalence-factors-hi.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Hindi mirror of Image 3A.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a flat-vector editorial infographic with EXACTLY the same 5-card layout, colour palette, and structure as the English Equivalence Factors infographic. Numbers, formulas, and material codes stay in English (1.00×, 1.24×, 1.875×, OD M2.2, AlOx, etc.). Only the title, sub-tags, footer captions, and bottom band translate to Hindi.
>
> Use Hind or Mukta Devanagari font.
>
> **Header:**
> - Eyebrow strip (orange `#E85D26`, English): **WHY 1 MT IS NOT ALWAYS 1 MT**
> - Title (Hindi, navy bold, large): **Metalliser Output के 5 Equivalence Factors**
> - Subtitle (Hindi, grey): *इन पाँचों को multiply करें Actual MT को Equivalent baseline MT में convert करने के लिए। Diverse mix = पाँचों को separately track करें। Narrow mix = simplify करें।*
>
> **Card 1 — OD Equivalence:**
> - Sub-tag (Hindi orange caps): HIGHER OD = ज़्यादा मुश्किल
> - Three rows: identical English values (M2.2 → 1.00×, M2.5 → 1.24×, M2.8 → 1.44×)
> - Footer caption (Hindi): *Higher OD = thicker aluminium deposition = ज़्यादा wire, ज़्यादा boats, slower line speed।*
>
> **Card 2 — Special Material Equivalence:**
> - Sub-tag (Hindi): SPECIAL CHEMISTRY = ज़्यादा मुश्किल
> - Three rows: Standard Transparent → 1.00×, Reverse/Release Coat (RC) → 2.17×, **AlOx (Aluminium Oxide)** → 3.00×
> - Footer caption (Hindi): *Special chemistry को slower speeds, tighter QC, और special non-standard width/length metallised चाहिए — हर cycle का setup time बढ़ जाता है।*
>
> **Card 3 — Micron Equivalence:**
> - Sub-tag (Hindi): THINNER = ज़्यादा मुश्किल
> - Three rows: 12μm → 1.00×, 10μm → 1.20×, 8μm → 1.875×
> - Footer caption (Hindi): *पतली film ज़्यादा break होती है, slower चलती है, tighter tension control demand करती है।*
>
> **Card 4 — Width Equivalence:**
> - Sub-tag (Hindi): NARROWER SLIT = ज़्यादा मुश्किल
> - Three rows: 3000mm → 1.00×, 2000mm → ~1.50×, 1500mm → ~2.00×
> - Footer caption (Hindi): *Narrower-than-baseline runs per MT ज़्यादा slitter changeovers trigger करते हैं।*
>
> **Card 5 — Length Equivalence:**
> - Sub-tag (Hindi): SHORTER JUMBO = ज़्यादा मुश्किल
> - Three rows: 54,000m → 1.00×, 24,000–48,000m (RC) → up-multiplier, Short jumbo → up-multiplier
> - Footer caption (Hindi): *Shorter जumbo = per MT ज़्यादा metalliser changeovers = ज़्यादा pump-down cycles + start-up ramps।*
>
> **Bottom unifying band (Hindi explanation, English math):**
> - Line 1 (white): **Combined Eqv Factor = OD × Sp.Material × Micron × Width × Length**
> - Line 2 (orange): *Worked example:* AlOx (`PET_12_M0.3_AlOx`) → 1.00 × 3.00 × 1.00 × 1.00 × 1.00 = **3.00×**
> - Line 3 (small Hindi italic, white): *पूरी derivation methodology Blog #29 में — किसी भी Material के लिए Equivalent Factor कैसे Calculate करें*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px.
> **Bottom-left:** Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 3A. Same icons, same colours, same typography (Inter for English/numbers, Hind/Mukta for Hindi).

### Plan B for Hindi

Generate Image 3A first, then in Photopea / Canva replace title/sub-tags/captions with Hindi text rendered using a clean Devanagari font (Hind, Mukta). This is more reliable than asking the model to handle Devanagari directly.

---

## REVIEW — How to Judge Whether Each Image Is Good Enough

For every generated image, walk through this 8-point check **before publishing**. If even one fails, regenerate or post-edit.

### 1. Brand colour discipline (most common failure)

✅ Pass: only Navy `#1A2744`, Orange `#E85D26`, Teal `#0D8C7E`, Cream `#FAF9F6`, white, grey
❌ Fail: any blue, any green outside teal, any yellow, any red other than the orange, any rainbow gradients

### 2. Typography quality

✅ Pass: clean sans-serif (Inter / Söhne / Helvetica), readable at 1.5m distance, ₹ symbol renders correctly
❌ Fail: serif fonts in the body, decorative/handwritten fonts, ₹ rendered as a box, numbers cramped, text overlapping

### 3. Number accuracy (HARD requirement)

Every ₹ value and ratio MUST be correct. Spot-check against this list:
- ₹15.59/kg (Total Actual)
- ₹12.13/kg (Total Equivalent)
- ₹10.84/kg (Target)
- ₹5.14, ₹3.70, ₹3.28, ₹1.81, ₹1.00, ₹0.38, ₹0.26, ₹0.02 (the 8 cost heads)
- 1.00×, 1.24×, 1.44×, 1.20×, 1.875×, 2.17×, 3.00× (factor values)
- 1.49× (overall multiplier)
- 54,000m baseline, 24,000–48,000m for RC, 3000mm baseline width
- 665 MT actual, 990 MT equivalent

If any number is wrong, regenerate or overlay the correct number in an image editor.

### 4. Material name discipline

- ✅ Pass: **AlOx** or **AlOx (Aluminium Oxide)**
- ❌ Fail: "Alubond" — that was the old draft, do NOT publish anything saying Alubond
- ✅ Pass: **Reverse/Release Coat** or **RC**
- ✅ Pass: material codes in `PET_12_M2.2` format with underscores
- ❌ Fail: `G12301M22` (old format)

### 5. OD interpretation discipline

- ✅ Pass: OD shown as a density/gauge / thickness scale (with values M2.2, M2.5, M2.8)
- ❌ Fail: OD shown as a roll's outer diameter / cross-section circles. **OD = Optical Density**, not roll diameter.

If a model renders OD as concentric roll circles, regenerate with the explicit clarification: *"OD = Optical Density (a deposition thickness metric, M2.2 = 2.2 OD value), NOT roll outer diameter. Show it as a horizontal density gauge with a needle, or as a thickness label."*

### 6. Logo placement

- ✅ Pass: VKS Tech logo visible at bottom-right, ~80–110 px, on a small white circular/rounded backplate, not pixelated
- ❌ Fail: logo missing, logo embedded inside the artwork, logo distorted, logo without backplate so it disappears against cream

If logo is missing, use Plan B and composite manually.

### 7. Information density vs scannability

✅ Pass: a reader can extract the key insight in 5 seconds, AND can study the details for 60+ seconds
❌ Fail: too dense to read at a glance / so sparse there's nothing to study

For Image 3 specifically, the 5-card layout must be scannable as "5 things multiply together" within 3 seconds.

### 8. No stock-image / AI-generated tells

❌ Avoid:
- Faces of identifiable people (use silhouette/back-view)
- Distorted hands or extra fingers
- Garbled small text in the background
- Obvious AI watermarks (Gemini's "Made with…" tag, Imagen text, etc.)
- Unnatural lighting
- "Plastic" sheen on monitors or surfaces

If any of these appear, crop them out or regenerate.

---

## TROUBLESHOOTING (most common issues)

### "The image looks AI-generated"
Re-prompt with: *"Editorial illustration / vector infographic style, NOT photorealistic AI generation. Clean flat colours, no gradient skin tones, no plastic surfaces."*

### "₹ symbol renders as a box or '?'"
Add: *"Use Unicode rupee symbol ₹ (U+20B9). If unable to render, fallback to 'Rs.'"*. Or generate with "Rs." then text-replace in editor.

### "Numbers come out wrong"
Always overlay correct numbers in an editor afterward. AI image models are unreliable with numerics — treat their numbers as suggestions, not truth.

### "Hindi renders as gibberish"
Use the Plan B workflow: generate EN version first, then text-replace in Photopea/Canva using a real Devanagari font.

### "Image is too dark or too bright"
Add: *"Balanced exposure, midday office lighting equivalent, neither dramatic shadow nor washed-out."*

### "Decorative clutter (sparkles, hearts, confetti)"
Add: *"STRICTLY no decorative elements, no clipart, no flourishes, no sparkles, no emoji-style icons. WSJ / Bloomberg / HBR editorial style ONLY."*

### "Logo gets ignored"
Always have Plan B ready: composite manually. Don't waste credits trying to force the model to embed a custom logo — it almost never works perfectly.

---

## Folder structure when complete

```
28-conversion-cost-metalliser/
├── index.html
├── logo.png                          (already provided)
├── cover.png                         (Image 1)
├── cost-build-up-en.png              (Image 2A)
├── cost-build-up-hi.png              (Image 2B)
├── equivalence-factors-en.png        (Image 3A)
├── equivalence-factors-hi.png        (Image 3B)
└── GEMINI-PROMPTS.md                 (this file)
```

After all 5 images are generated and verified, upload the complete folder contents to Firestore for Blog #28.

---

## Notes on engagement (what makes these images actually work)

The reader of this blog is a plant manager / process engineer who reads on mobile during a tea break or after a tough review meeting. The images need to:

1. **Reward the second look** — first glance gives the headline number, deeper look reveals the structure
2. **Earn space on a cabin wall** — the cost-build-up infographic should be print-ready as a reference poster
3. **Survive the 8-second scroll test** — if a reader scrolls past at speed, they should still register the key insight
4. **Be defensible in a review meeting** — if the plant manager pulls up these visuals to defend their numbers, the visuals should look more credible than dry tables

Design every image with one of these four jobs in mind. Cover = job #3. Cost build-up = job #2. Equivalence factors = job #4.
