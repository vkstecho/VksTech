# 🎨 Gemini Image Prompts — Aluminium Metallisation Blog
## Complete Gemini-Only Workflow with Logo Reference

**Tool:** Google Gemini (Nano Banana) — `gemini.google.com`
**Workflow:** Upload logo.png with FIRST prompt → Reference it in ALL subsequent prompts
**Total images:** 9 (1 Bilingual Cover + 4 English + 4 Hindi)

---

# 📋 CRITICAL WORKFLOW INSTRUCTIONS

## Before You Start

1. **Have `logo.png` ready** (from your project files)
2. **Open Gemini** at `gemini.google.com` (use same session for all 9 images)
3. **Keep same chat session** — Gemini remembers reference images within a session
4. **Work in sequence** — generate images in order below (1 → 9)

## Logo Reference Strategy

**IMAGE 1 (First):** Upload `logo.png` + prompt saying "use this as brand logo"
**IMAGES 2-9 (Subsequent):** Reference "the VKS Tech logo from previous image" — 
Gemini will pull from its memory of uploaded image

---

# 🌟 IMAGE 1: BILINGUAL COVER

**Filename:** `cover.png`
**Dimensions:** 1600 × 900 (16:9)
**Shown:** Always (both language toggles)
**⚠️ IMPORTANT: Upload `logo.png` with this prompt**

## Prompt (Copy-paste with logo upload):

```
[Upload logo.png attached to this prompt]

Create a photorealistic cinematic industrial photograph for a bilingual blog 
cover image. Wide 16:9 horizontal composition, 1600x900 pixels.

SCENE: Inside a modern vacuum metallization plant. Hero shot showing a 
massive stainless steel vacuum metallizer chamber in active operation. The 
chamber's large rectangular viewing window reveals dramatic interior — a 
gleaming chill drum rotating slowly with a 2-meter-wide transparent BOPET 
film transforming in real-time: enters the drum transparent, exits as a 
brilliant mirror-like silver metallized film. Below the drum, five ceramic 
evaporation boats glow fiercely at 1500°C in intense orange-white, emitting 
visible silver aluminum vapor clouds rising upward. Industrial environment 
with copper bus-bars, vacuum pumps out of focus in background.

COMPOSITION: Left two-thirds shows metallizer machinery. Right one-third 
has darker gradient fade to deep navy blue (#1A2744) for text overlay area.

TEXT TO INCLUDE (render cleanly in right third):
Line 1: "METALLISATION" (bold English, white color, large 64pt font)
Line 2: "मेटालाइज़ेशन" (bold Hindi/Devanagari, orange color #E85D26, 56pt)
Line 3: "Why Aluminum? | एल्युमिनियम क्यों?" (subtitle, teal #0D8C7E, 28pt)

BRAND LOGO:
Use the uploaded logo.png image EXACTLY as provided. Place it in bottom-right 
corner at 80x80 pixels size with 20px margin from edges. Do NOT recreate or 
modify the logo — use the exact uploaded file.

Next to logo, add text: "vkstech.com" in white/cream color, 16pt font, Inter 
font style.

LIGHTING: Dramatic chiaroscuro with deep navy-blue shadows and intense 
orange-amber glow from evaporation boats. Shot on Sony A7R IV, 24mm lens, 
f/4, ISO 800. Photojournalistic documentary style, 8K quality, color graded 
with navy blue and orange complementary palette.

Style: Cinematic, educational, professional, attention-grabbing for both 
English and Hindi readers.
```

---

# 🇬🇧 IMAGE 2: METALLIZER ANATOMY — ENGLISH

**Filename:** `metallisation-process.png`
**Dimensions:** 1600 × 1000
**Shown:** When English toggle active

## Prompt (reference logo from Image 1):

