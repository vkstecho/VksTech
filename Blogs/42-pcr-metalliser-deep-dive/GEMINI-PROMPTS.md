# Blog 42 — How Much PCR Can a Metalliser Really Handle?
## GEMINI Image Generation Prompts (4 photo-realistic images)

**Brand colours:** Navy `#1A2744` · Orange `#E85D26` · Teal `#0D8C7E` · Cream `#FAF9F6`
**Watermark on every image:** `vkstech.com` (small, lower-right, semi-transparent white)
**Style for ALL 4 images:** Photo-realistic, professional photography — NO cartoons, NO 3D renders, NO illustrations

> ### 🎯 Workflow — How to Use These Prompts
> 1. **Open a fresh Gemini chat** for this blog.
> 2. **For Image 1 (cover):** 📎 **Upload `logo.png` as an attachment** with the prompt. Gemini embeds the actual logo.
> 3. **For Images 2, 3, 4:** Stay in the SAME Gemini chat — prompts reference the logo from Image 1. **No re-upload needed.**
> 4. **Verify each output:** logo present, dimensions correct, photo-realistic.
>
> *Logo fallback:* If Gemini warps the logo, generate the photo without it and paste the real `logo.png` in Canva/Figma after — 30 seconds, perfect logo every time.

| # | File | Dimensions | Photo concept | Logo source |
|---|---|---|---|---|
| 1 | `cover.png` | **1600 × 900 px** (16:9) | Plant operator examining r-PET pellets vs virgin pellets | 📎 Upload logo.png |
| 2 | `rpet-pellet-comparison.png` | **1600 × 900 px** (16:9) | Top-down flat-lay of 3 PET pellet types side-by-side | Same chat — reuse |
| 3 | `metalliser-trial-scene.png` | **1600 × 900 px** (16:9) | Photographic scene of QC engineer at metalliser sample station | Same chat — reuse |
| 4 | `pcr-cost-decision-desk.png` | **1200 × 1500 px** (4:5 portrait) | Top-down engineer's desk: cost calculator, pellet samples, supplier CoAs | Same chat — reuse |

---

## 🖼 Image 1: COVER — Operator with r-PET Pellets
**Filename:** `cover.png`
**Dimensions:** **1600 × 900 pixels** (16:9 aspect ratio)
**📎 ATTACH:** `logo.png` to this prompt

