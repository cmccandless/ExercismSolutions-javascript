export class Series {
  constructor(sequence) {
    this.digits = sequence.split('').map(d => parseInt(d, 10));
  }

  slices(width) {
    if (width > this.digits.length) {
      throw new Error('Slice size is too big.');
    }
    return [...Array(this.digits.length - width + 1).keys()]
      .map(i => this.digits.slice(i, i + width));
  }
}
