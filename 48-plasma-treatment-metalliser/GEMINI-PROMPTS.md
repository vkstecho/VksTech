# Blog 48 — Plasma Treatment in Metalliser
## GEMINI Image Generation Prompts (4 photo-realistic images)

**Brand colours:** Navy `#1A2744` · Orange `#E85D26` · Teal `#0D8C7E` · Cream `#FAF9F6`
**Watermark on every image:** `vksTech.com` (small, lower-right, semi-transparent white)
**Style for ALL 4 images:** Photo-realistic, professional photography — NO cartoons, NO 3D renders, NO illustrations

> ### 🎯 Workflow — How to Use These Prompts
> 1. **Open a fresh Gemini chat** for this blog.
> 2. **For Image 1 (cover):** 📎 **Upload `logo.png` as an attachment** with the prompt.
> 3. **For Images 2, 3, 4:** Stay in the SAME Gemini chat — prompts reference the logo from Image 1.
> 4. **Verify each output:** logo present, dimensions correct, photo-realistic.
>
> *Logo fallback:* If Gemini warps the logo, generate without it and paste the real `logo.png` in Canva/Figma after.

| # | File | Dimensions | Photo concept | Logo source |
|---|---|---|---|---|
| 1 | `cover.png` | **1600 × 900 px** (16:9) | Operator at metalliser HMI showing plasma readouts during a run | 📎 Upload logo.png |
| 2 | `plasma-vs-corona-comparison.png` | **1600 × 900 px** (16:9) | Side-by-side: vacuum-chamber plasma vs atmospheric corona | Same chat — reuse |
| 3 | `plasma-position-cutaway.png` | **1600 × 900 px** (16:9) | Real photo of plasma electrode inside open metalliser chamber during maintenance | Same chat — reuse |
| 4 | `plasma-control-desk.png` | **1200 × 1500 px** (4:5 portrait) | Top-down: gas flow meters, plasma power readout, tape test sample, daily log | Same chat — reuse |

---

## 🖼 Image 1: COVER — Operator at Metalliser HMI
**Filename:** `cover.png`
**Dimensions:** **1600 × 900 pixels** (16:9)
**📎 ATTACH:** `logo.png` to this prompt

```
ATTACHED IMAGE: A logo file (logo.png) is attached to this prompt. This is the VKS Tech brand logo. USE THIS LOGO AS-IS in the output image — do NOT redraw it, do NOT modify it, do NOT recreate it. Place the actual attached logo image into the output exactly as provided.

Generate a photo-realistic editorial cover image at 1600 × 900 pixels (16:9 ratio) for a flexible packaging industry blog post about plasma treatment in vacuum metallisers.

SCENE: Inside a modern Indian flexible packaging plant near a vacuum metalliser machine. Mid-shot of a male metalliser operator in his late 30s, wearing a navy blue half-sleeve uniform shirt with a small white name patch (no readable text), light industrial safety helmet pushed back. He is standing at the operator station looking at the metalliser's HMI control screen. The HMI shows a clean industrial dashboard with several visible readouts: "PLASMA POWER 12.5 kW", "O2 FLOW 250 sccm", "CHAMBER PRESSURE 2.3E-2 mbar", "WEB SPEED 600 m/min" arranged in a clean technical layout. His expression is focused, monitoring the run.

FOREGROUND (lower-right): A roll of metallised silver film visible at the edge of the frame, freshly produced.

BACKGROUND: Soft-focus large stainless-steel metalliser body — visible (but blurred) chamber doors, control panels with indicator lights, polished metal surfaces. Use shallow depth-of-field (f/2.8) so operator and HMI are sharp, background is creamy bokeh.

LIGHTING: Cool industrial fluorescent overhead with a warm key light from camera left highlighting the operator's face and the HMI screen. The HMI screen has its own self-illuminated glow.

COLOUR PALETTE: Industrial gray and stainless steel machinery, beige floor, navy uniform. The HMI screen displays clean tech-style readouts in green/orange/teal on a dark background.

TEXT OVERLAY (top-left corner, semi-transparent navy #1A2744 panel with rounded corners, padding 24px):
  Place the ATTACHED VKS Tech logo image as-is at the LEFT edge of this panel, sized approximately 80×80 pixels. Use the actual attached logo image — do NOT redraw it.
  To the RIGHT of the logo, place text:
    Line 1 (small, orange #E85D26, uppercase, letter-spaced): "VKS TECH | MAY 2026"
    Line 2 (large, white, bold, sans-serif Inter or Helvetica): "PLASMA IN A METALLISER"
    Line 3 (medium, white, regular weight): "What it does, where it sits, why your aluminium needs it"

BOTTOM-RIGHT BADGE (small, teal #0D8C7E pill, white text):
  "📥 3 FREE TOOLS INSIDE"

WATERMARK: "vksTech.com" small white letters, lower-right corner, 60% opacity.

CRITICAL CONSTRAINTS:
- USE THE ATTACHED LOGO AS-IS — do not redraw, modify, or recreate it.
- Do NOT show real company logos other than the attached VKS Tech logo
- Do NOT show readable text on name patch, machinery body, or background — only the HMI readouts specified
- Do NOT include other people in the frame
- The HMI readouts must look like a real metalliser control screen with the specified values
- Photo-realistic — like a professional industrial photographer's editorial shot
- Shot on Sony A7 IV with 50mm f/1.4 lens, professional industrial photography
- Image dimensions exactly 1600 × 900 pixels
```

