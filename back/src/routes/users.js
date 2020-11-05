import express from 'express';
import auth from '../middleware/auth.js'
import User from '../db/db_models/users.js'
import Cart from '../db/db_models/carts.js'

const users = express.Router()

users.get("/me", auth, async (req, res) => {
    const email = req.user.email;
    const user = await User.findOne({ email })
    if (!user) {
        const newUser = await User.create({ email })
        const cart = await Cart.create({ user: newUser._id })
        newUser.cart = cart
        newUser.save(e => console.log(e))
        return res.status(201).send(newUser)
    }
    res.send(user)
})

export default users