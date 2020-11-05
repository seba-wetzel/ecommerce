<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var purchaseSchema = new Schema({
  fecha: { type: Date, required: true },
  monto: { type: Number, required: true },
  producto: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],
  user: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;
=======
import mongoose from "mongoose";
import "../config/index.js"
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  products: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],
  user: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

export default Purchase;
>>>>>>> master
