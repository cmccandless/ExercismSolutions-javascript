/* eslint-disable no-prototype-builtins */
/* eslint-disable no-extend-native */
/* eslint-disable no-param-reassign */

const range = count => [...Array(count).keys()];
String.prototype.chars = function f() {
  return range(this.length).map(i => this.charAt(i));
};

class NucleotideCounts {
  static parse(strand) {
    return Object.values(strand.chars().reduce(
      (map, ch) => {
        if (map.hasOwnProperty(ch)) {
          map[ch] += 1;
          return map;
        }
        throw new Error('Invalid nucleotide in strand');
      },
      {
        A: 0, C: 0, G: 0, T: 0,
      },
    )).filter(isFinite).join(' ');
  }
}

export default NucleotideCounts;
