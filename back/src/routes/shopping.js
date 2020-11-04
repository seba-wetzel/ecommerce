import express from 'express';

const shopping = express.Router()

shopping.get("/", (req, res) => {
    res.send(`${req.originalUrl}`)
})

export default shopping