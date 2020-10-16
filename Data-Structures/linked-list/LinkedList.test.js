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
describe("inser()", () => {
  const ll = new LinkedList();
  it("should have abilty to add new node", () => {
    expect(ll.insert(1)).toEqual(ll.head);
  });
  it("should have abilty to add muti nodes", () => {
    expect(ll.insert(2)).toEqual(ll.head);
  });
});

describe("include()", () => {
  const ll = new LinkedList();
  ll.insert(1);
  it("should return true when finding a value within the linked list that exists", () => {
    expect(ll.includes(1)).toEqual(true);
  });
  it("return false when searching for a value in the linked list that does not exist", () => {
    expect(ll.includes(2)).toEqual(false);
  });
});
describe("toString()", () => {
  const ll = new LinkedList();
  ll.insert(1);
  ll.insert(2);
  ll.insert(3);
  it("should return a collection of all the values that exist in the linked list", () => {
    expect(ll.toString()).toEqual(`1->2->3->null`);
  });
});
