# GEMINI IMAGE PROMPTS — Blog 32: Why Polyethylene Saves Food

## What's new in this version

Two improvements over earlier prompts:

1. **Dimensions are now INSIDE the prompt body** (not just metadata above it). When you copy a prompt to Gemini, the `IMAGE SPEC:` line travels with the copy — Gemini will respect the 1600×900 widescreen format. Earlier prompts kept dimensions only in the markdown header, which got lost on copy-paste.
2. **The cover is redesigned for shock value.** Instead of the calm wrapped-vs-unwrapped cucumber comparison, the cover now visualises the 167:1 leverage as a massive truck of rotting food next to a tiny film roll. The size disparity makes the central insight visible in 0.5 seconds.

## Quick Reference

**5 images required** — 1 shock cover + 2 bilingual leverage diagrams + 2 bilingual India-numbers infographics

| # | Filename | Aspect | What it shows |
|---|---|---|---|
| 1 | `cover.png` | 16:9 | **SHOCK COVER** — truck of rotting food vs tiny film roll (167:1 visualised) |
| 2A | `the-leverage-en.png` | 16:9 | The 167:1 leverage diagram (English) |
| 2B | `the-leverage-hi.png` | 16:9 | Same as 2A in Hindi |
| 3A | `india-numbers-en.png` | 16:9 | India scale infographic — 74 MT food waste, ₹1.5 Lakh Cr (English) |
| 3B | `india-numbers-hi.png` | 16:9 | Same as 3A in Hindi |

## How to use

1. Open Google Gemini, AI Studio, or any image-gen tool that accepts reference images
2. For EACH prompt, **attach `logo.png` to that specific prompt**
3. Copy the prompt body (everything inside the prompt block), paste, generate
4. Save with the **exact filename** shown
5. Place all 5 images alongside `index.html` before publishing

## Brand standards

| Color | Hex | Use |
|---|---|---|
| Navy | `#1A2744` | Headings, dark panels, primary text |
| Orange | `#E85D26` | Accents, hero numbers, callouts |
| Teal | `#0D8C7E` | Secondary, "saved" / positive numbers |
| Cream | `#FAF9F6` | Backgrounds |
| Grey | `#5A5A5A` | Subtitles, captions |

**Rules:** No other colors. No identifiable faces. No clipart. WSJ / Bloomberg / HBR editorial style only.
**Fonts:** Inter, Söhne, Helvetica Neue (Latin); Hind, Mukta (Devanagari). Big numbers in Bebas Neue, Anton, or Oswald.
**Critical numbers:** **167:1 leverage** · **1.8 GT plastic CO2** · **3.3 GT food waste CO2** · **74 MT India food loss** · **₹1.5 Lakh Cr** annual loss · **2 days vs 14 days** cucumber shelf life.

---

## IMAGE 1 — SHOCK Cover (`cover.png`)

