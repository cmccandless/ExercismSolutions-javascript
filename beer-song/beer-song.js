function bottles(count) {
  switch (count) {
    case 0: return 'No more bottles';
    case 1: return '1 bottle';
    default: return `${count} bottles`;
  }
}

const bottlesOfBeer = count => `${bottles(count)} of beer`;

function action(verseNum) {
  switch (verseNum) {
    case 0: return 'Go to the store and buy some more';
    case 1: return 'Take it down and pass it around';
    default: return 'Take one down and pass it around';
  }
}

const nextVerse = verseNum => (verseNum === 0 ? 99 : verseNum - 1);

function lastLine(verseNum) {
  return `${action(verseNum)}, \
${bottlesOfBeer(nextVerse(verseNum)).toLowerCase()}`;
}

export class BeerSong {
  static verse(verseNum) {
    return `${bottlesOfBeer(verseNum)} on the wall, \
${bottlesOfBeer(verseNum).toLowerCase()}.
${lastLine(verseNum)} on the wall.\n`;
  }

  static sing(start = 99, stop = 0) {
    return [...Array(start - stop + 1).keys()]
      .map(i => BeerSong.verse(start - i)).join('\n');
  }
}
