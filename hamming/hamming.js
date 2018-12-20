export function compute(left, right) {
  if (left.length !== right.length) {
    throw new Error('left and right strands must be of equal length');
  }
  return left.split('').filter((ch, i) => ch !== right.charAt(i)).length;
}
