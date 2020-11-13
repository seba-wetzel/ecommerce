import mongoose from "mongoose";
import "../config/index.js";
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  price: { type: Number },
  stock: { type: Number },
  imgURL: { type: Array },
  available: { type: Boolean, default: true },
  description: { type: String },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
