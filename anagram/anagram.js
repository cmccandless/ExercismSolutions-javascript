const sortLetters = s => s.split('').sort().join('');

export class Anagram {
  constructor(baseWord) {
    this.baseWord = baseWord.toLowerCase();
    this.baseSorted = sortLetters(this.baseWord);
    this.matches = words => words
      .filter(word => (
        lower => lower !== this.baseWord
          && sortLetters(lower) === this.baseSorted
      )(word.toLowerCase()));
  }
}
