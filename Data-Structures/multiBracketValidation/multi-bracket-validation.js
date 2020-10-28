/* eslint-disable quotes */
/* eslint-disable indent */
const Stack = require("./stack");

class MultiBracketValidation {
  constructor(str) {
    this.stack = new Stack();
    this.str = [];
    for (let index = 0; index < str.length; index++) {
      if (this.isBracket(str[index])) {
        this.str[this.str.length] = str[index];
      }
    }
    this.brackets = new Stack();
  }
  validate() {
    for (let index = 0; index < this.str.length; index++) {
      console.log(this.str[index]);
      if (this.isOpening(this.str[index])) this.stack.push(this.str[index]);
      else if (this.stack.top.value === this.closing(this.str[index]))
        this.stack.pop();
      console.log(this.stack);
    }
    return this.stack.top ? false : true;
  }
  isBracket(str) {
    let flag = false;
    switch (str) {
      case "{":
        flag = true;
        break;

      case "}":
        flag = true;
        break;
      case "(":
        flag = true;
        break;
      case ")":
        flag = true;
        break;
      case "[":
        flag = true;
        break;
      case "]":
        flag = true;
        break;

      default:
        break;
    }
    return flag;
  }
  closing(str) {
    let bracket;
    switch (str) {
      case "}":
        bracket = "{";
        break;

      case "]":
        bracket = "[";
        break;

      case ")":
        bracket = "(";
        break;

      default:
        break;
    }
    return bracket;
  }
  isOpening(str) {
    let flag = false;
    switch (str) {
      case "{":
        flag = true;
        break;

      case "(":
        flag = true;
        break;

      case "[":
        flag = true;
        break;

      default:
        break;
    }
    return flag;
  }
}

module.exports = MultiBracketValidation;
