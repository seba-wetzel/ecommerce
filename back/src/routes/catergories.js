import express from "express";
import Category from "../db/db_models/categories.js";

const categories = express.Router();

categories.get("/", async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
});

categories.post("/", async (req, res) => {
  const { name } = req.body;
  const exists = await Category.findOne({ name });
  if (!exists) {
    const category = await Category.create({ name });
    return res.send(category);
  }

  res.send(exists);
});

categories.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  const category = await Category.findByIdAndUpdate(id, { name }, () => {});
  return res.send(category);
});

categories.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  const category = await Category.findByIdAndRemove(id, { name });
  return res.send(category);
});

export default categories;
