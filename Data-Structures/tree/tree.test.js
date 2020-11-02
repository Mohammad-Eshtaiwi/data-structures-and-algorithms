/* eslint-disable quotes */
const { BinaryTree, Node } = require("./tree");

describe("binary tree", () => {
  let tree = null;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    tree = new BinaryTree(one);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
  });
  it("preOrder ", () => {
    const expected = [1, 2, 4, 5, 3];
    expect(tree.preOrder()).toEqual(expected);
  });
  it("postOrder ", () => {
    const expected = [4, 5, 2, 3, 1];
    expect(tree.postOrder()).toEqual(expected);
  });
  it("inOrder", () => {
    const expected = [4, 2, 5, 1, 3];
    expect(tree.inOrder()).toEqual(expected);
  });
  it("should ", () => {
    const one = new Node(2);
    const two = new Node(7);
    const three = new Node(5);
    const four = new Node(2);
    const five = new Node(6);
    const six = new Node(9);
    const seven = new Node(5);
    const eight = new Node(11);
    const nine = new Node(4);
    five.left = seven;
    five.right = eight;
    six.left = nine;
    three.right = six;

    tree = new BinaryTree(one);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    const expected = [2, 7, 5, 2, 6, 9, 5, 11, 4];

    expect(tree.breadthFirst()).toEqual(expected);
  });
});
