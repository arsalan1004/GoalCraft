const express = require("express");
const userRouter = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userControllers.js");

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", getMe);

module.exports = {
  userRouter,
};
