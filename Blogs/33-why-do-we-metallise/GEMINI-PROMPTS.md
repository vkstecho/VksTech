# GEMINI IMAGE PROMPTS — Blog 33: Why Do We Metallise?

## Quick Reference

**5 images required** — 1 cover + 2 bilingual evolution timeline + 2 bilingual barrier comparison

| # | Filename | Aspect | What it shows |
|---|---|---|---|
| 1 | `cover.png` | 16:9 | Cover — 5 packaging eras (clay pot → glass jar → tin can → foil → metallised film) |
| 2A | `evolution-timeline-en.png` | 16:9 | The 5,000-year packaging evolution diagram (English) |
| 2B | `evolution-timeline-hi.png` | 16:9 | Same as 2A in Hindi |
| 3A | `barrier-comparison-en.png` | 16:9 | OTR/WVTR comparison: bare PET vs metallised PET vs foil (English) |
| 3B | `barrier-comparison-hi.png` | 16:9 | Same as 3A in Hindi |

## How to use

1. Open Google Gemini, AI Studio, or any image-gen tool that accepts reference images
2. For EACH prompt, **attach `logo.png` to that specific prompt** (Gemini doesn't reliably retrieve files from earlier turns)
3. Copy the prompt body, paste, generate
4. Save with the **exact filename** shown
5. Place all 5 images alongside `index.html` before publishing

## Brand standards

| Color | Hex | Use |
|---|---|---|
| Navy | `#1A2744` | Headings, dark panels, primary text |
| Orange | `#E85D26` | Accents, hero numbers, callouts |
| Teal | `#0D8C7E` | Secondary, "improvement" / positive numbers |
| Cream | `#FAF9F6` | Backgrounds |
| Grey | `#5A5A5A` | Subtitles, captions |

**Fonts:** Inter, Söhne, Helvetica Neue (Latin); Hind, Mukta (Devanagari). Big numbers in Bebas Neue, Anton, or Oswald.

**Critical numbers:** **225× less aluminium** · **OTR <1, WVTR <1** for metallised PET · **110/40** for bare PET · **24.3 g/m²** foil aluminium · **0.11 g/m²** metallised aluminium · **40 nm** thickness · **200 atoms** thick · **1965** metallisation year · **3000 BCE** earliest packaging.

**Rules:** No identifiable faces, no clipart, no decorative flourishes. WSJ / Bloomberg / HBR editorial style only.

---

## IMAGE 1 — Cover (`cover.png`)

**Save as:** `cover.png` · **Dimensions:** 1600×900 px (16:9)
**Goal:** Show 5,000 years of packaging evolution in a single frame, ending on metallised film with the killer 225× number.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. The output must be widescreen landscape. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized for fast loading (target file size 400-700 KB). No JPEG artifacts, no blur, no fuzzy edges on text.
>
> Create an editorial magazine-cover image for a flexible-packaging industry blog post titled "Why Do We Metallise? From Clay Pots to 12-Micron Foil-Class Films." The image must feel honest, scientific, and visually tell a 5,000-year story in one glance.
>
> **Composition** — left two-thirds is a horizontal evolution band, right one-third is a hero text panel.
>
> **LEFT TWO-THIRDS — five-stage evolution band:**
>
> A horizontal band running left-to-right showing five packaging eras as flat-vector silhouette icons in cream `#FAF9F6` against a subtle paper-grain background. Each icon is the same height, with a small label below in tiny navy caps:
>
> 1. **3000 BCE** — silhouette of an Egyptian-style sealed clay amphora/pot
> 2. **1810** — silhouette of a Mason-style glass jar with cork seal
> 3. **1810** — silhouette of a tin-coated steel can
> 4. **1948** — silhouette of a roll of aluminium foil
> 5. **1965** — silhouette of a flexible metallised film pouch (snack-bag shape)
>
> Between each icon, a thin orange `#E85D26` arrow pointing right with a small year-gap label above (e.g., "+4810 yrs", "+138 yrs", "+17 yrs"). The arrows should get visually shorter from left to right to suggest accelerating innovation.
>
> Below the icon row, a thin orange horizontal timeline with 5 dots aligned to the icons.
>
> **RIGHT ONE-THIRD — navy `#1A2744` editorial panel with subtle paper-grain texture:**
>
> - Top eyebrow strip in orange `#E85D26`, all caps, small letterspacing: **vksTech.com / FLEXIBLE PACKAGING**
> - Main title (white Inter Bold or Söhne Bold, 3-4 lines, large): **Why Do We Metallise?**
> - Subtitle (smaller italic, grey `#FAF9F6` lower opacity): *5,000 years of food preservation, solved in one industrial process.*
> - HORIZONTAL DIVIDER (orange `#E85D26`, 2 px thin)
> - HERO STAT BLOCK — three numbers stacked vertically:
>   - **225×** in bright orange `#E85D26` (Bebas Neue, ~140 pt), label below: LESS ALUMINIUM THAN FOIL
>   - **OTR <1** in white (~80 pt), label below in tiny orange caps: METALLISED PET (vs 110 BARE)
>   - **0.04 μm** in teal `#0D8C7E` (~80 pt), label below in tiny orange caps: ALUMINIUM LAYER (200 ATOMS)
> - Bottom strip: small text — **Vivek Kumar | M.Tech NIT Uttarakhand | 9+ Years Flexible Packaging**
> - In the **bottom-right corner of this panel**, place the attached VKS Tech logo at ~110×110 px on a thin white round backplate
>
> **Mood:** intellectually authoritative, walking the reader through five millennia of engineering history. Reads like a *Wired* or *Quanta* feature header. NOT a product ad. NOT clipart. Editorial-grade illustration with clear hierarchy.
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, teal `#0D8C7E`, cream `#FAF9F6`, white. No red except orange. No green outside teal. No yellow.

### Plan B
If logo is not embedded, generate without and composite manually in Canva/Photopea — place `logo.png` at bottom-right at ~110×110 px on a white round backplate. If silhouettes look unrealistic, replace with simpler geometric icons (circle for jar, rectangle for can, etc.) — the years and the right-side numbers carry the story.

---

## IMAGE 2A — Evolution Timeline (English) (`evolution-timeline-en.png`)

**Save as:** `evolution-timeline-en.png` · **Dimensions:** 1600×900 px (16:9)
**Goal:** A clean editorial timeline showing the 5,000-year packaging journey with each material's defining trade-off.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized for fast loading (target file size 300-600 KB). No JPEG artifacts, no blur on text.
>
> Create a clean flat-vector editorial timeline infographic. NOT photorealistic. NOT 3D. Pure flat vector with crisp typography. Inspired by *The Economist* / *Harvard Business Review* timeline diagrams.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 12%):**
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **5,000 YEARS OF PACKAGING EVOLUTION**
> - Title (navy `#1A2744`, large bold sans-serif): **From Clay Pots to Vacuum Metallisation**
> - Subtitle (grey `#5A5A5A`, regular weight): *Each generation solved the previous generation's biggest problem and created a smaller one.*
>
> **Main visual zone (middle 76%) — horizontal timeline with 7 stations:**
>
> A thin navy `#1A2744` horizontal line runs across the middle. Seven stations marked along it as orange `#E85D26` filled circles. Each station has a label-and-card pair: year above the line, descriptive card below the line.
>
> **Stations from left to right:**
>
> 1. **3000 BCE** — Card: "Sealed clay pots with beeswax (Egypt). First true food storage. *Heavy. Doesn't scale.*"
>
> 2. **1810** — Card: "Glass jar (Appert) wins Napoleon's prize. Perfect barrier. *200-400g, breaks in transit.*"
>
> 3. **1810** — Card: "Tin-coated steel can (Durand, UK). Solved breakage. *100g+ empty, hard to open.*"
>
> 4. **1933** — Card: "Polyethylene synthesised (ICI, accidentally). Cheap and flexible. *Useless against oxygen.*"
>
> 5. **1948** — Card: "Aluminium foil commercialised. Perfect barrier in flexible form. *24.3 g/m² Al, expensive, creases.*"
>
> 6. **1952** — Card: "PET discovered (Whinfield & Dickson). Strong, transparent, dimensionally stable. *Poor barrier alone.*"
>
> 7. **1965** — Card: "**Vacuum metallisation arrives.** 0.11 g/m² Al on PET delivers foil-class barrier. *225× less aluminium. The miracle.*"
>
> The 7th station should be visually emphasized — its circle slightly larger, its card with an orange `#E85D26` border-left or background tint, the text "225× less aluminium" in bold.
>
> Each card has:
> - Year as a navy semibold tag at top
> - One-sentence description in regular grey/navy
> - Trade-off line in italic small grey
>
> Cards alternate above/below the timeline (1, 3, 5, 7 below; 2, 4, 6 above) to spread vertical density.
>
> **Bottom callout strip (full-width, 8% of height):**
> Navy `#1A2744` background. Two-column split:
> - LEFT (orange `#E85D26` text, bold): **⚡ The pattern:**
> - RIGHT (white text): *Each step traded one constraint for another. Vacuum metallisation was the first to solve barrier, weight, AND cost simultaneously — the rare triple.*
>
> **Bottom-right corner of the entire image:** place the attached VKS Tech logo at ~80×80 px on a white circle backplate.
>
> **Bottom-left corner:** small grey footer text: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif throughout. Year tags in semibold caps. The 1965 station card text larger and slightly bolder than the rest.
>
> **What to AVOID:** clipart, cartoons, hand-drawn elements, photorealism, isometric/3D effects, decorative borders, gradients beyond very subtle box shadows.

