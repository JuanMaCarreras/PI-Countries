const { Router } = require('express')
const { createActivity, getActivities } = require('./controllers/activitiesController.js')

const router = Router()


router.post('/', createActivity)

router.get('/', getActivities)


module.exports = router;
