import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:  String,
    price: Number,
    description:String,
    image:String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product;