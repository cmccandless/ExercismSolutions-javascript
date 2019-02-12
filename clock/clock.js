const padZero = num => `${num}`.padStart(2, '0');

class Clock {
  constructor(hour, minute = 0) {
    this.minutes = hour * 60 + minute;
    while (this.minutes < 0) this.minutes += 1440;
    this.minutes %= 1440;
    this.hour = () => Math.floor(this.minutes / 60);
    this.minute = () => this.minutes % 60;
    this.toString = () => [
      this.hour(), this.minute()].map(padZero).join(':');
    this.plus = minutes => new this.constructor(
      this.hour(), this.minute() + minutes,
    );
    this.minus = minutes => this.plus(-minutes);
    this.equals = other => this.toString() === other.toString();
  }
}

export const at = (hour, minute = 0) => new Clock(hour, minute);
