/* eslint-disable no-extend-native */
String.prototype.chars = function f() {
  return [...Array(this.length).keys()]
    .map(this.charAt.bind(this));
};

export function isIsogram(phrase) {
  const chars = phrase
    .toLowerCase()
    .chars()
    .filter(c => c.toLowerCase() !== c.toUpperCase());
  return new Set(chars).size === chars.length;
}
