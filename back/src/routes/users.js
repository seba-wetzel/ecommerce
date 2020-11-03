import express from 'express';
const users = express.Router()

users.get("/", (req, res) => {
    res.send(`${req.originalUrl}`)
})

export default users