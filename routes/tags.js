import { Router } from 'express'
import Tags from '../models/tags'
import passport from 'passport'

let api = Router()

/**
 * Get all Tags
 */
api.get('/', async (req, res) => {
    let tags = await Tags.findAll()
    res.json({ tags })
})

/**
 * Get one tag by Id
 */
api.get('/:id', function (req, res) {
    let tag = Tags.findOne({where: {id: req.params.id}}).then(tag => {
        res.json({ tag });
    });
});

/**
 * add tag
 */
api.post('/add_tag', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let { message, longitude, latitude, user_id } = req.body

    try {
        let tags = new Tags({ message, longitude, latitude, user_id })
        let data = await tags.save()
        res.json({ data })
    } catch (error) {
        res.json({ error: 'error' })
    }
});

export default api