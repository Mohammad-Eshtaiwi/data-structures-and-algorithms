/* eslint-disable quotes */
const NodeClass = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    if (!this.head) {
      this.head = new NodeClass(value);
      return this.head;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = new NodeClass(value);
    return this.head;
  }
  includes(value) {
    let current = this.head;
    if (current.value === value) {
      return true;
    }
    while (current.next) {
      current = current.next;
      if (current.value === value) return true;
    }
    return false;
  }
  toString() {
    try {
      const arr = [];
      let current = this.head;
      while (current.next) {
        arr[arr.length] = current.value;
        current = current.next;
      }
      arr[arr.length] = current.value;
      arr[arr.length] = "null";

      return arr.join("->");
    } catch (error) {
      return "your linked list is empty";
    }
  }
}
// const ll = new LinkedList();

// ll.insert(1);
// ll.insert(2);
// ll.insert(3);
// ll.insert(4);
// ll.insert("a");

// console.log(ll);
// console.log(ll);

console.log(LinkedList);
module.exports = LinkedList;
