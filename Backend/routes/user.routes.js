import { Router } from "express";
import { authenticateUser } from "../middlewares/authUser.js";
import {
  placeOrder,
  getUserOrders,
  getOrderById,
  addToCart,
  deleteToCart,
  getAllCart,
  clearCart
} from "../controller/user.controller.js";
const router = Router();
router
  .route("/orders")
  .post(authenticateUser, placeOrder)
  .get(authenticateUser, getUserOrders);
router.route("/orders/:orderId").get(authenticateUser, getOrderById);
router
  .route("/cart")
  .post(authenticateUser, addToCart)
  .get(authenticateUser, getAllCart)
  .delete(authenticateUser, clearCart);
router.route("/cart/:cartId").delete(authenticateUser, deleteToCart);
export default router;
