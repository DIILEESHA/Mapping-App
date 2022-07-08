import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 3,
      max: 10,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      max: 50,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      min: 6,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
