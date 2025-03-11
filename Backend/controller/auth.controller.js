import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const generateTokens = (user) => {
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
  return { token };
};

export const registerUser = async (req, res) => {
  const { name, email, phoneNumber, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const user = new User({ name, email, phoneNumber, password });
    await user.save();
    const { token } = generateTokens(user);
    await user.save();
    res.status(201).json({
      message: "User registered successfully",
      user,
      token
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error registering user :: ${error.message}` });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const { token } = generateTokens(user);
    await user.save();
    res.status(200).json({
      message: "Login successful",
      user,
      token
    });
  } catch (error) {
    res.status(500).json({ message: `Error logging in :: ${error.message}` });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error logging out", error });
  }
};
