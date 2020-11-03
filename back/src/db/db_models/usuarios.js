const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  correo: { type: String, required: true },
  compras: [{ type: Schema.Types.ObjectId, ref: "Purchase", required: true }], //array de referencias al modelo de compras
  carrito: { type: Schema.Types.ObjectId, ref: "Cart", required: true }, // referencia al modelo carritos
  comentarios: [
    { type: Schema.Types.ObjectId, ref: "Comment", required: true },
  ], //array de referencias al modelo de comentarios
});

const User = mongoose.model("User", userSchema);

export default User;