### Plan B
If timeline visual is too cluttered, simplify to 5 stations instead of 7 (combine 1810 entries; drop polyethylene). The story still reads.

### Quality check
- 7 stations clearly delineated, dates correct (3000 BCE, 1810×2, 1933, 1948, 1952, 1965)
- 1965 station visually emphasized as the climax
- "225× less aluminium" text appears in 1965 card
- Cards alternate above/below the line to manage vertical space
- Bottom callout has "barrier, weight, AND cost simultaneously" message
- Logo at bottom-right

---

## IMAGE 2B — Evolution Timeline (Hindi) (`evolution-timeline-hi.png`)

**Save as:** `evolution-timeline-hi.png` · **Dimensions:** 1600×900 px (16:9)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target file size 300-600 KB). No blur on Devanagari text.
>
> Create a flat-vector editorial timeline infographic with EXACTLY the same layout, colour palette, and structure as the English Evolution Timeline. Years (3000 BCE, 1810, 1933, 1948, 1952, 1965), numbers (24.3 g/m², 0.11 g/m², 225×), and proper nouns (Appert, Durand, ICI, Whinfield & Dickson) stay in English. Only title, subtitle, station card descriptions, and bottom callout translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow strip (orange `#E85D26`, English): 5,000 YEARS OF PACKAGING EVOLUTION
> - Title (Hindi, navy bold, large): **Clay Pots से Vacuum Metallisation तक**
> - Subtitle (Hindi, grey): *हर generation ने previous generation की biggest problem solve की और छोटी create की।*
>
> **Stations (year tags stay in English; descriptions Hindi):**
>
> 1. **3000 BCE** — "Sealed clay pots beeswax के साथ (Egypt)। पहली true food storage। *Heavy। Scale नहीं होती।*"
>
> 2. **1810** — "Glass jar (Appert) Napoleon का prize जीतता है। Perfect barrier। *200-400g, transit में टूटता है।*"
>
> 3. **1810** — "Tin-coated steel can (Durand, UK)। Breakage solve की। *100g+ empty, खोलना hard।*"
>
> 4. **1933** — "Polyethylene synthesised (ICI, accidentally)। सस्ता और flexible। *Oxygen के against useless।*"
>
> 5. **1948** — "Aluminium foil commercialised। Flexible form में perfect barrier। *24.3 g/m² Al, expensive, crease होता है।*"
>
> 6. **1952** — "PET discovered (Whinfield & Dickson)। Strong, transparent, dimensionally stable। *अकेला poor barrier।*"
>
> 7. **1965** — "**Vacuum metallisation arrives।** PET पर 0.11 g/m² Al foil-class barrier deliver करता है। *225× कम aluminium। Miracle।*"
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ Pattern:**
> - RIGHT (white text, Hindi): *हर step ने एक constraint दूसरे के लिए trade किया। Vacuum metallisation पहली थी जिसने barrier, weight, AND cost एक साथ solve किया — rare triple।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 2A.