```
Create another image for the same blog series. Use the SAME VKS Tech logo 
from the previous image (the S+heart logo uploaded earlier) — place it in 
bottom-right corner, same 80x80 px size.

IMAGE TYPE: Highly detailed technical cutaway illustration of a vacuum 
metallizer chamber, 3D isometric perspective, educational engineering 
schematic style blended with photorealistic rendering.

VIEW: Cross-section showing complete interior as if chamber wall is cut 
open, revealing all internal components.

COMPONENTS TO DEPICT WITH CLEAR LABELS (render all labels in clean English 
sans-serif font like Inter Bold):

TOP ROW (left to right):
- "UNWINDER" → large roll of transparent BOPET film on left
- "FILM PATH" → transparent film threading through guide rollers
- "CHILL DRUM (-20°C)" → large cylindrical drum with visible cooling coils
- "REWINDER" → finished silver metallized film being wound on right

CENTER AREA:
- "CERAMIC EVAPORATION BOATS (1500°C)" → 5 rectangular trough-shaped boats 
  (30cm × 4cm × 3cm each), glowing bright orange-white
- "ALUMINUM VAPOR" → visible silver vapor clouds rising from boats to drum
- "ALUMINUM WIRE FEED" → wire reels on both sides feeding into boats
- "COPPER BUS-BARS" → electrical connection clamps

BOTTOM:
- "VACUUM PUMPS" → pressure reading "8 × 10⁻⁴ mbar"
- "COOLING SYSTEM" → chilled water pipes visible

SIDE:
- "VIEWING WINDOW" → circular glass port
- "CONTROL PANEL" → digital display showing "OD: 2.2" and "Speed: 750 m/min"

COLOR-CODED LABELS:
- Navy blue (#1A2744) for structural components
- Orange (#E85D26) for heat zones
- Teal (#0D8C7E) for gas/vapor flow
- Red (#C8102E) for electrical connections

TITLE AT TOP (large, bold, centered):
"VACUUM METALLIZER ANATOMY"

SUBTITLE:
"Inside the machine that transforms clear film into silver barrier"

TOP-LEFT BADGE: Orange pill-shaped badge with text "Manufacturing Excellence"

BOTTOM-RIGHT: The VKS Tech logo (from uploaded reference) + "vkstech.com" 
text in cream color

BACKGROUND: Clean cream #FAF9F6
STYLE: Encyclopedia Britannica meets modern 3D infographic, ultra-high 
detail, professional technical education style.

Dimensions: 1600 × 1000 pixels (8:5 aspect ratio)
```

---

# 🇮🇳 IMAGE 3: METALLIZER ANATOMY — HINDI

**Filename:** `metallisation-process-hi.png`
**Dimensions:** 1600 × 1000
**Shown:** When Hindi toggle active

## Prompt:

```
Create the Hindi version of the previous metallizer anatomy diagram. Use 
the SAME VKS Tech logo (from uploaded reference) in bottom-right corner.

EXACT SAME VISUAL as previous metallizer cutaway image — 3D isometric 
cross-section showing chill drum, BOPET film, ceramic evaporation boats, 
aluminum vapor, unwinder, rewinder, vacuum pumps, etc.

DIFFERENCE: All labels and titles are in Hindi/Devanagari script instead 
of English. Use Noto Sans Devanagari Bold font for all Hindi text.

LABELS (replace English with these Hindi labels in exact same positions):

TOP ROW (left to right):
- "अनवाइंडर" (Unwinder)
- "फ़िल्म पथ" (Film Path)
- "चिल ड्रम (-20°C)" (Chill Drum)
- "रीवाइंडर" (Rewinder)

CENTER:
- "सेरामिक बोट्स (1500°C)" (Ceramic Boats)
- "एल्युमिनियम वाष्प" (Aluminum Vapor)
- "एल्युमिनियम वायर फीड" (Aluminum Wire Feed)
- "कॉपर बस-बार" (Copper Bus-bars)

BOTTOM:
- "वैक्यूम पंप (8×10⁻⁴ mbar)" (Vacuum Pumps)
- "कूलिंग सिस्टम" (Cooling System)

SIDE:
- "व्यूइंग विंडो" (Viewing Window)
- "कंट्रोल पैनल" (Control Panel)

TITLE AT TOP (large, bold Devanagari):
"वैक्यूम मेटालाइज़र की पूरी समझ"

SUBTITLE:
"वो मशीन जो पारदर्शी फ़िल्म को silver barrier में बदल देती है"

TOP-LEFT BADGE: Orange pill badge "निर्माण उत्कृष्टता" (Manufacturing Excellence)

BOTTOM-RIGHT: VKS Tech logo (from uploaded reference) + "vkstech.com"

CRITICAL: Render Hindi text ACCURATELY using proper Devanagari script. Do 
NOT hallucinate or create fake Devanagari characters. If unsure about any 
specific character, leave it blank rather than guess.

Same color coding, cream background, technical illustration style.
Dimensions: 1600 × 1000 pixels
```

