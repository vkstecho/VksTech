/* ═══════════════════════════════════════════
   SUPABASE CONFIG — REPLACE WITH YOUR VALUES
   ═══════════════════════════════════════════ */
const SUPABASE_URL = 'https://hozqkfvusazdneockkxf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvenFrZnZ1c2F6ZG5lb2Nra3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5MjM3ODIsImV4cCI6MjA5MTQ5OTc4Mn0.OFFqme0Ov8BBieN75xDIv5-UeBrddFl-GUr_-8aL1yY';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* ═══════════════════════════════════════════
   VISITOR TRACKING (lightweight, privacy-friendly)
   No cookies, no PII. A random anonymous ID is stored in
   localStorage purely to distinguish "unique visitors" from
   repeat pageviews — it identifies a browser, never a person.
   Requires a `page_views` table in Supabase — see admin.html
   for the one-time SQL setup.
   ═══════════════════════════════════════════ */
function trackPageView(){
  try{
    var VID_KEY = 'vks_vid';
    var vid = localStorage.getItem(VID_KEY);
    if(!vid){
      vid = (crypto && crypto.randomUUID) ? crypto.randomUUID()
            : 'v-' + Date.now() + '-' + Math.random().toString(16).slice(2);
      localStorage.setItem(VID_KEY, vid);
    }
    sb.from('page_views').insert([{
      path: location.pathname || '/',
      referrer: (document.referrer || '').slice(0, 300) || null,
      visitor_id: vid
    }]).then(function(res){
      if(res && res.error) console.warn('View tracking:', res.error.message);
    });
  }catch(e){ /* Tracking must never break the page */ }
}
trackPageView();

/* GitHub — blog content lives here; see admin.html for upload flow */
const GH_OWNER='vkstecho', GH_REPO='VksTech', GH_BRANCH='main';
function ghRaw(folder, file){ return `https://raw.githubusercontent.com/${GH_OWNER}/${GH_REPO}/${GH_BRANCH}/${folder}/${file}`; }
function ghFolderBase(folder){ return `https://raw.githubusercontent.com/${GH_OWNER}/${GH_REPO}/${GH_BRANCH}/${folder}/`; }

/* Cache for GitHub-fetched HTML so opening the same blog twice is instant */
const ghHtmlCache = new Map();

/* NAV */
window.addEventListener('scroll',()=>document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>40));

/* Floating Back-to-Top: show after 600px scroll */
window.addEventListener('scroll', function(){
  var btt = document.getElementById('bttBtn');
  if(btt) btt.classList.toggle('show', window.scrollY > 600);
});

/* Escape key closes whichever overlay is open: mobile menu, blog post */
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape' || e.keyCode === 27){
    var ov = document.getElementById('blogOverlay');
    if(ov){ closeBlogOverlay(); return; }
    var m = document.getElementById('mobileMenu');
    if(m && m.classList.contains('open')){ toggleMenu(); return; }
  }
});

/* Service Worker — enables true PWA install + offline shell access */
if('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('/sw.js').catch(function(err){
      /* Fail silently — SW is progressive enhancement, site works without it */
    });
  });
}
function toggleMenu(){
  var m = document.getElementById('mobileMenu');
  var h = document.getElementById('hamburger');
  m.classList.toggle('open');
  h.setAttribute('aria-expanded', m.classList.contains('open') ? 'true' : 'false');
}
document.addEventListener('click',(e)=>{const m=document.getElementById('mobileMenu');const h=document.getElementById('hamburger');if(m.classList.contains('open')&&!m.contains(e.target)&&!h.contains(e.target))m.classList.remove('open');});

/* ═══════════════════════════════
   LANGUAGE ENGINE — EN / HI
   ═══════════════════════════════ */
const HI = {
  nav_ind:"उद्योग ऐप्स", nav_per:"व्यक्तिगत ऐप्स", nav_blog:"ब्लॉग", nav_req:"ऐप अनुरोध", nav_about:"परिचय", nav_people:"लोग", nav_yt:"यूट्यूब", nav_cta:"ऐप का अनुरोध करें",
  yt_eyebrow:"VKS Tech यूट्यूब पर",
  yt_title:"पाँच चैनल, एक क्रिएटर",
  yt_sub:"फाइनेंस, फिटनेस, एनिमेटेड कहानियाँ, प्रोडक्टिविटी और रोज़मर्रा की ज़िंदगी — हर प्लेलिस्ट देखें।",
  yt_label:"📺 VKS Tech यूट्यूब पर",
  yt_h2:"पाँच चैनल, <span>एक क्रिएटर।</span>",
  yt_sub2:"फाइनेंस, फिटनेस, एनिमेटेड कहानियाँ, प्रोडक्टिविटी और रोज़मर्रा की ज़िंदगी — हर चैनल और प्लेलिस्ट एक जगह।",
  yt_home_cta:"सभी प्लेलिस्ट देखें →",
  hero_badge:"फ्लेक्सिबल पैकेजिंग के लिए बनाया गया · हरियाणा, भारत",
  hero_title:"ऐप्स। कैलकुलेटर।<br>लेख। <span class='accent'>सब मुफ़्त।</span>",
  hero_sub:"फ्लेक्सिबल पैकेजिंग में काम करने वाले हर पेशेवर के लिए — ऑपरेटर से लेकर प्लांट हेड तक। बनाया है <strong>विवेक कुमार</strong> ने (M.Tech, NIT उत्तराखंड), UFlex, JPFL और GLS Polyfilms में 9 साल के अनुभव से।",
  hero_btn1:"कैलकुलेटर आज़माएँ →", hero_btn2:"सभी ऐप्स देखें",
  stat1:"कैलकुलेटर", stat2:"प्रकाशित लेख", stat3:"लाइव ऐप्स", stat4:"मुफ़्त",
  cos_label:"भारत के फ्लेक्सिबल पैकेजिंग उद्योग में 9 साल",
  ind_label:"🏭 फ्लेक्सिबल पैकेजिंग उद्योग", ind_title:"<span>पैकेजिंग पेशेवरों</span> के लिए ऐप्स",
  ind_sub:"उत्पादन, गुणवत्ता नियंत्रण और तकनीकी भूमिकाओं में 9 साल के व्यावहारिक अनुभव से निर्मित।",
  per_label:"🎯 व्यक्तिगत और जीवनशैली", per_title:"मनोरंजन, उत्पादकता और <span>व्यक्तिगत उपकरण</span>",
  per_sub:"काम से परे जीवन के लिए ऐप्स — आदत ट्रैकर, मज़ेदार गतिविधियाँ, गेम्स और दक्षता बूस्टर।",
  blog_label:"📝 ज्ञान केंद्र", blog_title:"ब्लॉग और <span>लेख</span>",
  blog_sub:"फ्लेक्सिबल पैकेजिंग, एक्सेल टिप्स, करियर सलाह और तकनीक — समुदाय के लिए मुफ़्त में साझा।",
  req_label:"📩 ऐप अनुरोध पोर्टल",
  req_title:"आपके पास <span>कोई विचार है?</span> मैं बनाऊँगा।",
  req_sub:"क्या आपके पास कोई ऐसी समस्या है जिसके लिए डिजिटल समाधान चाहिए? विवेक आपके लिए बिल्कुल मुफ़्त बनाएँगे।",
  f1t:"आपके लिए हमेशा मुफ़्त", f1d:"जिस व्यक्ति ने ऐप माँगा, उसे हमेशा मुफ़्त मिलेगा — कोई शर्त नहीं।",
  f2t:"उचित लाभ साझाकरण", f2d:"यदि अन्य उपयोगकर्ता व्यावसायिक लाभ उठाते हैं, तो पारदर्शी राजस्व-हिस्सा मॉडल लागू होता है।",
  f3t:"वास्तविक इंजीनियरिंग विशेषज्ञता", f3d:"हर ऐप M.Tech स्तर के ज्ञान और 9+ वर्षों के अनुभव से बनाया जाता है।",
  f4t:"कोई भी क्षेत्र स्वागत योग्य", f4d:"पैकेजिंग, खेती, शिक्षा, स्वास्थ्य, वित्त, गेम्स — कोई भी क्षेत्र बहुत छोटा नहीं है।",
  form_title:"अपना विचार भेजें 💡", form_sub:"विवेक को बताएं कि आप क्या समाधान चाहते हैं",
  fl_name:"आपका नाम *", fl_email:"ईमेल *", fl_phone:"फोन / WhatsApp", fl_cat:"श्रेणी *", fl_title:"ऐप का शीर्षक *", fl_desc:"समस्या का विवरण *",
  submit_btn:"मेरा ऐप अनुरोध भेजें 🚀",
  about_label:"👤 मेरे बारे में",
  about_p1:"मैं <strong>प्रशिक्षण से मैकेनिकल इंजीनियर</strong>, <strong>करियर से फ्लेक्सिबल पैकेजिंग पेशेवर</strong> और <strong>जुनून से ऐप निर्माता</strong> हूँ। UFlex, JPFL Films और GLS Polyfilms में 9 साल काम करके मैंने उद्योग की दैनिक अक्षमताओं को स्वयं महसूस किया।",
  about_p2:"वह निराशा ईंधन बन गई। मैंने दोहराई जाने वाली गणनाओं को स्वचालित करने और गुणवत्ता प्रक्रियाओं को सुव्यवस्थित करने के लिए उपकरण बनाने शुरू किए।",
  about_p3:"उद्योग से परे, मुझे ऐसे ऐप्स बनाना पसंद है जो रोज़मर्रा की ज़िंदगी को अधिक व्यवस्थित और कम तनावपूर्ण बनाएं। <strong>VKSTech (vkstech.com)</strong> इन सबका घर है।",
  ppl_label:"❤️ आभार के साथ",
  ppl_title:"इस यात्रा के पीछे <span>के लोग</span>",
  ppl_sub:"हर सफलता, हर देर रात, हर संदेह के पल को पार करना — ये वो लोग हैं जिन्होंने इसे संभव बनाया।",
  pcat_par:"🙏 मेरे माता-पिता", pcat_spec:"⭐ विशेष धन्यवाद",
  nav_calc:"कैलकुलेटर", c1_t:"फिल्म रोल वज़न", c2_t:"वज़न से रोल लंबाई", c3_t:"रोल OD (बाहरी व्यास)", c4_t:"GSM ↔ माइक्रॉन रूपांतरण", c5_t:"उत्पादन यील्ड %", c6_t:"मशीन उपयोग %", c7_t:"प्रति वर्ग मीटर लागत", c8_t:"मेट मशीन क्षमता", c8_s:"3-स्टेप: साइकल → रोल/दिन → MT/दिन", search_ph:"ब्लॉग खोजें...", filt_all:"सभी", filt_pack:"फ्लेक्सिबल पैकेजिंग", filt_excel:"एक्सेल और फॉर्मूले", filt_career:"करियर और विकास", filt_tech:"तकनीक और उपकरण", filt_mfg:"मैन्युफैक्चरिंग एक्सीलेंस"
};

