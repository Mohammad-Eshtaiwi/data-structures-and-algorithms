/* eslint-disable quotes */
const sort = require("./merge-sort");

describe("mearge sort", () => {
  it("should return sorted arr", () => {
    expect(sort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
