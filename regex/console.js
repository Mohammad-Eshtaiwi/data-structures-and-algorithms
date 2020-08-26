/* eslint-disable quotes */
let cities = [
  "Cleveland",
  "San Diego",
  "Birmingham",
  "Seattle",
  "Miami",
  "New York City",
  "Omaha",
  "Portland",
  "Austin",
  "Boston",
  "Newport Beach",
  "Hoboken",
];
const isNum = (input) => {
  // Solution code here...
  let reg = /[A-J]\w/g;
  let result = [];
  input.forEach((item) => {
    console.log(item);

    if (item.split(" ")[0].match(reg)) result.push(item);
  });
  return result;
};
console.log(isNum(cities));

// describe("Testing challenge 4", () => {
//     let cities = [
//       "Cleveland",
//       "San Diego",
//       "Birmingham",
//       "Seattle",
//       "Miami",
//       "New York City",
//       "Omaha",
//       "Portland",
//       "Austin",
//       "Boston",
//       "Newport Beach",
//       "Hoboken",
//     ];

//     test("It should return the cities whose names begin with the letters A through J", () => {
//       expect(citiesAtoJ(cities)).toContain(
//         "Cleveland",
//         "Birmingham",
//         "Austin",
//         "Boston",
//         "Hoboken"
//       );
