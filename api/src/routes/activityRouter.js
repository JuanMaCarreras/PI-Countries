const { Router } = require('express')
const { createActivity } = require('./controllers/activitiesController.js')

const router = Router()


router.post('/', createActivity)



module.exports = router;
