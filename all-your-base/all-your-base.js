const isInteger = num => typeof num === 'number' && Math.floor(num) === num;

const validBase = base => isInteger(base) && base > 1;

const toInteger = (digits, inputBase) => digits.reduce((result, x) => result * inputBase + x);

function fromInteger(number, outputBase) {
  const result = [];
  let n = number;
  while (n > 0) {
    result.unshift(n % outputBase);
    n = Math.floor(n / outputBase);
  }
  return result.length === 0 ? [0] : result;
}

export function convert(digits, inputBase, outputBase) {
  if (!validBase(inputBase)) throw new Error('Wrong input base');
  if (!validBase(outputBase)) throw new Error('Wrong output base');
  if (
    digits.length === 0
      || (digits.length > 1 && digits[0] === 0)
      || !digits.every(d => d >= 0 && d < inputBase)
  ) throw new Error('Input has wrong format');

  return fromInteger(toInteger(digits, inputBase), outputBase);
}
