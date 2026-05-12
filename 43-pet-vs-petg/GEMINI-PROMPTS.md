# GEMINI IMAGE PROMPTS — PET vs PETG: What's the Difference and Which One Does Your Packaging Need?

## Quick Reference

**4 images required** — 1 cover + 2 bilingual concept diagrams + 1 standalone cheat sheet

| # | Filename | Aspect | What it shows |
|---|---|---|---|
| 1 | `cover.png` | 16:9 | Cover — PET vs PETG split comparison visual + "Free Downloads" badge |
| 2A | `pet-vs-petg-en.png` | 16:9 | Head-to-head property comparison diagram (English) |
| 2B | `pet-vs-petg-hi.png` | 16:9 | Same diagram in Hindi |
| 3 | `pet-vs-petg-cheat-sheet.png` | 4:5 portrait | **Standalone cheat sheet** — properties + decision tree + where each film is used |

## How to use

1. Open Google Gemini, AI Studio, or any image-gen tool that accepts reference images
2. For EACH prompt, **attach `logo.png` to that specific prompt**
3. Copy the prompt body, paste, generate
4. Save with the **exact filename** shown
5. Place all 4 images alongside `index.html` before publishing

## Brand Standards

| Color | Hex | Use |
|---|---|---|
| Navy | `#1A2744` | Headings, dark panels, primary text |
| Orange | `#E85D26` | PET accents, hero numbers, CTA buttons |
| Teal | `#0D8C7E` | PETG accents, "good" / passing scores |
| Cream | `#FAF9F6` | Backgrounds |
| Grey | `#5A5A5A` | Subtitles, captions |

**Colour convention for this blog:** PET = Navy `#1A2744` side. PETG = Teal `#0D8C7E` side. Where one "wins" a property, highlight with Orange `#E85D26`. This is consistent across cover, diagram, and cheat sheet.

**Fonts:** Inter, Söhne, Helvetica Neue (Latin); Hind, Mukta (Devanagari). Big numbers / labels in Bebas Neue, Anton, or Oswald.

**Critical numbers / labels:** PET shrink = minimal · PETG shrink = **up to 78%** · PET heat resistance = **~120°C** · PETG heat resistance = **~70–80°C** · Properties compared = **14** · PETG cost premium = **10–20%** · Both carry Resin ID **#1**

**Rules:** No identifiable faces, no clipart, no decorative flourishes. WSJ / Bloomberg / HBR editorial style only. Flat vector only — no 3D, no gradients, no isometric.

---

## IMAGE 1 — Cover (`cover.png`)

**Save as:** `cover.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** Instantly communicate "this is a practical comparison of PET and PETG for flexible packaging professionals — with free downloads." The central visual idea is a split/duel — two materials, same family, different jobs.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square (1:1) or vertical formats. The output must be widescreen landscape. High resolution, sharp text, crisp vector edges, anti-aliased typography. Output as PNG, web-optimized (target 400–700 KB). No JPEG artifacts, no blur, no fuzzy edges on text.
>
> Create an editorial magazine-cover image for a flexible-packaging industry blog post titled **"PET vs PETG — What's the Difference and Which One Does Your Packaging Need?"**
>
> **Overall composition:** Three vertical zones — left one-third (PET panel), centre one-fifth (VS divider + title), right one-third (PETG panel), far-right one-sixth (navy editorial sidebar with downloads badge).
>
> ---
>
> **LEFT ONE-THIRD — PET Panel:**
> Background: deep navy `#1A2744` with very subtle paper-grain texture.
>
> - TOP LABEL: small orange `#E85D26` all-caps eyebrow strip: **PET · POLYETHYLENE TEREPHTHALATE**
> - BIG LETTER: massive white **"P"** at ~300pt Anton/Bebas Neue — filling the upper half of this panel, ghost-like watermark style (opacity 15%)
> - ICON ZONE: a flat-vector cross-section diagram of a flexible pouch stack — three horizontal layers labelled top-to-bottom in small white Inter text:
>     - Layer 1 (top, navy outline): **BOPET / PET Film**
>     - Layer 2 (middle, grey): **Adhesive / Al Foil**
>     - Layer 3 (bottom, lighter grey): **CPP / PE Sealant**
>   A small teal `#0D8C7E` arrow bracket at left pointing to Layer 1, labelled **"This layer is PET"**
> - PROPERTY TAGS: four small navy-outlined cream pill-tags arranged vertically:
>   - 🔲 **Rigid & Strong**
>   - 🔲 **High Barrier**
>   - 🔲 **Metallisable**
>   - 🔲 **Heat Resistant ~120°C**
> - BOTTOM: small white text — *Pouches · Retort · BOPET Film · Metallised Film*
>
> ---
>
> **CENTRE ONE-FIFTH — VS Divider:**
> Background: cream `#FAF9F6`
>
> - A bold vertical orange `#E85D26` stripe (20 px wide) running full height, acting as the divider
> - Centred on the divider, a large white circle (120 px diameter) with navy border containing the text **VS** in Bebas Neue black bold ~60pt
> - Above the VS circle: small orange all-caps: **SAME FAMILY**
> - Below the VS circle: small navy italic: *One letter. One ingredient. Completely different job.*
> - At the very bottom of this zone: a tiny teal `#0D8C7E` footnote: *"G" = Glycol*
>
> ---
>
> **RIGHT ONE-THIRD — PETG Panel:**
> Background: teal `#0D8C7E` with very subtle paper-grain texture.
>
> - TOP LABEL: small orange `#E85D26` all-caps eyebrow strip: **PETG · POLYETHYLENE TEREPHTHALATE GLYCOL**
> - BIG LETTER: massive white **"G"** at ~300pt Anton/Bebas Neue — filling the upper half, ghost-like watermark (opacity 15%)
> - ICON ZONE: a flat-vector cross-section diagram of a bottle with a shrink sleeve applied — a simple bottle silhouette (white outline) with a tight-fit sleeve drawn around it, showing:
>     - Arrow pointing to the sleeve: **"PETG Shrink Sleeve"**
>     - Small label below: **shrinks up to 78%**
>   The sleeve is drawn in orange `#E85D26` outline to contrast against the teal background
> - PROPERTY TAGS: four small teal-outlined cream pill-tags arranged vertically:
>   - 🔲 **Flexible & Soft**
>   - 🔲 **Glass-like Clarity**
>   - 🔲 **Shrinks up to 78%**
>   - 🔲 **Impact Resistant**
> - BOTTOM: small white text — *Shrink Sleeves · Blister Packs · Tamper Seals · Thermoforming*
>
> ---
>
> **FAR-RIGHT ONE-SIXTH — Navy `#1A2744` editorial sidebar:**
>
> - Orange `#E85D26` eyebrow strip, all-caps small: **vksTech.com / FREE DOWNLOADS**
> - Main title in white Inter Bold (2–3 lines, large): **PET vs PETG The Complete Guide**
> - Thin orange `#E85D26` horizontal divider (2 px)
> - DOWNLOAD BADGE BLOCK — teal accent rectangle:
>   - Label: **2 FREE FORMATS**
>   - Sub-list (white text ~12pt):
>     - ☑ Property Comparison Chart
>     - ☑ Film Selection Checklist
>   - Below: "Bilingual EN + HI · Pre-built formulas · Free"
> - Small bottom text: **Vivek Kumar | M.Tech NIT Uttarakhand | 9+ Years Flexible Packaging**
> - Bottom-right corner: VKS Tech logo at ~90×90 px on white circle backplate
>
> ---
>
> **Mood:** two-fighter comparison card. Practical, technical, immediately readable. NOT decorative, NOT marketing. Reads like a *Production Engineering* feature or a *Chemical Week* reference card.
>
> Strict colors: Navy `#1A2744`, Orange `#E85D26`, Teal `#0D8C7E`, Cream `#FAF9F6`, white. No other colors.

