export class Matrix {
  constructor(strInput) {
    this.rows = strInput.split('\n')
      .map(line => line.split(' ').map(x => parseInt(x, 10)));
  }

  get columns() {
    return this.rows[0].map((_, i) => this.rows.map(row => row[i]));
  }
}
