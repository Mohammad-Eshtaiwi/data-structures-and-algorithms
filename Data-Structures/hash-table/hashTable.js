/* eslint-disable quotes */
"use strict";
const LinkedList = require("./linkList");

class HashMap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key) {
    const sumCharCode = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    // we need to * by a prime number
    // we need to % size to stay in bound
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }

  add(key, value) {
    // we need an index to put the value at
    const index = this.hash(key);

    // we need to check if there is already a value at index
    if (!this.storage[index]) {
      const ll = new LinkedList();
      ll.prepend({ [key]: value });
      this.storage[index] = ll;
    } else {
      // we already have a value at this index
      this.storage[index].prepend({ [key]: value });
    }
  }
  contain(key) {
    const index = this.hash(key);
    const result = this.storage[index];
    return result === undefined ? false : true;
  }
  get(key) {
    const index = this.hash(key);
    const result = this.storage[index];
    return result === undefined ? null : result;
  }
}

const hashmap = new HashMap(4000);
// hashmap.add("name");
// hashmap.add("one", "thing");
// hashmap.add("eno", "1");
// hashmap.add("neo", "2");
hashmap.add("this", "nothing");
// console.log(hashmap.contain("this"));
// console.log(hashmap.contain("moohahahaha"));
console.log(hashmap.get("this"));
let hi = hashmap.get("this");
debugger;
console.log(hi.get({ ["this"]: "nothing" }));
// console.log(hashmap.get("moohahahaha"));
// console.log(hashmap.storage);

module.exports = HashMap;
