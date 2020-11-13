import express from "express";
import auth from "../middleware/auth.js";
import User from "../db/db_models/users.js";
import Cart from "../db/db_models/carts.js";

const users = express.Router();

users.get("/me", auth, async (req, res) => {
  const email = req.user.email;
  const user = await User.findOne({ email })
    .populate("purchases")
    .populate({
      path: "purchases",
      populate: { path: "products", populate: { path: "product" } },
    })
    .populate({
      path: "purchases",
      populate: {
        path: "products",
        populate: {
          path: "product",
          populate: { path: "categories", populate: "categories" },
        },
      },
    });
  if (!user) {
    const newUser = await User.create({ email });
    const cart = await Cart.create({ user: newUser._id });
    newUser.cart = cart;
    newUser.save((e) => console.log(e));
    return res.status(201).send(newUser);
  }
  res.send(user);
});

users.get("/all", async (req, res) => {
  const users = await User.find()
    .populate("purchases")
    .populate({
      path: "purchases",
      populate: { path: "products", populate: { path: "product" } },
    })
    .populate({
      path: "purchases",
      populate: {
        path: "products",
        populate: {
          path: "product",
          populate: { path: "categories", populate: "categories" },
        },
      },
    });

  res.send(users);
});

users.delete("/:id", async (req, res) => {
  try {
    const user = await User.deleteOne({ _id: req.params.id });
    res.status(202).send(user);
  } catch {
    res.status(503).end();
  }
});

export default users;
