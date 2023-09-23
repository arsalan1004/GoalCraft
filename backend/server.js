const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middlewares/errorMw");
const { mongoDb } = require("./config/db");
mongoDb();

const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { goalRouter } = require("./routes/goal_routes");
const { userRouter } = require("./routes/user_routes");

app.use("/api/goals", goalRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${[port]}`);
});
