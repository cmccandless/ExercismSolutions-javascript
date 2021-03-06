const valid = '+-* |'.split('');

function countMines(x, y, board) {
  const minMax = (n, _max) => [Math.max(0, n - 1), Math.min(n + 2, _max)];
  const [xmin, xmax] = minMax(x, board[y].length);
  const [ymin, ymax] = minMax(y, board.length);
  const result = board.slice(ymin, ymax).reduce(
    (sum, r) => sum + r.slice(xmin, xmax).filter(c => c === '*').length,
    0,
  );
  return result > 0 ? result.toString() : ' ';
}

export function annotate(input) {
  const board = input.map(r => r.split(''));
  board.forEach((r) => {
    if (r.length !== input[0].length) { throw new Error('mismatching row lengths'); }
    r.forEach((c) => {
      if (!valid.includes(c)) { throw new Error('invalid character'); }
    });
  });
  return board.map((r, y) => r.map((c, x) => (c === ' ' ? countMines(x, y, board) : c)).join(''));
}
