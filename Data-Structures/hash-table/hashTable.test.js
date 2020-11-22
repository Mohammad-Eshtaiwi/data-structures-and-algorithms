/* eslint-disable quotes */
const HashMap = require("./hashTable");

describe("hash table", () => {
  let hashmap;
  beforeAll(() => {
    hashmap = new HashMap(4000);
  });
  it("should add new item to the hashMap", () => {
    hashmap.add("hi", "hello");
    expect(hashmap.contain("hi")).toEqual(true);
  });
  it("should get saved item", () => {
    hashmap.add("hi", "hello");
    expect(hashmap.get("hi").get({ hi: "hello" })).toEqual({ hi: "hello" });
  });
  it("should get null if item not exist", () => {
    expect(hashmap.get("haha")).toEqual(null);
  });
  it("should get size > 1 in case added more than 1 item to the same index", () => {
    console.log(hashmap.get("hi").size);
    expect(hashmap.get("hi").size > 1).toEqual(true);
  });
});
