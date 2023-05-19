// Import the modules
const express = require("express");
const path = require("path");

// Initialise the app using express
const app = express();

// Setting up the PORT
const PORT = process.env.PORT || 5000;

// creating the routes

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Better way to do that is to make the public folder as static
// It will automatically search for file in the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Listen to the PORT
app.listen(PORT, () => {
  console.log(`Server started at the port: ${PORT}`);
});
