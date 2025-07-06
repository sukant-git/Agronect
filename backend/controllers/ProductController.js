import ProductModel from "../models/ProductModel.js";

const addProduct = async (req, res) => {
    try {
        
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No image uploaded" });
        }

        const { name, price, category, farmerName, farmerLocation } = req.body;
        const image = req.file.filename;

        // Validate required fields
        if (!name || !price || !category || !farmerName || !farmerLocation) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Ensure price is a valid number
        const parsedPrice = Number(price);
        if (isNaN(parsedPrice) || parsedPrice <= 0) {
            return res.status(400).json({ success: false, message: "Invalid price" });
        }

        // Create and save the new product
        const newProduct = new ProductModel({
           
            name: name.trim(),
            price: parsedPrice,
            image,
            category: category.trim(),
            farmerName: farmerName.trim(),
            farmerLocation: farmerLocation.trim(),
        });

        const savedProduct = await newProduct.save();

        res.status(201).json({
            success: true,
            message: "Product added successfully",
            product: savedProduct,
        });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
};


const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();


        const productList = products.map(product => ({
            _id: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            farmerName: product.farmerName,
            farmerLocation: product.farmerLocation,
        }));

        res.status(200).json({ success: true, products: productList });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
};


const removeProduct = async (req, res) => {
    try {
        const { id } = req.params; // Using req.params for product ID

        // Check if product exists
        const product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        await ProductModel.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product removed successfully" });
    } catch (error) {
        console.error("❌ Error removing product:", error);
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
};

export { addProduct, getAllProducts, removeProduct };
