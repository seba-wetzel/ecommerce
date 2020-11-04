import mongoose from "mongoose";
import "../config/index.js"
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  producto: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
