import { Router } from 'express'
import Tags from '../models/tags'
import Users from '../models/user'

let api = Router()

api.get('/', async (req, res) => {
    let tags = await Tags.findAll()
    // let user = await Users.findById()
    res.json({ tags })
})

/*api.get('/:id', function (req, res) {
    let tag = Tags.findOne({where: {id: req.params.id}}).then(tag => {
        res.json({ tag });
    });
});*/

api.post('/add_tag', async (req, res) => {
    let { message, longitude, latitude, user_id } = req.body
console.log(req.body);
    try {
        let tags = new Tags({ message, longitude, latitude, user_id })
        let data = await tags.save()
        res.json({ data })
    } catch (error) {
        res.json({ error: 'error' })
    }
});


/*
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
})*/



export default api