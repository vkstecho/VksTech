# GEMINI IMAGE PROMPTS — Blog 31: AlOx vs Metallised PET (EPR Decision)

## Quick Reference

**5 images required** — 1 cover + 2 bilingual process diagrams + 2 bilingual decision matrix

| # | Filename | Aspect | What it shows |
|---|---|---|---|
| 1 | `cover.png` | 16:9 | Cover — split-scene with both films + EPR April 2026 mandate |
| 2A | `process-difference-en.png` | 16:9 | Same metalliser, two chemistries: Al vapor vs AlOx ceramic vapor |
| 2B | `process-difference-hi.png` | 16:9 | Same as 2A in Hindi |
| 3A | `decision-matrix-en.png` | 16:9 | Side-by-side comparison: Met PET vs AlOx across all 4 lenses |
| 3B | `decision-matrix-hi.png` | 16:9 | Same as 3A in Hindi |

## How to use this file

1. Open Google Gemini, AI Studio, or any image-gen tool that accepts reference images
2. For EACH prompt, **attach `logo.png` to that specific prompt**
3. Copy the prompt body exactly as written, paste, generate
4. Save the output with the **exact filename** shown
5. Place all 5 images alongside `index.html` in the same folder before publishing

## Brand standards

| Color | Hex | Use |
|---|---|---|
| Navy | `#1A2744` | Headings, dark panels, primary text |
| Orange | `#E85D26` | Accents, hero numbers, callouts |
| Teal | `#0D8C7E` | Secondary, mono-material/AlOx accents |
| Cream | `#FAF9F6` | Backgrounds |
| Grey | `#5A5A5A` | Subtitles, captions |

**No other colors.** No photorealistic identifiable faces. No decorative clipart. WSJ / Bloomberg / HBR editorial style only. Inter or Söhne fonts (Latin); Hind or Mukta (Devanagari). Big numbers in Bebas Neue, Anton, or Oswald.

**Critical numbers (must appear correctly):** Met PET 32.17 MT/day · AlOx 12.11 MT/day · −62% delta · ₹15.59/kg vs ₹46.77/kg conversion cost · ₹17.50/kg vs ₹4/kg EPR liability

---

## IMAGE 1 — Cover (`cover.png`)

**Save as:** `cover.png` · **Dimensions:** 1600×900 px (16:9)
**Goal:** Hero cover that signals "this is THE strategic decision driving 2026 packaging" — silver opaque film vs transparent ceramic film, with the EPR April 2026 hammer in the background.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create an editorial magazine-cover image for a flexible-packaging industry blog post titled "AlOx vs Metallised PET — When to Use Which (And Why EPR April 2026 Forces You to Decide)." The image must convey *strategic choice, regulatory pressure, and technical sophistication*.
>
> **Composition** — split scene, three-zone layout:
>
> - LEFT THIRD: a vertical photograph of a tightly-wound metallised PET roll — opaque silver mirror finish, shot in industrial documentary style with shallow depth of field, warm industrial lighting. The roll fills the left third floor-to-ceiling.
> - MIDDLE THIRD: a vertical photograph of a tightly-wound AlOx PET roll — glass-clear transparent finish, you can see the core through the film, shot in identical lighting and framing as the left roll. Same height, same camera angle.
> - RIGHT THIRD: a clean dark navy `#1A2744` editorial panel with subtle paper-grain texture.
>
> Between the two rolls, a thin orange `#E85D26` vertical separator line with the text **"vs"** in a small circle at mid-height.
>
> **Text overlay on the navy panel:**
> - Top eyebrow strip in orange `#E85D26`, all caps, small letterspacing: **vksTech.com / EPR DECISION 2026**
> - Main title in white Inter Bold or Söhne Bold (3-4 lines, large): **AlOx vs Metallised PET**
> - Subtitle line: *When to use which*
> - Smaller italic line in grey `#FAF9F6` (lower opacity): *And why EPR April 2026 forces you to decide*
> - HORIZONTAL DIVIDER (orange `#E85D26`, 2 px thin)
> - HERO STAT BLOCK — three numbers stacked vertically:
>   - **−62%** in bright orange `#E85D26` (Bebas Neue, ~120 pt), label below in tiny grey caps: SAME-MACHINE CAPACITY DROP
>   - **4.4×** in white (slightly smaller, ~80 pt), label below in tiny orange caps: EPR LIABILITY DELTA (CAT III vs II)
>   - **3×** in teal `#0D8C7E` (similar size to 4.4×), label below in tiny orange caps: CONVERSION COST PREMIUM
> - Bottom strip on the navy panel: small text — **Vivek Kumar | M.Tech NIT Uttarakhand | 9+ Years Flexible Packaging**
> - In the **bottom-right corner**, place the attached VKS Tech logo at ~110×110 px with a thin white round backplate
>
> **Mood**: industrial executive-grade, NOT cinematic, NOT sci-fi. Think *The Wall Street Journal* manufacturing feature meets a packaging-industry quarterly. The reader should feel: "this is the decision document I show my board."
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No red except orange. No green outside teal. No yellow.

