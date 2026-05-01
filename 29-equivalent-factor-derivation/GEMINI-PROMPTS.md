# GEMINI IMAGE PROMPTS — Blog 29: How to Calculate the Equivalent Factor for Any Material

## Quick Reference

**5 images required** (1 cover + 2 bilingual derivation flowchart + 2 bilingual worked example)

| # | Filename | Aspect | What it shows |
|---|---|---|---|
| 1 | `cover.png` | 16:9 | Hero cover — derivation playbook |
| 2A | `derivation-flow-en.png` | 16:9 | The 5-factor derivation flowchart, English |
| 2B | `derivation-flow-hi.png` | 16:9 | Same as 2A in Hindi |
| 3A | `worked-example-en.png` | 16:9 | The 11.4× combined worked example, English |
| 3B | `worked-example-hi.png` | 16:9 | Same as 3A in Hindi |

## How to use this file

1. Open Google Gemini, AI Studio, or any image-gen tool that accepts reference images
2. For EACH prompt, **attach `logo.png` to that specific prompt** (Gemini doesn't reliably retrieve files from earlier turns — re-attach every time)
3. Copy the prompt body exactly as written, paste, generate
4. Save the output with the **exact filename** shown (case-sensitive, dashes not underscores)
5. Place all 3 images alongside `index.html` in the same folder before publishing

## Brand standards (non-negotiable)

| Color | Hex | Use |
|---|---|---|
| Navy | `#1A2744` | Headings, dark panels, primary text |
| Orange | `#E85D26` | Accents, hero numbers, callouts |
| Teal | `#0D8C7E` | Secondary, productivity factors |
| Cream | `#FAF9F6` | Backgrounds |
| Grey | `#5A5A5A` | Subtitles, captions |

**No other colors.** No red except `#E85D26`. No blue except navy. No yellow, no green outside teal.

**No photorealistic identifiable faces.** People may appear back-view, hands-only, silhouette, or face-obscured.

**No decorative clipart** — confetti, hearts, sparkles, cartoon icons. WSJ / Bloomberg / Harvard Business Review editorial style only.

**Fonts to request:** Inter, Söhne, Helvetica Neue (Latin); Hind, Mukta (Devanagari). Big numbers and formulas should use Bebas Neue, Anton, or Oswald — heavy condensed sans-serif.

---

## IMAGE 1 — Cover (`cover.png`)

**Save as:** `cover.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Hero image that signals "this is the derivation reference manual you've been needing." Should feel like a textbook chapter cover — authoritative, clean, technical.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create an editorial magazine-cover image for a flexible-packaging industry blog post titled "How to Calculate the Equivalent Factor for Any Material." This is a reference / derivation guide — the visual must convey "formulas, methodology, defensible math" — not "case study" or "drama."
>
> **Composition** — split scene 50/50:
> - LEFT 50%: a clean engineering-desk scene shot from above. Visible: a notebook with handwritten formulas (visible as legible: "R_base ÷ R_M2.5 = 1.25×"), a calculator, a printed material-code table, a coffee mug, a pencil. Soft natural daylight from the left. Industrial documentary photography style, shallow depth of field, NOT staged-perfect — slight notebook wear, real engineering desk.
> - RIGHT 50%: a clean dark navy `#1A2744` panel with subtle paper-grain texture.
>
> **Text overlay on the navy panel:**
> - Top eyebrow strip in orange `#E85D26`, all caps, small letterspacing: **vksTech.com / DERIVATION PLAYBOOK**
> - Main title in white Inter Bold or Söhne Bold (3 lines, large): **How to Calculate the Equivalent Factor for Any Material**
> - Subtitle in lighter grey `#FAF9F6` italic: *PET, BOPP, CPP — one method, every film, defensible from first principles*
> - HORIZONTAL DIVIDER (orange `#E85D26`, 2 px thin)
> - HERO FORMULA — display the core formula prominently, in Bebas Neue or similar heavy condensed font, large (~80 pt):
>   - **Productivity Eqv = R_baseline ÷ R_material** (in white)
>   - Below it, smaller orange caps: THE UNIVERSAL FORMULA
>   - Below that, slightly smaller white text: × Width Eqv × Length Eqv
> - Bottom strip on the navy panel: small text — **Vivek Kumar | M.Tech NIT Uttarakhand | 9+ Years Flexible Packaging**
> - In the **bottom-right corner**, place the attached VKS Tech logo at ~110×110 px with a thin white round backplate
>
> **Mood**: technical, authoritative, reference-grade. Think *MIT Technology Review* meets a plant-engineering textbook. NOT cinematic, NOT motivational, NOT cluttered. The reader should feel: "this is the page I tear out and pin to my office wall."
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, cream `#FAF9F6`, white. No red except orange. No green, no yellow.

### Plan B (if logo not embedded)

If Gemini ignores the attached logo or generates a placeholder, generate without the logo and composite manually in Canva, Photopea, or GIMP — place `logo.png` at bottom-right at ~110×110 px on a white round backplate.

---

## IMAGE 2A — Derivation Flow Diagram, English (`derivation-flow-en.png`)

**Save as:** `derivation-flow-en.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Show the entire 5-factor derivation methodology as a single flowchart. **This image must be defensible at a corporate review meeting** — the kind of visual a plant manager pulls up to show their CFO "here is how we derive every number."

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a clean flat-vector editorial flowchart-infographic. NOT photorealistic. NOT 3D. Pure flat infographic with crisp typography. Inspired by *Harvard Business Review* / *MIT Sloan Management Review* methodology diagrams.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 12%):**
> - Eyebrow strip in orange `#E85D26`: small caps, letterspaced: **DERIVATION METHODOLOGY**
> - Title (navy `#1A2744`, large bold sans-serif): **How to Calculate the Equivalent Factor — Step by Step**
> - Subtitle (grey `#5A5A5A`, regular weight): *Three productivity factors derived as rolls/day ratios. Two geometric factors derived as direct dimensional ratios. Multiply all five.*
>
> **Main visual zone (middle 75%) — three horizontal lanes:**
>
> **LANE 1 (top, takes 40% of vertical space) — PRODUCTIVITY-DERIVED FACTORS (orange theme):**
> Title above the lane, in orange `#E85D26` bold caps: **PRODUCTIVITY-DERIVED — measure rolls/day**
> Three boxes side by side, each a rounded rectangle with thin navy border:
>
> - **BOX 1 — OD Equivalence**
>   - Header tag (small, navy): FACTOR 1
>   - Title (navy bold): OD Equivalence
>   - Formula (orange `#E85D26`, large, in monospaced or Bebas font): **R_base ÷ R_M2.5**
>   - Worked example below (small grey): If R_base = 12 rolls/day at M2.2, R_M2.5 = 9.6 rolls/day → **1.25×**
>
> - **BOX 2 — Micron Equivalence**
>   - Header tag: FACTOR 2
>   - Title: Micron Equivalence
>   - Formula: **R_base ÷ R_micron**
>   - Worked example: If R_base = 12 rolls/day at 12μm, R_8μm = 6.4 rolls/day → **1.875×**
>
> - **BOX 3 — Material Equivalence**
>   - Header tag: FACTOR 3
>   - Title: Material Equivalence
>   - Formula: **R_base ÷ R_material**
>   - Worked example: If R_base = 12 rolls/day for standard, R_AlOx = 4 rolls/day → **3.00×**
>
> **LANE 2 (middle, takes 30% of vertical space) — GEOMETRY-DERIVED FACTORS (teal theme):**
> Title above the lane, in teal `#0D8C7E` bold caps: **GEOMETRY-DERIVED — direct dimensional ratios**
> Two boxes side by side, slightly larger than Lane 1 boxes:
>
> - **BOX 4 — Width Equivalence**
>   - Header tag (small, navy): FACTOR 4
>   - Title (navy bold): Width Equivalence
>   - Formula (teal `#0D8C7E`, large): **Target Width ÷ Actual Width**
>   - Worked example: 3000mm ÷ 1500mm = **2.00×**
>
> - **BOX 5 — Length Equivalence**
>   - Header tag: FACTOR 5
>   - Title: Length Equivalence
>   - Formula: **Target Length ÷ Actual Length**
>   - Worked example: 54,000m ÷ 27,000m = **2.00×**
>
> **LANE 3 (bottom, takes 20% of vertical space) — COMBINED FACTOR:**
> Single wide rounded rectangle, navy `#1A2744` background, white text:
> - Header tag in orange (small caps): COMBINED EQUIVALENCE FACTOR
> - Formula (large, white, bold, Bebas Neue): **OD × Micron × Material × Width × Length**
> - Below formula (smaller, orange italic): *Worked example combining all five (8μm RC PET at OD M2.5, 2000mm × 36,000m): 1.25 × 1.875 × 2.17 × 1.50 × 1.50 = ~11.4×*
>
> **Connecting visual:** between Lane 1+2 and Lane 3, draw a thin orange `#E85D26` arrow flowing downward from the 5 boxes into the Combined factor box, signalling "all five multiply together."
>
> **Bottom callout strip (full-width, 8% of height):**
> Cream background with thin orange top border. Two-column split:
> - LEFT (orange `#E85D26` text, bold): **⚡ Cross-film note:**
> - RIGHT (navy text): *Same methodology applies to BOPP (18μm baseline) and CPP (22μm baseline) — only the baseline shifts.*
>
> **Bottom-right corner of the entire image:** place the attached VKS Tech logo at ~80×80 px on a small white circle/rounded-square backplate.
>
> **Bottom-left corner:** small grey footer text: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif throughout for body text. Formulas in Bebas Neue, Oswald, or Anton (heavy condensed). Box headers semibold, formulas bold. Subtitle in regular weight.
>
> **What to AVOID:** clipart, cartoons, hand-drawn elements, photorealism, isometric/3D effects, decorative borders, gradients beyond very subtle box shadows, drop shadows that look heavy.

### Plan B

If logo is missing, composite manually after generation. Place at bottom-right at ~80×80 px.

### Quality check before accepting

- All 5 factor boxes present with their correct formulas
- Worked examples are arithmetically correct (1.25×, 1.875×, 3.00×, 2.00×, 2.00×)
- Combined factor box shows the multiplication
- Cross-film note at bottom mentions BOPP and CPP
- Logo present at bottom-right
- Lane 1 (Productivity) is in orange theme
- Lane 2 (Geometry) is in teal theme
- Lane 3 (Combined) is in navy

---

## IMAGE 2B — Derivation Flow Diagram, Hindi (`derivation-flow-hi.png`)

**Save as:** `derivation-flow-hi.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Hindi mirror of Image 2A. Same layout, formulas stay in English (because formulas are universal), descriptive labels in Hindi.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a flat-vector editorial flowchart-infographic with EXACTLY the same layout, colour palette, and structure as the English Derivation Flow infographic. All formulas (R_base ÷ R_M2.5, OD × Micron × Material × Width × Length, etc.) stay in English/symbolic notation because formulas are universal. Numbers stay in English numerals. Descriptive labels and worked-example sentences translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow strip (orange `#E85D26`, English): **DERIVATION METHODOLOGY**
> - Title (Hindi, navy bold, large): **Equivalent Factor कैसे Calculate करें — Step by Step**
> - Subtitle (Hindi, grey): *तीन productivity factors rolls/day ratios से derive। दो geometric factors direct dimensional ratios से derive। पाँचों को multiply करें।*
>
> **Lane 1 — PRODUCTIVITY-DERIVED (orange theme):**
> Title above lane (orange caps, Hindi+English mix): **PRODUCTIVITY-DERIVED — rolls/day measure करें**
>
> Box 1 — OD Equivalence:
> - Title (navy): OD Equivalence
> - Formula: **R_base ÷ R_M2.5** (English)
> - Worked example (Hindi mix): अगर R_base = 12 rolls/day at M2.2, R_M2.5 = 9.6 rolls/day → **1.25×**
>
> Box 2 — Micron Equivalence:
> - Formula: **R_base ÷ R_micron**
> - Worked example: अगर R_base = 12 rolls/day at 12μm, R_8μm = 6.4 rolls/day → **1.875×**
>
> Box 3 — Material Equivalence:
> - Formula: **R_base ÷ R_material**
> - Worked example: अगर R_base = 12 rolls/day for standard, R_AlOx = 4 rolls/day → **3.00×**
>
> **Lane 2 — GEOMETRY-DERIVED (teal theme):**
> Title above lane (teal caps, Hindi+English mix): **GEOMETRY-DERIVED — direct dimensional ratios**
>
> Box 4 — Width Equivalence:
> - Formula: **Target Width ÷ Actual Width**
> - Worked example: 3000mm ÷ 1500mm = **2.00×**
>
> Box 5 — Length Equivalence:
> - Formula: **Target Length ÷ Actual Length**
> - Worked example: 54,000m ÷ 27,000m = **2.00×**
>
> **Lane 3 — COMBINED FACTOR (navy box):**
> - Header tag (orange caps): COMBINED EQUIVALENCE FACTOR
> - Formula (large white): **OD × Micron × Material × Width × Length**
> - Below formula (orange italic, Hindi): *पाँचों को combine करते हुए worked example (8μm RC PET at OD M2.5, 2000mm × 36,000m): 1.25 × 1.875 × 2.17 × 1.50 × 1.50 = ~11.4×*
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ Cross-film note:**
> - RIGHT (navy text, Hindi): *Same methodology BOPP (18μm baseline) और CPP (22μm baseline) पर apply होती है — सिर्फ़ baseline shift होता है।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 2A. Same colour palette, same fonts (Inter for English/numbers/formulas, Hind/Mukta for Hindi).

### Plan B for Hindi rendering issues

Most image-gen models render Devanagari incorrectly — joined letters break, vowel marks misalign. **Recommended workflow:**
1. Generate the EN version (Image 2A) first and confirm it's good
2. Use that as a base in Photopea/Canva
3. Replace the title, subtitle, lane titles, worked-example descriptors, and bottom callout with Hindi rendered through a proper Devanagari source (Google Fonts Hind/Mukta, or simply type into Photopea with the right font installed)

This produces cleaner Hindi text than asking the model to render it directly.

---

## IMAGE 3A — Combined Worked Example, English (`worked-example-en.png`)

**Save as:** `worked-example-en.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Show the 5 equivalence factors *applied to one real product*, stepping through the multiplication, and landing on the headline answer of **11.4×**. This image is the practical companion to Image 2A: the flowchart shows the *method*, this image shows the *answer*. It is the single most defensible visual in a CFO conversation — *"this is exactly how 1 MT of our hardest product becomes 11.4 MT of baseline-equivalent work."*

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a clean flat-vector editorial worked-example infographic. NOT photorealistic. NOT 3D. Pure flat infographic with crisp typography. *Harvard Business Review* / *Bloomberg Markets* educational poster aesthetic. The visual must read like a textbook worked example — calm, confident, mathematically self-consistent.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 12%):**
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **WORKED EXAMPLE — ALL FIVE FACTORS APPLIED**
> - Title (navy `#1A2744`, large bold sans-serif): **One Real Product. Five Factors. One Answer.**
> - Subtitle (grey `#5A5A5A`, regular weight): *Walking through 1 MT of an 8μm Reverse-Coat PET at OD M2.5, slit at 2000mm × 36,000m. Same five-factor method, real plant numbers.*
>
> **PRODUCT CARD (~12% of vertical space, full-width strip below the header):**
> A wide rounded rectangle, white background, thin navy `#1A2744` border. Inside, a horizontal strip showing the product specification as 4 inline tag-pills:
> - Pill 1 (orange tinted): **Film:** 8 micron PET
> - Pill 2 (orange tinted): **OD:** M2.5
> - Pill 3 (teal tinted): **Width:** 2000mm
> - Pill 4 (teal tinted): **Length:** 36,000m
>
> Above the pills, in a small navy caps tag: **PRODUCT SPEC** (left-aligned).
> To the right of the pills, in a small italic grey: *Material code: PET_8_M2.5_RC*
>
> **MAIN VISUAL ZONE (middle 55%) — five factor bubbles in a horizontal multiplication flow:**
>
> Five circular or rounded-square "bubbles" arranged left-to-right, with **bold orange × symbols** between each. Each bubble is ~150 px wide, with consistent visual weight. Bubble layout:
>
> - **Bubble 1 (orange-tinted)** — OD Eqv
>   - Top label (small navy): FACTOR 1
>   - Big number (Bebas Neue or Anton, very large, orange `#E85D26`): **1.25×**
>   - Below number (small grey caps): OD EQV
>   - Tiny tagline below (italic, smaller): *(M2.2 → M2.5)*
>
> - **× separator** in bold orange
>
> - **Bubble 2 (orange-tinted)** — Micron Eqv
>   - Top label: FACTOR 2
>   - Big number: **1.875×**
>   - Below: MICRON EQV
>   - Tagline: *(12μm → 8μm)*
>
> - **× separator**
>
> - **Bubble 3 (orange-tinted)** — Material Eqv
>   - Top label: FACTOR 3
>   - Big number: **2.17×**
>   - Below: MATERIAL EQV
>   - Tagline: *(Standard → RC)*
>
> - **× separator**
>
> - **Bubble 4 (teal-tinted)** — Width Eqv
>   - Top label: FACTOR 4
>   - Big number (teal `#0D8C7E`): **1.50×**
>   - Below: WIDTH EQV
>   - Tagline: *(3000 ÷ 2000)*
>
> - **× separator**
>
> - **Bubble 5 (teal-tinted)** — Length Eqv
>   - Top label: FACTOR 5
>   - Big number (teal): **1.50×**
>   - Below: LENGTH EQV
>   - Tagline: *(54,000 ÷ 36,000)*
>
> Below the row of bubbles, draw a thin orange `#E85D26` arrow flowing downward into the result panel.
>
> **RESULT PANEL (~18% of vertical space, full-width navy `#1A2744` block):**
> - Left side (60% of width):
>   - Small orange caps tag: COMBINED EQUIVALENCE FACTOR
>   - Below it, a single huge number in Bebas Neue or Anton (white, ~140 pt): **11.4×**
>   - Below the number, a single line in white italic: *1 MT of this product = 11.4 MT of baseline-equivalent production*
> - Right side (40% of width):
>   - Small orange caps tag: USE THIS NUMBER IN
>   - Below: a clean white-bordered card titled **Equivalent Conversion Cost (Blog #28)**
>   - One short line below the card: *"Plug 11.4× into the Conversion Cost calculator to convert this product's true contribution to the plant's monthly Equivalent ₹/kg."*
>
> **Bottom callout strip (full-width, 8% of height):**
> Cream background, thin orange top border. Two-column split:
> - LEFT (orange `#E85D26` text, bold): **⚡ Why this matters:**
> - RIGHT (navy text): *Without the 11.4× factor, 1 MT of this product unfairly drags your Actual ₹/kg up. With it, your Equivalent ₹/kg correctly recognises the plant's real work.*
>
> **Bottom-right corner of the entire image:** place the attached VKS Tech logo at ~80×80 px on a small white circle/rounded-square backplate.
>
> **Bottom-left corner:** small grey footer text: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif throughout. Big factor numbers in Bebas Neue, Anton, or Oswald (heavy condensed). The 11.4× hero number must be the largest typography on the entire image — visually dominant, the eye should land there last after walking the multiplication chain.
>
> **What to AVOID:** clipart, cartoons, hand-drawn elements, photorealism, isometric/3D effects, decorative borders, gradients beyond very subtle box shadows, drop shadows that look heavy, rainbow colours.

### Plan B

If logo missing, composite manually after generation. If the 5-bubble horizontal layout is too cramped on the canvas, fall back to a 5-cell horizontal row with rectangular boxes instead of circular bubbles — same content, simpler shapes.

### Quality check before accepting

- All 5 factor bubbles present in correct order (1.25 → 1.875 → 2.17 → 1.50 → 1.50)
- Bubbles 1-3 are orange-themed (productivity), bubbles 4-5 are teal-themed (geometry)
- × symbols visible between each bubble
- Result panel shows **11.4×** as the hero number
- Interpretation line: "1 MT of this product = 11.4 MT of baseline-equivalent production"
- Cross-reference to Blog #28 visible
- Material code shown as `PET_8_M2.5_RC` (NOT old `G08...` format)
- Logo at bottom-right
- 11.4× is visually the largest type element in the image

---

## IMAGE 3B — Combined Worked Example, Hindi (`worked-example-hi.png`)

**Save as:** `worked-example-hi.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Hindi mirror of Image 3A. Same layout, factor numbers and material code stay in English (universal), descriptive labels in Hindi.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a flat-vector editorial worked-example infographic with EXACTLY the same layout, colour palette, bubble structure, and result panel as the English Combined Worked Example infographic. All factor numbers (1.25×, 1.875×, 2.17×, 1.50×, 1.50×, 11.4×), the material code (PET_8_M2.5_RC), the 4 product spec values (8 micron, M2.5, 2000mm, 36,000m), and the multiplication symbols stay in English/symbolic notation. Only the title, subtitle, factor labels, taglines, result interpretation, and bottom callout translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow strip (orange `#E85D26`, English): **WORKED EXAMPLE — ALL FIVE FACTORS APPLIED**
> - Title (Hindi, navy bold, large): **एक Real Product. पाँच Factors. एक Answer.**
> - Subtitle (Hindi, grey): *एक 8μm Reverse-Coat PET, OD M2.5, 2000mm × 36,000m जumbo के 1 MT पर walk through। वही पाँच-factor method, real plant numbers।*
>
> **Product card:**
> - Tag (Hindi navy caps): **PRODUCT SPEC**
> - 4 pills: **Film:** 8 micron PET | **OD:** M2.5 | **Width:** 2000mm | **Length:** 36,000m (English values)
> - To right (Hindi italic grey): *Material code: PET_8_M2.5_RC*
>
> **Five factor bubbles** (numbers and × symbols stay English):
>
> Bubble 1 (orange) — OD Eqv:
> - Tag: FACTOR 1
> - Big number: **1.25×**
> - Label below: OD EQV
> - Tagline (Hindi): *(M2.2 → M2.5)*
>
> Bubble 2 (orange) — Micron Eqv:
> - Tag: FACTOR 2
> - Big number: **1.875×**
> - Label: MICRON EQV
> - Tagline: *(12μm → 8μm)*
>
> Bubble 3 (orange) — Material Eqv:
> - Tag: FACTOR 3
> - Big number: **2.17×**
> - Label: MATERIAL EQV
> - Tagline (Hindi): *(Standard → RC)*
>
> Bubble 4 (teal) — Width Eqv:
> - Tag: FACTOR 4
> - Big number (teal): **1.50×**
> - Label: WIDTH EQV
> - Tagline: *(3000 ÷ 2000)*
>
> Bubble 5 (teal) — Length Eqv:
> - Tag: FACTOR 5
> - Big number (teal): **1.50×**
> - Label: LENGTH EQV
> - Tagline: *(54,000 ÷ 36,000)*
>
> **Result panel (navy `#1A2744`):**
> - Left side:
>   - Tag (orange caps): COMBINED EQUIVALENCE FACTOR
>   - Hero number (white, very large): **11.4×**
>   - Below (Hindi italic, white): *इस product का 1 MT = 11.4 MT baseline-equivalent production*
> - Right side:
>   - Tag (orange caps): USE THIS NUMBER IN
>   - Card title: **Equivalent Conversion Cost (Blog #28)**
>   - Below card (Hindi): *"11.4× को Conversion Cost calculator में plug करें और इस product के plant के monthly Equivalent ₹/kg में true contribution देखें।"*
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ ये क्यों matter करता है:**
> - RIGHT (navy text, Hindi): *11.4× factor के बिना, इस product का 1 MT आपकी Actual ₹/kg को unfairly ऊपर खींचता है। इसके साथ, आपकी Equivalent ₹/kg plant के real काम को correctly recognise करती है।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 3A. Same colour palette, same fonts (Inter for English/numbers, Hind/Mukta for Hindi).

### Plan B for Hindi rendering issues

Use the same workflow as Image 2B's Plan B: generate the EN version (Image 3A) first, then in Photopea/Canva replace the title, subtitle, taglines, result interpretation, and bottom callout with proper Devanagari text using a Hind or Mukta font. The five factor numbers, the 11.4× result, and the product spec pills all stay in English in both versions, so the work to "translate" is minimal — mostly just the surrounding prose.

---

## REVIEW — How to Judge Whether Each Image Is Good Enough

For every generated image, walk through this 8-point check **before publishing**. If even one fails, regenerate or post-edit.

### 1. Brand colour discipline (most common failure)

✅ Pass: only Navy `#1A2744`, Orange `#E85D26`, Teal `#0D8C7E`, Cream `#FAF9F6`, white, grey
❌ Fail: any blue, any green outside teal, any yellow, any red other than the orange, any rainbow gradients

### 2. Typography quality

✅ Pass: clean sans-serif (Inter / Söhne / Helvetica), formulas in heavy condensed font (Bebas / Oswald / Anton), readable at 1.5m distance
❌ Fail: serif fonts, decorative/handwritten fonts, formulas in script fonts, numbers cramped, text overlapping

### 3. Formula accuracy (HARD requirement)

Every formula MUST be syntactically and conceptually correct. Spot-check against this list:
- **OD Eqv = R_base ÷ R_M2.5** (or R_M2.8, etc.)
- **Micron Eqv = R_base ÷ R_micron**
- **Material Eqv = R_base ÷ R_material**
- **Width Eqv = Target Width ÷ Actual Width**
- **Length Eqv = Target Length ÷ Actual Length**
- **Combined = OD × Micron × Material × Width × Length**

Worked example numbers:
- 1.25× (OD), 1.875× (Micron 8μm), 3.00× (AlOx), 2.00× (Width 3000/1500), 2.00× (Length 54000/27000), ~11.4× (combined of mixed example)

If any formula or number is wrong, regenerate or overlay correctly.

### 4. Material name discipline

- ✅ Pass: **AlOx** or **AlOx (Aluminium Oxide)**
- ❌ Fail: "Alubond"
- ✅ Pass: **Reverse/Release Coat** or **RC**
- ✅ Pass: material codes in `PET_12_M2.2` format (if shown)

### 5. Productivity-vs-Geometry color discipline

- ✅ Pass: Lane 1 (OD, Micron, Material) is **orange-themed**. Lane 2 (Width, Length) is **teal-themed**. Lane 3 (Combined) is **navy**.
- ❌ Fail: lanes mixed up, all factors look the same colour, no visual hierarchy

This colour-coding makes the productivity-vs-geometry distinction visible at a glance — preserve it.

### 6. Logo placement

- ✅ Pass: VKS Tech logo visible at bottom-right, ~80–110 px, on a small white circular/rounded backplate, not pixelated
- ❌ Fail: logo missing, distorted, embedded inside artwork, or invisible against the background

### 7. Information density vs scannability

✅ Pass: the 5 factor boxes can be read in 5 seconds; the combined formula at the bottom is the visual punch line
❌ Fail: formulas too small, boxes too cluttered, no clear read order

### 8. No stock-image / AI-generated tells

❌ Avoid:
- Faces of identifiable people (use silhouette/back-view if any)
- Distorted hands or extra fingers
- Garbled small text in the background
- Obvious AI watermarks (Gemini's "Made with…" tag, Imagen text, etc.)
- Unnatural lighting
- "Plastic" sheen on monitors or surfaces

If any of these appear, crop them out or regenerate.

---

## TROUBLESHOOTING (most common issues)

### "The formulas come out garbled / mathematically wrong"
This is the single biggest risk for this blog's images. AI models routinely generate "R_basc ÷ R_M2.5" or invent fake variable names. **Always overlay correct formulas in an image editor afterward** — treat the generated formulas as placeholders, not truth.

### "₹ symbol or × symbol renders as a box"
Add: *"Use Unicode multiplication symbol × (U+00D7) and proper subscripts. If unable to render, use 'x' as substitute."*. Or generate with plain "x" then text-replace in editor.

### "Numbers come out wrong"
Always overlay correct numbers in an editor afterward. Particularly the worked examples (1.25×, 1.875×, 3.00×, 2.00×, 11.4×) must be exact.

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
29-equivalent-factor-derivation/
├── index.html
├── logo.png                         (already provided)
├── cover.png                        (Image 1)
├── derivation-flow-en.png           (Image 2A)
├── derivation-flow-hi.png           (Image 2B)
├── worked-example-en.png            (Image 3A)
├── worked-example-hi.png            (Image 3B)
├── GEMINI-PROMPTS.md                (markdown reference)
└── GEMINI-PROMPTS.html              (interactive page with copy buttons)
```

After all 5 images are generated and verified, upload the complete folder contents to Firestore for Blog #29.

---

## Notes on engagement (what makes these images actually work)

The reader of Blog 29 is a plant manager / process engineer who has just read Blog 28 (Conversion Cost) and is now looking for **derivation authority**. They want to know:
1. *Where exactly does 1.875× come from?*
2. *Can I defend this in a CFO meeting?*
3. *How do I derive a factor for a material my plant is going to start running next quarter?*

Each image must do one of these three jobs:

- **Cover** = sets the tone "this is the reference manual for derivation, not a blog post about it"
- **Derivation flow** (Image 2A/2B) = the single visual a plant manager pulls up when someone in a review meeting asks "show me how this number is derived"
- **Combined worked example** (Image 3A/3B) = the visual a plant manager pulls up to defend a *specific* number — *"this is exactly how 1 MT of our hardest product becomes 11.4 MT of baseline-equivalent work"*. The flowchart explains the method; the worked example proves it works on a real product.

Design with these in mind. Both the flowchart and the worked example must be print-ready for A3 cabin-wall reference posters.
