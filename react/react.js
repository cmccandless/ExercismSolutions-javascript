/* eslint-disable no-param-reassign */
// let cellInstanceCount = 0;

class Cell {
  constructor(value) {
    this.value = value;
    this.dependents = new Set();
    // this.id = cellInstanceCount;
    // cellInstanceCount += 1;
  }

  registerDependent(dependent) {
    this.dependents.add(dependent);
  }
}

export class InputCell extends Cell {
  setValue(value) {
    this.value = value;

    // Performs a breadth-first traversal of cell dependency tree,
    // pruning unchanged branches
    const cellsToUpdate = Array.from(this.dependents);
    const modifiedCells = new Map();
    while (cellsToUpdate.length !== 0) {
      const cell = cellsToUpdate.shift();
      const snapshot = cell.value;
      cell.update();
      // If cell value hasn't changed, prune branch
      if (snapshot !== cell.value) {
        if (!modifiedCells.has(cell)) {
          modifiedCells.set(cell, snapshot);
          cellsToUpdate.push(...cell.dependents);
        }
      }
    }
    modifiedCells.forEach((snapshot, cell) => {
      if (snapshot !== cell.value) {
        cell.fireCallbacks();
      }
    });
  }
}

export class ComputeCell extends Cell {
  constructor(inputs, fn) {
    super(fn(inputs));
    this.inputs = inputs;
    inputs.forEach(i => i.registerDependent(this));
    this.fn = fn;
    this.callbacks = new Set();
  }

  calculate() {
    return this.fn(this.inputs);
  }

  update() {
    this.value = this.calculate();
  }

  addCallback(cb) {
    this.callbacks.add(cb);
  }

  removeCallback(cb) {
    this.callbacks.delete(cb);
  }

  fireCallbacks() {
    this.callbacks.forEach(cb => cb.call(this));
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.values = [];
  }

  call(cell) {
    this.values.push(this.fn(cell));
  }
}
