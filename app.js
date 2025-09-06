const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

// More route imports go here
// app.use('/api/users', require('./routes/userRoutes'));

module.exports = app;
