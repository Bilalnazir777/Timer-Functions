// index.js

const express = require("express");
const { getFoodData } = require("./controllers/foodController");
const app = express();
const PORT = process.env.PORT || 3000;

// Define the endpoint to fetch food data
app.get("/food-data", getFoodData);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
