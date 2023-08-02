const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/ToDoRoute");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());
//connecting with mongodb
mongoose
  .connect(process.env.Mongodb_url)
  .then(() => console.log(`Connected to MongoDB`))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on: ${PORT} `));
