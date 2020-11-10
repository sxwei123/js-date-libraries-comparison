import moment from "moment";

export const getStartOfToday = (now: Date, utcOffset: number): string =>
  moment(now).utcOffset(utcOffset).startOf("day").toISOString();
