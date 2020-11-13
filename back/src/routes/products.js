import express from "express";
import Product from "../db/db_models/products.js";

const products = express.Router();

products.get("/", async (req, res) => {
  try {
    const results = await Product.find().populate("categories");
    res.send(results);
  } catch {
    res.status(500).end();
  }
});

products.get("/search", async (req, res) => {
  try {
    const { name } = req.query;
    const results = await Product.find({
      $or: [{ name }, { categories: { $elemMatch: { name } } }],
    }).populate("categories");
    res.send(results);
  } catch (e) {
    res.status(500).send(e);
  }
});

products.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.send(product);
  } catch {
    res.status(503).end();
  }
});

products.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).send(product);
});

products.put("/:id", async (req, res) => {
  try {
    const product = await Product.update(req.body);
    res.status(201).send(product);
  } catch {
    res.status(503).end();
  }
});

products.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const product = await Product.deleteOne({ _id: req.params.id });
    res.status(202).send(product);
  } catch {
    res.status(503).end();
  }
});

export default products;

/* .get = "/" = devuelve todos los productos
.get = "/:ID = tiene que devolver 1 producto"
.post = "/ = tiene que crear 1 producto"
El body del post tiene que devolver estos parametros :
nombre: { type: String, required: true },
  categoria: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  imgURL: { type: Array, required: true },
  disponibilidad: { type: Boolean, default: true },
.put = "/:id = modificar producto"
.delete = "/:id" = sirve para borrar producto

  */
