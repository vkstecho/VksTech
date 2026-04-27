# 🎨 Gemini Image Prompts — Blog #23 Inter-Cycle SMED Case Study

**Workflow:** Upload `logo.png` ONCE with the cover prompt → Gemini will recall it for all subsequent prompts in the same chat session
**Total images:** 7 (1 bilingual cover + 3 EN diagrams + 3 HI diagrams)
**Logo file:** `logo.png` is in this folder — upload it with the COVER prompt only; reference it by chat memory for inline diagrams
**IMPORTANT:** Generate all 7 images in the SAME chat session so Gemini retains the logo reference. If you start a new chat, re-upload the logo with the first prompt of that session.
**Blog scope:** Real 2016 MET-4 inter-cycle roll changeover SMED case study — 28.5 to 15 minutes
**Published:** April 2026 (10-year validation arc since 2016 project)



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

## Style direction — magazine-cover photorealism with human element

This cover is a **photorealistic editorial photograph** showing a workshop/shop-floor scene with operators in front of a metalliser — capturing the "mindset" story of the blog (operators who believed there was no scope for improvement). NOT a flat illustration. Magazine-cover style with bilingual title overlay.

## Recommended dimensions
1600 × 900 px (16:9 aspect ratio)

## The photograph (full-bleed, fills entire image)

A photorealistic editorial scene inside an Indian flexible packaging plant, shot during a roll changeover at a metalliser. Specific composition:

- **Foreground (slight blur, lower-third):** A metalliser drum and rewinder spool with metallised film visible. A chrome stopwatch resting on the surface near the operator workspace, frozen at "28:30" — a subtle visual cue without being heavy-handed.
- **Mid-ground (sharp focus):** Two operators in factory uniforms (back-view or three-quarter rear view, no faces visible) standing near the metalliser. One has hand on hip, body language suggesting "we already know this." The other is gesturing toward the machine, mid-conversation. They wear safety helmets and aprons. The "mindset" story is told through body language alone.
- **Background (soft):** The metalliser machine receding into bokeh, control panel with green/amber LEDs, suggested vacuum chamber walls.
- **Lighting:** Cinematic side lighting from a high window or skylight, casting natural shadows. Operators slightly silhouetted against soft industrial light. Slight haze in the background to suggest atmosphere.
- **Mood:** Authentic, candid, "real moment of plant work" — like a documentary photo, not staged.

**Camera spec:** Sony A7R IV equivalent, 35mm prime lens, f/3.5, ISO 800, shutter 1/200. Photographic depth of field with shallow focus on the operators.

## Magazine-cover title overlay

