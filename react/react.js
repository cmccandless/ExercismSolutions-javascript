export class Cell {
  constructor(value) {
    this.value = value;
    this.dependents = new Set();
  }

  registerDependent(cell) {
    this.dependents.add(cell);
  }

  update() {
    this.dependents.forEach(d => d.update());
  }

  updateFinished() {
    this.dependents.forEach(d => d.updateFinished());
  }
}

export class InputCell extends Cell {
  setValue(value) {
    this.value = value;
    this.update();
    this.updateFinished();
  }
}

export class ComputeCell extends Cell {
  constructor(inputs, fn) {
    super(fn(inputs));
    this.inputs = inputs;
    this.fn = fn;
    this.callbacks = new Set();
    this.snapshot = this.value;

    inputs.forEach(i => i.registerDependent(this));
  }

  update() {
    this.value = this.fn(this.inputs);
    super.update();
  }

  updateFinished() {
    if (this.snapshot !== this.value) {
      this.callbacks.forEach(cb => cb.call(this));
      this.snapshot = this.value;
    }
    super.updateFinished();
  }

  addCallback(cb) {
    this.callbacks.add(cb);
  }

  removeCallback(cb) {
    this.callbacks.delete(cb);
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