const EN = {
  nav_ind:"Industry Apps", nav_per:"Personal Apps", nav_blog:"Blog", nav_req:"Request App", nav_about:"About", nav_people:"People", nav_yt:"YouTube", nav_cta:"Request an App",
  yt_eyebrow:"VKS Tech on YouTube",
  yt_title:"Five channels, one creator",
  yt_sub:"Finance, fitness, animated stories, productivity and everyday life — explore every playlist.",
  yt_label:"📺 VKS Tech on YouTube",
  yt_h2:"Five channels, <span>one creator.</span>",
  yt_sub2:"Finance, fitness, animated stories, productivity and everyday life — every channel and playlist gathered in one place.",
  yt_home_cta:"See all playlists →",
  hero_badge:"BUILT FOR FLEXIBLE PACKAGING · HARYANA, INDIA",
  hero_title:"Apps. Calculators.<br>Articles. <span class='accent'>Free.</span>",
  hero_sub:"A toolkit for everyone working in flexible packaging — from operators to plant heads. Built by <strong>Vivek Kumar</strong> (M.Tech, NIT Uttarakhand) over 9 years at UFlex, JPFL, and GLS Polyfilms.",
  hero_btn1:"Try a Calculator →", hero_btn2:"See All Apps",
  stat1:"Calculators", stat2:"Articles Published", stat3:"Apps Live", stat4:"Free",
  cos_label:"9 Years in India's Flexible Packaging Industry",
  ind_label:"🏭 Flexible Packaging Industry", ind_title:"Apps for <span>Packaging Professionals</span>",
  ind_sub:"Built from 9 years of hands-on experience across production, quality control, and technical roles in the flexible packaging world.",
  per_label:"🎯 Personal & Lifestyle", per_title:"Fun, Productivity & <span>Personal Tools</span>",
  per_sub:"Apps for life beyond work — habit trackers, fun activities, games, and efficiency boosters. Built from personal needs, shared free with everyone.",
  blog_label:"📝 Knowledge Hub", blog_title:"Blog & <span>Articles</span>",
  blog_sub:"Insights from 9 years in flexible packaging, tech tutorials, Excel tips, and industry knowledge — shared freely for the community.",
  req_label:"📩 App Request Portal",
  req_title:"Got an <span>Idea?</span> I'll Build It.",
  req_sub:"Have a problem that needs a digital solution? Vivek will build it completely free for you. If others want to use it, a fair profit-share model applies.",
  f1t:"Always Free for You", f1d:"The person who requested the app always gets it free — no conditions.",
  f2t:"Fair Profit Sharing", f2d:"If other users benefit commercially, a transparent revenue-share model applies.",
  f3t:"Real Engineering Expertise", f3d:"Every app built with M.Tech-level knowledge and 9+ years of domain experience.",
  f4t:"Any Domain Welcome", f4d:"Packaging, farming, education, health, finance, games — no domain is too niche.",
  form_title:"Submit Your Idea 💡", form_sub:"Tell Vivek about the problem you want solved",
  fl_name:"Your Name *", fl_email:"Email *", fl_phone:"Phone / WhatsApp", fl_cat:"Category *", fl_title:"App Title *", fl_desc:"Describe the Problem *",
  submit_btn:"Send My App Request 🚀",
  about_label:"👤 About Me",
  about_p1:"I'm a <strong>Mechanical Engineer by training</strong>, a <strong>Flexible Packaging professional by career</strong>, and an <strong>app builder by passion</strong>. After 9 years working at UFlex Limited, JPFL Films, and GLS Polyfilms, I've experienced first-hand the daily inefficiencies that slow down professionals in this industry.",
  about_p2:"That frustration became fuel. I began building tools to automate repetitive calculations, streamline quality processes, and reduce manual errors. What started as personal tools slowly grew into something worth sharing.",
  about_p3:"Beyond the industry, I love building apps that make everyday life more organised, more fun, and less stressful. <strong>VKSTech (vkstech.com)</strong> is the home for all of it.",
  ppl_label:"❤️ With Gratitude",
  ppl_title:"The People Behind <span>This Journey</span>",
  ppl_sub:"Every breakthrough, every late night, every moment of doubt overcome — these are the people who made it possible.",
  pcat_par:"🙏 My Parents", pcat_spec:"⭐ Special Thanks",
  nav_calc:"Calculators", c1_t:"Film Roll Weight", c2_t:"Roll Length from Weight", c3_t:"Roll OD (Outer Diameter)", c4_t:"GSM ↔ Micron Conversion", c5_t:"Production Yield %", c6_t:"Machine Utilisation %", c7_t:"Cost per Square Meter", c8_t:"Met M/C Capacity", c8_s:"3-Step: Cycle → Rolls/day → MT/day", search_ph:"Search blogs...", filt_all:"All", filt_pack:"Flexible Packaging", filt_excel:"Excel & Formulas", filt_career:"Career & Growth", filt_tech:"Tech & Tools", filt_mfg:"Manufacturing Excellence"
};

let curLang = (function(){
  try {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'hi' || q === 'en') return q;
  } catch(e) {}
  return localStorage.getItem('vkstech_lang') || 'en';
})();

function setLang(lang) {
  curLang = lang;
  localStorage.setItem('vkstech_lang', lang);
  /* Flip <html lang> so screen readers pronounce Devanagari correctly */
  document.documentElement.lang = lang;
  const t = lang === 'hi' ? HI : EN;
  document.querySelectorAll('[data-i-placeholder]').forEach(function(el){var k=el.getAttribute('data-i-placeholder');if(t[k])el.placeholder=t[k];});
  document.querySelectorAll('[data-i]').forEach(el => {
    const key = el.getAttribute('data-i');
    if(t[key]) el.innerHTML = t[key];
  });
  // Update pill states
  document.querySelectorAll('.lpill').forEach(p => p.classList.toggle('active', p.textContent.trim() === (lang==='hi'?'हिं':'EN')));
  document.querySelectorAll('.mob-lang-btn').forEach(p => p.classList.toggle('active', (lang==='hi' && p.textContent.trim()==='हिंदी') || (lang==='en' && p.textContent.trim()==='EN')));
  // Re-render blog cards in new language — preserve homepage 3-card preview
  try {
    if(typeof allBlogs !== 'undefined' && allBlogs && allBlogs.length > 0) {
      var grid = document.getElementById('blogGrid');
      if(grid){
        var preview = allBlogs.slice(0, 3);
        grid.innerHTML = preview.map(renderBlogCard).join('');
      }
    }
  } catch(e) { /* non-fatal; blog will re-render on next search/filter */ }
}

// Apply saved language on load
if(curLang === 'hi') setLang('hi');

/* Dynamic copyright year — no more stale "© 2025" */
(function(){ var el=document.getElementById('copyYear'); if(el) el.textContent = new Date().getFullYear(); })();