**Save as:** `cover.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** Stop the reader scrolling. Make the 167:1 ratio physically visible. The viewer should feel "wait, what?" before reading a word.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. The output must be widescreen landscape. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized for fast loading (target file size 400-700 KB). No JPEG artifacts, no blur, no fuzzy edges on text.
>
> Create an editorial magazine-cover image for a flexible-packaging industry blog post titled "Why Polyethylene Saves Food." This cover must be visually shocking — the kind of image that stops you scrolling because the size disparity in the visual makes you feel something before you read anything.
>
> **Composition** — left two-thirds is the SHOCK visual contrast, right one-third is a hero text panel.
>
> **LEFT TWO-THIRDS — the shock visual:**
>
> A horizontal stage on a clean cream `#FAF9F6` background with subtle paper-grain texture. Two objects placed side by side, dramatically different in size to visualise 167:1 mass leverage:
>
> - **LEFT OBJECT — A massively oversized commercial Indian cargo truck (Tata-style lorry) overflowing with rotting fruits and vegetables.** The truck dominates roughly 50% of the left zone. The cargo bed is heaped with visibly rotting tomatoes, browning cucumbers, mushy mangoes, wilted leafy greens — produce in obvious decay (greys and dull browns rather than bright fresh colours, with subtle suggestion of mold patches). Some produce spilling off the back of the truck onto the ground. The truck rendered in flat-vector editorial style — NOT photorealistic, NOT 3D. Use muted earth tones for the rotting cargo (greys, browns, sickly yellows — NO appetizing colours). Truck body in a desaturated navy blue. Tiny label below the truck in small navy caps: **167 KG OF FOOD WASTED**
>
> - **CENTER — A tall, thin orange `#E85D26` vertical divider line, running floor-to-ceiling of the visual stage. At its midpoint, a clean orange filled circle containing the symbol "vs" in white bold text.**
>
> - **RIGHT OBJECT — A single tiny roll of clear polyethylene film, standing upright on the cream stage.** This roll should be visually small — perhaps one-twelfth the height of the truck — almost dwarfed. Rendered as a simple flat-vector translucent cylinder with a clean cut edge. Tiny label below in small orange caps: **1 KG OF FILM**
>
> Above the entire shock visual, a single line of text in tiny navy caps centred: **THE RATIO THAT SHOULD SHOCK YOU**
>
> Below the visual (under the labels), a single bold sentence in navy `#1A2744`: **One gram of polyethylene prevents 167 grams of food waste.**
>
> The visual contrast — massive truck of waste vs tiny roll of solution — must be the FIRST thing the eye registers. The size disparity should feel almost cartoonishly extreme, because that's what 167:1 actually looks like.
>
> **RIGHT ONE-THIRD — navy `#1A2744` editorial panel with subtle paper-grain texture:**
>
> - Top eyebrow strip in orange `#E85D26`, all caps, small letterspacing: **vksTech.com / A PERSONAL RECKONING**
> - Main title in white Inter Bold or Söhne Bold (3 lines, large): **Why Polyethylene Saves Food**
> - Subtitle line in grey `#FAF9F6` opacity 0.8: *I used to hate plastic.*
> - Smaller italic line: *Then I joined the industry that saves food.*
> - HORIZONTAL DIVIDER (orange `#E85D26`, 2 px thin)
> - HERO STAT BLOCK — three numbers stacked vertically:
>   - **167:1** in bright orange `#E85D26` (Bebas Neue, ~120 pt), label below in tiny grey caps: GRAMS FOOD SAVED PER GRAM FILM
>   - **3.3 GT** in white (~70 pt), label below in tiny orange caps: GLOBAL FOOD WASTE CO2 (NEARLY 2× ALL PLASTIC)
>   - **74 MT** in teal `#0D8C7E` (~70 pt), label below in tiny orange caps: INDIA'S ANNUAL FOOD LOSS
> - Bottom strip: small text — **Vivek Kumar | M.Tech NIT Uttarakhand | 9+ Years Flexible Packaging**
> - In the bottom-right corner of this panel, place the attached VKS Tech logo at ~100×100 px on a thin white round backplate
>
> **Mood:** intellectually honest, calmly confronting a public misconception with shocking imagery. NOT a pro-plastic ad. NOT an anti-plastic exposé. Reads like an *Atlantic* or *Wired* feature header where the cover image makes the headline land harder.
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No red except orange. No green outside teal. No yellow.

### Plan B
If logo is not embedded, generate without and composite manually in Canva/Photopea — place `logo.png` at bottom-right at ~100×100 px on a white round backplate. If the truck illustration looks weak, simplify to a tipper-style flatbed with overflowing dark blobs (suggesting waste mass without specific produce). The size disparity carries the shock, not the food detail.

---

## IMAGE 2A — The Leverage Diagram (English) (`the-leverage-en.png`)

