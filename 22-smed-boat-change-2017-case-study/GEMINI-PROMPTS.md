# 🎨 Gemini Image Prompts — Blog #22 SMED Boat Change Case Study

**Workflow:** Upload `logo.png` ONCE with the cover prompt → Gemini will recall it for all subsequent prompts in the same chat session
**Total images:** 7 (1 bilingual cover + 3 EN diagrams + 3 HI diagrams)
**Logo file:** `logo.png` is in this folder — upload it with the COVER prompt only; reference it by chat memory for inline diagrams
**IMPORTANT:** Generate all 7 images in the SAME chat session so Gemini retains the logo reference. If you start a new chat, re-upload the logo with the first prompt of that session.
**Blog scope:** Real 2017 MET-1 boat-set changeover SMED case study — 65 to 35 minutes
**Published:** April 2026 (9-year validation arc since 2017 project)



## ⚠️ IMPORTANT — IF THE LOGO COMES OUT WRONG

Gemini's image generation **does NOT always reliably remember uploaded image files across separate prompts** in the same chat session. Despite the strong instructions in each prompt, you may sometimes get an image where:
- The logo looks invented/redesigned (wrong shape, wrong colors)
- The logo is missing entirely
- The colors V (green), K (blue), S (red) don't match your actual logo

**When this happens, the fix is simple:**

1. **Re-upload `logo.png` directly with that specific prompt** — don't just say "use the logo from earlier"
2. Add this line at the very top of your prompt: **"Logo file is attached to THIS prompt — use it directly, do not reference earlier prompts."**
3. Re-generate that image

**Why this happens:** Gemini's chat memory works well for text but is less reliable for retaining specific image asset files across multiple generation calls. Each image generation can sometimes be treated as a fresh request.

**Recommended workflow for safety:**
- Always re-upload `logo.png` if generating images more than ~30 minutes apart
- Always re-upload `logo.png` after starting a new conversation
- If unsure, re-upload — it costs nothing extra and guarantees brand consistency

---

---

# 🌟 IMAGE 1: BILINGUAL COVER — `cover.png` (PHOTOREALISTIC)

## Style direction — magazine-cover photorealism

This cover is a **photorealistic editorial photograph** with bilingual title overlay — like a premium business magazine cover (McKinsey Quarterly, Harvard Business Review, Financial Times Weekend). It is NOT a flat illustration. The photograph carries the visual weight; the title overlay carries the message.

## Recommended dimensions
1600 × 900 px (16:9 aspect ratio for LinkedIn/web)

## The photograph (full-bleed, fills entire image)

A photorealistic close-up of a metalliser chamber and source area in an Indian flexible packaging plant. Specific elements that should be visible:

- **Foreground (sharp focus):** A row of ceramic evaporation boats (TiB2-BN, flat rectangular bar shape with raised side rims) seated on a metalliser source bar. The source bar has copper clamps and aluminium wires running across the boats. Close-up, almost macro lens feel.
- **Mid-ground (slightly soft):** The metalliser drum visible in the back, with a film web wrapping around it. Small specular highlights from chamber lights.
- **Background (soft bokeh):** Suggested vacuum chamber walls, faint glow of machine status lights (small green/amber LEDs), industrial environment.
- **Lighting:** Cinematic side lighting from upper-left, with subtle rim lighting on the boats and source bar to reveal ceramic surface textures and metallic reflections. Slight dramatic shadow falloff.
- **Mood:** Premium engineering, calm, focused, "this is real plant work."

**Camera spec:** Sony A7R IV equivalent, 50mm prime lens, f/2.8, ISO 400, shutter 1/125. Photographic depth of field — boats sharp, drum slightly soft, background bokeh.

## Magazine-cover title overlay

A subtle dark navy gradient overlays the **bottom 50% of the image** — fully transparent at the top of the gradient, ~85% opaque at the very bottom. This creates clean text legibility without obscuring the photo above.

On this gradient, the bilingual title stack is rendered in clean typography:

