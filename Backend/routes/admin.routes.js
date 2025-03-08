import { Router } from "express";
import authAdmin from "../middlewares/authAdmin.js";
import upload from "../middlewares/multer.js";
import {
  loginAdmin,
  getAllMenu,
  addMenu,
  updateMenu,
  deleteMenu,
  getMenuById
} from "../controller/admin.controller.js";
const adminRouter = Router();
adminRouter.post("/login", loginAdmin);
adminRouter.get("/menus", authAdmin, getAllMenu);
adminRouter.get("/menus/:id", authAdmin, getMenuById);
adminRouter.post("/menus", authAdmin, upload.single("image"), addMenu);
adminRouter.put("/menus/:id", authAdmin, upload.single("image"), updateMenu);
adminRouter.delete("/menus/:id", authAdmin, deleteMenu);
export default adminRouter;
