class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  setNext(node = null) {
    this.next = node;
  }

  setPrev(node = null) {
    this.prev = node;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(node) {
    if (node.next) {
      node.next.setPrev(node);
    } else {
      this.tail = node;
    }
    if (node.prev) {
      node.prev.setNext(node);
    } else {
      this.head = node;
    }
    return node;
  }

  remove(node) {
    if (!node.prev) {
      this.head = node.next;
    } else {
      node.prev.setNext(node.next);
    }
    if (!node.next) {
      this.tail = node.prev;
    } else {
      node.next.setPrev(node.prev);
    }
    this.size -= 1;
    return node;
  }

  push(value) {
    this.insert(new Node(value, this.tail));
    this.size += 1;
  }

  pop() {
    return this.remove(this.tail).value;
  }

  shift() {
    return this.remove(this.head).value;
  }

  unshift(value) {
    this.insert(new Node(value, null, this.head));
    this.size += 1;
  }

  delete(value) {
    switch (value) {
      case this.head.value: return this.shift();
      case this.tail.value: return this.pop();
      default:
        for (let current = this.head; current; current = current.next) {
          if (value === current.value) {
            this.remove(current);
            break;
          }
        }
        return null;
    }
  }

  count() {
    return this.size;
  }
}
