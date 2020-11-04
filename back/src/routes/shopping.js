import express from 'express';
import auth from '../middleware/auth.js'
import User from "../db/db_models/users.js"
import Cart from '../db/db_models/carrito.js'


const shopping = express.Router()

shopping.get("/", auth, async (req, res) => {
    const email = req.user.email
    const user = await User.findOne({ email })
    if (!user.carrito) {
        const carrito = await Cart.create({ user })
        user.carrito = carrito
        user.save(e => console.log(e))
    }

    res.send(`${user.carrito}`)
})

shopping.get("/:id", auth, async (req, res) => {
    const _id = req.params.id
    const cart = await Cart.findById(_id).populate("user")
    res.send(`${cart}`)
})


export default shopping