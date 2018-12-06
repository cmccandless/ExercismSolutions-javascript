Array.prototype.takeWhile = function(predicate) {
    var result = [];
    for (
        var i = 0;
        i < this.length && predicate(this[i], i);
        i = result.push(this[i])
    ) {}
    return result;
}

const decode = (codon) => 'AUG' == codon ? 'Methionine' :
    'UGG' == codon ? 'Tryptophan' :
    /UU[UC]/.test(codon) ? 'Phenylalanine' :
    /UU[AG]/.test(codon) ? 'Leucine' :
    /UA[UC]/.test(codon) ? 'Tyrosine' :
    /UG[UC]/.test(codon) ? 'Cysteine' :
    /UC[UCAG]/.test(codon) ? 'Serine' :
    function() { throw new Error('Invalid codon') }();

const translate = (rna="") => [...Array(rna.length / 3).keys()]
    .map((i) => rna.substr(i * 3, 3)) // i => codon
    .takeWhile((codon) => !/UA[AG]|UGA/.test(codon)) // takeWhile !STOP
    .map(decode);

export default translate;