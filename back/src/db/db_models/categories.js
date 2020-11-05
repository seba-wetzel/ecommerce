import mongoose from "mongoose";
import "../config/index.js";
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true }
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
