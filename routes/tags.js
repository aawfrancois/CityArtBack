import { Router } from 'express'
import Tags from '../models/tags'
import Users from '../models/user'

let api = Router()

api.get('/', async (req, res) => {
    let tags = await Tags.findAll()
    let user = await Users.findById(1)
    res.json({ tags, user })
})

api.get('/:id', function (req, res) {
    let tag = Tags.findOne({where: {id: req.params.id}}).then(tag => {
        res.json({ tag });
    });
});

api.get('/tags?lng=:longitude,lat=:latitude', async (req, res) => {
    let tags = await Tags.findAll({ where: { longitude: req.query.longitude, latitude: req.query.latitude } })

    data = []
    for (let tag of tags) {


    }

    data.push(entry);
    res.json({ data })
    res.json({
        "longitude":req.query.longitude,
        "latitude":req.query.latitude,
        "tags": [
            {
                "id": Tags.id,
                "msg":Tags.message,
                "user": {
                    "id": Tags.User_id,
                    "firstname": Tags.user.firstname,
                    "lastname": Tags.user.lastname,
                }
            }
        ]
    })
})

api.post('/add_tag?lng=:longitude,lat=:latitude', async (req, res) => {

    var data = {
        "fruit": {
            "logitude": req.params.longitude,
            "lagitude": req.params.latitude
        }
    };

    let { message, longitude, latitude, User_id } = req.body

    try {
        let Tag = new Tags({ message, longitude, latitude, User_id } )
        let data = await Tag.save()
        res.json({ data })
    } catch (error) {
        res.json({ error })
    }
});

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