### Plan B
If the 4-zone composition feels cluttered, simplify to 3 zones: left half PET panel (navy), right half PETG panel (teal), centre VS medallion overlapping both. Move download badge to a bottom strip spanning full width. The split design is the hook — it must feel like a genuine side-by-side duel.

---

## IMAGE 2A — PET vs PETG Comparison Diagram (English) (`pet-vs-petg-en.png`)

**Save as:** `pet-vs-petg-en.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Goal:** A clean reference diagram showing all 14 key properties compared side by side with colour-coded winners. Professionals should be able to read this, photograph it, and use it in a supplier meeting.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square or vertical formats. High resolution, sharp text, crisp vector edges. Output as PNG (target 300–600 KB).
>
> Create a clean flat-vector editorial comparison diagram. NOT photorealistic. NOT 3D. Pure flat vector with crisp typography. *The Economist* / *Harvard Business Review* infographic style.
>
> **Background:** cream `#FAF9F6` with subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 12%):**
> - Eyebrow strip in orange `#E85D26`, small caps, letterspaced: **FLEXIBLE PACKAGING MATERIAL COMPARISON**
> - Title (navy `#1A2744`, large bold sans-serif): **PET vs PETG — 14 Properties That Matter**
> - Subtitle (grey `#5A5A5A`): *Semi-crystalline workhorse vs amorphous specialist — choose by application, not by name.*
>
> **Main visual zone (middle 78%) — COMPARISON TABLE as flat visual:**
>
> Layout: Three columns.
> - LEFT COLUMN (280 px wide): property label, navy `#1A2744` text, left-aligned
> - CENTRE COLUMN (200 px wide): PET value — navy header strip **"PET"** in orange `#E85D26`
> - RIGHT COLUMN (200 px wide): PETG value — navy header strip **"PETG"** in teal `#0D8C7E`
>
> The 14 rows (alternating cream/white background per row):
>
> | Property | PET | PETG |
> |---|---|---|
> | Molecular Structure | Semi-crystalline | Amorphous |
> | Rigidity | **Rigid ✓** (highlight orange) | Flexible |
> | Tensile Strength | **Higher ✓** (highlight orange) | Lower |
> | Impact Resistance | Good | **Excellent ✓** (highlight teal) |
> | Transparency | High | **Glass-like ✓** (highlight teal) |
> | O₂ & Moisture Barrier | **Excellent ✓** (highlight orange) | Good |
> | Heat Resistance (use) | **~120°C ✓** (highlight orange) | ~70–80°C |
> | Shrink Capability | Minimal | **Up to 78% ✓** (highlight teal) |
> | Thermoformability | Moderate | **Excellent ✓** (highlight teal) |
> | Dimensional Stability | **Excellent ✓** (highlight orange) | Moderate |
> | Printability | **Excellent ✓** (highlight both — orange+teal) | **Excellent ✓** |
> | Metallisable | **Yes ✓** (highlight orange) | Rarely |
> | Cost | **Lower ✓** (highlight orange) | 10–20% Higher |
> | Recyclability (India) | **Resin #1 — Wide ✓** (highlight orange) | Resin #1 — Growing |
>
> Winner cells (those marked ✓) get a coloured background fill — orange `rgba(232,93,38,0.15)` for PET wins, teal `rgba(13,140,126,0.15)` for PETG wins. Both-win cells get a neutral grey tint.
>
> Between the table columns, a thin vertical navy `#1A2744` divider line. Row height: ~38–40 px. Property label font: Inter Semibold 14pt. Value text: Inter Regular 13pt. Winner text: Inter Bold 13pt.
>
> **Score strip below the table:** A summary bar showing:
> - LEFT: navy box — **PET wins: 8 / 14 properties**
> - RIGHT: teal box — **PETG wins: 6 / 14 properties**
> - Centre: small grey italic — *Neither film is "better." Each wins in its own application.*
>
> **Bottom callout strip (10%):**
> Navy `#1A2744` background, two-column:
> - LEFT (orange text, bold): **⚡ The fastest decision rule:**
> - RIGHT (white text): *Does this film need to SHRINK? YES → PETG. NO → Start with PET. One question eliminates 90% of confusion.*
>
> **Bottom-right corner:** VKS Tech logo ~80×80 px on white circle.
> **Bottom-left:** small grey footer: *vkstech.com — Free FP Film Comparison Formats. Real Plant Methodology.*
>
> **Typography:** Inter or Söhne throughout. Winner values in bold. Property labels in semibold. Eyebrow and headers in bold caps.
>
> **What to AVOID:** clipart, 3D effects, gradients, decorative borders, icons inside cells.

