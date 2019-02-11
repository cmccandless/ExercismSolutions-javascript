export class PhoneNumber {
  constructor(rawNumber) {
    this.numberClean = this.constructor.clean(rawNumber);
  }

  static clean(rawNumber) {
    const num = rawNumber.replace(/[^\d]/g, '');
    return (num.length === 11 && num[0] === '1')
      ? num.substring(1)
      : num;
  }

  areaCode() {
    return this.numberClean.substring(0, 3);
  }

  exchangeCode() {
    return this.numberClean.substring(3, 6);
  }

  valid() {
    return this.numberClean.length === 10
      && /^[^01]/.test(this.areaCode())
      && /^[^01]/.test(this.exchangeCode());
  }

  number() {
    return this.valid() ? this.numberClean : null;
  }
}
