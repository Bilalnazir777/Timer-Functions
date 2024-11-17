// controllers/foodController.js

const {
  fetchFoodList,
  fetchAvailableLocations,
  fetchNutritionalInfo,
  fetchStockOutFoods,
} = require("../services/foodData.service");

/**
 * Controller to handle the food data endpoint
 */
const getFoodData = async (req, res) => {
  try {
    // Parallelize the fetching of data using Promise.all
    const [foodList, locations, nutritionInfo, stockOutFoods] =
      await Promise.all([
        fetchFoodList(),
        fetchAvailableLocations(),
        fetchNutritionalInfo(),
        fetchStockOutFoods(),
      ]);

    // Build the response data
    const responseData = {
      foodList,
      locations,
      nutritionInfo,
      stockOutFoods,
    };

    // Respond with the assembled data
    res.status(200).json(responseData);
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching food data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching food data" });
  }
};

module.exports = {
  getFoodData,
};
