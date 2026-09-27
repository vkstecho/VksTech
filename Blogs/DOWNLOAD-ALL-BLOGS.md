# Collect all published blogs into this `Blogs/` folder

Existing blogs currently live as numbered folders at the **root** of the GitHub repo:

https://github.com/vkstecho/VksTech

Examples: `15-web-break-recovery-complete-guide`, `24-cut-metallised-waste-1-8-to-0-9-percent`, … up through the latest number.

## Option A — Manual (GitHub UI)

1. Open each folder on GitHub → Download / clone the repo.
2. Copy every folder whose name starts with a number into this `Blogs/` directory next to `51-man-power-team-management-app`.

## Option B — One-time clone (recommended)

```bash
# Clone the whole repo once
git clone --depth 1 https://github.com/vkstecho/VksTech.git /tmp/VksTech-full

# Copy all numbered blog folders into your Blogs folder
mkdir -p Blogs
cp -a /tmp/VksTech-full/[0-9]* Blogs/

# Your new blog is already present:
# Blogs/51-man-power-team-management-app/
```

## Option C — Sparse download of only numbered folders (if repo is large)

```bash
git clone --filter=blob:none --sparse https://github.com/vkstecho/VksTech.git /tmp/VksTech-sparse
cd /tmp/VksTech-sparse
git sparse-checkout set $(git ls-tree -d --name-only HEAD | grep '^[0-9]')
# then copy those folders into your local Blogs/
```

After copying, your structure will look like:

```
Blogs/
  15-web-break-recovery-complete-guide/
  16-wrinkle-crease-defect-guide/
  …
  51-man-power-team-management-app/
  DOWNLOAD-ALL-BLOGS.md
```

You can then decide whether to keep blogs at repo root (current live setup) or move everything under a single `Blogs/` parent and update the `github_path` values in Supabase accordingly.
