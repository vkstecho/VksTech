# 🎨 Gemini Image Prompts — Hub Blog: Cut Metalliser Downtime by 50%+

**Workflow:** ⚠️ ATTACH `logo.png` to EVERY prompt — all 5 images. Yes, every single one. Gemini's image generator does NOT reliably retrieve files from earlier turns in the chat — uploading each time is the only way to guarantee logo consistency across all images.
**Total images:** 5 (1 bilingual cover + 2 EN diagrams + 2 HI diagrams)
**Logo file:** `logo.png` is in this folder — attach it FRESH with every prompt (cover + all 4 inline diagrams = 5 attachments total). Do NOT rely on chat memory — Gemini's image gen does not retrieve files from prior turns reliably.
**IMPORTANT:** Attach `logo.png` to every prompt — including each inline diagram. Gemini's image generation does NOT reliably pull image files from prior turns; the only way to guarantee a consistent logo across all images is to attach the same file each time. Generating in the same chat session helps style continuity, but the LOGO specifically requires fresh attachment per prompt.
**Blog scope:** Strategic hub overview funnelling readers to Blog #22 (boat-set SMED) and Blog #23 (inter-cycle SMED)
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


## Style direction — magazine-cover photorealism with strategic wide view

This cover is a **photorealistic editorial photograph** with a wide strategic view of a metalliser plant — capturing the "big picture, two levers" decision-maker angle of the hub blog. NOT a flat illustration. Magazine-cover style with bilingual title overlay and a subtle strategic data element.

## Recommended dimensions
1600 × 900 px (16:9 aspect ratio)

## The photograph (full-bleed, fills entire image)

A photorealistic wide-angle shot of a metalliser plant floor in an Indian flexible packaging factory. Specific composition:

- **Foreground (slight blur):** Polished concrete factory floor with safety markings (yellow line edges, blue zone indicators). A metallic clipboard or a tablet showing a chart resting on a workbench (very small, barely-readable suggestion of "OEE %" or "Setup Time" — just enough to suggest data review without being heavy-handed).
- **Mid-ground (sharp focus):** A long horizontal cylindrical metalliser machine viewed from a slight three-quarter angle. Visible elements: the chamber, control panel with green/amber LEDs, the rewinder spool with metallised film. Industrial-grade machinery, clean and well-maintained.
- **Background (soft):** Plant architecture suggested — high ceiling, overhead lighting fixtures, faint outline of a second metalliser machine in the distance, factory walls. A subtle "morning shift" feel.
- **Lighting:** Cinematic overhead lighting (industrial pendant lights) plus a wash of natural light from a high window or skylight on the right side. Slight rim lighting on the machine. Calm, premium engineering atmosphere.
- **Mood:** Strategic, "this is your plant — what will you focus on?" Less close-up than Blog #22, more environmental/scene-setting.

