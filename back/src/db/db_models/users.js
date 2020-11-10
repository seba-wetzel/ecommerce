import mongoose from "mongoose";
import "../config/index.js";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin", "superAdmin"],
    default: "user",
  },
  purchases: [{ type: Schema.Types.ObjectId, ref: "Purchase" }], //array de referencias al modelo de compras
  cart: { type: Schema.Types.ObjectId, ref: "Cart" }, // referencia al modelo carritos
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }], //array de referencias al modelo de comentarios
  ratings: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
});

const User = mongoose.model("User", userSchema);

export default User;
