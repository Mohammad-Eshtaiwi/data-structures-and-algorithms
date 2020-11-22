/* eslint-disable quotes */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return this.head;
  }

  get(value) {
    let current = this.head;
    // console.log(current);
    if (JSON.stringify(current.value) === JSON.stringify(value)) {
      return current.value;
    }
    while (current.next) {
      current = current.next;
      if (JSON.stringify(current.value) === JSON.stringify(value))
        return current.value;
    }
    return "this value is not found";
  }
}

module.exports = LinkedList;
