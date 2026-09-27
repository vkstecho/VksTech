# Blog 51 — Man Power Team Management App

**Folder name (upload to GitHub repo root or under Blogs/):**  
`51-man-power-team-management-app`

## Files in this folder

| File | Purpose |
|------|---------|
| `index.html` | Bilingual article body (EN + HI). Same format as other VksTech blogs. |
| `cover.png` | Default cover image |
| `cover-en.png` | English cover variant |
| `cover-hi.png` | Hindi cover variant |
| `mp-logo-transparent.png` | App logo asset |

Replace the cover images with your designed versions (same 3-type pattern as blogs 15–28+) before publishing if you prefer custom artwork.

## Publish steps (same as other blogs)

1. Upload this folder to the **VksTech** GitHub repo (`vkstecho/VksTech`), either at repo root (like existing numbered folders) or inside a `Blogs/` parent if you decide to group them.
2. In Supabase `blogs` table, insert a row:
   - `title` / `title_hi`
   - `slug`: `man-power-team-management-app`
   - `github_path`: `51-man-power-team-management-app` (or `Blogs/51-man-power-team-management-app` if nested)
   - `published`: true
   - `category`: apps (or packaging)
   - `created_at`: today
3. Website will pick it up via existing `loadBlogs()` from Supabase + GitHub raw HTML.

## Support number used in article

**8929397920** (as requested) for fee queries and help.
