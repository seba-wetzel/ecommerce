import express from 'express';

const products = express.Router()

products.get("/", (req, res) => {
    res.send(`${req.originalUrl}`)
})

export default products