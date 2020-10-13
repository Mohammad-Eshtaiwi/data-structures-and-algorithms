function binarySearch(arr, l, r, val) {
  // console.log("left", l);
  // console.log("reft", r);
  let mid = -1;
  if (r >= l) {
    // console.log(mid);
    mid = Math.ceil(l + (r - l) / 2);
    // console.log(mid);
    // console.log(arr[mid]);
    // console.log(arr[mid]);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) return binarySearch(arr, mid + 1, r, val);
    else if (arr[mid] > val) return binarySearch(arr, l, mid - 1, val);
  } else return -1;
}
let arrToTest = [4, 8, 15, 16, 23, 42];
console.log(binarySearch(arrToTest, 0, arrToTest.length - 1, 15));