```
ATTACHED IMAGE: A logo file (logo.png) is attached to this prompt. This is the VKS Tech brand logo. USE THIS LOGO AS-IS in the output image — do NOT redraw it, do NOT modify it, do NOT recreate it. Place the actual attached logo image into the output exactly as provided.

Generate a photo-realistic editorial cover image at 1600 × 900 pixels (16:9 ratio) for a flexible packaging industry blog post.

SCENE: Inside a modern Indian flexible packaging plant near the extruder feeding zone. Mid-shot of a male plant engineer in his late 30s, wearing a navy blue half-sleeve uniform shirt with a small white name patch (no readable text on the patch), light industrial safety helmet pushed back on his head, no eyewear. He is standing at a small workstation table examining two clear plastic sample jars side-by-side at chest height. The left jar contains clear water-clear PET pellets (virgin). The right jar contains slightly off-white, faintly yellowish PET pellets (r-PET). His expression is focused, analytical — comparing the two materials thoughtfully.

FOREGROUND (lower-right): A second tablet computer on the workstation, screen visible at angle, showing a clean Excel-style "r-PET COMPATIBILITY CALCULATOR" with navy and orange data bars and a verdict cell.

BACKGROUND: Soft-focus extruder feed zone — visible (but blurred) screw barrel, hopper above, dryer outlet, fluorescent overhead lighting. Use shallow depth-of-field (f/2.8) so the engineer and pellet jars are sharp, background creamy bokeh.

LIGHTING: Cool industrial fluorescent overhead with a warm key light from camera left highlighting the engineer's face and the two pellet jars. The pellets should clearly show the colour difference — virgin water-clear vs r-PET faintly yellowish/whitish.

COLOUR PALETTE: Industrial gray machinery, beige floor, off-white walls. Engineer's uniform navy blue. Virgin pellets clear, r-PET pellets slightly off-white with a hint of yellow tinge — this difference is the point of the cover.

TEXT OVERLAY (top-left corner, semi-transparent navy #1A2744 panel with rounded corners, padding 24px):
  Place the ATTACHED VKS Tech logo image as-is at the LEFT edge of this panel, sized approximately 80×80 pixels. Use the actual attached logo image — do NOT redraw it.
  To the RIGHT of the logo, place text:
    Line 1 (small, orange #E85D26, uppercase, letter-spaced): "VKS TECH | MAY 2026"
    Line 2 (large, white, bold, sans-serif Inter or Helvetica): "HOW MUCH PCR?"
    Line 3 (medium, white, regular weight): "The Mechanical vs Chemical r-PET Deep Dive"

BOTTOM-RIGHT BADGE (small, teal #0D8C7E pill, white text):
  "📥 3 FREE TOOLS INSIDE"

WATERMARK: "vksTech.com" small white letters, lower-right corner, 60% opacity.

CRITICAL CONSTRAINTS:
- USE THE ATTACHED LOGO AS-IS — do not redraw, modify, or recreate it.
- Do NOT show real company logos other than the attached VKS Tech logo
- Do NOT show readable text on name patch, machinery, or background
- Do NOT include other people in the frame
- Pellet jars should be plain transparent — no labels visible
- Photo-realistic — like a professional industrial photographer's editorial shot
- Shot on Sony A7 IV with 50mm f/1.4 lens, professional industrial photography
- Image dimensions exactly 1600 × 900 pixels
```

---

## 🖼 Image 2: PELLET COMPARISON — Real Samples Flat-lay
**Filename:** `rpet-pellet-comparison.png`
**Dimensions:** **1600 × 900 pixels** (16:9 aspect ratio)
**📎 LOGO:** Reuse from Image 1 (same Gemini chat)

