import { Router } from 'express'
import User from '../models/user'

import passport from 'passport'
import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config()

let api = Router()

/** About Sign-up
 */
api.post('/register', async (req, res) => {
    let { username, email, password, password_confirm } = req.body

    try {
        let user = new User({
            username,
            email,
            password,
            password_confirm
        })

        await user.save()

        res.status(201).json({ status: 201, data: { user } })
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
})

/** About Login
 */
api.post('/login', (req, res) => {
    passport.authenticate('local', { session: false }, (err, user) => {
        if (err) {
            return res.status(400).json({ err })
        }

        const { uuid, nickname, email } = user.toJSON()

        let token = jwt.sign({ uuid, nickname, email }, process.env.JWT_ENCRYPTION)

        res.json({ token, data: { user } })
    })(req, res)
})

export default api