import express from "express";
import Comment from "../db/db_models/comments.js";
import User from "../db/db_models/users.js";
import auth from "../middleware/auth.js";

const comments = express.Router();

comments.get("/:product", async (req, res) => {
  const { product } = req.params;
  const comments = await Comment.find({
    product,
  }).populate("user");
  res.send(comments);
});

comments.post("/:id/", auth, async (req, res) => {
  console.log(req.body, "REQ BODY");
  const email = req.user.email;
  const user = await User.findOne({ email });
  Comment.create({
    product: req.params.id,
    content: req.body.content,
    user: user._id,
    date: Date.now(),
  }).then((comentario) => {
    console.log(comentario);
    res.status(201).send(comentario);
  });
});

export default comments;
