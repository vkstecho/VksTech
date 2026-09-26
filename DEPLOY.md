# VKS Tech — Improved Site Files

Upload these files into your **VksTech** GitHub repo (the one that deploys to vkstech.com / Vercel).

## Files included

```
vkstech-improved/
├── index.html          ← replace root index.html
├── css/
│   └── main.css        ← new folder + file (extracted + a11y polish)
├── js/
│   └── app.js          ← new folder + file (original logic + UX upgrades)
├── robots.txt          ← new / update at site root
├── sitemap.xml         ← new / update at site root (extend with blog slugs)
└── DEPLOY.md           ← this file
```

Keep your existing assets as-is: `logo.jpeg`, `icon512*.png`, `vivek.png`, `favicon*`, `manifest.json`, `sw.js`, `/blog`, `/youtube`, `/people`, etc.

## What was implemented (client-side)

### Performance
- CSS extracted to `css/main.css` (cacheable, smaller HTML)
- JS extracted to `js/app.js` with `defer`
- Supabase client script deferred
- Font preload hint for critical typeface
- Logo given explicit width/height (reduces CLS)

### SEO
- `hreflang` tags (`en-IN`, `hi-IN`, `x-default`)
- Expanded JSON-LD: Person, Organization, WebSite + **SoftwareApplication** (MET Power, Plan Power, FP Job) + **FAQPage** (common calculator questions)
- SearchAction on WebSite schema
- `robots.txt` + starter `sitemap.xml`

### Accessibility
- Calculator result boxes use `aria-live="polite"` so screen readers announce results
- Reset buttons with clear `aria-label`
- Existing skip-link, focus rings, reduced-motion kept

### Calculator UX
- **Remembers last inputs** in `localStorage` (returns to same values next visit)
- **URL query prefill**: e.g. `https://vkstech.com/?cw-len=10000&cw-wid=1500&cw-mic=12#calc-roll-weight`
- **Reset** button on each calculator
- Deep-link open + copy-link behavior unchanged

### Structure
- Monolith split → easier maintenance and long-term caching

## What you must still do (cannot be done from static files alone)

### 1. Supabase Row Level Security (critical)
In Supabase Dashboard → Authentication / Table Editor → each public table:

| Table            | Recommended policy |
|------------------|--------------------|
| `app_requests`   | INSERT for `anon` only; no SELECT for anon |
| `subscribers`    | INSERT for `anon`; no SELECT for anon |
| `blog_questions` | INSERT for `anon`; SELECT only rows where `answered_at` is not null |
| `page_views`     | INSERT for `anon`; no SELECT for anon |
| `blogs`          | SELECT where `published = true` for anon; no INSERT/UPDATE/DELETE for anon |
| YouTube tables   | SELECT only for anon |

Test with the anon key from an incognito window / curl that you cannot read other users’ form submissions.

### 2. CAPTCHA (recommended)
Add Cloudflare Turnstile or hCaptcha on:
- App request form
- Newsletter form
- Blog Q&A form  

Wire the token check in a Supabase Edge Function or Vercel API route before insert.

### 3. Sitemap maintenance
After publishing blogs, append each `/blog/<slug>` to `sitemap.xml` (or generate it in your admin publish flow / a small cron).

### 4. Optional next steps
- Dedicated routes `/calculators/film-roll-weight` (better ranking than hash URLs)
- Server-render latest 3 blog cards on the homepage (Astro/Next or Vercel edge)
- Subset Google Fonts or self-host to cut third-party requests
- Conversion events in Vercel Analytics (calculator used, form submitted)

## Deploy steps

1. Commit these files to the branch Vercel (or your host) deploys from.
2. Ensure paths match: site root must serve `css/main.css` and `js/app.js`.
3. Hard-refresh / purge CDN cache after deploy.
4. Verify:
   - Homepage loads, calculators open and compute
   - EN / हिं toggle works
   - Blog cards load
   - Forms still submit (then confirm RLS)
   - View page source: external CSS/JS, FAQ + SoftwareApplication schema present

## Query-param examples for sharing a prefilled calculator

```
https://vkstech.com/#calc-roll-weight
https://vkstech.com/?cw-len=12000&cw-wid=1600&cw-mic=12#calc-roll-weight
https://vkstech.com/?mc-width=3000&mc-micron=12&mc-speed=800#calc-met-capacity
```

Field IDs match the `id` attributes in the HTML (e.g. `cw-len`, `mc-jumbo`).
