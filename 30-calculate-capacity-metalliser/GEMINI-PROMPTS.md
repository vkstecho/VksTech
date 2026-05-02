# GEMINI IMAGE PROMPTS — Blog 30: How to Calculate Capacity of a Metalliser

## Quick Reference

**5 images required** (1 cover + 2 bilingual cycle-time anatomy + 2 bilingual capacity contrast)

| # | Filename | Aspect | What it shows |
|---|---|---|---|
| 1 | `cover.png` | 16:9 | Hero cover — the capacity engine |
| 2A | `cycle-time-anatomy-en.png` | 16:9 | The 7-component cycle-time anatomy, English |
| 2B | `cycle-time-anatomy-hi.png` | 16:9 | Same as 2A in Hindi |
| 3A | `capacity-contrast-en.png` | 16:9 | 32 MT/day baseline vs 12 MT/day AlOx, English |
| 3B | `capacity-contrast-hi.png` | 16:9 | Same as 3A in Hindi |

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
| Teal | `#0D8C7E` | Secondary, geometry/weight elements |
| Cream | `#FAF9F6` | Backgrounds |
| Grey | `#5A5A5A` | Subtitles, captions |

**No other colors.** No red except `#E85D26`. No blue except navy. No yellow, no green outside teal.

**No photorealistic identifiable faces.** People may appear back-view, hands-only, silhouette, or face-obscured.

**No decorative clipart** — confetti, hearts, sparkles, cartoon icons. WSJ / Bloomberg / Harvard Business Review editorial style only.

**Fonts to request:** Inter, Söhne, Helvetica Neue (Latin); Hind, Mukta (Devanagari). Big numbers in Bebas Neue, Anton, or Oswald — heavy condensed sans-serif.

---

## IMAGE 1 — Cover (`cover.png`)

**Save as:** `cover.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Hero image that signals "this is the capacity engine — the productivity foundation that powers Blogs 28 and 29." Must convey "engineering authority, mathematical precision, real shop floor."

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create an editorial magazine-cover image for a flexible-packaging industry blog post titled "How to Calculate Capacity of a Metalliser." This is the productivity engine of the metalliser series — the visual must convey *engineering authority, mathematical precision, real shop floor presence*.
>
> **Composition** — split scene 60/40:
> - LEFT 60%: a shop-floor view of a metalliser machine, shot from a low angle to emphasise scale. The chamber is closed and the deposition cycle is mid-run. Subtle steam/cooling vapour visible. Dim industrial lighting with warm orange highlights from the heat sources. A single operator silhouette at a control panel (back to camera, hands on the panel). Industrial documentary photography style, shallow depth of field, professional, NOT futuristic-sci-fi.
> - RIGHT 40%: a clean dark navy `#1A2744` panel with subtle paper-grain texture.
>
> **Text overlay on the navy panel:**
> - Top eyebrow strip in orange `#E85D26`, all caps, small letterspacing: **vksTech.com / PRODUCTIVITY ENGINE**
> - Main title in white Inter Bold or Söhne Bold (3 lines, large): **How to Calculate Capacity of a Metalliser**
> - Subtitle in lighter grey `#FAF9F6` italic: *A 3-Step Engine — for any plant, any film, any product mix*
> - HORIZONTAL DIVIDER (orange `#E85D26`, 2 px thin)
> - HERO NUMBERS — TWO numbers stacked vertically, very large (Bebas Neue or Anton, ~140 pt), with clear visual hierarchy:
>   - **32 MT/day** in bright orange `#E85D26`, label below in tiny grey caps: STANDARD PET BASELINE
>   - Below it, **12 MT/day** in white, label below in tiny orange caps: ALOX SAME MACHINE
>   - A small orange arrow connecting them, implying "same plant, different mix, half the capacity"
> - Bottom strip on the navy panel: small text — **Vivek Kumar | M.Tech NIT Uttarakhand | 9+ Years Flexible Packaging**
> - In the **bottom-right corner**, place the attached VKS Tech logo at ~110×110 px with a thin white round backplate
>
> **Mood**: industrial, executive-grade, confident, not dramatic. Think *The Wall Street Journal* manufacturing feature meets a plant engineering quarterly. NOT cinematic, NOT sci-fi, NOT cartoonish. The reader should feel: "this is the page my plant manager pulls up when corporate asks about capacity."
>
> Strict colors: navy `#1A2744`, orange `#E85D26`, cream `#FAF9F6`, white. No red except orange. No green, no yellow.

