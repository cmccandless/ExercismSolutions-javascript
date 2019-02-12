function* sieve() {
  const limit = 1e6;
  const notPrime = Array(limit).fill(false);
  notPrime[0] = true;
  notPrime[1] = true;
  yield 2;
  for (let i = 3; i < notPrime.length; i += 2) {
    if (!notPrime[i]) {
      yield i;
      for (let j = i + i; j < notPrime.length; j += i) {
        notPrime[j] = true;
      }
    }
  }
}

export function primeFactors(num) {
  if (num < 2) return [];
  const factors = [];
  let n = num;
  const primes = sieve();
  let it = primes.next();
  while (n !== 1 && !it.done) {
    if (n % it.value === 0) {
      factors.push(it.value);
      n /= it.value;
    } else {
      it = primes.next();
    }
  }
  return factors;
}
