/* eslint-disable quotes */
const Node = require("./node");
class Queue {
  constructor() {
    this.front = null;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.front = node;
      return this.front.value;
    }
    const tempNode = this.front;
    node.next = tempNode;
    this.front = node;
    return this.front.value;
  }
  dequeue() {
    try {
      if (this.isEmpty()) throw Error("this queue is empty");
      let current = this.front;
      if (!current.next) {
        const result = current.value;
        this.front = null;
        return result;
      }
      while (current.next.next !== null) {
        current = current.next;
      }

      let result = current.next;

      current.next = null;
      return result.value;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
  peek() {
    try {
      if (this.isEmpty()) throw Error("this queue is empty");
      let current = this.front;
      if (!current.next) {
        const result = current.value;
        this.front = null;
        return result;
      }
      while (current.next.next !== null) {
        current = current.next;
      }

      let result = current.next;

      return result.value;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  isEmpty() {
    return !this.front ? true : false;
  }
}

// const queue = new Queue();
// console.log(queue.isEmpty());
// console.log(queue.enqueue(1));
// console.log(queue.enqueue(2));
// console.log(queue.enqueue(3));

// console.log(queue.peek());
// console.log(queue.peek());
// console.log(queue.peek());
// console.log(queue.dnqueue());
// console.log(queue.dnqueue());
// console.log(queue.dnqueue());

// console.log(queue.front);
module.exports = Queue;