**⚠️ Fallback if Gemini mangles Devanagari:** Regenerate prompt asking for 
BLANK labels, then add text manually in any image editor.

---

# 🇬🇧 IMAGE 4: BARRIER PHYSICS — ENGLISH

**Filename:** `barrier-comparison.png`
**Dimensions:** 1600 × 900
**Shown:** When English toggle active

## Prompt:

```
Create another educational image for the same blog. Use the SAME VKS Tech 
logo (from uploaded reference) in bottom-right corner.

IMAGE TYPE: Dramatic scientific visualization, split-screen comparison 
showing atomic-scale cross-sections of packaging film. Educational 
infographic meets photorealistic science illustration.

LEFT PANEL (title "WITHOUT METALLISATION"):
- Transparent BOPET film layer in cross-section, labeled "12 micron PET film"
- Oxygen molecules (red-and-blue O₂ molecular structures) PASSING THROUGH 
  the film from outside to inside
- Water vapor (H₂O) molecules also passing through
- Motion blur arrows showing permeation direction
- Below the film: stale, brown, soggy potato chips
- Bottom label: "Shelf life: 2 weeks ❌"
- Background: light blue gradient

RIGHT PANEL (title "WITH 40nm ALUMINUM METALLISATION"):
- Same 12-micron PET film + ultra-thin silver metallic layer on top
- Prominent callout: "40 NANOMETERS — THINNER THAN A VIRUS (100nm)"
- Same oxygen and water molecules hitting the aluminum layer and BOUNCING 
  BACK (blocked completely)
- Atomic-scale view showing aluminum atoms packed in tight metallic lattice
- Below: fresh, crispy, golden potato chips
- Bottom label: "Shelf life: 6 months ✓"
- Background: light teal gradient

CENTER BOTTOM INSET (spanning both panels):
Thickness comparison bar chart with proportional visual sizes:
- Human hair: 70,000 nm (large bar)
- Paper: 100,000 nm (largest bar)
- Aluminum metallization: 40 nm (tiny bar, HIGHLIGHTED in orange)
- Atom: 0.1 nm (dot)

TITLE AT TOP (large, bold, centered):
"THE 40 NANOMETER MIRACLE"

SUBTITLE:
"Why an invisible layer blocks oxygen completely"

TOP-LEFT BADGE: Orange pill "Manufacturing Excellence"

BOTTOM-RIGHT: VKS Tech logo (from uploaded reference) + "vkstech.com"

STYLE: Photorealistic scientific illustration with navy blue molecular 
structures, silver metallic barrier with subtle iridescence, teal packaging 
elements, orange accents on critical numbers. Educational infographic quality.

Dimensions: 1600 × 900 pixels (16:9 aspect ratio)
All text in clean English sans-serif (Inter Bold)
```

---

# 🇮🇳 IMAGE 5: BARRIER PHYSICS — HINDI

**Filename:** `barrier-comparison-hi.png`
**Dimensions:** 1600 × 900
**Shown:** When Hindi toggle active

## Prompt:

```
Create the Hindi version of the previous 40nm barrier physics image. Use 
the SAME VKS Tech logo (from uploaded reference) in bottom-right corner.

EXACT SAME VISUAL COMPOSITION as previous barrier image — split-screen with 
molecules passing through on left, molecules blocked on right, stale chips 
vs fresh chips, thickness comparison inset at bottom.

HINDI TEXT (use Noto Sans Devanagari Bold):

MAIN TITLE AT TOP:
"40 नैनोमीटर का चमत्कार"

SUBTITLE:
"एक अदृश्य परत ऑक्सीजन को पूरी तरह कैसे रोक देती है"

LEFT PANEL HEADER: "बिना मेटालाइज़ेशन"
LEFT PANEL BOTTOM LABEL: "शेल्फ लाइफ: 2 हफ़्ते ❌"

RIGHT PANEL HEADER: "40nm एल्युमिनियम मेटालाइज़ेशन के साथ"
RIGHT PANEL PROMINENT LABEL: "40 नैनोमीटर — वायरस से भी पतला (100nm)"
RIGHT PANEL BOTTOM LABEL: "शेल्फ लाइफ: 6 महीने ✓"

MOLECULE LABELS:
- O₂ molecule: "ऑक्सीजन (O₂)"
- H₂O molecule: "नमी (H₂O)"

THICKNESS COMPARISON INSET (bottom center):
- "बाल की मोटाई: 70,000 nm"
- "काग़ज़: 100,000 nm"
- "एल्युमिनियम Layer: 40 nm" (highlighted in orange)
- "परमाणु: 0.1 nm"

TOP-LEFT BADGE: Orange pill "निर्माण उत्कृष्टता"

BOTTOM-RIGHT: VKS Tech logo (from uploaded reference) + "vkstech.com"

CRITICAL: Render Hindi/Devanagari text ACCURATELY. Do not hallucinate or 
create fake Devanagari characters. If uncertain about any specific character 
combination, leave that specific word blank for manual overlay.

Same color palette (navy blue molecular structures, silver metallic barrier, 
teal packaging, orange number accents).

Dimensions: 1600 × 900 pixels
```

