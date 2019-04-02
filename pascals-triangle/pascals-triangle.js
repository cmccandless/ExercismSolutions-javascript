export class Triangle {
  constructor(rowCount) {
    this.rowCount = rowCount;
    this.rows = [...Array(rowCount - 1).keys()].reduce(
      (rows, i) => rows.concat([
        [1]
          .concat(rows[i].slice(1).map((x, j) => x + rows[i][j]))
          .concat([1])]),
      [[1]],
    );
  }

  get lastRow() {
    return this.rows[this.rowCount - 1];
  }
}
