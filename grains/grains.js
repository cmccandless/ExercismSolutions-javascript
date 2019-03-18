import BigInt from './lib/big-integer';

export class Grains {
  square(num) {
    return BigInt(1).shiftLeft(num - 1).toString();
  }

  total() {
    return BigInt(1).shiftLeft(64).minus(1).toString();
  }
}
