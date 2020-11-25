/* eslint-disable quotes */
const MyHashMap = require("../hash-table/hashTable");
const leftJoin = require("./left-join");
const h1 = new MyHashMap(100);
const h2 = new MyHashMap(100);

h1.add("fond", "enamored");
h1.add("wrath", "anger");
h1.add("dilligent", "employed");
h1.add("outift", "grab");
h1.add("guide", "usher");
h2.add("fond", "averse");
h2.add("wrath", "delight");
h2.add("dilligent", "idle");
h2.add("guide", "follow");
h2.add("flow", "jam");

describe("left join", () => {
  it("should preform left join", () => {
    expect(leftJoin(h1, h2)).toEqual([
      ["fond", "averse", "enamored"],
      ["wrath", "delight", "anger"],
      ["dilligent", "idle", "employed"],
      ["outift", null, "grab"],
      ["guide", "follow", "usher"],
    ]);
  });
});