---

## 🖼 Image 2: PLASMA vs CORONA — Side-by-Side Comparison
**Filename:** `plasma-vs-corona-comparison.png`
**Dimensions:** **1600 × 900 pixels** (16:9)
**📎 LOGO:** Reuse from Image 1

```
USE THE SAME VKS TECH LOGO from Image 1 in this chat. Place that exact logo as-is — do NOT redraw it.

Generate a photo-realistic editorial split-screen comparison image at 1600 × 900 pixels (16:9 ratio) for a flexible packaging blog. The frame is divided into two halves by a clean thin vertical separator line.

LEFT HALF — "CORONA — ATMOSPHERIC, OUTSIDE METALLISER"
  Shows a close-up of a corona treater station in operation: a film web passing over a rubber-covered earthed roller, with a metal electrode bar just above the film. Between electrode and film, a visible blue-purple corona discharge crackles in the air gap — open to ambient air, no chamber enclosure. The setting suggests an open converting line (no vacuum chamber visible).
  Small label at top of this half (navy #1A2744 pill, white text): "CORONA — atmospheric, ambient air"

RIGHT HALF — "PLASMA — INSIDE METALLISER VACUUM CHAMBER"
  Shows a close-up of a plasma electrode inside a vacuum chamber: a similar electrode and counter-roller configuration, but now visibly enclosed by stainless steel chamber walls, with gas inlet tubes visible feeding from the side. The plasma glow between electrode and web is a different colour — more purple-pink, suggesting low-pressure plasma rather than atmospheric corona. Visible vacuum chamber port windows give a sense of enclosure.
  Small label at top of this half (teal #0D8C7E pill, white text): "PLASMA — low-pressure, inside vacuum chamber"

Both halves should clearly show: a film web, an electrode, and a visible glow/discharge — but with the environmental difference (open air vs vacuum chamber) being unmistakable.

LIGHTING: Each half lit slightly differently — left side bright ambient industrial light (atmospheric setting), right side cooler with the plasma glow as the dominant light source (vacuum-chamber feel).

COLOUR PALETTE: Left side has warmer ambient tones, right side has cooler steel-and-glow tones. Brand colours used only in overlay.

TEXT OVERLAY:

TOP HEADER (full width, 80px tall, semi-transparent navy #1A2744 band):
  Place the SAME VKS Tech logo (from Image 1) at FAR LEFT of the band, ~60×60 pixels.
  To the RIGHT of the logo, white text bold centered: "CORONA vs PLASMA — TWO COUSINS, TWO DIFFERENT JOBS"

BOTTOM FOOTER (full width, 50px, semi-transparent teal #0D8C7E band):
  White text centered: "Both use ionised gas | Corona = atmospheric, before printing/lamination | Plasma = vacuum, inside metalliser | vksTech.com"

WATERMARK: "vksTech.com" small white text, lower-right, 60% opacity.

CRITICAL CONSTRAINTS:
- USE THE SAME VKS TECH LOGO from Image 1
- Photo-realistic — actual industrial photography, NOT illustration, NOT 3D render
- The CONTRAST between atmospheric corona (open) and vacuum plasma (enclosed) is the whole point — make it visually obvious
- The two discharges should look like real electrical discharges
- No people in the frame
- No real brand logos other than VKS Tech
- Image dimensions exactly 1600 × 900 pixels
```

---

## 🖼 Image 3: PLASMA POSITION — Inside the Open Metalliser Chamber
**Filename:** `plasma-position-cutaway.png`
**Dimensions:** **1600 × 900 pixels** (16:9)
**📎 LOGO:** Reuse from Image 1

