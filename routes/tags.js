import { Router } from 'express'
import Tags from '../models/tags'

let api = Router()

api.get('/tags', async (req, res) => {
    let tags = await Tags.findAll()
    res.json({ tags })
})

api.post('/', async (req, res) => {
    let { message, longitude, latitude } = req.body

    try {
        let Tag = new Tags({ message, longitude, latitude } )
        let data = await Tag.save()
        res.json({ data })
    } catch (error) {
        res.json({ error })
    }
})

export default api