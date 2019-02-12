// eslint-disable-next-line no-extend-native
Date.prototype.addDays = function f(days) {
  this.setDate(this.getDate() + days);
};

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday',
  'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const ordinal = ['1st', '2nd', '3rd', '4th', '5th'];

export function meetupDay(year, month, dayOfWeek, schedule) {
  const d = new Date(year, month, 1);
  switch (schedule) {
    case 'teenth': d.addDays(12); break;
    case 'last': break;
    default: d.addDays(ordinal.indexOf(schedule) * 7); break;
  }
  while (daysOfWeek[d.getUTCDay()] !== dayOfWeek) d.addDays(1);
  if (schedule === 'last') {
    while (d.getMonth() === month) d.addDays(7);
    d.addDays(-7);
  }
  if (d.getMonth() !== month) throw new Error();
  return d;
}
