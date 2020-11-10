import { DateTime } from "luxon";

function formatUTCOffset(offsetInNumber: number): string {
  return offsetInNumber === 0
    ? "UTC"
    : offsetInNumber > 0
    ? `UTC+${offsetInNumber}`
    : `UTC${offsetInNumber}`;
}

export const getStartOfToday = (now: Date, utcOffset: number): string =>
  DateTime.fromJSDate(now)
    .setZone(formatUTCOffset(utcOffset))
    .startOf("day")
    .setZone("utc")
    .toISO();

export const isSameDay = (
  time1: Date,
  time2: Date,
  utcOffset: number
): boolean =>
  DateTime.fromJSDate(time1)
    .setZone(formatUTCOffset(utcOffset))
    .hasSame(DateTime.fromJSDate(time2), "day");
