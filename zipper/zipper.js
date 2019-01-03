class Zipper {
  constructor(tree, parent = null) {
    this.parent = parent;
    this.valuePrivate = tree.value;
    this.children = [
      Zipper.fromTree(tree.left, this),
      Zipper.fromTree(tree.right, this),
    ];
  }

  static fromTree(tree, parent = null) {
    return !tree ? null : new Zipper(tree, parent);
  }

  up() { return this.parent; }

  left() { return this.children[0]; }

  right() { return this.children[1]; }

  value() { return this.valuePrivate; }

  setValue(newValue) {
    this.valuePrivate = newValue;
    return this;
  }

  setLeft(tree) {
    this.children[0] = Zipper.fromTree(tree, this);
    return this;
  }

  setRight(tree) {
    this.children[1] = Zipper.fromTree(tree, this);
    return this;
  }

  toTree(fromRoot = true) {
    return fromRoot && this.parent !== null
      ? this.parent.toTree()
      : {
        value: this.value(),
        left: !this.left() ? null : this.left().toTree(false),
        right: !this.right() ? null : this.right().toTree(false),
      };
  }
}

export default Zipper;