### Plan B
If logo not embedded, generate without and composite manually in Canva/Photopea — place `logo.png` at bottom-right at ~110×110 px on a white round backplate. If the AlOx transparent roll is hard to render convincingly, replace with a ceramic-coated film mockup showing transparency through the layers.

---

## IMAGE 2A — Process Difference (English) (`process-difference-en.png`)

**Save as:** `process-difference-en.png` · **Dimensions:** 1600×900 px (16:9)
**Goal:** The keeper image. Show that BOTH films come from the same machine — but the chemistry inside the chamber differs. Cross-section of each deposited layer (~30nm scale, Al metal vs Al₂O₃ ceramic).

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a clean flat-vector editorial infographic. NOT photorealistic. NOT 3D. Pure flat vector with crisp typography. Inspired by *The Economist* / *Harvard Business Review* methodology diagrams.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 12%):**
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **THE SAME METALLISER, TWO CHEMISTRIES**
> - Title (navy `#1A2744`, large bold sans-serif): **One Vacuum Chamber. Two Films. One Big Difference.**
> - Subtitle (grey `#5A5A5A`, regular weight): *Aluminium vapor → silver metal layer. Aluminium + oxygen vapor → transparent ceramic. Same machine, different barrier strategy.*
>
> **Main visual zone (middle 70%) — split 50/50 vertically:**
>
> **LEFT HALF — Metallised PET (orange-themed):**
>
> Top of left half: a small navy tag chip — **PROCESS A**. Below: large label (navy bold): **Metallised PET**.
>
> Visual diagram below the label, top-to-bottom:
> 1. **Vacuum chamber outline** (rectangular, navy stroke): shows base PET film entering on the left, exiting on the right
> 2. **Tungsten boat** at chamber center, glowing orange (heat indicator at 1500°C)
> 3. **Aluminium wire feed** entering the boat from above
> 4. **Vapor cloud** above the boat, small upward arrows in orange `#E85D26` indicating "Al vapor"
> 5. **Metal layer condensing on film** — shown as a thin opaque silver band underneath the moving PET
> 6. Below the chamber: a **cross-section bubble/callout** showing the deposited layer at atomic scale: PET base (clear) + Al metal layer (silver, ~30 nm), with arrows labeling the layer thickness
>
> Bottom of left half: hero stat panel with orange `#E85D26` background, white text:
> - Small caps tag: BARRIER MECHANISM
> - Big text (Bebas Neue, ~60 pt): **Metallic Reflection**
> - Subtext: *blocks oxygen, moisture, AND light*
>
> **CENTRE separator:** thin orange `#E85D26` vertical line with **vs** symbol in a small circle at mid-height.
>
> **RIGHT HALF — AlOx PET (teal-themed):**
>
> Top: small navy tag chip — **PROCESS B**. Below: large label: **AlOx PET (Aluminium Oxide)**.
>
> Visual diagram below — IDENTICAL chamber outline as left, with these differences:
> 1. **Same vacuum chamber, same boat** (orange glow at 1500°C)
> 2. **Aluminium wire feed** entering from above (same as left)
> 3. **Oxygen gas inlet** entering from the side, shown as small teal `#0D8C7E` arrows feeding into the chamber
> 4. **Vapor cloud** above the boat — shown as a chemical reaction zone with both Al and O₂ molecules combining (small molecule symbols), labeled "Al + O₂ → Al₂O₃"
> 5. **Ceramic layer condensing on film** — shown as a thin TRANSPARENT band underneath the moving PET (use a glassy/translucent fill)
> 6. Below: cross-section bubble — PET base (clear) + Al₂O₃ ceramic layer (transparent with a subtle teal tint, ~30 nm)
>
> Bottom of right half: hero stat panel with navy `#1A2744` background, teal `#0D8C7E` text accents:
> - Small caps tag: BARRIER MECHANISM
> - Big text (white, same size as left): **Ceramic Tortuous Path**
> - Subtext (teal): *blocks oxygen and moisture, lets light through*
>
> **Bottom callout strip (8% of height):**
> Navy `#1A2744` background. Two-column split:
> - LEFT (orange `#E85D26` text, bold): **⚡ The Recyclability Difference:**
> - RIGHT (white text): *Metallised PET in a PE laminate = Multi-Layer Plastic (Cat III). AlOx PET in a mono-PET laminate = recyclable single-polymer (Cat II).*
>
> **Bottom-right corner of the entire image:** place the attached VKS Tech logo at ~80×80 px on a white circle backplate.
>
> **Bottom-left corner:** small grey footer text: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif throughout. Process labels in **semibold**. Hero text (Metallic Reflection / Ceramic Tortuous Path) in heavy condensed font (Bebas Neue, Anton, Oswald) at IDENTICAL point sizes.
>
> **What to AVOID:** clipart, cartoons, photorealistic chamber renders, isometric/3D effects, decorative borders, gradients beyond very subtle box shadows.

