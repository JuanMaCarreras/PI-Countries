import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'


function Card({ flag, name, continent, id }) {
    return (
        <>
            <Link to={`/countries/${id}`}>
                <div className={style.cardContainer}>
                    <div className={style.cardImg}>
                        <img src={flag} alt='img not found'></img>
                    </div>

                    <h2 className={style.cardName}>Name:  {name}</h2>

                    <h3 className={style.cardContinent}>Continent:  {continent}</h3>

                </div>
            </Link>
        </>

    )
}

export default Card