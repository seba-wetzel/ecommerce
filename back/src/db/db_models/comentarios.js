const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var commentSchema = new Schema({
  fecha: { type: Date, required: true },
  contenido: { type: Text, required: true },
  producto: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],
  user: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
