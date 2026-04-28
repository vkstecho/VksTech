# 🎨 Gemini Image Prompts — Blog #24 Metallised Waste 1.8% → 0.9%

**Workflow:** ⚠️ ATTACH `logo.png` to EVERY prompt — all 7 images. Yes, every single one. Gemini's image generator does NOT reliably retrieve files from earlier turns in the chat — uploading each time is the only way to guarantee logo consistency across all images.
**Total images:** 7 (1 bilingual cover + 3 EN diagrams + 3 HI diagrams)
**Logo file:** `logo.png` is in this folder — attach it FRESH with every prompt (cover + all 6 inline diagrams = 7 attachments total). Do NOT rely on chat memory — Gemini's image gen does not retrieve files from prior turns reliably.
**Blog scope:** Operator-discipline playbook for cutting metallised waste from 1.8% to 0.9% — based on real veteran knowledge of the 5 waste sources and the per-jumbo tracking format
**Published:** April 2026


## ⚠️ IMPORTANT — IF THE LOGO COMES OUT WRONG

If the logo on a generated image looks wrong (invented design, missing entirely, wrong colors V=green / K=blue / S=red, wrong shape), the most likely cause is:

1. **You did not attach `logo.png` to that specific prompt.** Gemini's image generator only sees images attached to the CURRENT prompt — it does NOT retrieve images from earlier prompts in the chat. Even if you attached the logo to the cover prompt, you must ALSO attach it to every inline diagram prompt.

2. **Gemini ignored the attached logo and generated its own version.** This happens occasionally even with attachment. If this happens:
   - Re-run the prompt with `logo.png` attached again
   - Add this exact line at the very top of the prompt: **"⚠️ The attached logo.png is the official VKS Tech logo. Use it as a placed asset — DO NOT redesign or interpret. If you cannot use the file directly, output a placeholder and ask me to re-upload."**

3. **Plan B — manual logo composite (most reliable for brand-critical work):**
   - Generate the image WITHOUT a logo (remove logo instructions from the prompt)
   - Open the resulting image in any editor (Canva, Photoshop, even MS Paint)
   - Drop your actual `logo.png` onto the image at the specified position
   - This takes 30 seconds per image and guarantees pixel-perfect logo placement
   - **Recommended for the cover image specifically** — that's the most-seen image and most worth getting exactly right

**Plan A (attach to every prompt) usually works for inline diagrams. Plan B (manual composite) is safest for the cover.**


## Brand & color palette (used in every prompt)

- **Navy** `#1A2744` — primary dark
- **Orange** `#E85D26` — accent / hero numbers
- **Teal** `#0D8C7E` — secondary accent
- **Cream** `#FAF9F6` — background tint / off-white
- **Grey** `#5A5A5A` — secondary text
- **Hero number gradient:** `#B85530 → #E85D26 → #FF7A45` (vertical)


═══════════════════════════════════════════════════
═══════════════════════════════════════════════════

# IMAGE 1 of 7 — COVER (`cover.png`)

**Filename:** `cover.png`
**Dimensions:** 1600 × 900 px (16:9 aspect ratio)
**Style:** Photorealistic editorial documentary photograph + magazine-cover hero-numbers overlay (bilingual)

## Style direction — magazine-cover photorealism with shop-floor authenticity

This cover is a **photorealistic editorial photograph** showing a metalliser-slitter shop floor with operators reviewing a per-jumbo tracking format. The "operator-decisions matter" thesis of the blog is conveyed through body language. Magazine-cover style with bilingual title overlay and hero numbers.

NOT a flat illustration. NOT a vector. NOT a stock-photo "team meeting." A documentary editorial photograph.

## The photograph (full-bleed, fills entire image)

Specific composition:

- **Foreground (slight blur, lower-third):** A slitter unwinding a metallised jumbo, with the outer-layer waste portion visible being cut away. A clipboard or printed format sheet rests nearby with handwritten entries — visible but not legible. Subtle, not staged.

- **Mid-ground (sharp focus):** Two factory operators in safety helmets and aprons, shown from BACK VIEW or three-quarter rear angle so NO FACES are visible. One operator points at a column on the format sheet, mid-conversation with the other. Body language tells the "operator decisions" story — engaged, focused, peer-review mode.

- **Background (soft bokeh):** A metalliser machine receding into bokeh, control panel with amber/green LEDs, suggested vacuum chamber walls. Slight industrial haze.

- **Lighting:** Cinematic side lighting from a high window or skylight casting natural shadows. Operators slightly silhouetted against soft industrial light.

- **Camera spec:** Sony A7R IV equivalent, 35mm prime lens, f/3.5, ISO 800, shutter 1/200. Documentary editorial photography style. Mood: authentic, candid, "real moment of plant work."

- **Color palette:** Natural industrial tones — uniform colors muted, machinery silvery/dark, soft warm window light. NOT saturated.

## Magazine-cover title overlay (hero-numbers polish)

