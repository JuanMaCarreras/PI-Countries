import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getDetails } from '../../redux/actions/index'
import style from './CardDetail.module.css'
import { useParams } from 'react-router-dom'


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

                            <div className={style.flagContainer}>
                                <img src={details.flag} alt="img not found" />
                            </div>

                            <h1 className={style.name} > Name: {details.name}</h1>
                            <h3 className={style.id} > {details.id}</h3>

                            <h5 className={style.Cont}> Continent: {details.continent}</h5>
                            <h5 className={style.Cap}> Capital: {details.capital}</h5>
                            <h5 className={style.subregion}> Subregion: {details.subregion}</h5>
                            <h5 className={style.area}> Area: {details.area} km2</h5>
                            <h5 className={style.poblation}> Poblation: {details.poblation} km2</h5>
                        </div >
                            : <h2 className={style.Loading}>Loading...</h2>

                    }

                </div>
            </div>


        </>
    )
}

export default CardDetail



