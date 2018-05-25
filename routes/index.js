import { Router } from 'express'
import passport from 'passport'
import auth from './auth'
import user from './user'
import tag from './tags'

let api = Router()

api.get('/', (req, res) => {
  res.json({ hi: 'startupWeek API' })
})


api.use('/users', passport.authenticate('jwt', { session: false }), user)
api.use('/tags', tag)
api.use ('/auth', auth)

export default api
