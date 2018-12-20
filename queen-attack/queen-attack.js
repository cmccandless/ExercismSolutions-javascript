const nums = [...Array(8).keys()];

// eslint-disable-next-line no-extend-native
Array.prototype.equals = function arrayEquals(other) {
  return other && this.length === other.length
    && this.every((x, i) => x === other[i]);
};

class Queens {
  constructor(pos = {}) {
    this.white = pos.white || [0, 3];
    this.black = pos.black || [7, 3];
    if (this.white.equals(this.black)) {
      throw new Error('Queens cannot share the same space');
    }
  }

  toString() {
    const str = nums.map(r => nums.map((c) => {
      if (this.white.equals([r, c])) return 'W';
      if (this.black.equals([r, c])) return 'B';
      return '_';
    }).join(' ')).join('\n');
    return `${str}\n`;
  }

  canAttack() {
    const dR = this.white[0] - this.black[0];
    const dC = this.white[1] - this.black[1];
    return dR === 0 || dC === 0 || Math.abs(dR) === Math.abs(dC);
  }
}

export default Queens;
