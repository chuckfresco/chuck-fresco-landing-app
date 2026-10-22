export const DAY_MS = 86400000;
export const FARM_ID = "7089202106478272";
export const normalizeHelps = payload => {
  const feed = Array.isArray(payload) ? payload : payload?.feed || payload?.data?.feed;
  if (!Array.isArray(feed)) throw new Error("Invalid help snapshot");
  const seen = new Set();
  return feed.filter(item => {
    if (item.type !== "help" || String(item.recipient?.id) !== FARM_ID ||
        !item.sender?.id || !Number.isFinite(Number(item.createdAt))) return false;
    const key = [item.sender.id, item.createdAt].join(":");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
};

export const getMonthlyHelpers = (feed, month, now = Date.now()) => {
  const start = Date.parse(month + "-01T00:00:00Z");
  const date = new Date(start);
  const end = Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 1);
  const activity = feed.filter(item => item.createdAt >= start && item.createdAt < end && item.createdAt <= now);
  const players = new Map();
  activity.forEach(item => {
    const id = String(item.sender.id);
    if (!players.has(id)) players.set(id, { id, name: item.sender.username || "Unknown", helps: 0, days: new Set() });
    const player = players.get(id);
    player.helps++;
    player.days.add(Math.floor(Number(item.createdAt) / DAY_MS));
  });
  const today = Math.floor(now / DAY_MS);
  const ended = now >= end;
  const leaderboard = Array.from(players.values()).map(player => {
    const days = Array.from(player.days).sort((a, b) => a - b);
    let best = 0, run = 0, previous;
    days.forEach(day => {
      run = day === previous + 1 ? run + 1 : 1;
      best = Math.max(best, run);
      previous = day;
    });
    let current = 0;
    let cursor = ended ? Math.floor(end / DAY_MS) - 1 : player.days.has(today) ? today : today - 1;
    while (player.days.has(cursor)) { current++; cursor--; }
    return { ...player, days: days.length, best, current };
  }).sort((a, b) => b.helps - a.helps || b.best - a.best || a.name.localeCompare(b.name));
  return { activity, leaderboard, start, end, ended };
};
