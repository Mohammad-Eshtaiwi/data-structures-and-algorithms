/* eslint-disable quotes */
const gruffaloCrumble = {
  name: "How to make a Gruffalo Crumble",
  ingredients: [
    "1 medium-sized Gruffalo",
    "8 pounds oats",
    "2 pounds brown sugar",
    "4 pounds flour",
    "2 gallons pure maple syrup",
    "16 cups chopped nuts",
    "1 pound baking soda",
    "1 pound baking powder",
    "1 pound cinnamon",
    "6 gallons melted butter",
    "2 gallons fresh water",
  ],
  steps: [
    "Pre-heat a large oven to 375",
    "De-prickle the gruffalo",
    "Sprinkle with cinnamon, sugar, flour, and nuts",
    "Mix until evenly distributed",
    "Grease a 3-foot x 3-foot casserole dish",
    "Combine gruffalo compote with water to maintain moisture in the oven",
    "Fold together remaining ingredients to make the crisp",
    "Spread the crisp evenly over the gruffalo mixture",
    "Bake for 12-15 hours",
  ],
};

const listFoods = (recipe) => {
  let { ingredients } = recipe;
  let result = [];
  // Solution code here...
  ingredients.forEach((item) => {
    let arr = item.split(" ");
    arr = arr.slice(2);
    result.push(arr.join(" "));
  });
  return result;
};
console.log(listFoods(gruffaloCrumble));
