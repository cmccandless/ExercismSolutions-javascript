const digits = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];

const tens = [
  '',
  'ten',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

const labels = [
  [1e9, 'billion'],
  [1e6, 'million'],
  [1e3, 'thousand'],
  [1e2, 'hundred'],
];

const ERR_STR = 'Number must be between 0 and 999,999,999,999.';

export class Say {
  inEnglish(num) {
    if (num < 0 || num >= 1e12) {
      throw new Error(ERR_STR);
    }
    let rem = num;
    const parts = [];

    // 100 - 999,999,999,999
    for (let i = 0; i < labels.length && rem >= 100; i += 1) {
      const [value, label] = labels[i];
      if (rem >= value) {
        const significant = Math.floor(rem / value);
        parts.push(this.inEnglish(significant), label);
        rem %= value;
      }
    }

    if (rem >= 20) { // 20 - 99
      const q = Math.floor(rem / 10);
      const smallParts = [tens[q]];
      rem %= 10;
      if (rem !== 0) {
        smallParts.push(digits[rem]);
      }
      parts.push(smallParts.join('-'));
    } else if (rem > 0) { // 1 - 19
      parts.push(digits[rem]);
    }

    if (parts.length === 0) {
      parts.push('zero');
    }

    return parts.join(' ');
  }
}
