const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];

const append = (arr1, arr2) => {
  arr2.forEach((number) => {
    arr1.push(number);
  });
  return arr1;
};
append(a, b);
console.log(a);
