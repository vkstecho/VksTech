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
function _visitorId(){
  try{
    var VID_KEY = 'vks_vid';
    var vid = localStorage.getItem(VID_KEY);
    if(!vid){
      vid = (crypto && crypto.randomUUID) ? crypto.randomUUID()
            : 'v-' + Date.now() + '-' + Math.random().toString(16).slice(2);
      localStorage.setItem(VID_KEY, vid);
    }
    return vid;
  }catch(e){ return null; }
}

/* Record a page path. Use for full navigations AND in-page views (blog overlay, calculators). */
function trackPath(pathOverride){
  try{
    var vid = _visitorId();
    if(!vid) return;
    var path = pathOverride;
    if(!path){
      path = location.pathname || '/';
      /* Capture calculator / in-page hash so Visitors shows more than just "/" */
      if(location.hash && location.hash.length > 1){
        var h = location.hash;
        if(h.indexOf('#calc-') === 0 || h.indexOf('#blog') === 0){
          path = path + h;
        }
      }
    }
    path = String(path).slice(0, 300);
    sb.from('page_views').insert([{
      path: path,
      referrer: (document.referrer || '').slice(0, 300) || null,
      visitor_id: vid
    }]).then(function(res){
      if(res && res.error) console.warn('View tracking:', res.error.message);
    });
  }catch(e){ /* Tracking must never break the page */ }
}

function trackPageView(){ trackPath(null); }
trackPageView();

/* Re-track when calculator deep-link / hash changes (SPA-style) */
window.addEventListener('hashchange', function(){
  var h = location.hash || '';
  if(h.indexOf('#calc-') === 0 || h.indexOf('#blog') === 0){
    trackPath((location.pathname || '/') + h);
  }
});

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
  nav_ind:"ऐप्स", nav_mentor:"मेंटर", nav_resume:"रिज़्यूमे", nav_calc:"कैलकुलेटर", nav_per:"व्यक्तिगत ऐप्स", nav_blog:"ब्लॉग", nav_req:"मैं क्या देता हूँ", nav_consult:"कंसल्टिंग", nav_about:"परिचय", nav_people:"लोग", nav_yt:"यूट्यूब", nav_downloads:"मुफ़्त डाउनलोड", nav_cta:"साथ काम करें",
  yt_eyebrow:"VKS Tech यूट्यूब पर",
  yt_title:"पाँच चैनल, एक क्रिएटर",
  yt_sub:"फाइनेंस, फिटनेस, एनिमेटेड कहानियाँ, प्रोडक्टिविटी और रोज़मर्रा की ज़िंदगी — हर प्लेलिस्ट देखें।",
  yt_label:"📺 VKS Tech यूट्यूब पर",
  yt_h2:"चैनल, <span>एक क्रिएटर।</span>",
  yt_sub2:"फाइनेंस, फिटनेस, एनिमेटेड कहानियाँ, प्रोडक्टिविटी और रोज़मर्रा की ज़िंदगी — हर चैनल और प्लेलिस्ट एक जगह।",
  yt_home_cta:"सभी प्लेलिस्ट देखें →",
  hero_badge:"NIT एलमनी · फ्लेक्सिबल पैकेजिंग में 9 साल · डिजिटल ऑटोमेशन",
  hero_title:"<a href='#industry-apps' class='hero-link'>ऐप्स</a>। <a href='#mentorship' class='hero-link'>मेंटरशिप</a>।<br><a href='#calculators' class='hero-link'>कैलकुलेटर</a>। <span class='accent'>मुफ़्त।</span>",
  hero_sub:"वास्तविक प्लांट लीडरशिप से बने व्यावहारिक उपकरण और वन-टू-वन मार्गदर्शन। UFlex, JPFL Films (Jindal, Nashik) और GLS में 9 साल — टीमें लीड करने सहित — के बाद <a href='#about' class='hero-link'><strong>विवेक कुमार</strong></a> (M.Tech, NIT उत्तराखंड) व्यावहारिक ऐप्स बनाते हैं और प्रोफेशनल्स को मेंटर करते हैं।",
  hero_btn1:"मेंटरशिप बुक करें →", hero_btn2:"मुफ़्त कैलकुलेटर आज़माएँ", hero_btn3:"प्रशंसापत्र",
  nav_career:"करियर", nav_testimonials:"प्रशंसापत्र",
  stat1:"प्रोफेशनल्स गाइडेड", stat2:"वर्ष अनुभव", stat3:"लाइव ऐप्स", stat4:"मुफ़्त टूल्स",
  cos_label:"भारत के फ्लेक्सिबल पैकेजिंग उद्योग में 9 साल · VKS Tech बना रहे हैं",
  ind_label:"🏭 फ्लेक्सिबल पैकेजिंग उद्योग", ind_title:"<span>पैकेजिंग पेशेवरों</span> के लिए ऐप्स",
  ind_sub:"उत्पादन, गुणवत्ता नियंत्रण और तकनीकी भूमिकाओं में 9 साल के व्यावहारिक अनुभव से निर्मित।",
  per_label:"🎯 व्यक्तिगत और जीवनशैली", per_title:"स्वास्थ्य, पैसे और <span>व्यक्तिगत उपकरण</span>",
  per_sub:"प्लांट से परे जीवन के लिए ऐप्स — स्वास्थ्य, पैसे और व्यक्तिगत उत्पादकता। वास्तविक ज़रूरतों से बने, मुफ़्त साझा।",
  blog_label:"📝 ज्ञान केंद्र", blog_title:"ब्लॉग और <span>लेख</span>",
  blog_sub:"फ्लेक्सिबल पैकेजिंग, एक्सेल टिप्स, करियर सलाह और तकनीक — समुदाय के लिए मुफ़्त में साझा।",
  req_label:"📩 ऐप अनुरोध पोर्टल",
  req_title:"कोई <span>वास्तविक समस्या</span> है? बताएँ।",
  req_sub:"क्या कोई कार्यस्थल या पैकेजिंग समस्या है जिसे एक सरल ऐप हल कर सके? साझा करें — उपयोगी आइडिया अनुरोधकर्ता के लिए मुफ़्त बनाई जा सकती है।",
  f1t:"आपके लिए हमेशा मुफ़्त", f1d:"जिस व्यक्ति ने ऐप माँगा, उसे हमेशा मुफ़्त मिलेगा — कोई शर्त नहीं।",
  f2t:"उचित लाभ साझाकरण", f2d:"यदि अन्य उपयोगकर्ता व्यावसायिक लाभ उठाते हैं, तो पारदर्शी राजस्व-हिस्सा मॉडल लागू होता है।",
  f3t:"वास्तविक इंजीनियरिंग विशेषज्ञता", f3d:"हर ऐप M.Tech स्तर के ज्ञान और 9+ वर्षों के अनुभव से बनाया जाता है।",
  f4t:"व्यावहारिक समस्याएँ स्वागत योग्य", f4d:"खासकर पैकेजिंग, मैन्युफैक्चरिंग, संचालन, सीखने और रोज़मर्रा के काम के टूल जो समय बचाएँ।",
  form_title:"अपना विचार भेजें 💡", form_sub:"विवेक को बताएं कि आप क्या समाधान चाहते हैं",
  fl_name:"आपका नाम *", fl_email:"ईमेल *", fl_phone:"फोन / WhatsApp", fl_cat:"श्रेणी *", fl_title:"ऐप का शीर्षक *", fl_desc:"समस्या का विवरण *",
  submit_btn:"मेरा ऐप अनुरोध भेजें 🚀",
  offer_label:"✦ मुफ़्त टूल और मेंटरशिप",
  offer_title:"मुफ़्त से शुरू करें। <span>मार्गदर्शन से आगे बढ़ें।</span>",
  offer_sub:"पैकेजिंग कैलकुलेटर, रिज़्यूमे टूल और वन-टू-वन मेंटरशिप — असली प्लांट अनुभव से। प्लांट कंसल्टिंग के लिए Work With Me देखें।",
  offer_note:"मुफ़्त टूल तुरंत उपलब्ध हैं। मेंटरशिप कभी भी बुक करें। प्लांट प्रोजेक्ट Consulting पेज पर मुफ़्त 15-मिनट ऑडिट से शुरू होते हैं।",
  about_label:"👤 मेरे बारे में",
  about_p1:"मैं <strong>प्रशिक्षण से मैकेनिकल इंजीनियर</strong>, <strong>अनुभव से प्रोडक्शन लीडर</strong> और <strong>पसंद से ऐप बिल्डर व मेंटर</strong> हूँ। UFlex, JPFL Films (Jindal, Nashik) और GLS में 9 साल में मैंने टीमें लीड कीं, स्टाफ को ट्रेन व ऑनबोर्ड किया, और प्रोडक्शन प्लानिंग, प्रोसेस कंट्रोल, क्वालिटी व कॉस्ट की जिम्मेदारी संभाली।",
  about_p2:"आज मैं पैकेजिंग प्रोफेशनल्स के लिए व्यावहारिक ऐप्स बनाता हूँ और mentor.vkstech.com पर वन-टू-वन मेंटरशिप देता हूँ (AI टूल्स, एक्सेल, करियर स्किल्स, पर्सनल फाइनेंस और संबंधित कार्य-कौशल)।",
  about_p3:"हर कैलकुलेटर, हर ऐप और हर मेंटरिंग सेशन वास्तविक प्लांट-फ्लोर समस्याओं से निकला है जिन्हें मैंने स्वयं हल किया। <strong>VKS Tech</strong> इन सबका घर है।",
  ppl_label:"❤️ आभार के साथ",
  ppl_title:"इस यात्रा के पीछे <span>के लोग</span>",
  ppl_sub:"हर सफलता, हर देर रात, हर संदेह के पल को पार करना — ये वो लोग हैं जिन्होंने इसे संभव बनाया।",
  pcat_par:"🙏 मेरे माता-पिता", pcat_spec:"⭐ विशेष धन्यवाद",
  nav_calc:"कैलकुलेटर", c1_t:"फिल्म रोल वज़न", c2_t:"वज़न से रोल लंबाई", c3_t:"रोल OD (बाहरी व्यास)", c4_t:"GSM ↔ माइक्रॉन रूपांतरण", c5_t:"उत्पादन यील्ड %", c6_t:"मशीन उपयोग %", c7_t:"प्रति वर्ग मीटर लागत", c8_t:"मेट मशीन क्षमता", c8_s:"3-स्टेप: साइकल → रोल/दिन → MT/दिन", c9_t:"कन्वर्टिंग प्लांट क्षमता", c9_s:"सभी मशीनें → MT/दिन · प्लांट बॉटलनेक", c10_t:"न्यूनतम मैनपावर", c10_s:"शिफ्ट × मशीन × रिलीफ × बफर → हेडकाउंट", calc_label:"🧮 पैकेजिंग कैलकुलेटर", search_ph:"ब्लॉग खोजें...", filt_all:"सभी", filt_pack:"फ्लेक्सिबल पैकेजिंग", filt_excel:"एक्सेल और फॉर्मूले", filt_career:"करियर और विकास", filt_tech:"तकनीक और उपकरण", filt_mfg:"मैन्युफैक्चरिंग एक्सीलेंस"
};