/* REVEAL */
const ro=new IntersectionObserver((entries)=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*65);ro.unobserve(e.target);}});},{threshold:0.08,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.reveal').forEach(r=>ro.observe(r));


/* ═══════════════════════════════════════
   CALCULATOR UX IMPROVEMENTS
   - Persist values in localStorage
   - Prefill from URL query params (?cw-len=10000)
   - aria-live announcements
   - Reset buttons
   ═══════════════════════════════════════ */
var CALC_STORAGE_KEY = 'vkstech_calc_v1';

function _saveCalcState(prefix) {
  try {
    var state = JSON.parse(localStorage.getItem(CALC_STORAGE_KEY) || '{}');
    var fields = document.querySelectorAll('[id^="' + prefix + '-"]');
    fields.forEach(function(el) {
      if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
        state[el.id] = el.value;
      }
    });
    localStorage.setItem(CALC_STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

function _loadCalcState() {
  try {
    var state = JSON.parse(localStorage.getItem(CALC_STORAGE_KEY) || '{}');
    Object.keys(state).forEach(function(id) {
      var el = document.getElementById(id);
      if (el && (el.tagName === 'INPUT' || el.tagName === 'SELECT') && state[id] !== undefined && state[id] !== '') {
        el.value = state[id];
      }
    });
  } catch (e) {}
}

function _prefillFromQuery() {
  try {
    var params = new URLSearchParams(location.search);
    params.forEach(function(val, key) {
      var el = document.getElementById(key);
      if (el && (el.tagName === 'INPUT' || el.tagName === 'SELECT')) {
        el.value = val;
      }
    });
  } catch (e) {}
}

function _announceResult(resId) {
  var el = document.getElementById(resId);
  if (!el) return;
  var box = el.closest('.calc-result');
  if (box && !box.getAttribute('aria-live')) {
    box.setAttribute('aria-live', 'polite');
    box.setAttribute('aria-atomic', 'true');
  }
}

function resetCalc(cardId) {
  var card = document.getElementById(cardId);
  if (!card) return;
  card.querySelectorAll('input[type="number"]').forEach(function(inp) {
    /* Keep default values that were set in HTML (e.g. shift=720) */
    if (inp.hasAttribute('value') && inp.getAttribute('value') !== '') {
      inp.value = inp.getAttribute('value');
    } else {
      inp.value = '';
    }
    inp.classList.remove('missing');
  });
  card.querySelectorAll('select').forEach(function(sel) {
    sel.selectedIndex = 0;
  });
  var res = card.querySelector('.calc-result .val');
  var sub = card.querySelector('.calc-result .sub');
  if (res) res.textContent = '—';
  if (sub) sub.textContent = '';
  var box = card.querySelector('.calc-result');
  if (box) box.classList.remove('waiting');
  /* Clear saved state for this card's fields */
  try {
    var state = JSON.parse(localStorage.getItem(CALC_STORAGE_KEY) || '{}');
    card.querySelectorAll('[id]').forEach(function(el) {
      delete state[el.id];
    });
    localStorage.setItem(CALC_STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

/* Wrap original calc functions to save state + announce */
function _wrapCalc(fn, prefix, resId) {
  return function() {
    fn();
    _saveCalcState(prefix);
    _announceResult(resId);
  };
}

/* Applied after original functions are defined — see init block below */

/* ═══════════════════════════════════════
   CALCULATORS — Film Roll Industry
   ═══════════════════════════════════════ */
function toggleCalc(head, evt){
  /* Ignore if click came from the share button */
  if(evt && evt.target && evt.target.closest('.calc-share')) return;
  var card = head.parentElement;
  var wasOpen = card.classList.contains('open');
  // Close all others
  document.querySelectorAll('.calc-card.open').forEach(function(c){c.classList.remove('open');});
  // Toggle clicked
  if(!wasOpen) card.classList.add('open');
  /* Update URL bar so the deep-link shareable URL reflects the current state.
     Uses replaceState to avoid cluttering browser history with every tap. */
  if(card.id && history && history.replaceState){
    var newHash = !wasOpen ? '#' + card.id : '#calculators';
    if(location.hash !== newHash){
      history.replaceState(null, '', location.pathname + location.search + newHash);
    }
  }
}
/* Copy a shareable deep-link to the calculator to clipboard. */
function copyCalcLink(btn, evt){
  if(evt){ evt.stopPropagation(); evt.preventDefault(); }
  var card = btn.closest('.calc-card');
  if(!card || !card.id) return;
  var url = location.protocol + '//' + location.host + location.pathname + '#' + card.id;
  function done(){
    btn.classList.add('copied');
    btn.innerHTML = '✓';
    var t = document.getElementById('calcShareToast');
    if(!t){
      t = document.createElement('div');
      t.id = 'calcShareToast';
      t.className = 'calc-share-toast';
      document.body.appendChild(t);
    }
    var lang = (typeof curLang !== 'undefined' && curLang === 'hi') ? 'hi' : 'en';
    t.textContent = lang === 'hi' ? '✓ Calculator link copy हो गया' : '✓ Calculator link copied';
    t.classList.add('show');
    setTimeout(function(){ t.classList.remove('show'); }, 1800);
    setTimeout(function(){ btn.classList.remove('copied'); btn.innerHTML = '🔗'; }, 1800);
  }
  function fallback(){
    var ta = document.createElement('textarea');
    ta.value = url; ta.style.position = 'fixed'; ta.style.left = '-9999px';
    document.body.appendChild(ta); ta.focus(); ta.select();
    try{ document.execCommand('copy'); done(); }catch(e){}
    document.body.removeChild(ta);
  }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(done, fallback);
  } else { fallback(); }
}
/* Helper: validate required fields, highlight missing ones, return true if all filled */
function _calcCheck(ids, resId, subId, waitingMsg){
  var allOk = true;
  ids.forEach(function(id){
    var el = document.getElementById(id);
    var v = parseFloat(el.value);
    if(!v || isNaN(v)){
      el.classList.add('missing');
      allOk = false;
    } else {
      el.classList.remove('missing');
    }
  });
  var resEl = document.getElementById(resId);
  var subEl = subId ? document.getElementById(subId) : null;
  var resultBox = resEl ? resEl.closest('.calc-result') : null;
  if(!allOk){
    if(resEl) resEl.textContent = waitingMsg || 'Fill all fields';
    if(subEl) subEl.textContent = '';
    if(resultBox) resultBox.classList.add('waiting');
    return false;
  }
  if(resultBox) resultBox.classList.remove('waiting');
  return true;
}
function calcWeight(){
  if(!_calcCheck(['cw-len','cw-wid','cw-mic'],'cw-res','cw-sub')) return;
  var d=parseFloat(document.getElementById('cw-type').value),l=parseFloat(document.getElementById('cw-len').value),w=parseFloat(document.getElementById('cw-wid').value),m=parseFloat(document.getElementById('cw-mic').value);
  var wt=l*(w/1000)*(m/1000000)*d;
  document.getElementById('cw-res').textContent=wt.toFixed(2);
  document.getElementById('cw-sub').textContent=l+'m × '+w+'mm × '+m+'μm';
}
function calcLength(){
  if(!_calcCheck(['cl-wt','cl-wid','cl-mic'],'cl-res','cl-sub')) return;
  var d=parseFloat(document.getElementById('cl-type').value),wt=parseFloat(document.getElementById('cl-wt').value),w=parseFloat(document.getElementById('cl-wid').value),m=parseFloat(document.getElementById('cl-mic').value);
  var len=wt/((w/1000)*(m/1000000)*d);
  document.getElementById('cl-res').textContent=Math.round(len).toLocaleString();
  document.getElementById('cl-sub').textContent=wt+'kg → '+Math.round(len).toLocaleString()+' meters';
}
function calcOD(){
  if(!_calcCheck(['co-len','co-mic','co-cid','co-wall'],'co-res','co-sub')) return;
  var l=parseFloat(document.getElementById('co-len').value),
      m=parseFloat(document.getElementById('co-mic').value),
      cid=parseFloat(document.getElementById('co-cid').value),
      wall=parseFloat(document.getElementById('co-wall').value);
  /* Compute Core OD internally from inner diameter + 2× wall thickness */
  var coreOD = cid + 2*wall;
  /* OD² = CoreOD² + 4·L·μm/π   (L in m, μm gives film cross-section in mm²) */
  var od=Math.sqrt((4*l*m)/Math.PI+(coreOD*coreOD));
  document.getElementById('co-res').textContent=od.toFixed(1);
  /* Subtitle hides the computed Core OD per requirement — just shows the inputs going in */
  document.getElementById('co-sub').textContent='ID '+cid+'mm + Wall '+wall+'mm × 2 → Roll OD '+od.toFixed(1)+'mm';
}
function calcGSM(){
  if(!_calcCheck(['cg-mic'],'cg-res','cg-sub')) return;
  var d=parseFloat(document.getElementById('cg-type').value),m=parseFloat(document.getElementById('cg-mic').value);
  var gsm=m*d;
  document.getElementById('cg-res').textContent=gsm.toFixed(2);
  document.getElementById('cg-sub').textContent=m+'μm × '+d+' = '+gsm.toFixed(2)+' GSM';
  document.getElementById('cg-unit').textContent='GSM';
}
function calcGSMr(){
  if(!_calcCheck(['cg-gsm'],'cg-res','cg-sub')) return;
  var d=parseFloat(document.getElementById('cg-type').value),g=parseFloat(document.getElementById('cg-gsm').value);
  var mic=g/d;
  document.getElementById('cg-res').textContent=mic.toFixed(2);
  document.getElementById('cg-sub').textContent=g+' GSM ÷ '+d+' = '+mic.toFixed(2)+'μm';
  document.getElementById('cg-unit').textContent='Micron';
}
function calcYield(){
  if(!_calcCheck(['cy-in','cy-out'],'cy-res','cy-sub')) return;
  var inp=parseFloat(document.getElementById('cy-in').value),out=parseFloat(document.getElementById('cy-out').value);
  var y=(out/inp)*100,waste=inp-out;
  document.getElementById('cy-res').textContent=y.toFixed(2);
  document.getElementById('cy-sub').textContent='Waste: '+waste.toFixed(2)+' kg ('+(100-y).toFixed(2)+'%)';
}
function calcUtil(){
  if(!_calcCheck(['cm-shift'],'cm-res','cm-sub')) return;
  var s=parseFloat(document.getElementById('cm-shift').value),su=parseFloat(document.getElementById('cm-setup').value)||0,dt=parseFloat(document.getElementById('cm-dt').value)||0;
  var run=s-su-dt,u=(run/s)*100;
  document.getElementById('cm-res').textContent=u.toFixed(1);
  document.getElementById('cm-sub').textContent='Running: '+run+' min / '+s+' min shift';
}
function calcSqm(){
  if(!_calcCheck(['cs-rate','cs-mic'],'cs-res','cs-sub')) return;
  var rate=parseFloat(document.getElementById('cs-rate').value),m=parseFloat(document.getElementById('cs-mic').value),d=parseFloat(document.getElementById('cs-type').value);
  var gsm=m*d,sqm=rate*gsm/1000;
  document.getElementById('cs-res').textContent='₹'+sqm.toFixed(2);
  document.getElementById('cs-sub').textContent='₹'+rate+'/kg × '+gsm.toFixed(2)+' GSM ÷ 1000';
}

/* Met M/C Capacity — 3-step engine (matches Blog 30 methodology).
   Step 1: Rolls/day from 7 cycle inputs + source cleaning overhead
   Step 2: Roll weight from film geometry × density
   Step 3: Capacity = Rolls/day × Roll weight ÷ 1000 */
function calcMetCapacity(){
  if(!_calcCheck(['mc-width','mc-micron','mc-setup','mc-vacheat','mc-vent','mc-speed','mc-jumbo','mc-boatchange','mc-boatset','mc-cleaning'],'mc-res','mc-sub')) return;
  var density=parseFloat(document.getElementById('mc-film').value);
  var width=parseFloat(document.getElementById('mc-width').value);
  var micron=parseFloat(document.getElementById('mc-micron').value);
  var setup=parseFloat(document.getElementById('mc-setup').value);
  var vacheat=parseFloat(document.getElementById('mc-vacheat').value);
  var vent=parseFloat(document.getElementById('mc-vent').value);
  var speed=parseFloat(document.getElementById('mc-speed').value);
  var jumbo=parseFloat(document.getElementById('mc-jumbo').value);
  var boatchange=parseFloat(document.getElementById('mc-boatchange').value);
  var boatset=parseFloat(document.getElementById('mc-boatset').value);
  var cleaning=parseFloat(document.getElementById('mc-cleaning').value);
  /* Step 1 — Rolls per day */
  var runTime = jumbo / speed;
  var boatOverhead = (jumbo / boatset) * boatchange;
  var cycleTime = setup + vacheat + runTime + vent + boatOverhead;
  var availableMin = 1440 - cleaning;
  if(cycleTime <= 0 || availableMin <= 0){
    document.getElementById('mc-res').textContent='Invalid';
    document.getElementById('mc-sub').textContent='Check inputs';
    return;
  }
  var rollsDay = availableMin / cycleTime;
  /* Step 2 — Roll weight */
  var rollKg = width * jumbo * micron * density * 0.000001;
  /* Step 3 — Capacity in MT/day */
  var capacity = rollsDay * rollKg / 1000;
  document.getElementById('mc-res').textContent = capacity.toFixed(2);
  document.getElementById('mc-sub').textContent = rollsDay.toFixed(2)+' rolls/day × '+Math.round(rollKg).toLocaleString('en-IN')+' kg/roll · cycle '+cycleTime.toFixed(1)+' min';
}

/* ═══════════════════════════════════════
   CALCULATOR COPY BUTTONS
   Auto-injects a "Copy" button into every .calc-result block.
   Build a WhatsApp-ready text from the calculator's title + inputs + result.
   ═══════════════════════════════════════ */
function _copyCalcResult(btn, cardEl){
  /* Build a human-readable summary from the card */
  var titleEl = cardEl.querySelector('.calc-info h3');
  var resEl   = cardEl.querySelector('.calc-result .val');
  var unitEl  = cardEl.querySelector('.calc-result .unit');
  var subEl   = cardEl.querySelector('.calc-result .sub');
  if(!resEl || !resEl.textContent.trim() || resEl.textContent.trim() === '—'){
    return; /* No result yet — silently ignore */
  }
  /* Collect input fields (skip the result block) */
  var inputs = [];
  cardEl.querySelectorAll('.calc-body .calc-field').forEach(function(field){
    var label = field.querySelector('label');
    var input = field.querySelector('input, select');
    if(!label || !input) return;
    var v = input.value;
    if(input.tagName.toLowerCase() === 'select'){
      v = input.options[input.selectedIndex] ? input.options[input.selectedIndex].text : v;
    }
    if(v === '' || v == null) return;
    inputs.push('• ' + label.textContent.trim() + ': ' + v);
  });
  var lines = [];
  if(titleEl) lines.push('🧮 ' + titleEl.textContent.trim());
  if(inputs.length) lines.push.apply(lines, inputs);
  lines.push('');
  lines.push('Result: ' + resEl.textContent.trim() + (unitEl ? ' ' + unitEl.textContent.trim() : ''));
  if(subEl && subEl.textContent.trim()) lines.push('(' + subEl.textContent.trim() + ')');
  lines.push('');
  lines.push('— Calculated on vkstech.com');
  var text = lines.join('\n');

  /* Copy to clipboard with fallback */
  var ok = false;
  try {
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text);
      ok = true;
    }
  } catch(_){}
  if(!ok){
    try {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      ok = true;
    } catch(_){}
  }
  if(ok){
    var orig = btn.textContent;
    btn.classList.add('copied');
    btn.textContent = '✓ Copied!';
    setTimeout(function(){
      btn.classList.remove('copied');
      btn.textContent = orig;
    }, 1800);
  }
}
/* On page load, inject a copy button into every calc-result block */
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.calc-card').forEach(function(card){
    var resultEl = card.querySelector('.calc-result');
    if(!resultEl || resultEl.parentElement.querySelector('.calc-copy-row')) return;
    var row = document.createElement('div');
    row.className = 'calc-copy-row';
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'calc-copy-btn';
    btn.textContent = '📋 Copy result';
    btn.title = 'Copy calculation as WhatsApp-ready text';
    btn.addEventListener('click', function(e){ e.stopPropagation(); _copyCalcResult(btn, card); });
    row.appendChild(btn);
    /* Insert directly after the .calc-result element */
    resultEl.parentNode.insertBefore(row, resultEl.nextSibling);
  });
});

