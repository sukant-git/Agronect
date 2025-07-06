

import express from "express";
import { addProduct, getAllProducts } from "../controllers/ProductController.js";
import multer from "multer";
import fs from "fs";
import path from "path";

const ProductRouter = express.Router();

// Ensure "uploads" directory exists
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Image Storage Engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // Ensure images are saved in the "uploads" folder
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Routes
ProductRouter.post("/add", upload.single("image"), addProduct);
ProductRouter.get("/all", getAllProducts); // Ensure frontend correctly calls this route
ProductRouter.get("/list", getAllProducts); // Ensure frontend correctly calls this route
ProductRouter.post("/remove", getAllProducts); // Ensure frontend correctly calls this route

export default ProductRouter;
