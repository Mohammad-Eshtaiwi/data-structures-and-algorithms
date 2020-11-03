const { BinaryTree, Node } = require("./tree");
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const tree = new BinaryTree(one);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
function fizzBuzzTree(tree) {
  debugger;
  let newTree = JSON.parse(JSON.stringify(tree));
  function _walk(node = newTree.root) {
    const nodes = [];
    if (Array.isArray(node)) {
      for (let i = 0; i < node.length; i++) {
        node[i].value = fizzbuzz(node[i].value);
        if (node[i].left) nodes[nodes.length] = node[i].left;
        if (node[i].right) nodes[nodes.length] = node[i].right;
      }
    } else {
      node.value = fizzbuzz(node.value);
      if (node.left) nodes[nodes.length] = node.left;
      if (node.right) nodes[nodes.length] = node.right;
    }
    if (nodes.length === 0 && node !== newTree.root) return;
    if (node === newTree.root && !newTree.root.left && !newTree.root.right) {
      // console.log("hiii its meee");
      return;
    }
    return _walk(nodes);
  }
  _walk();
  // console.log(newTree);
  return new BinaryTree(newTree.root);
}

// console.log(fizzBuzzTree(tree).inOrder());

function fizzbuzz(number) {
  // Solution code here...

  if (number % 5 === 0 && number % 3 === 0) {
    return "FizzBuzz";
  }
  if (number % 5 === 0) {
    return "Buzz";
  }
  if (number % 3 === 0) {
    return "Fizz";
  }

  return number.toString();
}
module.exports = fizzBuzzTree;
