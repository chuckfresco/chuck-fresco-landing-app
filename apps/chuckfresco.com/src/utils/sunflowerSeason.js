const seasonTimeZone = "America/Los_Angeles";
const seasonResetHour = 17;
const seasonWeekMs = 7 * 24 * 60 * 60 * 1000;

// Winter began Sunday, July 19, 2026 at 5:00 PM Pacific Time.
const seasonAnchorLocalTime = Date.UTC(2026, 6, 19, seasonResetHour);
const seasonRotation = ["winter", "spring", "summer", "autumn"];

const pacificDateTimeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: seasonTimeZone,
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hourCycle: "h23"
});

const getPacificDateTimeParts = date => (
  pacificDateTimeFormatter.formatToParts(date).reduce((parts, part) => {
    if (part.type !== "literal") parts[part.type] = Number(part.value);
    return parts;
  }, {})
);

const pacificDateTimeToUtc = localTime => {
  let utcTime = localTime;

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const parts = getPacificDateTimeParts(new Date(utcTime));
    const representedLocalTime = Date.UTC(
      parts.year,
      parts.month - 1,
      parts.day,
      parts.hour,
      parts.minute,
      parts.second
    );
    utcTime += localTime - representedLocalTime;
  }

  return utcTime;
};

export const getSunflowerSeasonClock = (now = new Date()) => {
  const parts = getPacificDateTimeParts(now);
  const currentPacificWallTime = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour,
    parts.minute,
    parts.second
  );
  const resetIndex = Math.floor((currentPacificWallTime - seasonAnchorLocalTime) / seasonWeekMs);
  const seasonIndex = ((resetIndex % seasonRotation.length) + seasonRotation.length) % seasonRotation.length;
  const nextResetLocalTime = seasonAnchorLocalTime + ((resetIndex + 1) * seasonWeekMs);

  return {
    seasonId: seasonRotation[seasonIndex],
    nextResetAt: pacificDateTimeToUtc(nextResetLocalTime)
  };
};

export const formatSeasonCountdown = milliseconds => {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
};
