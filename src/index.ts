import {
  getStartOfToday as getStartOfTodayWithMoment,
  isSameDay as isSameDayMoment,
} from "./moment-implementation";
import {
  getStartOfToday as getStartOfTodayWithLuxon,
  isSameDay as isSameDayLuxon,
} from "./luxon-implementation";
import {
  getStartOfToday as getStartOfTodayWithDateFns,
  isSameDay as isSameDayFns,
} from "./date-fns-implementation";

const utcOffset = 4;
const now = new Date();

// Task 1: print start of today for UTC+4 in UTC time

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

// Task 2: are they in same day
const isoTime1 = new Date("2020-11-01T00:00:00-01:00");
const isoTime2 = new Date("2020-11-02T00:00:00+01:00");

console.log({
  isoTime1: isoTime1.toISOString(),
  isoTime2: isoTime2.toISOString(),
});

const table: Array<{
  offset: number;
  luxon: boolean;
  moment: boolean;
  dateFns: boolean;
}> = [];
for (let offset = -12; offset < 12; offset++) {
  table.push({
    offset,
    luxon: isSameDayLuxon(isoTime1, isoTime2, offset),
    moment: isSameDayMoment(isoTime1, isoTime2, offset),
    dateFns: isSameDayFns(isoTime1, isoTime2, offset),
  });
}

console.table(table);