### Plan B
If 14 rows look too dense at 1600×900, group into 5 category blocks (Mechanical / Optical / Thermal / Processing / Commercial) with a bold category header row in navy. Reduce to 3 property rows per category block — total ~15 rows but with breathing space from category headers.

---

## IMAGE 2B — PET vs PETG Comparison Diagram (Hindi) (`pet-vs-petg-hi.png`)

**Save as:** `pet-vs-petg-hi.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Do NOT generate square or vertical. High resolution, sharp text. Output as PNG (300–600 KB). No blur on Devanagari text.
>
> Create a flat-vector editorial comparison diagram with EXACTLY the same layout, colour palette, column structure, and winner-highlight rules as the English PET vs PETG Comparison Diagram. Column headers (PET / PETG), score strip, and decision rule callout stay in English. Only property labels and value text translate to Hindi/Hinglish.
>
> Use **Hind** or **Mukta Devanagari** font for all Hindi text.
>
> **Header:**
> - Eyebrow (orange, English): FLEXIBLE PACKAGING MATERIAL COMPARISON
> - Title (Hindi, navy bold): **PET vs PETG — 14 ज़रूरी Properties का Comparison**
> - Subtitle (Hindi, grey): *Semi-crystalline workhorse बनाम amorphous specialist — application देखकर choose करें, नाम देखकर नहीं।*
>
> **14 Rows — Hindi property labels and values:**
>
> | Property (Hindi) | PET | PETG |
> |---|---|---|
> | Molecular Structure | Semi-crystalline | Amorphous |
> | कठोरता (Rigidity) | **Rigid ✓** | Flexible |
> | Tensile Strength | **ज़्यादा ✓** | कम |
> | Impact Resistance | अच्छा | **Excellent ✓** |
> | Transparency / Clarity | High | **Glass-like ✓** |
> | O₂ और Moisture Barrier | **Excellent ✓** | अच्छा |
> | Heat Resistance (use) | **~120°C ✓** | ~70–80°C |
> | Shrink Capability | Minimal | **78% तक ✓** |
> | Thermoformability | Moderate | **Excellent ✓** |
> | Dimensional Stability | **Excellent ✓** | Moderate |
> | Printability | **Excellent ✓** | **Excellent ✓** |
> | Metallisable (Metalliser पर) | **हाँ ✓** | Rarely |
> | Cost | **कम ✓** | 10–20% ज़्यादा |
> | Recyclability (India) | **Resin #1 — Wide ✓** | Resin #1 — Growing |
>
> **Score strip (Hindi):**
> - LEFT navy box: **PET जीता: 8 / 14 properties में**
> - RIGHT teal box: **PETG जीता: 6 / 14 properties में**
> - Centre grey italic (Hindi): *कोई film "better" नहीं है। हर एक अपने application में जीतती है।*
>
> **Bottom callout (Hindi):**
> - LEFT (orange bold): **⚡ सबसे fast decision rule:**
> - RIGHT (white, Hindi): *क्या इस film को SHRINK करना है? हाँ → PETG। नहीं → PET से शुरू करें। एक सवाल 90% confusion खत्म।*
>
> **Bottom-right:** VKS Tech logo ~80×80 px on white circle.
> **Bottom-left:** small grey Hindi footer: *vkstech.com — Free FP Film Comparison Formats। Real Plant Methodology।*
>
> All other styling identical to Image 2A.

### Plan B for Hindi
Generate Image 2A first, then replace title, subtitle, property labels, values, score strip, and callout with proper Devanagari text using Hind or Mukta font in Photopea/Canva. Column headers (PET / PETG) and score numbers stay in English.

---

## IMAGE 3 — PET vs PETG Cheat Sheet (`pet-vs-petg-cheat-sheet.png`)

**Save as:** `pet-vs-petg-cheat-sheet.png` · **Target dimensions:** 1200×1500 px (4:5 portrait)
**Goal:** A standalone printable that a purchase manager, production engineer, or QA person laminate and keep at their desk. When someone says "what film do I need?", this answers the question in one glance.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1200 pixels wide by 1500 pixels tall, 4:5 portrait aspect ratio**. This is VERTICAL (portrait), NOT landscape. Do NOT generate square or landscape. High resolution, sharp text. Output as PNG (400–700 KB). Designed for A4 print or phone wallpaper.
>
> Create a clean, professional, bookmark-quality reference cheat sheet — the kind a purchase officer at a flexible packaging plant would laminate and clip to their desk. NOT marketing. A working reference.
>
> **Background:** cream `#FAF9F6` with very subtle paper-grain texture.
>
> ---
>
> **Header zone (top 10%):**
> - VKS Tech logo (attached logo.png) at top-left, ~90×90 px
> - To the right of the logo, two-line header:
>   - Eyebrow line in orange `#E85D26` small caps: VKSTECH.COM QUICK REFERENCE
>   - Main title in navy `#1A2744` bold large: **PET vs PETG — The Cheat Sheet**
> - Below title: thin orange `#E85D26` horizontal divider
>
> ---
>
> **Body zone (middle 80%) — FOUR sections stacked vertically:**
>
> **SECTION 1 (22% of body) — THE ONE DIFFERENCE:**
> Title (navy bold small): WHAT IS THE "G"?
>
> A two-column split panel:
> - LEFT (navy `#1A2744` background, white text):
>   - Big letter **P** in Anton/Bebas Neue ~80pt (white, ghost opacity 20% watermark) behind:
>   - Main label: **PET**
>   - Sub: *Polyethylene Terephthalate*
>   - Key word (orange, large bold): **SEMI-CRYSTALLINE**
>   - Tagline (white italic ~12pt): *Molecules in tight formation. Like soldiers in a parade.*
> - RIGHT (teal `#0D8C7E` background, white text):
>   - Big letter **G** in Anton/Bebas Neue ~80pt (white, ghost opacity 20% watermark) behind:
>   - Main label: **PETG**
>   - Sub: *Polyethylene Terephthalate **Glycol***
>   - Key word (orange, large bold): **AMORPHOUS**
>   - Tagline (white italic ~12pt): *Glycol scrambles the structure. Like a crowd after a match.*
>
> Centre divider: a small orange rounded badge with **"+ G"** in white Bebas Neue bold ~32pt, overlapping both panels.
>
> ---
>
> **SECTION 2 (30% of body) — WINNER TABLE:**
> Title (navy bold small): WHICH FILM WINS — BY PROPERTY
>
> A 7-row compact table (two properties per row = 14 total), three columns: Property | PET ✓ | PETG ✓
>
> Colour coding: orange cell fill for PET win, teal cell fill for PETG win.
>
> Row 1: Tensile Strength → **PET ✓** | Impact Resistance → **PETG ✓**
> Row 2: O₂ Barrier → **PET ✓** | Shrink (up to 78%) → **PETG ✓**
> Row 3: Heat Resistance (~120°C) → **PET ✓** | Thermoformability → **PETG ✓**
> Row 4: Metallisable → **PET ✓** | Glass Clarity → **PETG ✓**
> Row 5: Dimensional Stability → **PET ✓** | Impact (cold) → **PETG ✓**
> Row 6: Cost → **PET ✓** | Chemical Resistance → **PETG ✓**
> Row 7: Printability → **BOTH ✓** | Recyclability → **BOTH ✓**
>
> Score bar below table:
> - PET wins (orange): **8 / 14**
> - PETG wins (teal): **6 / 14**
> - Centre (navy italic): *Neither is "better."*
>
> ---
>
> **SECTION 3 (28% of body) — DECISION TREE:**
> Title (navy bold small): HOW TO CHOOSE — ONE QUESTION AT A TIME
>
> A flat-vector decision tree (flowchart style, left-to-right or top-to-bottom):
>
> START box (navy, white text): **What does this film need to do?**
> ↓
> Diamond question box (orange outline): **Does it need to SHRINK?**
> - YES branch → Teal `#0D8C7E` box: **→ PETG** · *Shrink sleeves, tamper seals, blister cavities*
> - NO branch → continue
> ↓
> Diamond question box (orange outline): **Does it need to survive above 80°C?** (retort, hot-fill)
> - YES branch → Navy box: **→ PET** · *Retort pouches, hot-fill containers*
> - NO branch → continue
> ↓
> Diamond question box (orange outline): **Is it a lamination substrate or metalliser base?**
> - YES branch → Navy box: **→ PET / BOPET** · *Pouches, printed webs, metallised films*
> - NO branch → Orange box: **Ask a specialist** · *Application may need GAG or other grades*
>
> All boxes flat vector, navy/teal/orange fills, white text, rounded corners. Arrows in orange.
>
> ---
>
> **SECTION 4 (20% of body) — WHERE EACH LIVES IN YOUR PLANT:**
> Title (navy bold small): REAL APPLICATIONS IN FLEXIBLE PACKAGING
>
> Two columns side by side:
> - LEFT column (navy `#1A2744` background, white text):
>   - Header: **PET / BOPET**
>   - List (white, ~12pt, each with small navy bullet):
>     - Food pouches (outer laminate layer)
>     - Metallised snack film base
>     - Retort / hot-fill packaging
>     - High-barrier lidding films
>     - Printed rotogravure web
> - RIGHT column (teal `#0D8C7E` background, white text):
>   - Header: **PETG**
>   - List (white, ~12pt, each with small teal bullet):
>     - Shrink sleeves (bottles, cans)
>     - Tamper-evident cap seals
>     - Blister cavities (pharma, FMCG)
>     - Cosmetic box overwrap
>     - Cold-chain / frozen pack
>
> ---
>
> **Footer zone (bottom 10%):**
> Three columns:
> - LEFT: small navy panel: **2 FREE FORMATS at vkstech.com**
> - CENTRE: small teal panel: *Print A4 · Laminate · Desk reference*
> - RIGHT: small orange panel: *SHRINK? → PETG. NO SHRINK? → PET.*
>
> Above footer: thin orange divider.
> Bottom strip (grey small caps): *vkstech.com — More tools, more cheat sheets, real-plant methodology · Vivek Kumar | M.Tech NIT Uttarakhand*
>
> ---
>
> **Mood:** clean, dense, immediately usable. Something a purchase manager prints and keeps on their desk. Information density is a feature.
> **Typography:** Inter or Söhne throughout. Big labels in Bebas Neue. Decision tree text compact but legible.
> Strict colors: Navy `#1A2744`, Orange `#E85D26`, Teal `#0D8C7E`, Cream `#FAF9F6`, white.
> **What to AVOID:** decorative borders, clipart, drop shadows, gradients, 3D effects.

