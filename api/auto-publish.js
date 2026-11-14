/**
 * Auto-publish sequential blogs from GitHub folders.
 *
 * Triggered by Vercel Cron (or any external cron) once per day.
 * Protected by AUTO_PUBLISH_SECRET env var (query ?secret= or header x-auto-publish-secret).
 *
 * Flow:
 *  1. Load config from auto_publish_config (id=1)
 *  2. If disabled → exit
 *  3. Scan GitHub recursive tree for blog folders (contain .html)
 *  4. Sort numerically by leading number in folder name
 *  5. Skip already-published folders (from blogs.github_path)
 *  6. Find the next folder after last_published_folder (or start_folder)
 *  7. Parse HTML metadata, insert into blogs as published=true
 *  8. Advance last_published_folder + log result
 *
 * Recommended schedule: 09:00 IST (03:30 UTC) — good morning window for
 * Indian packaging / manufacturing professionals.
 */

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://hozqkfvusazdneockkxf.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvenFrZnZ1c2F6ZG5lb2Nra3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5MjM3ODIsImV4cCI6MjA5MTQ5OTc4Mn0.OFFqme0Ov8BBieN75xDIv5-UeBrddFl-GUr_-8aL1yY';
const GH_OWNER = 'vkstecho';
const GH_REPO = 'VksTech';
const GH_BRANCH = 'main';

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

function folderSortKey(folder) {
  const name = (folder || '').split('/').pop() || '';
  const m = name.match(/^(\d+)/);
  if (m) return [parseInt(m[1], 10), name.toLowerCase()];
  return [999999, name.toLowerCase()];
}

function compareFolders(a, b) {
  const ka = folderSortKey(a);
  const kb = folderSortKey(b);
  if (ka[0] !== kb[0]) return ka[0] - kb[0];
  return ka[1].localeCompare(kb[1]);
}

function folderToSlug(folder) {
  return folder.split('/').pop()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .replace(/^[0-9]+-/, '')
    .replace(/-(?:blog|post|article)s?$/, '')
    .replace(/^-|-$/g, '');
}

function computeReadTimeMinutes(html) {
  if (!html || typeof html !== 'string') return null;
  const text = html.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim();
  if (!text) return null;
  const words = text.split(' ').filter(w => w.length > 0).length;
  if (words < 50) return null;
  return Math.max(1, Math.round(words / 220));
}

function pickBestHtml(files) {
  const htmls = files.filter(f => /\.html?$/i.test(f.name));
  if (htmls.length === 0) return null;
  const idx = htmls.find(f => f.name.toLowerCase() === 'index.html');
  if (idx) return idx;
  htmls.sort((a, b) => (b.size || 0) - (a.size || 0));
  return htmls[0];
}

