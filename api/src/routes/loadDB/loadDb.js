const { Country } = require('../../db')
const axios = require('axios')

const getApiCountries = async () => {

    const dataApi = await axios.get('https://restcountries.com/v3/all')

    const apiCountries = dataApi.data.map(e => {
        return {
            id: e.cca3,
            name: e.name.common,
            flag: e.flags[0],
            continent: e.continents[0],
            capital: e.capital ? e.capital[0] : 'Capital not found',
            subregion: e.subregion ? e.subregion : 'Subregion not found',
            area: e.area,
            poblation: e.population
        }
    })

    await Country.bulkCreate(apiCountries)

    console.log('Base de datos lista')

}





module.exports = {
    getApiCountries
};