const BASE = 'A'.charCodeAt(0);

function makeLine(letter, bound) {
  const char = String.fromCharCode(letter);
  const outerSpacing = ' '.repeat(bound - letter);
  let innerSpacing = null;
  if (letter !== BASE) {
    innerSpacing = ' '.repeat((letter - BASE) * 2 - 1);
  }
  const spacing = [outerSpacing, innerSpacing, outerSpacing];
  return spacing.filter(x => x !== null).join(char);
}

export class Diamond {
  makeDiamond(letter) {
    const lines = [];
    const code = letter.charCodeAt(0);
    for (let x = code; x >= BASE; x -= 1) {
      const line = makeLine(x, code);
      lines.push(line);
      if (x !== code) {
        lines.unshift(line);
      }
    }
    return `${lines.join('\n')}\n`;
  }
}
