export const convert = code => [[3, 'i'], [5, 'a'], [7, 'o']]
  .filter(([d]) => code % d === 0)
  .reduce((result, [, c]) => `${result}Pl${c}ng`, '')
  || `${code}`;
