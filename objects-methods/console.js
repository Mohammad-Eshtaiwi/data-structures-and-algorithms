/* eslint-disable quotes */
const cheerio = require("cheerio");
const Mustache = require("mustache");
let characters = [
  {
    name: "Eddard",
    spouse: "Catelyn",
    children: ["Robb", "Sansa", "Arya", "Bran", "Rickon"],
    house: "Stark",
  },
  {
    name: "Jon A.",
    spouse: "Lysa",
    children: ["Robin"],
    house: "Arryn",
  },
  {
    name: "Cersei",
    spouse: "Robert",
    children: ["Joffrey", "Myrcella", "Tommen"],
    house: "Lannister",
  },
  {
    name: "Daenarys",
    spouse: "Khal Drogo",
    children: ["Drogon", "Rhaegal", "Viserion"],
    house: "Targaryen",
  },
  {
    name: "Mace",
    spouse: "Alerie",
    children: ["Margaery", "Loras"],
    house: "Tyrell",
  },
  {
    name: "Euron",
    spouse: null,
    children: [],
    house: "Greyjoy",
  },
  {
    name: "Jon S.",
    spouse: null,
    children: [],
    house: "Snow",
  },
];
console.log("hi");
const hasChildrenValues = (arr, character) => {
  // Solution code here...
  let hasChildren = false;
  arr.forEach((item) => {
    if (item.name === character) {
      let values = Object.values(item);
      console.log(values[2]);
      if (values.length > 0) hasChildren = true;
    }
  });
  return hasChildren;
};
console.log(hasChildrenValues(characters, "Sansa"));
