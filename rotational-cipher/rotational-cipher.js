/* eslint-disable no-extend-native */
String.prototype.chars = function f() {
  return [...Array(this.length).keys()]
    .map(this.charAt.bind(this));
};

const upperA = 'A'.charCodeAt(0);
const lowerA = 'a'.charCodeAt(0);

function rotateChar(ch, key) {
  const code = ch.charCodeAt(0);
  if (/[A-Z]/.test(ch)) {
    return String.fromCharCode(((code - upperA + key) % 26) + upperA);
  }
  if (/[a-z]/.test(ch)) {
    return String.fromCharCode(((code - lowerA + key) % 26) + lowerA);
  }
  return ch;
}

class RotationalCipher {
  static rotate(phrase, key) {
    return phrase
      .chars()
      .map(ch => rotateChar(ch, key))
      .join('');
  }
}

export default RotationalCipher;
