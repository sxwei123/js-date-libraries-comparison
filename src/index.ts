import { getStartOfToday as getStartOfTodayWithMoment } from "./moment-implementation";
import { getStartOfToday as getStartOfTodayWithLuxon } from "./luxon-implementation";
import { getStartOfToday as getStartOfTodayWithDateFns } from "./date-fns-implementation";

// Task: print start of today for UTC+4

const utcOffset = 4;
const now = new Date();

// Luxon implementation
const startOfTodayLuxon = getStartOfTodayWithLuxon(now, utcOffset);

// momentjs implementation
const startOfTodayMoment = getStartOfTodayWithMoment(now, utcOffset);

// date-fns implementation
const startOfTodayDateFns = getStartOfTodayWithDateFns(now, utcOffset);

console.table([
  ["Luxon", startOfTodayLuxon],
  ["Moment.js", startOfTodayMoment],
  ["date-fns-tz", startOfTodayDateFns],
]);
