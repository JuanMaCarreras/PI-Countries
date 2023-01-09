const { Country, Activity } = require('../../db')


const createActivity = async (req, res) => {

    const { name, difficulty, duration, season, countryid } = req.body

    try {

        const countryFound = await Country.findOne({
            where: {
                id: countryid
            }
        })

        const resActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        })

        await resActivity.addCountry(countryFound)

        res.status(200).send('activity created successfully')



    } catch (error) {

        res.send(error)
    }


};



const getActivities = async (req, res) => {

    console.log('all')

    try {

        const activities = await Activity.findAll({ include: Country })

        res.json(activities)

    } catch (error) {

        res.send(error)
    }


};






module.exports = {
    createActivity,
    getActivities,
};