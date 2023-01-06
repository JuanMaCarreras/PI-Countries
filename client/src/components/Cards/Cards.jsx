import style from './Cards.module.css'
import Card from '../Card/Card'


function Cards({ currentCountry }) {


    return (
        <>
            <div className={style.cardsContainer}>
                {
                    currentCountry.length ? currentCountry.map((e) => (
                        <Card key={e.id}
                            id={e.id}
                            flagimg={e.flag}
                            name={e.name}
                            continent={e.continent}
                        />
                    ))
                        : <span className={style.loading}>Loading...</span>
                }

            </div>

        </>
    )
}

export default Cards