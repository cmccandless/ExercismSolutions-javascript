const reducer = (best, slice) => Math.max(
  slice.reduce((x, y) => x * y, 1), best,
);

export function largestProduct(series, span) {
  if (span < 0) {
    throw new Error('Invalid input.');
  }
  if (span > series.length) {
    throw new Error('Slice size is too big.');
  }
  const nums = series.split('').map((ch) => {
    if (!/\d/.test(ch)) throw new Error('Invalid input.');
    return parseInt(ch, 10);
  });
  return [...Array(series.length - span + 1).keys()]
    .map(i => nums.slice(i, i + span))
    .reduce(reducer, 0);
}
