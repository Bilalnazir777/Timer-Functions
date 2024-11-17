// data/foodData.js

// Simulating delays for async data fetching
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchFoodList = async () => {
  await delay(115);
  return [
    {
      name: "Pasta",
      description: "Italian pasta served with a rich tomato sauce and herbs",
      price: 12.99,
    },
    {
      name: "Sushi",
      description:
        "Fresh sushi rolls made with premium fish, served with wasabi and soy sauce",
      price: 18.49,
    },
    {
      name: "Burger",
      description:
        "Juicy beef patty, cheddar cheese, lettuce, tomato, and pickles",
      price: 9.99,
    },
    {
      name: "Salad",
      description:
        "Mixed greens, cucumbers, tomatoes, and balsamic vinaigrette dressing",
      price: 7.49,
    },
  ];
};

const fetchAvailableLocations = async () => {
  await delay(2 * 60 * 1000);
  return ["New York", "Los Angeles", "Chicago", "San Francisco", "Seattle"];
};

const fetchNutritionalInfo = async () => {
  await delay(300);
  return [
    { name: "Pasta", calories: 450, protein: 12, carbs: 60 },
    { name: "Sushi", calories: 320, protein: 22, carbs: 40 },
    { name: "Burger", calories: 650, protein: 30, carbs: 50 },
    { name: "Salad", calories: 150, protein: 5, carbs: 20 },
  ];
};

const fetchStockOutFoods = async () => {
  await delay(100);
  return ["Pizza", "Hot Dog"];
};

module.exports = {
  fetchFoodList,
  fetchAvailableLocations,
  fetchNutritionalInfo,
  fetchStockOutFoods,
};
