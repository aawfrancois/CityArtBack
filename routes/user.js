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
  let { firstname, lastname, email, password } = req.body

  try {
    let user = new User({ firstname, lastname, email, password })
    let data = await user.save()
    res.json({ data })
  } catch (error) {
    res.json({ error })
  }
})

export default api
