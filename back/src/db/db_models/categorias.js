const mongoose = require("mongoose");

var categorySchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  productos: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }], //tal vez no es required xq podria tener categorias vacias?
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