### Plan B (if logo not embedded)

If Gemini ignores the attached logo or generates a placeholder, generate without the logo and composite manually in Canva, Photopea, or GIMP — place `logo.png` at bottom-right at ~110×110 px on a white round backplate.

---

## IMAGE 2A — Cycle Time Anatomy, English (`cycle-time-anatomy-en.png`)

**Save as:** `cycle-time-anatomy-en.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Show how the 7 cycle-time components stack into total time per roll, then divide into 1420 available daily minutes to give rolls per day. **This is the keeper image** — print-ready as an A3 cabin-wall reference poster for operators.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a clean flat-vector editorial infographic. NOT photorealistic. NOT 3D. Pure flat infographic with crisp typography. Inspired by *The Economist* / *Harvard Business Review* methodology diagrams.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 12%):**
> - Eyebrow strip in orange `#E85D26`: small caps, letterspaced: **METALLISER CYCLE-TIME ANATOMY**
> - Title (navy `#1A2744`, large bold sans-serif): **How One Roll Cycle Builds From 7 Components**
> - Subtitle (grey `#5A5A5A`, regular weight): *Setup + Vacuum-Heat + Run + Vent + Boat-Change overhead = Cycle time per roll. Then 1420 available minutes ÷ Cycle time = Rolls per day.*
>
> **Main visual zone (middle 65%) — split 50/50:**
>
> **LEFT HALF — vertical stacked-bar showing the 5 cycle-time components for ONE roll** (12μm PET M2.2 baseline):
> Stack from BOTTOM to TOP, with proportional segment heights:
> 1. (BOTTOM, largest segment, deep orange `#E85D26`): **Run Time — 67.5 min** (Length 54,000 ÷ Speed 800)
> 2. (Setup, medium orange): **Setup — 20 min**
> 3. (Vacuum-Heat, medium orange): **Vacuum + Heating — 20 min**
> 4. (Vent, teal `#0D8C7E`): **Vent — 10 min**
> 5. (Boat-Change, smallest sliver, light teal): **Boat-Change overhead — 0.9 min** (54,000 ÷ 600,000 × 10)
>
> Above the bar, in a navy `#1A2744` rounded rectangle: **TOTAL CYCLE = 118.4 min/roll** (white text, bold)
> Each segment must show its own minutes value as a label inside or to the right of the segment, plus the component name.
>
> **RIGHT HALF — three sequential calculation boxes stacked top-to-bottom:**
>
> **Box 1 (orange-tinted)** — Available daily time:
> - Top tag (navy small caps): STEP A
> - Title: Available Minutes per Day
> - Formula: **1440 − 20 (source cleaning) = 1420 min**
>
> **Arrow down (orange)** — symbolic divide
>
> **Box 2 (teal-tinted)** — Cycle time per roll:
> - Top tag: STEP B
> - Title: Cycle Time per Roll
> - Sum reading: 20 + 20 + 67.5 + 10 + 0.9 = **118.4 min**
>
> **Arrow down**
>
> **Box 3 (navy filled, white text)** — Result:
> - Top tag (orange small caps): STEP C
> - Title (white): Rolls per Day
> - Hero number (Bebas Neue, very large, white): **12 rolls/day**
> - Below (orange italic): *= 1420 ÷ 118.4 (PET 12μm M2.2 baseline)*
>
> **Bottom callout strip (full-width, 8% of height):**
> Navy `#1A2744` background. Two-column split:
> - LEFT (orange `#E85D26` text, bold): **⚡ Reader Insight:**
> - RIGHT (white text): *Run time is the largest segment but never alone reaches the headline number — the surrounding 50 minutes of non-running activity is what determines real rolls/day.*
>
> **Bottom-right corner of the entire image:** place the attached VKS Tech logo at ~80×80 px on a small white circle/rounded-square backplate.
>
> **Bottom-left corner:** small grey footer text: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif throughout. Component names in **semibold**, minute values in **bold**. Hero number (12 rolls/day) in heavy condensed font (Bebas Neue, Anton, Oswald).
>
> **What to AVOID:** clipart, cartoons, hand-drawn elements, photorealism, isometric/3D effects, decorative borders, gradients beyond very subtle box shadows.

