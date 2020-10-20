/* eslint-disable quotes */
const LinkedList = require("./linkedList");
const zipll = require("./zipll");

describe("zipll", () => {
  it("it should string that represent the new ll", () => {
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

    expect(zipll(ll, ll2)).toEqual("1->6->2->7->3->8->4->9->5->10->null");
  });
  it("it should mesage that say your ll is emppty", () => {
    const ll = new LinkedList();
    const ll2 = new LinkedList();
    expect(zipll(ll, ll2)).toEqual("your linked list is empty");
  });
});
