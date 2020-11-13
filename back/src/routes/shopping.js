import express from "express";
import auth from "../middleware/auth.js";
import User from "../db/db_models/users.js";
import Cart from "../db/db_models/carts.js";
import Purchase from "../db/db_models/purchases.js";
import { sendEmail } from "../utils/mail/mail.js";

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

shopping.get("/ticket", auth, async (req, res) => {
  const email = req.user.email;
  const user = await User.findOne({ email });
  const tickets = await Purchase.find({ user: user._id })
    .populate({ path: "products", populate: { path: "product" } })
    .populate({
      path: "products",
      populate: { path: "product", populate: { path: "categories" } },
    });
  res.send(tickets);
});

shopping.post("/ticket", auth, async (req, res) => {
  const { products, amount } = req.body;
  const email = req.user.email;
  const user = await User.findOne({ email });
  const ticket = await Purchase.create({
    date: Date.now(),
    amount,
    products,
    user,
  });

  const populatedTicket = await Purchase.findById(ticket._id)
    .populate("user", "email")
    .populate({ path: "products", populate: { path: "product" } })
    .populate({
      path: "products",
      populate: { path: "product", populate: { path: "categories" } },
    });

  user.purchases = [...user.purchases, ticket._id];
  user.save();
  const info = await sendEmail(
    email,
    JSON.stringify(populatedTicket, null, " \t")
  );
  console.log(populatedTicket);
  res.send(populatedTicket);
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

//Empty cart
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
