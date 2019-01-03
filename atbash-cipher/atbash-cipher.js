/* eslint-disable no-extend-native */
const range = count => [...Array(count).keys()];
String.prototype.charCodes = function f() {
  return range(this.length).map(i => this.charCodeAt(i));
};
const alphabetLength = 26;
const charStart = 'a'.charCodeAt(0);
const digits = new Set('0123456789'.charCodes());
const letters = new Set('abcdefghijklmnopqrstuvwxyz'.charCodes());
const validCharCodes = new Set([...digits, ...letters]);
const shiftCharCode = ch => ch - charStart;
const unshiftCharCode = shifted => shifted + charStart;

const encodeCharCode = code => (
  digits.has(code)
    ? code
    : unshiftCharCode(alphabetLength - 1 - shiftCharCode(code))
);

const addSpacing = (s, i) => (i > 0 && (i % 5) === 4 ? `${s} ` : s);

export const encode = str => str.toLowerCase()
  .charCodes()
  .filter(validCharCodes.has.bind(validCharCodes))
  .map(encodeCharCode)
  .map(c => String.fromCharCode(c))
  .map(addSpacing)
  .join('')
  .trim();