function stripTags(html) {
  return (html || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim();
}

function parseHtmlMeta(html) {
  const out = { title: '', summary: '', category: 'manufacturing', subcategory: null, cover: '', warnings: [] };

  const catM = html.match(/<meta\s+name=["']category["']\s+content=["']([^"']+)["']/i);
  if (catM) {
    out.category = catM[1].trim().toLowerCase();
    const known = ['packaging', 'excel', 'career', 'tech', 'manufacturing'];
    if (!known.includes(out.category)) {
      out.warnings.push('Unknown category "' + out.category + '"');
      out.category = 'manufacturing';
    }
  }

  const subM = html.match(/<meta\s+name=["']subcategory["']\s+content=["']([^"']+)["']/i);
  if (subM) {
    out.subcategory = subM[1].trim().toLowerCase();
  }

  // Prefer .en-content / .hindi-section if present
  let enBlock = html;
  let hiBlock = '';
  const enMatch = html.match(/<[^>]*class=["'][^"']*en-content[^"']*["'][^>]*>([\s\S]*?)(?=<[^>]*class=["'][^"']*(?:hindi-section|hi-content)[^"']*["']|<\/body>|$)/i);
  const hiMatch = html.match(/<[^>]*class=["'][^"']*(?:hindi-section|hi-content)[^"']*["'][^>]*>([\s\S]*?)(?=<\/body>|$)/i);
  if (enMatch) enBlock = enMatch[1];
  if (hiMatch) hiBlock = hiMatch[1];

  function firstHeading(block) {
    const m = block.match(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/i);
    return m ? stripTags(m[1]) : '';
  }
  function firstPara(block) {
    const paras = block.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
    for (const p of paras) {
      const t = stripTags(p);
      if (t && t.length > 20) return t;
    }
    return '';
  }

  const enTitle = firstHeading(enBlock);
  const hiTitle = firstHeading(hiBlock);
  out.title = hiTitle ? (enTitle + ' | ' + hiTitle) : enTitle;
  if (!out.title) out.warnings.push('No h1/h2 title found');

  const enSum = firstPara(enBlock);
  const hiSum = firstPara(hiBlock);
  const trim = s => (s.length > 240 ? s.slice(0, 237) + '...' : s);
  out.summary = hiSum ? (trim(enSum) + ' | ' + trim(hiSum)) : trim(enSum);

  const imgM = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgM) out.cover = imgM[1].trim();

  return out;
}

async function sbFetch(path, opts = {}) {
  const url = `${SUPABASE_URL}/rest/v1/${path}`;
  const headers = {
    apikey: SUPABASE_SERVICE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
    'Content-Type': 'application/json',
    Prefer: opts.prefer || 'return=representation',
    ...(opts.headers || {})
  };
  const r = await fetch(url, { method: opts.method || 'GET', headers, body: opts.body ? JSON.stringify(opts.body) : undefined });
  const text = await r.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch (_) { data = text; }
  if (!r.ok) {
    const msg = (data && data.message) || (data && data.error) || text || r.statusText;
    const err = new Error(msg);
    err.status = r.status;
    err.data = data;
    throw err;
  }
  return data;
}

async function loadConfig() {
  try {
    const rows = await sbFetch('auto_publish_config?id=eq.1&select=*');
    if (rows && rows[0]) return rows[0];
  } catch (e) {
    if (e.status === 404 || (e.message && e.message.includes('relation'))) {
      return null; // table missing
    }
    throw e;
  }
  return null;
}

async function saveConfig(patch) {
  const body = { ...patch, updated_at: new Date().toISOString() };
  // Upsert single row
  try {
    await sbFetch('auto_publish_config?id=eq.1', {
      method: 'PATCH',
      body,
      prefer: 'return=representation'
    });
  } catch (e) {
    // If no row, insert
    await sbFetch('auto_publish_config', {
      method: 'POST',
      body: { id: 1, ...body },
      prefer: 'return=representation',
      headers: { Prefer: 'resolution=merge-duplicates,return=representation' }
    });
  }
}

async function fetchGithubTree() {
  const apiUrl = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/git/trees/${GH_BRANCH}?recursive=1`;
  const r = await fetch(apiUrl, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'vkstech-auto-publish'
    }
  });
  if (!r.ok) {
    const t = await r.text();
    throw new Error('GitHub tree failed: ' + r.status + ' ' + t.slice(0, 200));
  }
  const data = await r.json();
  const byFolder = {};
  (data.tree || []).forEach(entry => {
    if (entry.type !== 'blob') return;
    const lastSlash = entry.path.lastIndexOf('/');
    if (lastSlash < 0) return; // root files ignore
    const folder = entry.path.substring(0, lastSlash);
    const name = entry.path.substring(lastSlash + 1);
    if (!byFolder[folder]) byFolder[folder] = [];
    byFolder[folder].push({ name, size: entry.size || 0, path: entry.path });
  });
  return { byFolder, truncated: !!data.truncated };
}

async function fetchGithubHtml(folder, file) {
  const url = `https://raw.githubusercontent.com/${GH_OWNER}/${GH_REPO}/${GH_BRANCH}/${folder}/${file}?cb=${Date.now()}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error('Failed to fetch HTML: ' + r.status);
  return await r.text();
}

function resolveCover(folder, coverSrc) {
  if (!coverSrc) return '';
  if (/^https?:\/\//i.test(coverSrc)) return coverSrc;
  const clean = coverSrc.replace(/^\.\//, '').replace(/^\/+/, '');
  // If path already includes folder, use as-is relative to repo root
  if (clean.includes('/')) {
    return `https://raw.githubusercontent.com/${GH_OWNER}/${GH_REPO}/${GH_BRANCH}/${clean}`;
  }
  return `https://raw.githubusercontent.com/${GH_OWNER}/${GH_REPO}/${GH_BRANCH}/${folder}/${clean}`;
}

async function getPublishedFolders() {
  const rows = await sbFetch('blogs?select=github_path&github_path=not.is.null');
  const set = new Set();
  (rows || []).forEach(row => {
    if (row.github_path) set.add(row.github_path.split('::')[0]);
  });
  return set;
}

function findNextFolder(allFolders, published, startFolder, lastPublished) {
  const sorted = [...allFolders].sort(compareFolders);
  // Decide the cursor: prefer last_published if set, else start_folder
  let cursor = lastPublished || null;
  let startFromBeginning = false;

  if (!cursor && startFolder) {
    // First run: start AT startFolder (include it if unpublished)
    const idx = sorted.findIndex(f => f === startFolder || f.endsWith('/' + startFolder) || f.split('/').pop() === startFolder.split('/').pop());
    if (idx >= 0) {
      // Walk from startFolder inclusive
      for (let i = idx; i < sorted.length; i++) {
        if (!published.has(sorted[i])) return sorted[i];
      }
      return null;
    }
    // start folder not found — fall through to first unpublished overall
    startFromBeginning = true;
  }

  if (cursor) {
    const idx = sorted.findIndex(f => f === cursor);
    if (idx >= 0) {
      for (let i = idx + 1; i < sorted.length; i++) {
        if (!published.has(sorted[i])) return sorted[i];
      }
      return null; // queue exhausted
    }
  }

  // Fallback: first unpublished in sorted order
  for (const f of sorted) {
    if (!published.has(f)) return f;
  }
  return null;
}

async function publishFolder(folder, files) {
  const htmlFile = pickBestHtml(files);
  if (!htmlFile) throw new Error('No HTML file in folder ' + folder);

  const html = await fetchGithubHtml(folder, htmlFile.name);
  const meta = parseHtmlMeta(html);
  if (!meta.title) throw new Error('No title found in ' + folder + '/' + htmlFile.name);

  const slug = folderToSlug(folder);
  if (!slug) throw new Error('Could not derive slug from folder ' + folder);

  const cover = resolveCover(folder, meta.cover);
  const github_path = folder + '::' + htmlFile.name;
  const row = {
    title: meta.title,
    slug,
    category: meta.category || 'manufacturing',
    subcategory: (meta.category === 'packaging' && meta.subcategory) ? meta.subcategory : null,
    summary: meta.summary || '',
    cover_image: cover || null,
    content: '',
    github_path,
    read_time_minutes: computeReadTimeMinutes(html),
    published: true
  };

  try {
    const inserted = await sbFetch('blogs', {
      method: 'POST',
      body: row,
      prefer: 'return=representation'
    });
    return { row: (inserted && inserted[0]) || row, slug, title: meta.title, github_path };
  } catch (e) {
    if (String(e.message).toLowerCase().includes('duplicate') || String(e.message).toLowerCase().includes('unique')) {
      const err = new Error('Slug already exists: ' + slug);
      err.code = 'DUPLICATE_SLUG';
      throw err;
    }
    throw e;
  }
}

module.exports = async function handler(req, res) {
  // CORS for admin "run now" button
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-auto-publish-secret');
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }

  try {
    const secret = process.env.AUTO_PUBLISH_SECRET || '';
    const provided =
      (req.query && req.query.secret) ||
      (req.headers && (req.headers['x-auto-publish-secret'] || req.headers['x-cron-secret'])) ||
      '';
    // Vercel Cron automatically sends this header on scheduled invocations
    const isVercelCron = !!(req.headers && req.headers['x-vercel-cron']);

    const force = req.query && (req.query.force === '1' || req.query.force === 'true');
    const dryRun = req.query && (req.query.dry === '1' || req.query.dry === 'true');
    // Allow status / dry-run without secret (read-only). Writes need cron header or matching secret.
    const isStatusOnly = req.query && (req.query.status === '1' || req.query.status === 'true');
    const readOnly = isStatusOnly || dryRun;
    if (!readOnly) {
      const authorized = isVercelCron || (secret && provided === secret);
      if (!authorized) {
        if (!secret && !isVercelCron) {
          return json(res, 500, { ok: false, error: 'AUTO_PUBLISH_SECRET not configured on server (and not a Vercel Cron call)' });
        }
        return json(res, 401, { ok: false, error: 'Unauthorized — bad or missing secret' });
      }
    }

    const config = await loadConfig();
    if (!config) {
      return json(res, 400, {
        ok: false,
        error: 'auto_publish_config table missing or empty. Run the SQL migration from Admin → Auto Publish tab first.',
        needsSetup: true
      });
    }

    if (isStatusOnly) {
      return json(res, 200, {
        ok: true,
        config: {
          enabled: !!config.enabled,
          start_folder: config.start_folder,
          last_published_folder: config.last_published_folder,
          publish_hour_ist: config.publish_hour_ist,
          publish_minute_ist: config.publish_minute_ist,
          last_run_at: config.last_run_at,
          last_result: config.last_result
        }
      });
    }

    if (!config.enabled && !force) {
      return json(res, 200, { ok: true, skipped: true, reason: 'Auto-publish is disabled. Enable it in Admin or pass force=1.' });
    }

    // Optional: only run near the configured IST hour (skip if cron fires at wrong time)
    // Unless force=1
    if (!force && config.publish_hour_ist != null) {
      const now = new Date();
      // IST = UTC+5:30
      const istOffsetMs = (5 * 60 + 30) * 60 * 1000;
      const ist = new Date(now.getTime() + istOffsetMs);
      const istHour = ist.getUTCHours();
      const istMin = ist.getUTCMinutes();
      const targetH = Number(config.publish_hour_ist) || 9;
      const targetM = Number(config.publish_minute_ist) || 0;
      // Allow a 90-minute window so daily cron + slight drift still works
      const minsNow = istHour * 60 + istMin;
      const minsTarget = targetH * 60 + targetM;
      const diff = Math.abs(minsNow - minsTarget);
      if (diff > 90 && diff < (24 * 60 - 90)) {
        return json(res, 200, {
          ok: true,
          skipped: true,
          reason: `Outside publish window (now ${String(istHour).padStart(2, '0')}:${String(istMin).padStart(2, '0')} IST, target ${String(targetH).padStart(2, '0')}:${String(targetM).padStart(2, '0')} IST). Use force=1 to override.`
        });
      }
    }

    const tree = await fetchGithubTree();
    const blogFolders = [];
    Object.keys(tree.byFolder).forEach(folder => {
      const files = tree.byFolder[folder];
      if (files.some(f => /\.html?$/i.test(f.name))) {
        blogFolders.push(folder);
      }
    });

    if (blogFolders.length === 0) {
      await saveConfig({ last_run_at: new Date().toISOString(), last_result: 'No blog folders found on GitHub' });
      return json(res, 200, { ok: false, error: 'No blog folders found on GitHub' });
    }

    const published = await getPublishedFolders();
    const next = findNextFolder(blogFolders, published, config.start_folder, config.last_published_folder);

    if (!next) {
      const msg = 'Queue exhausted — no unpublished folders left after the current pointer.';
      await saveConfig({ last_run_at: new Date().toISOString(), last_result: msg });
      return json(res, 200, { ok: true, done: true, message: msg });
    }

    if (dryRun) {
      const sorted = [...blogFolders].sort(compareFolders);
      const upcoming = [];
      let found = false;
      for (const f of sorted) {
        if (f === next) found = true;
        if (found && !published.has(f) && upcoming.length < 8) upcoming.push(f);
      }
      return json(res, 200, {
        ok: true,
        dryRun: true,
        nextFolder: next,
        upcoming,
        publishedCount: published.size,
        totalBlogFolders: blogFolders.length
      });
    }

    const files = tree.byFolder[next] || [];
    let result;
    try {
      result = await publishFolder(next, files);
    } catch (e) {
      if (e.code === 'DUPLICATE_SLUG') {
        // Mark as "done" for this folder so we advance past it
        await saveConfig({
          last_published_folder: next,
          last_run_at: new Date().toISOString(),
          last_result: 'Skipped (slug already exists): ' + next
        });
        return json(res, 200, { ok: true, skipped: true, reason: e.message, folder: next });
      }
      await saveConfig({
        last_run_at: new Date().toISOString(),
        last_result: 'Error on ' + next + ': ' + e.message
      });
      return json(res, 500, { ok: false, error: e.message, folder: next });
    }

    await saveConfig({
      last_published_folder: next,
      last_run_at: new Date().toISOString(),
      last_result: 'Published: ' + result.title + ' → /blog/' + result.slug
    });

    return json(res, 200, {
      ok: true,
      published: true,
      folder: next,
      slug: result.slug,
      title: result.title,
      github_path: result.github_path,
      url: 'https://vkstech.com/blog/' + result.slug
    });
  } catch (err) {
    console.error('auto-publish error', err);
    return json(res, 500, { ok: false, error: err.message || String(err) });
  }
};
