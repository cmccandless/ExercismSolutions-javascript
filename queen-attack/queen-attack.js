const oneToEight = [...Array(8).keys()];

// eslint-disable-next-line no-extend-native
Array.prototype.equals = function arrayEquals(other) {
  return other && this.length === other.length
    && this.every((x, i) => x === other[i]);
};

class Queens {
  constructor(pos = { white: [0, 3], black: [7, 3] }) {
    this.white = pos.white;
    this.black = pos.black;
    if (this.white.equals(this.black)) {
      throw new Error('Queens cannot share the same space');
    }
  }

  toString() {
    const str = oneToEight.map(r => oneToEight.map((c) => {
      if (this.white.equals([r, c])) return 'W';
      if (this.black.equals([r, c])) return 'B';
      return '_';
    }).join(' ')).join('\n');
    return `${str}\n`;
  }

  sameRow() {
    return this.white[0] === this.black[0];
  }

  sameColumn() {
    return this.white[1] === this.black[1];
  }

  sameDiagonal() {
    return Math.abs(this.white[0] - this.black[0])
      === Math.abs(this.white[1] - this.black[1]);
  }

  canAttack() {
    return this.sameRow() || this.sameColumn() || this.sameDiagonal();
  }
}

export default Queens;
