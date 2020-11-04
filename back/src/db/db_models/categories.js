import mongoose from "mongoose";
import "../config/index.js";
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  nombre: { type: String, required: true },
  productos: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }], //tal vez no es required xq podria tener categorias vacias?
});

const Category = mongoose.model("Category", categorySchema);

export default Category;