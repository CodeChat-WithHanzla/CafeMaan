import Order from "../models/order.model.js";
import Cart from "../models/cart.model.js";
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
export const addToCart = async (req, res) => {
  try {
    const {
      menuId,
      selectedDrink = null,
      quantity = 1,
      selectedAddOns = [],
      selectedDrinkSize = null
    } = req.body;
    const userId = req.user._id;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        cartItems: [
          { menuId, selectedDrink, quantity, selectedAddOns, selectedDrinkSize }
        ]
      });
    } else {
      cart.cartItems.push({
        menuId,
        selectedDrink,
        quantity,
        selectedAddOns,
        selectedDrinkSize
      });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteToCart = async (req, res) => {
  try {
    const { cartItemId } = req.params;
    const userId = req.user._id;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.cartItems = cart.cartItems.filter(
      (item) => item._id.toString() !== cartItemId
    );
    await cart.save();

    res.status(200).json({ message: "Cart item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getAllCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const cart = await Cart.findOne({ userId }).populate("cartItems.menuId");

    if (!cart) {
      return res.status(404).json({ message: "Cart is empty" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export const clearCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.cartItems = [];
    await cart.save();

    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
