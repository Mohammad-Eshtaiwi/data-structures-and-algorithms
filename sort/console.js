const alphabetize = (arr) => {
  // Solution code here...
  arr.sort((a, b) => {
    if (a.toUpperCase() > b.toUpperCase()) return 1;
    else if (a.toUpperCase() < b.toUpperCase()) return -1;
    else return 0;
  });
  return arr;
};

console.log(alphabetize(["alphabet", "Zebra", "Alphabet", "carrot"]));
