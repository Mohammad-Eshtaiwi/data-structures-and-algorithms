/* eslint-disable quotes */
const snorlaxStats = {
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
const extractStats = ({ stats }) => {
  // Solution code here...
  return stats.map((item) => {
    let obj = {};
    obj.name = item.stat.name;
    obj.total = item.effort + item.baseStat;
    return obj;
  });
};
console.log(extractStats(snorlaxStats));
