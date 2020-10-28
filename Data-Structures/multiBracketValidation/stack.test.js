/* eslint-disable quotes */
const Stack = require("./stack");

describe("Stack", () => {
  it("Can successfully push onto a stack", () => {
    const stack = new Stack();
    expect(stack.push(1)).toEqual(1);
  });
  it("Can successfully push multiple values onto a stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toEqual(3);
  });
  it("Can successfully empty a stack after multiple pops", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });
  it("Can successfully peek the next item on the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toEqual(3);
  });
  it("Can successfully instantiate an empty stack", () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toEqual(true);
  });
  it("Calling pop or peek on empty stack raises exception", () => {
    const stack = new Stack();
    expect(stack.pop()).toEqual("this stack is empty");
    expect(stack.peek()).toEqual("this stack is empty");
  });
});
