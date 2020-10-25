/* eslint-disable quotes */
const LinkedList = require("./linkedList");
describe("Can successfully instantiate an empty linked list", () => {
  const ll = new LinkedList();
  it("it should be instance of LinkedList", () => {
    expect(ll).toBeInstanceOf(LinkedList);
  });
  it("it should have empty head at the start", () => {
    const ll = new LinkedList();
    expect(ll.head).toBeNull();
  });
});
describe("append()", () => {
  const ll = new LinkedList();
  it("should have abilty to add new node", () => {
    expect(ll.append(1)).toEqual(ll.head);
  });
  it("should have abilty to add muti nodes", () => {
    expect(ll.append(2)).toEqual(ll.head);
  });
});
describe("inderst()", () => {
  it("should return add value at the start", () => {
    const ll = new LinkedList();
    expect(ll.insert(1)).toEqual(`1->null`);
  });
  it("should add new node after the head", () => {
    const ll = new LinkedList();
    ll.append(1);
    expect(ll.insert(2)).toEqual(`1->2->null`);
    expect(ll.insert(3)).toEqual(`1->3->2->null`);
  });
});

describe("include()", () => {
  const ll = new LinkedList();
  ll.append(1);
  it("should return true when finding a value within the linked list that exists", () => {
    expect(ll.includes(1)).toEqual(true);
  });
  it("return false when searching for a value in the linked list that does not exist", () => {
    expect(ll.includes(2)).toEqual(false);
  });
});
describe("toString()", () => {
  const ll = new LinkedList();
  ll.append(1);
  ll.append(2);
  ll.append(3);
  it("should return a collection of all the values that exist in the linked list", () => {
    expect(ll.toString()).toEqual(`1->2->3->null`);
  });
});
describe("insertAfter", () => {
  const ll = new LinkedList();
  ll.append(1);
  ll.append(2);
  ll.append(3);

  it("should return value is not valid if given value is not found", () => {
    expect(ll.insertAfter(4, 7)).toEqual(`value is not valid`);
  });
  it("should return value is not valid if given value is not found", () => {
    ll.append(4);
    expect(ll.insertAfter(4, 7)).toEqual(`1->2->3->4->7->null`);
  });
});

describe("insertBefore", () => {
  const ll = new LinkedList();
  ll.append(1);
  ll.append(2);
  ll.append(3);

  it("should return value is not valid if given value is not found", () => {
    expect(ll.insertBefore(4, 7)).toEqual(`value is not valid`);
  });
  it("should return value is not valid if given value is not found", () => {
    ll.append(4);
    expect(ll.insertBefore(4, 7)).toEqual(`1->2->3->7->4->null`);
  });
});

describe("kthFromEnd(k)", () => {
  //   Where k is greater than the length of the linked list\
  const ll = new LinkedList();
  ll.append(1);
  ll.append(2);
  ll.append(3);
  ll.append(4);
  ll.append(5);
  it("should return error message if entered value out of range ", () => {
    expect(ll.kthFromEnd(10)).toEqual(`out of range`);
  });
  // Where k and the length of the list are the same
  it("should return right where k and the length of the list are the same ", () => {
    expect(ll.kthFromEnd(4)).toEqual(1);
  });
  // Where k is not a positive integer
  it("should return error message if entered value is negative", () => {
    expect(ll.kthFromEnd(-4)).toEqual(`please enter a positive number`);
  });
  // Where the linked list is of a size 1
  const justOne = new LinkedList();
  justOne.append(1);
  it("should return error message if entered value is negative", () => {
    expect(justOne.kthFromEnd(0)).toEqual(1);
  });
  // “Happy Path” where k is not at the end, but somewhere in the middle of the linked list
  it("Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
    expect(ll.kthFromEnd(2)).toEqual(3);
  });
});