**Save as:** `the-leverage-en.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** Visualise the 167:1 leverage in a single diagram so striking that anyone who sees it understands the entire blog without reading it.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized for fast loading (target file size 300-600 KB). No JPEG artifacts, no blur on text.
>
> Create a clean flat-vector editorial infographic. NOT photorealistic. NOT 3D. Pure flat vector with crisp typography. *The Economist* / *Harvard Business Review* methodology-diagram style.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 12%):**
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **THE NUMBER THAT CHANGED MY MIND**
> - Title (navy `#1A2744`, large bold sans-serif): **One Gram of Film, Saves One Hundred Grams of Food**
> - Subtitle (grey `#5A5A5A`, regular weight): *The leverage ratio of polyethylene packaging on perishable food. Source: Dhall et al., 2012, peer-reviewed shelf-life study (J Food Sci Technol).*
>
> **Main visual zone (middle 70%) — three columns horizontally arranged with two large arrows between them:**
>
> **COLUMN 1 — INPUT (left third, orange-themed):**
> - Top tag (small navy caps): THE INPUT
> - Visual: a small flat-vector illustration of a single cucumber wrapped in clear film, sized at maybe 30% of column width. Underneath the cucumber, a small ruler-style indicator showing "1.5 g film".
> - Below the visual: a small orange `#E85D26` rounded rectangle with white text:
>   - Tag: PACKAGING
>   - Big number (Bebas Neue, ~80 pt): **1.5 g**
>   - Subtext: of polyethylene shrink film
>
> **CENTER ARROW (between Col 1 and Col 2):** large orange `#E85D26` rightward arrow with small text above: "wraps and protects →"
>
> **COLUMN 2 — OUTPUT (middle third, teal-themed):**
> - Top tag (small navy caps): THE OUTPUT
> - Visual: a small flat-vector illustration of a fresh, vibrant cucumber (much larger than the wrapped one in Col 1, to imply the food-to-packaging mass disparity). Underneath, ruler-style indicator showing "250 g cucumber".
> - Below the visual: a small teal `#0D8C7E` rounded rectangle with white text:
>   - Tag: FOOD SAVED FROM SPOILAGE
>   - Big number (Bebas Neue, ~80 pt): **250 g**
>   - Subtext: cucumber kept fresh from Day 2 to Day 14
>
> **CENTER ARROW (between Col 2 and Col 3):** large orange `#E85D26` rightward arrow with small text above: "= leverage of →"
>
> **COLUMN 3 — LEVERAGE (right third, navy-themed hero panel):**
> - Top tag (small orange caps): THE LEVERAGE RATIO
> - HERO BIG NUMBER (Bebas Neue or Anton, very large, ~180 pt, white on navy `#1A2744` background): **167:1**
> - Subtext (orange italic, smaller): grams food saved per gram of film
>
> **Bottom callout strip (full-width, 8% of height):**
> Navy `#1A2744` background. Two-column split:
> - LEFT (orange `#E85D26` text, bold): **⚡ The CO2 leverage:**
> - RIGHT (white text): *Plastic CO2 cost: 4.5 g per cucumber. Food-waste CO2 avoided: 125 g per cucumber. Net CO2 saved per cucumber wrap: 120 g. CO2 leverage: 27×.*
>
> **Bottom-right corner of the entire image:** place the attached VKS Tech logo at ~80×80 px on a white circle backplate.
>
> **Bottom-left corner:** small grey footer text: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif throughout. Column tag chips in semibold caps. Hero number (167:1) in heavy condensed font (Bebas Neue, Anton, Oswald) — must dominate the right column visually.
>
> **What to AVOID:** clipart, cartoons, hand-drawn elements, photorealism, isometric/3D effects, decorative borders, gradients beyond very subtle box shadows. The cucumber illustrations should be flat vector, not photographic.

### Plan B
If logo missing, composite manually after generation. If the cucumber illustrations look weak, simplify to symbolic shapes (an oval for the cucumber, a translucent rectangle for the film) — the numbers carry the story.

---

## IMAGE 2B — The Leverage Diagram (Hindi) (`the-leverage-hi.png`)

