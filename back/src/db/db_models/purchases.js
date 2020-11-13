import mongoose from "mongoose";
import "../config/index.js";
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      units: Schema.Types.Number,
    },
  ],
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

export default Purchase;
