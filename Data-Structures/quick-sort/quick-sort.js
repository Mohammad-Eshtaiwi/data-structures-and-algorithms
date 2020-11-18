function quickSort(arr, start, end) {
  if (start >= end) return;
  let boundary = partition(arr, start, end);
  quickSort(arr, start, boundary - 1);
  quickSort(arr, boundary + 1, end);
}

function partition(arr, start, end) {
  let pivot = arr[end];
  let boundary = start - 1;
  for (let i = start; i <= end; i++) {
    if (arr[i] <= pivot) swap(arr, i, ++boundary);
  }
  return boundary;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
// let arr = [8, 4, 23, 42, 16, 15];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

module.exports = quickSort;
