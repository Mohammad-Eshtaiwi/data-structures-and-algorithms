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
  breadthFirst() {
    const results = [];
    const _walk = (node) => {
      const nodes = [];
      if (Array.isArray(node)) {
        for (let i = 0; i < node.length; i++) {
          results[results.length] = node[i].value;
          if (node[i].left) nodes[nodes.length] = node[i].left;
          if (node[i].right) nodes[nodes.length] = node[i].right;
        }
      } else {
        results[results.length] = node.value;
        if (node.left) nodes[nodes.length] = node.left;
        if (node.right) nodes[nodes.length] = node.right;
      }
      if (nodes.length === 0 && node !== this.root) return;
      if (node === this.root && !this.root.left && !this.root.right) return;
      return _walk(nodes);
    };
    _walk(this.root);
    return results;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
// const one = new Node(2);
// const two = new Node(7);
// const three = new Node(5);
// const four = new Node(2);
// const five = new Node(6);
// const six = new Node(9);
// const seven = new Node(5);
// const eight = new Node(11);
// const nine = new Node(4);
// five.left = seven;
// five.right = eight;
// six.left = nine;
// three.right = six;

const tree = new BinaryTree(one);
one.left = two;
one.right = three;
two.left = four;
two.right = five;

console.log(tree.inOrder());

module.exports = { BinaryTree, Node };