### Plan B

If logo missing, composite manually after generation. Place at bottom-right at ~80×80 px.

### Quality check before accepting

- All 5 cycle components present with correct minutes (67.5, 20, 20, 10, 0.9)
- Total = 118.4 min displayed prominently
- Three sequential calc boxes (A, B, C) on the right
- Result panel shows **12 rolls/day** as the hero
- 1440 − 20 = 1420 visible
- Logo at bottom-right
- Run time is the largest segment in the stacked bar

---

## IMAGE 2B — Cycle Time Anatomy, Hindi (`cycle-time-anatomy-hi.png`)

**Save as:** `cycle-time-anatomy-hi.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Hindi mirror of Image 2A.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a flat-vector editorial infographic with EXACTLY the same layout, colour palette, and structure as the English Cycle-Time Anatomy infographic. Component NAMES (Setup, Vacuum + Heating, Run Time, Vent, Boat-Change) stay in English because that's the shop-floor convention. Numbers stay in English numerals. Only title, subtitle, step titles, and bottom callout translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow strip (orange `#E85D26`, English): **METALLISER CYCLE-TIME ANATOMY**
> - Title (Hindi, navy bold, large): **एक Roll Cycle 7 Components से कैसे बनती है**
> - Subtitle (Hindi, grey): *Setup + Vacuum-Heat + Run + Vent + Boat-Change overhead = Cycle time per roll। फिर 1420 available minutes ÷ Cycle time = Rolls per day।*
>
> **Stacked bar (left half):** identical to Image 2A — 5 segments with English component names + minute values (Run Time 67.5, Setup 20, Vacuum + Heating 20, Vent 10, Boat-Change 0.9). Top label: **TOTAL CYCLE = 118.4 min/roll**.
>
> **Right side calc boxes:**
> - Box 1: STEP A — Available Minutes per Day → 1440 − 20 = 1420 min
> - Box 2: STEP B — Cycle Time per Roll → 20 + 20 + 67.5 + 10 + 0.9 = 118.4 min
> - Box 3 (navy): STEP C — Rolls per Day → **12 rolls/day** (= 1420 ÷ 118.4 — PET 12μm M2.2 baseline)
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ Reader Insight:**
> - RIGHT (white text, Hindi): *Run time सबसे बड़ा segment है पर अकेले headline number तक कभी नहीं पहुँचता — आसपास के 50 minutes non-running activity असली rolls/day determine करते हैं।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 2A. Same colour palette, same fonts (Inter for English, Hind/Mukta for Hindi).

### Plan B for Hindi rendering issues

Use the same workflow as previous Hindi infographics: generate the EN version (Image 2A) first, then in Photopea/Canva replace the title, subtitle, and bottom callout with proper Devanagari text using Hind or Mukta font. Component names and numbers stay in English in both versions.

---

## IMAGE 3A — Capacity Contrast, English (`capacity-contrast-en.png`)

