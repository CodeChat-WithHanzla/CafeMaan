import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const authenticateUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) return res.status(401).json({ message: "Invalid token." });

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token.", error });
  }
};
