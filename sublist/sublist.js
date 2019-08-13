export class List {
  constructor(contents = []) {
    this.contents = contents;
  }

  get length() {
    return this.contents.length;
  }

  empty() {
    return this.length === 0;
  }

  get(index) {
    return this.contents[index];
  }

  compare(other) {
    if (this.length > other.length) {
      const result = other.compare(this);
      switch (result) {
        case 'SUBLIST': return 'SUPERLIST';
        default: return result;
      }
    } else {
      for (let i = 0; i <= other.length - this.length; i += 1) {
        if (this.empty() || this.contents.every((x, j) => x === other.get(i + j))) {
          if (this.length === other.length) {
            return 'EQUAL';
          }
          return 'SUBLIST';
        }
      }
    }
    return 'UNEQUAL';
  }
}
