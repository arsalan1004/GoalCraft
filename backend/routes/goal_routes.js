const express = require("express");

const goalRouter = express.Router();

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers");

const { protect } = require("../middlewares/authMw");

goalRouter.get("/", protect, getGoals);
goalRouter.post("/", protect, setGoal);
goalRouter.put("/:id", protect, updateGoal);
goalRouter.delete("/:id", protect, deleteGoal);

module.exports = { goalRouter };
