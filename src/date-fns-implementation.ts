import { startOfDay } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

// TODO: Fix this implementation

function formatUtcOffset(offset: number): string {
  const padded = Math.abs(offset).toString().padStart(2, "0");
  return `${offset < 0 ? "-" : "+"}${padded}:00`;
}

export const getStartOfToday = (now: Date, utcOffset: number): string =>
  startOfDay(utcToZonedTime(now, formatUtcOffset(utcOffset))).toISOString();
