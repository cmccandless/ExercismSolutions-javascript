export class Matrix {
  constructor(strInput) {
    this.rows = strInput.split('\n')
      .map(line => line.trim().split(' ').map(x => parseInt(x, 10)));
    this.columns = this.rows[0].map((_, i) => this.rows.map(row => row[i]));
    this.rowMax = this.rows.map(row => Math.max(...row));
    this.colMin = this.columns.map(col => Math.min(...col));
  }

  get points() {
    return this.rows
      .map((_, rowIndex) => this.columns
        .map((__, columnIndex) => [rowIndex, columnIndex]))
      .reduce((a, b) => a.concat(b), []);
  }

  get saddlePoints() {
    return this.points.filter(([r, c]) => {
      const value = this.rows[r][c];
      return this.rowMax[r] === value && this.colMin[c] === value;
    });
  }
}