### Plan B for Hindi
Generate Image 2A first, then in Photopea/Canva replace title, subtitle, station card descriptions, and bottom callout with proper Devanagari text using Hind or Mukta font. Years, numbers, and proper nouns stay in English.

---

## IMAGE 3A — Barrier Comparison (English) (`barrier-comparison-en.png`)

**Save as:** `barrier-comparison-en.png` · **Dimensions:** 1600×900 px (16:9)
**Goal:** The OTR/WVTR comparison that lands the metallisation argument in numbers — bare PET vs metallised PET vs foil/glass.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges. Output as PNG, web-optimized (target file size 300-600 KB).
>
> Create a clean flat-vector editorial data infographic. NOT photorealistic. NOT 3D. Bloomberg Markets / Financial Times style.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 12%):**
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **THE BARRIER COMPARISON THAT EXPLAINS METALLISATION**
> - Title (navy `#1A2744`, large bold sans-serif): **Bare PET. Metallised PET. Aluminium Foil.**
> - Subtitle (grey `#5A5A5A`): *OTR (oxygen) and WVTR (moisture) transmission rates. Lower = better barrier.*
>
> **Main visual zone (middle 76%) — three vertical comparison columns:**
>
> Three columns of equal width, each showing one substrate with its OTR and WVTR. Each column is a navy `#1A2744` rounded rectangle ~85% of the row height, with white/orange/teal text.
>
> **COLUMN 1 — Bare PET 12μm (orange-bordered):**
> - Top tag (small white caps): BARE PET 12μm
> - Visual at top: a flat-vector translucent rectangle representing plain PET film
> - Below the visual, two large stat boxes side by side:
>   - OTR box: orange `#E85D26` background, big number **110** (Bebas Neue, ~80 pt), tiny white caps below: cc/m²/day
>   - WVTR box: orange `#E85D26` background, big number **40** (~80 pt), tiny white caps below: g/m²/day
> - Bottom verdict (white italic small): *Decent dimensional stability. Poor barrier. Useless for snacks alone.*
>
> **COLUMN 2 — Metallised PET 12μm (teal-bordered, EMPHASIZED):**
> Make this column slightly taller than the others, with a thin teal `#0D8C7E` glow/shadow to emphasize.
> - Top tag (small orange caps): METALLISED PET 12μm — THE MIRACLE
> - Visual at top: same flat-vector PET rectangle, but now with a thin silver-grey horizontal stripe across the top suggesting the aluminium coating. Tiny label arrow pointing to the stripe: "0.04 μm Al = 200 atoms"
> - Below the visual, two large stat boxes:
>   - OTR box: teal `#0D8C7E` background, big number **<1** (Bebas Neue, ~80 pt), tiny white caps below: cc/m²/day
>   - WVTR box: teal `#0D8C7E` background, big number **<1** (~80 pt), tiny white caps below: g/m²/day
> - Bottom verdict (white italic small): *Foil-class barrier. 225× less aluminium than foil. Plastic-class economics.*
>
> **COLUMN 3 — Aluminium Foil 9μm (orange-bordered):**
> - Top tag (small white caps): ALUMINIUM FOIL 9μm
> - Visual at top: a flat-vector solid silver/grey rectangle (much more opaque than the PET visuals) with tiny label: "9 μm Al = 24.3 g/m²"
> - Below the visual, two large stat boxes:
>   - OTR box: orange `#E85D26` background, big number **0** (Bebas Neue, ~80 pt), tiny white caps below: cc/m²/day
>   - WVTR box: orange `#E85D26` background, big number **0** (~80 pt), tiny white caps below: g/m²/day
> - Bottom verdict (white italic small): *Perfect barrier. Heavy, expensive, creases on flex. The standard metallisation matched.*
>
> **Bottom callout strip (full-width, 8% of height):**
> Navy `#1A2744` background. Two-column split:
> - LEFT (orange `#E85D26` text, bold): **⚡ The miracle in one number:**
> - RIGHT (white text): *Metallised PET delivers 99.5% of foil's barrier with 0.45% of the aluminium. That ratio is why every chips packet today is metallised, not foil.*
>
> **Bottom-right corner of the entire image:** place the attached VKS Tech logo at ~80×80 px on a white circle backplate.
>
> **Bottom-left corner:** small grey footer text: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif throughout. Substrate name tags in semibold caps. OTR/WVTR big numbers in heavy condensed (Bebas Neue, Anton, Oswald) — must visually dominate each column.
>
> **What to AVOID:** clipart, cartoons, hand-drawn elements, photorealism, isometric/3D effects, decorative borders.

