// Serverless function: renders a single blog post as SEO-friendly HTML
// URL: /blog/{slug} → fetches from Supabase → returns full HTML page
// Design matches the main site's blog overlay exactly

const SUPABASE_URL = 'https://hozqkfvusazdneockkxf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvenFrZnZ1c2F6ZG5lb2Nra3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5MjM3ODIsImV4cCI6MjA5MTQ5OTc4Mn0.OFFqme0Ov8BBieN75xDIv5-UeBrddFl-GUr_-8aL1yY';
const SITE_URL = 'https://vkstech.com';
const ASSET_URL = 'https://www.vkstech.com'; // Use www. for assets to avoid redirect on images
const GH_OWNER = 'vkstecho';
const GH_REPO = 'VksTech';
const GH_BRANCH = 'main';

// Extract only the <body> inner content from a full HTML file
// (We want just the article content, not a full HTML wrapper)
function extractBodyContent(html) {
  if (!html) return '';
  // Try to find <body>...</body>
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) return bodyMatch[1];
  // If no body tag, return as-is (content might be a fragment)
  return html;
}

// Fetch blog content from GitHub for GitHub-backed blogs
async function fetchGithubContent(githubPath) {
  if (!githubPath) return '';
  const [folder, file] = githubPath.split('::');
  if (!folder || !file) return '';
  const rawUrl = `https://raw.githubusercontent.com/${GH_OWNER}/${GH_REPO}/${GH_BRANCH}/${folder}/${file}?cb=${Date.now()}`;
  try {
    // Force fresh fetch from GitHub (no Vercel runtime cache)
    const r = await fetch(rawUrl, { cache: 'no-store' });
    if (!r.ok) return '';
    const html = await r.text();
    // Extract just the body content, fix relative image/pdf paths to point to GitHub folder
    let body = extractBodyContent(html);
    // Rewrite relative src/href to point to the GitHub folder served via www subdomain (no redirect)
    const folderPrefix = ASSET_URL + '/' + folder + '/';
    body = body.replace(/(src|href)="(?!https?:\/\/)(?!\/)(?!data:)(?!#)([^"]+)"/g, (m, attr, path) => {
      // If path already starts with the folder name, strip it to avoid duplication
      // e.g. "15-foo/cover.png" in folder "15-foo" should become ASSET_URL/15-foo/cover.png (not ASSET_URL/15-foo/15-foo/cover.png)
      let cleanPath = path;
      if (cleanPath.startsWith(folder + '/')) {
        cleanPath = cleanPath.substring(folder.length + 1);
      }
      return `${attr}="${folderPrefix}${cleanPath}"`;
    });
    return body;
  } catch (e) {
    console.error('GitHub fetch error:', e);
    return '';
  }
}

