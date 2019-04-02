const interpretDigit = digit => (
  digit === 'X' ? 10 : parseInt(digit, 10));

function reducer(sum, digit, i) {
  return sum + ((10 - i) * interpretDigit(digit));
}

export class ISBN {
  constructor(inputStr) {
    this.clean = inputStr.replace(/[-]/g, '');
    this.checksum = this.clean.split('').reduce(reducer, 0) % 11;
  }

  isValid() {
    return /^\d{9}[\dX]$/.test(this.clean) && this.checksum === 0;
  }
}
