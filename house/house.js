const nouns = [
  null,
  'house',
  'malt',
  'rat',
  'cat',
  'dog',
  'cow with the crumpled horn',
  'maiden all forlorn',
  'man all tattered and torn',
  'priest all shaven and shorn',
  'rooster that crowed in the morn',
  'farmer sowing his corn',
  'horse and the hound and the horn',
];

const verbs = [
  null,
  'lay in',
  'ate',
  'killed',
  'worried',
  'tossed',
  'milked',
  'kissed',
  'married',
  'woke',
  'kept',
  'belonged to',
];

export class House {
  static verse(verseNum) {
    const lines = Array.from(Array(verseNum - 1))
      .map((_, i) => verseNum - 1 - i)
      .map(j => `that ${verbs[j]} the ${nouns[j]}`);
    lines.unshift(`This is the ${nouns[verseNum]}`);
    lines.push(`${lines.pop()} that Jack built.`);
    return lines;
  }

  static verses(startVerse, endVerse) {
    return Array.from(Array(endVerse - startVerse + 1))
      .reduce(
        (lines, _, i, arr) => {
          lines.push(...House.verse(i + startVerse));
          if (i < arr.length - 1) {
            lines.push('');
          }
          return lines;
        },
        [],
      );
  }
}
