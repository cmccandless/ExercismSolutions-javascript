class Triangle {
  constructor(a, b, c) {
    this.sides = [a, b, c];
    this.sides.sort((x, y) => x - y);
  }

  kind() {
    const [a, b, c] = this.sides;
    if (a <= 0 || c > a + b) {
      throw new Error();
    }
    const score = (a === b ? 1 : 0) + (b === c ? 1 : 0);
    if (score === 2) return 'equilateral';
    if (score === 1) return 'isosceles';
    return 'scalene';
  }
}

export default Triangle;