### Plan B
If silver/grey film representation looks weak, just use solid coloured rectangles labelled with the substrate name. The numbers carry the story, not the visuals. If the "<1" symbol renders strangely, write out "less than 1" instead.

### Quality check
- Three columns clearly delineated; middle column visually emphasized
- Numbers correct: 110/40 for bare PET, <1/<1 for metallised, 0/0 for foil
- Each column has its substrate name and aluminium-content label
- Bottom callout has "99.5% / 0.45%" ratio message
- Logo at bottom-right

---

## IMAGE 3B — Barrier Comparison (Hindi) (`barrier-comparison-hi.png`)

**Save as:** `barrier-comparison-hi.png` · **Dimensions:** 1600×900 px (16:9)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. High resolution, sharp text, crisp vector edges. Output as PNG, web-optimized (target file size 300-600 KB). No blur on Devanagari text.
>
> Create a flat-vector editorial data infographic with EXACTLY the same layout as the English Barrier Comparison. Numbers (110, 40, <1, 0), units (cc/m²/day, g/m²/day, μm, g/m²), and substrate names (BARE PET, METALLISED PET, ALUMINIUM FOIL) stay in English. Only title, subtitle, column verdicts, and bottom callout translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow (orange, English): THE BARRIER COMPARISON THAT EXPLAINS METALLISATION
> - Title (Hindi, navy bold): **Bare PET। Metallised PET। Aluminium Foil।**
> - Subtitle (Hindi, grey): *OTR (oxygen) और WVTR (moisture) transmission rates। Lower = better barrier।*
>
> **Column 1 verdict (white Hindi italic):** *Decent dimensional stability। Poor barrier। अकेले snacks के लिए useless।*
>
> **Column 2 verdict (white Hindi italic):** *Foil-class barrier। Foil से 225× कम aluminium। Plastic-class economics।*
>
> **Column 3 verdict (white Hindi italic):** *Perfect barrier। Heavy, expensive, flex पर crease होता है। वो standard जो metallisation ने match किया।*
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ Miracle एक number में:**
> - RIGHT (white text, Hindi): *Metallised PET foil के barrier का 99.5% deliver करता है foil के aluminium का 0.45% use करके। यही ratio है क्यों आज हर chips packet metallised है, foil नहीं।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 3A.

