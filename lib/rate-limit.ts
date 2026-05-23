const requests = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

export function rateLimit(ip: string): { ok: boolean; remaining: number } {
  const now = Date.now();
  const record = requests.get(ip);

  if (!record || now > record.resetAt) {
    requests.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, remaining: MAX_REQUESTS - 1 };
  }

  if (record.count >= MAX_REQUESTS) {
    return { ok: false, remaining: 0 };
  }

  record.count++;
  return { ok: true, remaining: MAX_REQUESTS - record.count };
}

// Periodic cleanup to prevent memory leaks in long-running servers
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of requests) {
      if (now > record.resetAt) {
        requests.delete(ip);
      }
    }
  }, WINDOW_MS);
}