A subtle dark navy gradient overlays the **bottom 50% of the image** — fully transparent at the top, ~85% opaque at the very bottom. Above the gradient, in the top-right area, a small contrarian "thought bubble" rendered as a clean orange callout box (semi-transparent #E85D26 background, white text, 24pt):

> "NO SCOPE FOR IMPROVEMENT"
> "और improvement की कोई scope नहीं है"

This callout looks like editorial annotation, not cartoon speech bubble.

On the gradient at the bottom, the bilingual title stack:

**English title (large, white, BOLD, top of gradient):**
> When Operators Said "No Scope for Improvement"

**Hindi title (slightly smaller, white, BOLD, Devanagari, below English):**
> जब Operators ने कहा "और Improvement की कोई Scope नहीं है"

**Subtitle (orange #E85D26, italic, smaller, below both titles):**
> A 2016 Roll Changeover SMED Case Study  |  एक 2016 Roll Changeover SMED Case Study

**Bottom strip (very thin teal #0D8C7E semi-transparent banner with white text):**
> 28.5 → 15 min  |  47% reduction  |  Zero capex  |  4-week project

## Logo placement (top-right corner)

Top-right corner: Uploaded logo.png on a small white circular badge (90×90 px diameter, slight drop shadow). Logo 80×80 px, 20px margin from edges. Below the badge, in white bold sans-serif: "VKS Tech".

## What to AVOID

- Do NOT show identifiable faces — operators must be back-view, side silhouette, or face obscured by helmet/equipment
- Do NOT make this a flat illustration or vector
- Do NOT use cartoon speech bubble for the "no scope" callout — keep it editorial annotation style
- Do NOT use stock-photo "team meeting" or "engineer holding clipboard" imagery
- Do NOT use red color anywhere except the orange callout
- Devanagari script must render correctly

## Prompt for Gemini / similar AI image generator

```
[Upload logo.png attached with this prompt — THIS IS THE MASTER LOGO REFERENCE for all subsequent images in this chat session. Please retain in chat memory.]

⚠️ LOGO INSTRUCTIONS — READ CAREFULLY:

1. Use the uploaded logo.png EXACTLY as provided. Do NOT recreate or redesign it.
2. The uploaded file is the official VKS Tech tri-color heart logo with V (green), K (blue), S (red).
3. Place the logo on a small white circular badge (90×90 px) in the top-right corner.
4. CRITICAL FOR FUTURE PROMPTS: I will reference this same logo for all subsequent images in this chat. Please remember it.

═══════════════════════════════════════════════════

GENERATE A PHOTOREALISTIC MAGAZINE-COVER IMAGE.

Style: Premium business magazine cover, photorealistic documentary-style photograph with bilingual title overlay. NOT illustration, NOT vector art, NOT infographic.

Dimensions: 1600 × 900 px (16:9)

THE PHOTOGRAPH (fills entire image, full-bleed):

A photorealistic editorial scene inside an Indian flexible packaging plant during a metalliser roll changeover. Specifically:

- FOREGROUND (slight blur, lower-third): Metalliser drum and rewinder spool with metallised film. A chrome stopwatch on the operator workspace, frozen at "28:30". Subtle, not staged.

- MID-GROUND (SHARP FOCUS): Two factory operators in safety helmets and aprons, shown from BACK VIEW or three-quarter rear angle so NO FACES are visible. One has hand on hip (body language: "we already know this"). The other gestures toward the machine, mid-conversation. The "mindset" story comes through body language alone.

- BACKGROUND (soft bokeh): The metalliser machine receding, control panel with amber/green LEDs, suggested vacuum chamber walls. Slight industrial haze.

- LIGHTING: Cinematic side lighting from a high window or skylight casting natural shadows. Operators slightly silhouetted against soft industrial light.

- CAMERA: Sony A7R IV equivalent, 35mm prime lens, f/3.5, ISO 800. Documentary editorial photography style. Mood: authentic, candid, "real moment of plant work."

- COLOR PALETTE: Natural industrial tones — uniform colors muted, machinery silvery/dark, soft warm window light. NOT saturated.

CONTRARIAN CALLOUT (top-right, near operators):
A clean editorial-style annotation box (semi-transparent orange #E85D26 background, white text, 24pt — NOT a cartoon speech bubble):
"NO SCOPE FOR IMPROVEMENT"
"और improvement की कोई scope नहीं है"

The callout looks like a magazine annotation pointing toward the operator with hand on hip.

MAGAZINE-COVER TITLE OVERLAY (hero-numbers magazine-cover polish):

Apply a dark navy (#1A2744) gradient over the bottom 55% of the image. Fully transparent at top, ~88% opaque at bottom. The text overlay is composed in 4 hierarchical layers — the numbers are the visual hero.

═══ LAYER 1: TOP BADGE (small, uppercase) ═══

A small horizontal pill or thin underline label, top of the dark gradient:

"INTER-CYCLE SMED · CASE STUDY · 2016"

Format: Uppercase, white text, mono or condensed sans (IBM Plex Mono or Inter Tight), ~14pt, letter-spacing +2px, with a small orange (#E85D26) divider dot before the text.

═══ LAYER 2: HERO NUMBERS (the visual anchor — DOMINANT) ═══

The single most important visual element:

"28.5 → 15"

Rendered HUGE — approximately 160pt — using a bold display typeface (Bebas Neue, Anton, Oswald, or Bahnschrift Bold). The numbers should occupy roughly 40% of the image width.

COLOR TREATMENT: Vertical gradient — "28.5" starts in muted gray-orange (#B85530) at the left edge, transitions through bright orange (#E85D26) in the middle, and "15" ends in vivid coral-orange (#FF7A45) at the right. The arrow "→" is white with a slight orange glow.

EFFECTS: Subtle drop shadow (8px blur, 50% opacity navy). Letter-spacing -2px for tight, premium feel. Numbers must visually dominate the lower half.

═══ LAYER 3: WRAPPING CONTEXT TEXT (smaller, white, supports numbers) ═══

Above the hero numbers, in clean sans (Inter or Söhne, ~32pt, REGULAR weight, white):

"When operators said 'no scope' — but this team cut Inter-Cycle from"

Below the hero numbers (Inter or Söhne, ~38pt, MEDIUM weight, white):

"Minutes — A 2016 SMED Case Study"

Both lines white (#FFFFFF), with 16-24px breathing room around the numbers. Reads as: "When operators said 'no scope' — but this team cut Inter-Cycle from [28.5 → 15] Minutes — A 2016 SMED Case Study."

═══ LAYER 4: HINDI TITLE STACK (parallel structure, smaller scale) ═══

Hindi context line above (Devanagari, Hind/Mukta, ~26pt, white, REGULAR):
"जब Operators ने कहा 'no scope' — पर इस team ने Inter-Cycle को"

Hindi hero numbers (same orange-gradient display treatment, ~110pt — smaller than English but still dominant):
"28.5 → 15"

Hindi context line below (Devanagari, ~28pt, white, MEDIUM):
"Minutes तक काटा — एक 2016 SMED Case Study"

═══ LAYER 5: BOTTOM TAGLINE STRIP ═══

Very bottom — thin horizontal strip with center-justified uppercase text:

"4 WEEKS  ·  ZERO CAPEX  ·  47% REDUCTION  ·  REAL PLANT DATA"

Format: White on semi-transparent teal (#0D8C7E at 60% opacity) thin band (~36px tall). Mono or condensed sans, ~14pt, uppercase, letter-spacing +3px. Items separated by small orange dot "·".

═══ EDITORIAL POLISH RULES ═══

- HIERARCHY: Numbers > English wrapping text > Hindi hero numbers > Hindi wrapping text > badges
- NEGATIVE SPACE: At least 24px breathing room around hero numbers
- WEIGHT CONTRAST: Display heavy on numbers, regular/medium on context, mono-light on metadata
- COLOR DISCIPLINE: White text + orange-gradient numbers + teal-tinted metadata strip. The orange callout box (with "NO SCOPE" annotation) is the only red-adjacent color, intentionally.
- LETTER-SPACING: -2px on hero numbers, +2-3px on metadata strips
- Numbers must read clearly at thumbnail size — LinkedIn scrollers must instantly see "28.5 → 15"

LOGO PLACEMENT (top-right corner):
Uploaded logo.png on white circular badge (90×90 px with drop shadow). Logo 80×80 px, 20px margin. Below: "VKS Tech" white bold.

CRITICAL CONSTRAINTS:
- Photorealistic documentary photography, NOT illustration
- NO identifiable faces — all people back-view or face hidden
- NO red except the orange callout
- NO stock-photo team meetings, smiling engineers, or generic imagery
- Devanagari script MUST render correctly
- Operators body language must clearly communicate "we already know this" / "let me show you" without faces visible
```

## Alternative prompt — single operator, simpler scene

```
[Upload logo.png attached — master reference logo for the chat session]

⚠️ Use uploaded logo.png EXACTLY. Place on white circular badge top-right.

═══════════════════════════════════════════════════

GENERATE A PHOTOREALISTIC MAGAZINE-COVER IMAGE.

Style: Premium business magazine cover, photorealistic. NOT illustration.

Dimensions: 1600 × 900 px (16:9)

THE PHOTOGRAPH:
Single factory operator (back view, no face visible) in safety helmet and apron, standing in front of a metalliser machine with arms crossed. Body language: confident, defensive — "we have already optimized this." Behind operator: metalliser chamber, control panel with LEDs, polished concrete floor. Cinematic side lighting, depth of field. Sony A7R IV, 35mm, f/3.5, ISO 800.

CALLOUT (top-right, semi-transparent orange box with white text, magazine annotation style):
"NO SCOPE FOR IMPROVEMENT"
"और improvement की कोई scope नहीं है"

OVERLAY (hero-numbers magazine-cover style):
Dark navy gradient on bottom 55% (transparent top, 88% opaque bottom).

LAYER 1 — Top badge: "INTER-CYCLE SMED · CASE STUDY · 2016" — uppercase white mono, 14pt, +2px letter-spacing.

LAYER 2 — HERO NUMBERS (dominant, ~160pt): "28.5 → 15" in display font (Bebas Neue / Anton / Oswald), vertical orange gradient #B85530 → #E85D26 → #FF7A45. Subtle drop shadow. Letter-spacing -2px. Occupies ~40% of image width.

LAYER 3 — Wrapping text (white Inter/Söhne):
- Above (32pt regular): "When operators said 'no scope' — but this team cut Inter-Cycle from"
- Below (38pt medium): "Minutes — A 2016 SMED Case Study"

LAYER 4 — Hindi parallel:
- Above (26pt regular Devanagari Hind/Mukta): "जब Operators ने कहा 'no scope' — पर इस team ने Inter-Cycle को"
- Hindi hero numbers (110pt, same orange gradient): "28.5 → 15"
- Below (28pt medium Devanagari): "Minutes तक काटा — एक 2016 SMED Case Study"

LAYER 5 — Bottom strip: Thin teal #0D8C7E semi-transparent band, white uppercase mono 14pt, +3px letter-spacing: "4 WEEKS  ·  ZERO CAPEX  ·  47% REDUCTION  ·  REAL PLANT DATA"

POLISH: Heavy hierarchy contrast (numbers dominate), generous negative space, no red, Devanagari must render correctly.

TOP-RIGHT: Uploaded logo on white circular badge, "VKS Tech" white bold below.

CONSTRAINTS: Photorealistic only. NO face. NO red except callout. Devanagari must render.
```

## Alternative prompt — symbolic stopwatch focus (most minimal)

```
[Upload logo.png attached — master reference logo]

⚠️ Use uploaded logo.png EXACTLY. White circular badge top-right.

═══════════════════════════════════════════════════

PHOTOREALISTIC MAGAZINE-COVER IMAGE.

Dimensions: 1600 × 900 px

THE PHOTOGRAPH:
Macro close-up of a chrome industrial stopwatch resting on a metalliser control panel. Stopwatch frozen at "28:30". Behind it (out of focus): metalliser machinery, faint amber/green LEDs as bokeh. Cinematic lighting, deep shallow focus. Sony A7R IV, 50mm macro, f/2.8, ISO 400.

OVERLAY (hero-numbers magazine-cover style):
Dark navy gradient on bottom 55% (transparent top, 88% opaque bottom).

LAYER 1 — Top badge: "INTER-CYCLE SMED · CASE STUDY · 2016" — uppercase white mono, 14pt, +2px letter-spacing.

LAYER 2 — HERO NUMBERS (dominant, ~160pt): "28.5 → 15" in display font (Bebas Neue / Anton / Oswald), vertical orange gradient #B85530 → #E85D26 → #FF7A45. Subtle drop shadow. Letter-spacing -2px. Occupies ~40% of image width.

LAYER 3 — Wrapping text (white Inter/Söhne):
- Above (32pt regular): "When operators said 'no scope' — but this team cut Inter-Cycle from"
- Below (38pt medium): "Minutes — A 2016 SMED Case Study"

LAYER 4 — Hindi parallel:
- Above (26pt regular Devanagari Hind/Mukta): "जब Operators ने कहा 'no scope' — पर इस team ने Inter-Cycle को"
- Hindi hero numbers (110pt, same orange gradient): "28.5 → 15"
- Below (28pt medium Devanagari): "Minutes तक काटा — एक 2016 SMED Case Study"

LAYER 5 — Bottom strip: Thin teal #0D8C7E semi-transparent band, white uppercase mono 14pt, +3px letter-spacing: "4 WEEKS  ·  ZERO CAPEX  ·  47% REDUCTION  ·  REAL PLANT DATA"

POLISH: Heavy hierarchy contrast (numbers dominate), generous negative space, no red, Devanagari must render correctly.

TOP-RIGHT: Logo on white badge, "VKS Tech" below.

CONSTRAINTS: Photorealistic only. NO faces. Devanagari must render.
```

---

# 🇬🇧 IMAGE 2: 13 Improvements Visualization (English) — `improvements-en.png`

**Dimensions:** 1600 × 1000
**Placement in blog:** After "13 Documented Improvements" section header in EN

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

Create a clean horizontal bar chart infographic, 1600x1000 px, on cream background (#FAF9F6).

TITLE at top (bold dark navy #1A2744, centered, 32pt):
"13 Documented Improvements — MET-4 Inter-Cycle SMED 2016"

SUBTITLE (orange #E85D26, italic, 16pt):
"Real per-cycle savings recorded in original project documentation"

MAIN VISUAL: Horizontal bar chart with 13 bars, each labelled with the improvement and second savings, color-coded by ECRS type:

ELIMINATE bars (green #2E8B57):
- "Winding alignment check removed" — 25 sec
- "Wire feeder hand running removed" — 30 sec
- "Guide pipe brush cleaning removed" — 40 sec

COMBINE bars (orange #E85D26):
- "Wire cutting + guide pipe cleaning simultaneous" — 80 sec

REARRANGE bars (teal #0D8C7E):
- "Wire kept ready before chamber" — 90 sec
- "Roll lifted with crane before" — 30 sec
- "Roll dressed before chamber" — 50 sec
- "Operator enters with two wires" — 30 sec
- "Film cut as chamber opens" — 50 sec

SIMPLIFY bars (purple #7B3FA0):
- "Apron with tools" — 30 sec
- "Tray for shutter cleaning" — 35 sec
- "New boat surface cleaning tool" — 60 sec
- "Custom clamp cleaner" — 60 sec

X-axis: 0 to 100 seconds, gridlines every 20 sec
Y-axis: Improvement name labels (small font, bold)

BAR STYLE: Horizontal bars with crisp edges, no shadows, no 3D.
Each bar shows seconds saved as a numeric label at the right end.

LEGEND (top-right corner): Color squares with ECRS letter
- Green = Eliminate
- Orange = Combine
- Teal = Rearrange
- Purple = Simplify

BOTTOM CALLOUT BANNER (navy background, white text, 18pt bold):
"Total: ~610 seconds = ~10 minutes saved per cycle. Plus 'trough cleaning every 2 cycles' frequency change adds another 2 min/cycle on average."

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the cover image prompt earlier in this chat (the file I uploaded with the first prompt). Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo.

STYLE: Clean editorial data viz, Financial Times / Bloomberg aesthetic. NOT photo-realistic.

Use only brand colors: navy, orange, teal, green, purple, cream.
NO red. NO 3D. NO clipart.
```

---

# 🇮🇳 IMAGE 3: 13 Improvements Visualization (Hindi) — `improvements-hi.png`

**Dimensions:** 1600 × 1000
**Placement in blog:** After "13 Documented Improvements" section header in HI

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

Same horizontal bar chart as English version, but with Hindi labels.

TITLE (Devanagari, 32pt, navy):
"13 Documented Improvements — MET-4 Inter-Cycle SMED 2016"

SUBTITLE (Devanagari, 16pt, orange italic):
"Original project documentation में recorded real per-cycle savings"

BAR LABELS (in Hindi where natural, technical terms in English):

ELIMINATE (green):
- "Winding alignment check हटाया" — 25 sec
- "Wire feeder hand-running हटाया" — 30 sec
- "Guide pipe brush cleaning हटाया" — 40 sec

COMBINE (orange):
- "Wire cutting + guide pipe cleaning साथ" — 80 sec

REARRANGE (teal):
- "Wire chamber से पहले ready" — 90 sec
- "Roll crane से पहले lift" — 30 sec
- "Roll chamber से पहले dressed" — 50 sec
- "Operator दो wires के साथ enter" — 30 sec
- "Chamber खुलते ही film cut" — 50 sec

SIMPLIFY (purple):
- "Tools वाला Apron" — 30 sec
- "Shutter cleaning के लिए Tray" — 35 sec
- "Boat surface के लिए नया cleaning tool" — 60 sec
- "Custom clamp cleaner" — 60 sec

X-axis: 0-100 seconds (universal numerals)

LEGEND: Color squares with ECRS letter (English letters universal)

BOTTOM CALLOUT BANNER (Devanagari):
"Total: ~610 seconds = हर cycle ~10 minutes saved। Plus 'हर 2 cycles trough cleaning' frequency change average per cycle 2 min और add करता है।"

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the cover image prompt earlier in this chat (the file I uploaded with the first prompt). Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo. in navy

STYLE: Same as English version. CRITICAL: Devanagari script must render correctly.

Use only brand colors. NO red. NO 3D. NO clipart.
```

---

# 🇬🇧 IMAGE 4: 5-Why Methodology (English) — `why-why-en.png`

**Dimensions:** 1600 × 900
**Placement in blog:** After "Why-Why Analysis" section header in EN

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

Create a vertical methodology diagram, 1600x900 px, on cream background (#FAF9F6).

TITLE at top (bold dark navy #1A2744, centered, 32pt):
"Why-Why Analysis — Five Levels Deep"

SUBTITLE (orange #E85D26, italic, 16pt):
"Real example from MET-4: Removing the 'Winding Alignment Check' step"

MAIN VISUAL: A vertical staircase/cascade of 5 connected boxes showing the 5-Why progression. Each box has a large "Why N:" label and a quote.

BOX 1 (top, navy header):
"STEP: Check winding alignment after chamber opening"
Background: light gray

BOX 2 (slightly indented right):
"WHY 1?"
"Because winding might have shifted during run"
Background: light teal (#E0F2F1)

BOX 3 (more indented):
"WHY 2?"
"Because shifts in winding are caused by tension variations"
Background: lighter teal

BOX 4 (more indented):
"WHY 3?"
"Because we want to confirm the rewinder is stable before pump-down"
Background: light orange (#FFE5D9)

BOX 5 (more indented):
"WHY 4?"
"Because we have had cases where rewinder failed silently"
Background: orange-tinted cream

BOX 6 (most indented, REVELATORY):
"WHY 5?"
"...but those cases were caught by the rewinder alarm system, not by visual check."
Background: bright orange (#E85D26), white text, BOLD

ARROW SYMBOL: Each box connects to the next with a downward arrow in navy.

CONCLUSION BANNER at bottom:
Navy background, white text, 22pt bold:
"DECISION: Remove the visual check from SOP. Saves 25 sec/cycle. Across 12 cycles/day × 2 machines × 30 days = 5 hours saved per month from ONE Why-Why exercise."

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the cover image prompt earlier in this chat (the file I uploaded with the first prompt). Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo. in navy

STYLE: Clean methodology infographic, Toyota training manual aesthetic. NOT photo-realistic.

Use only brand colors. NO red colors except the conclusion highlights. NO clipart.
```

---

# 🇮🇳 IMAGE 5: 5-Why Methodology (Hindi) — `why-why-hi.png`

**Dimensions:** 1600 × 900
**Placement in blog:** After "Why-Why Analysis" section header in HI

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

Same vertical staircase diagram as English version, with Hindi where natural.

TITLE (Devanagari, navy, 32pt):
"Why-Why Analysis — पाँच Levels गहरा"

SUBTITLE (Devanagari, orange italic, 16pt):
"MET-4 का real example: 'Winding Alignment Check' step हटाना"

CASCADE BOXES (Hindi quotes paraphrased from peer-review records):

BOX 1: "STEP: Chamber opening के बाद winding alignment check"
BOX 2: "WHY 1? — क्योंकि run के दौरान winding shift हो सकती है"
BOX 3: "WHY 2? — क्योंकि winding shifts tension variations से होती हैं"
BOX 4: "WHY 3? — क्योंकि हम pump-down से पहले rewinder stable confirm करना चाहते हैं"
BOX 5: "WHY 4? — क्योंकि कुछ cases हुए हैं जब rewinder silently fail हुआ"
BOX 6 (revelatory, orange background, white text):
"WHY 5? — ...लेकिन वो cases rewinder alarm system ने catch किए, visual check ने नहीं।"

CONCLUSION BANNER (Devanagari, navy, white text):
"DECISION: Visual check SOP से हटाओ। हर cycle 25 sec save। 12 cycles/day × 2 machines × 30 days = एक Why-Why exercise से हर महीना 5 hours save।"

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the cover image prompt earlier in this chat (the file I uploaded with the first prompt). Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo. in navy

STYLE: Same as English version. CRITICAL: Devanagari script must render correctly.

Use only brand colors. NO red except conclusion highlights. NO clipart.
```

---

# 🇬🇧 IMAGE 6: Inter-Cycle vs Boat-Set Comparison (English) — `comparison-en.png`

**Dimensions:** 1600 × 1000
**Placement in blog:** After "Inter-Cycle vs Boat-Set" section header in EN

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

Create a side-by-side comparison diagram, 1600x1000 px, on cream background (#FAF9F6).

TITLE at top (bold dark navy #1A2744, centered, 32pt):
"Inter-Cycle vs Boat-Set Changeover — Which to Tackle First?"

SUBTITLE (orange #E85D26, italic, 16pt):
"Real plant data from 2016 (MET-4) and 2017 (MET-1) projects"

MAIN VISUAL: Two columns side by side, each with a header banner and rows.

LEFT COLUMN — "INTER-CYCLE" (this blog):
- Column header: Teal background (#0D8C7E), white text
- Rows below show:
  • Frequency: 12-15 events/day
  • Baseline: 28.5 min
  • Target: 15 min
  • Recovered/day/machine: ~150-180 min
  • OEE improvement: +14-16 pp
  • Difficulty: MEDIUM
  • Project duration: 4-8 weeks

RIGHT COLUMN — "BOAT-SET" (boat change blog):
- Column header: Orange background (#E85D26), white text
- Rows show:
  • Frequency: ~1.34 events/day
  • Baseline: 50-65 min
  • Target: 35 min
  • Recovered/day/machine: ~30-40 min
  • OEE improvement: +1-2 pp
  • Difficulty: MEDIUM-HARD
  • Project duration: 8-12 weeks

VISUAL COMPARISON BARS (between columns):
For "Recovered/day/machine" row, show two horizontal bars proportional to the values, with Inter-Cycle bar being ~5x longer than Boat-Set bar.

BOTTOM CALLOUT BANNER (navy, white text, 22pt bold):
"START WITH INTER-CYCLE. The frequency multiplier (12-15× vs 1.34×) means inter-cycle gains compound ~9× faster per project-week of effort."

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the cover image prompt earlier in this chat (the file I uploaded with the first prompt). Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo.

STYLE: Clean comparison infographic, Wall Street Journal aesthetic. NOT photo-realistic.

Use only brand colors. NO red. NO 3D. NO clipart.
```

---

# 🇮🇳 IMAGE 7: Inter-Cycle vs Boat-Set Comparison (Hindi) — `comparison-hi.png`

**Dimensions:** 1600 × 1000
**Placement in blog:** After "Inter-Cycle vs Boat-Set" section header in HI

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

Same side-by-side comparison as English version, with Hindi labels.

TITLE (Devanagari, 32pt):
"Inter-Cycle vs Boat-Set Changeover — पहले कौन?"

SUBTITLE (Devanagari, orange italic):
"2016 (MET-4) और 2017 (MET-1) projects का real plant data"

LEFT COLUMN — "INTER-CYCLE" (teal header):
- Frequency: हर दिन 12-15 events
- Baseline: 28.5 min
- Target: 15 min
- हर machine हर दिन recover: ~150-180 min
- OEE improvement: +14-16 pp
- Difficulty: MEDIUM
- Project duration: 4-8 weeks

RIGHT COLUMN — "BOAT-SET" (orange header):
- Frequency: हर दिन ~1.34 events
- Baseline: 50-65 min
- Target: 35 min
- हर machine हर दिन recover: ~30-40 min
- OEE improvement: +1-2 pp
- Difficulty: MEDIUM-HARD
- Project duration: 8-12 weeks

COMPARISON BARS: Same proportional visual

BOTTOM CALLOUT BANNER (Devanagari, navy, white):
"INTER-CYCLE से शुरू करें। Frequency multiplier (12-15× vs 1.34×) का मतलब है inter-cycle gains project-week of effort में ~9× faster compound होते हैं।"

BOTTOM-RIGHT corner: Place the EXACT VKS Tech logo from the cover image prompt earlier in this chat (the file I uploaded with the first prompt). Size: 60×60 pixels, 20px margin from edges. Next to it, in navy #1A2744 (Inter font, 14pt): "vkstech.com". The logo must be visually identical to the one in the cover image — same V (green) + K (blue) + S (red) heart logo. Do NOT generate a new logo.

STYLE: Same as English version. CRITICAL: Devanagari script must render correctly.

Use only brand colors. NO red. NO 3D. NO clipart.
```

---

# 📋 Image Generation Order

Recommended generation order:
1. **cover.png** (bilingual) — most critical, always-visible
2. **improvements-en.png** + **improvements-hi.png** — strongest visual proof of project value
3. **why-why-en.png** + **why-why-hi.png** — most distinctive methodology insight
4. **comparison-en.png** + **comparison-hi.png** — strategic decision-maker visual

Total: 7 images (1 bilingual cover + 6 inline = 3 EN + 3 HI)

---

# ✅ Publishing Checklist

Before going live with Blog #23:

- [ ] Upload `logo.png` ONCE with the COVER prompt (Image 1) in the chat session
- [ ] Verify Gemini correctly applies the same logo to all subsequent images in the same chat (Images 2-N reference the uploaded logo by chat memory)
- [ ] If starting a new chat session: re-upload `logo.png` with the first prompt of that session
- [ ] Generate `cover.png` from bilingual prompt above
- [ ] Verify **Devanagari script renders correctly** (no boxes, no garbled characters)
- [ ] Save as PNG (not JPG) to preserve sharp text
- [ ] Place in `/blog/23-when-no-scope-roll-changeover-2016-case-study/cover.png`
- [ ] Verify cover renders correctly in BOTH EN and HI section views
- [ ] Check Action Card PDF download link works
- [ ] Check Excel calculator download link works
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
