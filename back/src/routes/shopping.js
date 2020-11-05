import express from "express";
import auth from "../middleware/auth.js";
import User from "../db/db_models/users.js";
import Cart from "../db/db_models/carts.js";

const shopping = express.Router();

shopping.get("/dfsdfdsf", auth, async (req, res) => {
  const email = req.user.email;
  const user = await User.findOne({ email });
  if (!user.cart) {
    const cart = await Cart.create({ user });
    user.cart = cart;
    user.save((e) => console.log(e));
  }

  res.send(`${user.cart}`);
});

shopping.get("/", auth, async (req, res) => {
  const email = req.user.email;
  const user = await User.findOne({ email });
  const cart = await (
    await Cart.findById(user.cart)
      .populate("user", "email")
      .populate({ path: "products", populate: { path: "product" } })
  ).populate({
    path: "products",
    populate: { path: "product", populate: { path: "categories" } },
  });
  res.send(cart);
});

// {"products": [
//     { "product": "5fa1d8b9bf9617470bcce714", "units": 3 },
//    { "product": "5fa1d8b9bf9617470bcce712", "units": 5 }
//              ]
// }  Esto es lo que hay que mandar por el body
shopping.post("/", auth, async (req, res) => {
  const products = req.body.products;
  const email = req.user.email;
  const user = await User.findOne({ email });
  const cart = await Cart.findByIdAndUpdate(user.cart, { products }, () => {})
    .populate("user", "email")
    .populate({ path: "products", populate: { path: "product" } })
    .populate({
      path: "products",
      populate: { path: "product", populate: { path: "categories" } },
    });
  res.send(cart);
});

shopping.delete("/", auth, async (req, res) => {
  const email = req.user.email;
  const user = await User.findOne({ email });
  const cart = await Cart.findByIdAndUpdate(
    user.cart,
    { products: [] },
    () => {}
  ).populate("user", "email");
  res.send(cart);
});

export default shopping;
