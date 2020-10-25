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
    const newNode = new NodeClass(value);
    if (this.isEmpty()) {
      this.head = newNode;
      return this.toString();
    }
    const temp = this.head.next;
    newNode.next = temp;
    this.head.next = newNode;
    return this.toString();
  }
  includes(value) {
    let current = this.head;
    // console.log(current);
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

    if (current.value === value) {
      const temp = this.head;
      const newNode = new NodeClass(newVal);
      newNode.next = temp;
      this.head = newNode;
      return this.toString();
    }
    // else find the desired value
    else {
      while (current.next) {
        console.log("__while");

        console.log("__while");
        if (current.next === null) break;
        if (current.next.value === value) break;
        current = current.next;
      }
    }
    const temp = current.next;
    const newNode = new NodeClass(newVal);
    current.next = newNode;
    newNode.next = temp;
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
      return this.toString();
    }
    this.size++;
    const newNode = new NodeClass(newVal);
    current.next = newNode;
    newNode.next = temp;
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
    return arr[arr.length - 1 - k];
  }
  toArray() {
    try {
      const arr = [];
      let current = this.head;
      while (current.next) {
        arr[arr.length] = current.value;
        current = current.next;
      }
      arr[arr.length] = current.value;
      return arr;
    } catch (error) {
      return [];
    }
  }
  isEmpty() {
    return this.size === 0 ? true : false;
  }
}
const ll = new LinkedList();

// ll.insert(1);
// ll.insert(2);
// ll.insert(3);
ll.append(1);
ll.append(2);
ll.append(3);
console.log(ll.insertBefore(1, 0));
// console.log(ll.includes(5));
console.log(ll.toString());

const ll2 = new LinkedList();

ll2.append(6);
ll2.append(7);
ll2.append(8);
ll2.append(9);
ll2.append(10);

// console.log(reverse(ll));
// function reverse(lltoRev) {
//   console.log(lltoRev);
//   const arr = [];

//   let current = lltoRev.head;

//   arr[arr.length] = current.value;

//   while (current.next) {
//     current = current.next;

//     arr[arr.length] = current.value;
//   }

//   arr[arr.length] = current.value;

//   let llNew = new LinkedList();

//   for (let index = arr.length - 1; index > -1; index--) {
//     console.log(index);
//     llNew.append(arr[index - 1]);
//   }
//   return llNew.toString();
// }

// function palindrome(ll) {
//   let arr = [];
//   let newArr = [];
//   let currentNode = this.head;
//   while (currentNode.value) {
//     arr[arr.length] = currentNode.value;
//     currentNode = currentNode.next;
//   }
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr[newArr.length] = arr[i];
//   }
//   for (let j = 0; j < arr.length; j++) {
//     if ((arr[j] = !newArr[j])) {
//       return false;
//     }
//   }
//   return true;
// }
// palindrome(ll);

// console.log(ll.kthFromEnd(0));

// console.log(ll.size);

// console.log(LinkedList);
module.exports = LinkedList;