```
USE THE SAME VKS TECH LOGO from Image 1 in this chat. Place that exact logo as-is.

Generate a photo-realistic editorial scene at 1600 × 900 pixels (16:9 ratio) of the interior of a vacuum metalliser with chamber open during maintenance — showing the plasma electrode in its actual position in the web path.

SCENE: A view inside a large industrial vacuum metalliser, chamber door open (machine not running), interior fully visible. The viewer is looking at the web path from the side. Several elements are visible and labelled by their position in the photo (not by literal text labels — by clear visual identification):

LEFT SIDE OF FRAME: A large polished stainless-steel cylindrical drum — the chill drum — visible at the position where the web wraps around it.

CENTRE OF FRAME (the focal point): A plasma electrode assembly mounted on a frame above where the web would pass. The electrode is a metal bar or rod assembly housed in a holder, with visible gas inlet tubes feeding into it from the side. A counter-roller (the earthed electrode) sits below where the web would run. The electrode-to-roller gap is visible but small.

RIGHT SIDE OF FRAME: A row of small ceramic-and-metal boat holders visible at chest height — the tungsten boat array where aluminium evaporation will happen. Several boats are visible mounted in their carriers, with aluminium wire feed mechanisms above them.

THE WEB PATH (visualised even though no web is loaded in this maintenance shot): The expected path runs from the chill drum (left), past the plasma electrode (centre), past the boat array (right), out toward an unseen rewind. The path is visually evident from the roller positions and machine geometry.

OVERALL: This is a documentary-style maintenance photograph of a metalliser interior. The plasma electrode is clearly the focal point — visually highlighted by its position in the centre of the frame and by being slightly closer to the camera than the chill drum (left) and the boats (right).

LIGHTING: Bright maintenance lighting — overhead service lights illuminating the chamber interior, with shadows showing depth and dimension. Slight reflective highlights on the stainless steel and the polished chill drum.

COLOUR PALETTE: Stainless steel everywhere — drum, chamber walls, electrode housing, boat holders. Some copper or brass-coloured electrical connections visible. Industrial gray and silver dominate.

TEXT OVERLAY:

TOP HEADER (full width, 80px, semi-transparent navy #1A2744 band):
  Place the SAME VKS Tech logo (from Image 1) at FAR LEFT, ~60×60 pixels.
  To the right, white text bold: "PLASMA POSITION — BETWEEN THE CHILL DRUM AND THE BOATS"

BOTTOM FOOTER (50px, semi-transparent teal #0D8C7E band):
  Centered white: "The web is activated by plasma immediately upstream of aluminium evaporation | vksTech.com"

WATERMARK: "vksTech.com" lower-right, 60% opacity.

CRITICAL CONSTRAINTS:
- USE THE SAME VKS TECH LOGO from Image 1
- Photo-realistic — actual industrial maintenance photography, NOT illustration, NOT 3D render
- The three key elements (chill drum left, plasma electrode centre, boats right) must all be visible and identifiable
- The chamber should look like a real industrial vacuum metalliser interior with all the structural complexity (frames, supports, connections, port windows)
- No people in the frame (maintenance documentation, not action shot)
- No readable text on machinery
- No real brand logos other than VKS Tech
- Shot on Canon R5 with 35mm lens, professional industrial editorial photography
- Image dimensions exactly 1600 × 900 pixels
```

---

## 🖼 Image 4: PLASMA CONTROL DESK — Top-Down Operator Workspace
**Filename:** `plasma-control-desk.png`
**Dimensions:** **1200 × 1500 pixels** (4:5 portrait — A4 printable)
**📎 LOGO:** Reuse from Image 1

