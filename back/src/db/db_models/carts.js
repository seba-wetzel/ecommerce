import mongoose from "mongoose";
import "../config/index.js";
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      units: Schema.Types.Number,
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
