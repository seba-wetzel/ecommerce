import express from "express";
import users from "./users.js";
import products from "./products.js";
import comments from "./comments.js";
import shopping from "./shopping.js";
import categories from "./catergories.js";

const api = express.Router();
api.use("/users", users);
api.use("/products", products);
api.use("/comments", comments);
api.use("/shopping", shopping);
api.use("/categories", categories);

api.get("/", (req, res) => {
  res.send(`${req.originalUrl}`);
});

export default api;
