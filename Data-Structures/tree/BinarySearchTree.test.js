/* eslint-disable quotes */

const BinarySearchTree = require("./BinarySearchTree");

describe("binary tree", () => {
  let bst = null;
  beforeAll(() => {
    bst = new BinarySearchTree();
    bst.add(8);
    bst.add(3);
    bst.add(10);
    bst.add(1);
    bst.add(6);
    bst.add(4);
    bst.add(7);
    bst.add(14);
    bst.add(13);
  });
  it("it can add and return values in right order", () => {
    const expected = [1, 3, 4, 6, 7, 8, 10, 13, 14];
    expect(bst.inOrder()).toEqual(expected);
  });
  it("it return true if passed contained value", () => {
    expect(bst.contain(13)).toEqual(true);
  });
  it("it return false if passed uncontained value", () => {
    expect(bst.contain(0)).toEqual(false);
  });
  it("it return the maximum value", () => {
    expect(bst.maximumValue()).toEqual(14);
  });
  it("maximumValue shoud return massage say empty tree", () => {
    let emptyTree = new BinarySearchTree();
    expect(emptyTree.maximumValue()).toEqual("this tree is empty");
  });
});
