/* eslint-disable quotes */
// describe('Testing challenge 1', () => {
//     test('It should return markup with typo fixed', () => {
//       fixTheTypo();

//       expect($('.pear').text()).toStrictEqual('Pear');
//     });
//   });
// const cheerio = require("cheerio");
// const $ = createSnippetWithJQuery(`
// <ul id="fruits">
//   <li class="apple">Apple</li>
//   <li class="orange">Orange</li>
//   <li class="pear">Perr</li>
// </ul>
// `);

// const firstLetters = (arr) => {
//   // Solution code here...
//   return arr.filter((str) => str.includes(":)"));
// };
const events = [
  "Tuesday",
  "Monday",
  "Wednesday and Thursday",
  "Tuesday 2",
  "Thursday",
];
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const characterByIndex = (arr) => {
  // Solution code here...
  return arr.map((str, index) => str[index]);
};

console.log(characterByIndex(["abcd", "efgh", "ijkl", "mnop"]));
// function createSnippetWithJQuery(html) {
//   return cheerio.load(html);
// }