```
USE THE SAME VKS TECH LOGO from Image 1 in this chat. Place that exact logo as-is — do NOT redraw it.

Generate a photo-realistic top-down flat-lay product photography image at 1600 × 900 pixels (16:9 ratio) for a flexible packaging blog. Style: clean, editorial, like a magazine product spread.

SETUP: Top-down (90-degree overhead) view of THREE small piles of PET pellets laid out in a horizontal row on a clean cream-coloured (#FAF9F6) seamless paper background. Each pile is roughly 6cm × 6cm with about 80 pellets visible. Between each pile, about 30-40px of clean cream space.

THE 3 PELLET PILES (left to right):

PILE 1 (left third) — VIRGIN PET
  Water-clear, glass-like transparent PET pellets, cylindrical shape ~3mm × 4mm. Light catches them, showing tiny rainbow refractions. Looks pristine and uniform.
  Place a small printed card next to the pile (white card, 80×120px, navy #1A2744 border) with text:
    "VIRGIN PET"
    "IV: 0.80 dL/g"
    "b*: 1.5"
    "Gels: 2/m²"
    "Cost: ₹110/kg"
  Card has a navy header bar.

PILE 2 (middle third) — MECHANICAL r-PET
  Slightly off-white, faintly yellowish PET pellets, cylindrical ~3mm × 4mm. Less transparent than virgin — you can see they have a subtle whitish/yellowish cast. A few pellets show very tiny dark specks (impurities). Realistic looking.
  Place an identical-style card with text:
    "MECHANICAL r-PET"
    "IV: 0.85 dL/g"
    "b*: 4.5"
    "Gels: 12/m²"
    "Cost: ₹95/kg"
    "⭐ ≤30% LOADING"
  Card has an orange #E85D26 corner accent.

PILE 3 (right third) — CHEMICAL r-PET
  Water-clear, identical in appearance to Pile 1 (virgin). Maybe a hair different in size. The point: chemical r-PET is visually indistinguishable from virgin.
  Place an identical card with text:
    "CHEMICAL r-PET"
    "IV: 0.80 dL/g"
    "b*: 1.5"
    "Gels: 2/m²"
    "Cost: ₹165/kg"
    "✅ UP TO 90%"
  Card has a teal #0D8C7E corner accent.

LIGHTING: Soft, diffused, natural daylight from above (photography softbox). Pellets show realistic specular highlights — virgin and chemical r-PET sparkling clear, mechanical r-PET slightly dulled. NO harsh shadows.

CAMERA: Direct top-down (90 degrees), shot on Canon R5 with 50mm macro lens, f/8 aperture for sharpness across the plane.

TEXT OVERLAY:

TOP HEADER (full width, 80px tall, semi-transparent navy #1A2744 band):
  Place the SAME VKS Tech logo (from Image 1) at FAR LEFT of the band, ~60×60 pixels. Use the actual logo as-is.
  To the RIGHT of the logo, white text, bold, centered: "VIRGIN vs MECHANICAL vs CHEMICAL r-PET — VISUAL COMPARISON"

BOTTOM FOOTER (full width, 50px, semi-transparent teal #0D8C7E band):
  White text, centered: "Source: Industry CoA data, Celplast Metallized Products, peer-reviewed PET re-extrusion research | vksTech.com"

WATERMARK: "vksTech.com" small white text, lower-right, 60% opacity.

CRITICAL CONSTRAINTS:
- USE THE SAME VKS TECH LOGO from Image 1
- Photo-realistic — actual product photography style, NOT illustration, NOT 3D render
- Real pellets, photographed — they should look like physical samples
- The colour difference between virgin/chemical r-PET (water-clear) and mechanical r-PET (off-white/yellowish) is the WHOLE POINT — make sure it is visible
- No real brand logos other than VKS Tech
- Cream background (#FAF9F6) — clean, no clutter
- Image dimensions exactly 1600 × 900 pixels
```

---

## 🖼 Image 3: METALLISER TRIAL SCENE — QC at Sample Station
**Filename:** `metalliser-trial-scene.png`
**Dimensions:** **1600 × 900 pixels** (16:9 aspect ratio)
**📎 LOGO:** Reuse from Image 1 (same Gemini chat)

```
USE THE SAME VKS TECH LOGO from Image 1 in this chat. Place that exact logo as-is.

Generate a photo-realistic editorial scene at 1600 × 900 pixels (16:9 ratio) of a metalliser QC station in an Indian flexible packaging plant.

SCENE: A QC engineer (female, late 20s, wearing a navy blue uniform jacket and safety helmet) at a brightly-lit inspection table examining a metallised film sample. She is holding the metallised silver film up to a backlit light box, examining for gel defects (fish-eyes) under transmitted light. A handheld densitometer rests on the table beside her. Behind her, slightly out of focus, the metalliser machine itself — a large industrial unit with vacuum chamber visible, control panel showing readouts.

ON THE INSPECTION TABLE:
- A 1m piece of metallised PET film (silver, slightly reflective) draped over the back-light box
- A handheld optical density meter (densitometer) — small, navy blue with a digital display showing "2.18 OD" in green
- A clipboard with a partially visible trial protocol sheet (rows visible but text not readable except headers like "STEP" and "OD")
- A clear sample jar of r-PET pellets (faintly yellowish) at the corner of the table

LIGHTING: Bright clinical QC lighting, but with a focused light box illuminating the film from below — creating a soft glow that highlights any gel defects in the film. Slight directional shadow from camera left.

BACKGROUND: Soft-focus metalliser machinery (5-8m behind the engineer) — visible vacuum chamber doors, control panel with green/orange indicator lights, polished metal surfaces. Background is creamy bokeh.

COLOUR PALETTE: Cool clinical white/gray of the QC area, navy uniform, silver film, warm glow from the back-light box. Brand colours sneak in via the navy uniform and any orange/teal indicator lights.

TEXT OVERLAY:

TOP HEADER (full width, 80px, semi-transparent navy #1A2744 band):
  Place the SAME VKS Tech logo (from Image 1) at FAR LEFT, ~60×60 pixels.
  To the right, white text bold: "r-PET TRIAL QC — THE UNFORGIVING METALLISATION STEP"

BOTTOM FOOTER (50px, semi-transparent teal):
  Centered white: "vksTech.com | Free Industrial Toolkit | Metalliser & r-PET Tools"

WATERMARK: "vksTech.com" lower-right, 60% opacity.

CRITICAL CONSTRAINTS:
- USE THE SAME VKS TECH LOGO from Image 1
- Photo-realistic editorial photography, NOT illustration, NOT 3D render
- The QC engineer should look engaged and focused — this is precision work
- The film, densitometer, and pellet jar should look like real industrial QC items
- No readable text on machinery, name patches, or background
- No real brand logos other than VKS Tech
- The "2.18 OD" reading on the densitometer should be visible — it is the verdict moment
- Shot on Canon R5 with 50mm lens, professional industrial editorial photography
- Image dimensions exactly 1600 × 900 pixels
```

