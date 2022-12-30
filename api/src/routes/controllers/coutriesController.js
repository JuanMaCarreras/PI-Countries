const { Country, Activity } = require('../../db')
const { Op } = require("sequelize");

const getAllCountries = async (req, res) => {

    const { name } = req.query

    try {

        if (name) {

            const queryCountry = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    },
                },
                include: Activity
            })


            if (queryCountry.length === 0) {
                return res.status(404).json({ error: `No country found with name, ${name}` })
            }
            return res.status(200).send(queryCountry)


        } else {
            const resCountry = await Country.findAll({ include: Activity })

            res.send(resCountry)
        }


    } catch (error) {

        res.send(error)

    }

};



const getCountriesById = async (req, res) => {

    const { id } = req.params

    try {

        const idCountry = await Country.findByPk(
            id, {
            include: Activity,
        });

        if (idCountry.length === 0) {
            return res.status(404).json({ error: 'Country not found' })
        }

        return res.status(200).send(idCountry)


    } catch (error) {

        res.send(error)
    }


};



module.exports = {
    getAllCountries,
    getCountriesById
}