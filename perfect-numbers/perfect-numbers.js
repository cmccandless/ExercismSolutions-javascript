function factors(num) {
  return [...Array(Math.ceil(Math.sqrt(num))).keys()].slice(1).reduce(
    (fss, x) => {
      if (num % x === 0) {
        const q = num / x;
        fss.push(x);
        if (q !== x && q !== num) {
          fss.push(q);
        }
      }
      return fss;
    },
    [],
  );
}

export function classify(num) {
  if (num < 1) {
    throw new Error('Classification is only possible for natural numbers.');
  }
  const sumFactors = factors(num).reduce((a, b) => a + b, 0);
  if (num < sumFactors) {
    return 'abundant';
  }
  if (num > sumFactors) {
    return 'deficient';
  }
  return 'perfect';
}
