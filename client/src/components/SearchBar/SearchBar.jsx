import { useState } from 'react'
import style from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import { searchCountry } from '../../redux/actions/index'


function SearchBar({ setCurrentPage }) {

    const dispatch = useDispatch()

    const [search, setSearch] = useState('')


    const handlerChange = (e) => {

        setSearch(e.target.value)
    }



    const handlerSubmit = (e) => {
        e.preventDefault()

        dispatch(searchCountry(search))
        setSearch('')
        setCurrentPage(1)

    }

    return (
        <>
            <div className={style.searchBarContainer}>

                <div className={style.titleContainer}>
                    <h1 className={style.title}>Henry Countries</h1>
                </div>

                <form className={style.formContainer} onSubmit={handlerSubmit}>

                    <input className={style.input}
                        type='text'
                        value={search}
                        onChange={handlerChange}
                        placeholder='Country...'
                    />

                    <buttom className={style.btn}
                        type='submit'
                        value='Search'

                    > <ion-icon name="search-outline" />
                    </buttom>

                </form>
            </div>
        </>

    )
}

export default SearchBar