function esc(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function getEnglish(t) { return t ? t.split('|')[0].trim() : ''; }
function getHindi(t) { if (!t) return ''; const p = t.split('|'); return p.length > 1 ? p[1].trim() : p[0].trim(); }

const CAT_MAP = {
  packaging: { cls:'to', label:'Flexible Packaging' },
  excel:     { cls:'tt', label:'Excel & Formulas' },
  career:    { cls:'tg', label:'Career & Growth' },
  tech:      { cls:'tp', label:'Tech & Tools' }
};

export default async function handler(req, res) {
  const slug = (req.query.slug || '').toString().trim();
  if (!slug) { res.writeHead(302, { Location: '/' }); return res.end(); }

  try {
    const url = `${SUPABASE_URL}/rest/v1/blogs?slug=eq.${encodeURIComponent(slug)}&published=eq.true&select=*&limit=1`;
    const r = await fetch(url, {
      headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
    });
    if (!r.ok) throw new Error('Supabase ' + r.status);
    const rows = await r.json();
    if (!rows.length) { res.statusCode = 404; res.setHeader('Content-Type','text/html;charset=utf-8'); return res.end(notFoundHtml()); }

    const b = rows[0];
    const enTitle = getEnglish(b.title);
    const hiTitle = getHindi(b.title);
    const enSummary = getEnglish(b.summary);
    // Fix relative image paths: prepend site URL so they resolve correctly at /blog/* URLs
    let cover = b.cover_image || '';
    if (cover && !cover.startsWith('http') && !cover.startsWith('/')) {
      cover = SITE_URL + '/' + cover;
    } else if (cover && cover.startsWith('/')) {
      cover = SITE_URL + cover;
    }
    const pageUrl = `${SITE_URL}/blog/${slug}`;
    const dateStr = b.created_at ? new Date(b.created_at).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'}) : '';
    const cat = CAT_MAP[b.category] || { cls:'tp', label: b.category || 'Blog' };

    // CONTENT RESOLUTION:
    // 1. If blog is GitHub-backed (github_path set), fetch fresh from GitHub
    // 2. Otherwise, use content field from Supabase (inline blog)
    let content = '';
    if (b.github_path) {
      content = await fetchGithubContent(b.github_path);
    }
    if (!content) {
      // Fallback: use Supabase content field
      content = (b.content || '').replace(/src="(?!http)(?!\/)/g, 'src="' + ASSET_URL + '/');
    }

    res.setHeader('Content-Type','text/html;charset=utf-8');
    // Minimal cache - serve fresh content on every request, revalidate quickly
    // This ensures new GitHub uploads appear instantly
    res.setHeader('Cache-Control','public, max-age=0, s-maxage=10, stale-while-revalidate=30');
    res.statusCode = 200;
    res.end(renderPage({ enTitle, hiTitle, enSummary, cover, pageUrl, dateStr, cat, content }));
  } catch (err) {
    console.error('Blog error:', err);
    res.statusCode = 500; res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end(errorHtml());
  }
}

function renderPage({ enTitle, hiTitle, enSummary, cover, pageUrl, dateStr, cat, content }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${esc(enTitle)} | VKS Tech</title>
<meta name="description" content="${esc(enSummary)}"/>
<link rel="canonical" href="${pageUrl}"/>

<!-- Open Graph -->
<meta property="og:type" content="article"/>
<meta property="og:title" content="${esc(enTitle)}"/>
<meta property="og:description" content="${esc(enSummary)}"/>
${cover ? '<meta property="og:image" content="' + esc(cover) + '"/>' : ''}
<meta property="og:url" content="${pageUrl}"/>
<meta property="og:site_name" content="VKS Tech"/>

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${esc(enTitle)}"/>
<meta name="twitter:description" content="${esc(enSummary)}"/>
${cover ? '<meta name="twitter:image" content="' + esc(cover) + '"/>' : ''}

<!-- Favicons -->
<link rel="icon" href="/favicon.ico" sizes="any"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/icon180.png"/>

<!-- JSON-LD Structured Data -->
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BlogPosting",
  "headline":${JSON.stringify(enTitle)},
  "description":${JSON.stringify(enSummary)},
  ${cover ? '"image":' + JSON.stringify(cover) + ',' : ''}
  "datePublished":${JSON.stringify(dateStr)},
  "author":{"@type":"Person","name":"Vivek Kumar"},
  "publisher":{"@type":"Organization","name":"VKS Tech","logo":{"@type":"ImageObject","url":"${SITE_URL}/favicon-192x192.png"}},
  "mainEntityOfPage":${JSON.stringify(pageUrl)}
}
</script>

<!-- Fonts: same as main site -->
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@300;400;600;700&family=Playfair+Display:wght@700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet"/>

<style>
/* ═══════════════════════════════════════
   Design tokens: exact match with main site
   ═══════════════════════════════════════ */
:root {
  --bg:#faf9f6; --bg2:#f3f1ec; --bg3:#eceae3; --card:#fff;
  --border:#e2ddd4; --border2:#d0c9bc;
  --navy:#1a2744; --orange:#e85d26; --orange2:#f07040;
  --text:#2a2a2a; --muted:#6b6556; --light:#999;
  --white:#fff; --radius:16px;
  --ss:0 1px 4px rgba(26,39,68,.04),0 2px 8px rgba(26,39,68,.03);
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--text);line-height:1.7;}

/* ── Top Bar: matches main site blog overlay ── */
.topbar{position:sticky;top:0;z-index:10;background:rgba(250,249,246,.96);backdrop-filter:blur(18px);border-bottom:1px solid var(--border);padding:12px 5%;display:flex;justify-content:space-between;align-items:center;}
.back-btn{background:var(--navy);color:#fff;border:none;padding:9px 20px;border-radius:50px;font-weight:700;font-size:.82rem;cursor:pointer;font-family:inherit;text-decoration:none;display:inline-block;}
.back-btn:hover{background:var(--orange);}
.topbar-right{display:flex;align-items:center;gap:12px;}
.lang-pills{display:flex;gap:4px;background:rgba(26,39,68,.06);border:1px solid var(--border);border-radius:50px;padding:3px;}
.lpill{border:none;padding:5px 12px;border-radius:50px;cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;background:transparent;color:var(--muted);transition:all .2s;}
.lpill.active{background:var(--navy);color:#fff;}

/* ── Cover Image ── */
.cover{max-width:780px;margin:0 auto;padding:20px 5% 0;}
.cover img{width:100%;height:auto;border-radius:16px;display:block;}

/* ── Article Header ── */
.header{max-width:780px;margin:0 auto;padding:24px 5% 0;text-align:center;}
.blog-tag{font-family:'JetBrains Mono',monospace;font-size:.63rem;padding:3px 9px;border-radius:50px;font-weight:600;display:inline-block;margin-bottom:14px;}
.to{background:rgba(232,93,38,.08);color:#e85d26;}
.tt{background:rgba(0,128,200,.08);color:#0080c8;}
.tg{background:rgba(13,140,126,.08);color:#0d8c7e;}
.tp{background:rgba(120,80,200,.08);color:#7850c8;}
h1{font-family:'Playfair Display',serif;font-weight:900;font-size:clamp(1.5rem,4vw,2.2rem);color:var(--navy);line-height:1.25;margin-bottom:10px;}
.meta{font-size:.78rem;color:var(--light);margin-bottom:28px;font-family:'JetBrains Mono',monospace;}

/* ── Article Content: exact match with #blogBodyContent ── */
.article{max-width:780px;margin:0 auto;padding:0 5% 80px;font-size:1rem;color:var(--text);line-height:2;}
.article h2{font-family:'Playfair Display',serif;font-weight:800;font-size:1.4rem;color:var(--navy);margin:32px 0 14px;padding-top:18px;border-top:1px solid var(--border);}
.article h3{font-weight:700;font-size:1.05rem;color:var(--orange);margin:24px 0 10px;}
.article p{margin-bottom:12px;}
.article ul,.article ol{margin:10px 0 18px 22px;}
.article li{margin-bottom:8px;line-height:1.8;}
.article img{max-width:100%;height:auto;border-radius:12px;margin:16px 0;display:block;}
.article blockquote{border-left:3px solid var(--orange);padding-left:14px;margin:14px 0;color:var(--muted);font-style:italic;}
.article a{color:var(--orange);}
.article table{width:100%;border-collapse:collapse;margin:20px 0;border-radius:12px;overflow:hidden;border:1px solid var(--border);}
.article th{background:var(--navy);color:#fff;padding:11px 15px;font-size:.82rem;font-weight:700;text-align:left;}
.article td{padding:11px 15px;font-size:.86rem;border-bottom:1px solid var(--border);}
.article tr:nth-child(even){background:rgba(26,39,68,.02);}
.article .callout{background:rgba(232,93,38,.05);border-left:4px solid var(--orange);border-radius:0 12px 12px 0;padding:16px 20px;margin:20px 0;}
.article .hindi-section{background:rgba(13,140,126,.04);border:1px solid rgba(13,140,126,.15);border-radius:16px;padding:24px;margin:28px 0;}
.table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:20px 0;border-radius:12px;border:1px solid var(--border);}

/* Language toggle for content */
.en-content,.hi-content{display:block;}
body.lang-hi .en-content{display:none !important;}
body.lang-hi .hi-content{display:block !important;}
body.lang-en .hi-content{display:none !important;}
body.lang-en .en-content{display:block !important;}
/* Ensure header title spans toggle correctly (higher specificity) */
body.lang-hi h1 .en-content{display:none !important;}
body.lang-hi h1 .hi-content{display:inline !important;}
body.lang-en h1 .hi-content{display:none !important;}
body.lang-en h1 .en-content{display:inline !important;}

/* Share button */
.share-btn{position:fixed;bottom:24px;right:24px;z-index:100;width:56px;height:56px;border-radius:50%;border:none;background:var(--orange);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 20px rgba(232,93,38,.4);transition:transform .2s,box-shadow .2s;}
.share-btn:hover{transform:scale(1.08);box-shadow:0 8px 26px rgba(232,93,38,.55);}

/* Footer CTA */
.footer-cta{max-width:780px;margin:0 auto 60px;padding:0 5%;text-align:center;}
.footer-cta a{display:inline-block;background:var(--navy);color:#fff;padding:14px 32px;border-radius:50px;text-decoration:none;font-weight:700;font-size:.92rem;transition:all .25s;}
.footer-cta a:hover{background:var(--orange);transform:translateY(-1px);}

/* Toast */
.toast-msg{position:fixed;bottom:96px;right:24px;z-index:101;background:var(--navy);color:#fff;padding:12px 18px;border-radius:50px;font-size:.85rem;font-weight:600;box-shadow:0 6px 20px rgba(0,0,0,.2);max-width:calc(100vw - 48px);animation:fadeUp .25s ease-out;}
@keyframes fadeUp{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}

/* ── Mobile: same breakpoints as main site ── */
@media(max-width:600px){
  .article{font-size:.92rem!important;line-height:1.85!important;padding:0 4% 60px!important;}
  .article h2{font-size:1.2rem!important;margin:24px 0 10px!important;}
  .article h3{font-size:.95rem!important;}
  .article table{font-size:.75rem;display:block;overflow-x:auto;white-space:nowrap;}
  .article th{padding:8px 10px;font-size:.72rem;}
  .article td{padding:8px 10px;font-size:.75rem;}
  .article .callout{padding:12px 14px;font-size:.85rem;}
  .article .hindi-section{padding:16px;margin:20px 0;}
  .article ul{margin-left:16px;}
  .article li{font-size:.88rem;line-height:1.7;}
  .topbar{padding:10px 4%;}
  h1{font-size:clamp(1.3rem,5vw,1.8rem)!important;}
}
</style>
</head>
<body class="lang-en">

<!-- Top Bar -->
<div class="topbar">
  <a href="/" class="back-btn">\u2190 Back</a>
  <div class="topbar-right">
    <div class="lang-pills">
      <button class="lpill active" id="btnEn" onclick="setLang('en')">EN</button>
      <button class="lpill" id="btnHi" onclick="setLang('hi')">\u0939\u093f\u0902</button>
    </div>
  </div>
</div>

<!-- Header -->
<div class="header">
  <span class="blog-tag ${cat.cls}">${esc(cat.label)}</span>
  <h1>
    <span class="en-content">${esc(enTitle)}</span>
    <span class="hi-content">${esc(hiTitle)}</span>
  </h1>
  <div class="meta">${esc(dateStr)} \xB7 By Vivek Kumar</div>
</div>

<!-- Article Content -->
<article class="article">
${content}
</article>

<!-- Footer CTA -->
<div class="footer-cta">
  <a href="/#blog">\u2190 Read More Articles</a>
</div>

<!-- Share Button -->
<button class="share-btn" onclick="shareThis()" title="Share this article" aria-label="Share">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
</button>

<script>
function setLang(lang){
  document.body.className='lang-'+lang;
  document.getElementById('btnEn').className='lpill'+(lang==='en'?' active':'');
  document.getElementById('btnHi').className='lpill'+(lang==='hi'?' active':'');
  localStorage.setItem('vkstech_lang',lang);
}
(function(){var s=localStorage.getItem('vkstech_lang');if(s==='hi')setLang('hi');})();

function shareThis(){
  var data={title:${JSON.stringify(enTitle)},text:${JSON.stringify(enSummary)},url:${JSON.stringify(pageUrl)}};
  if(navigator.share){navigator.share(data).catch(function(){});}
  else if(navigator.clipboard){navigator.clipboard.writeText(data.url).then(function(){toast('Link copied!');});}
  else{toast('Copy: '+data.url);}
}
function toast(msg){
  var old=document.querySelector('.toast-msg');if(old)old.remove();
  var t=document.createElement('div');t.className='toast-msg';t.textContent=msg;
  document.body.appendChild(t);
  setTimeout(function(){t.style.transition='opacity .3s';t.style.opacity='0';setTimeout(function(){t.remove();},320);},2400);
}
document.querySelectorAll('.article img').forEach(function(img){img.onerror=function(){this.style.display='none';};});
</script>
</body>
</html>`;
}

function notFoundHtml() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Not Found | VKS Tech</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="icon" href="/favicon.ico" sizes="any"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
<style>body{font-family:'Plus Jakarta Sans',sans-serif;background:#faf9f6;color:#1a2744;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0;padding:20px;text-align:center;}h1{font-size:2rem;margin-bottom:12px;}a{color:#e85d26;text-decoration:none;font-weight:600;}</style>
</head><body><div><h1>Article not found</h1><p>This blog post may have been moved or deleted.</p><p style="margin-top:20px;"><a href="/">Back to VKS Tech</a></p></div></body></html>`;
}

function errorHtml() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Error | VKS Tech</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="icon" href="/favicon.ico" sizes="any"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
<style>body{font-family:'Plus Jakarta Sans',sans-serif;background:#faf9f6;color:#1a2744;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0;padding:20px;text-align:center;}h1{font-size:2rem;margin-bottom:12px;}a{color:#e85d26;text-decoration:none;font-weight:600;}</style>
</head><body><div><h1>Something went wrong</h1><p>Please try again shortly.</p><p style="margin-top:20px;"><a href="/">Back to VKS Tech</a></p></div></body></html>`;
}
