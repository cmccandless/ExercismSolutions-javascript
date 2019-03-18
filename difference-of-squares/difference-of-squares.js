export class Squares {
  constructor(upTo) {
    this.upTo = upTo;
    const nums = [...Array(upTo + 1).keys()];
    this.squareOfSum = nums.reduce((x, y) => x + y, 0) ** 2;
    this.sumOfSquares = nums.reduce((x, y) => x + (y ** 2), 0);
    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}
