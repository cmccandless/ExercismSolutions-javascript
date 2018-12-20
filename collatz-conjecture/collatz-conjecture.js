/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */
export function steps(n) {
  if (n <= 0) throw new Error('Only positive numbers are allowed');
  for (let s = 0; true; s += 1) {
    if (n === 1) return s;
    n = (n % 2 === 0) ? (n / 2) : (3 * n + 1);
  }
}
