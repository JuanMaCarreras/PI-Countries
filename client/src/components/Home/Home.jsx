import { useState, useEffect } from 'react';
import style from './Home.module.css'
import NavBar from '../NavBar/NavBar'
import Cards from '../Cards/Cards'
import Paginado from '../Paginado/Paginado';
import { getCountries } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";

function Home() {

    const dispatch = useDispatch()

    const [order, setOrder] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const countriesPerPage = 10

    const allCountries = useSelector(state => state.countries)


    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])


    const lastPage = currentPage * countriesPerPage
    const firstPage = lastPage - countriesPerPage
    const currentCountry = allCountries.slice(firstPage, lastPage)


    const paginado = (number) => setCurrentPage(number)



    return (
        <>
            <div className={style.container}>

                <NavBar setOrder={setOrder} setCurrentPage={setCurrentPage} />


                <Paginado currentPage={currentPage}
                    allCountries={allCountries.length}
                    countriesPerPage={countriesPerPage}
                    paginado={paginado} />

                <Cards currentCountry={currentCountry} />


            </div>

        </>
    )
}

export default Home