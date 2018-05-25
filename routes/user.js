import { Router } from 'express'
import User from '../models/user'

let api = Router()

api.get('/', async (req, res) => {
  let users = await User.findAll()
  res.json({ users })
})

api.get('/:id', function (req, res) {
    let user = User.findOne({where: {id: req.params.id}}).then(user => {
        res.json({ user });
    });
});

api.post('/add_user', async (req, res) => {
  let { username, email, password, password_confirm } = req.body

  try {
    let user = new User({ username, email, password, password_confirm })
    let data = await user.save()
    res.json({ data })
  } catch (error) {
    res.json({ error: 'error' })
  }
})

export default api
