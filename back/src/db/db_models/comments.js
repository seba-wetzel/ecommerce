import mongoose from "mongoose";
import "../config/index.js";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  date: { type: Date },
  content: { type: String, required: true },
  product: { type: Schema.Types.ObjectId, ref: "Product", required: false },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
