const LinkedList = require("./linkedList");
const ll = new LinkedList();

ll.append(1);
ll.insert(2);
ll.append(3);
ll.append(4);
ll.append(5);

const ll2 = new LinkedList();

ll2.append(6);
ll2.append(7);
ll2.append(8);
ll2.append(9);
ll2.append(10);

console.log(zipLists(ll, ll2));
function zipLists(list1, list2) {
  list1 = list1.toArray();
  list2 = list2.toArray();

  let length = list1.length >= list2.length ? list1.length : list2.length;

  const result = [];
  for (let index = 0; index < length; index++) {
    if (index < list1.length) result[result.length] = list1[index];
    if (index < list2.length) result[result.length] = list2[index];
  }
  const resultLL = new LinkedList();
  for (let index = 0; index < result.length; index++) {
    resultLL.append(result[index]);
  }
  return resultLL.toString();
}

module.exports = zipLists;