/* ═══════════════════════════════════════
   BLOG — DYNAMIC LOADING FROM FIREBASE
   ═══════════════════════════════════════ */
const CAT_STYLES = {
  packaging: {cls:'to', label:'Flexible Packaging', icon:'🏭'},
  excel:     {cls:'tt', label:'Excel & Formulas', icon:'📊'},
  career:    {cls:'co', label:'Career & Growth', icon:'🚀'},
  tech:      {cls:'cn', label:'Tech & Tools', icon:'💡'},
  manufacturing: {cls:'me', label:'Manufacturing Excellence', icon:'🏗️'}
};

let allBlogs = [];


/* Two-level filter state:
   - currentFilter: top-level category (all, packaging, excel, career, tech, manufacturing)
   - currentSubcat: only meaningful when currentFilter='packaging' (all, metalliser, slitter, quality, general) */
var currentFilter = 'all';
var currentSubcat = 'all';

function searchBlogs(){
  var input = document.getElementById('blogSearchInput');
  var grid = document.getElementById('blogGrid');
  if(!grid) return;
  if(typeof allBlogs === 'undefined' || !allBlogs || allBlogs.length === 0) return;
  var q = (input && input.value ? input.value : '').toLowerCase().trim();
  var filtered = allBlogs.filter(function(b){
    /* Main category filter */
    if(currentFilter !== 'all' && b.category !== currentFilter) return false;
    /* Sub-category filter — only applies when filtering by packaging */
    if(currentFilter === 'packaging' && currentSubcat !== 'all'){
      if((b.subcategory || '') !== currentSubcat) return false;
    }
    /* Text search */
    if(!q) return true;
    var title = (getLocalText(b.title) || '').toLowerCase();
    var summary = (getLocalText(b.summary) || '').toLowerCase();
    var content = (b.content || '').toLowerCase();
    return title.indexOf(q) > -1 || summary.indexOf(q) > -1 || content.indexOf(q) > -1;
  });
  if(filtered.length === 0){
    grid.innerHTML = '<div class="blog-noresult">🔍 ' + (curLang==='hi'?'कोई परिणाम नहीं मिला':'No blogs found') + '</div>';
  } else {
    grid.innerHTML = filtered.map(renderBlogCard).join('');
  }
}

function getLocalText(text) {
  if(!text) return '';
  // Split on | with flexible spacing: "|", " |", "| ", " | "
  if(text.indexOf('|') > -1) {
    var parts = text.split(/\s*\|\s*/);
    if(curLang === 'hi' && parts.length > 1 && parts[1]) return parts[1].trim();
    return parts[0].trim();
  }
  return text;
}

/* Defensive cleaner — strips read-time-style text from a summary string.
   Used as a safety net so the meta line is the ONLY place read time appears,
   even if a blog's summary still has it baked in. */
function stripReadTimeText(s){
  if(!s) return '';
  return s
    .replace(/📖\s*~?\d+[\s-]*min(ute)?s?\s+read/gi, '')
    .replace(/~?\d+[\s-]*min(ute)?s?\s+read/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}
/* Read time for blog cards.
   Priority order:
   1. Stored read_time_minutes from DB (set at publish time, accurate)
   2. Computed from inline content if present (also accurate)
   3. Skip — better to show nothing than a wrong estimate.
   Returns string like "5 min read" or null. */
function computeReadTime(b){
  /* (1) Use stored value if available — this is the truth */
  if(b.read_time_minutes && b.read_time_minutes > 0){
    return b.read_time_minutes + ' min read';
  }
  /* (2) Compute from inline content if present (rare for new blogs) */
  var text = b.content || '';
  if(text && text.length > 200){
    var clean = text.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim();
    var words = clean.split(' ').filter(function(w){ return w.length > 0; }).length;
    if(words >= 50){
      return Math.max(1, Math.round(words / 220)) + ' min read';
    }
  }
  /* (3) No reliable signal — show nothing rather than a wrong guess */
  return null;
}

function renderBlogCard(b) {
  b._title = getLocalText(b.title);
  b._summary = stripReadTimeText(getLocalText(b.summary));
  const cat = CAT_STYLES[b.category] || {cls:'tp', label:b.category, icon:'📝'};
  const dateStr = b.date ? new Date(b.date.seconds ? b.date.seconds*1000 : b.date).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}) : '';
  const readTime = computeReadTime(b);
  const imgHtml = b.imageUrl
    ? '<div class="blog-img" style="background:url(\''+b.imageUrl+'\') center/cover no-repeat;"></div>'
    : '<div class="blog-img">'+cat.icon+'</div>';
  /* Link to the server-rendered /blog/<slug> page (api/blog.js).
     Fallback to #blog-<id> only if slug is missing (legacy data). */
  const href = b.slug ? ('/blog/' + b.slug) : ('#blog-' + b.id);
  /* Combine date + read time on the same row, separated by a dot */
  const metaLine = dateStr + (readTime ? ' <span style="opacity:.6">·</span> <span style="color:var(--orange);">📖 '+readTime+'</span>' : '');
  return '<a href="'+href+'" class="blog-card" data-cat="'+b.category+'" style="text-decoration:none;color:inherit;display:block;cursor:pointer;">'
    + imgHtml
    + '<div class="blog-body">'
    + '<span class="blog-tag '+cat.cls+'">'+cat.label+'</span>'
    + '<h3>'+escH(b._title || b.title)+'</h3>'
    + '<p>'+escH(b._summary || b.summary || '')+'</p>'
    + '<div class="blog-date">'+metaLine+'</div>'
    + '</div></a>';
}

function escH(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}