### Plan B
If decision tree is too complex at 1200×1500, replace it with a simple 3-row "Quick Pick" table:
| Situation | Use |
|---|---|
| Lamination substrate / metalliser base | PET / BOPET |
| Full-body shrink sleeve / tamper band | PETG |
| Hot-fill / retort / above 80°C | PET only |

### Quality check for the cheat sheet
- Both panel labels (PET / PETG) clearly visible with key characteristics
- Winner table has 14 properties with orange/teal colour coding
- Decision tree leads to a clear PET or PETG output
- Application lists (5 per material) clearly separated
- Logo at top-left, brand markers at footer
- Portrait format (taller than wide) — NOT square or landscape
- Clean enough to laminate

---

## REVIEW — 8-Point Check Before Publishing

### 1. Brand colour discipline
✅ Pass: only Navy `#1A2744`, Orange `#E85D26`, Teal `#0D8C7E`, Cream `#FAF9F6`, white, grey
✅ Convention: PET = Navy side, PETG = Teal side, winners highlighted in Orange. Consistent across all 4 images.

### 2. Typography quality
✅ Pass: clean sans-serif (Inter/Söhne), big letters/numbers in heavy condensed (Bebas/Anton)

### 3. Number accuracy (HARD)
**Image 1 (Cover):** PETG shrink = 78% · 2 free formats listed · both materials = Resin #1
**Image 2A/2B (Diagram):** 14 properties listed · PET wins 8/14 · PETG wins 6/14 · heat resistance: PET ~120°C, PETG ~70–80°C
**Image 3 (Cheat sheet):** Decision tree ends at correct film · 5 applications per material · score bar 8/14 vs 6/14

