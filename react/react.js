var callbacks = [];


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
    constructor(value) {
        super(value);
    }
    setValue(value) {
        this.value = value;
        var callback_old_values = callbacks.map(cb => cb.getValue());
        this.update();
        callbacks.forEach((cb, i) => {
            var newValue = cb.getValue();
            if (newValue != callback_old_values[i]) {
                cb.values.push(newValue);
            }
        })
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
        var new_value = this.fn(this.inputs);
        if (new_value == this.value) return;
        this.value = new_value;
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
        this.values = []
        callbacks.push(this);
    }
    getValue() {
        if (this.fn != null && this.dependency != null) {
            return this.fn(this.dependency);
        }
    }
}