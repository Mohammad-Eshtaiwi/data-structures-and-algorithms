/* eslint-disable quotes */
const quickSort = require("./quick-sort");

describe("sort sort", () => {
  it("should return sorted arr", () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let expected = [4, 8, 15, 16, 23, 42];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual(expected);
  });
});