```
USE THE SAME VKS TECH LOGO from Image 1 in this chat. Place that exact logo as-is.

Generate a photo-realistic top-down flat-lay photograph at 1200 × 1500 pixels (4:5 portrait) of a metalliser operator's desk during a plasma-monitored production shift. Style: editorial workspace photography, magazine "what's on my desk" shot.

SCENE: Top-down (90-degree overhead) view of a clean matte cream or light-wood desk surface during a metalliser shift. The composition is intentional and editorial.

OBJECTS ON THE DESK (arranged top to bottom):

TOP OF FRAME:
- A small white safety helmet at the top-left corner, partially in frame
- A coffee cup (plain white ceramic, no logo) at top-right, partially in frame
- A handheld walkie-talkie / radio for floor communication (plain navy, no brand) lying near the top edge

UPPER MIDDLE:
- A tablet computer (plain, iPad-style) at slight angle, screen visible, showing a clean industrial dashboard titled "PLASMA OPERATING DAILY LOG" with a grid of fields (Time, Roll ID, Gas, sccm, Power kW, Web Speed, Pressure, Tape Test, OD) — some rows filled in, others blank for the rest of the shift
- A printed sheet of the same log lying half-visible underneath the tablet

CENTRE:
- A small rectangular sample of metallised silver film — used for tape adhesion testing — with a strip of clear adhesive tape partially pulled off one corner. The tape has come off CLEAN (good adhesion result), with no aluminium stuck to the tape.
- A roll of standard clear adhesive tape sitting beside the film sample
- A printed "PLASMA NEED DECISION CHART" — small table visible, navy and orange headers, body partly readable

LOWER MIDDLE:
- A printed substrate spec sheet, partly visible, with the substrate name "BOPP 18 micron" visible at the top in clear text
- A pen (plain navy, no logo) lying diagonally across the page

BOTTOM OF FRAME:
- A printed "GAS SELECTION GUIDE" reference card visible, with a small table showing gas types (O₂, Ar, N₂) and their primary effects
- A small handheld digital meter (gas flow or pressure indicator type) showing a green readout

LIGHTING: Soft, diffused, natural daylight from camera-left (window light). Soft shadows. Editorial workspace style with a photography softbox at 45 degrees.

CAMERA: Direct top-down (90 degrees), shot on Canon R5 with 35mm lens, f/5.6 — desk surface fully in focus.

COLOUR PALETTE: Cream/light-wood desk, white objects (helmet, cup, tablet, film sample, paper), navy pen and radio, silver metallised sample. Brand navy/orange/teal appear only in chart headers and tablet screen.

TEXT OVERLAY:

TOP HEADER (full width, 100px tall, navy #1A2744 band):
  Place the SAME VKS Tech logo (from Image 1) at FAR LEFT, ~70×70 pixels.
  Title in white bold: "PLASMA OPERATING DESK — A TRACKED PROCESS"
  Subtitle in cream below, smaller: "Gas flow, power, tape test — every roll, every shift"

BOTTOM FOOTER (full width, 60px, navy band):
  White centered: "vksTech.com | Free Industrial Toolkit | © VKS TECH — Vivek Kumar"

WATERMARK: "vksTech.com" small white text, lower-right (outside footer), 60% opacity.

CRITICAL CONSTRAINTS:
- USE THE SAME VKS TECH LOGO from Image 1
- Photo-realistic workspace photography, NOT illustration, NOT 3D render, NOT cartoon
- All objects should look like real physical items
- The tape test sample showing CLEAN tape (good adhesion) is an important detail — the aluminium has stayed on the film, not on the tape
- The "BOPP 18 micron" text on the spec sheet should be legibly readable
- No real brand logos other than VKS Tech
- No readable text other than the items specified
- Shot on Canon R5 with 35mm lens, professional editorial workspace photography, magazine quality
- Image dimensions exactly 1200 × 1500 pixels (portrait 4:5)
```

---

## 📋 PUBLISHING CHECKLIST

After generating all 4 images:

- [ ] Verify dimensions match exactly (1600×900 for Images 1, 2, 3 / 1200×1500 for Image 4)
- [ ] Save each as PNG (lossless, no JPEG compression)
- [ ] **Logo check** — VKS Tech logo visible on all 4, looks like the original
- [ ] **Realism test** — at thumbnail size, do all 4 look like real photographs?
- [ ] **Image 2 specific test** — the contrast between atmospheric corona (open) and vacuum plasma (enclosed) is the whole point — confirm it shows
- [ ] **Image 3 specific test** — the three elements (chill drum left / plasma electrode centre / boats right) should all be visible
- [ ] **Image 4 specific test** — the tape test sample shows CLEAN tape (aluminium stayed on film) — this is the visual signal of "good adhesion"
- [ ] Place all 4 PNGs in the same folder as `index.html`

## 🔁 IF GEMINI WARPS THE LOGO

Regenerate 1-2 times. If still off, generate the image WITHOUT the logo and paste real `logo.png` in Canva/Figma after.

## 🔁 IF ANY IMAGE LOOKS TOO CARTOONISH

1. Regenerate 2-3 times — variability is normal
2. Add to prompt: `"Shot on Canon R5, professional editorial photography, magazine quality, photo-realistic, NOT illustration"`
3. For Image 3 (open vacuum chamber), if Gemini struggles with the interior complexity, ask for a more zoomed-in view of just the plasma electrode area instead of the full chamber

## 🔁 IMAGE 2 — IF GEMINI MIXES UP CORONA AND PLASMA

The whole point of Image 2 is the contrast between:
- LEFT: open atmospheric corona discharge
- RIGHT: enclosed vacuum-chamber plasma

If both sides end up looking similar (both atmospheric or both vacuum), regenerate emphasising the open-air vs enclosed-chamber distinction. As a fallback, generate each half separately and combine in Canva.