const EN = {
  nav_ind:"Apps", nav_mentor:"Mentor", nav_resume:"Resume", nav_calc:"Calculators", nav_per:"Personal Apps", nav_blog:"Blog", nav_req:"What I Offer", nav_consult:"Consulting", nav_about:"About", nav_people:"People", nav_yt:"YouTube", nav_downloads:"Free Downloads", nav_cta:"Work With Me",
  yt_eyebrow:"VKS Tech on YouTube",
  yt_title:"Channels, one creator",
  yt_sub:"Finance, fitness, animated stories, productivity and everyday life — explore every playlist.",
  yt_label:"📺 VKS Tech on YouTube",
  yt_h2:"Channels, <span>one creator.</span>",
  yt_sub2:"Finance, fitness, animated stories, productivity and everyday life — every channel and playlist gathered in one place.",
  yt_home_cta:"See all playlists →",
  hero_badge:"NIT ALUMNI · 9 YEARS IN FLEXIBLE PACKAGING · DIGITAL AUTOMATION",
  hero_title:"<a href='#industry-apps' class='hero-link'>Apps</a>. <a href='#mentorship' class='hero-link'>Mentorship</a>.<br><a href='#calculators' class='hero-link'>Calculators</a>. <span class='accent'>Free.</span>",
  hero_sub:"Practical tools and one-to-one guidance built from real plant leadership. After 9 years at UFlex, JPFL Films (Jindal, Nashik) & GLS — including leading teams — <a href='#about' class='hero-link'><strong>Vivek Kumar</strong></a> (M.Tech, NIT Uttarakhand) builds practical apps and mentors professionals.",
  hero_btn1:"Book a Free 15-Min Plant Audit", hero_btn2:"Use Free Packaging Calculators", hero_btn3:"Testimonials",
  nav_career:"Career", nav_testimonials:"Testimonials",
  stat1:"Professionals Guided", stat2:"Years Experience", stat3:"Apps Live", stat4:"Free Tools",
  cos_label:"9 Years in India's Flexible Packaging Industry · Building VKS Tech",
  ind_label:"🏭 Flexible Packaging Industry", ind_title:"Apps for <span>Packaging Professionals</span>",
  ind_sub:"Built from 9 years of hands-on experience across production, quality control, and technical roles in the flexible packaging world.",
  per_label:"🎯 Personal & Lifestyle", per_title:"Health, Money & <span>Personal Tools</span>",
  per_sub:"Apps for life beyond the plant — health, money and personal productivity. Built from real needs, shared free.",
  blog_label:"📝 Knowledge Hub", blog_title:"Blog & <span>Articles</span>",
  blog_sub:"Insights from 9 years in flexible packaging, tech tutorials, Excel tips, and industry knowledge — shared freely for the community.",
  req_label:"📩 App Request Portal",
  req_title:"Have a <span>real problem?</span> Tell me.",
  req_sub:"Have a workplace or packaging problem that a simple app could solve? Share it — useful ideas may be built free for the requester. If others use it commercially, a fair profit-share model applies.",
  f1t:"Always Free for You", f1d:"The person who requested the app always gets it free — no conditions.",
  f2t:"Fair Profit Sharing", f2d:"If other users benefit commercially, a transparent revenue-share model applies.",
  f3t:"Real Engineering Expertise", f3d:"Every app built with M.Tech-level knowledge and 9+ years of domain experience.",
  f4t:"Practical Problems Welcome", f4d:"Especially packaging, manufacturing, operations, learning and day-to-day work tools that save time.",
  form_title:"Submit Your Idea 💡", form_sub:"Tell Vivek about the problem you want solved",
  fl_name:"Your Name *", fl_email:"Email *", fl_phone:"Phone / WhatsApp", fl_cat:"Category *", fl_title:"App Title *", fl_desc:"Describe the Problem *",
  submit_btn:"Send My App Request 🚀",
  offer_label:"✦ Free Tools & Mentorship",
  offer_title:"Start free. <span>Grow with guidance.</span>",
  offer_sub:"Packaging calculators, resume tools, and one-to-one mentorship — built from real plant experience. For plant consulting, see Work With Me.",
  offer_note:"Free tools are available immediately. Mentorship is bookable anytime. Plant projects start with a free 15-min audit on the Consulting page.",
  about_label:"👤 About Me",
  about_p1:"I'm a <strong>Mechanical Engineer by training</strong>, a <strong>production leader by experience</strong>, and an <strong>app builder & mentor by choice</strong>. Over 9 years at UFlex, JPFL Films (Jindal, Nashik) and GLS I led teams, trained and onboarded staff, and owned production planning, process control, quality and cost.",
  about_p2:"Today I build practical apps for packaging professionals and offer one-to-one mentorship at mentor.vkstech.com (AI tools, Excel, career skills, personal finance and related workplace skills).",
  about_p3:"Every calculator, every app, and every mentoring session is rooted in real plant-floor problems I solved myself. <strong>VKS Tech</strong> is the home for all of it.",
  ppl_label:"❤️ With Gratitude",
  ppl_title:"The People Behind <span>This Journey</span>",
  ppl_sub:"Every breakthrough, every late night, every moment of doubt overcome — these are the people who made it possible.",
  pcat_par:"🙏 My Parents", pcat_spec:"⭐ Special Thanks",
  nav_calc:"Calculators", c1_t:"Film Roll Weight", c2_t:"Roll Length from Weight", c3_t:"Roll OD (Outer Diameter)", c4_t:"GSM ↔ Micron Conversion", c5_t:"Production Yield %", c6_t:"Machine Utilisation %", c7_t:"Cost per Square Meter", c8_t:"Met M/C Capacity", c8_s:"3-Step: Cycle → Rolls/day → MT/day", c9_t:"Converting Plant Capacity", c9_s:"All machines → MT/day · plant bottleneck", c10_t:"Min Manpower", c10_s:"Shifts × Machines × Relief × Buffer → Headcount", calc_label:"🧮 Packaging Calculators", search_ph:"Search blogs...", filt_all:"All", filt_pack:"Flexible Packaging", filt_excel:"Excel & Formulas", filt_career:"Career & Growth", filt_tech:"Tech & Tools", filt_mfg:"Manufacturing Excellence"
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
const ro=new IntersectionObserver((entries)=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*40);ro.unobserve(e.target);}});},{threshold:0.01,rootMargin:'0px 0px 80px 0px'});
document.querySelectorAll('.reveal').forEach(r=>ro.observe(r));
// Safety: never leave sections invisible forever (mobile chrome / fast scroll / IO quirks)
setTimeout(function(){
  document.querySelectorAll('.reveal:not(.visible)').forEach(function(el){ el.classList.add('visible'); });
}, 2800);



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

  /* Re-run calculator after reset so results update */
  try {
    if (cardId === 'calc-converting-capacity' && typeof calcConvPlant === 'function') calcConvPlant();
    if (cardId === 'calc-min-manpower' && typeof calcMinManpower === 'function') { calcMinManpowerRebuildMachines(); calcMinManpower(); }
    else if (cardId === 'calc-met-capacity' && typeof calcMetCapacity === 'function') calcMetCapacity();
    else if (cardId === 'calc-conversion-cost' && typeof calcConversionCost === 'function') calcConversionCost();
    else {
      var fnMap = {
        'calc-roll-weight': 'calcRollWeight',
        'calc-roll-length': 'calcRollLength',
        'calc-roll-od': 'calcRollOd',
        'calc-gsm-micron': 'calcGsmMicron',
        'calc-yield': 'calcYield',
        'calc-machine-utilisation': 'calcUtilisation',
        'calc-cost-sqm': 'calcCostSqm'
      };
      var fnName = fnMap[cardId];
      if (fnName && typeof window[fnName] === 'function') window[fnName]();
    }
  } catch (e2) {}
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
  document.querySelectorAll('.calc-card.open').forEach(function(c){
    c.classList.remove('open');
    var h = c.querySelector('.calc-head');
    if(h) h.setAttribute('aria-expanded', 'false');
  });
  // Toggle clicked
  if(!wasOpen) {
    card.classList.add('open');
    head.setAttribute('aria-expanded', 'true');
    /* Compute converting plant result when card opens */
    if(card.id === 'calc-converting-capacity' && typeof calcConvPlant === 'function'){
      setTimeout(function(){ calcConvPlant(); }, 0);
    }
    if(card.id === 'calc-min-manpower' && typeof calcMinManpower === 'function'){
      setTimeout(function(){ calcMinManpowerRebuildMachines(); calcMinManpower(); }, 0);
    }
    if(card.id === 'calc-met-capacity' && typeof calcMetCapacity === 'function'){
      setTimeout(function(){ calcMetCapacity(); }, 0);
    }
    if(card.id === 'calc-conversion-cost' && typeof calcConversionCost === 'function'){
      setTimeout(function(){ calcConversionCost(); }, 0);
    }
  } else {
    head.setAttribute('aria-expanded', 'false');
  }
  /* Update URL bar so the deep-link shareable URL reflects the current state.
     Uses replaceState to avoid cluttering browser history with every tap. */
  if(card.id && history && history.replaceState){
    var newHash = !wasOpen ? '#' + card.id : '#calculators';
    if(location.hash !== newHash){
      history.replaceState(null, '', location.pathname + location.search + newHash);
    }
  }
}
/* Keyboard + ARIA for calculator accordion heads */
function initCalcA11y(){
  document.querySelectorAll('.calc-head').forEach(function(head){
    if(!head.hasAttribute('role')) head.setAttribute('role', 'button');
    if(!head.hasAttribute('tabindex')) head.setAttribute('tabindex', '0');
    var card = head.parentElement;
    head.setAttribute('aria-expanded', card && card.classList.contains('open') ? 'true' : 'false');
    head.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        toggleCalc(head, e);
      }
    });
  });
}
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initCalcA11y);
} else {
  initCalcA11y();
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
   METALLISER CONVERSION COST
   Actual vs Equivalent ₹/kg (blog #28)
   ═══════════════════════════════════════ */
var CC_DEFAULT_ROWS = [
  { name: 'PET_12_M2.2 (Std 12μ, baseline)', qty: 245, factor: 1.00 },
  { name: 'PET_12_M2.5 (Std 12μ, 2.5 OD)',   qty: 100, factor: 1.24 },
  { name: 'PET_12_M2.8 (Std 12μ, 2.8 OD)',   qty: 70,  factor: 1.44 },
  { name: 'PET_10_M2.2 (Std 10μ)',            qty: 75,  factor: 1.20 },
  { name: 'PET_8_M2.2 (Std 8μ)',             qty: 55,  factor: 1.875 },
  { name: 'PET_12_M0.3_AlOx (AlOx)',          qty: 70,  factor: 3.00 },
  { name: 'PET_12_M2.2_RC (Reverse/Release Coat)', qty: 50, factor: 2.17 }
];

function ccEscape(s){
  return String(s).replace(/[&<>"']/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}

function ccRenderRow(row){
  var tr = document.createElement('tr');
  tr.style.borderBottom = '1px solid var(--border)';
  tr.innerHTML =
    '<td style="padding:6px 8px;"><input type="text" class="cc-name" value="'+ccEscape(row.name)+'" style="width:100%;padding:7px 8px;border:1.5px solid var(--border);border-radius:6px;font-size:.82rem;font-family:inherit;background:var(--bg);" oninput="calcConversionCost()"></td>' +
    '<td style="padding:6px 6px;"><input type="number" class="cc-qty" value="'+row.qty+'" min="0" step="1" style="width:100%;padding:7px 6px;border:1.5px solid var(--border);border-radius:6px;font-size:.82rem;font-family:inherit;background:var(--bg);text-align:right;font-weight:700;" oninput="calcConversionCost()"></td>' +
    '<td style="padding:6px 6px;"><input type="number" class="cc-factor" value="'+row.factor+'" min="0.1" max="10" step="0.01" style="width:100%;padding:7px 6px;border:1.5px solid var(--border);border-radius:6px;font-size:.82rem;font-family:inherit;background:var(--bg);text-align:right;font-weight:700;" oninput="calcConversionCost()"></td>' +
    '<td class="cc-eqv" style="padding:6px 8px;text-align:right;color:var(--teal);font-weight:700;font-size:.82rem;">—</td>' +
    '<td style="padding:6px 4px;text-align:center;"><button type="button" onclick="ccDeleteRow(this)" style="background:transparent;border:none;color:var(--orange);font-size:1.15rem;cursor:pointer;font-weight:700;line-height:1;" title="Remove row" aria-label="Remove row">×</button></td>';
  return tr;
}

function ccAddRow(){
  var tbody = document.getElementById('cc-material-rows');
  if(!tbody) return;
  tbody.appendChild(ccRenderRow({ name: '', qty: 0, factor: 1.00 }));
  calcConversionCost();
}

function ccDeleteRow(btn){
  var row = btn.closest('tr');
  if(row && row.parentNode) row.parentNode.removeChild(row);
  calcConversionCost();
}

function ccInitRows(){
  var tbody = document.getElementById('cc-material-rows');
  if(!tbody || tbody.children.length) return;
  CC_DEFAULT_ROWS.forEach(function(r){ tbody.appendChild(ccRenderRow(r)); });
  calcConversionCost();
}

function calcConversionCost(){
  var tbody = document.getElementById('cc-material-rows');
  if(!tbody) return;

  var qtys = tbody.querySelectorAll('.cc-qty');
  var factors = tbody.querySelectorAll('.cc-factor');
  var eqvCells = tbody.querySelectorAll('.cc-eqv');
  var totalActualMT = 0, totalEqvMT = 0;

  for(var i=0; i<qtys.length; i++){
    var q = parseFloat(qtys[i].value) || 0;
    var f = parseFloat(factors[i].value) || 0;
    var eqv = q * f;
    if(eqvCells[i]) eqvCells[i].textContent = eqv > 0 ? eqv.toFixed(1) : '—';
    totalActualMT += q;
    totalEqvMT += eqv;
  }

  var mult = totalActualMT > 0 ? (totalEqvMT / totalActualMT) : 0;
  var elAct = document.getElementById('cc-total-actual-mt');
  var elAvg = document.getElementById('cc-avg-factor');
  var elEqv = document.getElementById('cc-total-eqv-mt');
  if(elAct) elAct.textContent = totalActualMT > 0 ? totalActualMT.toFixed(1) + ' MT' : '—';
  if(elAvg) elAvg.textContent = mult > 0 ? mult.toFixed(2) + '×' : '—';
  if(elEqv) elEqv.textContent = totalEqvMT > 0 ? totalEqvMT.toFixed(1) + ' MT' : '—';

  var wireKg = parseFloat((document.getElementById('cc-wire-kg')||{}).value) || 0;
  var wireRate = parseFloat((document.getElementById('cc-wire-rate')||{}).value) || 0;
  var boatPcs = parseFloat((document.getElementById('cc-boat-pcs')||{}).value) || 0;
  var boatRate = parseFloat((document.getElementById('cc-boat-rate')||{}).value) || 0;
  var powerUnits = parseFloat((document.getElementById('cc-power-units')||{}).value) || 0;
  var powerRate = parseFloat((document.getElementById('cc-power-rate')||{}).value) || 0;
  var wastagePct = parseFloat((document.getElementById('cc-wastage')||{}).value) || 0;
  var filmRate = parseFloat((document.getElementById('cc-film-rate')||{}).value) || 0;
  var manpower = parseFloat((document.getElementById('cc-manpower')||{}).value) || 0;
  var consumables = parseFloat((document.getElementById('cc-consumables')||{}).value) || 0;
  var indirect = parseFloat((document.getElementById('cc-indirect')||{}).value) || 0;
  var bgrade = parseFloat((document.getElementById('cc-bgrade')||{}).value);
  if(isNaN(bgrade)) bgrade = 0.024;

  var outputKg = totalActualMT * 1000;
  var resA = document.getElementById('cc-res-actual');
  var resE = document.getElementById('cc-res-eqv');
  var resG = document.getElementById('cc-res-gap');
  var br = document.getElementById('cc-breakdown');

  if(outputKg <= 0 || mult <= 0){
    if(resA) resA.textContent = '—';
    if(resE) resE.textContent = '—';
    if(resG) resG.textContent = '—';
    if(br) br.textContent = 'Add at least one material row with Qty > 0 to see results.';
    return;
  }

  var wireA   = wireKg * wireRate / outputKg;
  var boatA   = boatPcs * boatRate / outputKg;
  var powerA  = powerUnits * powerRate / outputKg;
  var wasteA  = wastagePct * filmRate / 100;
  var manA    = manpower;
  var consA   = consumables;
  var indA    = indirect;
  var totalA  = wireA + boatA + powerA + wasteA + bgrade + manA + consA + indA;

  // Equivalent: scale variable heads by mix multiplier; Indirect stays fixed
  var wireE = wireA / mult, boatE = boatA / mult, powerE = powerA / mult;
  var wasteE = wasteA / mult, bgradeE = bgrade / mult;
  var manE = manA / mult, consE = consA / mult, indE = indA;
  var totalE = wireE + boatE + powerE + wasteE + bgradeE + manE + consE + indE;
  var gap = totalA - totalE;

  if(resA) resA.textContent = '₹' + totalA.toFixed(2);
  if(resE) resE.textContent = '₹' + totalE.toFixed(2);
  if(resG) resG.textContent = '₹' + gap.toFixed(2);

  if(br){
    function line(label, a, e){
      return label.padEnd(16,' ') + ' ₹' + a.toFixed(2).padStart(6,' ') + '  /  ₹' + e.toFixed(2).padStart(6,' ');
    }
    br.innerHTML =
      '<div style="color:var(--navy);font-weight:700;margin-bottom:4px;">Head               Actual   /  Equivalent</div>' +
      line('Wire', wireA, wireE) + '<br>' +
      line('Boat', boatA, boatE) + '<br>' +
      line('Power', powerA, powerE) + '<br>' +
      line('Wastage', wasteA, wasteE) + '<br>' +
      line('B-Grade', bgrade, bgradeE) + '<br>' +
      line('Manpower', manA, manE) + '<br>' +
      line('Cons & Spares', consA, consE) + '<br>' +
      line('Indirect', indA, indE) + '<br>' +
      '<span style="color:var(--orange);font-weight:700;">' + line('TOTAL', totalA, totalE) + '</span>' +
      '<div style="margin-top:8px;color:var(--muted);font-size:.72rem;">Mix multiplier = ' + mult.toFixed(3) + '× · Actual MT ' + totalActualMT.toFixed(1) + ' → Eqv MT ' + totalEqvMT.toFixed(1) + '</div>';
  }
}

// Init conversion-cost rows when DOM ready
(function(){
  function boot(){ ccInitRows(); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

function calcConvPlant(){
  try {
    function n(id){
      var el = document.getElementById(id);
      if(!el) return 0;
      var v = parseFloat(String(el.value).replace(/,/g,'').trim());
      return isFinite(v) ? v : 0;
    }
    function setTxt(id, v){
      var el = document.getElementById(id);
      if(el) el.textContent = v;
    }

    var avail    = n('cp-avail');
    var rollLen  = n('cp-roll');
    var coMin    = n('cp-co');
    var dens     = n('cp-dens');
    var uptime   = n('cp-uptime') / 100;
    var speedEff = n('cp-speedeff') / 100;
    var quality  = n('cp-quality') / 100;
    var pouchWt  = n('cp-pouchwt'); /* grams per pouch */

    if(avail <= 0 || dens <= 0){
      setTxt('cp-res','—');
      setTxt('cp-sub','Check plant defaults (available min & density)');
      return;
    }
    if(uptime <= 0) uptime = 1;
    if(speedEff <= 0) speedEff = 1;
    if(quality <= 0) quality = 1;

    var grossMin = avail * uptime;

    /* Web process capacity (print / lam / slit)
       Mass formula: kg = length_m × width_mm × micron × density_g_cm3 × 1e-6
       (standard converting plant formula) */
    function calcWeb(prefix, qty, speed, width, micron){
      if(qty <= 0 || speed <= 0 || width <= 0 || micron <= 0){
        setTxt(prefix + '-co', '—');
        setTxt(prefix + '-mt', '—');
        return { mt:0, co:0, active:false };
      }
      /* Start with gross productive minutes, then subtract changeover loss */
      var runMin = grossMin * speedEff;
      var tentM = qty * speed * runMin;
      var cos = (rollLen > 0) ? (tentM / rollLen) : 0;
      var coLoss = cos * coMin;
      /* Cap CO loss at 85% of available so capacity never goes negative */
      var netMin = Math.max(0, runMin - Math.min(coLoss, runMin * 0.85));
      var lengthM = qty * speed * netMin;
      var kg = lengthM * width * micron * dens * 1e-6;
      var mt = (kg / 1000) * quality;
      setTxt(prefix + '-co', cos.toFixed(1));
      setTxt(prefix + '-mt', mt.toFixed(2));
      return { mt: mt, co: cos, active: true };
    }

    function calcPouch(qty, pcsPerMin){
      if(qty <= 0 || pcsPerMin <= 0 || pouchWt <= 0){
        setTxt('cp-pouch-co', '—');
        setTxt('cp-pouch-mt', '—');
        return { mt:0, co:0, active:false };
      }
      var runMin = grossMin * speedEff;
      var jobCOs = Math.max(0, (runMin / 240) * qty); /* ~1 CO per 4h per machine */
      var coLoss = jobCOs * coMin;
      var netMin = Math.max(0, runMin - Math.min(coLoss, runMin * 0.85));
      var pcs = qty * pcsPerMin * netMin;
      var kg = pcs * pouchWt / 1000;
      var mt = (kg / 1000) * quality;
      setTxt('cp-pouch-co', jobCOs.toFixed(1));
      setTxt('cp-pouch-mt', mt.toFixed(2));
      return { mt: mt, co: jobCOs, active: true };
    }

    var print = calcWeb('cp-print', n('cp-print-qty'), n('cp-print-spd'), n('cp-print-w'), n('cp-print-um'));
    var lam   = calcWeb('cp-lam',   n('cp-lam-qty'),   n('cp-lam-spd'),   n('cp-lam-w'),   n('cp-lam-um'));
    var slit  = calcWeb('cp-slit',  n('cp-slit-qty'),  n('cp-slit-spd'),  n('cp-slit-w'),  n('cp-slit-um'));
    var pouch = calcPouch(n('cp-pouch-qty'), n('cp-pouch-spd'));

    var rows = [
      { n:'Printing',    x:print },
      { n:'Lamination',  x:lam },
      { n:'Slitting',    x:slit },
      { n:'Pouching',    x:pouch }
    ];
    var active = rows.filter(function(r){ return r.x.active && r.x.mt > 0; });
    var sum = rows.reduce(function(s,r){ return s + (r.x.mt || 0); }, 0);
    var bottleneck = 0;
    var bottleneckName = '—';
    if(active.length){
      active.sort(function(a,b){ return a.x.mt - b.x.mt; });
      bottleneck = active[0].x.mt;
      bottleneckName = active[0].n;
    }

    setTxt('cp-plant-mt', bottleneck > 0 ? bottleneck.toFixed(2) : '—');
    setTxt('cp-sum-mt', sum > 0 ? sum.toFixed(2) : '—');
    setTxt('cp-sum-note', bottleneckName);
    setTxt('cp-res', bottleneck > 0 ? bottleneck.toFixed(2) : '—');
    setTxt('cp-sub', bottleneck > 0 ? ('Bottleneck: ' + bottleneckName) : 'Enter machine data above');

    var detail = document.getElementById('cp-detail');
    if(detail){
      detail.textContent = 'Gross run ' + grossMin.toFixed(0) + ' min/day after uptime · Yield ' +
        (quality * 100).toFixed(0) + '% · Plant limit = lowest active process (' + bottleneckName + ').';
    }
  } catch (err) {
    console.error('calcConvPlant error:', err);
    var sub = document.getElementById('cp-sub');
    if(sub) sub.textContent = 'Calculation error — check console';
  }
}
function calcConvCapacity(){ calcConvPlant(); }
window.calcConvPlant = calcConvPlant;
window.calcConvCapacity = calcConvCapacity;




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
  /* Bilingual fields are stored as "English ... | Hindi ...".
     Meta lines inside a single language also use "|" (e.g. "12-min read | topic").
     So we classify each segment by Devanagari instead of always taking parts[0]/parts[1]. */
  if(text.indexOf('|') > -1) {
    var parts = text.split(/\s*\|\s*/).map(function(p){ return p.trim(); }).filter(Boolean);
    var hiParts = parts.filter(function(p){ return /[\u0900-\u097F]/.test(p); });
    var enParts = parts.filter(function(p){ return p && !/[\u0900-\u097F]/.test(p); });
    if(curLang === 'hi') {
      if(hiParts.length) return hiParts.join(' · ');
      /* fallback: last segment if no Devanagari detected */
      return parts[parts.length - 1];
    }
    if(enParts.length) return enParts.join(' · ');
    return parts[0];
  }
  /* Whole string is Hindi-only or English-only */
  if(curLang === 'hi' && !/[\u0900-\u097F]/.test(text)) return text;
  if(curLang === 'en' && /[\u0900-\u097F]/.test(text) && !/[A-Za-z]{3,}/.test(text)) return text;
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
    .replace(/📖\s*~?\d+\s*मिनट/gi, '')
    .replace(/\d+\s*मिनट(\s*रीड|\s*read)?/gi, '')
    .replace(/Bookmark for the next shutdown/gi, '')
    .replace(/अगले शटडाउन के लिए बुकमार्क करें/gi, '')
    .replace(/\s*[·•]\s*/g, ' · ')
    .replace(/\s{2,}/g, ' ')
    .replace(/^(?:\s*·\s*)+|(?:\s*·\s*)+$/g, '')
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
    ? '<div class="blog-img"><img src="'+escH(b.imageUrl)+'" alt="" loading="lazy" decoding="async" width="640" height="360"/></div>'
    : '<div class="blog-img blog-img-fallback">'+cat.icon+'</div>';
  /* Link to /blog/<slug> — rewritten to blog.html which loads content from GitHub.
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

function blogEmptyState(msg, showRetry) {
  var retry = showRetry
    ? '<button type="button" class="blog-retry-btn" onclick="loadBlogs()">Retry</button>'
    : '';
  return '<div class="blog-empty" style="grid-column:1/-1;text-align:center;padding:48px 20px;">'
    + '<div style="font-size:2.6rem;margin-bottom:12px;">📝</div>'
    + '<h3 style="color:var(--navy);font-family:Playfair Display,serif;margin-bottom:8px;">'+(msg.title||'No articles yet')+'</h3>'
    + '<p style="color:var(--muted);font-size:.9rem;max-width:420px;margin:0 auto 16px;">'+(msg.body||'')+'</p>'
    + retry
    + (msg.link ? '<p style="margin-top:10px;"><a href="/blog" class="blog-view-all" style="display:inline-flex;">Browse blog →</a></p>' : '')
    + '</div>';
}

function loadBlogs() {
  const grid = document.getElementById('blogGrid');
  if(!grid) return;
  /* Show skeleton while fetching */
  grid.innerHTML = ''
    + '<div class="blog-skel" aria-hidden="true"><div class="blog-skel-img"></div><div class="blog-skel-body"><div class="blog-skel-line w40"></div><div class="blog-skel-line w90"></div><div class="blog-skel-line w70"></div></div></div>'
    + '<div class="blog-skel" aria-hidden="true"><div class="blog-skel-img"></div><div class="blog-skel-body"><div class="blog-skel-line w40"></div><div class="blog-skel-line w90"></div><div class="blog-skel-line w70"></div></div></div>'
    + '<div class="blog-skel" aria-hidden="true"><div class="blog-skel-img"></div><div class="blog-skel-body"><div class="blog-skel-line w40"></div><div class="blog-skel-line w90"></div><div class="blog-skel-line w70"></div></div></div>';
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
        grid.innerHTML = blogEmptyState({
          title: 'Blog Coming Soon',
          body: 'Articles about flexible packaging, Excel formulas, career tips, and tech tools coming soon!',
          link: true
        }, false);
      } else {
        /* Homepage shows latest 6 — full library lives at /blog */
        var preview = allBlogs.slice(0, 6);
        grid.innerHTML = preview.map(renderBlogCard).join('');
        var hint = document.querySelector('.blog-cta-hint');
        if(hint) hint.textContent = allBlogs.length + ' articles · filter, search, paginate';
      }
    })
    .catch(err => {
      console.warn('Blog load:', err && err.message);
      grid.innerHTML = blogEmptyState({
        title: 'Could not load articles',
        body: 'Check your connection and try again, or open the full blog page.',
        link: true
      }, true);
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
  /* Log blog view as /blog/<slug> so Visitors tab shows real pages */
  try{
    var blogPath = b.slug ? ('/blog/' + b.slug) : ('/blog?id=' + id);
    if(typeof trackPath === 'function') trackPath(blogPath);
  }catch(e){}
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
/* Auto-open blog overlay for legacy #blog-<id> hash URLs on the homepage.
   /blog/<slug> is rewritten to blog.html (list + article view); that page
   loads the post from Supabase metadata + GitHub HTML itself. */
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
    /* Dynamic headline from live channel count (admin adds more → title updates) */
    (function(){
      var n = channels.length;
      var enPhrase = (n === 1) ? '1 channel' : (n + ' channels');
      var hiPhrase = (n === 1) ? '1 चैनल' : (n + ' चैनल');
      var enHtml = enPhrase + ', <span>one creator.</span>';
      var hiHtml = hiPhrase + ', <span>एक क्रिएटर।</span>';
      if(typeof EN !== 'undefined') EN.yt_h2 = enHtml;
      if(typeof HI !== 'undefined') HI.yt_h2 = hiHtml;
      var h2 = document.getElementById('ytHomeTitle');
      if(h2){
        var useHi = (typeof curLang !== 'undefined' && curLang === 'hi');
        h2.innerHTML = useHi ? hiHtml : enHtml;
      }
      var label = document.getElementById('ytChannelCountLabel');
      if(label) label.textContent = useHi ? hiPhrase : enPhrase;
    })();
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
/* Ensure converting plant calc runs when deep-linked or after load */
(function initConvPlantCalc(){
  function run(){
    try {
      if (typeof calcConvPlant === 'function') calcConvPlant();
    } catch(e) {}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){
      setTimeout(run, 100);
    });
  } else {
    setTimeout(run, 100);
  }
  /* Backup: bind input listeners in case oninput attributes fail */
  document.addEventListener('DOMContentLoaded', function(){
    var card = document.getElementById('calc-converting-capacity');
    if (!card) return;
    card.querySelectorAll('input').forEach(function(inp){
      inp.addEventListener('input', function(){ calcConvPlant(); });
      inp.addEventListener('change', function(){ calcConvPlant(); });
    });
  });
})();


/* ---- Min Manpower calculator (ported from ManPower app, simplified) ---- */
var _mmMachineDefaults = [
  { name: 'Printing', count: 2, perShift: 3 },
  { name: 'Lamination', count: 1, perShift: 2 },
  { name: 'Slitting', count: 2, perShift: 2 },
  { name: 'Pouching', count: 2, perShift: 2 }
];

function calcMinManpowerRebuildMachines(){
  var wrap = document.getElementById('mm-machines');
  if(!wrap) return;
  var n = Math.max(1, Math.min(8, parseInt((document.getElementById('mm-mtypes')||{}).value, 10) || 2));
  var existing = [];
  wrap.querySelectorAll('.mm-mc-row').forEach(function(row, i){
    existing[i] = {
      name: (row.querySelector('.mm-mc-name')||{}).value || '',
      count: (row.querySelector('.mm-mc-count')||{}).value || '1',
      perShift: (row.querySelector('.mm-mc-ps')||{}).value || '2'
    };
  });
  var html = '';
  for(var i=0; i<n; i++){
    var def = existing[i] || _mmMachineDefaults[i] || { name: 'Line-'+(i+1), count: 1, perShift: 2 };
    html += '<div class="calc-row c3 mm-mc-row" style="margin-bottom:6px">' +
      '<div class="calc-field"><label>Machine name</label><input type="text" class="mm-mc-name" value="'+String(def.name).replace(/"/g,'&quot;')+'" oninput="calcMinManpower()"></div>' +
      '<div class="calc-field"><label>Qty of machines</label><input type="number" class="mm-mc-count" value="'+def.count+'" min="0" oninput="calcMinManpower()"></div>' +
      '<div class="calc-field"><label>People / machine / shift</label><input type="number" class="mm-mc-ps" value="'+def.perShift+'" min="0" step="0.5" oninput="calcMinManpower()"></div>' +
      '</div>';
  }
  wrap.innerHTML = html;
  calcMinManpower();
}

function calcMinManpower(){
  try{
    var n = function(id){ var el=document.getElementById(id); return el ? parseFloat(el.value) : NaN; };
    var shifts = Math.max(1, n('mm-shifts')||1);
    var offs = Math.max(0, Math.min(3, n('mm-offs')||0));
    var run = Math.max(1, Math.min(7, n('mm-run')||7));
    var bufPct = Math.max(0, n('mm-buf')||0);
    var work = Math.max(1, run - offs);
    var relief = run / work;
    var buf = 1 + bufPct/100;

    var onDutyMachines = 0, machineUnits = 0;
    document.querySelectorAll('#mm-machines .mm-mc-row').forEach(function(row){
      var count = Math.max(0, parseFloat((row.querySelector('.mm-mc-count')||{}).value)||0);
      var ps = Math.max(0, parseFloat((row.querySelector('.mm-mc-ps')||{}).value)||0);
      onDutyMachines += count * ps;
      machineUnits += count;
    });
    var processMachines = Math.ceil(onDutyMachines * shifts * relief * buf);

    var eng = Math.max(0, n('mm-eng')||0);
    var sup = Math.max(0, n('mm-sup')||0);
    var other = Math.max(0, n('mm-other')||0);
    var processDesig = Math.ceil((eng + sup + other) * relief * buf);

    var engBase = Math.max(0, n('mm-engbase')||0);
    var engPer = Math.max(0, n('mm-engper')||0);
    var engOnDuty = engBase + machineUnits * engPer;
    var engineeringTotal = Math.ceil(engOnDuty * relief * buf);

    var processTotal = processMachines + processDesig;
    var grand = processTotal + engineeringTotal;

    var set = function(id, v){ var el=document.getElementById(id); if(el) el.textContent = v; };
    set('mm-relief', relief.toFixed(3));
    set('mm-res', isFinite(grand) ? String(grand) : '—');
    set('mm-proc', isFinite(processMachines) ? String(processMachines) : '—');
    set('mm-shared', isFinite(processDesig) ? String(processDesig) : '—');
    set('mm-engtot', isFinite(engineeringTotal) ? String(engineeringTotal) : '—');
    set('mm-detail',
      'Relief '+relief.toFixed(3)+' · Buffer '+(bufPct)+'% · On-duty machine crew/shift '+onDutyMachines.toFixed(1)+
      ' · Machine units '+machineUnits
    );
    set('mm-sub', 'Minimum headcount (rounded up)');
  }catch(err){
    console.error('calcMinManpower error:', err);
  }
}
window.calcMinManpower = calcMinManpower;
window.calcMinManpowerRebuildMachines = calcMinManpowerRebuildMachines;

(function initMinManpowerCalc(){
  function run(){
    try {
      if (typeof calcMinManpowerRebuildMachines === 'function') calcMinManpowerRebuildMachines();
    } catch(e) {}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(run, 120); });
  } else {
    setTimeout(run, 120);
  }
})();

/* ════════════════════════════════════════════════
   STICKY MENTORSHIP CTA (mobile)
   Shows after user scrolls past hero; hide when dismissed
   or when near the dedicated #mentorship section.
   ════════════════════════════════════════════════ */
(function(){
  var bar = document.getElementById('stickyMentor');
  var closeBtn = document.getElementById('stickyMentorClose');
  if(!bar) return;

  var dismissed = false;
  try { dismissed = sessionStorage.getItem('vks_sticky_mentor_dismissed') === '1'; } catch(e){}

  function nearMentorship(){
    var sec = document.getElementById('mentorship');
    if(!sec) return false;
    var r = sec.getBoundingClientRect();
    // Hide when the section is in or near the viewport
    return r.top < window.innerHeight * 0.85 && r.bottom > 80;
  }

  function update(){
    if(dismissed || nearMentorship()){
      bar.classList.remove('show');
      return;
    }
    // Show after scrolling ~380px (past hero on most phones)
    if(window.scrollY > 380){
      bar.classList.add('show');
    } else {
      bar.classList.remove('show');
    }
  }

  if(closeBtn){
    closeBtn.addEventListener('click', function(){
      dismissed = true;
      bar.classList.remove('show');
      try { sessionStorage.setItem('vks_sticky_mentor_dismissed', '1'); } catch(e){}
    });
  }

  window.addEventListener('scroll', update, {passive:true});
  window.addEventListener('resize', update, {passive:true});
  // Initial check
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', update);
  } else {
    update();
  }
})();

/* Floating WhatsApp button — show after modest scroll */
(function(){
  var btn = document.getElementById('floatWa');
  if(!btn) return;
  function update(){
    if(window.scrollY > 280){
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }
  window.addEventListener('scroll', update, {passive:true});
  update();
})();

/* Hero "Read more" toggle on mobile */
(function(){
  var btn = document.getElementById('heroToggle');
  var sub = document.querySelector('.hero-sub');
  if(!btn || !sub) return;
  btn.addEventListener('click', function(){
    sub.classList.add('expanded');
    btn.setAttribute('aria-expanded', 'true');
    btn.style.display = 'none';
  });
})();

/* ========== Career Journey – auto-load images from folders ==========
   Mobile-safe loader:
   - Prefer manifest.json (recommended)
   - Fallback probes only a small range, sequential, with early stop
   - Never floods the network with hundreds of parallel 404 Image requests
   - This was causing blank screens / layout collapse on mobile
*/
(function(){
  var COMPANIES = [
    { id: 'uflex',  folder: 'career-journey/uflex' },
    { id: 'jindal', folder: 'career-journey/jindal' },
    { id: 'gls',    folder: 'career-journey/gls' }
  ];
  // Prefer modern formats first; limit extensions to reduce probes
  var EXTS = ['webp', 'jpg', 'jpeg', 'png'];
  var MAX_NUM = 20;          // hard cap — do not probe beyond this
  var MAX_CONSEC_MISS = 4;   // stop after this many consecutive missing numbers
  var MAX_IMAGES = 24;       // safety cap on images rendered per company

  function parseDateFromName(name) {
    var m = name.match(/(20\d{2})[-_]?(\d{2})[-_]?(\d{2})/);
    if (m) return new Date(+m[1], +m[2] - 1, +m[3]).getTime();
    m = name.match(/(20\d{2})(\d{2})(\d{2})/);
    if (m) return new Date(+m[1], +m[2] - 1, +m[3]).getTime();
    return 0;
  }

  function probeImage(url) {
    return new Promise(function(resolve) {
      var img = new Image();
      var done = false;
      var finish = function(val) {
        if (done) return;
        done = true;
        resolve(val);
      };
      img.onload = function() { finish(url); };
      img.onerror = function() { finish(null); };
      // Timeout so a hanging request cannot block the chain
      setTimeout(function() { finish(null); }, 3500);
      img.src = url;
    });
  }

  // Try extensions for one number sequentially (stops at first hit)
  async function probeNumber(folder, n) {
    for (var e = 0; e < EXTS.length; e++) {
      var url = folder + '/' + n + '.' + EXTS[e];
      var hit = await probeImage(url);
      if (hit) return hit;
    }
    return null;
  }

  async function loadCompany(company) {
    var gallery = document.getElementById('gallery-' + company.id);
    if (!gallery) return;

    var found = [];

    // 1) Prefer manifest.json — zero probing, fastest & safest
    try {
      var res = await fetch(company.folder + '/manifest.json', { cache: 'no-cache' });
      if (res.ok) {
        var list = await res.json();
        if (Array.isArray(list) && list.length) {
          found = list.map(function(f) {
            return company.folder + '/' + (typeof f === 'string' ? f : (f.file || f.name || ''));
          }).filter(Boolean);
        }
      }
    } catch (e) { /* no manifest */ }

    // 2) Gentle sequential fallback (never Promise.all of hundreds of requests)
    if (!found.length) {
      var consecutiveMiss = 0;
      for (var i = 1; i <= MAX_NUM; i++) {
        var hit = await probeNumber(company.folder, i);
        if (hit) {
          found.push(hit);
          consecutiveMiss = 0;
        } else {
          consecutiveMiss++;
          if (consecutiveMiss >= MAX_CONSEC_MISS) break;
        }
      }
    }

    // Optional date sort (newest first) when filenames contain dates
    var hasDates = found.some(function(u) { return parseDateFromName(u.split('/').pop()) > 0; });
    if (hasDates) {
      found.sort(function(a, b) {
        return parseDateFromName(b.split('/').pop()) - parseDateFromName(a.split('/').pop());
      });
    }

    if (found.length > MAX_IMAGES) found = found.slice(0, MAX_IMAGES);

    if (!found.length) {
      // keep existing empty placeholder
      return;
    }

    // Show a lightweight loading state so layout does not jump from empty → full
    gallery.innerHTML = '<div class="cj-loading" aria-hidden="true"></div>';

    // Render images one by one so the main thread stays responsive on mobile
    gallery.innerHTML = '';
    found.forEach(function(url, idx) {
      var img = document.createElement('img');
      img.src = url;
      img.alt = company.id + ' photo ' + (idx + 1);
      img.loading = 'lazy';
      img.decoding = 'async';
      img.width = 200;
      img.height = 200;
      img.addEventListener('click', function() { openLightbox(url); });
      img.onerror = function() { this.style.display = 'none'; };
      gallery.appendChild(img);
    });
  }

  function openLightbox(src) {
    var box = document.getElementById('cjLightbox');
    if (!box) {
      box = document.createElement('div');
      box.id = 'cjLightbox';
      box.className = 'cj-lightbox';
      box.innerHTML = '<button type="button" class="cj-lightbox-close" aria-label="Close">&times;</button><img alt=""/>';
      document.body.appendChild(box);
      box.addEventListener('click', function(e) {
        if (e.target === box || e.target.classList.contains('cj-lightbox-close')) {
          box.classList.remove('open');
        }
      });
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') box.classList.remove('open');
      });
    }
    box.querySelector('img').src = src;
    box.classList.add('open');
  }

  function init() {
    // Stagger company loads slightly so mobile network is not saturated
    COMPANIES.forEach(function(company, idx) {
      setTimeout(function() { loadCompany(company); }, idx * 180);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


/* ════════════════════════════════════════════
   WHAT I OFFER — modal form + floating CTA
   ════════════════════════════════════════════ */
function openOfferForm(serviceName) {
  var modal = document.getElementById('offerModal');
  var svcEl = document.getElementById('offerModalService');
  var hidden = document.getElementById('oi_service');
  if (!modal || !svcEl || !hidden) return;
  var name = serviceName || 'General enquiry';
  svcEl.textContent = name;
  hidden.value = name;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(function () {
    var n = document.getElementById('oi_name');
    if (n) n.focus();
  }, 80);
}

function closeOfferForm() {
  var modal = document.getElementById('offerModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function submitOfferInterest(ev) {
  if (ev) ev.preventDefault();
  var hp = document.getElementById('oi_hp');
  if (hp && hp.value.trim() !== '') {
    closeOfferForm();
    return false;
  }
  var name = (document.getElementById('oi_name') || {}).value || '';
  var phone = (document.getElementById('oi_phone') || {}).value || '';
  var email = (document.getElementById('oi_email') || {}).value || '';
  var msg = (document.getElementById('oi_msg') || {}).value || '';
  var service = (document.getElementById('oi_service') || {}).value || 'General enquiry';
  name = name.trim();
  phone = phone.trim();
  email = email.trim();
  msg = msg.trim();
  if (!name) {
    alert(curLang === 'hi' ? 'कृपया अपना नाम भरें।' : 'Please enter your name.');
    return false;
  }
  if (!phone || phone.replace(/\D/g, '').length < 8) {
    alert(curLang === 'hi' ? 'कृपया मान्य मोबाइल नंबर भरें।' : 'Please enter a valid mobile number.');
    return false;
  }
  if (email) {
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!emailOk) {
      alert(curLang === 'hi' ? 'कृपया मान्य ईमेल भरें।' : 'Please enter a valid email address.');
      return false;
    }
  }
  var btn = document.getElementById('oi_submit');
  if (btn) {
    btn.disabled = true;
    btn.textContent = curLang === 'hi' ? 'भेजा जा रहा है…' : 'Sending…';
  }
  var payload = {
    name: name,
    email: email || (phone + '@whatsapp.placeholder'),
    phone: phone,
    category: service,
    title: service,
    description: msg || ('Interest in: ' + service)
  };
  if (typeof sb === 'undefined' || !sb) {
    console.error('Supabase client missing');
    alert(curLang === 'hi' ? 'कुछ गलत हुआ। कृपया फिर कोशिश करें।' : 'Something went wrong. Please try again.');
    if (btn) { btn.disabled = false; btn.textContent = 'Send Interest →'; }
    return false;
  }
  sb.from('app_requests').insert([payload]).then(function (res) {
    if (res.error) throw res.error;
    closeOfferForm();
    ['oi_name', 'oi_phone', 'oi_email', 'oi_msg'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.value = '';
    });
    var toast = document.getElementById('toast');
    if (toast) {
      toast.classList.add('show');
      setTimeout(function () { toast.classList.remove('show'); }, 4500);
    }
  }).catch(function (err) {
    console.error('Offer submit error:', err);
    alert(curLang === 'hi' ? 'कुछ गलत हुआ। कृपया फिर कोशिश करें।' : 'Something went wrong. Please try again.');
  }).finally(function () {
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Send Interest →';
    }
  });
  return false;
}

/* FAB: show after scroll, hide near footer to avoid overlap */
(function initOfferFab() {
  function syncStickyMentorClass() {
    var bar = document.getElementById('stickyMentor');
    var showing = !!(bar && bar.classList.contains('show') && getComputedStyle(bar).display !== 'none');
    document.body.classList.toggle('sticky-mentor-visible', showing);
  }
  function updateFab() {
    var fab = document.getElementById('offerFab');
    if (!fab) return;
    syncStickyMentorClass();
    var y = window.scrollY || document.documentElement.scrollTop;
    var nearFooter = false;
    var footer = document.querySelector('footer');
    if (footer) {
      var fr = footer.getBoundingClientRect();
      nearFooter = fr.top < window.innerHeight - 40;
    }
    if (y > 380 && !nearFooter) fab.classList.add('visible');
    else fab.classList.remove('visible');
  }
  window.addEventListener('scroll', updateFab, { passive: true });
  window.addEventListener('resize', updateFab, { passive: true });
  document.addEventListener('DOMContentLoaded', updateFab);
  // Watch sticky mentor show/hide
  var bar = document.getElementById('stickyMentor');
  if (bar && typeof MutationObserver !== 'undefined') {
    new MutationObserver(updateFab).observe(bar, { attributes: true, attributeFilter: ['class', 'style'] });
  }
  var closeBtn = document.getElementById('stickyMentorClose');
  if (closeBtn) closeBtn.addEventListener('click', function(){ setTimeout(updateFab, 50); });
  updateFab();
})();

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeOfferForm();
});


/* ============================================================
   Live Mentor rates — same Firebase source as mentor.vkstech.com
   Keeps website prices in sync when admin changes rates.
   ============================================================ */
(function loadLiveMentorRates() {
  var FALLBACK = { career_ai: 699, packaging: 799 };
  var url = 'https://mentor-vkstech-default-rtdb.asia-southeast1.firebasedatabase.app/mentor_settings/tracks.json';

  function formatRate(rate, format) {
    var n = Number(rate);
    if (!isFinite(n) || n <= 0) return null;
    var formatted = '₹' + n.toLocaleString('en-IN');
    if (format === 'short') return formatted + '/hr';
    return formatted + ' <small>/ hour</small>';
  }

  function applyRates(career, pack) {
    document.querySelectorAll('[data-rate-career]').forEach(function (el) {
      var fmt = el.getAttribute('data-rate-format') || 'full';
      var text = formatRate(career, fmt);
      if (text) el.innerHTML = text;
    });
    document.querySelectorAll('[data-rate-pack]').forEach(function (el) {
      var fmt = el.getAttribute('data-rate-format') || 'full';
      var text = formatRate(pack, fmt);
      if (text) el.innerHTML = text;
    });
  }

  // Apply fallbacks immediately so UI never shows blank
  applyRates(FALLBACK.career_ai, FALLBACK.packaging);

  fetch(url, { method: 'GET', mode: 'cors', cache: 'no-store' })
    .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
    .then(function (o) {
      if (!o || typeof o !== 'object') return;
      var career = (o.career_ai && o.career_ai.hourlyRate) || FALLBACK.career_ai;
      var pack = (o.packaging && o.packaging.hourlyRate) || FALLBACK.packaging;
      applyRates(career, pack);
    })
    .catch(function (err) {
      console.warn('Mentor rates fetch failed, using fallbacks:', err);
    });
})();
