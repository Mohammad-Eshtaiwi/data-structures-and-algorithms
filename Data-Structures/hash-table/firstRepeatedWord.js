/* eslint-disable quotes */
const HashMap = require("./hashTable");
// console.log(
//   firstRepeatedWord(
//     "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."
//   )
// );
function firstRepeatedWord(str) {
  const hashmap = new HashMap(str.length);
  str = split(str);
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    let result = hashmap.add(str[i], str[i]);
    if (result.size > 1) return str[i];
  }
}

function split(str) {
  const arrOfWords = [];
  let index = arrOfWords.length;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      index++;
      continue;
    }
    if (typeof arrOfWords[index] !== "string") arrOfWords[index] = "";
    let currentStr = arrOfWords[index];
    currentStr = currentStr + str[i].toLowerCase();
    arrOfWords[index] = currentStr;
  }
  return arrOfWords;
}
module.exports = firstRepeatedWord;
