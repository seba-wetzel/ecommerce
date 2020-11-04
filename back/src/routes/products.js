import express from 'express';
import Product from '../db/db_models/products.js'


const products = express.Router()

products.get("/", async (req, res) => {
    console.log("llego")
    const results = await Product.find()
    res.send(results)
})

products.post('/', async (req, res) => {
    const { nombre } = req.body
    console.log(nombre)

    const product = await Product.create({ nombre })
    res.status(201).send(product)
})
export default products