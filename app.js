const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const tasksRoutes = require("./routes/taskRoutes");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(`Failed to connect to MongoDB ${err}`);
    process.exit(1);
  });

app.get("/", (req, res) => {
  console.log("Healthcheck");
  res.send({ message: "Task Management API" });
});

app.use("/tasks", tasksRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
