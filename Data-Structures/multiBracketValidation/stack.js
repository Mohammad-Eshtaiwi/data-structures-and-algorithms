/* eslint-disable quotes */
const Node = require("./node");
class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
      return this.top.value;
    }
    const tempNode = this.top;
    node.next = tempNode;
    this.top = node;
    return this.top.value;
  }
  pop() {
    try {
      if (this.isEmpty()) throw Error("this stack is empty");
      const poped = this.top.value;
      this.top = this.top.next;
      return poped;
    } catch (error) {
      // console.log(error.message);
      return error.message;
    }
  }
  peek() {
    try {
      if (this.isEmpty()) throw Error("this stack is empty");
      return this.top.value;
    } catch (error) {
      // console.log(error.message);
      return error.message;
    }
  }
  isEmpty() {
    return !this.top ? true : false;
  }
}
module.exports = Stack;

// const stack = new Stack();

// console.log(stack.push(1));
// console.log(stack.push(2));
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// console.log(stack.peek());
// console.log(stack.peek());
