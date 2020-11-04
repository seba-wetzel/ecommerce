import express from 'express';

const comments = express.Router()

comments.get("/", (req, res) => {
    res.send(`${req.originalUrl}`)
})

export default comments