function loadBlogs() {
  const grid = document.getElementById('blogGrid');
  sb.from('blogs').select('*').eq('published', true).order('created_at', {ascending: false})
    .then(({data, error}) => {
      if(error) throw error;
      allBlogs = (data || []).map(b => ({
        id: b.id,
        slug: b.slug,
        title: b.title,
        category: b.category,
        subcategory: b.subcategory || null,
        summary: b.summary,
        content: b.content,
        github_path: b.github_path || null,
        read_time_minutes: b.read_time_minutes || null,
        imageUrl: b.cover_image,
        published: b.published,
        date: {seconds: new Date(b.created_at).getTime()/1000}
      }));
      /* Live "Articles Published" hero stat — replaces the old hardcoded number */
      var statEl = document.getElementById('statArticlesNum');
      if(statEl) statEl.textContent = allBlogs.length;
      if(allBlogs.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;"><div style="font-size:3rem;margin-bottom:16px;">📝</div><h3 style="color:var(--navy);font-family:Playfair Display,serif;margin-bottom:8px;">Blog Coming Soon</h3><p style="color:var(--muted);font-size:.9rem;">Articles about flexible packaging, Excel formulas, career tips, and tech tools coming soon!</p></div>';
      } else {
        /* Homepage shows only latest 3 — full library lives at /blog */
        var preview = allBlogs.slice(0, 3);
        grid.innerHTML = preview.map(renderBlogCard).join('');
        /* Update the "Browse all articles" hint with actual count */
        var hint = document.querySelector('.blog-cta-hint');
        if(hint) hint.textContent = allBlogs.length + ' articles · filter, search, paginate';
      }
    })
    .catch(err => {
      console.warn('Blog load:', err.message);
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;"><div style="font-size:3rem;margin-bottom:16px;">📝</div><h3 style="color:var(--navy);font-family:Playfair Display,serif;margin-bottom:8px;">Blog Coming Soon</h3><p style="color:var(--muted);font-size:.9rem;">Articles coming soon!</p></div>';
    });
}

function filterBlog(cat, btn){
  currentFilter = cat;
  /* Reset subcategory whenever main category changes */
  currentSubcat = 'all';
  document.querySelectorAll('.blog-cat').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');
  /* Show sub-category row only for "Flexible Packaging" */
  var subRow = document.getElementById('blogSubcats');
  if(subRow){
    subRow.style.display = (cat === 'packaging') ? 'flex' : 'none';
    /* Reset sub-pills to "All Packaging" active */
    subRow.querySelectorAll('.blog-subcat').forEach(function(b, i){
      b.classList.toggle('active', i === 0);
    });
  }
  searchBlogs();
}

function filterSubcat(sub, btn){
  currentSubcat = sub;
  document.querySelectorAll('.blog-subcat').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');
  searchBlogs();
}