---

# 🇬🇧 IMAGE 6: 8 METALS COMPARISON — ENGLISH

**Filename:** `metals-use-cases.png`
**Dimensions:** 1600 × 1000
**Shown:** When English toggle active

## Prompt:

```
Create another educational image for the same blog. Use the SAME VKS Tech 
logo (from uploaded reference) in bottom-right corner.

IMAGE TYPE: Professional educational infographic, photorealistic product 
photography composition. Dark navy blue background (#1A2744).

COMPOSITION: 8 different metal samples arranged in a 4×2 grid. Each metal 
shown as realistic physical sample at 45-degree angle with professional 
studio lighting revealing metallic textures and surface details.

TOP ROW (The Affordable Side):

1. ALUMINUM — shiny silver ingot with matte finish
   - Spotlighted with golden/orange glow border (THE WINNER)
   - Crown emoji icon above
   - Price tag: "₹380/kg"
   - Ratio tag: "1× baseline"
   - Caption below: "Universal packaging"

2. ZINC — bluish-silver metal ingot
   - Price tag: "₹300/kg"
   - Ratio: "0.8×"
   - Caption: "Toxicity concern"

3. CHROMIUM — mirror-like silver-white chunk
   - Price tag: "₹400/kg"
   - Ratio: "~1×"
   - Caption: "Cr(VI) carcinogenic"

4. COPPER — distinctive orange-red copper ingot
   - Price tag: "₹1,250/kg"
   - Ratio: "~4×"
   - Caption: "Reacts with acids"

BOTTOM ROW (The Premium Side):

5. NICKEL — silvery metallic sample
   - Price tag: "₹1,700/kg"
   - Ratio: "~5×"
   - Caption: "Allergen risk"

6. TIN — bright silver tin bar
   - Price tag: "₹3,000/kg"
   - Ratio: "~8×"
   - Caption: "Replaced by Al"

7. SILVER — polished silver bullion bar
   - Price tag: "₹2,60,000/kg"
   - Ratio: "~680×"
   - Caption: "Luxury only"

8. GOLD — yellow gold bar
   - Price tag: "₹1.53 crore/kg"
   - Ratio: "~40,000×"
   - Caption: "Absurd for packaging"

VISUAL EMPHASIS:
- Aluminum sample elevated slightly with golden spotlight
- "UNIVERSAL CHOICE" banner above aluminum
- Each metal labeled with chemical symbol in elegant serif font 
  (Al, Zn, Cr, Cu, Ni, Sn, Ag, Au)

MAIN TITLE AT TOP (bold, white):
"8 METALS FOR METALLISATION — AND WHY ALUMINUM WINS"

TOP-LEFT BADGE: Orange pill "Manufacturing Excellence"

BOTTOM BANNER (cream color):
"📅 Prices: April 2026 | Source: MCX, NALCO, LME"

BOTTOM-RIGHT: VKS Tech logo (from uploaded reference) + "vkstech.com"

STYLE: Studio product photography quality, Canon EOS R5 with 100mm macro 
lens, f/8 aperture, softbox key light from above-left. Commercial catalog 
aesthetic.

Dimensions: 1600 × 1000 pixels
All text in clean English sans-serif
```

---

# 🇮🇳 IMAGE 7: 8 METALS COMPARISON — HINDI

**Filename:** `metals-use-cases-hi.png`
**Dimensions:** 1600 × 1000
**Shown:** When Hindi toggle active

## Prompt:

