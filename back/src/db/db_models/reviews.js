import mongoose from "mongoose";
import "../config/index.js"
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  fecha: { type: Date, required: true },
  contenido: { type: Text, required: true },
  producto: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],
  user: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;


