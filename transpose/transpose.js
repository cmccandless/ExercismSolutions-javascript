function padMatrix(matrix) {
  const padded = [matrix[matrix.length - 1] || ''];
  for (let i = matrix.length - 2; i >= 0; i -= 1) {
    padded.splice(0, 0, matrix[i].padEnd(padded[0].length));
  }
  return padded;
}

export function transpose(matrix) {
  const padded = padMatrix(matrix);
  return [...Array((padded[0]).length).keys()]
    .map(i => padded.map(row => row[i]).join(''));
}
