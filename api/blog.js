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
function extractBodyContent(html) {
  if (!html) return '';
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) return bodyMatch[1];
  return html;
}

// Fetch blog content from GitHub for GitHub-backed blogs
async function fetchGithubContent(githubPath) {
  if (!githubPath) return '';
  const [folder, file] = githubPath.split('::');
  if (!folder || !file) return '';
  const rawUrl = `https://raw.githubusercontent.com/${GH_OWNER}/${GH_REPO}/${GH_BRANCH}/${folder}/${file}?cb=${Date.now()}`;
  try {
    const r = await fetch(rawUrl, { cache: 'no-store' });
    if (!r.ok) return '';
    const html = await r.text();
    let body = extractBodyContent(html);
    const folderPrefix = ASSET_URL + '/' + folder + '/';
    body = body.replace(/(src|href)="(?!https?:\/\/)(?!\/)(?!data:)(?!#)([^"]+)"/g, (m, attr, path) => {
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

// Fetch answered questions for this blog from Supabase
async function fetchAnsweredQuestions(blogId) {
  try {
    const url = `${SUPABASE_URL}/rest/v1/blog_questions?blog_id=eq.${encodeURIComponent(blogId)}&answered_at=not.is.null&select=id,question,asker_name,answer,answered_at&order=answered_at.desc`;
    const r = await fetch(url, {
      headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
      cache: 'no-store'
    });
    if (!r.ok) return [];
    return await r.json();
  } catch (e) {
    console.error('Q&A fetch error:', e);
    return [];
  }
}

// Fetch the previous + next published blogs (by creation date) for navigation footer.
// Returns { prev, next } where each is { slug, title } or null.
async function fetchPrevNext(currentCreatedAt, currentId) {
  try {
    /* Use a single bounded query that returns the row right before and right after. */
    const baseHeaders = { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` };
    /* Older = published before this one */
    const prevUrl = `${SUPABASE_URL}/rest/v1/blogs?published=eq.true&created_at=lt.${encodeURIComponent(currentCreatedAt)}&id=neq.${currentId}&select=slug,title&order=created_at.desc&limit=1`;
    /* Newer = published after this one */
    const nextUrl = `${SUPABASE_URL}/rest/v1/blogs?published=eq.true&created_at=gt.${encodeURIComponent(currentCreatedAt)}&id=neq.${currentId}&select=slug,title&order=created_at.asc&limit=1`;
    const [pRes, nRes] = await Promise.all([
      fetch(prevUrl, { headers: baseHeaders, cache: 'no-store' }),
      fetch(nextUrl, { headers: baseHeaders, cache: 'no-store' })
    ]);
    const pData = pRes.ok ? await pRes.json() : [];
    const nData = nRes.ok ? await nRes.json() : [];
    return {
      prev: pData[0] || null,
      next: nData[0] || null
    };
  } catch (e) {
    console.error('Prev/Next fetch error:', e);
    return { prev: null, next: null };
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
  tech:      { cls:'tp', label:'Tech & Tools' },
  manufacturing: { cls:'to', label:'Manufacturing Excellence' }
};

const SUBCAT_LABELS = {
  metalliser: '⚙️ Metalliser',
  slitter:    '✂️ Slitter',
  quality:    '🔍 Quality Control',
  general:    '📦 General'
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
    let cover = b.cover_image || '';
    if (cover && !cover.startsWith('http') && !cover.startsWith('/')) {
      cover = SITE_URL + '/' + cover;
    } else if (cover && cover.startsWith('/')) {
      cover = SITE_URL + cover;
    }
    const pageUrl = `${SITE_URL}/blog/${slug}`;
    const dateStr = b.created_at ? new Date(b.created_at).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'}) : '';
    const cat = CAT_MAP[b.category] || { cls:'tp', label: b.category || 'Blog' };

    // Content
    let content = '';
    if (b.github_path) {
      content = await fetchGithubContent(b.github_path);
    }
    if (!content) {
      content = (b.content || '').replace(/src="(?!http)(?!\/)/g, 'src="' + ASSET_URL + '/');
    }

    /* Compute reading time. Prefer stored value (fast, accurate, set at publish).
       Fall back to live computation if not yet set (legacy blogs).
       Always wins because we compute from the full GitHub content here. */
    let readTime = '';
    if (b.read_time_minutes && b.read_time_minutes > 0){
      readTime = b.read_time_minutes + ' min read';
    } else {
      const cleanText = content.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim();
      const wordCount = cleanText ? cleanText.split(' ').filter(w => w.length > 0).length : 0;
      const readMinutes = wordCount > 50 ? Math.max(1, Math.round(wordCount / 220)) : 0;
      readTime = readMinutes ? readMinutes + ' min read' : '';
    }

    // Q&A + Prev/Next — fetch in parallel
    const [questions, prevNext] = await Promise.all([
      fetchAnsweredQuestions(b.id),
      fetchPrevNext(b.created_at, b.id)
    ]);

    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.setHeader('Cache-Control','public, max-age=0, s-maxage=10, stale-while-revalidate=30');
    res.statusCode = 200;
    res.end(renderPage({ blogId: b.id, slug, enTitle, hiTitle, enSummary, cover, pageUrl, dateStr, cat, subcat: b.subcategory || '', content, questions, readTime, prev: prevNext.prev, next: prevNext.next }));
  } catch (err) {
    console.error('Blog error:', err);
    res.statusCode = 500; res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end(errorHtml());
  }
}

function renderQuestionsList(questions) {
  if (!questions || !questions.length) {
    return '<div style="text-align:center;padding:30px 20px;color:var(--muted);font-size:.85rem;"><div style="font-size:2rem;margin-bottom:8px;opacity:.5;">💭</div>No questions answered yet. Be the first to ask!</div>';
  }
  return '<h3 style="font-family:Playfair Display,serif;font-weight:700;font-size:1.05rem;color:var(--navy);margin-bottom:14px;">' + questions.length + ' ' + (questions.length === 1 ? 'Question' : 'Questions') + ' Answered</h3>' +
    questions.map(function(q){
      var when = q.answered_at ? new Date(q.answered_at).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}) : '';
      return ''
        + '<div style="background:#fff;border:1px solid var(--border);border-radius:14px;padding:18px 20px;margin-bottom:14px;box-shadow:0 2px 8px rgba(26,39,68,.04);">'
        +   '<div style="display:flex;gap:10px;margin-bottom:12px;">'
        +     '<div style="flex-shrink:0;width:32px;height:32px;border-radius:50%;background:rgba(232,93,38,.12);color:var(--orange);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;">Q</div>'
        +     '<div style="flex:1;"><div style="font-weight:700;font-size:.82rem;color:var(--navy);">' + esc(q.asker_name) + '</div>'
        +       '<div style="font-size:.93rem;color:var(--text);line-height:1.7;margin-top:3px;">' + esc(q.question) + '</div></div>'
        +   '</div>'
        +   '<div style="display:flex;gap:10px;padding-top:12px;border-top:1px dashed var(--border);">'
        +     '<div style="flex-shrink:0;width:32px;height:32px;border-radius:50%;background:rgba(13,140,126,.12);color:#0d8c7e;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;">A</div>'
        +     '<div style="flex:1;"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px;"><div style="font-weight:700;font-size:.82rem;color:#0d8c7e;">Vivek Kumar</div><div style="font-size:.7rem;color:var(--light);font-family:JetBrains Mono,monospace;">' + esc(when) + '</div></div>'
        +       '<div style="font-size:.92rem;color:var(--text);line-height:1.75;white-space:pre-wrap;">' + esc(q.answer) + '</div></div>'
        +   '</div>'
        + '</div>';
    }).join('');
}

function renderPage({ blogId, slug, enTitle, hiTitle, enSummary, cover, pageUrl, dateStr, cat, subcat, content, questions, readTime, prev, next }) {
  const questionsHtml = renderQuestionsList(questions);
  const subcatLabel = subcat && SUBCAT_LABELS[subcat] ? SUBCAT_LABELS[subcat] : '';
  const subcatBadge = subcatLabel ? '<span class="blog-tag subcat-tag" style="margin-left:6px;background:rgba(232,93,38,.08);color:#e85d26;border:1px solid rgba(232,93,38,.25);">' + esc(subcatLabel) + '</span>' : '';

  /* Newsletter signup form — shown on every blog page, at bottom */
  const newsletterForm = `
<section class="newsletter-section" aria-label="Subscribe to newsletter">
  <div class="newsletter-card">
    <div class="nl-text">
      <h2>Liked this? Get the next one.</h2>
      <p>Industry insights, Excel tips, and free tools — direct to your inbox. One email when a new article goes live. No spam.</p>
    </div>
    <form class="nl-form" onsubmit="return submitBlogNewsletter(event)" novalidate>
      <input type="text" id="bnlName" placeholder="Your name" required autocomplete="name" maxlength="100"/>
      <input type="email" id="bnlEmail" placeholder="you@email.com" required autocomplete="email" maxlength="254"/>
      <input type="text" id="bnlHp" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px;top:-9999px;" aria-hidden="true"/>
      <button type="submit" class="nl-btn" id="bnlBtn">Subscribe →</button>
    </form>
    <div class="nl-msg" id="bnlMsg" role="status" aria-live="polite"></div>
  </div>
</section>`;

  /* Render the prev/next navigation block.
     Title comes bilingual ("English | Hindi") — strip to English-only for the link label. */
  function navTitle(t){ return t ? t.split('|')[0].trim() : ''; }
  const prevHtml = prev ? `
    <a class="nav-link nav-prev" href="/blog/${esc(prev.slug)}">
      <div class="nav-dir">\u2190 Previous Article</div>
      <div class="nav-title">${esc(navTitle(prev.title))}</div>
    </a>` : '<div class="nav-spacer"></div>';
  const nextHtml = next ? `
    <a class="nav-link nav-next" href="/blog/${esc(next.slug)}">
      <div class="nav-dir">Next Article \u2192</div>
      <div class="nav-title">${esc(navTitle(next.title))}</div>
    </a>` : '<div class="nav-spacer"></div>';
  const prevNextNav = (prev || next) ? `
    <nav class="prev-next-nav" aria-label="Adjacent articles">
      ${prevHtml}
      ${nextHtml}
    </nav>` : '';
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

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@300;400;600;700&family=Playfair+Display:wght@700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet"/>

<!-- Supabase (for Q&A submissions) -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<style>
:root {
  --bg:#faf9f6; --bg2:#f3f1ec; --card:#fff;
  --border:#e2ddd4; --border2:#d0c9bc;
  --navy:#1a2744; --orange:#e85d26; --orange2:#f07040; --teal:#0d8c7e;
  --text:#2a2a2a; --muted:#6b6556; --light:#999;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--text);line-height:1.7;}

.topbar{position:sticky;top:0;z-index:10;background:rgba(250,249,246,.96);backdrop-filter:blur(18px);border-bottom:1px solid var(--border);padding:12px 5%;display:flex;justify-content:space-between;align-items:center;}
.back-btn{background:var(--navy);color:#fff;border:none;padding:9px 20px;border-radius:50px;font-weight:700;font-size:.82rem;cursor:pointer;font-family:inherit;text-decoration:none;display:inline-block;}
.back-btn:hover{background:var(--orange);}
.topbar-right{display:flex;align-items:center;gap:12px;}
.lang-pills{display:flex;gap:4px;background:rgba(26,39,68,.06);border:1px solid var(--border);border-radius:50px;padding:3px;}
.lpill{border:none;padding:5px 12px;border-radius:50px;cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;background:transparent;color:var(--muted);transition:all .2s;}
.lpill.active{background:var(--navy);color:#fff;}

.cover{max-width:780px;margin:0 auto;padding:20px 5% 0;}
.cover img{width:100%;height:auto;border-radius:16px;display:block;}

.header{max-width:780px;margin:0 auto;padding:24px 5% 0;text-align:center;}
.blog-tag{font-family:'JetBrains Mono',monospace;font-size:.63rem;padding:3px 9px;border-radius:50px;font-weight:600;display:inline-block;margin-bottom:14px;}
.to{background:rgba(232,93,38,.08);color:#e85d26;}
.tt{background:rgba(0,128,200,.08);color:#0080c8;}
.tg{background:rgba(13,140,126,.08);color:#0d8c7e;}
.tp{background:rgba(120,80,200,.08);color:#7850c8;}
h1{font-family:'Playfair Display',serif;font-weight:900;font-size:clamp(1.5rem,4vw,2.2rem);color:var(--navy);line-height:1.25;margin-bottom:10px;}
.meta{font-size:.78rem;color:var(--light);margin-bottom:28px;font-family:'JetBrains Mono',monospace;}

.article{max-width:780px;margin:0 auto;padding:0 5% 40px;font-size:1rem;color:var(--text);line-height:2;}
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

.en-content,.hi-content{display:block;}
body.lang-hi .en-content{display:none !important;}
body.lang-hi .hi-content{display:block !important;}
body.lang-en .hi-content{display:none !important;}
body.lang-en .en-content{display:block !important;}
body.lang-hi h1 .en-content{display:none !important;}
body.lang-hi h1 .hi-content{display:inline !important;}
body.lang-en h1 .hi-content{display:none !important;}
body.lang-en h1 .en-content{display:inline !important;}

.share-btn{position:fixed;bottom:24px;right:24px;z-index:100;width:56px;height:56px;border-radius:50%;border:none;background:var(--orange);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 20px rgba(232,93,38,.4);transition:transform .2s,box-shadow .2s;}
.share-btn:hover{transform:scale(1.08);box-shadow:0 8px 26px rgba(232,93,38,.55);}

/* Q&A Section */
.qa-section{max-width:780px;margin:0 auto;padding:20px 5% 40px;border-top:1px solid var(--border);}
.qa-section h2{font-family:'Playfair Display',serif;font-weight:800;font-size:1.4rem;color:var(--navy);margin-bottom:4px;}
.qa-intro{color:var(--muted);font-size:.85rem;margin-bottom:24px;}
.ask-form{background:linear-gradient(135deg,rgba(232,93,38,.04),rgba(13,140,126,.03));border:1px solid var(--border);border-radius:16px;padding:20px 22px;margin-bottom:28px;}
.ask-form h3{font-family:'Playfair Display',serif;font-weight:700;font-size:1rem;color:var(--navy);margin-bottom:14px;}
.ask-form label{display:block;font-size:.72rem;font-weight:700;color:var(--navy);margin-bottom:5px;font-family:'JetBrains Mono',monospace;text-transform:uppercase;}
.ask-form label .sub{opacity:.6;text-transform:none;font-weight:400;}
.ask-form .field{margin-bottom:12px;}
.ask-form input,.ask-form textarea{width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;font-size:.9rem;font-family:inherit;background:#fff;outline:none;transition:border-color .2s;}
.ask-form input:focus,.ask-form textarea:focus{border-color:var(--orange);}
.ask-form textarea{resize:vertical;min-height:80px;}
.ask-btn{background:var(--orange);color:#fff;border:none;padding:11px 26px;border-radius:50px;font-weight:700;font-size:.88rem;cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(232,93,38,.28);}
.ask-btn:hover{background:var(--navy);}
#qaMsg{margin-top:10px;font-size:.82rem;min-height:1.2em;}
.qa-hp{position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;overflow:hidden;pointer-events:none;}

.footer-cta{max-width:780px;margin:0 auto 60px;padding:0 5%;text-align:center;}
.footer-cta a{display:inline-block;background:var(--navy);color:#fff;padding:14px 32px;border-radius:50px;text-decoration:none;font-weight:700;font-size:.92rem;transition:all .25s;}
.footer-cta a:hover{background:var(--orange);transform:translateY(-1px);}

/* Newsletter signup card on every blog page */
.newsletter-section{max-width:780px;margin:30px auto;padding:0 5%;}
.newsletter-card{
  background:linear-gradient(135deg,rgba(232,93,38,.06),rgba(13,140,126,.04));
  border:1px solid var(--border);
  border-left:4px solid var(--orange);
  border-radius:18px;
  padding:30px 32px;
}
.newsletter-card .nl-text h2{
  font-family:'Playfair Display',serif;font-weight:800;
  font-size:1.25rem;color:var(--navy);margin:0 0 .5rem;line-height:1.3;
}
.newsletter-card .nl-text p{
  color:var(--muted);font-size:.9rem;line-height:1.6;margin:0 0 1.4rem;
}
.newsletter-card .nl-form{
  display:grid;grid-template-columns:1fr 1.4fr auto;gap:8px;align-items:center;
}
.newsletter-card input[type=text]:not(#bnlHp),
.newsletter-card input[type=email]{
  background:#fff;border:1.5px solid var(--border);
  border-radius:50px;padding:11px 18px;
  font-family:inherit;font-size:.88rem;
  color:var(--navy);outline:none;
  transition:border-color .2s,box-shadow .2s;
  min-width:0;
}
.newsletter-card input::placeholder{color:var(--muted);}
.newsletter-card input:focus{
  border-color:var(--orange);
  box-shadow:0 0 0 3px rgba(232,93,38,.1);
}
.newsletter-card .nl-btn{
  background:var(--orange);color:#fff;border:none;
  padding:11px 22px;border-radius:50px;
  font-family:inherit;font-weight:700;font-size:.85rem;
  cursor:pointer;transition:all .2s;white-space:nowrap;
}
.newsletter-card .nl-btn:hover{background:#d44d1a;transform:translateY(-1px);}
.newsletter-card .nl-btn:disabled{opacity:.55;cursor:not-allowed;transform:none;}
.newsletter-card .nl-msg{
  font-size:.84rem;margin-top:10px;min-height:1.2em;
}
.newsletter-card .nl-msg.success{color:var(--teal);}
.newsletter-card .nl-msg.error{color:#c64a32;}
@media(max-width:600px){
  .newsletter-card{padding:22px 20px;}
  .newsletter-card .nl-text h2{font-size:1.1rem;}
  .newsletter-card .nl-form{grid-template-columns:1fr;}
  .newsletter-card .nl-btn{padding:13px 22px;}
}

/* Prev/Next blog navigation footer */
.prev-next-nav{max-width:780px;margin:30px auto 50px;padding:0 5%;display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.prev-next-nav .nav-link{
  display:block;padding:16px 18px;border:1.5px solid var(--border);border-radius:14px;
  background:var(--card);text-decoration:none;color:var(--text);
  transition:border-color .2s,transform .2s,box-shadow .2s;
}
.prev-next-nav .nav-link:hover{border-color:var(--orange);transform:translateY(-2px);box-shadow:0 6px 18px rgba(26,39,68,.06);}
.prev-next-nav .nav-dir{font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;color:var(--orange);margin-bottom:6px;letter-spacing:.5px;text-transform:uppercase;}
.prev-next-nav .nav-title{font-family:'Playfair Display',serif;font-weight:700;font-size:.95rem;color:var(--navy);line-height:1.4;}
.prev-next-nav .nav-next{text-align:right;}
.prev-next-nav .nav-spacer{display:block;}
@media(max-width:600px){
  .prev-next-nav{grid-template-columns:1fr;gap:10px;margin:20px auto 40px;}
  .prev-next-nav .nav-next{text-align:left;}
  .prev-next-nav .nav-link{padding:13px 15px;}
  .prev-next-nav .nav-title{font-size:.88rem;}
}

.toast-msg{position:fixed;bottom:96px;right:24px;z-index:101;background:var(--navy);color:#fff;padding:12px 18px;border-radius:50px;font-size:.85rem;font-weight:600;box-shadow:0 6px 20px rgba(0,0,0,.2);max-width:calc(100vw - 48px);animation:fadeUp .25s ease-out;}
@keyframes fadeUp{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}

@media(max-width:600px){
  .article{font-size:.92rem!important;line-height:1.85!important;padding:0 4% 30px!important;}
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
  .qa-section{padding:20px 4% 30px;}
  .qa-section h2{font-size:1.2rem;}
  .ask-form{padding:16px 14px;}
}
</style>
</head>
<body class="lang-en">

<div class="topbar">
  <a href="/#blog" class="back-btn">\u2190 Back</a>
  <div class="topbar-right">
    <div class="lang-pills">
      <button class="lpill active" id="btnEn" onclick="setLang('en')">EN</button>
      <button class="lpill" id="btnHi" onclick="setLang('hi')">\u0939\u093f\u0902</button>
    </div>
  </div>
</div>

<div class="header">
  <span class="blog-tag ${cat.cls}">${esc(cat.label)}</span>${subcatBadge}
  <h1>
    <span class="en-content">${esc(enTitle)}</span>
    <span class="hi-content">${esc(hiTitle)}</span>
  </h1>
  <div class="meta">${esc(dateStr)} \xB7 By Vivek Kumar${readTime ? ' \xB7 \u{1F4D6} ' + esc(readTime) : ''}</div>
</div>

<article class="article">
${content}
</article>

<!-- Q&A Section -->
<section class="qa-section">
  <h2>\u{1F4AC} Questions & Answers</h2>
  <p class="qa-intro">Ask a question about this article. Answered questions appear publicly below.</p>

  <div class="ask-form">
    <h3>Ask a Question</h3>
    <div class="field"><label>Your Name *</label><input id="qaName" type="text" placeholder="Your full name"/></div>
    <div class="field"><label>Email <span class="sub">(optional — to notify you when answered)</span></label><input id="qaEmail" type="email" placeholder="you@email.com"/></div>
    <div class="field"><label>Your Question *</label><textarea id="qaQuestion" rows="3" placeholder="What would you like to know?"></textarea></div>
    <div class="qa-hp" aria-hidden="true"><input type="text" id="qaHp" tabindex="-1" autocomplete="off"/></div>
    <button class="ask-btn" onclick="submitQuestion()">Submit Question \u2192</button>
    <div id="qaMsg"></div>
  </div>

  <div id="qaList">${questionsHtml}</div>
</section>

${newsletterForm}

${prevNextNav}

<div class="footer-cta">
  <a href="/#blog">\u2190 Read More Articles</a>
</div>

<button class="share-btn" onclick="shareThis()" title="Share this article" aria-label="Share">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
</button>

<script>
var BLOG_ID = ${JSON.stringify(blogId)};

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

/* ═══════════════════════════════════════════
   Q&A — Submit question to Supabase
   ═══════════════════════════════════════════ */
var sb = window.supabase.createClient(
  'https://hozqkfvusazdneockkxf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvenFrZnZ1c2F6ZG5lb2Nra3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5MjM3ODIsImV4cCI6MjA5MTQ5OTc4Mn0.OFFqme0Ov8BBieN75xDIv5-UeBrddFl-GUr_-8aL1yY'
);

async function submitBlogNewsletter(ev){
  if(ev && ev.preventDefault) ev.preventDefault();
  var nameEl  = document.getElementById('bnlName');
  var emailEl = document.getElementById('bnlEmail');
  var hpEl    = document.getElementById('bnlHp');
  var btnEl   = document.getElementById('bnlBtn');
  var msgEl   = document.getElementById('bnlMsg');
  if(!nameEl || !emailEl || !msgEl) return false;

  if(hpEl && hpEl.value.trim() !== ''){
    msgEl.textContent = 'Thanks — you are subscribed.';
    msgEl.className = 'nl-msg success';
    return false;
  }

  var name  = nameEl.value.trim();
  var email = emailEl.value.trim().toLowerCase();
  if(!name){ msgEl.textContent='Please add your name.'; msgEl.className='nl-msg error'; return false; }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){
    msgEl.textContent='Please enter a valid email.'; msgEl.className='nl-msg error'; return false;
  }

  if(btnEl){ btnEl.disabled=true; btnEl.textContent='Subscribing\u2026'; }
  msgEl.textContent=''; msgEl.className='nl-msg';

  try {
    var r = await fetch('${SUPABASE_URL}/rest/v1/subscribers', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'apikey':'${SUPABASE_ANON_KEY}',
        'Authorization':'Bearer ${SUPABASE_ANON_KEY}',
        'Prefer':'return=minimal'
      },
      body: JSON.stringify({ email: email, name: name, source: 'blog-footer' })
    });
    if(r.status === 201 || r.status === 200 || r.status === 204){
      msgEl.textContent='\u2713 Subscribed! You will get an email when a new article goes live.';
      msgEl.className='nl-msg success';
      nameEl.value=''; emailEl.value='';
    } else {
      var body = await r.text();
      var dup = body.toLowerCase().indexOf('duplicate') > -1 || body.toLowerCase().indexOf('unique') > -1;
      if(dup){
        msgEl.textContent='\u2713 You are already subscribed \u2014 thank you!';
        msgEl.className='nl-msg success';
        nameEl.value=''; emailEl.value='';
      } else {
        msgEl.textContent='Could not subscribe right now. Please try again.';
        msgEl.className='nl-msg error';
        console.error('Newsletter:', r.status, body);
      }
    }
  } catch(err){
    msgEl.textContent='Network error. Please try again.';
    msgEl.className='nl-msg error';
    console.error('Newsletter:', err);
  } finally {
    if(btnEl){ btnEl.disabled=false; btnEl.textContent='Subscribe \u2192'; }
  }
  return false;
}

async function submitQuestion(){
  var msgEl = document.getElementById('qaMsg');
  var name  = document.getElementById('qaName').value.trim();
  var email = document.getElementById('qaEmail').value.trim();
  var qtext = document.getElementById('qaQuestion').value.trim();
  var hp    = document.getElementById('qaHp').value.trim();

  if(hp){
    msgEl.style.color = '#0d8c7e';
    msgEl.textContent = '\u2705 Thanks! Your question has been received.';
    return;
  }
  if(!name || !qtext){
    msgEl.style.color = '#c33';
    msgEl.textContent = 'Name and question are required.';
    return;
  }
  if(email && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/.test(email)){
    msgEl.style.color = '#c33';
    msgEl.textContent = 'Please enter a valid email or leave it blank.';
    return;
  }
  if(qtext.length < 10){
    msgEl.style.color = '#c33';
    msgEl.textContent = 'Please write a bit more detail (at least 10 characters).';
    return;
  }

  msgEl.style.color = '#6b6556';
  msgEl.textContent = 'Submitting...';

  var resp = await sb.from('blog_questions').insert([{
    blog_id: BLOG_ID,
    question: qtext,
    asker_name: name,
    asker_email: email || null
  }]);

  if(resp.error){
    msgEl.style.color = '#c33';
    msgEl.textContent = 'Could not submit: ' + resp.error.message;
    return;
  }

  document.getElementById('qaName').value = '';
  document.getElementById('qaEmail').value = '';
  document.getElementById('qaQuestion').value = '';
  msgEl.style.color = '#0d8c7e';
  msgEl.textContent = '\u2705 Thanks ' + name.split(' ')[0] + '! Your question will appear below once Vivek replies.';
}
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