Apply a dark navy (#1A2744) gradient over the bottom 55% of the image. Fully transparent at top, ~88% opaque at bottom. The text overlay is composed in 4 hierarchical layers — the numbers are the visual hero.

═══ LAYER 1: TOP BADGE (small, uppercase) ═══

A small horizontal pill or thin underline label, top of the dark gradient:

> "PROCESS ENGINEERING · METALLISED WASTE PLAYBOOK · 2026"

Format: Uppercase, white text, mono or condensed sans (IBM Plex Mono or Inter Tight), ~14pt, letter-spacing +2px, with a small orange (#E85D26) divider dot before the text.

═══ LAYER 2: HERO NUMBERS (the visual anchor — DOMINANT) ═══

The single most important visual element:

> "1.8% → 0.9%"

Rendered HUGE — approximately 160pt — using a bold display typeface (Bebas Neue, Anton, Oswald, or Bahnschrift Bold). The numbers should occupy roughly 40% of the image width.

COLOR TREATMENT: Vertical gradient — "1.8%" starts in muted gray-orange (#B85530) at the left edge, transitions through bright orange (#E85D26) in the middle, and "0.9%" ends in vivid coral-orange (#FF7A45) at the right. The arrow "→" is white with a slight orange glow.

Letter-spacing: -2px (tight). Drop shadow: subtle dark navy (#1A2744) at 4px offset, 8px blur, 60% opacity.

═══ LAYER 3: WRAPPING TEXT (English, framing the numbers) ═══

Above the hero numbers, in white Inter or Söhne, 32pt regular:

> "Cut Metallised Waste from"

Below the hero numbers, in white Inter or Söhne, 38pt medium:

> "An Operator-Discipline Playbook"

═══ LAYER 4: HINDI PARALLEL (Devanagari, slightly smaller) ═══

Below the English title block, separated by a 30px vertical gap, the Hindi parallel rendered in Hind or Mukta Devanagari font. Same architecture as the English block but at 80% scale (≈110pt for the hero numbers).

> "Metallised Waste को 1.8% से 0.9% तक काटें"
> "एक Operator-Discipline Playbook"

═══ LAYER 5: BOTTOM STRIP (very thin teal banner) ═══

A thin teal #0D8C7E semi-transparent banner (60% opacity, 36px tall) at the very bottom edge. White uppercase mono 14pt text, letter-spacing +3px:

> "5 WASTE SOURCES  ·  PER-JUMBO FORMAT  ·  ~₹47 LAKH/YEAR PER MACHINE  ·  ZERO CAPEX"

## Logo placement (top-right corner)

Top-right corner: Uploaded logo.png on a small white circular badge (90×90 px diameter, slight drop shadow). Logo 80×80 px, 20px margin from edges. Below the badge, in white bold sans-serif: "VKS Tech".

## What to AVOID

- Do NOT show identifiable faces — operators must be back-view, side silhouette, or face obscured by helmet/equipment
- Do NOT make this a flat illustration or vector
- Do NOT use stock-photo "team meeting" or "engineer holding clipboard" imagery (the format sheet should look in-context, not as a posed prop)
- Do NOT use red color anywhere except the orange (#E85D26) accents
- Devanagari script must render correctly — verify the matras and conjuncts
- Do NOT show the format sheet content legibly — it should be a contextual prop, not a readable artifact

## Prompt for Gemini / similar AI image generator

```
[ATTACH logo.png to THIS prompt — the official VKS Tech logo file. Note: I will attach this same file to every subsequent prompt in this batch. Gemini's image gen only reads images attached to the current prompt, so per-prompt attachment is required.]

⚠️ LOGO INSTRUCTIONS — READ CAREFULLY:

1. Use the uploaded logo.png EXACTLY as provided. Do NOT recreate or redesign it.
2. The uploaded file is the official VKS Tech tri-color heart logo with V (green), K (blue), S (red).
3. Place the logo on a small white circular badge (90×90 px) in the top-right corner.
4. NOTE FOR FUTURE PROMPTS: I will attach this same logo.png file to EVERY subsequent prompt in this batch. Do not assume future prompts will rely on this attachment via chat memory — each prompt will carry its own attachment of the same file.

═══════════════════════════════════════════════════

GENERATE A PHOTOREALISTIC MAGAZINE-COVER IMAGE.

Style: Premium business magazine cover, photorealistic documentary-style photograph with bilingual title overlay. NOT illustration, NOT vector art, NOT infographic.

Dimensions: 1600 × 900 px (16:9)

THE PHOTOGRAPH (fills entire image, full-bleed):

A photorealistic editorial scene inside an Indian flexible packaging plant — a metalliser-slitter operations area. Specifically:

- FOREGROUND (slight blur, lower-third): A slitter unwinding a metallised jumbo with the outer-layer waste portion being cut away. A clipboard or printed format sheet with handwritten entries visible but not legible. Subtle, not staged.

- MID-GROUND (SHARP FOCUS): Two factory operators in safety helmets and aprons, shown from BACK VIEW or three-quarter rear angle so NO FACES are visible. One operator points at a column on the format sheet, mid-conversation with the other. Body language: engaged peer review.

- BACKGROUND (soft bokeh): A metalliser machine receding, control panel with amber/green LEDs, suggested vacuum chamber walls. Slight industrial haze.

- LIGHTING: Cinematic side lighting from a high window or skylight casting natural shadows. Operators slightly silhouetted against soft industrial light.

- CAMERA: Sony A7R IV equivalent, 35mm prime lens, f/3.5, ISO 800. Documentary editorial photography style. Mood: authentic, candid, "real moment of plant work."

- COLOR PALETTE: Natural industrial tones — uniform colors muted, machinery silvery/dark, soft warm window light. NOT saturated.

MAGAZINE-COVER TITLE OVERLAY (hero-numbers magazine-cover polish):

Apply a dark navy (#1A2744) gradient over the bottom 55% of the image. Fully transparent at top, ~88% opaque at bottom. The text overlay is composed in 4 hierarchical layers — the numbers are the visual hero.

═══ LAYER 1: TOP BADGE (small, uppercase) ═══

A small horizontal pill or thin underline label, top of the dark gradient:

"PROCESS ENGINEERING · METALLISED WASTE PLAYBOOK · 2026"

Format: Uppercase, white text, mono or condensed sans (IBM Plex Mono or Inter Tight), ~14pt, letter-spacing +2px, with a small orange (#E85D26) divider dot before the text.

═══ LAYER 2: HERO NUMBERS (the visual anchor — DOMINANT) ═══

The single most important visual element:

"1.8% → 0.9%"

Rendered HUGE — approximately 160pt — using a bold display typeface (Bebas Neue, Anton, Oswald, or Bahnschrift Bold). The numbers should occupy roughly 40% of the image width.

COLOR TREATMENT: Vertical gradient — "1.8%" starts in muted gray-orange (#B85530) at the left edge, transitions through bright orange (#E85D26) in the middle, and "0.9%" ends in vivid coral-orange (#FF7A45) at the right. The arrow "→" is white with a slight orange glow.

Letter-spacing: -2px (tight). Drop shadow: subtle dark navy (#1A2744) at 4px offset, 8px blur, 60% opacity.

═══ LAYER 3: WRAPPING TEXT (English, framing the numbers) ═══

Above the hero numbers, in white Inter or Söhne, 32pt regular:
"Cut Metallised Waste from"

Below the hero numbers, in white Inter or Söhne, 38pt medium:
"An Operator-Discipline Playbook"

═══ LAYER 4: HINDI PARALLEL (Devanagari, slightly smaller) ═══

Below the English title block, separated by a 30px vertical gap, the Hindi parallel rendered in Hind or Mukta Devanagari font. Same architecture as the English block but at 80% scale (≈110pt for the hero numbers).

"Metallised Waste को 1.8% से 0.9% तक काटें"
"एक Operator-Discipline Playbook"

═══ LAYER 5: BOTTOM STRIP (very thin teal banner) ═══

A thin teal #0D8C7E semi-transparent banner (60% opacity, 36px tall) at the very bottom edge. White uppercase mono 14pt text, letter-spacing +3px:

"5 WASTE SOURCES  ·  PER-JUMBO FORMAT  ·  ~₹47 LAKH/YEAR PER MACHINE  ·  ZERO CAPEX"

LOGO PLACEMENT (TOP-RIGHT): The uploaded logo.png on a small white circular badge (90×90 px diameter, slight drop shadow). Logo 80×80 px, 20px margin from edges. Below the badge, in white bold sans-serif: "VKS Tech".

WHAT TO AVOID:
- No identifiable faces — operators must be back-view or face obscured
- Not flat illustration / not vector / not infographic
- No stock-photo "team meeting" energy
- No red color anywhere except orange (#E85D26)
- Devanagari script must render correctly
```


═══════════════════════════════════════════════════
═══════════════════════════════════════════════════

# IMAGE 2 of 7 — SOURCE CONTRIBUTION CHART, ENGLISH (`contribution-en.png`)

**Filename:** `contribution-en.png`
**Dimensions:** 1600 × 900 px (16:9)
**Style:** Flat editorial chart (WSJ/Bloomberg aesthetic) — bar chart visualizing source-wise contribution to total waste savings

## Concept

Show readers WHERE the 0.9 percentage points of waste reduction actually come from. The headline insight: ~87% of the savings come from just three sources (Ramp-Up Waste at 43% + Extra/Defect Waste at 22% + Web Break Waste at 22%). Trim doesn't move at all because it's structural. Web break is the 6th source — a separate event-driven category that gets its own follow-up blog playbook.

This is the "Pareto chart" of waste savings. Reader walks away knowing: focus operator coaching on OD-control at start-up + early-stopping reflex on defects, AND prepare for the dedicated web-break reduction blog — those three together capture nearly all the gain.

## Layout

═══ TOP THIRD: TITLE + INTRO ═══

Eyebrow text (orange, uppercase):
> "OPERATOR-DISCIPLINE PLAYBOOK · DIAGRAM 1 OF 3"

Main title (navy bold, 38pt):
> "Where the 0.9 Percentage Points Actually Come From"

Subtitle (grey, 16pt):
> "Source-wise contribution to total waste reduction. 87% of the savings comes from just 3 sources."

═══ MIDDLE: HORIZONTAL BAR CHART ═══

A horizontal bar chart with 6 bars, each bar showing the percentage contribution of that source to total reduction.

Y-axis labels (left, navy, Inter Bold 14pt, top to bottom in this order):
- Ramp-Up Waste
- Extra Waste (defect-cut)
- Web Break Waste
- Ramp-Down Waste
- Sample Waste
- Trim Waste

Bar values (right end of each bar, large, navy):
- Ramp-Up Waste: 43%  ← largest bar, BRIGHT ORANGE #E85D26
- Extra Waste: 22%  ← second-tier bar, ORANGE #E85D26
- Web Break Waste: 22%  ← second-tier bar, ORANGE #E85D26
- Ramp-Down Waste: 7%  ← small bar, TEAL #0D8C7E
- Sample Waste: 7%  ← small bar, TEAL #0D8C7E
- Trim Waste: 0%  ← essentially no bar (just a thin grey line), GREY #5A5A5A

The top three orange bars should visually dominate. There should be a clear visual gap between the three orange bars and the three smaller bars below — emphasizing the "87% from 3 sources" insight.

To the right of each bar, also show the per-jumbo numbers in smaller text (grey 11pt):
- Ramp-Up Waste: "saves ~10 kg per jumbo (poor 0.56% → good 0.19%)"
- Extra Waste: "saves ~5 kg per jumbo (poor 0.26% → good 0.07%)"
- Web Break Waste: "saves ~5 kg per jumbo (target ZERO; +0.5% per event when occurs) — covered in next blog"
- Ramp-Down Waste: "saves ~1.5 kg per jumbo (poor 0.09% → good 0.04%)"
- Sample Waste: "saves ~1.5 kg per jumbo (poor 0.09% → good 0.04%)"
- Trim Waste: "structural — does not change with discipline"

═══ BOTTOM ZONE: CALLOUT INSIGHT ═══

A horizontal callout box spanning the bottom, navy background with orange accent line on left:

> **"87% of the savings comes from focusing on THREE behaviors:**
> **(1) OD control discipline at start-up  ·  (2) Early-stopping reflex on defects  ·  (3) Web break elimination (next blog in series)"**

This is the actionable takeaway — readers should leave the chart knowing exactly where to focus.

═══ BOTTOM-RIGHT FOOTER ═══

> "Source: VKS Tech · Companion to Blog #24"

## Logo placement

Top-right corner: 80×80 px logo on white square badge with subtle navy border.

## What to AVOID

- Do NOT make this a pie chart — bar chart is much clearer for showing the 88/12 split
- Do NOT use 3D bars or fancy gradients (flat editorial style)
- Do NOT add unnecessary decoration — the chart speaks for itself
- Keep the visual hierarchy: orange bars dominate, teal bars secondary, trim almost invisible

## Prompt for Gemini / similar AI image generator

```
[ATTACH logo.png to THIS prompt — same file as cover.]

⚠️ The attached logo.png is the official VKS Tech logo. Use it as a placed asset in the top-right corner — do NOT redesign or interpret.

GENERATE A FLAT EDITORIAL HORIZONTAL BAR CHART (not photo, not 3D, not illustration).

Style: Wall Street Journal / Bloomberg infographic aesthetic. Flat geometric shapes, clean type, generous whitespace, restricted color palette.

Dimensions: 1600 × 900 px (16:9)

LAYOUT — three horizontal zones:

TOP ZONE (top 25%):
- Eyebrow text top-left in orange (#E85D26): "OPERATOR-DISCIPLINE PLAYBOOK · DIAGRAM 1 OF 3"
- Title (navy #1A2744 bold, 38pt): "Where the 0.9 Percentage Points Actually Come From"
- Subtitle (grey #5A5A5A, 16pt): "Source-wise contribution to total waste reduction. 87% of the savings comes from just 3 sources."

MIDDLE ZONE (middle 50%):
A horizontal bar chart with 6 bars.

Y-axis labels (left side, navy, Inter Bold 14pt, top to bottom):
1. Ramp-Up Waste
2. Extra Waste (defect-cut)
3. Web Break Waste
4. Ramp-Down Waste
5. Sample Waste
6. Trim Waste

Bar widths and colors (top to bottom):
- Bar 1 (Ramp-Up Waste): 43% width, BRIGHT ORANGE #E85D26 — DOMINANT
- Bar 2 (Extra Waste): 22% width, ORANGE #E85D26 — SECOND TIER
- Bar 3 (Web Break Waste): 22% width, ORANGE #E85D26 — SECOND TIER
- Bar 4 (Ramp-Down Waste): 7% width, TEAL #0D8C7E — small
- Bar 5 (Sample Waste): 7% width, TEAL #0D8C7E — small
- Bar 6 (Trim Waste): 0% (just a thin 2px grey line), GREY #5A5A5A

The three orange bars should visually DOMINATE. The three lower bars should be small to emphasize the "87% from 3 sources" insight.

Percentage labels at the right end of each bar (large navy, Inter Bold 24pt):
- "43%"
- "22%"
- "22%"
- "7%"
- "7%"
- "0%"

To the right of each percentage, smaller grey text (Inter Regular 11pt) with the per-jumbo detail:
- "saves ~10 kg per jumbo (poor 0.56% → good 0.19%)"
- "saves ~5 kg per jumbo (poor 0.26% → good 0.07%)"
- "saves ~5 kg per jumbo (target ZERO; +0.5% per event) — covered in next blog"
- "saves ~1.5 kg per jumbo (poor 0.09% → good 0.04%)"
- "saves ~1.5 kg per jumbo (poor 0.09% → good 0.04%)"
- "structural — does not change with discipline"

BOTTOM ZONE (bottom 25%):
A horizontal callout box spanning full width. Navy (#1A2744) background, orange (#E85D26) accent line on left edge, white text inside.

Inside the box (white, Inter Bold 16pt):
"87% of the savings comes from focusing on THREE behaviors:"
"(1) OD control discipline at start-up  ·  (2) Early-stopping reflex on defects  ·  (3) Web break elimination (next blog in series)"

LOGO: Top-right corner, 80×80 px logo on a white square badge with subtle navy border.

FOOTER: Small grey text bottom-right: "Source: VKS Tech · Companion to Blog #24"

COLORS: Use only the brand palette — navy #1A2744, orange #E85D26, teal #0D8C7E, white, light grey #E8E8E8, dark grey #5A5A5A. NO red anywhere except orange.

TYPOGRAPHY: Inter or Söhne (sans-serif) throughout. Navy bold for title (38pt) and percentage labels (24pt). Grey regular for subtitle and per-jumbo details. White for callout box text.

WHAT TO AVOID:
- No pie chart (bar chart is clearer for this data)
- No 3D bars or gradients
- No photographic elements
- Generous whitespace — this is editorial design
- Bars should be horizontally oriented (NOT vertical)
```


═══════════════════════════════════════════════════
═══════════════════════════════════════════════════

# IMAGE 3 of 7 — SOURCE CONTRIBUTION CHART, HINDI (`contribution-hi.png`)

**Filename:** `contribution-hi.png`
**Dimensions:** 1600 × 900 px (16:9)
**Style:** Same architecture as English version — Hindi text where applicable

## Layout differences from English

═══ TOP ZONE ═══

Eyebrow (orange):
> "OPERATOR-DISCIPLINE PLAYBOOK · डायग्राम 1 OF 3"

Title (navy, Hind/Mukta Devanagari, 38pt bold):
> "0.9 Percentage Points असल में कहाँ से आती है"

Subtitle (grey, Devanagari, 16pt):
> "Total waste reduction में source-wise contribution। 87% savings सिर्फ़ 3 sources से आती है।"

═══ MIDDLE — Bar chart (Y-axis labels in Hindi/English mix) ═══

Y-axis labels (top to bottom, English column names with Hindi descriptors):
1. Ramp-Up Waste
2. Extra Waste (defect-cut)
3. Web Break Waste
4. Ramp-Down Waste
5. Sample Waste
6. Trim Waste

(Technical column names remain in English — consistent with shop-floor practice. Same bar widths/colors as English version.)

Per-jumbo detail text in Hindi/English mix:
- "हर jumbo ~10 kg बचाती है (poor 0.56% → good 0.19%)"
- "हर jumbo ~5 kg बचाती है (poor 0.26% → good 0.07%)"
- "हर jumbo ~5 kg बचाती है (target ZERO; +0.5% per event) — next blog में cover"
- "हर jumbo ~1.5 kg बचाती है (poor 0.09% → good 0.04%)"
- "हर jumbo ~1.5 kg बचाती है (poor 0.09% → good 0.04%)"
- "structural — discipline से change नहीं होती"

═══ BOTTOM CALLOUT (Hindi) ═══

> **"87% savings TEEN behaviors पर focus करने से आती है:"**
> **"(1) Start-up पर OD control discipline  ·  (2) Defects पर Early-stopping reflex  ·  (3) Web break elimination (series का next blog)"**

═══ FOOTER ═══

> "Source: VKS Tech · Blog #24 का Companion"

## Prompt for Gemini

```
[ATTACH logo.png to THIS prompt — same file as cover.]

⚠️ The attached logo.png is the official VKS Tech logo. Use it as a placed asset in the top-right corner — do NOT redesign or interpret.

GENERATE A FLAT EDITORIAL HORIZONTAL BAR CHART.

This is the Hindi-language version of "contribution-en.png". Same exact layout, same colors, same bar widths/order — only the title, subtitle, and explanatory text are in Hindi (Devanagari). Technical column names (Top Waste, Ramp-Up Waste, etc.) remain in English consistent with Indian shop-floor practice.

Style: Wall Street Journal / Bloomberg infographic aesthetic. Flat shapes, clean type, generous whitespace.

Dimensions: 1600 × 900 px (16:9)

TOP ZONE:
- Eyebrow (orange #E85D26): "OPERATOR-DISCIPLINE PLAYBOOK · डायग्राम 1 OF 3"
- Title (navy #1A2744, Hind/Mukta Devanagari, 38pt bold): "0.9 Percentage Points असल में कहाँ से आती है"
- Subtitle (grey #5A5A5A, Devanagari, 16pt): "Total waste reduction में source-wise contribution। 87% savings सिर्फ़ 3 sources से आती है।"

MIDDLE ZONE — Bar chart (6 horizontal bars, top to bottom):

Y-axis labels (REMAIN IN ENGLISH consistent with shop-floor practice):
1. Ramp-Up Waste
2. Extra Waste (defect-cut)
3. Web Break Waste
4. Ramp-Down Waste
5. Sample Waste
6. Trim Waste

Bar widths and colors (same as English version):
- Bar 1: 43% width, BRIGHT ORANGE #E85D26
- Bar 2: 22% width, ORANGE #E85D26
- Bar 3: 22% width, ORANGE #E85D26
- Bar 4: 7% width, TEAL #0D8C7E
- Bar 5: 7% width, TEAL #0D8C7E
- Bar 6: 0% (thin grey line), GREY #5A5A5A

Percentage labels at bar ends (navy, Inter Bold 24pt):
"43%", "22%", "22%", "7%", "7%", "0%"

Per-jumbo detail (Hindi mixed with English, grey 11pt):
- "हर jumbo ~10 kg बचाती है (poor 0.56% → good 0.19%)"
- "हर jumbo ~5 kg बचाती है (poor 0.26% → good 0.07%)"
- "हर jumbo ~5 kg बचाती है (target ZERO; +0.5% per event) — next blog में cover"
- "हर jumbo ~1.5 kg बचाती है (poor 0.09% → good 0.04%)"
- "हर jumbo ~1.5 kg बचाती है (poor 0.09% → good 0.04%)"
- "structural — discipline से change नहीं होती"

BOTTOM ZONE — Callout box in navy with orange accent line on left:
"87% savings TEEN behaviors पर focus करने से आती है:"
"(1) Start-up पर OD control discipline  ·  (2) Defects पर Early-stopping reflex  ·  (3) Web break elimination (series का next blog)"

LOGO: Top-right corner, 80×80 px on white square badge.

FOOTER: Small grey text bottom-right: "Source: VKS Tech · Blog #24 का Companion"

COLORS: Brand palette only — navy #1A2744, orange #E85D26, teal #0D8C7E, white, grey.

TYPOGRAPHY: Hind or Mukta Devanagari for Hindi text. Inter for English (column names, percentages).

WHAT TO AVOID:
- No pie chart (bar chart only)
- No 3D / gradients
- Devanagari script must render correctly
- Keep layout IDENTICAL to contribution-en.png — only language changes
```


═══════════════════════════════════════════════════
═══════════════════════════════════════════════════

# IMAGE 4 of 7 — PER-JUMBO TRACKING FORMAT, ENGLISH (`format-en.png`)

**Filename:** `format-en.png`
**Dimensions:** 1600 × 900 px (16:9)
**Style:** Flat editorial diagram (WSJ/Bloomberg aesthetic) — NOT photorealistic

## Concept

Show the per-jumbo tracking format as a clean visual diagram. The 12 columns visualised as a horizontal "spreadsheet row" mockup with each column labeled and color-coded by what it tracks. Below or alongside, a small geometric diagram showing the jumbo geometry insight (Top→Ramp-Down, Bottom→Ramp-Up).

Editorial flat-design — like a financial newspaper infographic. Clean lines, abundant white space, single accent color per category.

## Layout

═══ TOP THIRD: TITLE + INTRO ═══

Top-left: Small uppercase eyebrow text in orange:
> "OPERATOR-DISCIPLINE PLAYBOOK · DIAGRAM 2 OF 3"

Below it, large navy bold title (Inter Bold, 38pt):
> "Per-Jumbo Waste Tracking Format"

Subtitle in grey (Inter, 16pt):
> "12 columns. Filled at the slitter for every jumbo. Operator-wise attribution exposes where the waste comes from."

═══ MIDDLE: THE FORMAT VISUALISED ═══

A horizontal "spreadsheet header strip" mockup occupying ~60% of the image width, centered. Each of the 12 columns rendered as a small block with its label, like a database schema visualisation. Color-coded by category:

| Block | Label | Color (background) | Color (text) |
|---|---|---|---|
| 1 | Jumbo No. | light grey #E8E8E8 | navy text |
| 2 | Met Operator | light grey #E8E8E8 | navy text |
| 3 | Jumbo Weight (kg) | cream #FAF9F6 | navy text |
| 4 | Jumbo Length (m) | cream #FAF9F6 | navy text |
| 5 | **Top Waste (kg)** | **orange #E85D26** (highlighted) | white text |
| 6 | Sample Waste (kg) | teal #0D8C7E | white text |
| 7 | Trim Waste (mm) | teal #0D8C7E | white text |
| 8 | **Bottom Waste (kg)** | **orange #E85D26** (highlighted) | white text |
| 9 | Extra Waste (kg) | navy #1A2744 | white text |
| 10 | Reason of Extra Waste | navy #1A2744 | white text |
| 11 | Total Waste (kg) | dark grey #5A5A5A | white text |
| 12 | Waste % | dark grey #5A5A5A | white text |

The Top Waste and Bottom Waste columns are visually emphasized — slightly larger, with subtle glow or thicker border — because they are the central insight of the format.

═══ BOTTOM THIRD: GEOMETRY INSIGHT DIAGRAM ═══

A side-by-side comparison panel:

**LEFT SIDE — "On the Metalliser":**
A simple cross-section of a jumbo being wound. Show the jumbo as a circle with a clear core and outer layer. Two arrows:
- "FIRST metres metallised → wound at CORE" (arrow pointing to the inside of the circle, labeled "Ramp-UP waste" in orange)
- "LAST metres metallised → wound at OUTER LAYER" (arrow pointing to the outside of the circle, labeled "Ramp-DOWN waste" in orange)

**RIGHT SIDE — "On the Slitter":**
The same jumbo cross-section, with two arrows showing the slitter's outside-in unwind direction:
- "FIRST cut → OUTER LAYER → 'Top Waste' on format" (orange highlighted, connecting back to Ramp-Down)
- "LAST cut → CORE → 'Bottom Waste' on format" (orange highlighted, connecting back to Ramp-Up)

Between the two panels, a horizontal arrow with the label "Wound at metalliser → Unwound at slitter (outside-in)"

Color this diagram subtly — light backgrounds, strong navy outlines, orange for the highlighted insights.

═══ BOTTOM-RIGHT FOOTER ═══

Small text bottom-right (grey, Inter 12pt):
> "Source: VKS Tech · Companion to Blog #24"

## Logo placement

Top-right corner: 80×80 px logo on a white square badge with subtle navy border. No "VKS Tech" text needed — just the logo mark.

## What to AVOID

- Do NOT make this a photo or photorealistic
- Do NOT use cartoon-style illustrations
- Do NOT use 3D rendering
- Keep type tight, geometry clean, lots of white space
- The 12-column strip should look like a real spreadsheet header, not a busy diagram
- Avoid heavy gradients except for subtle depth on the highlighted columns

## Prompt for Gemini / similar AI image generator

```
[ATTACH logo.png to THIS prompt — same file as cover.]

⚠️ The attached logo.png is the official VKS Tech logo. Use it as a placed asset in the top-right corner — do NOT redesign or interpret.

GENERATE A FLAT EDITORIAL DIAGRAM (not photo, not 3D, not illustration).

Style: Wall Street Journal / Bloomberg infographic aesthetic. Flat geometric shapes, clean type, generous whitespace, restricted color palette.

Dimensions: 1600 × 900 px (16:9)

LAYOUT — three horizontal zones:

TOP ZONE (top 25%):
- Small uppercase eyebrow text top-left in orange (#E85D26): "OPERATOR-DISCIPLINE PLAYBOOK · DIAGRAM 2 OF 3"
- Below it, large navy (#1A2744) bold title: "Per-Jumbo Waste Tracking Format"
- Subtitle in grey (#5A5A5A): "12 columns. Filled at the slitter for every jumbo. Operator-wise attribution exposes where the waste comes from."

MIDDLE ZONE (middle 40%):
A horizontal strip showing the 12 columns of the tracking format as labeled blocks. Render as a database-schema-style row:
1. Jumbo No. — light grey #E8E8E8 background, navy text
2. Met Operator — light grey #E8E8E8 background, navy text
3. Jumbo Weight (kg) — cream #FAF9F6 background, navy text
4. Jumbo Length (m) — cream #FAF9F6 background, navy text
5. Top Waste (kg) — ORANGE #E85D26 background, white text, EMPHASIZED with thicker border
6. Sample Waste (kg) — teal #0D8C7E background, white text
7. Trim Waste (mm) — teal #0D8C7E background, white text
8. Bottom Waste (kg) — ORANGE #E85D26 background, white text, EMPHASIZED with thicker border
9. Extra Waste (kg) — navy #1A2744 background, white text
10. Reason of Extra Waste — navy #1A2744 background, white text
11. Total Waste (kg) — dark grey #5A5A5A background, white text
12. Waste % — dark grey #5A5A5A background, white text

Top Waste and Bottom Waste columns are VISUALLY EMPHASIZED (slightly larger, thicker border) because they are the central insight of the format.

BOTTOM ZONE (bottom 35%):
A side-by-side geometry insight diagram:

LEFT PANEL — "On the Metalliser (winding direction)":
A simple cross-section circle representing a jumbo. Show clear inner core and outer layer.
- Arrow pointing INTO the core: "FIRST metres metallised — wound at CORE" labeled "Ramp-UP waste" in orange
- Arrow pointing TO the outer ring: "LAST metres metallised — wound at OUTER LAYER" labeled "Ramp-DOWN waste" in orange

RIGHT PANEL — "On the Slitter (outside-in unwinding)":
The same cross-section circle, now with the slitter unwinding outside-in:
- Arrow from OUTER LAYER outward: "FIRST cut → OUTER LAYER → 'Top Waste' on format" (orange, connecting back to Ramp-Down concept from left panel)
- Arrow from CORE outward: "LAST cut → CORE → 'Bottom Waste' on format" (orange, connecting back to Ramp-Up concept)

Between the two panels: a horizontal arrow with text "Wound at metalliser → Unwound at slitter (outside-in)"

This diagram explains why the slitter operator's "Top Waste" reflects the metalliser operator's ramp-DOWN discipline, and the "Bottom Waste" reflects ramp-UP discipline.

LOGO: Top-right corner, 80×80 px logo on a white square badge with subtle navy border. No additional "VKS Tech" text.

FOOTER: Small grey text bottom-right: "Source: VKS Tech · Companion to Blog #24"

COLORS: Use only the brand palette — navy #1A2744, orange #E85D26, teal #0D8C7E, cream #FAF9F6, light grey #E8E8E8, dark grey #5A5A5A. NO red anywhere except orange.

TYPOGRAPHY: Inter or Söhne (sans-serif). Navy bold for title (38pt). Grey regular for subtitle (16pt). White on colored blocks for column labels (10-11pt). Mono small caps for eyebrow text (14pt).

WHAT TO AVOID:
- No photographic elements
- No 3D rendering or cartoon illustration
- No emoji or icon clutter
- Keep negative space generous — this is editorial design, not a busy infographic
```


═══════════════════════════════════════════════════
═══════════════════════════════════════════════════

# IMAGE 5 of 7 — PER-JUMBO TRACKING FORMAT, HINDI (`format-hi.png`)

**Filename:** `format-hi.png`
**Dimensions:** 1600 × 900 px (16:9)
**Style:** Flat editorial diagram — same architecture as English version, Hindi text

## Concept

Identical layout to `format-en.png` but with Hindi-language labels and explanatory text. The 12 column blocks keep their English column names (since Indian shop floors use English column headers in formats), but the title, subtitle, and explanatory annotations are in Hindi/Devanagari.

## Layout differences from English version

═══ TOP ZONE ═══

Eyebrow text (orange):
> "OPERATOR-DISCIPLINE PLAYBOOK · डायग्राम 2 OF 3"

Main title (navy, Hind/Mukta Devanagari, 38pt bold):
> "Per-Jumbo Waste Tracking Format"

Subtitle (grey, Hind/Mukta, 16pt):
> "12 columns। हर jumbo के लिए slitter पर fill होता है। Operator-wise attribution expose करती है कि waste कहाँ से आ रही है।"

═══ MIDDLE ZONE — Column labels ═══

The 12 column blocks keep ENGLISH labels (consistent with how Indian shop floors actually fill these formats). Same colors, same emphasis on Top Waste and Bottom Waste.

═══ BOTTOM ZONE — Geometry insight in Hindi ═══

LEFT PANEL — "Metalliser पर (winding direction)":
- "पहले metalised metres — CORE पर wound" → labeled "Ramp-UP waste" in orange
- "Last metalised metres — OUTER LAYER पर wound" → labeled "Ramp-DOWN waste" in orange

RIGHT PANEL — "Slitter पर (outside-in unwinding)":
- "FIRST cut → OUTER LAYER → format पर 'Top Waste'" (orange)
- "LAST cut → CORE → format पर 'Bottom Waste'" (orange)

Between panels: "Metalliser पर wound → Slitter पर unwound (outside-in)"

═══ FOOTER ═══

> "Source: VKS Tech · Blog #24 का Companion"

## Prompt for Gemini

```
[ATTACH logo.png to THIS prompt — same file as cover.]

⚠️ The attached logo.png is the official VKS Tech logo. Use it as a placed asset in the top-right corner — do NOT redesign or interpret.

GENERATE A FLAT EDITORIAL DIAGRAM (not photo, not 3D).

This is the Hindi-language version of "format-en.png". Same exact layout, same colors, same column blocks — only the title, subtitle, panel headers, and explanatory annotations are translated to Hindi (Devanagari script). The 12 column labels themselves remain in English (consistent with Indian shop-floor practice).

Style: Wall Street Journal / Bloomberg infographic aesthetic. Flat shapes, clean type, generous whitespace.

Dimensions: 1600 × 900 px (16:9)

TOP ZONE:
- Eyebrow (orange #E85D26): "OPERATOR-DISCIPLINE PLAYBOOK · डायग्राम 2 OF 3"
- Title (navy #1A2744, Hind/Mukta Devanagari, 38pt bold): "Per-Jumbo Waste Tracking Format"
- Subtitle (grey, Devanagari, 16pt): "12 columns। हर jumbo के लिए slitter पर fill होता है। Operator-wise attribution expose करती है कि waste कहाँ से आ रही है।"

MIDDLE ZONE — 12 column blocks (LABELS REMAIN IN ENGLISH, same colors as English version):
1. Jumbo No. — light grey
2. Met Operator — light grey
3. Jumbo Weight (kg) — cream
4. Jumbo Length (m) — cream
5. Top Waste (kg) — ORANGE, EMPHASIZED
6. Sample Waste (kg) — teal
7. Trim Waste (mm) — teal
8. Bottom Waste (kg) — ORANGE, EMPHASIZED
9. Extra Waste (kg) — navy
10. Reason of Extra Waste — navy
11. Total Waste (kg) — dark grey
12. Waste % — dark grey

BOTTOM ZONE — Geometry insight in Devanagari:

LEFT PANEL — "Metalliser पर (winding direction)":
Cross-section circle of a jumbo with arrows:
- Arrow into core: "पहले metalised metres — CORE पर wound" labeled "Ramp-UP waste" (orange)
- Arrow to outer ring: "Last metalised metres — OUTER LAYER पर wound" labeled "Ramp-DOWN waste" (orange)

RIGHT PANEL — "Slitter पर (outside-in unwinding)":
Same circle with slitter direction:
- "FIRST cut → OUTER LAYER → format पर 'Top Waste'" (orange)
- "LAST cut → CORE → format पर 'Bottom Waste'" (orange)

Between panels: "Metalliser पर wound → Slitter पर unwound (outside-in)"

LOGO: Top-right corner, 80×80 px logo, white square badge with navy border.

FOOTER: Small grey text bottom-right: "Source: VKS Tech · Blog #24 का Companion"

COLORS: Brand palette only — navy #1A2744, orange #E85D26, teal #0D8C7E, cream #FAF9F6, light grey #E8E8E8.

TYPOGRAPHY: Hind or Mukta Devanagari for Hindi text. Inter for English column labels and any Latin text.

WHAT TO AVOID:
- No photographic elements
- Devanagari script must render correctly — verify the matras and conjuncts
- Keep the layout IDENTICAL to format-en.png — only language changes, not architecture
```


═══════════════════════════════════════════════════
═══════════════════════════════════════════════════

# IMAGE 6 of 7 — 5 DISCIPLINES, ENGLISH (`5-disciplines-en.png`)

**Filename:** `5-disciplines-en.png`
**Dimensions:** 1600 × 900 px (16:9)
**Style:** Flat editorial diagram — 5 vertical pillars / cards visualising the 5 operator disciplines

## Concept

The 5 operator disciplines as 5 vertical pillars (or cards) arranged horizontally across the image. Each pillar gets its own color from the brand palette, with a number, a title, and a one-line description. Architectural / structural feel — these are the "five pillars" of metallised waste reduction.

Editorial flat-design with a slight 3D feel (subtle drop shadows on cards, clean geometric architecture). NOT photorealistic.

## Layout

═══ TOP THIRD: TITLE + INTRO ═══

Eyebrow text (orange, uppercase):
> "OPERATOR-DISCIPLINE PLAYBOOK · DIAGRAM 3 OF 3"

Main title (navy bold, 38pt):
> "5 Disciplines That Cut Waste in Half"

Subtitle (grey, 16pt):
> "From 1.8% baseline to 0.9% achievable — 5 operator behaviors. No new equipment. Capex required: zero."

═══ MIDDLE: 5 PILLARS ═══

Five vertical card/pillars arranged horizontally, equally spaced. Each card is approximately 240px wide × 480px tall, with a 24px gap between cards.

Each card has 4 zones from top to bottom:

1. **Number badge (top, 80px tall)** — Large numeral 1-5 in white on a colored circle (the card's accent color)
2. **Title (next 100px)** — Discipline name in navy bold, 22pt, 2 lines max
3. **Description (next 200px)** — One-sentence explanation in grey, 14pt
4. **Outcome strip (bottom 100px)** — Key benchmark/outcome in white on a colored bar at the card's bottom edge

The 5 cards (left to right):

| Card | Number color | Discipline | Description | Outcome strip |
|---|---|---|---|---|
| 1 | Orange #E85D26 | OD Control at Start-Up | Watch first 100m OD reading. Slow ramp if fluctuation >±5%. | Ramp-Up waste: ~5 kg per jumbo |
| 2 | Teal #0D8C7E | Source Shutter Discipline at Stop | Close source-section shutter within 5 sec of stop signal. | Ramp-Down waste: ~1 kg per jumbo |
| 3 | Orange #E85D26 | Sample-Cut Restraint | Cut max 20m for QC. Document any deviation. | Sample waste: ~1 kg per jumbo |
| 4 | Teal #0D8C7E | Trim Planning Per Order | Calculate trim before slitter set-up. Centred metallising. | Trim waste held at 0.5% |
| 5 | Orange #E85D26 | Stop-On-Warning Reflex | Boat dip / pinhole / OD shift → stop within 30 sec. | Defect waste minimised |

Each card has a soft drop shadow (8px offset, 16px blur, 15% opacity) and a clean white background.

═══ BOTTOM ZONE — Architectural footer ═══

Across the bottom of the cards, a thin "foundation" bar in navy with white text:
> "Foundation: Per-Jumbo Tracking Format with operator-wise attribution"

This visually anchors the 5 pillars on a single foundation — emphasizing that the disciplines need the format to work.

═══ BOTTOM-RIGHT FOOTER ═══

> "Source: VKS Tech · Companion to Blog #24"

## Logo placement

Top-right corner: 80×80 px logo on a white square badge.

## What to AVOID

- Do NOT make this 3D / isometric (the cards have subtle shadow only)
- Do NOT use icons inside cards (they should be type-driven, clean)
- Do NOT add decorative elements — cards stand on their own
- Lots of whitespace between cards — don't crowd

## Prompt for Gemini

```
[ATTACH logo.png to THIS prompt — same file as cover.]

⚠️ The attached logo.png is the official VKS Tech logo. Use it as a placed asset in the top-right corner — do NOT redesign or interpret.

GENERATE A FLAT EDITORIAL DIAGRAM showing 5 architectural pillars/cards.

Style: Editorial flat-design with subtle depth (light drop shadows on cards). NOT photorealistic, NOT 3D, NOT cartoon.

Dimensions: 1600 × 900 px (16:9)

LAYOUT — three zones:

TOP ZONE (top 25%):
- Eyebrow text (orange #E85D26, uppercase): "OPERATOR-DISCIPLINE PLAYBOOK · DIAGRAM 3 OF 3"
- Title (navy #1A2744 bold, 38pt): "5 Disciplines That Cut Waste in Half"
- Subtitle (grey #5A5A5A, 16pt): "From 1.8% baseline to 0.9% achievable — 5 operator behaviors. No new equipment. Capex required: zero."

MIDDLE ZONE (middle 60%):
Five vertical cards arranged horizontally, equally spaced. Each card ~240×480 px with 24px gaps.

Each card has 4 zones top-to-bottom:
1. Number badge (top): Large numeral 1-5 in white on a colored circle (card's accent color)
2. Title (navy bold, 22pt, 2 lines max)
3. Description (grey, 14pt, one sentence)
4. Outcome strip (bottom): white text on colored bar (card's accent color)

THE 5 CARDS (left to right):

CARD 1 (orange #E85D26 accent):
- Number: 1 on orange circle
- Title: "OD Control at Start-Up"
- Description: "Watch first 100m OD reading. Slow ramp if fluctuation >±5%."
- Outcome bar (orange): "Ramp-Up waste: ~5 kg per jumbo"

CARD 2 (teal #0D8C7E accent):
- Number: 2 on teal circle
- Title: "Source Shutter Discipline at Stop"
- Description: "Close source-section shutter within 5 sec of stop signal."
- Outcome bar (teal): "Ramp-Down waste: ~1 kg per jumbo"

CARD 3 (orange #E85D26 accent):
- Number: 3 on orange circle
- Title: "Sample-Cut Restraint"
- Description: "Cut max 20m for QC. Document any deviation."
- Outcome bar (orange): "Sample waste: ~1 kg per jumbo"

CARD 4 (teal #0D8C7E accent):
- Number: 4 on teal circle
- Title: "Trim Planning Per Order"
- Description: "Calculate trim before slitter set-up. Centred metallising."
- Outcome bar (teal): "Trim waste held at 0.5%"

CARD 5 (orange #E85D26 accent):
- Number: 5 on orange circle
- Title: "Stop-On-Warning Reflex"
- Description: "Boat dip / pinhole / OD shift → stop within 30 sec."
- Outcome bar (orange): "Defect waste minimised"

Each card: white background, soft drop shadow (8px offset, 16px blur, 15% opacity), clean rounded corners (8px radius).

BOTTOM ZONE (bottom 15%):
A horizontal foundation bar in navy (#1A2744) spanning the full width below the cards, with white text centered:
"Foundation: Per-Jumbo Tracking Format with operator-wise attribution"

This visually anchors the 5 pillars on a single foundation.

LOGO: Top-right corner, 80×80 px logo on a white square badge with subtle navy border.

FOOTER: Small grey text bottom-right: "Source: VKS Tech · Companion to Blog #24"

COLORS: Only brand palette — navy #1A2744, orange #E85D26, teal #0D8C7E, white, light grey, dark grey #5A5A5A.

TYPOGRAPHY: Inter or Söhne sans-serif. Navy bold for title (38pt) and card titles (22pt). Grey regular for subtitle and descriptions. White for numbers and outcome strips.

WHAT TO AVOID:
- No 3D / isometric rendering
- No icons inside cards (type-driven only)
- No decorative flourishes
- Generous whitespace — don't crowd cards
- No photographic elements
```


═══════════════════════════════════════════════════
═══════════════════════════════════════════════════

# IMAGE 7 of 7 — 5 DISCIPLINES, HINDI (`5-disciplines-hi.png`)

**Filename:** `5-disciplines-hi.png`
**Dimensions:** 1600 × 900 px (16:9)
**Style:** Same architecture as English version — Hindi/Devanagari language

## Layout differences from English

═══ TOP ZONE ═══

Eyebrow (orange):
> "OPERATOR-DISCIPLINE PLAYBOOK · डायग्राम 3 OF 3"

Title (navy, Hind/Mukta Devanagari, 38pt bold):
> "5 Disciplines जो Waste को आधा कर देती हैं"

Subtitle (grey, Devanagari, 16pt):
> "1.8% baseline से 0.9% achievable तक — 5 operator behaviors। नया equipment नहीं। Capex required: zero।"

═══ THE 5 CARDS (titles + descriptions in Hindi, technical terms remain in English) ═══

CARD 1 (orange):
- Title: "Start-Up पर OD Control"
- Description: "पहले 100m OD reading watch करो। ±5% से ज़्यादा fluctuation पर ramp slow करो।"
- Outcome bar: "Ramp-Up waste: हर jumbo ~5 kg"

CARD 2 (teal):
- Title: "Stop पर Source Shutter Discipline"
- Description: "Stop signal के 5 seconds के अंदर source-section shutter close करो।"
- Outcome bar: "Ramp-Down waste: हर jumbo ~1 kg"

CARD 3 (orange):
- Title: "Sample-Cut Restraint"
- Description: "QC के लिए max 20m cut। Deviation document करो।"
- Outcome bar: "Sample waste: हर jumbo ~1 kg"

CARD 4 (teal):
- Title: "Order के हिसाब से Trim Planning"
- Description: "Slitter set-up से पहले trim calculate करो। Centred metallising।"
- Outcome bar: "Trim waste 0.5% पर hold"

CARD 5 (orange):
- Title: "Warning पर Stop-Reflex"
- Description: "Boat dip / pinhole / OD shift → 30 seconds के अंदर stop।"
- Outcome bar: "Defect waste minimised"

═══ BOTTOM FOUNDATION BAR (Hindi) ═══

> "Foundation: Operator-wise attribution के साथ Per-Jumbo Tracking Format"

═══ FOOTER ═══

> "Source: VKS Tech · Blog #24 का Companion"

## Prompt for Gemini

```
[ATTACH logo.png to THIS prompt — same file as cover.]

⚠️ The attached logo.png is the official VKS Tech logo. Use it as a placed asset in the top-right corner — do NOT redesign or interpret.

GENERATE A FLAT EDITORIAL DIAGRAM showing 5 architectural pillars/cards.

This is the Hindi-language version of "5-disciplines-en.png". Same exact layout, same colors, same architecture — only the language is Hindi (Devanagari script). Technical terms (OD, slitter, trim, OD reading, OEE, etc.) remain in English, consistent with Indian shop-floor practice.

Style: Editorial flat-design with subtle depth (light drop shadows on cards). NOT photorealistic, NOT 3D.

Dimensions: 1600 × 900 px (16:9)

TOP ZONE:
- Eyebrow (orange #E85D26): "OPERATOR-DISCIPLINE PLAYBOOK · डायग्राम 3 OF 3"
- Title (navy #1A2744 bold, Hind/Mukta Devanagari, 38pt): "5 Disciplines जो Waste को आधा कर देती हैं"
- Subtitle (grey #5A5A5A, Devanagari, 16pt): "1.8% baseline से 0.9% achievable तक — 5 operator behaviors। नया equipment नहीं। Capex required: zero।"

MIDDLE ZONE — 5 CARDS (240×480 each, 24px gaps):

CARD 1 (orange #E85D26 accent):
- Number: 1 on orange circle
- Title: "Start-Up पर OD Control"
- Description: "पहले 100m OD reading watch करो। ±5% से ज़्यादा fluctuation पर ramp slow करो।"
- Outcome bar (orange): "Ramp-Up waste: हर jumbo ~5 kg"

CARD 2 (teal #0D8C7E accent):
- Number: 2 on teal circle
- Title: "Stop पर Source Shutter Discipline"
- Description: "Stop signal के 5 seconds के अंदर source-section shutter close करो।"
- Outcome bar (teal): "Ramp-Down waste: हर jumbo ~1 kg"

CARD 3 (orange accent):
- Number: 3 on orange circle
- Title: "Sample-Cut Restraint"
- Description: "QC के लिए max 20m cut। Deviation document करो।"
- Outcome bar (orange): "Sample waste: हर jumbo ~1 kg"

CARD 4 (teal accent):
- Number: 4 on teal circle
- Title: "Order के हिसाब से Trim Planning"
- Description: "Slitter set-up से पहले trim calculate करो। Centred metallising।"
- Outcome bar (teal): "Trim waste 0.5% पर hold"

CARD 5 (orange accent):
- Number: 5 on orange circle
- Title: "Warning पर Stop-Reflex"
- Description: "Boat dip / pinhole / OD shift → 30 seconds के अंदर stop।"
- Outcome bar (orange): "Defect waste minimised"

Each card: white background, soft drop shadow (8px offset, 16px blur, 15% opacity), 8px rounded corners.

BOTTOM ZONE — Foundation bar in navy across full width:
"Foundation: Operator-wise attribution के साथ Per-Jumbo Tracking Format"

LOGO: Top-right corner, 80×80 px on white square badge.

FOOTER: Small grey text bottom-right: "Source: VKS Tech · Blog #24 का Companion"

COLORS: Brand palette — navy #1A2744, orange #E85D26, teal #0D8C7E, white, grey #5A5A5A.

TYPOGRAPHY: Hind or Mukta Devanagari for Hindi text. Inter for English technical terms. Card titles 22pt bold navy. Descriptions 14pt grey. White for numbers and outcome strips.

WHAT TO AVOID:
- No 3D / isometric rendering
- Devanagari script must render correctly — verify matras and conjuncts
- Keep layout IDENTICAL to 5-disciplines-en.png — only language changes
- No icons or decorative elements
```


═══════════════════════════════════════════════════

# 📋 GENERATION CHECKLIST

After generating, verify each image:

- [ ] **`cover.png`** — Photoreal scene + bilingual hero numbers "1.8% → 0.9%" + logo top-right
- [ ] **`contribution-en.png`** — Horizontal bar chart with 6 bars (43%, 22%, 22%, 7%, 7%, 0%) + insight callout + English language
- [ ] **`contribution-hi.png`** — Same layout as contribution-en, Hindi text in titles/callout
- [ ] **`format-en.png`** — 12 columns shown + geometry insight + English language
- [ ] **`format-hi.png`** — Same layout as format-en, Hindi text in titles/annotations
- [ ] **`5-disciplines-en.png`** — 5 cards + foundation bar + English language
- [ ] **`5-disciplines-hi.png`** — Same layout as 5-disciplines-en, Hindi text in titles

For each image, check:
1. Logo correct? (V=green, K=blue, S=red, tri-color heart shape)
2. Brand colors used correctly? (navy, orange, teal — NO red except orange)
3. Typography rendering correctly? (Devanagari script for Hindi)
4. Hero numbers prominent (cover) or column emphasis correct (format) or 3 dominant orange bars (contribution)?

If any check fails, retry with logo re-attached, or use Plan B (manual logo composite).

**Save all 7 files in this folder, replacing any existing copies.** The HTML references them by filename only (e.g., `cover.png`), so naming must be exact.
