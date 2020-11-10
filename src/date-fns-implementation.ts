import { isSameDay as isSameDayFns, startOfDay } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

// TODO: Fix this implementation

function formatUtcOffset(offset: number): string {
  const padded = Math.abs(offset).toString().padStart(2, "0");
  return `${offset < 0 ? "-" : "+"}${padded}:00`;
}

export const getStartOfToday = (now: Date, utcOffset: number): string =>
  startOfDay(utcToZonedTime(now, formatUtcOffset(utcOffset))).toISOString();

export const isSameDay = (
  time1: Date,
  time2: Date,
  utcOffset: number
): boolean =>
  isSameDayFns(
    utcToZonedTime(time1, formatUtcOffset(utcOffset)),
    utcToZonedTime(time2, formatUtcOffset(utcOffset))
  );