**Save as:** `the-leverage-hi.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 300-600 KB). No blur on Devanagari text.
>
> Create a flat-vector editorial infographic with EXACTLY the same layout, colour palette, and structure as the English Leverage Diagram. Numbers (1.5g, 250g, 167:1, 4.5g, 125g, 120g, 27×), source attribution (Dhall et al., 2012, J Food Sci Technol), and column tags (THE INPUT, THE OUTPUT, THE LEVERAGE RATIO) stay in English. Only title, subtitle, column subtexts, arrows-text, and bottom callout translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow strip (orange `#E85D26`, English): THE NUMBER THAT CHANGED MY MIND
> - Title (Hindi, navy bold, large): **एक Gram Film, सौ Grams Food बचाता है**
> - Subtitle (Hindi, grey): *Perishable food पर polyethylene packaging का leverage ratio। Source: Dhall et al., 2012, peer-reviewed shelf-life study (J Food Sci Technol)।*
>
> **Column 1 — INPUT (orange-themed):** identical layout with English tags. Cucumber visual + "1.5 g film" indicator. Subtext under big number: *of polyethylene shrink film*. Hindi mini-caption below: "एक खीरे के around"
>
> **Column 2 — OUTPUT (teal-themed):** identical layout. Cucumber visual + "250 g cucumber" indicator. Subtext under big number: *cucumber Day 2 से Day 14 तक fresh रहा*
>
> **Column 3 — LEVERAGE (navy hero):** big number **167:1**. Subtext (orange italic): *grams food saved per gram of film*
>
> **Arrows-text:** "wraps and protects →" and "= leverage of →" can stay in English (universal).
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ CO2 leverage:**
> - RIGHT (white text, Hindi): *Plastic CO2 cost: 4.5 g per cucumber। Food-waste CO2 avoided: 125 g per cucumber। हर cucumber wrap पर net CO2 saved: 120 g। CO2 leverage: 27×।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 2A.

### Plan B for Hindi
Generate Image 2A first, then in Photopea/Canva replace title, subtitle, subtexts, and bottom callout with proper Devanagari text using Hind or Mukta font. Numbers, column tags, and source citation stay in English.

---

## IMAGE 3A — India Numbers Infographic (English) (`india-numbers-en.png`)

**Save as:** `india-numbers-en.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** The India-scale data visualisation. 74 MT food loss, ₹1.5 lakh crore, percentage breakdown, and where flexible packaging fits as the lever.

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
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **THE INDIA SCALE — POST-HARVEST FOOD LOSS**
> - Title (navy `#1A2744`, large bold sans-serif): **74 Million Tonnes a Year. ₹1.5 Lakh Crore Lost.**
> - Subtitle (grey `#5A5A5A`, regular): *India's annual post-harvest food loss, by category. Source: ICAR FY 2022-23, NABCONS 2020-2022 study.*
>
> **Main visual zone (middle 78%) — TWO PANELS side by side, 60/40 split:**
>
> **LEFT PANEL (60% width) — Loss by Category (horizontal bar chart):**
>
> Title above the chart (navy bold, small): WHAT INDIA LOSES, BY CATEGORY (% of category production)
>
> Four horizontal bars, sorted descending. Each bar a bold orange `#E85D26` rectangle with navy outline and proportional length (longest = 22%):
>
> 1. **Livestock produce** (eggs, fish, meat) — bar to 22% — label: 22%
> 2. **Fruits** — bar to 19% — label: 19%
> 3. **Vegetables** — bar to 18% — label: 18%
> 4. **Foodgrains** — bar to ~7% (smallest visible bar) — label: 6-8%
>
> Below chart, small grey italic: *Highest CO2 categories (livestock, fruits) suffer disproportionate losses. Cold chain + packaging gap is the primary cause.*
>
> **RIGHT PANEL (40% width) — Three big stat tiles stacked vertically:**
>
> Each tile a navy `#1A2744` rounded rectangle with orange/white text. Three tiles stacked vertically with small gaps:
>
> Tile 1 (orange-tinted top stripe):
> - Top label (orange small caps): TOTAL FOOD LOST
> - Big number (Bebas Neue, ~80 pt, white): **74 MT**
> - Subtext (grey): per year, post-harvest stages
>
> Tile 2 (orange-tinted top stripe):
> - Top label: ECONOMIC VALUE LOST
> - Big number: **₹1.5 Lakh Cr**
> - Subtext: USD 17.7 billion equivalent
>
> Tile 3 (orange-tinted top stripe):
> - Top label: UNDERNOURISHED
> - Big number: **190 M**
> - Subtext: Indians who would benefit if losses fell
>
> **Below both panels — DELTA STRIP (full width):**
> Orange `#E85D26` rounded rectangle, white text centred:
> - Small caps tag: THE LEVER
> - Heading: **Better packaging is the cheapest, fastest tool we have**
> - Subtext italic: *Cold chain takes decades. Logistics reform takes decades. Better flexible packaging is deployable in months.*
>
> **Bottom callout strip (8%):**
> Navy `#1A2744` background. Two-column split:
> - LEFT (orange bold): **⚡ Sources:**
> - RIGHT (white text, small): *ICAR FY 2022-23 post-harvest loss study. NABCONS post-harvest loss study 2020-2022 (USD 17,703 million equivalent). Undernourishment figure: FAO State of Food Security 2024.*
>
> **Bottom-right corner:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey footer: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif. Big numbers in Bebas Neue or Anton. All three big stat tiles use IDENTICAL big-number sizes.
>
> **What to AVOID:** clipart, cartoons, photorealism, 3D, decorative borders, drop shadows beyond very subtle, rainbow colours.

