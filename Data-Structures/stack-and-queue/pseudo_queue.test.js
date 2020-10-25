/* eslint-disable quotes */
const PseudoQueue = require("./pseudo_queue");

describe("PseudoQueue", () => {
  it("should add new value into the queue", () => {
    const pQueue = new PseudoQueue();
    expect(pQueue.enqueue(1)).toEqual(1);
  });
  it("should delete value from the queue", () => {
    const pQueue = new PseudoQueue();
    pQueue.enqueue(1);
    expect(pQueue.dequeue()).toEqual(1);
  });
  it("should return message to the user tell him the queue empty if dequeue from empty queue", () => {
    const pQueue = new PseudoQueue();
    expect(pQueue.dequeue()).toEqual("this queue is empty");
  });
});