### Plan B
If logo missing, composite manually after generation. If the chamber illustration is too cramped, simplify the boat/wire/gas inlet area and emphasise the cross-section bubbles which carry the actual teaching.

### Quality check
- Both halves identical in layout structure (mirror image, not different formats)
- Both processes labeled clearly (Process A / Process B)
- Cross-section bubbles show 30nm scale labels
- Aluminium wire visible in both chambers (it's the SAME source)
- Oxygen inlet visible only on right (the differentiator)
- Hero stat text at same point size on both sides
- Logo at bottom-right
- "Al + O₂ → Al₂O₃" formula visible on right side

---

## IMAGE 2B — Process Difference (Hindi) (`process-difference-hi.png`)

**Save as:** `process-difference-hi.png` · **Dimensions:** 1600×900 px (16:9)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a flat-vector editorial infographic with EXACTLY the same layout, colour palette, and structure as the English Process Difference infographic. Process names (Metallised PET, AlOx PET, Aluminium Oxide), formulas (Al + O₂ → Al₂O₃), and technical labels (vacuum chamber, tungsten boat, vapor cloud) stay in English because they're shop-floor convention. Numbers stay in English numerals.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow strip (orange `#E85D26`, English): **THE SAME METALLISER, TWO CHEMISTRIES**
> - Title (Hindi, navy bold, large): **एक Vacuum Chamber. दो Films. एक बड़ा Difference.**
> - Subtitle (Hindi, grey): *Aluminium vapor → silver metal layer। Aluminium + oxygen vapor → transparent ceramic। Same machine, different barrier strategy।*
>
> **Left half (Metallised PET):** identical layout to Image 2A — Process A tag, all chamber illustration elements in English, cross-section bubble in English. Hero stat panel:
> - BARRIER MECHANISM (English)
> - Hero text (English): **Metallic Reflection**
> - Subtext (Hindi): *oxygen, moisture, और light block करता है*
>
> **Right half (AlOx PET):** identical layout — all chamber illustration in English. Hero stat panel:
> - BARRIER MECHANISM (English)
> - Hero text (English): **Ceramic Tortuous Path**
> - Subtext (Hindi, teal): *oxygen और moisture block करता है, light pass होने देता है*
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ Recyclability का Difference:**
> - RIGHT (white text, Hindi): *PE laminate में Metallised PET = Multi-Layer Plastic (Cat III)। Mono-PET laminate में AlOx PET = recyclable single-polymer (Cat II)।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 2A.

### Plan B for Hindi
Use the standard workflow: generate Image 2A first, replace title, subtitle, subtexts, and bottom callout with proper Devanagari text using Hind or Mukta font in Photopea/Canva. Process labels and chamber annotations stay in English.

---

## IMAGE 3A — Decision Matrix (English) (`decision-matrix-en.png`)

**Save as:** `decision-matrix-en.png` · **Dimensions:** 1600×900 px (16:9)
**Goal:** The visual every brand owner shows their board. Side-by-side comparison across all 4 lenses (barrier, recyclability, capacity, cost) with clear winners at each lens.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a clean flat-vector editorial comparison infographic. NOT photorealistic. NOT 3D. *Bloomberg Markets* / *Financial Times* comparison-graphic aesthetic.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 10%):**
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **THE 4-LENS DECISION**
> - Title (navy `#1A2744`, large bold sans-serif): **AlOx vs Metallised PET — Decision Matrix**
> - Subtitle (grey `#5A5A5A`, regular): *Same plant. Same crew. Two different answers depending on what your brand needs.*
>
> **Main visual zone (middle 78%) — TWO LARGE COLUMNS side by side:**
>
> **LEFT COLUMN — Metallised PET (orange-themed):**
>
> Top: navy tag chip — PRODUCT A. Below: large label (navy bold): **Metallised PET**. Subtitle (grey small): *opaque silver, MLP structure*.
>
> Mid-column: 4 horizontal "lens" rows, each representing one decision lens. Each row has the lens name on the left, an icon, and a stat on the right:
>
> | Lens | Stat for Met PET |
> |---|---|
> | 🔬 BARRIER | OTR &lt;1 · WVTR &lt;1 · 0% light |
> | ♻️ RECYCLABILITY | Category III MLP |
> | ⚙️ PLANT CAPACITY | 32.17 MT/day |
> | 💰 TOTAL COST/kg | ₹15.59 conv + ₹17.50 EPR |
>
> Bottom of column: hero panel with orange `#E85D26` background, white text:
> - Small caps tag: BEST FOR
> - Big text (Bebas Neue, ~50 pt): **Light-Sensitive Products**
> - Subtext: *vitamins, oils, premium silver-aesthetic packs*
>
> **CENTRE separator:** thin orange `#E85D26` vertical line with **vs** in a circle at mid-height.
>
> **RIGHT COLUMN — AlOx PET (teal-themed):**
>
> Top: navy tag chip — PRODUCT B. Below: **AlOx PET**. Subtitle: *transparent ceramic, mono-PET structure*.
>
> Mid-column: same 4 lens rows:
>
> | Lens | Stat for AlOx |
> |---|---|
> | 🔬 BARRIER | OTR ~1 · WVTR ~1 · 90% light |
> | ♻️ RECYCLABILITY | Category II Flexible |
> | ⚙️ PLANT CAPACITY | 12.11 MT/day |
> | 💰 TOTAL COST/kg | ₹46.77 conv + ₹4 EPR |
>
> Bottom of column: hero panel with navy `#1A2744` background, teal `#0D8C7E` accent:
> - Small caps tag: BEST FOR
> - Big text (white, same size): **Recyclable Premium Packs**
> - Subtext (teal): *snacks, dry foods, microwaveable, EU/US export*
>
> **Below both columns — DELTA STRIP (full width):**
> Orange `#E85D26` rounded rectangle, white text centred. Three stat callouts in a row separated by orange dividers:
> - LEFT: tag CAPACITY · big number **−62%** · sub: same machine
> - MIDDLE: tag EPR LIABILITY · big number **−4.4×** · sub: Cat III → Cat II
> - RIGHT: tag CONVERSION · big number **+3×** · sub: per kg
>
> **Bottom callout strip (8%):**
> Navy `#1A2744` background. Two-column split:
> - LEFT (orange bold): **⚡ The Honest Trade-off:**
> - RIGHT (white): *AlOx is a strategic move, not a cost-saving move. Higher line cost, lower regulatory risk, brand premium upside. Match the lens that matters most to your business.*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey footer: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif. Big numbers (32.17, 12.11, −62%, −4.4×, +3×) in Bebas Neue or Anton. Both column hero panels use IDENTICAL big-number sizes.
>
> **What to AVOID:** clipart, cartoons, photorealism, isometric/3D effects, decorative borders, drop shadows beyond very subtle, rainbow colours.