```
Create the Hindi version of the previous 8 metals comparison image. Use 
the SAME VKS Tech logo (from uploaded reference) in bottom-right corner.

EXACT SAME VISUAL: 8 metal samples in 4x2 grid on navy blue background. 
Aluminum (spotlighted with orange glow and crown), Zinc (bluish silver), 
Chromium (mirror silver), Copper (orange-red), Nickel (silvery), Tin (bright 
silver), Silver (polished bullion), Gold (yellow bar).

HINDI LABELS (use Noto Sans Devanagari Bold):

MAIN TITLE AT TOP:
"Metallisation के लिए 8 धातुएँ — और Aluminum क्यों जीतता है"

FOR EACH METAL (Hindi name + price + ratio + caption):

1. ALUMINUM (highlighted with crown):
   - Name: "एल्युमिनियम (Al)"
   - Price: "₹380/kg"
   - Ratio: "1× baseline"
   - Caption: "Universal पैकेजिंग"

2. ZINC:
   - Name: "ज़िंक (Zn)"
   - Price: "₹300/kg"
   - Ratio: "0.8×"
   - Caption: "Toxicity concern"

3. CHROMIUM:
   - Name: "क्रोमियम (Cr)"
   - Price: "₹400/kg"
   - Ratio: "~1×"
   - Caption: "Cr(VI) carcinogenic"

4. COPPER:
   - Name: "तांबा (Cu)"
   - Price: "₹1,250/kg"
   - Ratio: "~4×"
   - Caption: "Acids से react करता है"

5. NICKEL:
   - Name: "निकल (Ni)"
   - Price: "₹1,700/kg"
   - Ratio: "~5×"
   - Caption: "Allergen risk"

6. TIN:
   - Name: "टिन (Sn)"
   - Price: "₹3,000/kg"
   - Ratio: "~8×"
   - Caption: "Al ने replace किया"

7. SILVER:
   - Name: "चांदी (Ag)"
   - Price: "₹2,60,000/kg"
   - Ratio: "~680×"
   - Caption: "केवल luxury"

8. GOLD:
   - Name: "सोना (Au)"
   - Price: "₹1.53 करोड़/kg"
   - Ratio: "~40,000×"
   - Caption: "Packaging के लिए absurd"

CROWN BANNER ON ALUMINUM: "Universal Choice — सर्वश्रेष्ठ विकल्प"

TOP-LEFT BADGE: Orange pill "निर्माण उत्कृष्टता"

BOTTOM BANNER:
"📅 Prices: अप्रैल 2026 | Source: MCX, NALCO, LME"

BOTTOM-RIGHT: VKS Tech logo (from uploaded reference) + "vkstech.com"

CRITICAL: Render Hindi/Devanagari text ACCURATELY. Do not hallucinate 
characters.

Same studio product photography quality as previous metals image.
Dimensions: 1600 × 1000 pixels
```

---

# 🇬🇧 IMAGE 8: PROCESS FLOW — ENGLISH

**Filename:** `process-flow.png`
**Dimensions:** 1600 × 800 (2:1 banner)
**Shown:** When English toggle active

## Prompt:

