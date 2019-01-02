const ALPHABET_SIZE = 26;
const START = 'a'.charCodeAt(0);
const shiftChar = charCode => charCode - START;
const unshiftChar = shifted => shifted + START;

function randomLetter() {
  return String.fromCharCode(unshiftChar(Math.floor(Math.random() * ALPHABET_SIZE)));
}

const range = count => [...Array(count).keys()];

function encodeCharCode(code, keyCode) {
  return unshiftChar((shiftChar(code) + shiftChar(keyCode)) % ALPHABET_SIZE);
}

function decodeCharCode(code, keyCode) {
  return unshiftChar((code - keyCode + ALPHABET_SIZE) % ALPHABET_SIZE);
}

export class Cipher {
  constructor(key) {
    if (key == null) {
      // eslint-disable-next-line no-unused-vars
      this.key = range(100).map(_ => randomLetter()).join('');
    } else if (!key || /[^a-z]/.test(key)) {
      throw new Error('Bad key');
    } else {
      this.key = key;
    }
    this.keyCode = i => this.key.charCodeAt(i % this.key.length);
  }

  encode(str) {
    const encodeCharAt = i => String.fromCodePoint(
      encodeCharCode(str.charCodeAt(i), this.keyCode(i)),
    );
    return range(str.length).map(encodeCharAt).join('');
  }

  decode(str) {
    const decodeCharAt = i => String.fromCodePoint(
      decodeCharCode(str.charCodeAt(i), this.keyCode(i)),
    );
    return range(str.length).map(decodeCharAt).join('');
  }
}
