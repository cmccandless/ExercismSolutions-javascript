export class Rectangles {
  constructor(grid) {
    this.grid = grid;
    this.corners = [...Array(grid.length).keys()]
      .reduce((corners, row) => corners
        .concat([...Array(grid[row].length).keys()]
          .filter(col => grid[row][col] === '+')
          .map(col => [row, col])),
      []);
  }

  isLineHorizontal(row, left, right) {
    if (left >= right) return false;
    for (let col = left + 1; col < right; col += 1) {
      if (!'+-'.includes(this.grid[row][col])) {
        return false;
      }
    }
    return true;
  }

  isLineVertical(col, top, bottom) {
    if (top >= bottom) return false;
    for (let row = top + 1; row < bottom; row += 1) {
      if (!'+|'.includes(this.grid[row][col])) {
        return false;
      }
    }
    return true;
  }

  isRectangle(rowTop, rowBottom, colLeft, colRight) {
    // [rowTop, colLeft] and [rowBottom, colRight]
    // are assumed to be valid corners
    return rowTop < rowBottom
      && colLeft < colRight
      && this.grid[rowTop][colRight] === '+'
      && this.grid[rowBottom][colLeft] === '+'
      && this.isLineHorizontal(rowTop, colLeft, colRight)
      && this.isLineHorizontal(rowBottom, colLeft, colRight)
      && this.isLineVertical(colLeft, rowTop, rowBottom)
      && this.isLineVertical(colRight, rowTop, rowBottom);
  }

  count() {
    return this.corners.reduce(
      (countA, [rowTop, colLeft]) => countA + this.corners
        .filter(([rowBottom, colRight]) => this
          .isRectangle(rowTop, rowBottom, colLeft, colRight)).length,
      0,
    );
  }

  static count(lines) {
    const grid = lines.map(line => line.split(''));
    return new Rectangles(grid).count();
  }
}
