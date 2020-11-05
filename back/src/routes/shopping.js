import express from 'express';
import auth from '../middleware/auth.js'
import User from "../db/db_models/users.js"
import Cart from '../db/db_models/carrito.js'


const shopping = express.Router()

shopping.get("/dfsdfdsf", auth, async (req, res) => {
    const email = req.user.email
    const user = await User.findOne({ email })
    if (!user.carrito) {
        const carrito = await Cart.create({ user })
        user.carrito = carrito
        user.save(e => console.log(e))
    }

    res.send(`${user.carrito}`)
})

shopping.get("/", auth, async (req, res) => {
    const email = req.user.email
    const user = await User.findOne({ email })
    const cart = await (await Cart.findById(user.carrito).
        populate("user", "email").
        populate({ path: "producto", populate: { path: "producto" } }))
    res.send(cart)
})

// {"products": [
//     { "producto": "5fa1d8b9bf9617470bcce714", "cantidad": 3 },
//    { "producto": "5fa1d8b9bf9617470bcce712", "cantidad": 5 }
//              ]
// }  Esto es lo que hay que mandar por el body
shopping.post("/", auth, async (req, res) => {
    const producto = req.body.products
    const email = req.user.email
    const user = await User.findOne({ email })
    const carrito = await Cart.findByIdAndUpdate(user.carrito,
        { producto }, () => { }).
        populate({ path: "producto", populate: { path: "producto" } })
    res.send(carrito)
})



export default shopping