const range = count => [...Array(count).keys()];
const scoreTable = [
  { pattern: /[aeioulnrst]/, score: 1 },
  { pattern: /[dg]/, score: 2 },
  { pattern: /[bcmp]/, score: 3 },
  { pattern: /[fhvwy]/, score: 4 },
  { pattern: /k/, score: 5 },
  { pattern: /[jx]/, score: 8 },
  { pattern: /[qz]/, score: 10 },
  { pattern: /./, score: 10 },
];

const scoreChar = ch => scoreTable.find(
  entry => entry.pattern.test(ch),
).score;

export const score = word => range(word.length).reduce(
  (sum, i) => sum + scoreChar(word.charAt(i).toLowerCase()),
  0,
);