### 4. Source attribution
N/A — material science content, no external citations needed.

### 5. Image format and file size
✅ Images 1, 2A, 2B at 1600×900 widescreen PNG (300–700 KB)
✅ Image 3 at 1200×1500 portrait PNG (400–700 KB)

### 6. Logo placement
✅ VKS Tech logo at bottom-right (Images 1–2) or top-left (Image 3 cheat sheet), ~80–100 px

### 7. Information density
✅ Cover reads as "PET vs PETG duel + downloads" in 5 sec
✅ Comparison diagram reads in 15 sec
✅ Cheat sheet is dense by design — decision tool + applications + winner table in one portrait

### 8. No AI-tells
❌ Avoid: identifiable faces, garbled small text, distorted icons, AI watermarks

---

## TROUBLESHOOTING

- **Image comes out square (1:1):** Re-emphasize the IMAGE SPEC line. For Image 3, confirm it is portrait (1200×1500).
- **Numbers appear wrong:** Overlay correct numbers in an editor afterwards. AI image models are unreliable with numerics.
- **Split composition looks unbalanced:** Adjust column widths — PET and PETG panels should feel equal.
- **Hindi Devanagari renders as gibberish:** Generate EN version first, replace text in Photopea/Canva using Hind or Mukta font.
- **Decision tree boxes overlap:** Simplify to the "Quick Pick" table Plan B.
- **Decorative clutter appears:** Add: *"STRICTLY no decorative elements, no clipart, no flourishes."*

## Folder Structure When Complete

```
pet-vs-petg/
├── index.html
├── logo.png                                    (already provided)
├── cover.png                                   (Image 1)
├── pet-vs-petg-en.png                          (Image 2A)
├── pet-vs-petg-hi.png                          (Image 2B)
├── pet-vs-petg-cheat-sheet.png                 (Image 3 — STANDALONE DESK REFERENCE)
├── g-explained-en.png                          (Image 5A — MOLECULAR ANALOGY)
├── g-explained-hi.png                          (Image 5B — MOLECULAR ANALOGY Hindi)
├── plant-floor-map.png                         (Image 6 — PLANT FLOOR MAP bilingual)
├── three-mistakes.png                          (Image 7 — WARNING CARD bilingual)
├── GEMINI-PROMPTS.md                           (this markdown reference)
└── downloads/
    ├── 01-PET-vs-PETG-Comparison-Bilingual.xlsx
    └── 02-FP-Film-Material-Selection-Checklist-Bilingual.xlsx
```

---

## IMAGE 5A — The G Explained: Molecular Analogy Visual (English) (`g-explained-en.png`)

