// eslint-disable-next-line no-extend-native
Array.prototype.takeWhile = function arrayTakeWhile(predicate) {
  const result = [];
  for (
    let i = 0;
    i < this.length && predicate(this[i], i);
    i = result.push(this[i])
  );
  return result;
};

const decode = (codon) => {
  if (codon === 'AUG') return 'Methionine';
  if (codon === 'UGG') return 'Tryptophan';
  if (/UU[UC]/.test(codon)) return 'Phenylalanine';
  if (/UU[AG]/.test(codon)) return 'Leucine';
  if (/UA[UC]/.test(codon)) return 'Tyrosine';
  if (/UG[UC]/.test(codon)) return 'Cysteine';
  if (/UC[UCAG]/.test(codon)) return 'Serine';
  throw new Error('Invalid codon');
};

const translate = (rna = '') => [...Array(rna.length / 3).keys()]
  .map(i => rna.substr(i * 3, 3)) // i => codon
  .takeWhile(codon => !/UA[AG]|UGA/.test(codon)) // takeWhile !STOP
  .map(decode);

export default translate;
