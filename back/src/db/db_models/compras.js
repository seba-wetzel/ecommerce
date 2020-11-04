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