**Save as:** `g-explained-en.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Placed after:** The "G That Changes Everything" section, before the PET Workhorse section
**Goal:** Make the molecular structure concept instantly visual. A reader should look at this for 5 seconds and *feel* the difference between crystalline (ordered) and amorphous (disordered) — using the soldiers vs. crowd analogy from the blog text.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1600 pixels wide by 900 pixels tall, 16:9 widescreen aspect ratio**. Landscape only. High resolution, sharp text, crisp vector edges. Output as PNG (300–500 KB).
>
> Create a clean, flat-vector editorial infographic explaining the difference between PET and PETG at the molecular structure level — using a simple visual analogy. *The Economist* infographic style. No 3D, no gradients, no clipart, no decorative elements.
>
> **Background:** cream `#FAF9F6` with subtle paper-grain texture (5% opacity max).
>
> **Header zone (top 10%):**
> - Eyebrow in orange `#E85D26` small caps: THE SCIENCE BEHIND THE "G"
> - Title in navy `#1A2744` bold: **Why Adding One Ingredient Changes Everything**
> - Subtitle in grey `#5A5A5A` italic: *The same two monomers. One modified with Glycol. Here's what that actually means.*
>
> **Main body (80%) — TWO PANELS side by side:**
>
> **LEFT PANEL — PET (navy `#1A2744` background):**
>
> - Header strip: **PET — SEMI-CRYSTALLINE** in orange `#E85D26` bold caps
> - Sub-label: *Polyethylene Terephthalate*
>
> ANALOGY VISUAL (centre of panel): A flat-vector illustration of **soldiers standing in tight, uniform formation** — a 5×4 grid of identical simple flat icons (faceless silhouettes, square/rectangular shapes, NOT realistic humans). All icons identical in size. Perfect rows. Perfect columns. Every unit aligned. Navy icons on a slightly lighter navy background.
>
> Caption below the grid (white Inter, ~13pt):
> *"Molecules arrange in tight, ordered, crystalline rows."*
>
> Below caption, three property pills (orange `#E85D26` background, white text):
> - 💪 **RIGID**
> - 🔒 **HIGH BARRIER**
> - 🌡️ **~120°C HEAT RESISTANT**
>
> Bottom-left corner: small orange bracket → **"This is why PET is strong, stiff, and maintains its shape."**
>
> ---
>
> **RIGHT PANEL — PETG (teal `#0D8C7E` background):**
>
> - Header strip: **PETG — AMORPHOUS** in orange `#E85D26` bold caps
> - Sub-label: *Polyethylene Terephthalate + Glycol*
>
> ANALOGY VISUAL (centre of panel): The **same 20 silhouette icons** — but now scattered randomly. Rotated at different angles. Some overlapping. Some tilted left or right. Scattered like a crowd leaving a stadium after a match. Teal icons on a slightly lighter teal background. Visually chaotic compared to the left panel.
>
> Caption below the scattered icons (white Inter, ~13pt):
> *"Glycol disrupts the lineup. Molecules become disordered — amorphous."*
>
> Below caption, three property pills (teal `rgba(255,255,255,0.2)` background, white text):
> - 🤸 **FLEXIBLE**
> - 🔥 **SHRINKS UP TO 78%**
> - 💎 **GLASS-LIKE CLARITY**
>
> Bottom-right corner: small orange bracket → **"This is why PETG can shrink, bend, and wrap any shape."**
>
> ---
>
> **CENTRE DIVIDER (between both panels):**
>
> A cream `#FAF9F6` vertical strip (60 px wide) running full height, containing:
> - An orange `#E85D26` dashed vertical line down the centre
> - Midway: an orange circle badge with **"+ G"** in white Bebas Neue ~36pt
> - Above badge: small grey text, *"Same monomers"*
> - Below badge: small grey text, *"One extra ingredient"*
>
> ---
>
> **Footer zone (bottom 10%):**
> Full-width navy `#1A2744` strip:
> - LEFT: orange bold — **⚡ SAME FAMILY. DIFFERENT JOBS.**
> - CENTRE: white — *PET = tight formation = strength + barrier. PETG = scrambled = flexibility + shrink.*
> - RIGHT: VKS Tech logo ~70×70 px on white circle · small text: *vkstech.com*
>
> **Mood:** a classroom diagram done in editorial magazine style. Clear, memorable, never seen before. The side-by-side contrast must be immediately obvious — ordered vs. disordered.
> Strict colors only: Navy `#1A2744`, Teal `#0D8C7E`, Orange `#E85D26`, Cream `#FAF9F6`, white.
> NO faces, NO realistic human figures, NO clipart.

### Plan B
If the soldier/crowd metaphor doesn't render cleanly, replace with a simpler molecular dot diagram:
- LEFT (PET): dots in perfect hexagonal packing (crystalline lattice), labelled "Ordered Crystal Structure"
- RIGHT (PETG): same number of dots scattered randomly, labelled "Amorphous Structure — Glycol disrupts the lattice"
The visual idea remains the same — order vs. disorder.

---

## IMAGE 5B — The G Explained: Molecular Analogy Visual (Hindi) (`g-explained-hi.png`)

