/* eslint-disable quotes */
const reversedString = (str) => {
  // Solution code here...
  let arr = str.split("");
  return arr.reduce(
    (acc, val, index, arr) => acc.concat(arr[arr.length - index - 1]),
    ""
  );
};

console.log(reversedString("Code 301"));
