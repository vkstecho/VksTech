# GEMINI IMAGE PROMPTS — Blog 27: Film Roll Weight Formula

**How to use this file:**
1. Open Google Gemini (or AI Studio with image generation enabled)
2. For EACH prompt, **attach `logo.png` to that specific prompt** (Gemini doesn't reliably retrieve files from earlier turns — re-attach every time)
3. Copy the prompt body, paste, generate, save with the exact filename shown
4. Place all images alongside `index.html` in the same folder

**Brand colors (use these exact hex values):**
- Navy `#1A2744`
- Orange `#E85D26`
- Teal `#0D8C7E`
- Cream `#FAF9F6`
- Grey `#5A5A5A`

**No photorealistic faces.** People shown back-view, hands-only, or face-obscured.

---

## IMAGE 1 — Cover (`cover.png`)

**Filename to save as:** `cover.png`
**Aspect ratio:** 16:9 landscape (1600×900 px)

**Prompt:**

> [ATTACH `logo.png` to THIS prompt]
>
> Create a photorealistic editorial magazine-cover image for a flexible-packaging industry blog post. Setting: inside a modern Indian flexible packaging plant, with rows of large film jumbo rolls (cylindrical silver/translucent rolls, ~6-8 feet diameter, on cradles) visible in soft-focus background. Foreground: a desk or table with a calculator, a notebook with formula sketches, and a partial view of a film roll. Industrial documentary photography style, warm lighting.
>
> **Magazine-cover layout overlay (text composited on the image):**
> - Top-left eyebrow strip in orange `#E85D26`: "**vksTech.com / TOOLBOX**" (small uppercase letters)
> - Main title in large white sans-serif (Inter or Söhne Bold): "**Film Roll Weight in 10 Seconds**"
> - Subtitle below in lighter weight: "The One Formula Every FP Professional Should Know"
> - Hero formula in massive eye-catching typography (centre-right, on a semi-transparent dark panel for readability):
>   "**W = L × W × μm × ρ ÷ 10⁶**"
>   Use a tech/engineering font like Bebas Neue, Anton, or Roboto Mono. The formula should DOMINATE the image — make it 25% of the image width.
> - Below the formula, smaller orange text: "**Weight (kg) = Length × Width × Thickness × Density ÷ 1,000,000**"
> - Bottom strip in navy `#1A2744`: small Hindi line "**हर FP Professional को आना चाहिए ये Formula**" + Vivek Kumar | M.Tech NIT Uttarakhand | 9+ Years Flexible Packaging
> - **Place the attached VKS Tech logo** in the bottom-right corner, sized about 100×100 px, with subtle white background or soft drop-shadow so it's clearly visible
>
> Editorial WSJ/Bloomberg magazine cover aesthetic. Avoid stock-photo feel. Professional, tool-reference, "look smart" tone. NO red color anywhere except orange `#E85D26`.

**Plan B (manual logo composite):** If Gemini ignores the attached logo or generates a placeholder, generate without the logo, then in any image editor (Canva, Photopea, GIMP) place `logo.png` manually at bottom-right at ~100×100 px.

---

## IMAGE 2A — Formula Derivation, English (`formula-derivation-en.png`)

**Filename to save as:** `formula-derivation-en.png`
**Aspect ratio:** 16:9 landscape (1600×900 px)

**Prompt:**

> [ATTACH `logo.png` to THIS prompt]
>
> Create a clean flat editorial infographic showing the derivation of the film roll weight formula. NO photorealism — pure flat vector infographic, WSJ/Bloomberg style.
>
> **Background:** cream `#FAF9F6`
> **Title at top (navy `#1A2744`):** "**The Three Unit Conversions — Why ÷ 1,000,000?**"
> **Subtitle (smaller, grey `#5A5A5A`):** "From metres, millimetres, microns to kilograms — derived in one diagram"
>
> **Main visual (centre):** A 3D rectangular "slab" representing a piece of film, with three dimensions labelled:
> - Long edge labelled: "**LENGTH (L) — metres**" with arrow showing direction
> - Short horizontal edge labelled: "**WIDTH (W) — millimetres**" with arrow
> - Thin vertical edge labelled: "**THICKNESS (μm) — micron**" with arrow (this is the smallest dimension)
> The slab should look like film — silver/translucent material aesthetic.
>
> **Below the slab, a step-by-step derivation flow (horizontal arrangement, 4 boxes connected by arrows):**
>
> Box 1 (teal `#0D8C7E` border):
> "**Step 1: Volume**
> L × W × μm
> (mixed units — must convert)"
>
> Arrow → Box 2 (teal):
> "**Step 2: Convert mm to m**
> ÷ 1,000"
>
> Arrow → Box 3 (teal):
> "**Step 3: Convert μm to m**
> ÷ 1,000,000"
>
> Arrow → Box 4 (orange `#E85D26` border, bigger):
> "**Step 4: Multiply by Density (ρ in g/cc)**
> Combine all conversions
> = ÷ 1,000,000"
>
> **Final formula box at bottom (navy `#1A2744` background, white text, large):**
> "**Weight (kg) = L × W × μm × ρ ÷ 1,000,000**"
>
> **Place the attached VKS Tech logo** in the bottom-right corner, ~80×80 px.
>
> **Bottom strip (navy `#1A2744` background, white text):** "vksTech.com — Free Calculators. Real Plant Methodology."
>
> Font: Inter or Söhne sans-serif throughout. Clean, minimal, executive-ready. NO decorative clipart.

**Plan B:** If logo is ignored, place manually at bottom-right after generation.

---

## IMAGE 2B — Formula Derivation, Hindi (`formula-derivation-hi.png`)

**Filename to save as:** `formula-derivation-hi.png`
**Aspect ratio:** 16:9 landscape (1600×900 px)

**Prompt:**

> [ATTACH `logo.png` to THIS prompt]
>
> Same as IMAGE 2A but with Hindi labels. Use Hind or Mukta Devanagari font for Hindi text. Technical terms (LENGTH, WIDTH, THICKNESS, metre, mm, micron, μm, kg, etc.) stay in English.
>
> **Title (Hindi):** "**तीन Unit Conversions — ÷ 1,000,000 क्यों?**"
> **Subtitle (Hindi):** "Metres, millimetres, microns से kilograms तक — एक diagram में derived"
>
> **Slab labels:**
> - "**LENGTH (L) — metres**"
> - "**WIDTH (W) — millimetres**"
> - "**THICKNESS (μm) — micron**"
>
> **Box 1 (Hindi):**
> "**Step 1: Volume**
> L × W × μm
> (mixed units — convert करना है)"
>
> **Box 2 (Hindi):**
> "**Step 2: mm को m में Convert करें**
> ÷ 1,000"
>
> **Box 3 (Hindi):**
> "**Step 3: μm को m में Convert करें**
> ÷ 1,000,000"
>
> **Box 4 (Hindi):**
> "**Step 4: Density (ρ in g/cc) से Multiply करें**
> सब conversions combine करें
> = ÷ 1,000,000"
>
> **Final formula box (English math, since formulas are universal):**
> "**Weight (kg) = L × W × μm × ρ ÷ 1,000,000**"
>
> **Bottom strip (Hindi):** "vksTech.com — Free Calculators. Real Plant Methodology।"
>
> All other styling identical to IMAGE 2A. **Attach logo.png and place at bottom-right ~80×80 px.**

**Plan B:** If logo is ignored, place manually at bottom-right after generation.

---

## IMAGE 3 — Density Cheat Sheet, Universal (`density-cheat-sheet.png`)

**Filename to save as:** `density-cheat-sheet.png`
**Aspect ratio:** 16:9 landscape (1600×900 px)

**Prompt:**

> [ATTACH `logo.png` to THIS prompt]
>
> Create a clean editorial infographic — a "cheat sheet card" of common flexible packaging film densities. Pure flat vector infographic, NO photorealism.
>
> **Background:** cream `#FAF9F6`
> **Title at top (navy `#1A2744`, large):** "**The Density Cheat Sheet**"
> **Subtitle (grey `#5A5A5A`):** "Memorise these eight numbers. Stick this on your laptop."
>
> **Main content: a grid of 10 cards (2 rows × 5 columns), each card showing one film type. Each card design:**
> - Card background: white with soft drop-shadow
> - Top of card: large bold density number in orange `#E85D26` (e.g., "**1.38**")
> - Below: unit "g/cc" in smaller grey
> - Below: film type name in navy `#1A2744` bold (e.g., "**PET (BOPET)**")
> - Bottom: short descriptor in small grey italic (e.g., "Polyester. Heaviest common film.")
>
> **The 10 cards (in this order):**
> 1. **1.38** g/cc — **PET (BOPET)** — "Polyester. Heaviest common film."
> 2. **0.91** g/cc — **BOPP** — "Polypropylene biaxial. Lightest."
> 3. **0.90** g/cc — **CPP** — "Cast polypropylene."
> 4. **0.92** g/cc — **LDPE** — "Low-density polyethylene."
> 5. **0.96** g/cc — **HDPE** — "High-density polyethylene."
> 6. **0.92** g/cc — **LLDPE** — "Linear low-density PE."
> 7. **1.14** g/cc — **BOPA / Nylon** — "Polyamide film."
> 8. **1.38** g/cc — **PVC** — "Same density as PET."
> 9. **2.70** g/cc — **Aluminium foil** — "Heavy. For laminates."
> 10. **0.70-1.00** g/cc — **Paper** — "Varies by GSM & treatment."
>
> **Below the grid, a callout strip (navy `#1A2744` background, orange `#E85D26` text on left, white text on right):**
> Left: "**⚡ Quick test:**"
> Right: "PET 1.38 vs industry shorthand 1.40 — the 1.45% gap is ₹52,200 on a 20 MT consignment."
>
> **Place the attached VKS Tech logo** in the bottom-right ~80×80 px.
> **Bottom strip:** "vksTech.com — Universal Film Reference"
>
> Font: Inter or Söhne. Clean grid layout. Print-friendly so engineers can actually print and stick on laptops.

**Plan B:** If logo is ignored, place manually at bottom-right after generation.

---

## IMAGE 4A — Five Roles Where This Saves You, English (`five-roles-en.png`)

**Filename to save as:** `five-roles-en.png`
**Aspect ratio:** 16:9 landscape (1600×900 px)

**Prompt:**

> [ATTACH `logo.png` to THIS prompt]
>
> Create a flat editorial infographic showing five role-cards arranged horizontally — each card representing one role where the film weight formula creates value.
>
> **Background:** cream `#FAF9F6`
> **Title at top (navy `#1A2744`):** "**Five Roles. Five Places This Formula Saves You.**"
> **Subtitle (grey `#5A5A5A`):** "Every working day, this formula recovers money for someone in flexible packaging"
>
> **Five role-cards arranged horizontally (each card same size, drop-shadow, white background):**
>
> **Card 1 — Stores / QC**
> - Icon: weighbridge / clipboard
> - Title (navy bold): "**Stores / QC**"
> - Subtitle (orange): "Inward Verification"
> - Body (small grey): "Catch supplier weight gaps. Raise debit notes."
> - Bottom badge (orange `#E85D26` background, white text): "**₹13.5 L/year**"
>
> **Card 2 — Slitting**
> - Icon: cutting blade / roll
> - Title: "**Slitting**"
> - Subtitle (orange): "Per-Roll Target"
> - Body: "Tune cutter to ±2%. No under-weight rejects."
> - Bottom badge: "**₹4-6 L/slitter**"
>
> **Card 3 — Sales**
> - Icon: handshake / quote document
> - Title: "**Sales**"
> - Subtitle (orange): "Live Pricing"
> - Body: "Quote in 15 seconds. Customers impressed."
> - Bottom badge: "**Faster close**"
>
> **Card 4 — Procurement**
> - Icon: contract / scales
> - Title: "**Procurement**"
> - Subtitle (orange): "Tender Comparison"
> - Body: "Compare ₹/m vs ₹/kg vs ₹/sqm. Flip decisions."
> - Bottom badge: "**3-5% savings**"
>
> **Card 5 — Production / Process**
> - Icon: factory / chart
> - Title: "**Production**"
> - Subtitle (orange): "Loss Tracking"
> - Body: "Convert metres to kg to ₹. Actionable rupees."
> - Bottom badge: "**₹3,130 / 350m**"
>
> **Below the five cards, a unifying line (navy `#1A2744` background, white text, orange highlight):**
> "**One formula. Five roles. ₹2-5 lakh of leaks caught per year — by the engineer who looks smart in 10 seconds.**"
>
> **Place the attached VKS Tech logo** in the bottom-right ~80×80 px.
> **Bottom strip:** "vksTech.com"
>
> Font: Inter or Söhne. Clean card layout. Equal card heights. Use simple line icons (lucide.dev style) — NOT cute clipart.

**Plan B:** If logo is ignored, place manually at bottom-right after generation.

---

## IMAGE 4B — Five Roles, Hindi (`five-roles-hi.png`)

**Filename to save as:** `five-roles-hi.png`
**Aspect ratio:** 16:9 landscape (1600×900 px)

**Prompt:**

> [ATTACH `logo.png` to THIS prompt]
>
> Same as IMAGE 4A but with Hindi labels. Use Hind or Mukta Devanagari font for Hindi text. Role names stay in English. Money amounts stay in English numerals (Indian rupee format).
>
> **Title (Hindi):** "**पाँच Roles. पाँच जगह जहाँ ये Formula आपको बचाता है।**"
> **Subtitle (Hindi):** "हर working day, ये formula flexible packaging में किसी न किसी के लिए पैसा recover करता है"
>
> **Card 1 — Stores / QC:**
> - Subtitle: "Inward Verification"
> - Body (Hindi): "Supplier weight gaps catch करें। Debit notes raise करें।"
> - Badge: "**₹13.5 L/year**"
>
> **Card 2 — Slitting:**
> - Subtitle: "Per-Roll Target"
> - Body (Hindi): "Cutter को ±2% पर tune करें। कोई under-weight rejects नहीं।"
> - Badge: "**₹4-6 L/slitter**"
>
> **Card 3 — Sales:**
> - Subtitle: "Live Pricing"
> - Body (Hindi): "15 seconds में quote करें। Customers impressed।"
> - Badge: "**Faster close**"
>
> **Card 4 — Procurement:**
> - Subtitle: "Tender Comparison"
> - Body (Hindi): "₹/m vs ₹/kg vs ₹/sqm compare करें। Decisions flip करें।"
> - Badge: "**3-5% savings**"
>
> **Card 5 — Production / Process:**
> - Subtitle: "Loss Tracking"
> - Body (Hindi): "Metres को kg में, फिर ₹ में convert करें। Actionable rupees।"
> - Badge: "**₹3,130 / 350m**"
>
> **Bottom unifying line (Hindi):**
> "**एक formula। पाँच roles। हर साल ₹2-5 लाख leaks catched — उस engineer द्वारा जो 10 seconds में smart दिखता है।**"
>
> **Bottom strip:** "vksTech.com"
>
> All other styling identical to IMAGE 4A. **Attach logo.png and place at bottom-right ~80×80 px.**

**Plan B:** If logo is ignored, place manually at bottom-right after generation.

---

## QUALITY CHECKLIST — Before Publishing

Run through this list for EACH generated image before accepting:

- [ ] **VKS Tech logo visible** in bottom-right corner (if not, manually composite using Plan B)
- [ ] **Brand colors only:** Navy `#1A2744`, Orange `#E85D26`, Teal `#0D8C7E`, Cream `#FAF9F6`. NO other red, NO blue/green/yellow outside palette.
- [ ] **No photorealistic faces** — people shown back-view, hands-only, or face-obscured
- [ ] **All numbers correct:** 1.38, 0.91, 0.90, 0.92, 0.96, 1.14, 2.70, ₹13.5 L, ₹2-5 L, etc.
- [ ] **Formula is correct:** `W = L × W × μm × ρ ÷ 1,000,000` (or 10⁶ shorthand)
- [ ] **Text is readable** — not cut off, not overlapping, font crisp
- [ ] **No watermarks** from Gemini/AI tools (regenerate or crop if present)
- [ ] **File saved with EXACT filename** as specified above
- [ ] **Resolution at least 1600×900** for sharp display on desktop and mobile

---

## TROUBLESHOOTING

**Problem: Gemini ignores the attached logo.**
Solution: Use Plan B for that image. Generate without logo, then composite manually using Canva, Photopea, or any image editor. Place logo at bottom-right at ~80×80 px (or 100×100 for cover).

**Problem: Greek letters (μm, ρ) come out as gibberish or boxes.**
Solution: Add to prompt: "Render Greek letters μ (mu) and ρ (rho) using a Unicode-safe font. If μ doesn't render, use 'um' or 'micron' as substitute." If still failing, generate without Greek letters and use plain text "micron" and "rho" — then in image editor overlay the Greek letters using a font like Symbol or DejaVu Sans.

**Problem: Numbers come out wrong (e.g., "1.38" becomes "1,38" or "138").**
Solution: Regenerate. If problem persists, use the image editor to overlay correct numbers as text on top.

**Problem: Image has unwanted decorative elements (icons of confetti, hearts, etc.).**
Solution: Add to prompt: "STRICTLY no decorative elements, no clipart, no flourishes. WSJ/Bloomberg editorial style ONLY."

**Problem: Hindi text renders incorrectly.**
Solution: Most Gemini models handle Devanagari poorly. Generate the EN version first, save it, then in an image editor REPLACE the text portions with proper Hindi rendered through a tool like Google Fonts (Hind, Mukta) or a Hindi text generator.

---

**Folder structure when complete:**
```
27-film-roll-weight-formula/
├── index.html
├── logo.png
├── cover.png
├── formula-derivation-en.png
├── formula-derivation-hi.png
├── density-cheat-sheet.png
├── five-roles-en.png
├── five-roles-hi.png
└── GEMINI-PROMPTS.md (this file)
```
