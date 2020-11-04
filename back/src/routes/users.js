import express from 'express';
import auth from '../middleware/auth.js'
import User from '../db/db_models/users.js'

const users = express.Router()



users.get("/me", auth, async (req, res) => {
    const email = req.user.email;
    const user = await User.findOne({ email })
    if (!user) {
        const newUser = await User.create({ email })
        return res.status(201).send(newUser)
    }
    console.log(user)
    res.send(user)
})

export default users