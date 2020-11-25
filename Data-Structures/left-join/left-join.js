/* eslint-disable quotes */
const MyHashMap = require("../hash-table/hashTable");
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
function leftJoin(left, right) {
  right.storage.forEach((item) => {
    for (const [key, value] of Object.entries(item.head.value)) {
      //   console.log(`${key}: ${value}`);
      if (left.contain(key)) left.add(key, value);
    }
  });
  const results = [];
  left.storage.forEach((item) => {
    // console.log(Object.keys(item.head.value)[0]);
    if (item.size < 2)
      item.prepend({ [Object.keys(item.head.value)[0]]: null });
    // console.log(item.head);
    let current = item.head;
    let result = [];
    result[result.length] = Object.keys(item.head.value)[0];
    while (current) {
      console.log(current.value);
      result[result.length] = Object.values(current.value)[0];
      current = current.next;
    }
    results[results.length] = result;
  });
  console.log(results);
  return results;
}
leftJoin(h1, h2);

module.exports = leftJoin;
