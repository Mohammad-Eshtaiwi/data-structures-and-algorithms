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
  insertBefore(value, newVal) {
    if (!this.includes(value)) return "value is not valid";

    let current = this.head;
    // if the value is in head then skip while loop
    if (current.value === value) 1 + 1;
    // else find the desired value
    else {
      while (current.next) {
        current = current.next;
        if (current.next.value === value) break;
      }
    }
    const temp = current.next;
    const newNode = new NodeClass(newVal);
    current.next = newNode;
    newNode.next = temp;
    console.log(temp);
    return this.toString();
  }
  insertAfter(value, newVal) {
    if (!this.includes(value)) return "value is not valid";

    let current = this.head;
    // if the value is in head then skip while loop
    if (current.value === value) 1 + 1;
    // else find the desired value
    else {
      while (current.next) {
        current = current.next;
        if (current.value === value) break;
      }
    }
    const temp = current.next;
    if (temp === null) {
      current.next = new NodeClass(newVal);
      console.log(this);
      return this.toString();
    }
    const newNode = new NodeClass(newVal);
    current.next = newNode;
    newNode.next = temp;
    console.log(temp);
    return this.toString();
  }
  insertAtStart(value) {
    const newNode = new NodeClass(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.toString();
  }
}
const ll = new LinkedList();
// ll.insertAtStart(0);

ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);

// console.log(ll.insertBefore(4, 7));
// console.log(ll.insertAfter(4, 7));
// console.log(ll.insertAfter(3, 7));
// console.log(ll.includes(5));

// console.log(ll.toString());

// console.log(ll);
// console.log(ll);

// console.log(LinkedList);
module.exports = LinkedList;
