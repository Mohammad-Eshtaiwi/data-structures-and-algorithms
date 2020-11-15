module.exports = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j >= 0 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};
