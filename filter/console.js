/* eslint-disable quotes */

const snorlaxData = {
  stats: [
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/6/",
        name: "speed",
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/5/",
        name: "special-defense",
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/4/",
        name: "special-attack",
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: "snorlax",
  weight: 4600,
};

const getStatName = (arr, minBaseStat) => {
  // Solution code here...
  let result = arr.filter((item) => item.baseStat >= minBaseStat);
  return result.map((item) => item.stat.name);
};
console.log(getStatName(snorlaxData.stats, 50));

// xdescribe("Testing challenge 6", () => {
//   test("It should return the name of the stats that exceed that maximum", () => {
//     expect(getStatName(snorlaxData.stats, 50)).toStrictEqual([
//       "special-defense",
//       "special-attack",
//     ]);
//     expect(getStatName(snorlaxData.stats, 50).length).toStrictEqual(2);
//   });
