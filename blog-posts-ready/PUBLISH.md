# Calculator how-to blog posts — publish guide

These 5 posts are **practical tool guides** (short), not the long theory blogs you already have on GitHub.  
Each has a **video placeholder** — after you upload the YouTube video, drop in the embed.

## Folders (ready for GitHub)

| Folder | Suggested slug | Title |
|--------|----------------|-------|
| `97-how-to-use-film-roll-weight-calculator` | `how-to-use-film-roll-weight-calculator` | How to Use the Film Roll Weight Calculator |
| `98-how-to-use-gsm-micron-calculator` | `how-to-use-gsm-micron-calculator` | How to Use the GSM ↔ Micron Calculator |
| `99-how-to-use-met-capacity-calculator` | `how-to-use-met-capacity-calculator` | How to Use the Metalliser Capacity Calculator |
| `100-how-to-use-min-manpower-calculator` | `how-to-use-min-manpower-calculator` | How to Use the Minimum Manpower Calculator |
| `101-how-to-use-roll-length-calculator` | `how-to-use-roll-length-calculator` | How to Use the Roll Length from Weight Calculator |

## Publish steps (your usual flow)

1. **Copy folders** into the GitHub repo:
   ```text
   VksTech/Blogs/97-how-to-use-film-roll-weight-calculator/index.html
   ... (same for 98–101)
   ```

2. **Cover images**  
   Add `cover.png` (or `cover.jpg`) in each folder — simple screenshot of the calculator + title works well.  
   Suggested size: 1200×630 for social.

3. **In Admin (vkstech.com/admin)** — create / publish each post:
   - Title = as in table above  
   - Slug = as in table  
   - Category = Flexible Packaging (sub: general-common / metalliser / manpower-operations as in the HTML meta)  
   - `github_path` = e.g. `Blogs/97-how-to-use-film-roll-weight-calculator::index.html`  
   - Cover image URL = raw GitHub or jsDelivr URL of `cover.png`

4. **After your video is live**  
   In each `index.html`, find the VIDEO SLOT comment and replace the placeholder div with:
   ```html
   <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
     src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
     title="..." allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
     allowfullscreen></iframe>
   ```
   Commit + push; the blog API pulls from GitHub.

5. **Sitemap**  
   After publish, add each URL to `sitemap.xml`:
   ```xml
   <url>
     <loc>https://vkstech.com/blog/how-to-use-film-roll-weight-calculator</loc>
     <lastmod>2026-11-12</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.7</priority>
   </url>
   ```
   (and the other four)

6. **Link from calculators**  
   The calculator pages in this site build already include a “How to use” link pointing at these slugs. Once posts are live, those links work.

## Video tips (so the post stays useful)

- Record screen + short voice: open calculator → enter example numbers → show result → one common mistake  
- 60–90 seconds is enough for Shorts / Reels; 3–5 min for YouTube  
- Put the same example numbers in the video as in the post (consistency)

## Already exists on GitHub (theory — keep both)

| Topic | Existing deep post | New how-to post |
|-------|--------------------|-----------------|
| Film roll weight | `27-film-roll-weight-formula` | `97-how-to-use-...` |
| GSM ↔ micron | `37-gsm-micron-conversion` | `98-how-to-use-...` |
| Met capacity | `30-calculate-capacity-metalliser` | `99-how-to-use-...` |
| Manpower | `93-man-power-...` / app posts | `100-how-to-use-...` |
| Roll length | related capacity posts | `101-how-to-use-...` |

Theory post = why / formula depth.  
How-to post = click path + video + shop-floor moments.
