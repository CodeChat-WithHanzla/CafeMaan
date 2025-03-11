import Order from "../models/order.model.js";

export const placeOrder = async (req, res) => {
  try {
    const {
      menuId,
      DealHeading,
      DealText,
      Price,
      imageUrl,
      category,
      selectedDrink,
      quantity,
      selectedAddOns,
      selectedDrinkSize
    } = req.body;
    const userId = req.user.id; 
    const newOrder = new Order({
      userId,
      menuId,
      DealHeading,
      DealText,
      Price,
      imageUrl,
      category,
      selectedDrink,
      quantity,
      selectedAddOns,
      selectedDrinkSize
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findOne({ _id: orderId, userId: req.user.id });
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
