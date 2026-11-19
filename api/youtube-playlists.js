/**
 * YouTube playlists for a channel (Data API v3).
 * Requires env YOUTUBE_API_KEY.
 *
 * GET /api/youtube-playlists?limit=20
 * GET /api/youtube-playlists?channelId=UCxxxx&limit=20
 */

const DEFAULT_CHANNEL_ID = 'UCSJiDqOZiwIQBBsXjxFwSSg';
const DEFAULT_LIMIT = 25;
const MAX_LIMIT = 50;

function json(res, status, body, cacheSeconds) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (cacheSeconds && status === 200) {
    res.setHeader('Cache-Control', `public, s-maxage=${cacheSeconds}, stale-while-revalidate=7200`);
  } else {
    res.setHeader('Cache-Control', 'no-store');
  }
  res.end(JSON.stringify(body));
}

function pickThumb(snippet) {
  const t = (snippet && snippet.thumbnails) || {};
  const best = t.high || t.medium || t.default || t.standard || t.maxres;
  return best && best.url ? best.url : '';
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    return res.end();
  }

  try {
    const key = process.env.YOUTUBE_API_KEY || '';
    if (!key) {
      return json(res, 503, {
        ok: false,
        error: 'YOUTUBE_API_KEY not configured on server',
        needsKey: true
      });
    }

    const q = req.query || {};
    const channelId = String(q.channelId || q.channel || DEFAULT_CHANNEL_ID).trim() || DEFAULT_CHANNEL_ID;
    let limit = parseInt(q.limit, 10);
    if (!Number.isFinite(limit) || limit < 1) limit = DEFAULT_LIMIT;
    if (limit > MAX_LIMIT) limit = MAX_LIMIT;

    const playlists = [];
    let pageToken = '';
    let guard = 0;

    while (playlists.length < limit && guard < 5) {
      guard++;
      const params = new URLSearchParams({
        part: 'snippet,contentDetails',
        channelId,
        maxResults: String(Math.min(50, limit - playlists.length)),
        key
      });
      if (pageToken) params.set('pageToken', pageToken);

      const url = 'https://www.googleapis.com/youtube/v3/playlists?' + params.toString();
      const r = await fetch(url);
      const data = await r.json();
      if (!r.ok) {
        const msg = (data && data.error && data.error.message) || ('YouTube API ' + r.status);
        return json(res, r.status === 403 ? 403 : 502, {
          ok: false,
          error: msg,
          code: data && data.error && data.error.errors && data.error.errors[0] && data.error.errors[0].reason
        });
      }

      (data.items || []).forEach(function (item) {
        const sn = item.snippet || {};
        const cd = item.contentDetails || {};
        playlists.push({
          id: item.id,
          title: sn.title || 'Untitled playlist',
          description: sn.description || '',
          thumbnail: pickThumb(sn),
          itemCount: cd.itemCount != null ? Number(cd.itemCount) : null,
          publishedAt: sn.publishedAt || '',
          url: 'https://www.youtube.com/playlist?list=' + item.id
        });
      });

      pageToken = data.nextPageToken || '';
      if (!pageToken) break;
    }

    return json(res, 200, {
      ok: true,
      channelId,
      count: playlists.length,
      playlists: playlists.slice(0, limit)
    }, 3600);
  } catch (err) {
    console.error('youtube-playlists error', err);
    return json(res, 500, { ok: false, error: err.message || String(err) });
  }
};
