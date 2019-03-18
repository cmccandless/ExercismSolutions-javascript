export class SpiralMatrix {
  static ofSize(size) {
    const m = [...Array(size)].map(() => Array(size).fill(null));
    let [r, c] = [0, 0];
    let [dr, dc] = [0, 1];
    const limit = size * size;
    for (let i = 1; i <= limit; i += 1) {
      m[r][c] = i;
      const next = (m[r + dr] || Array(0))[c + dc];
      if (next === undefined || next !== null) {
        [dr, dc] = [dc, -dr];
      }
      [r, c] = [r + dr, c + dc];
    }
    return m;
  }
}
