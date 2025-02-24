const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const recipeRoutes = require("./routes/recipeRoutes");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Backend is running!'));
module.exports = app;


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use("/api/recipes", recipeRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