```
Create a process flow banner image for the same blog. Use the SAME VKS Tech 
logo (from uploaded reference) in bottom-right corner.

IMAGE TYPE: Clean horizontal 5-stage process flow infographic showing 
complete vacuum metallization process from left to right. Each stage is a 
separate panel with numbered orange circles (1-5) and connecting arrows.

STAGE 1 (Leftmost): "BARE FILM INPUT"
- Visual: Clear transparent BOPET film roll on unwinder
- Film shown as see-through with sunlight passing through
- Label: "Input: Clear PET film"
- Number: 1 in orange circle

STAGE 2: "CHAMBER PUMPDOWN"
- Visual: Large vacuum chamber with prominent vacuum gauge
- Gauge reading dropping from 1000 mbar (atmospheric) to "8 × 10⁻⁴ mbar"
- Timer displays "15 minutes"
- Label: "Remove all air"
- Number: 2 in orange circle

STAGE 3: "BOAT HEATING"
- Visual: Ceramic evaporation boats heating progression
- Show 3 progressive states in one panel: cold gray → dull red → bright 
  orange-white (1500°C)
- Temperature gauge reading
- Label: "Boats at 1500°C"
- Number: 3 in orange circle

STAGE 4: "ALUMINUM EVAPORATION"
- Visual: Bright silver aluminum vapor rising from hot boats
- Depositing on chill drum surface as film passes over
- Arrows showing vapor direction upward
- Label: "Vapor deposits as 40nm layer"
- Number: 4 in orange circle

STAGE 5 (Rightmost): "METALLIZED OUTPUT"
- Visual: Shiny silver-mirror metallized film on rewinder
- Reflecting surrounding environment like a mirror
- Quality display showing "OD: 2.2 ✓"
- Label: "Output: Silver barrier film"
- Number: 5 in orange circle

CONNECTORS: Arrow connectors between each stage, orange color with subtle 
fade effect

MAIN TITLE AT TOP:
"VACUUM METALLIZATION — FROM CLEAR FILM TO BARRIER FILM"

TOP BANNER (subtitle):
"The 5-stage transformation process"

TOP-LEFT BADGE: Orange pill "Manufacturing Excellence"

BOTTOM-RIGHT: VKS Tech logo (from uploaded reference) + "vkstech.com"

BACKGROUND: Cream #FAF9F6 with navy blue accent lines
STYLE: Professional educational infographic quality, clean technical 
documentation aesthetic. All text in English sans-serif (Inter Bold).

Dimensions: 1600 × 800 pixels (2:1 banner aspect ratio)
```

---

# 🇮🇳 IMAGE 9: PROCESS FLOW — HINDI

**Filename:** `process-flow-hi.png`
**Dimensions:** 1600 × 800 (2:1 banner)
**Shown:** When Hindi toggle active

## Prompt:

```
Create the Hindi version of the previous process flow banner. Use the SAME 
VKS Tech logo (from uploaded reference) in bottom-right corner.

EXACT SAME VISUAL COMPOSITION: 5-stage horizontal process flow from left 
to right with numbered orange circles (1-5). Same visual elements: bare 
film input, chamber pumpdown with vacuum gauge, boat heating sequence, 
aluminum evaporation with rising vapor, metallized silver film output.

HINDI LABELS (use Noto Sans Devanagari Bold):

MAIN TITLE AT TOP:
"वैक्यूम मेटालाइज़ेशन — पारदर्शी से बैरियर फ़िल्म तक"

SUBTITLE:
"5-Stage परिवर्तन प्रक्रिया"

STAGE LABELS:

Stage 1: "कच्ची फ़िल्म इनपुट"
Sub-label: "Input: पारदर्शी PET फ़िल्म"

Stage 2: "चैंबर पंपडाउन"
Sub-label: "सारी हवा निकालें"
Gauge: "8 × 10⁻⁴ mbar"

Stage 3: "बोट हीटिंग"
Sub-label: "1500°C तक गर्म करें"

Stage 4: "एल्युमिनियम वाष्पीकरण"
Sub-label: "40nm layer जमती है"

Stage 5: "मेटालाइज़्ड आउटपुट"
Sub-label: "Silver बैरियर फ़िल्म"

TOP-LEFT BADGE: Orange pill "निर्माण उत्कृष्टता"

BOTTOM-RIGHT: VKS Tech logo (from uploaded reference) + "vkstech.com"

CRITICAL: Render Hindi/Devanagari text ACCURATELY. Do not hallucinate 
characters.

Cream background, navy blue accents, orange numbered circles.
Dimensions: 1600 × 800 pixels
```

---

# 🚀 COMPLETE GEMINI WORKFLOW STEPS

## Setup (Before starting):
1. Open Gemini at `gemini.google.com`
2. Ensure you have `logo.png` file ready on your device
3. Create a new chat session (keep this SAME session for all 9 images)

## Execution:

### Image 1 (Cover) — Upload logo here:
1. Click attachment/paperclip icon in Gemini
2. Upload `logo.png`
3. Paste Image 1 prompt (includes "[Upload logo.png attached]")
4. Click generate
5. Review output, regenerate if needed
6. Download when satisfied

### Images 2-9:
1. Stay in SAME Gemini chat session
2. Paste next prompt (references "SAME VKS Tech logo from uploaded reference")
3. Gemini pulls logo from earlier upload
4. Click generate
5. Download when satisfied

### After All 9 Images:
1. Compress each at **tinypng.com** (target 50-100 KB per image)
2. Upload all 9 to GitHub folder: `18-why-aluminium-metallisation-guide/`

