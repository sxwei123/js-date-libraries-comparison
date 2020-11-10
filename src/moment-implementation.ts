import moment from "moment";

export const getStartOfToday = (now: Date, utcOffset: number): string =>
  moment(now).utcOffset(utcOffset).startOf("day").toISOString();

export const isSameDay = (
  time1: Date,
  time2: Date,
  utcOffset: number
): boolean => moment(time1).utcOffset(utcOffset).isSame(time2, "day");
