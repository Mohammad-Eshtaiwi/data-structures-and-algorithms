"use strict";

let arr = [1, 2, 3, 4, 5, 6];

function arrayReverse() {
  const result = [];
  console.log(arr.length);

  for (let i = arr.length - 1; i > 0; --i) {
    result.push(arr[i]);
  }

  return result;
}
console.log(arrayReverse());
