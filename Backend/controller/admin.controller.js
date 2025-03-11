import jwt from "jsonwebtoken";
import {
  getAllMenu,
  addMenu,
  updateMenu,
  deleteMenu,
  getMenuById
} from "./menu.controller.js";
import Order from "../models/order.model.js";
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
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "name phoneNumber")
      .sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export const cancelOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });
    if (order.status === "Completed")
      return res.status(400).json({ message: "Order has been completed!" });
    if (order.isPaymentCompleted)
      return res
        .status(400)
        .json({ message: "Cannot cancel an order after payment is completed" });

    order.status = "Cancelled";
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const completeOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });
    if (order.status === "Cancelled")
      return res.status(400).json({ message: "Order has been cancelled!" });
    const newOrder = await Order.findByIdAndUpdate(
      orderId,
      { status: "Completed" },
      { new: true }
    );
    if (!newOrder) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const completePayment = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });
    if (order.status === "Cancelled")
      return res.status(400).json({ message: "Order has been cancelled!" });
    const newOrder = await Order.findByIdAndUpdate(
      orderId,
      { isPaymentCompleted: true },
      { new: true }
    );
    if (!newOrder) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export { getAllMenu, addMenu, updateMenu, deleteMenu, getMenuById };
