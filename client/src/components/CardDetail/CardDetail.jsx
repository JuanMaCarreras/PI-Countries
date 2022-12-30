import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getDetails } from '../../redux/actions/index'
import style from './CardDetail.module.css'
import { useParams } from 'react-router-dom'


function CardDetail() {


    const dispatch = useDispatch()

    const { id } = useParams()
    // console.log(useParams())

    const detail = useSelector(state => state.details)


    useEffect(() => {
        dispatch(getDetails(id))
    }, [dispatch, id])

    return (
        <>
            <div className={style.detailContainer}>
                <div>
                    {id ? < div >

                        <div className={style.flagContainer}>
                            <img src={detail.flag} alt="img not found" />
                        </div>

                        <h1 className={style.name} > Name: {detail.name}</h1>
                        <h3 className={style.id} > {detail.id}</h3>

                        <h5 className={style.Cont}> Continent: {detail.continent}</h5>
                        <h5 className={style.Cap}> Capital: {detail.capital}</h5>
                        <h5 className={style.subregion}> Subregion: {detail.subregion}</h5>
                        <h5 className={style.area}> Area: {detail.area} km2</h5>
                        <h5 className={style.poblation}> Poblation: {detail.poblation} km2</h5>
                    </div >
                        : <h2 className={style.Loading}>Loading...</h2>

                    }

                </div>
            </div>


        </>
    )
}

export default CardDetail



