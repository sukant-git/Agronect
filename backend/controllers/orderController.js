
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

// PLACE ORDER
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address, status } = req.body;

    // Validate required fields
    if (!userId || !items || items.length === 0 || !amount || !address) {
      return res.status(400).json({
        success: false,
        message: "Invalid order data. Please check all fields.",
      });
    }

    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
      payment: {
        method: "COD",
        status: false,
      },
      status: status || "Product Processing", // Default to "Product Processing"
    });

    await newOrder.save();

    // Clear user cart
    await userModel.findByIdAndUpdate(userId, { cart: {} });

    res.status(201).json({
      success: true,
      message: "Order placed successfully. Our team will contact you.",
      orderId: newOrder._id,
    });
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while placing the order.",
    });
  }
};

// GET USER ORDERS
const userOrder = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log("Error fetching user orders:", error);
    res.json({ success: false, message: "Error fetching user orders" });
  }
};

// GET ALL ORDERS (Admin)
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log("Error fetching all orders:", error);
    res.json({ success: false, message: "Error fetching all orders" });
  }
};

// UPDATE STATUS
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    if (!orderId || !status) {
      return res.status(400).json({ success: false, message: "Missing orderId or status" });
    }

    const updatedOrder = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true } // return updated document
    );

    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.json({ success: true, message: "Status updated", data: updatedOrder });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ success: false, message: "Server error while updating status" });
  }
};

export { placeOrder, userOrder, listOrders, updateStatus };
