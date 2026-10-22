import { FARM_ID, normalizeHelps, getMonthlyHelpers } from "./monthlyHelpers";
const entry = (day, type = "help", id = "1") => ({
  type, sender: { id, username: "Farmer" }, recipient: { id: FARM_ID },
  createdAt: Date.parse(day)
});
test("filters cheers, other farms, and duplicate events", () => {
  const help = entry("2026-10-01T00:00:00Z");
  expect(normalizeHelps({ data: { feed: [help, help, entry("2026-10-02", "cheer"), { ...help, recipient: { id: "other" } }] } })).toEqual([help]);
});
test("month boundaries, duplicate-day streaks, missed days and future events", () => {
  const feed = ["2026-09-30", "2026-10-01", "2026-10-02", "2026-10-02T12:00:00Z", "2026-10-04", "2026-11-01"].map(day => entry(day));
  const result = getMonthlyHelpers(feed, "2026-10", Date.parse("2026-10-05T12:00:00Z"));
  expect(result.leaderboard[0]).toMatchObject({ helps: 4, days: 3, best: 2, current: 1 });
  expect(getMonthlyHelpers(feed, "2026-10", Date.parse("2026-10-06")).leaderboard[0].current).toBe(0);
});
test("leap month ends and streak resets at the first", () => {
  const feed = ["2024-01-31", "2024-02-01", "2024-02-28", "2024-02-29", "2024-03-01"].map(day => entry(day));
  const result = getMonthlyHelpers(feed, "2024-02", Date.parse("2024-03-05"));
  expect(result.leaderboard[0]).toMatchObject({ helps: 3, best: 2, current: 2 });
  expect(result.end).toBe(Date.parse("2024-03-01"));
});
test("today's help extends yesterday's streak", () => {
  const feed = ["2026-10-01", "2026-10-02", "2026-10-03"].map(day => entry(day));
  expect(getMonthlyHelpers(feed, "2026-10", Date.parse("2026-10-03T12:00:00Z")).leaderboard[0].current).toBe(3);
});
