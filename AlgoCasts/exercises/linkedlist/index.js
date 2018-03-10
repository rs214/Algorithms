// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(record) {
    this.head = new Node(record, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if(!this.head) {
      return;
    }
    if(!this.head.next){
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(record) {
    const last = this.getLast();

    if(last) {
      last.next = new Node(record);
    } else {
      this.head = new Node(record);
    }
  }

  getAt(index) {
    var counter = 0;
    let node = this.head
    if (!this.head) {
      return null;
    }
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next
  }

  insertAt(record, index) {
    if (!this.head) {
      this.head = new Node(record);
      return;
    }

    if(index === 0) {
      this.head = new Node(record, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(record, previous.next);
    previous.next = node;
  }
}

module.exports = { Node, LinkedList };
