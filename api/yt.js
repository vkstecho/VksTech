// Serverless function: YouTube playlist short-URL redirect
// URL pattern: /<channelSlug>/<playlistSlug>
//   e.g. vkstech.com/ToonTales/KushhaliNagriKaSafar
// Looks up the playlist in Supabase → 302-redirects to the long YouTube URL.
//
// If the channel or playlist is not found, redirects to /youtube (the
// public channels page) rather than showing an ugly error.

const SUPABASE_URL = 'https://hozqkfvusazdneockkxf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvenFrZnZ1c2F6ZG5lb2Nra3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5MjM3ODIsImV4cCI6MjA5MTQ5OTc4Mn0.OFFqme0Ov8BBieN75xDIv5-UeBrddFl-GUr_-8aL1yY';
const SITE_URL = 'https://vkstech.com';

// Small helper for Supabase REST queries
async function sbQuery(path) {
  const r = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + SUPABASE_ANON_KEY
    }
  });
  if (!r.ok) return null;
  return r.json();
}

module.exports = async (req, res) => {
  try {
    // Vercel passes the matched params via the rewrite.
    // We accept both ?channel=&playlist= (from vercel.json rewrite)
    // and parsing from the raw URL as a fallback.
    let channelSlug = '';
    let playlistSlug = '';

    if (req.query && req.query.channel) {
      channelSlug = String(req.query.channel || '').trim();
      playlistSlug = String(req.query.playlist || '').trim();
    } else {
      // Fallback: parse from path
      const urlPath = (req.url || '').split('?')[0];
      const parts = urlPath.split('/').filter(Boolean);
      channelSlug = parts[0] || '';
      playlistSlug = parts[1] || '';
    }

    if (!channelSlug || !playlistSlug) {
      res.writeHead(302, { Location: SITE_URL + '/youtube' });
      return res.end();
    }

    // 1. Find the channel by slug (case-insensitive match)
    const channels = await sbQuery(
      `youtube_channels?slug=ilike.${encodeURIComponent(channelSlug)}&select=id,slug`
    );
    if (!channels || channels.length === 0) {
      // Not one of our channels — could be a different route. Send to /youtube.
      res.writeHead(302, { Location: SITE_URL + '/youtube' });
      return res.end();
    }
    const channelId = channels[0].id;

    // 2. Find the playlist by channel + slug
    const playlists = await sbQuery(
      `youtube_playlists?channel_id=eq.${channelId}` +
      `&slug=ilike.${encodeURIComponent(playlistSlug)}` +
      `&select=long_url`
    );
    if (!playlists || playlists.length === 0 || !playlists[0].long_url) {
      // Channel exists but playlist not found — send to /youtube
      res.writeHead(302, { Location: SITE_URL + '/youtube' });
      return res.end();
    }

    // 3. Redirect to the real YouTube playlist URL
    res.writeHead(302, { Location: playlists[0].long_url });
    return res.end();

  } catch (err) {
    // On any error, fail gracefully to the channels page
    res.writeHead(302, { Location: SITE_URL + '/youtube' });
    return res.end();
  }
};
