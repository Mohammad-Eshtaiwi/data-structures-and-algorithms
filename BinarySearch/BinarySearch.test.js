/* eslint-disable quotes */
function binarySearch(arr, l, r, val) {
  let mid = -1;
  if (r >= l) {
    mid = Math.ceil(l + (r - l) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) return binarySearch(arr, mid + 1, r, val);
    else if (arr[mid] > val) return binarySearch(arr, l, mid - 1, val);
  } else return -1;
}

describe("binarySearch", () => {
  it("should return the position of the value if found", () => {
    let arrToTest = [4, 8, 15, 16, 23, 42];
    expect(binarySearch(arrToTest, 0, arrToTest.length - 1, 15)).toEqual(2);
  });
  it("should return -1 if the value is not found", () => {
    let arrToTest = [11, 22, 33, 44, 55, 66, 77];
    expect(binarySearch(arrToTest, 0, arrToTest.length - 1, 90)).toEqual(-1);
  });
});
