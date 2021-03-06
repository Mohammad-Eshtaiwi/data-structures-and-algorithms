/* eslint-disable quotes */
const hoursOpen = [
  "9 a.m.",
  "10 a.m.",
  "11 a.m.",
  "12 p.m.",
  "1 p.m.",
  "2 p.m.",
  "3 p.m.",
  "4 p.m.",
  "5 p.m.",
  "6 p.m.",
  "7 p.m.",
  "8 p.m.",
];

const firstPike = [17, 18, 23, 24, 24, 12, 13, 27, 30, 20, 24, 18];
const seaTac = [26, 5, 5, 59, 23, 39, 38, 20, 30, 7, 59, 43];
const seattleCenter = [7, 14, 19, 22, 15, 4, 23, 27, 28, 23, 1, 29];
const capHill = [5, 85, 58, 51, 50, 13, 33, 32, 47, 94, 31, 62];
const alkiBeach = [33, 31, 147, 130, 27, 93, 38, 126, 141, 63, 46, 17];

const cookieStores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];

const grandTotal = (stores) => {
  // Solution code here...
  let sum = [];

  let hourlySum = 0;
  for (let hour = 0; hour < stores[0].length; hour++) {
    for (let store = 0; store < stores.length; store++) {
      hourlySum += stores[store][hour];
    }

    sum[hour] = hourlySum;

    hourlySum = 0;
  }
  return sum;
};

const salesData = (hours, data) => {
  // Solution code here...
  return data.map((item, index) => {
    const obj = {};
    obj.sales = `${item} cookies`;
    obj.time = hours[index];
    return obj;
  });
};

console.log(salesData(hoursOpen, grandTotal(cookieStores)));
