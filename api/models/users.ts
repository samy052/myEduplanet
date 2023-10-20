import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  phone: String,
  email: String,
  course: String,
  password: String,
  interest: String,
  city: String,
});

export const UserModel = mongoose.model("users", UserSchema);