---

# ⚠️ IMPORTANT NOTES ON HINDI TEXT RENDERING

**Gemini's Hindi rendering is better than most AI generators**, but still not 
perfect. After generating each Hindi image, CHECK carefully:

### What to verify:
- [ ] All Devanagari characters are correctly formed
- [ ] Matras (vowel signs) are properly placed
- [ ] No missing or duplicated characters
- [ ] Numbers display correctly
- [ ] Punctuation is accurate

### If Gemini mangles Hindi:

**Option A: Regenerate**
Ask Gemini: "The Hindi text has errors. Please regenerate with correct 
Devanagari rendering. The correct text is: [paste correct Hindi text]"

**Option B: Ask for blank labels**
Modify prompt: "Generate the image with all Hindi label areas BLANK and 
EMPTY. I will add Hindi text manually in post-processing."

**Option C: Hybrid approach**
Let Gemini render titles and simple labels, but request blank areas for 
complex Hindi paragraphs. Add complex text in any image editor (even 
Windows Paint or Preview on Mac).

---

# 📊 QUALITY CHECKLIST

Before finalizing each image, verify:

## Technical Quality
- [ ] Resolution matches target (1600×900 or 1600×1000 or 1600×800)
- [ ] Sharp focus, no blur
- [ ] Brand colors accurate (Navy #1A2744, Orange #E85D26, Teal #0D8C7E)
- [ ] File size after compression under 100 KB

## Branding Consistency
- [ ] Your logo appears in bottom-right corner (from upload reference)
- [ ] Logo size is appropriate (not too large, not too small)
- [ ] "vkstech.com" text is clearly readable
- [ ] "Manufacturing Excellence" badge in top-left (if applicable)

## Content Accuracy
- [ ] All technical numbers correct (-20°C, 1500°C, 8×10⁻⁴ mbar, 40nm)
- [ ] All prices match blog (₹380/kg, ₹2,60,000/kg, etc.)
- [ ] All ratios correct (1×, 680×, 40,000×)
- [ ] Dates show "April 2026"

## Language Rendering
- [ ] English text: correctly spelled, good typography
- [ ] Hindi text: accurate Devanagari, proper matras

## Composition
- [ ] Subject/focus is clear
- [ ] Hierarchy guides reader's eye
- [ ] Balanced layout (not cluttered, not empty)
- [ ] Educational value is immediate

---

# 💡 PRO TIPS FOR GEMINI WORKFLOW

## Tip 1: Keep Chat Session Active
- Don't close Gemini tab between images
- Don't start a new chat — reference image lives in current session
- If session expires, re-upload logo and reference in new prompts

## Tip 2: Iterate on Each Image
- First generation is rarely perfect
- Click "Regenerate" or modify prompt slightly
- Take time on each — quality > speed

## Tip 3: Save Intermediate Versions
- Download even "good enough" versions as backup
- You can always redo, but good references are valuable

## Tip 4: Use Gemini's Editing Features
- Nano Banana allows image editing
- You can ask: "Make the aluminum sample larger" or "change this text color"
- Saves regenerating from scratch

## Tip 5: Consistency Check at End
- After generating all 9, view them side-by-side
- Ensure logo is consistently placed
- Ensure color palette is unified
- Ensure style feels like one cohesive set

---

# 📁 FILE DELIVERY CHECKLIST

After generating all 9 images, you'll have:

```
18-why-aluminium-metallisation-guide/
├── cover.png                    ← Bilingual (100 KB)
├── metallisation-process.png    ← English (80 KB)
├── metallisation-process-hi.png ← Hindi (80 KB)
├── barrier-comparison.png       ← English (80 KB)
├── barrier-comparison-hi.png    ← Hindi (80 KB)
├── metals-use-cases.png         ← English (100 KB)
├── metals-use-cases-hi.png      ← Hindi (100 KB)
├── process-flow.png             ← English (70 KB)
└── process-flow-hi.png          ← Hindi (70 KB)

Total: ~760 KB (perfect for mobile loading)
```

Upload all to: `github.com/vkstecho/VksTech/18-why-aluminium-metallisation-guide/`

Your blog is ready! 🚀

---

**Prepared by:** Vivek Kumar | VKS Tech | vkstech.com
**Workflow:** Gemini-only, logo-referenced, bilingual-complete
