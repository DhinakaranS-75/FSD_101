const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    joinedOn: {
      type: Date,
      default: Date.now(),
    },
    forgotPassword: {
      time: Date,
      otp: String,
    },
    token: {
      type: String,
    },
  },
  {
    collation: "User",
  }
);

module.exports = mongoose.model("User", userSchema);
