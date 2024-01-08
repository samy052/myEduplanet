import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phNo: { type: Number, unique: true },
    password: { type: String, required: true },
    level: { type: String },
    interest: { type: String },
    avatar: {
      type: String,
      default:
        "https://as1.ftcdn.net/v2/jpg/02/01/33/54/1000_F_201335438_CNpY0iWaXXAV95Gj8BPB0tEJlMcxWeaZ.jpg",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);