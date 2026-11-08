# Career Journey photos

Images live in:

- `uflex/`   — 8 photos (1.jpg … 8.jpg)
- `jindal/`  — 12 photos (1.jpg … 12.jpg)
- `gls/`     — 5 photos (1.jpg … 5.jpg)

## How loading works

Each folder has a `manifest.json` that lists the filenames.
The website loads **only** the files listed in the manifest — fast and mobile-safe.

Example `manifest.json`:

```json
[
  "1.jpg",
  "2.jpg",
  "3.jpg"
]
```

When you add or remove photos:

1. Put the `.jpg` / `.webp` files in the correct folder
2. Update that folder’s `manifest.json` with the new list
3. Commit & deploy

Do **not** rely on automatic probing for large numbers of files.
