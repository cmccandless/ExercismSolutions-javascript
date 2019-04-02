function getGCD(a, b) {
  let x = a;
  let y = b;
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
}

export class Rational {
  static get ONE() {
    return new Rational(1, 1);
  }

  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  reduce() {
    const gcd = getGCD(this.numerator, this.denominator);
    let num = this.numerator / gcd;
    let denom = this.denominator / gcd;
    if (denom < 0) {
      num *= -1;
      denom *= -1;
    }
    return new Rational(num, denom);
  }

  get inv() {
    return new Rational(this.denominator, this.numerator);
  }

  get neg() {
    return new Rational(-this.numerator, this.denominator);
  }

  add(other) {
    return new Rational(
      this.numerator * other.denominator
        + other.numerator * this.denominator,
      this.denominator * other.denominator,
    ).reduce();
  }

  sub(other) {
    return this.add(other.neg);
  }

  mul(other) {
    return new Rational(
      this.numerator * other.numerator,
      this.denominator * other.denominator,
    ).reduce();
  }

  div(other) {
    return this.mul(other.inv);
  }

  abs() {
    return new Rational(
      Math.abs(this.numerator),
      Math.abs(this.denominator),
    );
  }

  exprational(power) {
    let ret = Rational.ONE;
    for (let i = 0; i < power; i += 1) {
      ret = ret.mul(this);
    }
    return ret;
  }

  expreal(base) {
    return 10 ** Math.log10((base ** this.numerator) ** (1 / this.denominator));
  }
}
