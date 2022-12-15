const { Country, Activity } = require('../../db')


const createActivity = async (req, res) => {

    const { name, difficulty, duration, season, countryid } = req.body


    try {

        const countryFound = await Country.findAll({
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

        resActivity.addCountry(countryFound)

        res.status(200).send('activity created successfully')



    } catch (error) {

        res.send(error)
    }


};


module.exports = {
    createActivity,
};