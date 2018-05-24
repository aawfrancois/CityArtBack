import { Router } from 'express'
import user from './user'
import tag from './tags'

let api = Router()

api.get('/', (req, res) => {
  res.json({ hi: 'startupWeek API' })
})


api.use('/users', user)
api.use('/tags', tag)

export default api
