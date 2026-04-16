// Serverless function: renders a single blog post as SEO-friendly HTML
// URL: /blog/{slug}  →  fetches from Supabase  →  returns full HTML page
// Googlebot, WhatsApp, LinkedIn, Twitter all see real meta tags and content

const SUPABASE_URL = 'https://hozqkfvusazdneockkxf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvenFrZnZ1c2F6ZG5lb2Nra3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5MjM3ODIsImV4cCI6MjA5MTQ5OTc4Mn0.OFFqme0Ov8BBieN75xDIv5-UeBrddFl-GUr_-8aL1yY';
const SITE_URL = 'https://vkstech.com';

function escHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

export default async function handler(req, res) {
  const slug = (req.query.slug || '').toString().trim();
  if (!slug) {
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  try {
    const url = `${SUPABASE_URL}/rest/v1/blogs?slug=eq.${encodeURIComponent(slug)}&published=eq.true&select=*&limit=1`;
    const r = await fetch(url, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    if (!r.ok) throw new Error('Supabase error ' + r.status);
    const rows = await r.json();
    if (!rows.length) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.end(notFoundHtml());
    }

    const b = rows[0];
    const title = b.title || 'VKS Tech Blog';
    const summary = b.summary || 'Insights from flexible packaging, Excel, and industry knowledge.';
    const cover = b.cover_image || `${SITE_URL}/icon512.png`;
    const pageUrl = `${SITE_URL}/blog/${slug}`;
    const dateStr = b.created_at ? new Date(b.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
    const cat = b.category || 'Blog';
    const content = b.content || '';

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=86400');
    res.statusCode = 200;
    res.end(renderPage({ title, summary, cover, pageUrl, dateStr, cat, content, slug }));
  } catch (err) {
    console.error('Blog render error:', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(errorHtml());
  }
}

function renderPage({ title, summary, cover, pageUrl, dateStr, cat, content, slug }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${escHtml(title)} | VKS Tech</title>
<meta name="description" content="${escHtml(summary)}"/>
<link rel="canonical" href="${pageUrl}"/>

<!-- Open Graph (WhatsApp, LinkedIn, Facebook previews) -->
<meta property="og:type" content="article"/>
<meta property="og:title" content="${escHtml(title)}"/>
<meta property="og:description" content="${escHtml(summary)}"/>
<meta property="og:image" content="${escHtml(cover)}"/>
<meta property="og:url" content="${pageUrl}"/>
<meta property="og:site_name" content="VKS Tech"/>

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${escHtml(title)}"/>
<meta name="twitter:description" content="${escHtml(summary)}"/>
<meta name="twitter:image" content="${escHtml(cover)}"/>

<!-- Favicons -->
<link rel="icon" href="/favicon.ico" sizes="any"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/icon180.png"/>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet"/>

<!-- JSON-LD Structured Data for Google -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": ${JSON.stringify(title)},
  "description": ${JSON.stringify(summary)},
  "image": ${JSON.stringify(cover)},
  "datePublished": ${JSON.stringify(new Date().toISOString())},
  "author": { "@type": "Person", "name": "Vivek Kumar" },
  "publisher": {
    "@type": "Organization",
    "name": "VKS Tech",
    "logo": { "@type": "ImageObject", "url": "${SITE_URL}/icon512.png" }
  },
  "mainEntityOfPage": ${JSON.stringify(pageUrl)}
}
</script>

<style>
:root{--bg:#faf9f6;--navy:#1a2744;--orange:#e85d26;--border:#e2ddd4;--muted:#6b6556;--text:#2a2a2a;}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--text);line-height:1.7;}
.topbar{position:sticky;top:0;z-index:10;background:rgba(250,249,246,.96);backdrop-filter:blur(18px);border-bottom:1px solid var(--border);padding:12px 5%;display:flex;justify-content:space-between;align-items:center;}
.back-btn{background:var(--navy);color:#fff;text-decoration:none;padding:9px 20px;border-radius:50px;font-weight:700;font-size:.82rem;display:inline-block;}
.back-btn:hover{background:var(--orange);}
.brand{display:flex;align-items:center;gap:8px;text-decoration:none;color:var(--navy);font-weight:800;letter-spacing:1px;}
.brand img{height:28px;width:28px;border-radius:50%;}
.cover{max-width:780px;margin:0 auto;padding:20px 5% 0;}
.cover img{width:100%;height:auto;border-radius:16px;}
.header{max-width:780px;margin:0 auto;padding:24px 5% 0;text-align:center;}
.cat-tag{font-family:'JetBrains Mono',monospace;font-size:.7rem;padding:4px 11px;border-radius:50px;background:rgba(232,93,38,.1);color:var(--orange);font-weight:700;display:inline-block;margin-bottom:14px;text-transform:uppercase;}
h1{font-family:'Playfair Display',serif;font-weight:900;font-size:clamp(1.6rem,4vw,2.4rem);color:var(--navy);line-height:1.25;margin-bottom:12px;}
.meta{font-size:.78rem;color:#999;margin-bottom:28px;font-family:'JetBrains Mono',monospace;}
.article{max-width:780px;margin:0 auto;padding:0 5% 80px;font-size:1rem;line-height:2;}
.article h2{font-family:'Playfair Display',serif;font-weight:800;font-size:1.5rem;color:var(--navy);margin:32px 0 14px;padding-top:18px;border-top:1px solid var(--border);}
.article h3{font-weight:700;font-size:1.1rem;color:var(--orange);margin:24px 0 10px;}
.article p{margin-bottom:14px;}
.article ul,.article ol{margin:10px 0 18px 22px;}
.article li{margin-bottom:8px;}
.article img{max-width:100%;height:auto;border-radius:12px;margin:16px 0;display:block;}
.article table{width:100%;border-collapse:collapse;margin:20px 0;border-radius:12px;overflow:hidden;border:1px solid var(--border);}
.article th{background:var(--navy);color:#fff;padding:11px 15px;font-size:.88rem;text-align:left;}
.article td{padding:11px 15px;font-size:.9rem;border-bottom:1px solid var(--border);}
.article tr:nth-child(even){background:rgba(26,39,68,.02);}
.article blockquote{border-left:3px solid var(--orange);padding-left:14px;margin:14px 0;color:var(--muted);font-style:italic;}
.article a{color:var(--orange);}
.share{position:fixed;bottom:24px;right:24px;z-index:100;width:56px;height:56px;border-radius:50%;border:none;background:var(--orange);color:#fff;cursor:pointer;box-shadow:0 6px 20px rgba(232,93,38,.4);display:flex;align-items:center;justify-content:center;transition:transform .2s;}
.share:hover{transform:scale(1.08);}
.footer-cta{max-width:780px;margin:0 auto 40px;padding:0 5%;text-align:center;}
.footer-cta a{display:inline-block;background:var(--navy);color:#fff;padding:14px 32px;border-radius:50px;text-decoration:none;font-weight:700;font-size:.95rem;}
.footer-cta a:hover{background:var(--orange);}
@media(max-width:600px){.article{font-size:.95rem;line-height:1.85;}.article h2{font-size:1.25rem;}.article h3{font-size:1rem;}}
</style>
</head>
<body>
<div class="topbar">
  <a href="/" class="back-btn">← Back to VKS Tech</a>
  <a href="/" class="brand"><img src="/favicon-192x192.png" alt="VKS"/>VKS TECH</a>
</div>

${cover ? `<div class="cover"><img src="${escHtml(cover)}" alt="${escHtml(title)}"/></div>` : ''}

<div class="header">
  <span class="cat-tag">${escHtml(cat)}</span>
  <h1>${escHtml(title)}</h1>
  <div class="meta">${escHtml(dateStr)} · By Vivek Kumar</div>
</div>

<article class="article">
${content}
</article>

<div class="footer-cta">
  <a href="/#blog">← Read More Articles</a>
</div>

<button class="share" onclick="shareThis()" title="Share this article" aria-label="Share">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
</button>

<script>
function shareThis(){
  const data = {
    title: ${JSON.stringify(title)},
    text: ${JSON.stringify(summary)},
    url: ${JSON.stringify(pageUrl)}
  };
  if(navigator.share){
    navigator.share(data).catch(function(){});
  } else if(navigator.clipboard){
    navigator.clipboard.writeText(data.url).then(function(){ toast('Link copied!'); });
  } else {
    toast('Copy: ' + data.url);
  }
}
function toast(msg){
  var t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = 'position:fixed;bottom:96px;right:24px;background:#1a2744;color:#fff;padding:12px 18px;border-radius:50px;font-size:.85rem;font-weight:600;z-index:101;box-shadow:0 6px 20px rgba(0,0,0,.2);';
  document.body.appendChild(t);
  setTimeout(function(){ t.remove(); }, 2400);
}
</script>
</body>
</html>`;
}

function notFoundHtml() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Not Found | VKS Tech</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<style>body{font-family:system-ui,sans-serif;background:#faf9f6;color:#1a2744;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0;padding:20px;text-align:center;}h1{font-size:2rem;margin-bottom:12px;}a{color:#e85d26;text-decoration:none;font-weight:600;}</style>
</head><body><div><h1>Article not found</h1><p>This blog post may have been moved or deleted.</p><p style="margin-top:20px;"><a href="/">← Back to VKS Tech</a></p></div></body></html>`;
}

function errorHtml() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Error | VKS Tech</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<style>body{font-family:system-ui,sans-serif;background:#faf9f6;color:#1a2744;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0;padding:20px;text-align:center;}h1{font-size:2rem;margin-bottom:12px;}a{color:#e85d26;text-decoration:none;font-weight:600;}</style>
</head><body><div><h1>Something went wrong</h1><p>Please try again shortly.</p><p style="margin-top:20px;"><a href="/">← Back to VKS Tech</a></p></div></body></html>`;
}
