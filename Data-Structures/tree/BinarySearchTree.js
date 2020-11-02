/* eslint-disable quotes */
const { Node } = require("./Node");
const { BinaryTree: Tree } = require("./tree");

class BinarySearchTree extends Tree {
  constructor(node = new Node(null)) {
    super(node);
  }
  add(value, currentNode = this.root) {
    const node = new Node(value);
    if (!currentNode.value) {
      this.root = node;
      console.log(currentNode);
      return this.root.value;
    }
    if (!currentNode.left && currentNode.value > value) {
      currentNode.left = node;
      return node;
    }
    if (!currentNode.right && currentNode.value < value) {
      currentNode.right = node;
      return node;
    }
    if (currentNode.left && currentNode.value > value) {
      return this.add(value, currentNode.left);
    }
    if (currentNode.right && currentNode.value < value) {
      return this.add(value, currentNode.right);
    }
    return;
  }
  contain(value, currentNode = this.root) {
    if (currentNode.value === value) {
      return true;
    }
    if (!currentNode.left && currentNode.value > value) {
      if (currentNode.value === value) return true;
    }
    if (!currentNode.right && currentNode.value < value) {
      if (currentNode.value === value) return true;
    }
    if (currentNode.left && currentNode.value > value) {
      return this.contain(value, currentNode.left);
    }
    if (currentNode.right && currentNode.value < value) {
      return this.contain(value, currentNode.right);
    }
    return false;
  }
  maximumValue(currentNode = this.root, max) {
    if (this.root.value === null) return "this tree is empty";

    if (currentNode === this.root) max = currentNode.value;
    // if (!currentNode.right) return max;
    if (currentNode.value > max) {
      max = currentNode.value;
    }
    if (currentNode.right) {
      max = this.maximumValue(currentNode.right, max);
    }
    //  else if (currentNode.left) {
    //   max = this.maximumValue(currentNode.left, max);
    // }
    return max;
  }
}

const bst = new BinarySearchTree();

bst.add(8);
bst.add(3);
bst.add(10);
bst.add(1);
bst.add(6);
bst.add(4);
bst.add(7);
bst.add(14);
bst.add(13);

console.log(bst.root);
console.log(bst);
console.log(bst.inOrder());
console.log(bst.contain(7));
console.log("max", bst.maximumValue());
console.log("breadthFirst", bst.breadthFirst());
// 1 3 4 6 7 8 10 14 13
// let emptyTree = new BinarySearchTree();
// console.log(emptyTree.maximumValue());
module.exports = BinarySearchTree;