---

## 🖼 Image 4: COST DECISION DESK — Top-Down Engineer's Workspace
**Filename:** `pcr-cost-decision-desk.png`
**Dimensions:** **1200 × 1500 pixels** (4:5 portrait — A4 printable)
**📎 LOGO:** Reuse from Image 1 (same Gemini chat)

```
USE THE SAME VKS TECH LOGO from Image 1 in this chat. Place that exact logo as-is.

Generate a photo-realistic top-down flat-lay photograph at 1200 × 1500 pixels (4:5 portrait) of an Indian plant engineer's desk during PCR strategy planning. Style: editorial workspace photography, magazine "what's on my desk today" shot.

SCENE: Top-down (90-degree overhead) view of a clean wooden or matte cream desk surface during PCR sourcing decision day. The composition is intentional and editorial.

OBJECTS ON THE DESK (arranged top to bottom):

TOP OF FRAME:
- A small white safety helmet at the top-left corner, partially in frame
- A coffee cup (plain white ceramic, no logo) at top-right, partially in frame, half-empty
- Three small clear plastic sample jars arranged in a row, each containing different pellets:
  • Jar 1: clear water-clear pellets (labelled "VIRGIN")
  • Jar 2: faintly yellowish/white pellets (labelled "MECH r-PET")
  • Jar 3: clear pellets indistinguishable from Jar 1 (labelled "CHEM r-PET")
  Labels are simple white tape with handwritten Sharpie text.

UPPER MIDDLE:
- A tablet computer (iPad-style, plain), screen at slight angle, showing the "PCR COST-HYBRID OPTIMISER" Excel dashboard with 4 strategy rows: Strategy A (all certs), B (mech + certs), C (chemical), D (50/50). One row is highlighted in orange showing "💡 LOWEST COST"

CENTER:
- 4 sticky notes laid out connected by hand-drawn arrows in pen, showing strategy comparison:

  Sticky 1 (orange #E85D26): "STRATEGY A — All Certs ₹120L/yr"
  Sticky 2 (orange #E85D26): "STRATEGY B — Mech + Certs ₹95L/yr ⭐"
  Sticky 3 (teal #0D8C7E): "STRATEGY C — All Chemical ₹550L/yr"
  Sticky 4 (teal #0D8C7E): "STRATEGY D — 50/50 ₹105L/yr"

  Sticky note 2 has a bold pen circle around it indicating "this one!"

BOTTOM OF FRAME:
- A printed supplier CoA (Certificate of Analysis) document, partly visible — header "CERTIFICATE OF ANALYSIS" readable, body text deliberately blurred
- A printed "EPR Certificate" document beside it — title "EPR RECYCLING CERTIFICATE" readable
- A pen (plain navy, no logo) lying diagonally across the desk

LIGHTING: Soft, diffused, natural daylight from camera-left (window light). Soft shadows under helmet, cup, tablet, jars. Like a photography softbox at 45 degrees.

CAMERA: Direct top-down (90 degrees), shot on Canon R5 with 35mm lens, f/5.6 — desk surface in focus, slight softness near edges.

COLOUR PALETTE: Cream desk surface, white objects (helmet, cup, tablet, jars), navy/orange/teal sticky notes, navy pen, white CoA documents. Natural wood-grain or matte cream beneath. No saturated random colours.

TEXT OVERLAY:

TOP HEADER (full width, 100px tall, navy #1A2744 band):
  Place the SAME VKS Tech logo (from Image 1) at FAR LEFT, ~70×70 pixels.
  Title in white bold: "PCR STRATEGY DECISION — 4 PATHWAYS COMPARED"
  Subtitle in cream below, smaller: "For Indian Cat II Flexible Packaging Plants"

BOTTOM FOOTER (full width, 60px, navy band):
  White centered: "vksTech.com | Free Industrial Toolkit | © VKS TECH — Vivek Kumar"

WATERMARK: "vksTech.com" small white text, lower-right (outside footer), 60% opacity.

CRITICAL CONSTRAINTS:
- USE THE SAME VKS TECH LOGO from Image 1
- Photo-realistic workspace photography, NOT illustration, NOT 3D render, NOT cartoon
- All objects should look like real physical items
- Sticky notes should look hand-written (slight irregularity gives realism)
- Pellet jar labels should look like real Sharpie-on-tape, not perfectly typed
- No real brand logos other than VKS Tech
- No readable text other than the labels, sticky notes, dashboard title, and CoA/Certificate headers specified
- Shot on Canon R5 with 35mm lens, professional editorial workspace photography, magazine quality
- Image dimensions exactly 1200 × 1500 pixels (portrait 4:5 ratio)
```

