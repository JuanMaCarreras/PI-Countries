import React from 'react';
import style from './Landing.module.css'
import { Link } from 'react-router-dom'



function landing() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Henry Coutries</h1>

            <Link to='/home'>
                <button className={style.btnLanding}>Entrar</button>
            </Link>



        </div>
    )
}

export default landing