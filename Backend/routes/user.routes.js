import { Router } from "express";
import { authenticateUser } from "../middlewares/authUser.js";
import {
  placeOrder,
  getUserOrders,
  getOrderById
} from "../controller/user.controller.js";
const router = Router();
router
  .route("/orders")
  .post(authenticateUser, placeOrder)
  .get(authenticateUser, getUserOrders);
router.route("/orders/:orderId").get(authenticateUser, getOrderById);
export default router;
