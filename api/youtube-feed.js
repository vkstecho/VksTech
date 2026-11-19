/**
 * YouTube channel video feed.
 *
 * GET /api/youtube-feed?limit=12          → first 12 (RSS, no key needed)
 * GET /api/youtube-feed?all=1             → all public uploads (needs YOUTUBE_API_KEY)
 * GET /api/youtube-feed?channelId=UCxxx
 *
 * Default channel: WorkoHolic VKS Tech (UCSJiDqOZiwIQBBsXjxFwSSg)
 */

const DEFAULT_CHANNEL_ID = 'UCSJiDqOZiwIQBBsXjxFwSSg';
const DEFAULT_LIMIT = 12;
const MAX_ALL = 300; // safety cap per request

function json(res, status, body, cacheSeconds) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (cacheSeconds && status === 200) {
    res.setHeader('Cache-Control', `public, s-maxage=${cacheSeconds}, stale-while-revalidate=3600`);
  } else {
    res.setHeader('Cache-Control', 'no-store');
  }
  res.end(JSON.stringify(body));
}

function decodeXml(s) {
  return String(s || '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function extractTag(block, tag) {
  const re = new RegExp('<' + tag + '[^>]*>([\\s\\S]*?)</' + tag + '>', 'i');
  const m = block.match(re);
  return m ? decodeXml(m[1].trim()) : '';
}

function extractAttr(block, tag, attr) {
  const re = new RegExp('<' + tag + '[^>]*\\s' + attr + '=["\']([^"\']+)["\']', 'i');
  const m = block.match(re);
  return m ? decodeXml(m[1]) : '';
}

function parseRss(xml) {
  const entries = [];
  const parts = xml.split(/<entry>/i);
  for (let i = 1; i < parts.length; i++) {
    const block = parts[i].split(/<\/entry>/i)[0];
    let videoId = extractTag(block, 'yt:videoId');
    if (!videoId) {
      const id = extractTag(block, 'id');
      const m = id.match(/yt:video:(.+)$/);
      if (m) videoId = m[1];
    }
    if (!videoId) continue;

    const title = extractTag(block, 'title') || extractTag(block, 'media:title') || 'Untitled';
    const published = extractTag(block, 'published') || '';
    let thumb = extractAttr(block, 'media:thumbnail', 'url');
    if (!thumb) thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    thumb = thumb.replace(/\/default\.jpg$/i, '/hqdefault.jpg');

    entries.push({
      id: videoId,
      title,
      thumbnail: thumb,
      publishedAt: published,
      url: `https://www.youtube.com/watch?v=${videoId}`
    });
  }
  return entries;
}

/** Uploads playlist id: UC… → UU… */
function uploadsPlaylistId(channelId) {
  if (!channelId || channelId.length < 3) return '';
  if (channelId.indexOf('UC') === 0) return 'UU' + channelId.slice(2);
  return '';
}

function pickThumb(snippet) {
  const t = (snippet && snippet.thumbnails) || {};
  const best = t.high || t.medium || t.default || t.standard || t.maxres;
  return best && best.url ? best.url : '';
}

async function fetchAllViaApi(channelId, apiKey) {
  const playlistId = uploadsPlaylistId(channelId);
  if (!playlistId) throw new Error('Could not derive uploads playlist id');

  const videos = [];
  let pageToken = '';
  let guard = 0;

  while (videos.length < MAX_ALL && guard < 20) {
    guard++;
    const params = new URLSearchParams({
      part: 'snippet,contentDetails',
      playlistId,
      maxResults: '50',
      key: apiKey
    });
    if (pageToken) params.set('pageToken', pageToken);

    const r = await fetch('https://www.googleapis.com/youtube/v3/playlistItems?' + params.toString());
    const data = await r.json();
    if (!r.ok) {
      const msg = (data && data.error && data.error.message) || ('YouTube API ' + r.status);
      const err = new Error(msg);
      err.status = r.status;
      err.code = data && data.error && data.error.errors && data.error.errors[0] && data.error.errors[0].reason;
      throw err;
    }

    (data.items || []).forEach(function (item) {
      const sn = item.snippet || {};
      const cd = item.contentDetails || {};
      const videoId = cd.videoId || (sn.resourceId && sn.resourceId.videoId) || '';
      if (!videoId) return;
      if (sn.title === 'Private video' || sn.title === 'Deleted video') return;
      videos.push({
        id: videoId,
        title: sn.title || 'Untitled',
        thumbnail: pickThumb(sn) || ('https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg'),
        publishedAt: sn.publishedAt || cd.videoPublishedAt || '',
        url: 'https://www.youtube.com/watch?v=' + videoId
      });
    });

    pageToken = data.nextPageToken || '';
    if (!pageToken) break;
  }

  return videos.slice(0, MAX_ALL);
}

async function fetchRss(channelId, limit) {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`;
  const r = await fetch(feedUrl, {
    headers: {
      'User-Agent': 'vkstech-youtube-feed/1.0',
      Accept: 'application/atom+xml, application/xml, text/xml, */*'
    }
  });
  if (!r.ok) throw new Error('YouTube feed unavailable: ' + r.status);
  const xml = await r.text();
  return parseRss(xml).slice(0, limit);
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    return res.end();
  }

  try {
    const q = req.query || {};
    const channelId = String(q.channelId || q.channel || DEFAULT_CHANNEL_ID).trim() || DEFAULT_CHANNEL_ID;
    const wantAll = q.all === '1' || q.all === 'true' || q.all === 'yes';
    let limit = parseInt(q.limit, 10);
    if (!Number.isFinite(limit) || limit < 1) limit = DEFAULT_LIMIT;

    if (!/^UC/i.test(channelId)) {
      return json(res, 400, { ok: false, error: 'Invalid channelId (expected UCxxxxx)' });
    }

    const apiKey = process.env.YOUTUBE_API_KEY || '';

    if (wantAll) {
      if (!apiKey) {
        return json(res, 503, {
          ok: false,
          error: 'YOUTUBE_API_KEY required to load all videos',
          needsKey: true
        });
      }
      try {
        const videos = await fetchAllViaApi(channelId, apiKey);
        return json(res, 200, {
          ok: true,
          channelId,
          all: true,
          count: videos.length,
          hasMore: false,
          videos
        }, 1800);
      } catch (e) {
        return json(res, e.status === 403 ? 403 : 502, {
          ok: false,
          error: e.message || String(e),
          code: e.code
        });
      }
    }

    const videos = await fetchRss(channelId, Math.min(limit, 15));
    const hasMore = videos.length >= 12;
    return json(res, 200, {
      ok: true,
      channelId,
      all: false,
      count: videos.length,
      hasMore,
      videos
    }, 1800);
  } catch (err) {
    console.error('youtube-feed error', err);
    return json(res, 500, { ok: false, error: err.message || String(err) });
  }
};
