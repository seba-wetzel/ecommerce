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
