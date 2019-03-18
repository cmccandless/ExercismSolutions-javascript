function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  return Math.floor(sqrt) === sqrt;
}

const addArrays = (left, right) => left.map((x, i) => x + right[i]);

// Using Fibonacci's Method
// https://en.wikipedia.org/wiki/Formulas_for_generating_Pythagorean_triples#Fibonacci's_method
function getPrimitiveTriplets(maxFactor) {
  const primitiveTriplets = [];
  let previousTermSum = 16;
  let k = 9;
  // let n = 5;
  let a = 3;
  let b = 4;
  let c = 5;
  while (c <= maxFactor) {
    if (isPerfectSquare(k)) {
      // n = (k + 1) / 2;
      a = Math.sqrt(k);
      b = Math.sqrt(previousTermSum);
      c = Math.sqrt(previousTermSum + k);
      if (c > maxFactor) {
        break;
      }
      primitiveTriplets.push([a, b, c]);
    }
    previousTermSum += k;
    k += 2;
  }
  return primitiveTriplets;
}

export class Triplet {
  constructor(sideA, sideB, sideC) {
    this.sides = [sideA, sideB, sideC].sort();
    this.sum = () => this.sides.reduce((a, b) => a + b, 0);
    this.product = () => this.sides.reduce((a, b) => a * b, 1);
  }

  isPythagorean() {
    const [a, b, c] = this.sides;
    return a * a + b * b === c * c;
  }

  static where(data = {}) {
    const maxFactor = data.maxFactor || 1;
    const minFactor = data.minFactor || 3;
    const sum = data.sum || null;
    return getPrimitiveTriplets(maxFactor)
      .reduce(
        (triplets, primitive) => {
          let [x, y, z] = primitive;
          while (x < minFactor) {
            [x, y, z] = addArrays([x, y, z], primitive);
          }
          while (z <= maxFactor) {
            triplets.push([x, y, z]);
            [x, y, z] = addArrays([x, y, z], primitive);
          }
          return triplets;
        },
        [],
      ).sort()
      .map(t => new Triplet(...t))
      .filter(t => sum === null || t.sum() === sum);
  }
}
