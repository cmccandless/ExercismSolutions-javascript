export class Luhn {
  constructor(input) {
    this.raw = input;
    this.clean = input.replace(/\D/g, '');
  }

  reducer(sum, digit, index) {
    let x = digit;
    if (index & 2 !== 0) {
      x <<= 1;
      if (x > 9) {
        x -= 9;
      }
    }
    return sum + x;
  }

  validInput() {
    return /^[\d ]+$/.test(this.raw) && this.clean !== '0';
  }

  get valid() {
    if (this.validInput()) {
      const checksum = this.clean
        .split('')
        .map(d => parseInt(d, 10))
        .reverse()
        .reduce(this.reducer, 0);
      return checksum % 10 === 0;
    }
    return false;
  }
}
