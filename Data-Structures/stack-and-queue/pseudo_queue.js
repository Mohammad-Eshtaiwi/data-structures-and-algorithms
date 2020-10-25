/* eslint-disable quotes */
const Stack = require("./stack");

class PseudoQueue {
  constructor() {
    this.storage = new Stack();
    this.backup = new Stack();
  }
  enqueue(value) {
    //   add new value to the queue
    return this.storage.push(value);
  }
  dequeue() {
    let poped;
    // add all the values in the storage to the backup
    // eslint-disable-next-line no-constant-condition
    while (true) {
      poped = this.storage.pop();
      // stop when the storage is empty
      if (poped === "this stack is empty") break;
      this.backup.push(poped);
    }

    // save and pop the value of the top of the backup;
    const result = this.backup.pop();

    // return the values from the backup into the storage
    // eslint-disable-next-line no-constant-condition
    while (true) {
      poped = this.storage.pop();
      if (poped === "this stack is empty") break;
      this.storage.push(poped);
    }
    // meaningful message = happy user
    return result !== "this stack is empty" ? result : "this queue is empty";
  }
}

// const pQueue = new PseudoQueue();
// console.log(pQueue.enqueue(1));
// console.log(pQueue.enqueue(2));
// console.log(pQueue.enqueue(3));
// console.log(pQueue.dequeue());
// console.log(pQueue.dequeue());
// console.log(pQueue.dequeue());
// console.log(pQueue.dequeue());
// console.log(pQueue.dequeue());

module.exports = PseudoQueue;
