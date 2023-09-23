const express = require("express");

const goalRouter = express.Router();

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers");

goalRouter.get("/", getGoals);
goalRouter.post("/", setGoal);
goalRouter.put("/:id", updateGoal);
goalRouter.delete("/:id", deleteGoal);

module.exports = { goalRouter };
