import mongoose from "mongoose";
import "../config/index.js";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  compras: [{ type: Schema.Types.ObjectId, ref: "Purchase" }], //array de referencias al modelo de compras
  carrito: { type: Schema.Types.ObjectId, ref: "Cart" }, // referencia al modelo carritos
  comentarios: [
    { type: Schema.Types.ObjectId, ref: "Comment" },
  ], //array de referencias al modelo de comentarios
});

const User = mongoose.model("User", userSchema);

export default User;