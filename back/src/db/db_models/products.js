import mongoose from "mongoose";
import "../config/index.js"
const Schema = mongoose.Schema;

const productSchema = new Schema({
  nombre: { type: String, required: true },
  categoria: { type: Schema.Types.ObjectId, ref: "Category" },
  precio: { type: Number },
  stock: { type: Number },
  imgURL: { type: Array },
  disponibilidad: { type: Boolean, default: true },
  descripcion: { type: String }
});

const Product = mongoose.model("Product", productSchema);

export default Product;
