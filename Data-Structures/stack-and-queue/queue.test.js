/* eslint-disable quotes */
const Queue = require("./queue");

describe("Queue", () => {
  it("Can successfully enqueue onto a queue", () => {
    const queue = new Queue();
    expect(queue.enqueue(1)).toEqual(1);
  });
  it("Can successfully enqueue multiple values onto a queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);
  });
  it("Can successfully empty a queue after multiple dequeues", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });
  it("Can successfully front the next item on the queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);
  });
  it("Can successfully instantiate an empty queue", () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toEqual(true);
  });
  it("Calling dequeue or peek on empty queue raises exception", () => {
    const queue = new Queue();
    expect(queue.dequeue()).toEqual("this queue is empty");
    expect(queue.peek()).toEqual("this queue is empty");
  });
});
