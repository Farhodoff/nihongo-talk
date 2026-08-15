export const config = {
  runtime: 'edge',
};

/**
 * SM-2 Algorithm calculation
 * Quality: 0 (Blackout) to 5 (Perfect recall)
 */
function calculateSM2(quality, repetitions = 0, interval = 1, easeFactor = 2.5) {
  const q = Math.max(0, Math.min(5, Number(quality) || 0));
  let newRepetitions = Number(repetitions) || 0;
  let newInterval = Number(interval) || 1;
  let newEaseFactor = Number(easeFactor) || 2.5;

  if (q >= 3) {
    if (newRepetitions === 0) {
      newInterval = 1;
    } else if (newRepetitions === 1) {
      newInterval = 6;
    } else {
      newInterval = Math.round(newInterval * newEaseFactor);
    }
    newRepetitions += 1;
  } else {
    newRepetitions = 0;
    newInterval = 1;
  }

  // Update Ease Factor (min 1.3)
  newEaseFactor = newEaseFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (newEaseFactor < 1.3) {
    newEaseFactor = 1.3;
  }

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + newInterval);

  return {
    repetitions: newRepetitions,
    interval: newInterval,
    easeFactor: Math.round(newEaseFactor * 100) / 100,
    nextReviewDate: nextDate.toISOString(),
    dueInDays: newInterval,
  };
}

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  let quality, repetitions, interval, easeFactor;

  if (req.method === 'GET') {
    const url = new URL(req.url);
    quality = url.searchParams.get('quality');
    repetitions = url.searchParams.get('repetitions');
    interval = url.searchParams.get('interval');
    easeFactor = url.searchParams.get('easeFactor');
  } else if (req.method === 'POST') {
    try {
      const body = await req.json();
      quality = body.quality;
      repetitions = body.repetitions;
      interval = body.interval;
      easeFactor = body.easeFactor;
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }
  } else {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  if (quality === undefined || quality === null) {
    return new Response(JSON.stringify({ error: 'Please provide a "quality" (0 to 5).' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const result = calculateSM2(quality, repetitions, interval, easeFactor);

  return new Response(JSON.stringify({ success: true, data: result }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
