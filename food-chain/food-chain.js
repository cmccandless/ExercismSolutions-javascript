const animals = [
  '',
  'fly',
  'spider',
  'bird',
  'cat',
  'dog',
  'goat',
  'cow',
  'horse',
];

const wriggled = 'wriggled and jiggled and tickled inside her';

const comments = [
  '',
  '',
  `It ${wriggled}.\n`,
  'How absurd to swallow a bird!\n',
  'Imagine that, to swallow a cat!\n',
  'What a hog, to swallow a dog!\n',
  'Just opened her throat and swallowed a goat!\n',
  "I don't know how she swallowed a cow!\n",
  "She's dead, of course!\n",
];

const catchSpider = ` that ${wriggled}`;

function swallowed(verseNum) {
  let lyrics = `She swallowed the ${animals[verseNum]} \
to catch the ${animals[verseNum - 1]}`;
  if (verseNum === 3) {
    lyrics += catchSpider;
  }
  return `${lyrics}.\n`;
}

function parade(verseNum) {
  return Array.from(Array(verseNum - 1))
    .map((_, i) => swallowed(verseNum - i))
    .join('');
}

const firstLine = verseNum => `I know an old lady who \
swallowed a ${animals[verseNum]}.`;

export class Song {
  verse(verseNum) {
    let lyrics = `${firstLine(verseNum)}\n${comments[verseNum]}`;
    if (verseNum !== 8) {
      lyrics += `${parade(verseNum)}\
I don't know why she swallowed the fly. Perhaps she'll die.\n`;
    }
    return lyrics;
  }

  verses(start, stop) {
    return Array.from(Array(stop - start + 1))
      .map((_, i) => `${this.verse(i + 1)}\n`).join('');
  }
}
