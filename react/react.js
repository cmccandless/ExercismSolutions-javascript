/* eslint-disable no-param-reassign */
const callbacks = [];


class Cell {
  constructor(value) {
    this.value = value;
    this.dependents = new Set();
  }

  update() {
    this.dependents.forEach(d => d.compute());
  }
}

export class InputCell extends Cell {
  setValue(value) {
    this.value = value;
    const callbackOldValues = callbacks.map(cb => cb.getValue());
    this.update();
    callbacks.forEach((cb, i) => {
      const newValue = cb.getValue();
      if (newValue !== callbackOldValues[i]) {
        cb.values.push(newValue);
      }
    });
  }
}

export class ComputeCell extends Cell {
  constructor(inputs, fn) {
    super(fn(inputs));
    this.inputs = inputs;
    this.fn = fn;
    inputs.forEach(i => i.dependents.add(this));
  }

  compute() {
    const newValue = this.fn(this.inputs);
    if (newValue === this.value) return;
    this.value = newValue;
    this.update();
  }

  addCallback(callback) {
    callback.dependency = this;
  }

  removeCallback(callback) {
    callback.dependency = null;
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.dependency = null;
    this.values = [];
    callbacks.push(this);
  }

  getValue() {
    return (this.fn != null && this.dependency != null) ? this.fn(this.dependency) : null;
  }
}