### Plan B
If logo missing, composite manually. If the lens-row table is too dense, drop the icons and keep the lens name + stat as a clean two-line block per row.

### Quality check
- Two columns clearly comparable in layout
- All 4 lenses present in both columns with matching ordering
- All numbers correct: 32.17, 12.11, ₹15.59, ₹46.77, ₹17.50, ₹4
- Both BEST FOR hero text at same point size
- Delta strip shows −62%, −4.4×, +3×
- Logo at bottom-right
- No "Alubond" anywhere — must say AlOx

---

## IMAGE 3B — Decision Matrix (Hindi) (`decision-matrix-hi.png`)

**Save as:** `decision-matrix-hi.png` · **Dimensions:** 1600×900 px (16:9)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a flat-vector editorial comparison infographic with EXACTLY the same layout as the English Decision Matrix. Numbers, EPR category names, and stats stay in English. Only title, subtitle, lens labels (where appropriate), BEST FOR subtexts, delta strip subtexts, and bottom callout translate to Hindi.
>
> Use Hind or Mukta Devanagari for all Hindi text.
>
> **Header:**
> - Eyebrow (orange, English): **THE 4-LENS DECISION**
> - Title (Hindi, navy bold): **AlOx vs Metallised PET — Decision Matrix**
> - Subtitle (Hindi, grey): *Same plant। Same crew। Brand को क्या चाहिए, उस हिसाब से दो अलग answers।*
>
> **LEFT COLUMN — Metallised PET:**
> - Tag PRODUCT A
> - Label: Metallised PET (English)
> - Subtitle (Hindi): *opaque silver, MLP structure*
> - 4 lens rows — lens names in English, stats in English (OTR <1 · WVTR <1 · 0% light, Category III MLP, 32.17 MT/day, ₹15.59 conv + ₹17.50 EPR)
> - Hero panel:
>   - BEST FOR (English tag)
>   - Big text (English): Light-Sensitive Products
>   - Subtext (Hindi): *vitamins, oils, premium silver-aesthetic packs*
>
> **Centre separator:** thin orange line with vs in circle.
>
> **RIGHT COLUMN — AlOx PET:**
> - Tag PRODUCT B
> - Label: AlOx PET (English)
> - Subtitle (Hindi): *transparent ceramic, mono-PET structure*
> - 4 lens rows — same English stats
> - Hero panel:
>   - BEST FOR (English tag)
>   - Big text (English): Recyclable Premium Packs
>   - Subtext (Hindi, teal): *snacks, dry foods, microwaveable, EU/US export*
>
> **Delta strip:** same English big numbers (−62%, −4.4×, +3×). Tags in English (CAPACITY, EPR LIABILITY, CONVERSION). Sub-text translation:
> - −62% sub (Hindi): *same machine*
> - −4.4× sub (Hindi): *Cat III → Cat II*
> - +3× sub (Hindi): *per kg*
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ Honest Trade-off:**
> - RIGHT (white): *AlOx strategic move है, cost-saving नहीं। Higher line cost, lower regulatory risk, brand premium upside। जो lens आपके business के लिए सबसे ज़्यादा matter करता है उसके साथ match करें।*
>
> Logo bottom-right, Hindi grey footer bottom-left.

