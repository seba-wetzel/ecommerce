<<<<<<< HEAD:back/src/db/db_models/usuarios.js
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

module.exports = User;
=======
import mongoose from "mongoose";
import "../config/index.js";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  purchases: [{ type: Schema.Types.ObjectId, ref: "Purchase" }], //array de referencias al modelo de compras
  cart: { type: Schema.Types.ObjectId, ref: "Cart" }, // referencia al modelo carritos
  comments: [
    { type: Schema.Types.ObjectId, ref: "Comment" },
  ], //array de referencias al modelo de comentarios
});

const User = mongoose.model("User", userSchema);

export default User;
>>>>>>> master:back/src/db/db_models/users.js