---

## 📋 PUBLISHING CHECKLIST

After generating all 4 images:

- [ ] Verify dimensions match exactly (1600×900 for Images 1, 2, 3 / 1200×1500 for Image 4)
- [ ] Save each as PNG (lossless, no JPEG compression artifacts)
- [ ] **Logo check** — VKS Tech logo visible top-left on all 4, looks like the original
- [ ] **Realism test** — at thumbnail size, do all 4 look like real photographs?
- [ ] **Image 2 specific test** — colour difference between virgin/chemical (clear) and mechanical r-PET (yellowish) is the point — confirm it shows
- [ ] Confirm `vksTech.com` watermark visible on each
- [ ] Place all 4 PNGs in the same folder as `index.html`

## 🔁 IF GEMINI WARPS THE LOGO

Even with "use as-is" instructions, AI generators sometimes redraw uploaded logos. Fallback:
1. Regenerate 1-2 times — sometimes works on retry
2. **Manual paste:** Generate the image WITHOUT the logo, then paste real `logo.png` in Canva/Figma. 30 seconds, perfect result.

## 🔁 IF ANY IMAGE LOOKS TOO CARTOONISH

1. Regenerate 2-3 times — variability is normal
2. Add to prompt: `"Shot on Canon R5 with 50mm lens, professional editorial photography, magazine quality, photo-realistic, NOT illustration"`
3. For complex scenes (Image 4 desk), generate fewer objects first, add the rest in Photoshop/Canva later

## 🔁 IF GEMINI MIXES UP THE PELLET TYPES (Image 2)

Image 2 hinges on the VISUAL difference between mechanical r-PET (off-white, yellowish) and virgin/chemical r-PET (water-clear). If Gemini makes them all look the same:
1. Regenerate with extra emphasis on the colour difference
2. Or generate with all-clear pellets, then in Canva/Photoshop add a slight yellow tint + reduced clarity to the middle pile (mechanical r-PET) — gives accurate visual comparison