**English title (large, white, BOLD, top of gradient):**
> How I Cut Metalliser Boat Change Time from 65 to 35 Minutes

**Hindi title (slightly smaller, white, BOLD, below English, in Devanagari script):**
> मैंने Metalliser Boat Change Time को 65 से 35 Minutes तक कैसे लाया

**Subtitle (orange #E85D26, italic, smaller, below both titles, bilingual on one line):**
> A 2017 Case Study  |  एक 2017 Case Study

**Bottom strip (very thin teal #0D8C7E semi-transparent banner with white text, bottom edge):**
> 65 → 35 min  |  46% reduction  |  Zero capex  |  12-week project

## Logo placement (top-right corner)

Top-right corner: Place the uploaded logo.png file EXACTLY as provided (this is the master reference logo for all subsequent images in this chat). Size: 80×80 pixels, 20px margin from edges.

Because the photo background may have varying brightness, place the logo on a small **white circular badge** (90×90 px diameter, slight drop shadow) so it always reads cleanly. Below the badge, in white bold sans-serif (Inter font, 18pt): "VKS Tech".

Do NOT recreate or redesign the logo — use the uploaded file pixel-for-pixel.

## What to AVOID

- Do NOT make this a flat illustration, vector art, or infographic
- Do NOT use stock-photo "business handshake" or "engineer with clipboard" imagery
- Do NOT show identifiable faces of any people
- Do NOT use overly saturated colors — keep the photo's natural industrial palette
- Do NOT add text other than what's specified above
- Do NOT use red color anywhere in the photo or title overlay
- Devanagari (Hindi) text must render correctly — use a Hindi-supporting typeface like Hind, Mukta, or Noto Sans Devanagari

## Prompt for Gemini / similar AI image generator

```
[Upload logo.png attached with this prompt — THIS IS THE MASTER LOGO REFERENCE for all subsequent images in this chat session. Please retain this image file in chat memory.]

⚠️ LOGO INSTRUCTIONS — READ CAREFULLY:

1. Use the uploaded logo.png file EXACTLY as provided in this prompt. Do NOT recreate, redesign, or reimagine it.

2. The uploaded file is the official VKS Tech tri-color heart logo with V (green), K (blue), S (red).

3. Place the logo on a small white circular badge (90×90 px) in the top-right corner so it stays visible against the photo background.

4. CRITICAL FOR FUTURE PROMPTS: I will reference this same logo for all subsequent images. Please remember the exact file I am uploading right now.

═══════════════════════════════════════════════════

GENERATE A PHOTOREALISTIC MAGAZINE-COVER IMAGE.

Style: Premium business magazine cover (think McKinsey Quarterly or Financial Times Weekend). Photorealistic editorial photograph with bilingual title overlay. NOT an illustration, NOT vector art, NOT infographic style.

Dimensions: 1600 × 900 px (16:9)

THE PHOTOGRAPH (fills entire image, full-bleed):

A photorealistic close-up of a metalliser chamber interior in an Indian flexible packaging plant. Specifically:

- FOREGROUND (sharp focus, lower-left third of frame): A row of ceramic evaporation boats — TiB2-BN type, flat rectangular bar shape with raised side rims — seated on a metalliser source bar. Visible copper clamps and aluminium wires running across the boats. Macro lens feel, every detail crisp.

- MID-GROUND (soft focus): The metalliser drum visible behind, with film web wrapping around it. Small specular highlights from chamber lights.

- BACKGROUND (bokeh): Vacuum chamber walls suggested through soft blur, faint amber/green LED status lights as small bokeh circles, industrial machinery environment.

- LIGHTING: Cinematic side lighting from upper-left. Subtle rim lighting on boats and source bar revealing ceramic surface textures and metallic reflections. Slight dramatic shadow falloff into the background. Mood: calm, premium, "real plant work."

- CAMERA: Sony A7R IV equivalent, 50mm prime lens, f/2.8, ISO 400, shutter 1/125. Photographic depth of field — boats sharp, drum slightly soft, background bokeh.

- COLOR PALETTE in photo: Natural industrial — silvery boats, copper clamps, dark chamber tones, soft warm highlights. NOT saturated. NOT colorized.

MAGAZINE-COVER TITLE OVERLAY:

Apply a dark navy (#1A2744) gradient over the bottom 50% of the image. Fully transparent at the top of the gradient, ~85% opaque at the very bottom. This creates clean text legibility without obscuring the photo above.

On this gradient, render the bilingual title stack in clean typography:

ENGLISH TITLE (large, white, BOLD, Inter font, ~52pt):
"How I Cut Metalliser Boat Change Time from 65 to 35 Minutes"

HINDI TITLE (slightly smaller, white, BOLD, Devanagari script with Hind/Mukta typeface, ~36pt, below English):
"मैंने Metalliser Boat Change Time को 65 से 35 Minutes तक कैसे लाया"

SUBTITLE (orange #E85D26, italic, ~22pt, below both titles, bilingual on one line):
"A 2017 Case Study  |  एक 2017 Case Study"

BOTTOM STRIP (very thin teal #0D8C7E semi-transparent banner with white text, ~16pt, at the bottom edge):
"65 → 35 min  |  46% reduction  |  Zero capex  |  12-week project"

LOGO PLACEMENT (top-right corner):
Place the uploaded logo.png on a small white circular badge (90×90 px diameter, with subtle drop shadow). Logo size 80×80 px, 20px margin from edges. Below the badge, in white bold sans-serif (Inter font, 18pt): "VKS Tech". Use the EXACT uploaded logo file — do not recreate.

CRITICAL CONSTRAINTS:
- Photorealistic photography, NOT illustration or vector
- NO faces, NO identifiable people
- NO red color in the photograph or overlay (red is reserved for warnings only)
- NO stock-photo handshakes, smiling engineers, or generic factory imagery
- Devanagari (Hindi) script MUST render correctly
- The title text must be highly legible against the gradient
- Photo composition should make a plant manager think "this is my plant"
```

## Alternative prompt — simplified scene (if the first attempt has issues)

```
[Upload logo.png attached with this prompt — master reference logo for the chat session]

⚠️ Use the uploaded logo.png EXACTLY. Place on white circular badge in top-right.

═══════════════════════════════════════════════════

GENERATE A PHOTOREALISTIC MAGAZINE-COVER IMAGE.

Style: Premium business magazine cover, photorealistic editorial photograph with bilingual title overlay. NOT illustration or infographic.

Dimensions: 1600 × 900 px (16:9)

THE PHOTOGRAPH:
Wide-angle photorealistic shot of a metalliser machine in an Indian flexible packaging plant. The machine is a large horizontal cylindrical vacuum chamber on an industrial floor. Visible elements: chamber, control panel with green/amber status LEDs, film rewinder spool with metallised film, polished concrete floor. Cinematic lighting from upper-left, depth of field, slight bokeh in the back. Sony A7R IV, 35mm lens, f/4, ISO 400.

OVERLAY:
Dark navy gradient on bottom 50% (transparent at top, 85% opaque at bottom).

TITLE STACK on the gradient:
- "How I Cut Metalliser Boat Change Time from 65 to 35 Minutes" (white bold, 52pt)
- "मैंने Metalliser Boat Change Time को 65 से 35 Minutes तक कैसे लाया" (white bold Devanagari, 36pt)
- "A 2017 Case Study  |  एक 2017 Case Study" (orange #E85D26 italic, 22pt)

BOTTOM STRIP: Teal banner with white text "65 → 35 min  |  46% reduction  |  Zero capex"

TOP-RIGHT: Uploaded logo on white circular badge, with "VKS Tech" white bold below.

CONSTRAINTS: Photorealistic only. No faces. No red except UI warnings. Devanagari must render. No stock-photo cliché.
```

---

# 🇬🇧 IMAGE 2: 8-Week Progression Chart (English) — `progression-en.png`

**Dimensions:** 1600 × 900
**Placement in blog:** After the "Step 1 Progression" section header in EN

```
[CRITICAL: Use the EXACT VKS Tech logo.png file that I uploaded earlier in this chat session — the same file from the cover image prompt]

⚠️ LOGO INSTRUCTIONS — READ CAREFULLY:

1. Reference the logo.png file I uploaded in the FIRST prompt of this chat (the cover image prompt). Do NOT generate a new logo.

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
   - Use the EXACT pixel-for-pixel logo from earlier in this chat

4. If you cannot reliably access the logo file from the earlier prompt, output a placeholder note and ask the user to re-upload — do NOT invent a logo.

5. Place the logo as specified in the layout below. Treat it as a placed visual asset, not as a description to redraw.

The logo must look IDENTICAL across all images in this chat session — same colors, same shape, same proportions. Brand consistency is non-negotiable.

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

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the cover image prompt earlier in this chat (the file I uploaded with the first prompt). Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo.

STYLE: Clean editorial data viz, Financial Times / Bloomberg aesthetic. NOT photo-realistic. Use only brand colors.

NO axis labels in red. NO clipart icons. NO 3D effects.
```

---

# 🇮🇳 IMAGE 3: 8-Week Progression Chart (Hindi) — `progression-hi.png`

**Dimensions:** 1600 × 900
**Placement in blog:** After the "Step 1 Progression" section header in HI

```
[CRITICAL: Use the EXACT VKS Tech logo.png file that I uploaded earlier in this chat session — the same file from the cover image prompt]

⚠️ LOGO INSTRUCTIONS — READ CAREFULLY:

1. Reference the logo.png file I uploaded in the FIRST prompt of this chat (the cover image prompt). Do NOT generate a new logo.

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
   - Use the EXACT pixel-for-pixel logo from earlier in this chat

4. If you cannot reliably access the logo file from the earlier prompt, output a placeholder note and ask the user to re-upload — do NOT invent a logo.

5. Place the logo as specified in the layout below. Treat it as a placed visual asset, not as a description to redraw.

The logo must look IDENTICAL across all images in this chat session — same colors, same shape, same proportions. Brand consistency is non-negotiable.

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

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the cover image prompt earlier in this chat (the file I uploaded with the first prompt). Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo.

STYLE: Clean editorial data viz. CRITICAL: Devanagari script must render correctly. Use Hindi-supporting typeface like Hind, Mukta, or Noto Sans Devanagari.

Use only brand colors: navy #1A2744, orange #E85D26, teal #0D8C7E, green #2E8B57, cream #FAF9F6.
```

---

# 🇬🇧 IMAGE 4: 3 Tool Box System (English) — `tool-boxes-en.png`

**Dimensions:** 1600 × 1000
**Placement in blog:** After "Tool Box System" section header in EN

```
[CRITICAL: Use the EXACT VKS Tech logo.png file that I uploaded earlier in this chat session — the same file from the cover image prompt]

⚠️ LOGO INSTRUCTIONS — READ CAREFULLY:

1. Reference the logo.png file I uploaded in the FIRST prompt of this chat (the cover image prompt). Do NOT generate a new logo.

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
   - Use the EXACT pixel-for-pixel logo from earlier in this chat

4. If you cannot reliably access the logo file from the earlier prompt, output a placeholder note and ask the user to re-upload — do NOT invent a logo.

5. Place the logo as specified in the layout below. Treat it as a placed visual asset, not as a description to redraw.

The logo must look IDENTICAL across all images in this chat session — same colors, same shape, same proportions. Brand consistency is non-negotiable.

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

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the cover image prompt earlier in this chat (the file I uploaded with the first prompt). Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo.

STYLE: Clean isometric infographic, Toyota Production System manual aesthetic. NOT photo-realistic. Engineering-paper feel.

Use only brand colors: navy, orange, teal, cream.
NO 3D photo-realism. NO clipart. NO red colors.
```

---

# 🇮🇳 IMAGE 5: 3 Tool Box System (Hindi) — `tool-boxes-hi.png`

**Dimensions:** 1600 × 1000
**Placement in blog:** After "Tool Box System" section header in HI

```
[CRITICAL: Use the EXACT VKS Tech logo.png file that I uploaded earlier in this chat session — the same file from the cover image prompt]

⚠️ LOGO INSTRUCTIONS — READ CAREFULLY:

1. Reference the logo.png file I uploaded in the FIRST prompt of this chat (the cover image prompt). Do NOT generate a new logo.

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
   - Use the EXACT pixel-for-pixel logo from earlier in this chat

4. If you cannot reliably access the logo file from the earlier prompt, output a placeholder note and ask the user to re-upload — do NOT invent a logo.

5. Place the logo as specified in the layout below. Treat it as a placed visual asset, not as a description to redraw.

The logo must look IDENTICAL across all images in this chat session — same colors, same shape, same proportions. Brand consistency is non-negotiable.

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

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the cover image prompt earlier in this chat (the file I uploaded with the first prompt). Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo.

STYLE: Same as English version. CRITICAL: Devanagari script must render correctly. Use Hind, Mukta, or Noto Sans Devanagari.

Use only brand colors. NO 3D photo-realism. NO red colors.
```

---

# 🇬🇧 IMAGE 6: ECRS Framework Diagram (English) — `ecrs-en.png`

**Dimensions:** 1600 × 900
**Placement in blog:** After "ECRS Discipline" section header in EN

```
[CRITICAL: Use the EXACT VKS Tech logo.png file that I uploaded earlier in this chat session — the same file from the cover image prompt]

⚠️ LOGO INSTRUCTIONS — READ CAREFULLY:

1. Reference the logo.png file I uploaded in the FIRST prompt of this chat (the cover image prompt). Do NOT generate a new logo.

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
   - Use the EXACT pixel-for-pixel logo from earlier in this chat

4. If you cannot reliably access the logo file from the earlier prompt, output a placeholder note and ask the user to re-upload — do NOT invent a logo.

5. Place the logo as specified in the layout below. Treat it as a placed visual asset, not as a description to redraw.

The logo must look IDENTICAL across all images in this chat session — same colors, same shape, same proportions. Brand consistency is non-negotiable.

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

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the cover image prompt earlier in this chat (the file I uploaded with the first prompt). Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo.

STYLE: Clean infographic, NOT photo-realistic. Toyota manual aesthetic.

Use only brand colors. NO red. NO clipart. NO 3D.
```

---

# 🇮🇳 IMAGE 7: ECRS Framework Diagram (Hindi) — `ecrs-hi.png`

**Dimensions:** 1600 × 900
**Placement in blog:** After "ECRS Discipline" section header in HI

```
[CRITICAL: Use the EXACT VKS Tech logo.png file that I uploaded earlier in this chat session — the same file from the cover image prompt]

⚠️ LOGO INSTRUCTIONS — READ CAREFULLY:

1. Reference the logo.png file I uploaded in the FIRST prompt of this chat (the cover image prompt). Do NOT generate a new logo.

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
   - Use the EXACT pixel-for-pixel logo from earlier in this chat

4. If you cannot reliably access the logo file from the earlier prompt, output a placeholder note and ask the user to re-upload — do NOT invent a logo.

5. Place the logo as specified in the layout below. Treat it as a placed visual asset, not as a description to redraw.

The logo must look IDENTICAL across all images in this chat session — same colors, same shape, same proportions. Brand consistency is non-negotiable.

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

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the cover image prompt earlier in this chat (the file I uploaded with the first prompt). Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo.

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

- [ ] Upload `logo.png` ONCE with the COVER prompt (Image 1) in the chat session
- [ ] Verify Gemini correctly applies the same logo to all subsequent images in the same chat (Images 2-N reference the uploaded logo by chat memory)
- [ ] If starting a new chat session: re-upload `logo.png` with the first prompt of that session
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