### Plan B
If bar chart proportions look wrong, simplify to four equally-sized bars with the percentage as the only differentiator.

---

## IMAGE 3B — India Numbers Infographic (Hindi) (`india-numbers-hi.png`)

**Save as:** `india-numbers-hi.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges. Output as PNG, web-optimized (target file size 300-600 KB). No blur on Devanagari text.
>
> Create a flat-vector editorial data infographic with EXACTLY the same layout as the English India Numbers Infographic. Numbers, percentages, and units (MT / Lakh Cr / M) stay in English. Only title, subtitle, chart title, tile titles (where appropriate), delta strip subtext, and bottom callout translate to Hindi. Source citations stay in English.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow (orange, English): THE INDIA SCALE — POST-HARVEST FOOD LOSS
> - Title (Hindi, navy bold): **साल में 74 Million Tonnes। ₹1.5 Lakh Crore खोए।**
> - Subtitle (Hindi, grey): *India का annual post-harvest food loss, category के हिसाब से। Source: ICAR FY 2022-23, NABCONS 2020-2022 study।*
>
> **Left panel — Bar chart (60% width):**
> - Chart title (Hindi, navy bold, small): **India क्या खोता है, Category के हिसाब से** (% of category production)
> - Bars (English category names + percentages): Livestock produce 22%, Fruits 19%, Vegetables 18%, Foodgrains 6-8%
> - Below chart (Hindi small grey italic): *Highest CO2 categories (livestock, fruits) disproportionate losses suffer करते हैं। Cold chain + packaging gap primary cause है।*
>
> **Right panel — Three stat tiles:**
>
> Tile 1: Top label (English): TOTAL FOOD LOST · Big number: 74 MT · Subtext (Hindi grey): प्रति साल, post-harvest stages
>
> Tile 2: Top label (English): ECONOMIC VALUE LOST · Big number: ₹1.5 Lakh Cr · Subtext (Hindi grey): USD 17.7 billion equivalent
>
> Tile 3: Top label (English): UNDERNOURISHED · Big number: 190 M · Subtext (Hindi grey): Indians जिन्हें losses कम होने का benefit मिलता
>
> **Delta strip (orange bg, white text):**
> - Tag (English): THE LEVER
> - Heading (Hindi): **Better packaging सबसे सस्ता, सबसे तेज़ tool है**
> - Subtext italic (Hindi): *Cold chain decades लेता है। Logistics reform decades लेती है। Better flexible packaging months में deployable है।*
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ Sources:**
> - RIGHT (white text, English with Hindi connectors): *ICAR FY 2022-23 post-harvest loss study। NABCONS post-harvest loss study 2020-2022 (USD 17,703 million equivalent)। Undernourishment figure: FAO State of Food Security 2024।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 3A.

### Plan B for Hindi
Generate 3A first; replace Hindi text in Photopea/Canva using Hind or Mukta. Numbers, category names, source citations stay in English.

---

## REVIEW — 8-Point Check Before Publishing

### 1. Brand colour discipline
✅ Pass: only Navy `#1A2744`, Orange `#E85D26`, Teal `#0D8C7E`, Cream `#FAF9F6`, white, grey
❌ Fail: any blue, green outside teal, yellow, red other than orange

