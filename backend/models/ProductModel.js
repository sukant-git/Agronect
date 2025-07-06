import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, required: true },
    category: { type: String, required: true, trim: true },
    farmerName: { type: String, required: true, trim: true },
    farmerLocation: { type: String, required: true, trim: true }, 
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;



