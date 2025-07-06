import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import path from "path";
import ProductRouter from "./routes/ProductRoute.js";
import userRouter from "./routes/userRoute.js"; 
import dotenv from "dotenv";
import cartRouter from "./routes/cartRoute.js";
import orderRote from "./routes/orderRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Connect to MongoDB with logs
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Agronect")
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// ✅ API Routes
app.use("/api/Product", ProductRouter);
app.use("/api/user", userRouter);
app.use("/uploads", express.static(uploadsDir));
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRote);

// ✅ Root Route
app.get("/", (req, res) => {
  res.send("🚀 API Working!");
});

app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
