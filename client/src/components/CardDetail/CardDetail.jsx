import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getDetails } from '../../redux/actions/index'
import style from './CardDetail.module.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


function CardDetail() {


    const dispatch = useDispatch()

    const { id } = useParams()
    // console.log(useParams())

    const detailsCountry = useSelector(state => state.details)


    useEffect(() => {
        dispatch(getDetails(id))
    }, [dispatch, id])

    const [details] = detailsCountry


    return (
        <>
            <div className={style.detailContainer}>
                <div>
                    {
                        details ? < div >

                            <Link to='/home'>
                                <button className={style.btn}>
                                    <ion-icon name="globe-outline" />
                                </button>
                            </Link>

                            <h1 className={style.name}> <span> Name: </span> {details.name}</h1>

                            <div className={style.Container}>
                                <img src={details.flag} alt="img not found" />

                                <h3 className={style.data} > {details.id}</h3>

                                <h4 className={style.data}> <span> Capital: </span> {details.capital}</h4>
                                <h4 className={style.data}> <span> Continent: </span> {details.continent}</h4>
                                <h4 className={style.data}> <span> Subregion: </span> {details.subregion}</h4>
                                <h4 className={style.data}> <span> Area: </span> {details.area} km2</h4>
                                <h4 className={style.data}>  <span>Poblation: </span> {details.poblation}</h4>
                            </div>
                        </div >
                            : <h2 className={style.Loading}>Loading...</h2>

                    }

                    {
                        details ?
                            details.activities[0] ?
                                <div className={style.containerActivity}>
                                    <h4 className={style.dataAct}> <span> Activity: </span> {details.activities[0].name} </h4>
                                    <h4 className={style.dataAct}> <span> Difficulty: </span> {details.activities[0].difficulty} </h4>
                                    <h4 className={style.dataAct}> <span> Duration:  </span> {details.activities[0].duration} horas</h4>
                                    <h4 className={style.dataAct}> <span> Season: </span>{details.activities[0].season} </h4>
                                </div>

                                :
                                <h3 className={style.noActivity}>Activities not Found</h3>
                            :
                            <h3 className={style.loa}>Loading...</h3>

                    }
                </div>

            </div>


        </>
    )
}

export default CardDetail



