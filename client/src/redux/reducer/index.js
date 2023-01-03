import {
    GET_COUNTRIES,
    SEARCH_COUNTRY,
    POST_ACTIVITY,
    GET_DETAILS,
    FILTER_BY_ACTIVITY,
    FILTER_BY_CONTINENT,
    SORT_COUNTRIES_BY_ALPH,
    SORT_COUNTRIES_BY_POBLATION
} from '../actions/types'

const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    details: [],
    continents: ['Antarctica', 'South America', 'Asia', 'Africa', 'Europe', 'North America', 'Oceania'],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES: {
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        }

        case SEARCH_COUNTRY: {
            return {
                ...state,
                countries: action.payload
            }
        }

        case POST_ACTIVITY: {
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
        }

        case GET_DETAILS: {
            return {
                ...state,
                details: [action.payload]
            }
        }

        case FILTER_BY_ACTIVITY: {
            return {
                ...state,
                countries: action.payload === 'all' ? state.countries : state.allCountries.filter(c => c.activities.find(a => a.name === action.payload))

            }
        }

        case FILTER_BY_CONTINENT: {
            return {
                ...state,
                countries: action.payload === 'all' ? state.countries : state.allCountries.filter((c) => c.continent === action.payload)
            }
        }

        case SORT_COUNTRIES_BY_ALPH: {

            const orderAlph = action.payload === 'as' ? state.countries.sort((a, b) => {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                return 0

            }) : state.countries.sort((a, b) => {
                if (a.name > b.name) return -1
                if (a.name < b.name) return 1
                else return 0
            })

            return {
                ...state,
                countries: orderAlph
            }
        }

        case SORT_COUNTRIES_BY_POBLATION: {
            const orderPoblation = action.payload === 'as' ? state.countries.sort((a, b) => {
                if (a.poblation > b.poblation) return -1
                if (a.poblation < b.poblation) return 1
                return 0
            }) : state.countries.sort((a, b) => {
                if (a.poblation > b.poblation) return 1
                if (a.poblation < b.poblation) return -1
                else return 0
            })

            return {
                ...state,
                countries: orderPoblation
            }
        }

        default: return state

    }
};
export default rootReducer;