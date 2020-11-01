/* eslint-disable quotes */
const { Node } = require("./Node");

class BinaryTree {
  constructor(node = null) {
    this.root = node;
  }
  // ROOT LEFT RIGHT
  preOrder() {
    const results = [];
    const _walk = (node) => {
      results[results.length] = node.value;
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }
  // LEFT RIGHT ROOT
  postOrder() {
    const results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results[results.length] = node.value;
    };
    _walk(this.root);
    return results;
  }
  inOrder() {
    const results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      results[results.length] = node.value;
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }
}

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// const five = new Node(5);
// const tree = new BinaryTree(one);
// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;

module.exports = { BinaryTree, Node };
