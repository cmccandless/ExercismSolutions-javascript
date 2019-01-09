/* eslint-disable no-extend-native */
const range = size => [...Array(size).keys()];
Array.prototype.flatMap = function func(f) {
  return this.map(f).reduce((x, y) => x.concat(y), []);
};

class Crypto {
  constructor(text) {
    this.text = text;
  }

  normalizePlaintext() {
    return this.text.toLowerCase().replace(/[^a-z\d]+/g, '');
  }

  size() {
    return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
  }

  plaintextSegments() {
    return (
      size => range(size)
        .map(i => this.normalizePlaintext().substr(i * size, size))
        .filter(s => s.length > 0)
    )(this.size());
  }

  ciphertext() {
    return (
      segments => range(segments.length)
        .flatMap(i => segments.map(s => s.charAt(i)))
        .join('')
    )(this.plaintextSegments());
  }
}

export default Crypto;
