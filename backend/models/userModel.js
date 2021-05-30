import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }, // so that by default new user is not assigned as Admin
  },
  {
    // this is optional. It will create the timestamp when the new user is created. There will be two paramerters, createdAt: and updatedAt:
    timestamps: true,
  }
);

// now creating a model based on this schema
const User = mongoose.model("User", userSchema); // model accepts two parameters (modelName, Schema)
export default User;
