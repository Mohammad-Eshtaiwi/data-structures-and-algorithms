function sort(arr) {
  if (arr.length < 2) return;
  let mid = Math.floor(arr.length / 2);
  let left = [];
  let right = [];
  for (let i = 0; i < mid; i++) left.push(arr[i]);
  for (let i = mid; i < arr.length; i++) right.push(arr[i]);
  sort(left);
  sort(right);
  merge(left, right, arr);

  return arr;
}

function merge(left, right, arr) {
  let i, j, k;
  i = j = k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) arr[k++] = left[i++];
    else arr[k++] = right[j++];
  }
  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];
  return arr;
}

console.log(sort([8, 4, 23, 42, 16, 15]));
module.exports = sort;
