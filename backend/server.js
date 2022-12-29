const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/userRoute");
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose
  .connect("mongodb://localhost/nexus-in")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));
app.use("/", router);
app.listen(3001, function () {
  console.log("Express server is running on port 3001!");
});
