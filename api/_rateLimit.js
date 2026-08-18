// In-memory sliding window rate limiter for Vercel Edge Runtime
const ipHits = new Map();
const userHits = new Map();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 15; // 15 requests per minute

function cleanupOldHits(map, now) {
  for (const [key, timestamps] of map.entries()) {
    const valid = timestamps.filter(t => now - t < WINDOW_MS);
    if (valid.length === 0) {
      map.delete(key);
    } else {
      map.set(key, valid);
    }
  }
}

/**
 * Checks if request exceeds rate limit.
 * Returns { allowed: boolean, remaining: number, retryAfter: number }
 */
export function checkRateLimit(req, userId = null) {
  const now = Date.now();
  
  // Cleanup occasionally
  if (Math.random() < 0.05) {
    cleanupOldHits(ipHits, now);
    cleanupOldHits(userHits, now);
  }

  // 1. Check User ID limit
  if (userId) {
    const userTimestamps = (userHits.get(userId) || []).filter(t => now - t < WINDOW_MS);
    if (userTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
      const oldest = userTimestamps[0];
      const retryAfter = Math.ceil((oldest + WINDOW_MS - now) / 1000);
      return { allowed: false, remaining: 0, retryAfter: Math.max(1, retryAfter) };
    }
    userTimestamps.push(now);
    userHits.set(userId, userTimestamps);
  }

  // 2. Check IP limit
  let ip = 'unknown';
  if (req && typeof req.headers?.get === 'function') {
    ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  } else if (req && req.headers) {
    ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
  }
  const clientIp = ip.split(',')[0].trim();

  const ipTimestamps = (ipHits.get(clientIp) || []).filter(t => now - t < WINDOW_MS);
  if (ipTimestamps.length >= MAX_REQUESTS_PER_WINDOW * 2) {
    const oldest = ipTimestamps[0];
    const retryAfter = Math.ceil((oldest + WINDOW_MS - now) / 1000);
    return { allowed: false, remaining: 0, retryAfter: Math.max(1, retryAfter) };
  }
  ipTimestamps.push(now);
  ipHits.set(clientIp, ipTimestamps);

  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - (userId ? (userHits.get(userId)?.length || 0) : ipTimestamps.length), retryAfter: 0 };
}