**Camera spec:** Sony A7R IV equivalent, 24mm wide-angle lens, f/4, ISO 400, shutter 1/125. Slightly elevated camera angle (about 1.7m height, like an engineer's perspective walking through the plant). Photographic depth of field with mid-ground crisp.

## Magazine-cover title overlay

A subtle dark navy gradient overlays the **bottom 50% of the image** — fully transparent at the top of the gradient, ~85% opaque at the bottom.

In addition, two **subtle strategic markers** are overlaid on the photo (semi-transparent, look like editorial annotations):

- **Marker 1 (teal pill, near the metalliser):** "Inter-Cycle SMED →"
- **Marker 2 (orange pill, near the rewinder):** "Boat-Set SMED →"

These markers visually identify the "two levers" without being heavy-handed.

On the gradient at the bottom, the bilingual title stack:

**English title (large, white, BOLD, top of gradient):**
> Cut Metalliser Downtime by 50%+

**English subtitle (smaller, white, below title):**
> The 2 SMED Levers Process Engineers Should Know

**Hindi title (white, BOLD, Devanagari, below English subtitle):**
> Metalliser Downtime को 50%+ कम करें

**Hindi subtitle (white, smaller, Devanagari):**
> Process Engineers के लिए 2 SMED Levers

**Bottom strip (very thin teal #0D8C7E semi-transparent banner with white text):**
> +15-18 pp OEE  |  Zero capex  |  12-20 weeks  |  ₹15-25 lakh/month

## Logo placement (top-right corner)

Top-right corner: Uploaded logo.png on a small white circular badge (90×90 px diameter, slight drop shadow). Logo 80×80 px, 20px margin from edges. Below the badge, in white bold sans-serif: "VKS Tech".

## What to AVOID

- Do NOT show identifiable faces of any people
- Do NOT make this a flat illustration or vector
- Do NOT use stock-photo "boardroom strategy" or "hand pointing at chart" imagery
- Do NOT clutter the image with too many strategic markers
- Do NOT use red color anywhere
- Devanagari script must render correctly

## Prompt for Gemini / similar AI image generator

```
[ATTACH logo.png to THIS prompt — the official VKS Tech logo file. Note: I will attach this same file to every subsequent prompt in this batch. Gemini's image gen only reads images attached to the current prompt, so per-prompt attachment is required.]

⚠️ LOGO INSTRUCTIONS — READ CAREFULLY:

1. Use the uploaded logo.png EXACTLY as provided. Do NOT recreate or redesign it.
2. Place the logo on a small white circular badge (90×90 px) in the top-right corner.
3. NOTE FOR FUTURE PROMPTS: I will attach this same logo.png file to EVERY subsequent prompt in this batch. Do not assume future prompts will rely on this attachment via chat memory — each prompt will carry its own attachment of the same file.

═══════════════════════════════════════════════════

GENERATE A PHOTOREALISTIC MAGAZINE-COVER IMAGE.

Style: Premium strategic business magazine cover (think McKinsey Quarterly, Bloomberg Businessweek). Photorealistic editorial photograph with bilingual title overlay. NOT illustration, NOT vector, NOT infographic.

Dimensions: 1600 × 900 px (16:9)

THE PHOTOGRAPH (fills entire image, full-bleed):

Wide-angle photorealistic view of a metalliser plant floor in an Indian flexible packaging factory. Strategic, environmental shot — not close-up. Specifically:

- FOREGROUND (slight blur): Polished concrete factory floor with yellow safety line markings. A clipboard or tablet on a workbench, very small in frame, with a faint suggestion of "OEE %" data visible — subtle, not staged.

- MID-GROUND (SHARP FOCUS): A long horizontal cylindrical metalliser machine viewed from three-quarter angle. Visible: vacuum chamber, control panel with green/amber status LEDs, rewinder spool with metallised film, industrial maintenance walkway. Machine is clean, well-maintained.

- BACKGROUND (soft bokeh): Factory architecture — high ceiling, overhead industrial pendant lights, hint of a second metalliser in the far distance, plant walls.

- LIGHTING: Cinematic overhead lighting from industrial fixtures + soft natural light wash from a high window on the right. Slight rim lighting on machinery. "Morning shift" atmosphere.

- CAMERA: Sony A7R IV equivalent, 24mm wide-angle, f/4, ISO 400. Slightly elevated angle (~1.7m, engineer-walking-through-plant perspective). Mid-ground crisp, foreground/background bokeh.

- COLOR PALETTE: Natural industrial — cool steel tones, warm amber accent lights, polished floor reflections. NOT saturated.

STRATEGIC MARKERS (two subtle pill-shaped editorial annotations overlaid on the photo):

- Teal pill (#0D8C7E, semi-transparent, white text, ~18pt) near the metalliser machine: "Inter-Cycle SMED →"
- Orange pill (#E85D26, semi-transparent, white text, ~18pt) near the rewinder spool: "Boat-Set SMED →"

These markers identify the "two levers" without being heavy-handed.

MAGAZINE-COVER TITLE OVERLAY (hero-numbers magazine-cover polish):

Apply a dark navy (#1A2744) gradient over the bottom 55% of the image. Fully transparent at top, ~88% opaque at bottom. Text overlay is composed in 4 hierarchical layers — the "50%+" is the visual hero.

═══ LAYER 1: TOP BADGE (small, uppercase) ═══

Top of dark gradient, small horizontal pill or thin underline label:

"PROCESS ENGINEERING · STRATEGY GUIDE · 2026"

Format: Uppercase, white text, mono or condensed sans (IBM Plex Mono or Inter Tight), ~14pt, letter-spacing +2px, with a small orange (#E85D26) divider dot before the text.

═══ LAYER 2: HERO NUMBER (the visual anchor — DOMINANT) ═══

The single most important visual element on the cover:

"50%+"

Rendered ENORMOUS — approximately 220pt — using a bold display typeface (Bebas Neue, Anton, Oswald, or Bahnschrift Bold). The number should occupy roughly 40-45% of the image width. This is the "headline number" that stops scroll on LinkedIn.

COLOR TREATMENT: Vertical gradient — top of "50%+" starts in muted gray-orange (#B85530), middle in bright orange (#E85D26), bottom in vivid coral-orange (#FF7A45). The "+" symbol slightly larger and brighter than "50%".

EFFECTS: Subtle drop shadow (10px blur, 50% opacity navy) for depth. Letter-spacing -3px (very tight, premium feel). The number must DOMINATE the lower half of the image.

═══ LAYER 3: WRAPPING CONTEXT TEXT (smaller, white) ═══

Above the hero number, in clean sans (Inter or Söhne, ~32pt, REGULAR weight, white):

"Cut Metalliser Downtime by"

Below the hero number, in larger weight (Inter or Söhne, ~40pt, MEDIUM, white):

"The 2 SMED Levers Process Engineers Should Know"

Both lines white (#FFFFFF), generous breathing room around the hero number (24px+).

═══ LAYER 4: HINDI TITLE STACK (parallel, smaller scale) ═══

Below the English layer:

Hindi context above (Devanagari, Hind/Mukta, ~26pt, white, REGULAR):
"Metalliser Downtime को"

Hindi hero number (same orange-gradient display treatment, ~150pt — smaller than English but still dominant):
"50%+"

Hindi context below (Devanagari, ~30pt, white, MEDIUM):
"कम करें — Process Engineers के लिए 2 SMED Levers"

═══ LAYER 5: BOTTOM TAGLINE STRIP ═══

Very bottom — thin horizontal strip, center-justified uppercase text:

"+15-18 PP OEE  ·  ZERO CAPEX  ·  12-20 WEEKS  ·  ₹15-25 LAKH/MONTH"

Format: White on semi-transparent teal (#0D8C7E at 60% opacity) thin band (~36px tall). Mono or condensed sans, ~14pt, uppercase, letter-spacing +3px. Items separated by small orange dot "·".

═══ EDITORIAL POLISH RULES ═══

- HIERARCHY: 50%+ number > English wrapping text > Hindi hero number > Hindi wrapping text > badges
- NEGATIVE SPACE: At least 24px breathing room around the hero number
- WEIGHT CONTRAST: Display heavy on the number, regular/medium on context text, mono-light on metadata
- COLOR DISCIPLINE: White text + orange-gradient hero number + teal-tinted metadata. NO red anywhere.
- LETTER-SPACING: -3px on hero number (very tight), +2-3px on metadata strips
- The "50%+" must be readable at thumbnail size — LinkedIn scrollers should see "50%+" instantly even at 30% zoom

LOGO PLACEMENT (top-right corner):
Uploaded logo.png on white circular badge (90×90 px with drop shadow). Logo 80×80 px, 20px margin. Below: "VKS Tech" white bold.

CRITICAL CONSTRAINTS:
- Photorealistic photography, NOT illustration
- NO identifiable faces
- NO red color in the photograph
- NO stock-photo cliché imagery (boardroom strategy, hand pointing at chart)
- Devanagari MUST render correctly
- Strategic markers should look like editorial annotations, not cartoon labels
```

## Alternative prompt — single machine focus (simpler)

```
[ATTACH logo.png to THIS prompt — required for every image]

⚠️ Use uploaded logo.png EXACTLY. White circular badge top-right.

═══════════════════════════════════════════════════

PHOTOREALISTIC MAGAZINE-COVER IMAGE.

Dimensions: 1600 × 900 px

THE PHOTOGRAPH:
Photorealistic three-quarter view of a single metalliser machine in an Indian flexible packaging plant. Visible: vacuum chamber, control panel with green/amber LEDs, rewinder spool with metallised film, industrial floor. Cinematic side lighting from upper-left, slight overhead pendant light reflection on machine. Sony A7R IV, 35mm, f/4, ISO 400. Premium engineering atmosphere.

OVERLAY (hero-numbers magazine-cover style):
Dark navy gradient bottom 55% (transparent top, 88% opaque bottom).

LAYER 1 — Top badge: "PROCESS ENGINEERING · STRATEGY GUIDE · 2026" — uppercase white mono, 14pt, +2px letter-spacing.

LAYER 2 — HERO NUMBER (ENORMOUS, ~220pt): "50%+" in display font (Bebas Neue / Anton / Oswald), vertical orange gradient #B85530 → #E85D26 → #FF7A45. Subtle drop shadow. Letter-spacing -3px. Occupies 40-45% of image width — dominates the cover.

LAYER 3 — Wrapping text (white Inter/Söhne):
- Above (32pt regular): "Cut Metalliser Downtime by"
- Below (40pt medium): "The 2 SMED Levers Process Engineers Should Know"

LAYER 4 — Hindi parallel:
- Above (26pt regular Devanagari Hind/Mukta): "Metalliser Downtime को"
- Hindi hero number (150pt, same orange gradient): "50%+"
- Below (30pt medium Devanagari): "कम करें — Process Engineers के लिए 2 SMED Levers"

LAYER 5 — Bottom strip: Thin teal #0D8C7E semi-transparent band, white uppercase mono 14pt, +3px letter-spacing: "+15-18 PP OEE  ·  ZERO CAPEX  ·  12-20 WEEKS  ·  ₹15-25 LAKH/MONTH"

POLISH: Heavy hierarchy contrast (50%+ dominates), generous negative space, no red, Devanagari must render correctly.

TOP-RIGHT: Logo on white badge, "VKS Tech" below.

CONSTRAINTS: Photorealistic only. NO faces. NO red. Devanagari must render.
```

---

# 🇬🇧 IMAGE 2: 2 SMED Levers Comparison (English) — `2-levers-en.png`

**Dimensions:** 1600 × 900
**Placement in blog:** After "The 2 SMED Levers — At a Glance" comparison table in EN

```
[CRITICAL: ATTACH logo.png to THIS prompt — yes, the same file you attached to the cover prompt. Gemini's image generator does NOT reliably retrieve images from earlier turns. You MUST attach the file fresh with every prompt for consistent logo across all images.]

⚠️ LOGO INSTRUCTIONS — READ CAREFULLY:

1. Use the logo.png file attached to THIS prompt directly. Do NOT generate, redesign, or interpret the logo. Treat it as a placed visual asset — like dropping a sticker onto the canvas.

2. The logo is the official VKS Tech tri-color heart logo. Visual specs:
   - "V" rendered in GREEN (#2E8B57 or similar)
   - "K" rendered in BLUE (#1A2744 or navy blue)
   - "S" rendered in RED (#E85D26 or warm red)
   - Stylized heart shape integrated with the letters
   - These three letters together form "VKS"

3. STRICT RULES:
   - Do NOT invent a new logo design
   - Do NOT use a generic heart icon
   - Do NOT use Microsoft clipart or stock heart symbols
   - Do NOT change the colors of V, K, or S
   - Do NOT add any decorative flourishes
   - Use the EXACT pixel-for-pixel logo from the file attached to this prompt

4. If for any reason the attached logo.png is unclear, unreadable, or you cannot use it directly, output a placeholder note (e.g., "[LOGO PLACEHOLDER]") and ask the user to re-attach — do NOT invent a logo from the visual description.

5. Place the logo as specified in the layout below. Treat it as a placed visual asset, not as a description to redraw.

The logo must look IDENTICAL across all images in this chat session — same colors, same shape, same proportions. Brand consistency is non-negotiable.

Create a clean side-by-side comparison infographic, 1600x900 px, on cream background (#FAF9F6).

TITLE at top (bold dark navy #1A2744, centered, 32pt):
"The 2 SMED Levers — Inter-Cycle vs Boat-Set"

SUBTITLE (orange #E85D26, italic, 16pt):
"Why frequency makes inter-cycle 9× more impactful per project-week"

MAIN VISUAL: Two large vertical panels side by side, separated by a thin divider:

LEFT PANEL — "INTER-CYCLE":
- Header: TEAL (#0D8C7E) background, white text, "LEVER 1: INTER-CYCLE SMED"
- Tagline below header: "Higher frequency, smaller per-event"
- Visual: A row of 13 small clock icons (representing 12-15 events/day)
- Stat block:
  • Frequency: 12-15/day per machine
  • Baseline: 28.5 min average
  • Target: 15 min
  • OEE gain: +14-16 pp
- Bottom callout: "Read: 2016 MET-4 Case Study"

RIGHT PANEL — "BOAT-SET":
- Header: ORANGE (#E85D26) background, white text, "LEVER 2: BOAT-SET SMED"
- Tagline below header: "Lower frequency, bigger per-event"
- Visual: A single larger clock icon (representing ~1.34 events/day)
- Stat block:
  • Frequency: ~1.34/day per machine
  • Baseline: 65 min average
  • Target: 35 min
  • OEE gain: +1-2 pp
- Bottom callout: "Read: 2017 MET-1 Case Study"

CENTER DIVIDER: A vertical line with a small navy badge in the middle showing "9× faster impact per project-week"

BOTTOM CALLOUT BANNER (navy, white text, 18pt bold):
"Start with INTER-CYCLE if your changeover is over 20 minutes today. Result: +15-18 pp combined OEE Availability."

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the logo.png file attached to THIS prompt. Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo.

STYLE: Clean editorial comparison infographic, Wall Street Journal aesthetic. NOT photo-realistic.

Use only brand colors: navy, orange, teal, cream. NO red. NO 3D. NO clipart.
```

---

# 🇮🇳 IMAGE 3: 2 SMED Levers Comparison (Hindi) — `2-levers-hi.png`

**Dimensions:** 1600 × 900
**Placement in blog:** After "2 SMED Levers — एक नज़र में" table in HI

```
[CRITICAL: ATTACH logo.png to THIS prompt — yes, the same file you attached to the cover prompt. Gemini's image generator does NOT reliably retrieve images from earlier turns. You MUST attach the file fresh with every prompt for consistent logo across all images.]

⚠️ LOGO INSTRUCTIONS — READ CAREFULLY:

1. Use the logo.png file attached to THIS prompt directly. Do NOT generate, redesign, or interpret the logo. Treat it as a placed visual asset — like dropping a sticker onto the canvas.

2. The logo is the official VKS Tech tri-color heart logo. Visual specs:
   - "V" rendered in GREEN (#2E8B57 or similar)
   - "K" rendered in BLUE (#1A2744 or navy blue)
   - "S" rendered in RED (#E85D26 or warm red)
   - Stylized heart shape integrated with the letters
   - These three letters together form "VKS"

3. STRICT RULES:
   - Do NOT invent a new logo design
   - Do NOT use a generic heart icon
   - Do NOT use Microsoft clipart or stock heart symbols
   - Do NOT change the colors of V, K, or S
   - Do NOT add any decorative flourishes
   - Use the EXACT pixel-for-pixel logo from the file attached to this prompt

4. If for any reason the attached logo.png is unclear, unreadable, or you cannot use it directly, output a placeholder note (e.g., "[LOGO PLACEHOLDER]") and ask the user to re-attach — do NOT invent a logo from the visual description.

5. Place the logo as specified in the layout below. Treat it as a placed visual asset, not as a description to redraw.

The logo must look IDENTICAL across all images in this chat session — same colors, same shape, same proportions. Brand consistency is non-negotiable.

Same side-by-side comparison as English version, with Hindi labels.

TITLE (Devanagari, navy, 32pt):
"2 SMED Levers — Inter-Cycle vs Boat-Set"

SUBTITLE (Devanagari, orange italic):
"Frequency क्यों inter-cycle को project-week of effort में 9× ज़्यादा impactful बनाती है"

LEFT PANEL — "INTER-CYCLE" (teal header):
- "LEVER 1: INTER-CYCLE SMED"
- Tagline (Hindi): "ज़्यादा frequency, हर event पर कम"
- 13 clock icons row
- Stat block:
  • Frequency: हर machine 12-15/day
  • Baseline: 28.5 min average
  • Target: 15 min
  • OEE gain: +14-16 pp
- Bottom callout (Hindi): "पढ़ें: 2016 MET-4 Case Study"

RIGHT PANEL — "BOAT-SET" (orange header):
- "LEVER 2: BOAT-SET SMED"
- Tagline (Hindi): "कम frequency, हर event पर बड़ा"
- 1 large clock icon
- Stat block:
  • Frequency: हर machine ~1.34/day
  • Baseline: 65 min average
  • Target: 35 min
  • OEE gain: +1-2 pp
- Bottom callout (Hindi): "पढ़ें: 2017 MET-1 Case Study"

CENTER DIVIDER: navy badge with Hindi text "Project-week में 9× faster impact"

BOTTOM CALLOUT BANNER (Devanagari, navy, white):
"अगर आपका changeover आज 20 minutes से ज़्यादा है, INTER-CYCLE से शुरू करें। Result: +15-18 pp combined OEE Availability।"

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the logo.png file attached to THIS prompt. Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo. in navy

STYLE: Same as English version. CRITICAL: Devanagari script must render correctly. Use Hind, Mukta, or Noto Sans Devanagari.

Use only brand colors. NO red. NO 3D. NO clipart.
```

---

# 🇬🇧 IMAGE 4: 4 Methodology Pillars (English) — `4-pillars-en.png`

**Dimensions:** 1600 × 1000
**Placement in blog:** After "The 4 Methodology Pillars" section header in EN

```
[CRITICAL: ATTACH logo.png to THIS prompt — yes, the same file you attached to the cover prompt. Gemini's image generator does NOT reliably retrieve images from earlier turns. You MUST attach the file fresh with every prompt for consistent logo across all images.]

⚠️ LOGO INSTRUCTIONS — READ CAREFULLY:

1. Use the logo.png file attached to THIS prompt directly. Do NOT generate, redesign, or interpret the logo. Treat it as a placed visual asset — like dropping a sticker onto the canvas.

2. The logo is the official VKS Tech tri-color heart logo. Visual specs:
   - "V" rendered in GREEN (#2E8B57 or similar)
   - "K" rendered in BLUE (#1A2744 or navy blue)
   - "S" rendered in RED (#E85D26 or warm red)
   - Stylized heart shape integrated with the letters
   - These three letters together form "VKS"

3. STRICT RULES:
   - Do NOT invent a new logo design
   - Do NOT use a generic heart icon
   - Do NOT use Microsoft clipart or stock heart symbols
   - Do NOT change the colors of V, K, or S
   - Do NOT add any decorative flourishes
   - Use the EXACT pixel-for-pixel logo from the file attached to this prompt

4. If for any reason the attached logo.png is unclear, unreadable, or you cannot use it directly, output a placeholder note (e.g., "[LOGO PLACEHOLDER]") and ask the user to re-attach — do NOT invent a logo from the visual description.

5. Place the logo as specified in the layout below. Treat it as a placed visual asset, not as a description to redraw.

The logo must look IDENTICAL across all images in this chat session — same colors, same shape, same proportions. Brand consistency is non-negotiable.

Create a clean 4-column or 2x2 grid framework diagram, 1600x1000 px, on cream background (#FAF9F6).

TITLE at top (bold dark navy #1A2744, centered, 32pt):
"The 4 Methodology Pillars Behind Both SMED Levers"

SUBTITLE (orange #E85D26, italic, 16pt):
"Process engineers who succeed at SMED apply these consistently"

MAIN VISUAL: Four equal columns (or 2x2 grid), each shaped like a Greek pillar/column standing on a base:

PILLAR 1 — "ECRS DISCIPLINE":
- Color: Teal (#0D8C7E) base + lighter teal column body
- Top icon: Four letter blocks "E C R S"
- Subtitle: "Eliminate, Combine, Rearrange, Simplify"
- Real example: "Apply to every step in your SOP, in that order"

PILLAR 2 — "WHY-WHY ANALYSIS":
- Color: Orange (#E85D26) base + lighter orange body
- Top icon: A "?" symbol with 5 levels cascading
- Subtitle: "5 levels deep on every step"
- Real example: "Most SOPs contain at least 3 redundant steps"

PILLAR 3 — "VIDEO REVIEW":
- Color: Purple (#7B3FA0) base + lighter purple body
- Top icon: A film/video play symbol with 0.5× tag
- Subtitle: "Watch your work at 0.5× speed"
- Real example: "Operators suggest changes within 10 minutes"

PILLAR 4 — "OPERATOR BOARD":
- Color: Navy (#1A2744) base + lighter navy body
- Top icon: A whiteboard with rows of names
- Subtitle: "Daily averages with operator names"
- Real example: "The cultural mechanism that makes gains stick"

ROOF/CAPSTONE on top of all four pillars (orange):
"+15-18 pp OEE Availability Gain"

BOTTOM FOUNDATION (navy):
"Process Engineering Excellence at Metalliser Plants"

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the logo.png file attached to THIS prompt. Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo.

STYLE: Clean architectural infographic, Toyota training manual aesthetic. NOT photo-realistic.

Use only brand colors: navy, orange, teal, purple, cream. NO red. NO 3D. NO clipart.
```

---

# 🇮🇳 IMAGE 5: 4 Methodology Pillars (Hindi) — `4-pillars-hi.png`

**Dimensions:** 1600 × 1000
**Placement in blog:** After "दोनों Levers के पीछे 4 Methodology Pillars" section header in HI

```
[CRITICAL: ATTACH logo.png to THIS prompt — yes, the same file you attached to the cover prompt. Gemini's image generator does NOT reliably retrieve images from earlier turns. You MUST attach the file fresh with every prompt for consistent logo across all images.]

⚠️ LOGO INSTRUCTIONS — READ CAREFULLY:

1. Use the logo.png file attached to THIS prompt directly. Do NOT generate, redesign, or interpret the logo. Treat it as a placed visual asset — like dropping a sticker onto the canvas.

2. The logo is the official VKS Tech tri-color heart logo. Visual specs:
   - "V" rendered in GREEN (#2E8B57 or similar)
   - "K" rendered in BLUE (#1A2744 or navy blue)
   - "S" rendered in RED (#E85D26 or warm red)
   - Stylized heart shape integrated with the letters
   - These three letters together form "VKS"

3. STRICT RULES:
   - Do NOT invent a new logo design
   - Do NOT use a generic heart icon
   - Do NOT use Microsoft clipart or stock heart symbols
   - Do NOT change the colors of V, K, or S
   - Do NOT add any decorative flourishes
   - Use the EXACT pixel-for-pixel logo from the file attached to this prompt

4. If for any reason the attached logo.png is unclear, unreadable, or you cannot use it directly, output a placeholder note (e.g., "[LOGO PLACEHOLDER]") and ask the user to re-attach — do NOT invent a logo from the visual description.

5. Place the logo as specified in the layout below. Treat it as a placed visual asset, not as a description to redraw.

The logo must look IDENTICAL across all images in this chat session — same colors, same shape, same proportions. Brand consistency is non-negotiable.

Same 4-pillar architectural diagram as English version, with Hindi labels.

TITLE (Devanagari, navy, 32pt):
"दोनों SMED Levers के पीछे 4 Methodology Pillars"

SUBTITLE (Devanagari, orange italic):
"SMED में succeed करने वाले process engineers इन्हें consistently apply करते हैं"

PILLAR 1 — "ECRS DISCIPLINE" (teal):
- Subtitle: "Eliminate, Combine, Rearrange, Simplify"
- Hindi example: "अपने SOP के हर step पर इसी order में apply करें"

PILLAR 2 — "WHY-WHY ANALYSIS" (orange):
- Subtitle (Hindi): "हर step पर 5 levels गहरा"
- Hindi example: "ज़्यादातर SOPs में कम से कम 3 redundant steps होते हैं"

PILLAR 3 — "VIDEO REVIEW" (purple):
- Subtitle (Hindi): "अपना काम 0.5× speed पर देखें"
- Hindi example: "Operators 10 minutes के अंदर changes suggest करते हैं"

PILLAR 4 — "OPERATOR BOARD" (navy):
- Subtitle (Hindi): "Operator names के साथ Daily averages"
- Hindi example: "Cultural mechanism जो gains stick रखता है"

ROOF/CAPSTONE (orange, Hindi):
"+15-18 pp OEE Availability Gain"

BOTTOM FOUNDATION (navy, Hindi):
"Metalliser Plants पर Process Engineering Excellence"

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the logo.png file attached to THIS prompt. Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo. in navy

STYLE: Same as English version. CRITICAL: Devanagari script must render correctly.

Use only brand colors. NO red. NO 3D. NO clipart.
```

---

# 📋 Image Generation Order

Recommended generation order:
1. **cover.png** (bilingual) — most critical, always-visible
2. **2-levers-en.png** + **2-levers-hi.png** — visual that anchors the entire blog premise
3. **4-pillars-en.png** + **4-pillars-hi.png** — methodology summary

Total: 5 images (1 bilingual cover + 4 inline = 2 EN + 2 HI)

---

# ✅ Publishing Checklist

Before going live with this hub blog:

- [ ] Attach `logo.png` to EVERY prompt — cover + each inline diagram (5 attachments total for this blog)
- [ ] After generation, visually compare logos across all 5 images — they should be identical because the same file is attached to each prompt. If any image's logo looks different, re-run that prompt with logo.png attached again, or use Plan B (manual composite — see troubleshoot block above)
- [ ] Whether you generate all images in one chat session or across sessions, attach `logo.png` to every single prompt — do not skip any
- [ ] Generate `cover.png` (bilingual)
- [ ] Generate inline diagrams (2 EN + 2 HI)
- [ ] Verify Devanagari script renders correctly in all Hindi versions
- [ ] Confirm Blog #22 and Blog #23 are already published with correct URLs
- [ ] Verify the 4 internal CTAs in each language section work correctly
- [ ] Test LinkedIn share preview (Open Graph image should be cover.png)

This blog is short (~1,400 words EN), strategic, and optimized to drive traffic to Blog #22 and Blog #23. It is the top of the SMED content funnel for VKS Tech.

---

# 🌐 Bilingual Image Pattern (Maintained)

Same as Blog #21, #22, #23:

| Image type | Language strategy | Example filenames |
|---|---|---|
| **Cover** | Single bilingual image (EN + HI on same image) | `cover.png` |
| **Inline diagrams** | Separate EN and HI versions, swap on language toggle | `2-levers-en.png`, `2-levers-hi.png` |
| **Logo/branding** | Always brand-color, no language text | `logo.png` |
