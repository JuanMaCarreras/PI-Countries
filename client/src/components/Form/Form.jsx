// import axios from 'axios'
import style from './Form.module.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createActivity, postActivity } from '../../redux/actions'
import { Link } from 'react-router-dom'


const validate = (input) => {
    let error = {};

    if (!input.name) {
        error.name = 'Name require'
    } else if (/[0-9]/.test(input.name)) {
        error.name = 'Nombre invalid'


    } else if (!input.difficulty) {
        error.difficulty = 'You must enter a difficulty'


    } else if (!input.duration) {
        error.duration = 'You must enter a duration'
    } else if (!/\d/.test(input.duration)) {
        error.duration = 'must be a number'
    } else if (input.duration < 1 || input.duration > 24) {
        error.duration = 'Must be a number between 1 and 24'

    } else if (!input.season) {
        error.season = 'You must enter a duration season'

    } else if (!input.countryid) {
        error.countryid = 'You must enter a country code'
    } else if (!/^[A-Z]{3}$/.test(input.countryid)) {
        error.countryid = 'Must be a valid code'
    }

    return error;
}


function Form() {

    const dispatch = useDispatch()

    const [error, setError] = useState({})

    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countryid: ''
    })


    const handleInputChange = (e) => {
        e.preventDefault();

        setInput({
            ...input,
            [e.target.name]: e.target.value

        });

        let errors = validate({ ...input, [e.target.name]: e.target.value })
        setError(errors)

    }

    useEffect(() => {
        dispatch(postActivity(input))
    }, [dispatch, input])


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createActivity(input))
    }

    return (
        <>
            <Link to='/home'>
                <button className={style.btnBack}>
                    <ion-icon name="globe-outline" />
                </button>
            </Link>

            <div className={style.fromContainer}>
                <h2 className={style.title}> Create Activity</h2>

                <form className={style.form} onChange={handleSubmit} >

                    <label className={style.labelForm}> Name: </label>

                    <input className={style.input}
                        type='text'
                        name='name'
                        value={input.name}
                        onChange={handleInputChange}
                        autoComplete='off'
                    />{
                        error.name && <p className={style.warning}>{error.name}</p>
                    }

                    <br />

                    <label className={style.labelForm}> Dificulty: {input.difficulty} </label>

                    <input className={style.inputRang}
                        type='range'
                        min='1'
                        max='5'
                        name='difficulty'
                        value={input.difficulty}
                        onChange={handleInputChange}
                    />{
                        error.difficulty && <p className={style.warning}>{error.difficulty}</p>
                    }

                    <br />

                    <label className={style.labelForm}> Duration: </label>

                    <input className={style.input}
                        type='numbre'
                        name='duration'
                        value={input.duration}
                        onChange={handleInputChange}
                        autoComplete='off'
                    />{
                        error.duration && <p className={style.warning}>{error.duration}</p>
                    }

                    <br />

                    <label className={style.labelForm}> Season: </label>

                    <select className={style.seasonSel}
                        name='season'
                        value={input.season}
                        onChange={handleInputChange}
                    >
                        <option value='Autumn'>Autumn</option>
                        <option value='Winter'>Winter</option>
                        <option value='Spring'>Spring</option>
                        <option value='Summer'>Summer</option>

                    </select>

                    <br />

                    <label className={style.labelForm}> Country Code: </label>
                    <input className={style.input}
                        name='countryid'
                        type='text'
                        value={input.countryid}
                        onChange={handleInputChange}
                        autoComplete='off'
                    />
                    {
                        error.countryid && <p className={style.warning}>{error.countryid}</p>
                    }
                    {
                        Object.keys(error).length === 0 ?
                            <input className={style.btn} type='submit' value='Submit' />
                            :
                            <></>
                    }
                </form>

            </div>

        </>
    )
}

export default Form;