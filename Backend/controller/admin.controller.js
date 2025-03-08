import jwt from "jsonwebtoken";
import {
  getAllMenu,
  addMenu,
  updateMenu,
  deleteMenu,
  getMenuById
} from "./menu.controller.js";
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email == process.env.ADMIN_EMAIL &&
      password == process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.header("Authorization", `Bearer ${token}`);
      res.status(200).json({ aToken: token });
    } else {
      res.status(401).json({ message: "Unauthorized access" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};
export { getAllMenu, addMenu, updateMenu, deleteMenu, getMenuById };
