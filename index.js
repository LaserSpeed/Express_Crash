// Import the express
const express = require("express");

// Initialise the app using express
const app = express();

// Setting up the PORT
const PORT = process.env.PORT || 5000;

// creating the routes
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

// Listen to the PORT
app.listen(PORT, () => {
  console.log(`Server started at the port: ${PORT}`);
});
