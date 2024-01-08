import { User } from "../models/user.model";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error";

// import dotenv from "dotenv";
// dotenv.config();

export const signup = async (
  req: { body: any },
  res: any,
  next: (arg0: unknown) => void
) => {
  const { username, password, email, level, interest } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    password: hashedPassword,
    email,
    level,
    interest,
  });
  try {
    await newUser.save();
    res.status(201).json("User Created Successfully ");
  } catch (error) {
    next(error);
    // res.status(501).json("Error");
  }
};

export const signin = async (
  req: { body: any },
  res: any,
  next: (arg0: unknown) => void
) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler("User Not Found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler("Wrong Password"));
    const token = jwt.sign(
      { id: validUser._id },
      "ddddddddddddddddsdsd5435345"
    );
    // console.log(process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser;  //._doc
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (
  req: { body: any },
  res: any,
  next: (arg0: unknown) => void
) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, "ddddddddddddddddsdsd5435345");
      const { password: pass, ...rest } = user; //user._doc
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign(
        { id: newUser._id },
        "ddddddddddddddddsdsd5435345"
      );
      const { password: pass, ...rest } = newUser; //newUser._doc
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signOut = async (
  req: { body: any },
  res: any,
  next: (arg0: unknown) => void
) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been logged out!");
  } catch (error) {
    next(error);
  }
};