### Plan B for Hindi
Generate 3A first; replace Hindi text in Photopea/Canva using Hind or Mukta. Numbers, lens names, and EPR categories stay in English in both versions.

---

## REVIEW — How to Judge Each Image (8-Point Check)

### 1. Brand colour discipline
✅ Pass: only Navy `#1A2744`, Orange `#E85D26`, Teal `#0D8C7E`, Cream `#FAF9F6`, white, grey
❌ Fail: any blue, green outside teal, yellow, red other than orange

### 2. Typography quality
✅ Pass: clean sans-serif (Inter/Söhne/Helvetica), big numbers in heavy condensed font
❌ Fail: serif fonts in body, decorative/handwritten fonts, cramped numbers, overlapping text

### 3. Number accuracy (HARD requirement)
**Image 1 (Cover):** −62%, 4.4×, 3× must all appear as stated.
**Image 2A/2B (Process):** "Al + O₂ → Al₂O₃" formula on AlOx side; ~30 nm cross-section labels on both.
**Image 3A/3B (Decision Matrix):**
- Met PET column: 32.17 MT/day, ₹15.59 conv, ₹17.50 EPR
- AlOx column: 12.11 MT/day, ₹46.77 conv, ₹4 EPR
- Delta: −62%, −4.4×, +3×

