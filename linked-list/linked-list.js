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
  }

  push(value) {
    const newNode = new Node(value, this.tail);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.setNext(newNode);
    }
    this.tail = newNode;
  }

  pop() {
    const { value } = this.tail;
    if (this.tail.prev === null) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.setNext();
    }
    return value;
  }

  shift() {
    const { value } = this.head;
    if (this.head.next === null) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.setPrev();
    }
    return value;
  }

  unshift(value) {
    const newNode = new Node(value, null, this.head);
    if (this.tail === null) {
      this.tail = newNode;
    } else {
      this.head.setPrev(newNode);
    }
    this.head = newNode;
  }

  delete(value) {
    let current = this.head;
    while (current !== null) {
      if (value === current.value) {
        if (current.prev === null) {
          this.head = current.next;
        } else {
          current.prev.setNext(current.next);
        }
        if (current.next === null) {
          this.tail = current.prev;
        } else {
          current.next.setPrev(current.prev);
        }
        break;
      }
      current = current.next;
    }
  }

  count() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count += 1;
      current = current.next;
    }
    return count;
  }
}
