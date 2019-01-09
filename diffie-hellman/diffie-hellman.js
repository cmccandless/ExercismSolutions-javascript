function isPrime(n) {
  if (n < 2 || n & 2 === 0) {
    return false;
  }
  let i;
  for (i = 3; i < n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

class DiffieHellman {
  constructor(p, g) {
    if (!isPrime(p)) {
      throw new Error(`bad p ${p}`);
    }
    if (!isPrime(g)) {
      throw new Error(`bad g ${g}`);
    }
    this.p = p;
    this.g = g;
  }

  getPublicKeyFromPrivateKey(privateKey) {
    if (privateKey < 2 || privateKey >= this.p) {
      throw new Error('bad private key');
    }
    return (this.g ** privateKey) % this.p;
  }

  getSharedSecret(privateKey, publicKey) {
    return (publicKey ** privateKey) % this.p;
  }
}

export default DiffieHellman;