### 2. Typography quality
✅ Pass: clean sans-serif (Inter/Söhne), big numbers in heavy condensed (Bebas/Anton)
❌ Fail: serif fonts in body, decorative fonts, cramped numbers

### 3. Number accuracy (HARD)
**Image 1 (Cover):** "167 KG" truck label, "1 KG" film roll label, 167:1 / 3.3 GT / 74 MT in right panel.
**Image 2A/2B (Leverage):** 1.5g film, 250g cucumber, 167:1 leverage, 4.5g/125g/120g/27× in CO2 callout.
**Image 3A/3B (India):** 74 MT, ₹1.5 Lakh Cr (USD 17.7B), 190 M, bars 22%/19%/18%/6-8%.

### 4. Source attribution
✅ Pass: Dhall et al. + J Food Sci Technol visible in 2A/2B subtitle. ICAR/NABCONS visible in 3A/3B subtitle and footer.

### 5. Image format and file size
✅ Pass: each image is 1600×900 px widescreen, PNG, 300-700 KB.
❌ Fail: square crops, vertical crops, files >1 MB, JPEG format.

### 6. Logo placement
✅ Pass: VKS Tech logo at bottom-right, ~80–110 px, white backplate
❌ Fail: logo missing, distorted, embedded in artwork

### 7. Information density
✅ Pass: cover reads as "huge truck of waste vs tiny film roll" in 0.5 sec; leverage diagram reads in 5 sec; India infographic in 3 sec
❌ Fail: too dense to read at glance / too sparse to study

### 8. No AI-tells
❌ Avoid: identifiable faces, distorted hands, garbled small text, AI watermarks, fake-looking plastic surfaces

---

## TROUBLESHOOTING

- **Image comes out as a square (1:1):** Re-paste the prompt and re-emphasize the IMAGE SPEC line. Some Gemini models honour aspect ratio better when the spec is at the top; others ignore it. Last resort: generate at any size and crop manually in any image editor to 1600×900.
- **Numbers come out wrong:** Always overlay correct numbers in an editor afterward. AI image models are unreliable with numerics.
- **Truck illustration looks bad on cover:** Replace with a tipper-style flatbed and overflowing dark blobs (suggesting waste mass without specific produce). The size disparity carries the shock.
- **Hindi renders as gibberish:** Generate EN version first, replace text in Photopea/Canva using Hind or Mukta font.
- **Decorative clutter (sparkles, hearts, confetti):** Add: *"STRICTLY no decorative elements, no clipart, no flourishes."*
- **Logo gets ignored:** Composite manually after generation.

## Folder Structure When Complete

```
32-why-polyethylene-saves-food/
├── index.html
├── logo.png                       (already provided)
├── cover.png                      (Image 1 — SHOCK COVER)
├── the-leverage-en.png            (Image 2A)
├── the-leverage-hi.png            (Image 2B)
├── india-numbers-en.png           (Image 3A)
├── india-numbers-hi.png           (Image 3B)
├── GEMINI-PROMPTS.md              (this file)
└── GEMINI-PROMPTS.html            (interactive page with copy buttons)
```
