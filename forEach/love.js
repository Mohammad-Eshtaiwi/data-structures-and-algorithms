const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const fizzbuzz = (arr) => {
  // Solution code here...
  const result = [];
  arr.forEach((number) => {
    if ((number % 5 === 0) & (number % 3 === 0)) {
      result.push("Fizz Buzz");
      return;
    }
    if (number % 5 === 0) {
      result.push("Buzz");
      return;
    }
    if (number % 3 === 0) {
      result.push("Fizz");
      return;
    }
    result.push(number);
  });
  return result;
};
console.log(fizzbuzz(inputs));
