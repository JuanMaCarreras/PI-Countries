import axios from 'axios'
import {
    GET_COUNTRIES,
    SEARCH_COUNTRY,
    POST_ACTIVITY,
    GET_DETAILS,
    FILTER_BY_ACTIVITY,
    FILTER_BY_CONTINENT,
    SORT_COUNTRIES_BY_ALPH,
    SORT_COUNTRIES_BY_POBLATION
} from './types'


export const getCountries = () => {
    return async (dispatch) => {
        const axiosRes = await axios.get('http://localhost:3001/countries')
        const res = axiosRes.data
        return dispatch({ type: GET_COUNTRIES, payload: res })
    }
};


export const searchCountry = (nameCountry) => {
    return async (dispatch) => {
        const axiosRes = await axios.get(`http://localhost:3001/countries?name=${nameCountry}`)
        const res = axiosRes.data
        return dispatch({ type: SEARCH_COUNTRY, payload: res })
    }

};

export const postActivity = (activity) => {
    return async (dispatch) => {
        return dispatch({ type: POST_ACTIVITY, payload: activity })
    }
};

export const getDetails = (id) => {
    return async (dispatch) => {
        const axiosRes = await axios.get(`http://localhost:3001/countries/${id}`)
        const res = axiosRes.data
        return dispatch({ type: GET_DETAILS, payload: res })
    }
};

export const filterCountryByActivity = (name) => {
    return async (dispatch) => {
        return dispatch({ type: FILTER_BY_ACTIVITY, payload: name })
    }

};


export const filterCountryByContinent = (continent) => {
    return async (dispatch) => {
        return dispatch({ type: FILTER_BY_CONTINENT, payload: continent })
    }
};

export const sortCountryByPoblation = (poblation) => {
    return async (dispatch) => {
        return dispatch({ type: SORT_COUNTRIES_BY_POBLATION, payload: poblation })
    }
};

export const sortCountryByAlph = (order) => {
    return async (dispatch) => {
        return dispatch({ type: SORT_COUNTRIES_BY_ALPH, payload: order })
    }
};



//











export function createActivity(activity) {
    return async function () {
        try {
            const newAct = await axios.post("http://localhost:3001/activities", activity);
            console.log(newAct);
        } catch (error) {
            console.log(error);
        }
    };
}