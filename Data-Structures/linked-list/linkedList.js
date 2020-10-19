/* eslint-disable quotes */
const NodeClass = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(value) {
    if (!this.head) {
      this.head = new NodeClass(value);
      this.size++;
      return this.head;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = new NodeClass(value);
    this.size++;
    return this.head;
  }
  insert(value) {
    if (this.isEmpty()) return "append value first then try this again";
    const temp = this.head.next;
    const newNode = new NodeClass(value);
    newNode.next = temp;
    this.head.next = newNode;
    return this.toString();
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
    this.size++;
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
      this.size++;
      current.next = new NodeClass(newVal);
      console.log(this);
      return this.toString();
    }
    this.size++;
    const newNode = new NodeClass(newVal);
    current.next = newNode;
    newNode.next = temp;
    console.log(temp);
    return this.toString();
  }
  insertAtStart(value) {
    this.size++;
    const newNode = new NodeClass(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.toString();
  }
  kthFromEnd(k) {
    if (this.size - 1 < k) return "out of range";
    if (k < 0) return "please enter a positive number";
    let current = this.head;
    const arr = [];
    while (current.next) {
      arr[arr.length] = current.value;
      current = current.next;
    }
    arr[arr.length] = current.value;
    console.log(arr);
    return arr[arr.length - 1 - k];
  }
  isEmpty() {
    return this.size === 0 ? true : false;
  }
}
const ll = new LinkedList();
// ll.insertAtStart(0);
// ll.insert(7);
ll.append(1);
console.log(ll.insert(2));
ll.insert(7);
ll.append(3);
ll.append(4);
ll.append(5);
console.log(ll.kthFromEnd(0));
// console.log(ll.insertBefore(4, 7));
// console.log(ll.insertAfter(4, 7));
// console.log(ll.insertAfter(3, 7));
// console.log(ll.includes(5));

// console.log(ll.toString());
console.log(ll.size);
// console.log(ll);
// console.log(ll);

// console.log(LinkedList);
module.exports = LinkedList;