### Plan B for Hindi
Generate 3A first; replace Hindi text in Photopea/Canva using Hind or Mukta. Numbers, substrate names, and units stay in English in both versions.

---

## REVIEW — 8-Point Check Before Publishing

### 1. Brand colour discipline
✅ Pass: only Navy `#1A2744`, Orange `#E85D26`, Teal `#0D8C7E`, Cream `#FAF9F6`, white, grey
❌ Fail: any blue, green outside teal, yellow, red other than orange

### 2. Typography quality
✅ Pass: clean sans-serif (Inter/Söhne), big numbers in heavy condensed (Bebas/Anton)
❌ Fail: serif fonts in body, decorative fonts, cramped numbers

### 3. Number accuracy (HARD)
**Image 1 (Cover):** 225×, OTR <1, 0.04 μm — all visible.
**Image 2A/2B (Timeline):** 7 stations with correct dates (3000 BCE, 1810 ×2, 1933, 1948, 1952, 1965). 1965 card emphasized with "225× less aluminium."
**Image 3A/3B (Barrier):** 110/40 bare PET, <1/<1 metallised PET, 0/0 foil. "99.5% / 0.45%" ratio in callout.

### 4. Source attribution
✅ Pass: Appert / Durand / ICI / Whinfield & Dickson visible on timeline (image 2A/2B)

### 5. Hero panel parity
For Image 3A/3B: the three columns MUST be at identical sizes (middle one slightly emphasized via glow, not via larger size).

### 6. Logo placement
✅ Pass: VKS Tech logo at bottom-right, ~80–110 px, white backplate
❌ Fail: logo missing, distorted, embedded in artwork

### 7. Information density
✅ Pass: cover reads as "5000 years → metallisation → 225×" in 5 sec; timeline reads as "7 milestones" in 10 sec; barrier comparison reads as "bare/metallised/foil with their numbers" in 5 sec
❌ Fail: too dense to read at glance / too sparse to study

### 8. No AI-tells
❌ Avoid: identifiable faces, distorted hands, garbled small text, AI watermarks, plastic surfaces

---

## TROUBLESHOOTING

- **Numbers come out wrong:** Always overlay correct numbers in an editor afterward. AI image models are unreliable with numerics.
- **Silhouettes look weird:** Replace with simpler geometric shapes — circles, rectangles, basic icons. Abstract is better than uncanny.
- **Hindi renders as gibberish:** Generate EN version first, replace text in Photopea/Canva using Hind or Mukta.
- **Decorative clutter (sparkles, hearts, confetti):** Add: *"STRICTLY no decorative elements, no clipart, no flourishes. WSJ / Bloomberg / HBR editorial style ONLY."*
- **Logo gets ignored:** Composite manually after generation.

## Folder Structure When Complete

```
33-why-do-we-metallise/
├── index.html
├── logo.png                       (already provided)
├── cover.png                      (Image 1)
├── evolution-timeline-en.png      (Image 2A)
├── evolution-timeline-hi.png      (Image 2B)
├── barrier-comparison-en.png      (Image 3A)
├── barrier-comparison-hi.png      (Image 3B)
├── GEMINI-PROMPTS.md              (this file)
└── GEMINI-PROMPTS.html            (interactive page with copy buttons)
```
