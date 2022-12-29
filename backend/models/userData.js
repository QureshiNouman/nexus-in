const mongoose = require("mongoose");
const userScheme = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userScheme);
module.exports = User;
