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

describe(`insertShiftArray`, () => {
  it(`should insert new item in the middle`, () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([
      4,
      8,
      15,
      16,
      23,
      42,
    ]);
  });
});