/* OPEN FULL BLOG POST */
function cleanBlogContent(html, baseUrl) {
  // Strip full-page elements if someone uploaded a complete HTML page
  var temp = document.createElement('div');
  temp.innerHTML = html;
  // Remove nav, header, footer, style, meta elements
  // NOTE: <script> deliberately KEPT — calculator blogs (26, 28, 29, 30) need their <script>
  // blocks to drive live inputs. The script is re-executed after innerHTML insertion below.
  temp.querySelectorAll('nav, header, footer, style, link, meta, title, .back-btn, .blog-footer, .share-bar').forEach(el => el.remove());
  // Remove .article-hero (title/subtitle from standalone blog page - we render our own)
  temp.querySelectorAll('.article-hero').forEach(el => el.remove());

  /* If a baseUrl is provided (GitHub folder), resolve all relative src/href against it */
  if (baseUrl){
    const base = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
    /* jsDelivr serves GitHub files with correct MIME types (Excel as Excel, PDF as PDF) —
       avoids browsers showing binary garbage when clicking download links.
       raw.githubusercontent.com stays for images (browser detects those fine). */
    const jsdBase = base.replace(
      /^https:\/\/raw\.githubusercontent\.com\/([^\/]+)\/([^\/]+)\/([^\/]+)\//,
      'https://cdn.jsdelivr.net/gh/$1/$2@$3/'
    );
    const fileExtForDownload = /\.(pdf|xlsx|xls|docx|doc|pptx|zip|csv|mp4|mp3|txt)$/i;

    /* Any element with src="..." that is relative — images stay on raw.githubusercontent.com */
    temp.querySelectorAll('[src]').forEach(el => {
      const v = el.getAttribute('src');
      if (v && !/^(https?:|data:|\/)/i.test(v)){
        el.setAttribute('src', base + v.replace(/^\.?\/+/, ''));
      }
    });
    /* Any element with href="..." that is relative — downloadable files go via jsDelivr */
    temp.querySelectorAll('a[href]').forEach(el => {
      const v = el.getAttribute('href');
      if (v && !/^(https?:|mailto:|tel:|#|\/)/i.test(v)){
        const clean = v.replace(/^\.?\/+/, '');
        if (fileExtForDownload.test(v)){
          /* Downloads: jsDelivr URL + download attribute forces save dialog */
          el.setAttribute('href', jsdBase + clean);
          el.setAttribute('download', clean.split('/').pop());
          el.setAttribute('target','_blank');
          el.setAttribute('rel','noopener');
        } else {
          /* Non-downloads (images, other pages): use regular raw URL */
          el.setAttribute('href', base + clean);
          if (/\.(png|jpg|jpeg|svg|gif|webp)$/i.test(v)){
            el.setAttribute('target','_blank');
            el.setAttribute('rel','noopener');
          }
        }
      }
    });
  }

  // Try to find article-body content specifically
  var body = temp.querySelector('.article-body');
  var result = body ? body.innerHTML : temp.innerHTML;
  // If content has no en-content/hi-content but has hindi-section, wrap the non-hindi parts as en-content
  if(result.indexOf('hindi-section') > -1 && result.indexOf('en-content') === -1) {
    result = result.replace(/<div class="hindi-section/g, '</div><div class="hindi-section hi-content');
    // Wrap everything before first hindi-section as en-content
    var parts = result.split('</div><div class="hindi-section');
    if(parts.length > 1) {
      result = '<div class="en-content">' + parts[0] + '</div><div class="hindi-section' + parts.slice(1).join('</div><div class="hindi-section');
    }
  }
  /* Legacy fix: inline-content blogs had images uploaded under "/foldername/" */
  if (!baseUrl){
    result = result.replace(/src="(?!http)(?!\/)/g, 'src="/');
  }
  return result;
}

/* Fetch blog HTML from GitHub (with in-memory cache) */
async function fetchGithubBlog(github_path){
  if (ghHtmlCache.has(github_path)) return ghHtmlCache.get(github_path);
  const [folder, file] = github_path.split('::');
  const url = ghRaw(folder, file);
  const r = await fetch(url);
  if (!r.ok) throw new Error('GitHub fetch failed: HTTP '+r.status);
  const html = await r.text();
  const result = { html, baseUrl: ghFolderBase(folder) };
  ghHtmlCache.set(github_path, result);
  return result;
}

async function openBlog(id) {
  const b = allBlogs.find(x=>String(x.id)===String(id));
  if(!b) return;
  const cat = CAT_STYLES[b.category] || {cls:'tp', label:b.category, icon:'📝'};
  const dateStr = b.date ? new Date(b.date.seconds ? b.date.seconds*1000 : b.date).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'}) : '';

  // Hide navbar
  document.getElementById('navbar').style.display='none';

  // If the blog is GitHub-backed, show a loader, fetch the HTML, then clean it
  let cleanContent;
  if (b.github_path){
    /* Insert a small overlay with a spinner while we fetch */
    const loader = document.createElement('div');
    loader.id = 'blogLoader';
    loader.style.cssText = 'position:fixed;inset:0;z-index:10001;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;';
    loader.innerHTML = '<div style="width:48px;height:48px;border:4px solid var(--border);border-top-color:var(--orange);border-radius:50%;animation:spin 1s linear infinite"></div><p style="color:var(--muted);font-family:JetBrains Mono,monospace;font-size:.85rem">Fetching from GitHub...</p><style>@keyframes spin{to{transform:rotate(360deg)}}</style>';
    document.body.appendChild(loader);
    try{
      const { html, baseUrl } = await fetchGithubBlog(b.github_path);
      cleanContent = cleanBlogContent(html, baseUrl);
    }catch(e){
      loader.remove();
      document.getElementById('navbar').style.display='';
      alert('Failed to load blog from GitHub: '+e.message);
      return;
    }
    loader.remove();
  } else {
    /* Legacy: inline content from database */
    cleanContent = cleanBlogContent(b.content);
  }

  const overlay = document.createElement('div');
  overlay.id = 'blogOverlay';
  overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:10001;background:var(--bg);overflow-y:auto;';
  
  overlay.innerHTML = ''
    // Top bar with back button and language toggle
    + '<div style="position:sticky;top:0;z-index:10;background:rgba(250,249,246,.96);backdrop-filter:blur(18px);border-bottom:1px solid var(--border);padding:12px 5%;display:flex;justify-content:space-between;align-items:center;">'
    + '<button onclick="closeBlogOverlay()" style="background:var(--navy);color:#fff;border:none;padding:9px 20px;border-radius:50px;font-weight:700;font-size:.82rem;cursor:pointer;font-family:inherit;">← Back</button>'
    + '<div style="display:flex;gap:4px;background:rgba(26,39,68,.06);border:1px solid var(--border);border-radius:50px;padding:3px;">'
    + '<button onclick="toggleBlogLang(\'en\')" class="blpill" data-bl="en" style="border:none;padding:5px 12px;border-radius:50px;cursor:pointer;font-family:JetBrains Mono,monospace;font-size:.7rem;font-weight:700;background:'+(curLang==='en'?'var(--navy)':'transparent')+';color:'+(curLang==='en'?'#fff':'var(--muted)')+';">EN</button>'
    + '<button onclick="toggleBlogLang(\'hi\')" class="blpill" data-bl="hi" style="border:none;padding:5px 12px;border-radius:50px;cursor:pointer;font-family:JetBrains Mono,monospace;font-size:.7rem;font-weight:700;background:'+(curLang==='hi'?'var(--navy)':'transparent')+';color:'+(curLang==='hi'?'#fff':'var(--muted)')+';">हिं</button>'
    + '</div></div>'
    // Cover image
    // Article header
    + '<div style="max-width:780px;margin:0 auto;padding:24px 5% 0;text-align:center;">'
    + '<span class="blog-tag '+cat.cls+'" style="display:inline-block;margin-bottom:14px;">'+cat.label+'</span>'
    + '<h1 style="font-family:Playfair Display,serif;font-weight:900;font-size:clamp(1.5rem,4vw,2.2rem);color:var(--navy);line-height:1.25;margin-bottom:10px;">'+escH(b._title || b.title)+'</h1>'
    + '<div style="font-size:.78rem;color:var(--light);margin-bottom:28px;font-family:JetBrains Mono,monospace;">'+dateStr+' · By Vivek Kumar</div>'
    + '</div>'
    // Article content (cleaned) with table styles
    + '<style>#blogBodyContent table{width:100%;border-collapse:collapse;margin:20px 0;border-radius:12px;overflow:hidden;border:1px solid var(--border);}#blogBodyContent th{background:var(--navy);color:#fff;padding:11px 15px;font-size:.82rem;font-weight:700;text-align:left;}#blogBodyContent td{padding:11px 15px;font-size:.86rem;border-bottom:1px solid var(--border);}#blogBodyContent tr:nth-child(even){background:rgba(26,39,68,.02);}#blogBodyContent .en-content,#blogBodyContent .hi-content{display:block;}#blogBodyContent h2{font-family:Playfair Display,serif;font-weight:800;font-size:1.4rem;color:var(--navy);margin:32px 0 14px;padding-top:18px;border-top:1px solid var(--border);}#blogBodyContent h3{font-weight:700;font-size:1.05rem;color:var(--orange);margin:24px 0 10px;}#blogBodyContent ul{margin:10px 0 18px 22px;}#blogBodyContent li{margin-bottom:8px;line-height:1.8;}#blogBodyContent blockquote{border-left:3px solid var(--orange);padding-left:14px;margin:14px 0;color:var(--muted);font-style:italic;}#blogBodyContent .callout{background:rgba(232,93,38,.05);border-left:4px solid var(--orange);border-radius:0 12px 12px 0;padding:16px 20px;margin:20px 0;}#blogBodyContent .hindi-section{background:rgba(13,140,126,.04);border:1px solid rgba(13,140,126,.15);border-radius:16px;padding:24px;margin:28px 0;}#blogBodyContent img{max-width:100%;height:auto;border-radius:12px;margin:16px 0;display:block;}.table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:20px 0;border-radius:12px;border:1px solid var(--border);}@media(max-width:600px){#blogBodyContent{font-size:.92rem!important;line-height:1.85!important;padding:0 4% 60px!important;}#blogBodyContent h2{font-size:1.2rem!important;margin:24px 0 10px!important;}#blogBodyContent h3{font-size:.95rem!important;}#blogBodyContent table{font-size:.75rem;display:block;overflow-x:auto;white-space:nowrap;}#blogBodyContent th{padding:8px 10px;font-size:.72rem;}#blogBodyContent td{padding:8px 10px;font-size:.75rem;}#blogBodyContent .callout{padding:12px 14px;font-size:.85rem;}#blogBodyContent .hindi-section{padding:16px;margin:20px 0;}#blogBodyContent ul{margin-left:16px;}#blogBodyContent li{font-size:.88rem;line-height:1.7;}}</style>'
    + '<div id="blogBodyContent" style="max-width:780px;margin:0 auto;padding:0 5% 80px;font-size:1rem;color:var(--text);line-height:2;">'+cleanContent+'</div>'
    + renderBlogQA(b.id)
    + '<button id="blogShareBtn" onclick="shareBlog(\''+b.id+'\')" title="Share this article" style="position:fixed;bottom:24px;right:24px;z-index:10002;width:56px;height:56px;border-radius:50%;border:none;background:var(--orange);color:#fff;font-size:1.5rem;cursor:pointer;box-shadow:0 6px 20px rgba(232,93,38,.4);display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s;font-family:inherit;" onmouseover="this.style.transform=\'scale(1.08)\';this.style.boxShadow=\'0 8px 26px rgba(232,93,38,.55)\'" onmouseout="this.style.transform=\'scale(1)\';this.style.boxShadow=\'0 6px 20px rgba(232,93,38,.4)\'"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></button>';
  
  document.body.appendChild(overlay);
  overlay.scrollTop = 0;

  /* Re-execute any <script> tags inside the blog HTML.
     Setting innerHTML does NOT run scripts — we must clone each one into a
     fresh <script> element so calculators (Blogs 26, 28, 29, 30) wake up
     and bind their input listeners. */
  document.querySelectorAll('#blogBodyContent script').forEach(function(oldScript) {
    var newScript = document.createElement('script');
    Array.from(oldScript.attributes).forEach(function(attr) {
      newScript.setAttribute(attr.name, attr.value);
    });
    newScript.text = oldScript.textContent || '';
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });

  // Apply language filter to blog content
  applyBlogLang(curLang);
  
  // Load the Q&A thread for this blog
  loadBlogQuestions(b.id);

  /* Update URL so it can be shared/bookmarked/refreshed.
     We push TWO history entries: first one for the blog list (#blog if we
     weren't already there), then the blog post itself. That way pressing
     Back from a blog post lands on the blog list, not the homepage. */
  try {
    var blogUrl = b.slug ? ('/blog/' + b.slug) : ('#blog-' + b.id);
    /* If the user came from anywhere other than the blog section,
       push an intermediate #blog entry so Back goes to the list. */
    if (location.hash !== '#blog' && location.pathname.indexOf('/blog/') !== 0){
      history.pushState({blogList:true}, '', '#blog');
    }
    history.pushState({blogPost:true, blogId:b.id}, '', blogUrl);
  } catch(e) {}
}

function closeBlogOverlay() {
  const ov = document.getElementById('blogOverlay');
  if(ov) ov.remove();
  document.getElementById('navbar').style.display='';
  /* If we opened via pushState, going back takes us to the blog list
     (the intermediate #blog entry we pushed in openBlog). */
  if(history.state && (history.state.blogPost || history.state.blog)){
    history.back();
  } else if(location.hash.indexOf('#blog-')===0){
    /* Legacy hash URL — normalise back to the blog section */
    history.replaceState(null,'','/#blog');
  }
}

// Phone back button / browser back button support
window.addEventListener('popstate', function(){
  var ov = document.getElementById('blogOverlay');
  if(ov){
    ov.remove();
    document.getElementById('navbar').style.display='';
  }
});

function shareBlog(id){
  const b = allBlogs.find(x=>String(x.id)===String(id));
  if(!b) return;
  const title = (b._title || b.title || 'VKS Tech Blog');
  const url = b.slug ? (location.origin + '/blog/' + b.slug) : (location.origin + '/#blog-' + b.id);
  const shareData = {
    title: title,
    text: (b._summary || b.summary || 'Read this article on VKS Tech') + ' — ',
    url: url
  };
  if(navigator.share){
    navigator.share(shareData).catch(function(err){
      if(err && err.name !== 'AbortError') _copyShareLink(url);
    });
  } else {
    _copyShareLink(url);
  }
}
function _copyShareLink(url){
  var ok = false;
  try {
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(url); ok = true;
    }
  } catch(e) {}
  if(!ok){
    try {
      var ta = document.createElement('textarea');
      ta.value = url; ta.style.position='fixed'; ta.style.opacity='0';
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta); ok = true;
    } catch(e){}
  }
  _showShareToast(ok ? 'Link copied to clipboard!' : 'Copy this link: ' + url);
}
function _showShareToast(msg){
  var old = document.getElementById('shareToast');
  if(old) old.remove();
  var t = document.createElement('div');
  t.id = 'shareToast';
  t.textContent = msg;
  t.style.cssText = 'position:fixed;bottom:96px;right:24px;z-index:10003;background:var(--navy);color:#fff;padding:12px 18px;border-radius:50px;font-size:.85rem;font-weight:600;box-shadow:0 6px 20px rgba(0,0,0,.2);max-width:calc(100vw - 48px);animation:fadeInUp .25s ease-out;';
  document.body.appendChild(t);
  setTimeout(function(){ t.style.transition='opacity .3s'; t.style.opacity='0'; setTimeout(function(){ t.remove(); }, 320); }, 2400);
}
/* Auto-open blog overlay ONLY for legacy #blog-<id> hash URLs.
   /blog/<slug> URLs are now served by api/blog.js (server-rendered),
   so this client-side code never sees them — they hit the server instead. */
function _tryOpenBlogFromHash(_retries){
  _retries = (typeof _retries === 'number') ? _retries : 0;
  var MAX_RETRIES = 20;

  var h = location.hash || '';
  var m = h.match(/^#blog-(.+)$/);
  if(!m) return;
  var id = m[1];
  if(!allBlogs || !allBlogs.length){
    if(_retries < MAX_RETRIES) setTimeout(function(){ _tryOpenBlogFromHash(_retries+1); }, 250);
    return;
  }
  if(allBlogs.find(function(x){ return String(x.id)===String(id); })){
    openBlog(id);
  }
}
window.addEventListener('load', function(){ setTimeout(_tryOpenBlogFromHash, 400); });
window.addEventListener('hashchange', _tryOpenBlogFromHash);

/* ═══════════════════════════════════════════════════════════
   CALCULATOR DEEPLINKS — open a specific calculator from URL hash.
   URLs like vkstech.com/#calc-met-capacity auto-expand that card
   and smooth-scroll to it. Works on initial load and on hashchange.
   ═══════════════════════════════════════════════════════════ */
function _tryOpenCalcFromHash(){
  var h = (location.hash || '').replace(/^#/, '');
  if(!h || h.indexOf('calc-') !== 0) return;
  var card = document.getElementById(h);
  if(!card || !card.classList.contains('calc-card')) return;
  /* Close any other open card (matches toggleCalc behavior) */
  document.querySelectorAll('.calc-card.open').forEach(function(c){
    if(c !== card) c.classList.remove('open');
  });
  /* Open target */
  card.classList.add('open');
  /* Smooth-scroll into view with a small offset for the sticky navbar */
  setTimeout(function(){
    var y = card.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({top: y, behavior: 'smooth'});
  }, 120);
}
window.addEventListener('load', function(){ setTimeout(_tryOpenCalcFromHash, 450); });
window.addEventListener('hashchange', _tryOpenCalcFromHash);

/* ═══════════════════════════════════════════════════════════
   BLOG Q&A — reader side (question form + answered list)
   ═══════════════════════════════════════════════════════════ */
function renderBlogQA(blogId){
  /* Initial shell — list populates async via loadBlogQuestions() */
  return ''
    + '<div id="blogQASection" style="max-width:780px;margin:0 auto;padding:20px 5% 120px;border-top:1px solid var(--border);">'
    +   '<h2 style="font-family:Playfair Display,serif;font-weight:800;font-size:1.4rem;color:var(--navy);margin-bottom:4px;">💬 Questions & Answers</h2>'
    +   '<p style="color:var(--muted);font-size:.85rem;margin-bottom:24px;">Ask a question about this article. Answered questions appear publicly below.</p>'

    /* ── Ask form ── */
    +   '<div id="askForm" style="background:linear-gradient(135deg,rgba(232,93,38,.04),rgba(13,140,126,.03));border:1px solid var(--border);border-radius:16px;padding:20px 22px;margin-bottom:28px;">'
    +     '<h3 style="font-family:Playfair Display,serif;font-weight:700;font-size:1rem;color:var(--navy);margin-bottom:14px;">Ask a Question</h3>'
    +     '<div style="margin-bottom:12px;"><label style="display:block;font-size:.72rem;font-weight:700;color:var(--navy);margin-bottom:5px;font-family:JetBrains Mono,monospace;text-transform:uppercase;">Your Name *</label>'
    +       '<input id="qaName" type="text" placeholder="Your full name" style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;font-size:.9rem;font-family:inherit;background:#fff;outline:none;" onfocus="this.style.borderColor=\'var(--orange)\'" onblur="this.style.borderColor=\'var(--border)\'"/></div>'
    +     '<div style="margin-bottom:12px;"><label style="display:block;font-size:.72rem;font-weight:700;color:var(--navy);margin-bottom:5px;font-family:JetBrains Mono,monospace;text-transform:uppercase;">Email <span style="opacity:.6">(optional — to notify you when answered)</span></label>'
    +       '<input id="qaEmail" type="email" placeholder="you@email.com" style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;font-size:.9rem;font-family:inherit;background:#fff;outline:none;" onfocus="this.style.borderColor=\'var(--orange)\'" onblur="this.style.borderColor=\'var(--border)\'"/></div>'
    +     '<div style="margin-bottom:14px;"><label style="display:block;font-size:.72rem;font-weight:700;color:var(--navy);margin-bottom:5px;font-family:JetBrains Mono,monospace;text-transform:uppercase;">Your Question *</label>'
    +       '<textarea id="qaQuestion" rows="3" placeholder="What would you like to know?" style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;font-size:.9rem;font-family:inherit;background:#fff;outline:none;resize:vertical;" onfocus="this.style.borderColor=\'var(--orange)\'" onblur="this.style.borderColor=\'var(--border)\'"></textarea></div>'
    /* Honeypot — hidden from humans, bots fill it, we reject silently */
    +     '<div aria-hidden="true" style="position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;overflow:hidden;pointer-events:none;"><input type="text" id="qaHp" tabindex="-1" autocomplete="off"/></div>'
    +     '<button onclick="submitQuestion('+blogId+')" style="background:var(--orange);color:#fff;border:none;padding:11px 26px;border-radius:50px;font-weight:700;font-size:.88rem;cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(232,93,38,.28);">Submit Question →</button>'
    +     '<div id="qaFormMsg" style="margin-top:10px;font-size:.82rem;min-height:1.2em;"></div>'
    +   '</div>'

    /* ── Answered list (populated by loadBlogQuestions) ── */
    +   '<div id="qaList"><div style="text-align:center;padding:20px;color:var(--muted);font-size:.85rem;">Loading questions...</div></div>'
    + '</div>';
}

async function loadBlogQuestions(blogId){
  const listEl = document.getElementById('qaList');
  if(!listEl) return;
  const { data, error } = await sb.from('blog_questions')
    .select('id,question,asker_name,answer,answered_at,created_at')
    .eq('blog_id', blogId)
    .not('answered_at','is',null)
    .order('answered_at', { ascending:false });
  if(error){
    listEl.innerHTML = '<div style="text-align:center;padding:20px;color:var(--muted);font-size:.85rem;">Could not load questions.</div>';
    return;
  }
  if(!data || !data.length){
    listEl.innerHTML = '<div style="text-align:center;padding:30px 20px;color:var(--muted);font-size:.85rem;"><div style="font-size:2rem;margin-bottom:8px;opacity:.5;">💭</div>No questions answered yet. Be the first to ask!</div>';
    return;
  }
  listEl.innerHTML = '<h3 style="font-family:Playfair Display,serif;font-weight:700;font-size:1.05rem;color:var(--navy);margin-bottom:14px;">'+data.length+' '+(data.length===1?'Question':'Questions')+' Answered</h3>' +
    data.map(renderQABubble).join('');
}

function renderQABubble(q){
  const when = new Date(q.answered_at).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
  return ''
    + '<div style="background:#fff;border:1px solid var(--border);border-radius:14px;padding:18px 20px;margin-bottom:14px;box-shadow:0 2px 8px rgba(26,39,68,.04);">'
    +   '<div style="display:flex;gap:10px;margin-bottom:12px;">'
    +     '<div style="flex-shrink:0;width:32px;height:32px;border-radius:50%;background:rgba(232,93,38,.12);color:var(--orange);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;">Q</div>'
    +     '<div style="flex:1;"><div style="font-weight:700;font-size:.82rem;color:var(--navy);">'+escH(q.asker_name)+'</div>'
    +       '<div style="font-size:.93rem;color:var(--text);line-height:1.7;margin-top:3px;">'+escH(q.question)+'</div></div>'
    +   '</div>'
    +   '<div style="display:flex;gap:10px;padding-top:12px;border-top:1px dashed var(--border);">'
    +     '<div style="flex-shrink:0;width:32px;height:32px;border-radius:50%;background:rgba(13,140,126,.12);color:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;">A</div>'
    +     '<div style="flex:1;"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px;"><div style="font-weight:700;font-size:.82rem;color:var(--teal);">Vivek Kumar</div><div style="font-size:.7rem;color:var(--light);font-family:JetBrains Mono,monospace;">'+when+'</div></div>'
    +       '<div style="font-size:.92rem;color:var(--text);line-height:1.75;white-space:pre-wrap;">'+escH(q.answer)+'</div></div>'
    +   '</div>'
    + '</div>';
}

async function submitQuestion(blogId){
  const msgEl = document.getElementById('qaFormMsg');
  const name  = document.getElementById('qaName').value.trim();
  const email = document.getElementById('qaEmail').value.trim();
  const qtext = document.getElementById('qaQuestion').value.trim();
  const hp    = document.getElementById('qaHp').value.trim();

  /* Honeypot — silently pretend success for bots */
  if(hp){
    msgEl.style.color = 'var(--teal)';
    msgEl.textContent = '✅ Thanks! Your question has been received.';
    return;
  }

  if(!name || !qtext){
    msgEl.style.color = '#c33';
    msgEl.textContent = 'Name and question are required.';
    return;
  }
  if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){
    msgEl.style.color = '#c33';
    msgEl.textContent = 'Please enter a valid email or leave it blank.';
    return;
  }
  if(qtext.length < 10){
    msgEl.style.color = '#c33';
    msgEl.textContent = 'Please write a bit more detail (at least 10 characters).';
    return;
  }

  msgEl.style.color = 'var(--muted)';
  msgEl.textContent = 'Submitting...';

  const { error } = await sb.from('blog_questions').insert([{
    blog_id: blogId,
    question: qtext,
    asker_name: name,
    asker_email: email || null
  }]);

  if(error){
    msgEl.style.color = '#c33';
    msgEl.textContent = 'Could not submit: ' + error.message;
    return;
  }

  /* Clear form + success message */
  document.getElementById('qaName').value = '';
  document.getElementById('qaEmail').value = '';
  document.getElementById('qaQuestion').value = '';
  msgEl.style.color = 'var(--teal)';
  msgEl.textContent = '✅ Thanks ' + name.split(' ')[0] + '! Your question will appear below once Vivek replies.';
}

function toggleBlogLang(lang) {
  curLang = lang;
  localStorage.setItem('vkstech_lang', lang);
  // Update pill styles in overlay
  document.querySelectorAll('.blpill').forEach(p => {
    const isActive = p.getAttribute('data-bl') === lang;
    p.style.background = isActive ? 'var(--navy)' : 'transparent';
    p.style.color = isActive ? '#fff' : 'var(--muted)';
  });
  // Update main nav pills too
  document.querySelectorAll('.lpill').forEach(p => p.classList.toggle('active', p.textContent.trim() === (lang==='hi'?'हिं':'EN')));
  applyBlogLang(lang);
  // Also apply main site translations
  setLang(lang);
  // Re-render blog cards in new language
  if(typeof allBlogs !== 'undefined' && allBlogs.length > 0) {
    var grid = document.getElementById('blogGrid');
    if(grid) grid.innerHTML = allBlogs.map(renderBlogCard).join('');
  }
}

function applyBlogLang(lang) {
  const body = document.getElementById('blogBodyContent');
  if(!body) return;
  // Handle en-content / hi-content wrappers
  body.querySelectorAll('.en-content').forEach(el => el.style.display = lang==='en' ? '' : 'none');
  body.querySelectorAll('.hi-content, .hindi-section').forEach(el => el.style.display = lang==='hi' ? '' : 'none');
  // Make all visible images responsive
  body.querySelectorAll('img').forEach(img => {
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    img.style.borderRadius = '12px';
    img.style.margin = '16px 0';
  });
  // If no en-content/hi-content wrappers found, show everything (backwards compatibility)
  if(!body.querySelector('.en-content') && !body.querySelector('.hi-content') && !body.querySelector('.hindi-section')) return;
}

loadBlogs();

/* ════════════════════════════════════════════════════════════
   YOUTUBE — homepage section
   Loads the 5 channels (with icons + playlist counts) from Supabase
   and renders compact cards. Independent of blog/people sections.
   ════════════════════════════════════════════════════════════ */
var YT_BADGE_COLORS = ['#e85d26','#0d8c7e','#1a2744','#c8860a','#7c3aed'];
async function loadYouTubeHome(){
  var grid = document.getElementById('ytHomeGrid');
  if(!grid) return;
  /* Helper: replace skeleton with a friendly fallback if anything goes wrong */
  function showFallback(){
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--muted);font-size:.9rem;padding:20px 0;">Couldn\'t load channels right now — <a href="/youtube" style="color:var(--orange);font-weight:600;">view them on the YouTube page →</a></div>';
  }
  try {
    var chRes = await sb.from('youtube_channels').select('*').order('sort_order',{ascending:true});
    if(chRes.error){ showFallback(); return; }
    var channels = chRes.data || [];
    if(channels.length === 0){
      /* No data at all — hide the entire section rather than showing an empty grid */
      var section = document.getElementById('youtube-section');
      if(section) section.style.display = 'none';
      return;
    }
    /* Count playlists per channel */
    var plRes = await sb.from('youtube_playlists').select('channel_id');
    var counts = {};
    if(plRes && !plRes.error && plRes.data){
      plRes.data.forEach(function(p){
        counts[p.channel_id] = (counts[p.channel_id] || 0) + 1;
      });
    }
    grid.innerHTML = channels.map(function(c, i){
      var color = YT_BADGE_COLORS[i % YT_BADGE_COLORS.length];
      var initial = (c.name || '?').trim().charAt(0).toUpperCase();
      var iconHtml = c.icon_url
        ? '<img class="ythc-icon" src="'+escapeAttr(c.icon_url)+'" alt="'+escapeAttr(c.name)+'" onerror="this.outerHTML=&quot;<div class=\\&quot;ythc-init\\&quot; style=\\&quot;background:'+color+'\\&quot;>'+escapeAttr(initial)+'</div>&quot;"/>'
        : '<div class="ythc-init" style="background:'+color+'">'+escapeAttr(initial)+'</div>';
      var n = counts[c.id] || 0;
      var countTxt = n + ' playlist' + (n===1?'':'s');
      return '<a class="ythc" href="/youtube">'
        + iconHtml
        + '<div class="ythc-name">'+escapeAttr(c.name)+'</div>'
        + '<div class="ythc-count">'+countTxt+'</div>'
        + '</a>';
    }).join('');
  } catch(e){
    showFallback();
  }
}
/* Tiny escape helper for attribute/text values */
function escapeAttr(s){
  if(s == null) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
loadYouTubeHome();

/* Apply calculator UX on DOM ready */
document.addEventListener('DOMContentLoaded', function() {
  _prefillFromQuery();
  _loadCalcState();

  /* Re-run calculations if values were restored */
  try {
    if (typeof calcWeight === 'function') calcWeight();
    if (typeof calcLength === 'function') calcLength();
    if (typeof calcOD === 'function') calcOD();
    if (typeof calcGSM === 'function') calcGSM();
    if (typeof calcYield === 'function') calcYield();
    if (typeof calcUtil === 'function') calcUtil();
    if (typeof calcSqm === 'function') calcSqm();
    if (typeof calcMetCapacity === 'function') calcMetCapacity();
  } catch (e) {}

  /* Inject Reset buttons next to existing copy buttons */
  document.querySelectorAll('.calc-card').forEach(function(card) {
    var resultEl = card.querySelector('.calc-result');
    if (!resultEl) return;
    /* Ensure aria-live */
    resultEl.setAttribute('aria-live', 'polite');
    resultEl.setAttribute('aria-atomic', 'true');

    var existingRow = card.querySelector('.calc-copy-row');
    if (existingRow && !existingRow.querySelector('.calc-reset-btn')) {
      existingRow.classList.add('calc-actions');
      var resetBtn = document.createElement('button');
      resetBtn.type = 'button';
      resetBtn.className = 'calc-reset-btn';
      resetBtn.textContent = '↺ Reset';
      resetBtn.title = 'Clear this calculator';
      resetBtn.setAttribute('aria-label', 'Reset calculator fields');
      resetBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (card.id) resetCalc(card.id);
      });
      existingRow.insertBefore(resetBtn, existingRow.firstChild);
    } else if (!existingRow) {
      var row = document.createElement('div');
      row.className = 'calc-copy-row calc-actions';
      var resetBtn = document.createElement('button');
      resetBtn.type = 'button';
      resetBtn.className = 'calc-reset-btn';
      resetBtn.textContent = '↺ Reset';
      resetBtn.title = 'Clear this calculator';
      resetBtn.setAttribute('aria-label', 'Reset calculator fields');
      resetBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (card.id) resetCalc(card.id);
      });
      row.appendChild(resetBtn);
      resultEl.parentNode.insertBefore(row, resultEl.nextSibling);
    }
  });

  /* Save on input for all calc fields */
  document.querySelectorAll('.calc-body input, .calc-body select').forEach(function(el) {
    el.addEventListener('change', function() {
      var id = el.id || '';
      var prefix = id.split('-')[0];
      if (prefix) _saveCalcState(prefix);
    });
  });
});


