import { Router } from "express";
import authAdmin from "../middlewares/authAdmin.js";
import upload from "../middlewares/multer.js";
import {
  loginAdmin,
  getAllMenu,
  addMenu,
  updateMenu,
  deleteMenu,
  getMenuById,
  getAllOrders,
  cancelOrder,
  completeOrder,
  completePayment
} from "../controller/admin.controller.js";
const adminRouter = Router();
adminRouter.post("/login", loginAdmin);
adminRouter.get("/menus", authAdmin, getAllMenu);
adminRouter.get("/menus/:id", authAdmin, getMenuById);
adminRouter.post("/menus", authAdmin, upload.single("image"), addMenu);
adminRouter.put("/menus/:id", authAdmin, upload.single("image"), updateMenu);
adminRouter.delete("/menus/:id", authAdmin, deleteMenu);

adminRouter.route("/orders").get(authAdmin, getAllOrders);
adminRouter.route("/orders/:orderId/cancel").put(authAdmin, cancelOrder);
adminRouter.route("/orders/:orderId/complete").put(authAdmin, completeOrder);
adminRouter.route("/orders/:orderId/payment").put(authAdmin, completePayment);
export default adminRouter;
