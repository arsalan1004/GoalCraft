const express = require("express");
const userRouter = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userControllers.js");
const { protect } = require("../middlewares/authMw");

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", protect, getMe);

module.exports = {
  userRouter,
};
