/* eslint-disable quotes */
"use strict";

let arr = [1, 2, 3, 4, 5, 6];

function arrayReverse() {
  const result = [];

  for (let i = arr.length - 1; i >= 0; --i) {
    result.push(arr[i]);
  }

  return result;
}

describe(`arrayReverse`, () => {
  it("should return the array reversed", () => {
    expect(arrayReverse()).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
