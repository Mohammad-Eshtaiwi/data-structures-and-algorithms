/* eslint-disable quotes */
const { BinaryTree, Node: MyNode } = require("../tree/tree");
// bulid first tree
let one = new MyNode(150);
let two = new MyNode(100);
let three = new MyNode(250);
let four = new MyNode(75);
let five = new MyNode(160);
let six = new MyNode(200);
let seven = new MyNode(350);
let eight = new MyNode(125);
let nine = new MyNode(175);
let ten = new MyNode(300);
let eleven = new MyNode(500);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;
five.left = eight;
five.right = nine;
seven.left = ten;
seven.right = eleven;

const t1 = new BinaryTree(one);

// bulid sec tree
one = new MyNode(43);
two = new MyNode(100);
three = new MyNode(600);
four = new MyNode(15);
five = new MyNode(160);
six = new MyNode(200);
seven = new MyNode(350);
eight = new MyNode(125);
nine = new MyNode(175);
ten = new MyNode(4);
eleven = new MyNode(500);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;
five.left = eight;
five.right = nine;
seven.left = ten;
seven.right = eleven;

const t2 = new BinaryTree(one);

module.exports = { t1, t2 };