### 4. Material name discipline
✅ Pass: **AlOx** or **AlOx PET (Aluminium Oxide)**
❌ Fail: "Alubond", "AluOx", "Alu-Ox" with hyphen

### 5. Hero panel parity
For Image 3A/3B: "Light-Sensitive Products" and "Recyclable Premium Packs" hero text MUST be at the same point size. Different sizes would visually bias the comparison.

### 6. Logo placement
✅ Pass: VKS Tech logo at bottom-right, ~80–110 px, on white backplate
❌ Fail: logo missing, distorted, embedded in artwork

### 7. Information density
✅ Pass: cover reads as "AlOx vs Met PET, three big penalties" in 5 seconds; decision matrix reads as "two products, four lenses, clear winners" in 5 seconds
❌ Fail: too dense to read at glance / too sparse to study

### 8. No AI-tells
❌ Avoid: identifiable faces, distorted hands, garbled small text, AI watermarks, plastic surfaces

---

## TROUBLESHOOTING

- **Numbers come out wrong:** Always overlay correct numbers in an editor afterward. AI image models are unreliable with numerics.
- **Hindi renders as gibberish:** Generate EN version first, replace text in Photopea/Canva using Hind or Mukta.
- **Decorative clutter:** Add: *"STRICTLY no decorative elements, no clipart, no flourishes. WSJ / Bloomberg / HBR editorial style ONLY."*
- **Logo gets ignored:** Composite manually after generation.
- **Two-column comparison cramped:** Reduce stat row count visual weight; emphasise hero text.

## Folder structure when complete

```
31-alox-vs-metallised-pet-epr-2026/
├── index.html
├── logo.png                         (already provided)
├── cover.png                        (Image 1)
├── process-difference-en.png        (Image 2A)
├── process-difference-hi.png        (Image 2B)
├── decision-matrix-en.png           (Image 3A)
├── decision-matrix-hi.png           (Image 3B)
├── GEMINI-PROMPTS.md                (this file)
└── GEMINI-PROMPTS.html              (interactive page with copy buttons)
```