/* FORM SUBMISSION */
function submitReq(){
  /* Honeypot — if a bot filled the hidden field, fake success and bail */
  var hp = document.getElementById('rhp');
  if(hp && hp.value.trim() !== ''){
    const toast=document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),4500);
    return;
  }
  const n=document.getElementById('rn').value.trim();
  const em=document.getElementById('re').value.trim();
  const p=document.getElementById('rp').value.trim();
  const c=document.getElementById('rc').value;
  const ti=document.getElementById('rt').value.trim();
  const d=document.getElementById('rd').value.trim();
  if(!n||!em||!c||!ti||!d){alert('Please fill all required fields (*)');return;}
  /* Proper email validation — type=email is lenient; this catches "x@y" */
  var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em);
  if(!emailOk){ alert('Please enter a valid email address.'); return; }
  sb.from('app_requests').insert([{
    name:n, email:em, phone:p, category:c, title:ti, description:d
  }]).then(({error})=>{
    if(error) throw error;
    const toast=document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),4500);
    ['rn','re','rp','rt','rd'].forEach(id=>document.getElementById(id).value='');
    document.getElementById('rc').selectedIndex=0;
  }).catch(err=>{
    console.error('Submit error:',err);
    alert('Something went wrong. Please try again.');
  });
}

/* ════════════════════════════════════════════
   NEWSLETTER SIGNUP
   Used by both the footer form on index.html
   AND the form rendered at the end of every blog post.
   The `source` parameter records where the signup came from.
   ════════════════════════════════════════════ */
