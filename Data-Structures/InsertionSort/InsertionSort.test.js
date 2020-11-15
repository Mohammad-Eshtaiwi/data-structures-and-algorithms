/* eslint-disable quotes */
const insertionSort = require("./InsertionSort");
describe("Insertion test", () => {
  it("should return sorted array", () => {
    expect(insertionSort([8, 4, 23, 42, 16, 15])).toEqual([
      4,
      8,
      15,
      16,
      23,
      42,
    ]);
  });
});
