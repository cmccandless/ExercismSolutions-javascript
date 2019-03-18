const segments = [
  [' ', '_', ' '], // 0x01, 0x02, 0x04
  ['|', '_', '|'], // 0x08, 0x10, 0x11
  ['|', '_', '|'], // 0x12, 0x14, 0x18
  [' ', ' ', ' '], // 0x20, 0x21, 0x22
];
const numbers = {
  0xf25: '1',
  0xef7: '2',
  0xfb7: '3',
  0xf3d: '4',
  0xf9f: '5',
  0xfdf: '6',
  0xf27: '7',
  0xfff: '8',
  0xfbf: '9',
  0xfef: '0',
};

export function convert(strInput) {
  const parsed = [];
  const lines = strInput.split('\n');
  while (lines.length !== 0) {
    const codes = Array(lines[0].length);
    for (let lineNo = 0; lineNo < 4; lineNo += 1) {
      lines.shift().split('').forEach((char, charNo) => {
        const code = Math.floor(charNo / 3);
        const segment = charNo % 3;
        const bit = 1 << (lineNo * 3 + segment);
        const expected = segments[lineNo][segment];
        if (char === expected) codes[code] |= bit;
      });
    }
    parsed.push(codes.map(code => numbers[code] || '?').join(''));
  }
  return parsed.join(',');
}