function submitNewsletter(ev, source){
  if(ev && ev.preventDefault) ev.preventDefault();
  /* Pick the right form's elements based on the source.
     For blog posts, the form uses different IDs to avoid collisions. */
  var prefix = (source === 'blog-footer') ? 'bnl' : 'nl';
  var nameEl  = document.getElementById(prefix + 'Name');
  var emailEl = document.getElementById(prefix + 'Email');
  var hpEl    = document.getElementById(prefix + 'Hp');
  var btnEl   = document.getElementById(prefix + 'Btn');
  var msgEl   = document.getElementById(prefix + 'Msg');
  if(!nameEl || !emailEl || !msgEl) return false;

  /* Honeypot check — bots fill hidden fields */
  if(hpEl && hpEl.value.trim() !== ''){
    msgEl.textContent = 'Thanks — you are subscribed.';
    msgEl.className = 'nl-msg success';
    return false;
  }

  var name = nameEl.value.trim();
  var email = emailEl.value.trim().toLowerCase();
  if(!name){
    msgEl.textContent = 'Please add your name.';
    msgEl.className = 'nl-msg error';
    return false;
  }
  var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  if(!emailOk){
    msgEl.textContent = 'Please enter a valid email address.';
    msgEl.className = 'nl-msg error';
    return false;
  }

  /* Disable button during submit so impatient users don't double-submit */
  if(btnEl){ btnEl.disabled = true; btnEl.textContent = 'Subscribing…'; }
  msgEl.textContent = '';
  msgEl.className = 'nl-msg';

  sb.from('subscribers').insert([{ email: email, name: name, source: source || 'unknown' }])
    .then(function(res){
      if(res.error){
        /* Treat duplicate-email as a friendly success — they're already subscribed */
        var dup = String(res.error.message || '').toLowerCase().indexOf('duplicate') > -1
               || String(res.error.message || '').toLowerCase().indexOf('unique') > -1;
        if(dup){
          msgEl.textContent = '✓ You are already subscribed — thank you!';
          msgEl.className = 'nl-msg success';
        } else {
          msgEl.textContent = 'Could not subscribe right now. Please try again.';
          msgEl.className = 'nl-msg error';
          console.error('Newsletter:', res.error);
        }
      } else {
        msgEl.textContent = '✓ Subscribed! You will get an email when a new article goes live.';
        msgEl.className = 'nl-msg success';
        nameEl.value = '';
        emailEl.value = '';
      }
    })
    .catch(function(err){
      console.error('Newsletter:', err);
      msgEl.textContent = 'Network error. Please try again.';
      msgEl.className = 'nl-msg error';
    })
    .finally(function(){
      if(btnEl){ btnEl.disabled = false; btnEl.textContent = 'Subscribe →'; }
    });
  return false;
}