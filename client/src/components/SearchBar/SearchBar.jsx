import React, { useState } from 'react'
import style from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import { searchCountry } from '../../redux/actions/index'


function SearchBar() {
    const dispatch = useDispatch()

    const [input, setInput] = useState('')

    const inputHandler = (e) => {
        setInput(e.target.value)

    }

    const clickHandler = () => {

        dispatch(searchCountry(input))
    }



    return (
        <>
            <div className={style.searchBar}>
                <div>
                    <input className={style.input}
                        type="text"
                        placeholder='Search... '
                        name='input'
                        onChange={e => inputHandler(e)}
                    />
                </div>

                <div>
                    <button className={style.btnInput}
                        onClick={() => clickHandler()}

                    >
                        Search
                    </button>
                </div>

            </div>
        </>

    )
}

export default SearchBar


