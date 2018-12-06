const toRoman = (arabic) => [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ].reduce(
        (result, pair) => {
            let [k, v] = pair;
            while (arabic >= k) {
                arabic -= k;
                result += v;
            }
            return result;
        },
        ""
    );

export default toRoman;