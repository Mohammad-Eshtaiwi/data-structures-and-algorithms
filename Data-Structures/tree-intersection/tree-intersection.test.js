/* eslint-disable quotes */
const treeIntersection = require("./tree-intersection");
const { t1, t2 } = require("./data");
console.log(t1);
describe("treeIntersection", () => {
  it("should return the treeIntersection", () => {
    expect(treeIntersection(t1.breadthFirst(), t2.breadthFirst())).toEqual([
      175,
      160,
      350,
      100,
      200,
      500,
      125,
    ]);
  });
});
