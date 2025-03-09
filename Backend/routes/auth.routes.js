import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser
} from "../controller/auth.controller.js";
import { getMenuByCategory } from "../controller/menu.controller.js";

const router = Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/menus/:category", getMenuByCategory);
export default router;
