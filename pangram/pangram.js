/* eslint-disable no-extend-native */
String.prototype.chars = function f() {
  return [...Array(this.length).keys()]
    .map(this.charAt.bind(this));
};

export const isPangram = phrase => new Set(
  phrase
    .toLowerCase()
    .chars()
    .filter(c => c.toLowerCase() !== c.toUpperCase()),
)
  .size === 26;
