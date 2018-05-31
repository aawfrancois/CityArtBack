import { Router } from 'express'
import passport from 'passport'
import auth from './auth'
import user from './user'
import tag from './tags'

let api = Router()

api.get('/', (req, res) => {
  res.json({ hi: 'startupWeek API' })
})

// passport.authenticate('jwt', { session: false })
api.use('/users', user)
api.use('/tags', tag)
api.use ('/auth', auth)

/*api.use('/auth', passport.authenticate('jwt', { session: false }), auth)*/

export default api
