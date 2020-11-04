<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var productSchema = new Schema({
  nombre: { type: String, required: true },
  categoria: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  imgURL: { type: Array, required: true },
  disponibilidad: { type: Boolean, default: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
=======
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
});

const Product = mongoose.model("Product", productSchema);

export default Product;
>>>>>>> master