**Save as:** `g-explained-hi.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** 1600×900 px, 16:9, landscape only. PNG, 300–500 KB.
>
> Create the exact same flat-vector editorial infographic as Image 5A (The G Explained), with identical layout, colours, icons, and two-panel composition. Replace ONLY the text labels with Hindi/Hinglish equivalents. Use **Hind or Mukta Devanagari** font for all Hindi text.
>
> **Header (Hindi):**
> - Eyebrow (English/orange): THE SCIENCE BEHIND THE "G"
> - Title (Hindi, navy bold): **एक Ingredient कैसे सब कुछ बदल देता है**
> - Subtitle (Hindi, grey italic): *Same दो monomers। एक Glycol के साथ modify किया। इसका actually क्या मतलब है — यहाँ देखें।*
>
> **LEFT PANEL header:** PET — SEMI-CRYSTALLINE
> - Sub: *Polyethylene Terephthalate*
> - Caption under icons (Hindi): *"Molecules tight, orderly crystalline rows में arrange होते हैं।"*
> - Property pills: 💪 **RIGID** · 🔒 **HIGH BARRIER** · 🌡️ **~120°C HEAT RESISTANT**
> - Corner bracket (Hindi): *"इसीलिए PET strong, stiff, और shape maintain करता है।"*
>
> **RIGHT PANEL header:** PETG — AMORPHOUS
> - Sub: *Polyethylene Terephthalate + Glycol*
> - Caption under icons (Hindi): *"Glycol lineup disrupt करता है। Molecules disordered — amorphous हो जाते हैं।"*
> - Property pills: 🤸 **FLEXIBLE** · 🔥 **78% तक SHRINK** · 💎 **GLASS-LIKE CLARITY**
> - Corner bracket (Hindi): *"इसीलिए PETG shrink, bend, और किसी भी shape wrap कर सकता है।"*
>
> **Centre divider:** Same "+ G" badge · *"Same monomers"* → *"Same monomers"* (English ok) · *"One extra ingredient"* → *"एक extra ingredient"*
>
> **Footer (Hindi):**
> - LEFT (orange bold): **⚡ SAME FAMILY। DIFFERENT JOBS।**
> - CENTRE (white, Hindi): *PET = tight formation = strength + barrier. PETG = scrambled = flexibility + shrink.*
> - RIGHT: VKS Tech logo + *vkstech.com*
>
> All other visuals (soldier/crowd icons, panel backgrounds, divider) identical to Image 5A.

### Plan B
Generate Image 5A first. In Photopea/Canva, replace all text with Hind/Mukta Devanagari text. Keep all visual elements identical.

---

## IMAGE 6 — Plant Floor Map: Where Each Film Lives in Your Plant (`plant-floor-map.png`)

**Save as:** `plant-floor-map.png` · **Target dimensions:** 1600×900 px (16:9 widescreen)
**Placed after:** The "Where You Actually See Each One" section in both EN and HI
**Goal:** A simplified top-view schematic of a flexible packaging plant — showing which machines use PET and which use PETG. Plant professionals respond to floor-level visuals more than any other format. This should feel like it belongs in a technical handbook.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** 1600×900 px, 16:9, landscape only. PNG, 400–600 KB.
>
> Create a clean, flat-vector plant floor schematic — like a simplified engineering floor plan or process flow map. NOT an isometric view. NOT 3D. Pure top-down or left-to-right 2D flow diagram in editorial style.
>
> **Background:** cream `#FAF9F6`.
>
> **Header zone (top 10%):**
> - Eyebrow (orange small caps): FLEXIBLE PACKAGING PLANT — WHERE EACH FILM IS USED
> - Title (navy bold): **PET Film vs PETG Film — Two Materials, Two Zones in Your Plant**
> - Subtitle (grey italic): *Same building. Same storage rack. Completely different machines.*
>
> **Main body (82%) — PLANT FLOOR SCHEMATIC:**
>
> Layout: left-to-right process flow. Two clearly separated zones, divided by a vertical orange `#E85D26` dashed divider line in the middle of the floor.
>
> **LEFT HALF — "PET ZONE" label (navy strip at top of zone):**
>
> Draw these 4 machine boxes as flat rectangles with navy `#1A2744` outlines, arranged in a loose process flow with arrows connecting them:
>
> 1. **BOPET FILM ROLL** (input)
>    - Rectangle labelled: 🎞️ BOPET / PET Film Roll
>    - Sub-label: *Input material — arrives from supplier*
>
> 2. **ROTOGRAVURE / FLEXO PRESS**
>    - Rectangle labelled: 🖨️ Printing Press
>    - Sub-label (white on navy): *PET printed here — 8 to 10 colours*
>    - Orange tag: **BOPET base film**
>
> 3. **VACUUM METALLISER**
>    - Rectangle labelled: ⚙️ Vacuum Metalliser
>    - Sub-label (white on navy): *PET base film enters — exits with Al coating*
>    - Orange tag: **BOPET only — NOT PETG**
>
> 4. **LAMINATION LINE**
>    - Rectangle labelled: 🔧 Laminator / Dry Bond
>    - Sub-label (white on navy): *PET / Al foil / CPP structure made here*
>    - Orange tag: **PET = outer web**
>
> Arrows connecting: Roll → Press → Metalliser → Laminator (some parallel, some sequential — make it look like a real plant, not a flowchart)
>
> At the bottom of this zone, a navy summary box (white text):
> **PET ZONE: POUCHES · METALLISED FILM · RETORT · HOT-FILL**
>
> ---
>
> **RIGHT HALF — "PETG ZONE" label (teal `#0D8C7E` strip at top of zone):**
>
> Draw these 4 machine boxes as flat rectangles with teal outlines:
>
> 1. **PETG SHRINK FILM ROLL** (input)
>    - Rectangle labelled: 🎞️ PETG Shrink Film Roll
>    - Sub-label: *Arrives as flat tube or sheet — glycol-modified*
>
> 2. **FLEXO / GRAVURE PRESS (for shrink sleeves)**
>    - Rectangle labelled: 🖨️ Sleeve Printing Press
>    - Sub-label (white on teal): *PETG printed as tube — 360° design*
>    - Teal tag: **High-clarity PETG film**
>
> 3. **HEAT TUNNEL / STEAM TUNNEL**
>    - Rectangle labelled: 🌡️ Shrink Tunnel
>    - Sub-label (white on teal): *PETG sleeve applied over bottle — heat applied*
>    - Teal tag: **Shrinks up to 78%**
>
> 4. **BLISTER / THERMOFORM MACHINE**
>    - Rectangle labelled: 💊 Blister / Thermoformer
>    - Sub-label (white on teal): *PETG thermoformed into blister cavities*
>    - Teal tag: **Pharma · FMCG · Medical**
>
> At the bottom of this zone, a teal summary box (white text):
> **PETG ZONE: SHRINK SLEEVES · BLISTER PACKS · TAMPER SEALS · COLD CHAIN**
>
> ---
>
> **Centre divider details:**
> - Vertical orange dashed line full height
> - Centred badge (orange circle, white text): **VS**
> - Above VS: *"Same plant"*
> - Below VS: *"Different zones"*
>
> **Footer zone (bottom 8%):**
> Full-width navy `#1A2744` strip:
> - LEFT (orange bold): **⚡ KEY RULE:** *If a machine applies heat to shrink — it uses PETG. If a machine laminates, metallises, or prints for a pouch — it uses PET.*
> - RIGHT: VKS Tech logo ~70×70 px + *vkstech.com*
>
> **Typography throughout:** Machine names in Inter Bold ~14pt. Sub-labels in Inter Regular ~11pt. Zone headers in Bebas Neue ~18pt. Tags in Inter Semibold ~11pt.
>
> **Mood:** a page from a flexible packaging operations handbook. Dense but readable. Every box should look like a real machine, not a database entity.
> Strict colors: Navy `#1A2744`, Teal `#0D8C7E`, Orange `#E85D26`, Cream `#FAF9F6`, white.
> NO isometric 3D, NO realistic machinery drawings, NO clipart.

### Plan B
If 8 machine boxes feels too crowded, reduce to 3 per zone (remove the input roll boxes) and increase machine box size. The core message — left half = PET machines, right half = PETG machines — must remain clear at a glance.

---

## IMAGE 7 — Three Costly Mistakes Warning Card (`three-mistakes.png`)

**Save as:** `three-mistakes.png` · **Target dimensions:** 1200×900 px (4:3 landscape)
**Placed after:** The "Three Common Confusions" section in both EN and HI
**Goal:** A bold, shareable warning card that plant purchase officers and production managers will save to their phone or WhatsApp to a colleague. Orange-heavy, urgent-feeling, information-dense. This is the most "social media shareable" image in the blog.

