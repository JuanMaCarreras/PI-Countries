import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'


function Card({ flagimg, name, continent, id }) {
    return (
        <>
            <Link className={style.link} to={`/countries/${id}`}>
                <div className={style.cardContainer}>

                    <img src={flagimg} alt='img not found'></img>

                    <h2 className={style.cardName}>{name}</h2>

                    <h4 className={style.cardContinent}>{continent}</h4>

                </div>
            </Link>
        </>

    )
}

export default Card