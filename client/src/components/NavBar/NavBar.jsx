import style from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    filterCountryByActivity,
    filterCountryByContinent,
    sortCountryByPoblation,
    sortCountryByAlph,
    getCountries
} from '../../redux/actions/index'

function NavBar({ setCurrentPage, setOrder }) {

    const dispatch = useDispatch()

    const allContinents = useSelector(state => state.continents);
    const activities = useSelector(state => state.activities)


    const handleOrderAlphabetical = (e) => {
        e.preventDefault();
        dispatch(sortCountryByAlph(e.target.value))

        setCurrentPage(1)
        setOrder(e.target.value)
    }

    const handleOrderPopulation = (e) => {
        e.preventDefault();
        dispatch(sortCountryByPoblation(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)
    }

    const handleOrderByContinent = (e) => {
        e.preventDefault();
        dispatch(filterCountryByContinent(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)

    }

    const handlefilteredByActivity = (e) => {
        e.preventDefault();
        dispatch(filterCountryByActivity(e.target.value))

        setCurrentPage(1)
        setOrder(e.target.value)
    }

    return (
        <>
            <div className={style.mainContainer}>

                <SearchBar setCurrentPage={setCurrentPage} />

                <Link to='/form/create'>
                    <h4 className={style.linkActivity}>Create Activity</h4>
                </Link>

                <div className={style.mainContainer2}>
                    <div className={style.optionsContainer}>
                        <div className={style.container}>

                            <select className={style.select}
                                onChange={handleOrderAlphabetical}>

                                <option>Alphabetical Order</option>
                                <option value='as' key='as'>a-z</option>
                                <option value='des' key='des'>z-a</option>
                            </select>

                        </div>

                        <div className={style.container}>
                            <select className={style.select}
                                onChange={handleOrderPopulation}>

                                <option> Pobletion Order</option>
                                <option value='as' key='asc'>Ascending</option>
                                <option value='des' key='desc'>Descending</option>
                            </select>

                        </div>

                        <div className={style.container}>
                            <select className={style.select}
                                onChange={handleOrderByContinent}>

                                <option value='all' key='all'>Filter by Continent</option>
                                {
                                    allContinents.length && allContinents.map((c) => (<option value={c} key={c}>{c}</option>))
                                }
                            </select>

                        </div>

                        <div className={style.container}>
                            <select className={style.select}
                                onChange={handlefilteredByActivity}>

                                <option value='all'>Activities</option>
                                {
                                    activities.length && activities.map((a) => (<option value={a}>{a}</option>))
                                }

                            </select>


                        </div>

                        <div className={style.container}>

                            <span className={style.reset}
                                onClick={() => {
                                    dispatch(getCountries())
                                    setCurrentPage(1)
                                }}>Reset</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NavBar