### Prompt

> [ATTACH `logo.png` to THIS prompt]
>
> **IMAGE SPEC:** Generate at exactly **1200 pixels wide by 900 pixels tall, 4:3 landscape aspect ratio**. NOT square, NOT portrait. PNG, 350–600 KB.
>
> Create a bold, flat-vector warning card — the kind a production manager saves to their phone. Urgent visual weight. Orange-dominant. *Not* decorative. Information is the design.
>
> **Background:** dark navy `#1A2744` with very subtle paper-grain texture.
>
> **Top strip (10% height):**
> - Left: VKS Tech logo ~70×70 px on white circle
> - Centre: **⚠️ EXPENSIVE MISTAKES TO AVOID** in orange `#E85D26` Bebas Neue ~28pt all caps, letterspaced
> - Right: small cream text *vkstech.com*
> Thin orange horizontal divider below this strip.
>
> **Main body (82%) — THREE MISTAKE BLOCKS stacked vertically, each occupying ~27% of main body height:**
>
> **MISTAKE BLOCK 1:**
> Background: `rgba(232,93,38,0.12)` (very dark orange tint)
> Left edge: thick orange `#E85D26` border (8 px)
> Layout: three columns — number badge | mistake text | consequence text
>
> - NUMBER BADGE: large orange circle, white text **"1"** in Bebas Neue ~48pt
> - MISTAKE TEXT (cream, left-aligned):
>   - Header (Inter Bold ~16pt): **Wrong Film Ordered — "Polyester Film" Is Not Specific Enough**
>   - Body (Inter Regular ~12pt, grey `#9ab`): *BOM says "polyester film." Purchase orders PETG because it's in stock. Lamination runs fine. Pouch goes soft in the hot-fill machine.*
> - CONSEQUENCE BADGE (right side, orange `#E85D26` rounded rectangle):
>   - Top line: **RESULT**
>   - Main text (white bold ~14pt): Production stoppage + rework cost
>   - Bottom line (white italic ~11pt): *Fix: Always specify PET or PETG — never just "polyester"*
>
> Thin cream `rgba(250,249,246,0.1)` divider after each block.
>
> **MISTAKE BLOCK 2:**
> Same structure, orange left border.
>
> - NUMBER BADGE: **"2"** same style
> - MISTAKE TEXT:
>   - Header: **Assuming PETG Barrier = PET Barrier**
>   - Body: *Structure designed around PET barrier values. PETG used instead. Shelf life drops from 12 months to 4 months. No one notices until field complaints.*
> - CONSEQUENCE BADGE (teal `#0D8C7E` background this time):
>   - Top: **RESULT**
>   - Main: Shortened shelf life + customer returns
>   - Bottom italic: *Fix: PETG O₂ barrier is measurably lower — recalculate shelf life*
>
> **MISTAKE BLOCK 3:**
> Same structure.
>
> - NUMBER BADGE: **"3"** same style
> - MISTAKE TEXT:
>   - Header: **Running PETG on a PET Metalliser Programme**
>   - Body: *PETG has lower heat resistance. Metalliser heat zone designed for BOPET. PETG film stretches, surface defects appear, aluminium deposition is uneven. Entire roll scrapped.*
> - CONSEQUENCE BADGE (orange background):
>   - Top: **RESULT**
>   - Main: Full roll rejection + metalliser downtime
>   - Bottom italic: *Fix: PETG metallising = separate development cycle, separate parameters*
>
> ---
>
> **Hindi sub-labels (bilingual):**
> Under each mistake header, add a one-line Hindi translation in small teal text (~11pt Hind font):
> 1. *गलत film order — "polyester film" काफ़ी specific नहीं है*
> 2. *PETG का barrier PET के equal नहीं है*
> 3. *PETG को PET metalliser programme पर run मत करें*
>
> ---
>
> **Bottom strip (8%):**
> Navy background, full width, three sections:
> - LEFT (teal background pill): **MISTAKE 1** → Specify film grade on BOM
> - CENTRE (orange background pill): **MISTAKE 2** → Recalculate shelf life with PETG barrier
> - RIGHT (teal background pill): **MISTAKE 3** → Separate metalliser programme for PETG
>
> **Mood:** urgent but professional. Something a WhatsApp group of packaging managers would share with the caption "save this." Bold numbers dominate. Dense information is the point.
> Strict colors: Navy `#1A2744`, Orange `#E85D26`, Teal `#0D8C7E`, Cream `#FAF9F6`, white.
> NO clipart, NO icons beyond the number badges, NO gradients.

### Plan B
If three-column layout per block feels tight at 1200×900, switch to two-column (number badge + full-width text block). Move consequence badge below the body text instead of to the right. Hindi sub-labels remain.

---

## UPDATED REVIEW — 8-Point Check (All 7 Images)

### Filenames and dimensions
| File | Dimensions | Section |
|---|---|---|
| `cover.png` | 1600×900 | Blog top (both sections) |
| `g-explained-en.png` | 1600×900 | After "G That Changes Everything" (EN) |
| `g-explained-hi.png` | 1600×900 | After "G" section (HI) |
| `pet-vs-petg-en.png` | 1600×900 | After comparison table (EN) |
| `pet-vs-petg-hi.png` | 1600×900 | After comparison table (HI) |
| `plant-floor-map.png` | 1600×900 | After applications section (both) |
| `three-mistakes.png` | 1200×900 | After mistakes section (both) |
| `pet-vs-petg-cheat-sheet.png` | 1200×1500 | Before downloads (both) |

### Numbers to verify across all images
- PETG shrink = **78%** (not 70%, not 80%)
- PET heat resistance = **~120°C**
- PETG heat resistance = **~70–80°C**
- Properties compared = **14**
- PETG cost premium = **10–20%**
- Both carry Resin ID **#1**
- PET wins **8/14** properties, PETG wins **6/14**
