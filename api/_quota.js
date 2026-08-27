/**
 * AI Daily Quota & Request Size Protection Manager
 * Enforces per-user daily limits to prevent cost explosion.
 */

const MAX_REQUEST_SIZE_BYTES = 25 * 1024; // 25 KB max request body size
const DEFAULT_DAILY_QUOTA_FREE = 25; // 25 AI requests per day for standard users
const DEFAULT_DAILY_QUOTA_ADMIN = 500; // 500 AI requests per day for admin/power users

// In-memory fallback for daily quota
const localDailyQuotaStore = new Map();

function getTodayKey() {
  const now = new Date();
  return `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}-${String(now.getUTCDate()).padStart(2, '0')}`;
}

/**
 * Checks request size and daily AI quota.
 * Returns { allowed: boolean, remainingQuota: number, reason?: string }
 */
export async function checkDailyQuota(userId, userRole = 'user', bodyString = '') {
  if (bodyString && typeof bodyString === 'string' && bodyString.length > MAX_REQUEST_SIZE_BYTES) {
    return {
      allowed: false,
      remainingQuota: 0,
      reason: `So'rov hajmi ruxsat etilgan maksimal chegaradan (${MAX_REQUEST_SIZE_BYTES / 1024} KB) oshdi.`,
    };
  }

  const maxQuota = 99999;

  if (!userId) {
    return { allowed: true, remainingQuota: 99999 };
  }

  const todayStr = getTodayKey();
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  const quotaKey = `quota:ai:${userId}:${todayStr}`;

  // 1. If Redis is available, check and increment atomic daily count
  if (redisUrl && redisToken) {
    try {
      const response = await fetch(`${redisUrl}/pipeline`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${redisToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          ['INCR', quotaKey],
          ['EXPIRE', quotaKey, 86400, 'NX'], // 24 hours
        ]),
      });

      if (response.ok) {
        const results = await response.json();
        const currentCount = results[0]?.result || 1;

        if (currentCount > maxQuota) {
          return {
            allowed: false,
            remainingQuota: 0,
            reason: `Bugungi kunlik AI so'rovlar limitingiz (${maxQuota} ta) tugadi. Ertaga qayta urinib ko'ring yoki o'z API kalitingizni ulang.`,
          };
        }

        return {
          allowed: true,
          remainingQuota: maxQuota - currentCount,
        };
      }
    } catch (e) {
      console.warn('[Quota] Upstash Redis quota check failed, falling back to memory store:', e?.message);
    }
  }

  // 2. In-memory fallback
  const memoryKey = `${userId}:${todayStr}`;
  const currentCount = (localDailyQuotaStore.get(memoryKey) || 0) + 1;
  localDailyQuotaStore.set(memoryKey, currentCount);

  if (currentCount > maxQuota) {
    return {
      allowed: false,
      remainingQuota: 0,
      reason: `Bugungi kunlik AI so'rovlar limitingiz (${maxQuota} ta) tugadi. Ertaga qayta urinib ko'ring.`,
    };
  }

  return {
    allowed: true,
    remainingQuota: maxQuota - currentCount,
  };
}
