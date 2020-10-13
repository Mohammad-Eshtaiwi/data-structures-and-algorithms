function insertShiftArray(arr, val) {
  const index = Math.ceil(arr.length / 2);
  const result = [];

  arr.forEach((item, currentIndex) => {
    if (currentIndex === index) {
      result.push(val);
    }
    result.push(item);
  });
  return result;
}

console.log(insertShiftArray([4, 8, 15, 23, 42], 16));
// [4,8,15,16,23,42]