**Save as:** `capacity-contrast-en.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Side-by-side dramatic contrast: same plant, same machine, two products → 32 MT/day vs 12 MT/day. **The single visual a plant manager pulls up when corporate asks "why did capacity drop this month?"**

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a clean flat-vector editorial comparison infographic. NOT photorealistic. NOT 3D. Pure flat infographic with crisp typography. *Bloomberg Markets* / *Financial Times* comparison-graphic aesthetic.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 12%):**
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **SAME PLANT — DIFFERENT PRODUCT — HALF THE CAPACITY**
> - Title (navy `#1A2744`, large bold sans-serif): **One Machine. Two Products. Two Capacities.**
> - Subtitle (grey `#5A5A5A`, regular): *The ratecard quotes one number. Reality runs at the product mix's number.*
>
> **Main visual zone (middle 70%) — TWO LARGE COLUMNS side by side, each represents one product:**
>
> **LEFT COLUMN — PET 12μm M2.2 Standard (orange-themed):**
>
> Top of column: a small navy tag chip — PRODUCT A. Below it, large label (navy bold): **PET 12μm M2.2 Standard**. Subtitle (grey small): *baseline transparent metallised*.
>
> Mid-column: 4 stat rows with values aligned right:
> - Cycle time: **118.4 min/roll**
> - Rolls per day: **12 rolls**
> - Roll weight: **2,683 kg**
> - Boat-set life: **6 lakh m**
>
> Bottom of column: a large hero panel with orange `#E85D26` background, white text. Inside:
> - Small caps tag: DAILY CAPACITY
> - Big number (Bebas Neue / Anton, very large, ~120 pt, white): **32 MT/day**
>
> **CENTRE — vertical separator:** a thin orange `#E85D26` line with the symbol **vs** in a circle, mid-height. Optional small "same machine" tag above the separator.
>
> **RIGHT COLUMN — PET 12μm AlOx (teal-themed):**
>
> Top of column: a small navy tag chip — PRODUCT B. Below: large label: **PET 12μm AlOx**. Subtitle: *aluminium-oxide special chemistry*.
>
> Mid-column: 4 stat rows:
> - Cycle time: **139.4 min/roll**
> - Rolls per day: **8.61 rolls**
> - Roll weight: **1,407 kg**
> - Boat-set life: **1.5 lakh m**
>
> Bottom of column: hero panel with navy `#1A2744` background, teal `#0D8C7E` text accents. Inside:
> - Small caps tag: DAILY CAPACITY
> - Big number (white, very large, same size as Product A's): **12.1 MT/day**
>
> **Below both columns — DELTA STRIP:**
> A wide rounded rectangle, orange `#E85D26` background. White text centred:
> - Small caps tag: CAPACITY DELTA
> - Heading: **−20.1 MT/day = −62%** (white, bold)
> - Subtext italic: *same machine, same operators, same shift — the product mix moved the goalpost*
>
> **Bottom callout strip (8% of height):**
> Navy `#1A2744` background. Two-column split:
> - LEFT (orange bold): **⚡ Why this matters:**
> - RIGHT (white): *If your monthly capacity utilisation looks bad, check what mix you actually ran. The capacity number is whichever product was on the machine.*
>
> **Bottom-right corner:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey footer: *vkstech.com — Free Calculators. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne sans-serif. Big numbers (32 MT/day, 12.1 MT/day, 62%) in Bebas Neue or Anton — heavy condensed. Both column hero panels must use IDENTICAL big-number sizes so the visual comparison is honest.
>
> **What to AVOID:** clipart, cartoons, hand-drawn elements, photorealism, isometric/3D effects, decorative borders, drop shadows beyond very subtle, rainbow colours.

### Plan B

If logo missing, composite manually. If the two-column comparison is too cramped at 1600×900, fall back to slightly narrower columns with bigger gap between them — but never reduce the hero number sizes; those must stay dominant.

### Quality check before accepting

- Two columns clearly comparable in layout
- Product A column orange-themed, Product B column teal/navy-themed
- Both DAILY CAPACITY hero numbers (32 MT/day and 12.1 MT/day) at SAME size
- Delta strip below shows −20.1 MT/day and −62%
- All 4 stat rows present in both columns
- Cycle times correct: 118.4 min vs 139.4 min
- Roll weights correct: 2,683 kg vs 1,407 kg
- No "Alubond" anywhere — must say AlOx
- Logo at bottom-right

---

## IMAGE 3B — Capacity Contrast, Hindi (`capacity-contrast-hi.png`)

**Save as:** `capacity-contrast-hi.png`
**Dimensions:** 1600×900 px (16:9)
**Goal:** Hindi mirror of Image 3A.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> Create a flat-vector editorial comparison infographic with EXACTLY the same layout, colour palette, and column structure as the English Capacity Contrast infographic. Numbers stay in English numerals. Product labels (PET 12μm M2.2 Standard, PET 12μm AlOx) stay in English. Only the title, subtitle, stat row labels, hero panel labels, delta strip, and bottom callout translate to Hindi.
>
> Use Hind or Mukta Devanagari font for all Hindi text.
>
> **Header:**
> - Eyebrow strip (orange `#E85D26`, English): **SAME PLANT — DIFFERENT PRODUCT — HALF THE CAPACITY**
> - Title (Hindi, navy bold, large): **एक Machine. दो Products. दो Capacities.**
> - Subtitle (Hindi, grey): *Ratecard एक number quote करता है। Reality product mix के number पर चलती है।*
>
> **LEFT COLUMN — PET 12μm M2.2 Standard (orange-themed):**
> - Tag: PRODUCT A
> - Label: PET 12μm M2.2 Standard (English)
> - Subtitle (Hindi small grey): *baseline transparent metallised*
> - 4 stat rows (English labels + Hindi connector words OK):
>   - Cycle time: 118.4 min/roll
>   - Rolls per day: 12 rolls
>   - Roll weight: 2,683 kg
>   - Boat-set life: 6 lakh m
> - Hero panel (orange bg, white text):
>   - Tag: DAILY CAPACITY
>   - Big number: **32 MT/day**
>
> **Centre separator:** thin orange line with **vs** in a circle.
>
> **RIGHT COLUMN — PET 12μm AlOx (teal-themed):**
> - Tag: PRODUCT B
> - Label: PET 12μm AlOx
> - Subtitle (Hindi): *aluminium-oxide special chemistry*
> - 4 stat rows:
>   - Cycle time: 139.4 min/roll
>   - Rolls per day: 8.61 rolls
>   - Roll weight: 1,407 kg
>   - Boat-set life: 1.5 lakh m
> - Hero panel (navy bg):
>   - Tag: DAILY CAPACITY
>   - Big number (white): **12.1 MT/day**
>
> **Delta strip (orange bg, white text):**
> - Tag: CAPACITY DELTA
> - Heading: **−20.1 MT/day = −62%**
> - Subtext italic (Hindi): *same machine, same operators, same shift — product mix ने goalpost हिला दिया*
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ ये क्यों matter करता है:**
> - RIGHT (white text, Hindi): *अगर आपकी monthly capacity utilisation खराब दिखती है, check करें actually क्या mix चला। Capacity number वही है जो product machine पर था।*
>
> **Bottom-right:** VKS Tech logo at ~80×80 px on white backplate.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free Calculators। Real Plant Methodology।*
>
> All other styling identical to Image 3A. Same colour palette, same fonts (Inter for English/numbers, Hind/Mukta for Hindi).

### Plan B for Hindi

Use the standard workflow: generate Image 3A first, replace Hindi text in Photopea/Canva using Hind or Mukta. The product labels, all stat numbers, and the hero capacity numbers stay in English — only the surrounding prose changes.

---

## REVIEW — How to Judge Whether Each Image Is Good Enough

For every generated image, walk through this 8-point check **before publishing**.

### 1. Brand colour discipline

✅ Pass: only Navy `#1A2744`, Orange `#E85D26`, Teal `#0D8C7E`, Cream `#FAF9F6`, white, grey
❌ Fail: any blue, any green outside teal, any yellow, any red other than the orange

### 2. Typography quality

✅ Pass: clean sans-serif (Inter / Söhne / Helvetica), big numbers in heavy condensed font (Bebas / Oswald / Anton)
❌ Fail: serif fonts in body, decorative/handwritten fonts, numbers cramped, text overlapping

### 3. Number accuracy (HARD requirement)

Every number must be exact. Spot-check:

**Cycle-time anatomy (Image 2A/2B):**
- Run Time: 67.5 min
- Setup: 20 min
- Vacuum + Heating: 20 min
- Vent: 10 min
- Boat-Change: 0.9 min
- TOTAL: 118.4 min
- Available: 1440 − 20 = 1420 min
- Rolls/day: 12

**Capacity contrast (Image 3A/3B):**
- Product A (PET M2.2): 118.4 min/roll, 12 rolls, 2,683 kg, 6 lakh m, **32 MT/day**
- Product B (AlOx): 139.4 min/roll, 8.61 rolls, 1,407 kg, 1.5 lakh m, **12.1 MT/day**
- Delta: −20.1 MT/day = −62%

**Cover:** 32 MT/day, 12 MT/day, hero numbers same family.

### 4. Material name discipline

- ✅ Pass: **AlOx** or **AlOx (Aluminium Oxide)**
- ❌ Fail: "Alubond"
- ✅ Pass: PET density 1.38 (matches Blog 27 convention)
- ❌ Fail: PET density 1.40 (would conflict with site convention)

### 5. Hero number sizing

For Image 3A/3B specifically: both column DAILY CAPACITY numbers (32 MT/day and 12.1 MT/day) **must be the same point size**. Different sizes would visually misrepresent the comparison.

### 6. Logo placement

- ✅ Pass: VKS Tech logo at bottom-right, ~80–110 px, on white backplate
- ❌ Fail: logo missing, distorted, embedded in artwork, or invisible

### 7. Information density vs scannability

✅ Pass: cycle anatomy readable as "5 components stack to 118 min" in 5 seconds; contrast image readable as "32 vs 14" in 3 seconds
❌ Fail: too dense to read at glance / too sparse to study

### 8. No stock-image / AI-generated tells

❌ Avoid: faces of identifiable people, distorted hands, garbled small text, AI watermarks, plastic surfaces, unnatural lighting

---

## TROUBLESHOOTING (most common issues)

### "The image looks AI-generated"
Re-prompt with: *"Editorial illustration / vector infographic style, NOT photorealistic AI generation. Clean flat colours, no gradient skin tones, no plastic surfaces."*

### "Numbers come out wrong"
Always overlay correct numbers in an editor afterward. AI image models are unreliable with numerics — treat their numbers as suggestions.

### "Hindi renders as gibberish"
Use the Plan B workflow: generate EN version first, then text-replace in Photopea/Canva using a real Devanagari font.

### "Decorative clutter (sparkles, hearts, confetti)"
Add: *"STRICTLY no decorative elements, no clipart, no flourishes. WSJ / Bloomberg / HBR editorial style ONLY."*

### "Logo gets ignored"
Always have Plan B ready: composite manually. Don't waste credits trying to force the model to embed a custom logo.

---

## Folder structure when complete

```
30-calculate-capacity-metalliser/
├── index.html
├── logo.png                         (already provided)
├── cover.png                        (Image 1)
├── cycle-time-anatomy-en.png        (Image 2A)
├── cycle-time-anatomy-hi.png        (Image 2B)
├── capacity-contrast-en.png         (Image 3A)
├── capacity-contrast-hi.png         (Image 3B)
├── GEMINI-PROMPTS.md                (markdown reference)
└── GEMINI-PROMPTS.html              (interactive page with copy buttons)
```

After all 5 images are generated and verified, upload the complete folder contents to Firestore for Blog #30.

---

## Notes on engagement (what makes these images actually work)

The reader of Blog 30 is a plant manager / process engineer who needs to defend a capacity number in a corporate meeting, or who wants to forecast next month's MT delivery. The images need to:

1. **Reward the second look** — first glance gives the headline number, deeper look reveals the math
2. **Earn space on a cabin wall** — the cycle-time anatomy is print-ready as a reference poster for operators
3. **Survive the 8-second scroll test** — capacity contrast image must register "32 vs 14" instantly
4. **Be defensible in a review meeting** — the cycle-time anatomy proves the math; the contrast image shows why ratecard ≠ reality

Each image must do one of these jobs:

- **Cover** = sets the tone "this is the capacity engine of the metalliser, the foundation for Blogs 28 and 29"
- **Cycle-time anatomy (Image 2A/2B)** = print-ready cabin-wall poster; shows how 7 components produce real rolls/day
- **Capacity contrast (Image 3A/3B)** = the visual that wins capacity arguments — "ratecard says X but the mix says Y, here's the math"

Both the cycle-time anatomy and capacity contrast images must be print-ready for A3 cabin-wall reference posters.
