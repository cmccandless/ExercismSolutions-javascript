export class ComplexNumber {
  constructor(real, imag) {
    this.real = real;
    this.imag = imag;
  }

  get abs() {
    return Math.sqrt(this.real * this.real + this.imag * this.imag);
  }

  get conj() {
    return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag);
  }

  add(other) {
    return new ComplexNumber(this.real + other.real, this.imag + other.imag);
  }

  sub(other) {
    return new ComplexNumber(this.real - other.real, this.imag - other.imag);
  }

  mul(other) {
    return new ComplexNumber(
      this.real * other.real - this.imag * other.imag,
      this.real * other.imag + this.imag * other.real,
    );
  }

  div(other) {
    const div = other.real * other.real + other.imag * other.imag;
    return new ComplexNumber(
      (this.real * other.real + this.imag * other.imag) / div,
      (this.imag * other.real - this.real * other.imag) / div,
    );
  }

  get exp() {
    const a = Math.E ** this.real;
    return new ComplexNumber(Math.cos(this.imag) * a, Math.sin(this.imag) * a);
  }
}
