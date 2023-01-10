import style from './Paginado.module.css'


function Paginado({ countriesPerPage, allCountries, paginado, currentPage, firstPage }) {

    const numPage = []

    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        numPage.push(i)
    }


    return (
        <>
            <div className={style.container}>


                {/* {
                    numPage.map(p => <button className={currentPage === p ? style.btn2 : style.btnPag}
                        key={p}
                        onClick={() => paginado(p)} >{p}</button>)
                } */}

                <div className={style.btnPag}
                    onClick={() => {
                        if (currentPage > 1)
                            paginado(currentPage - 1)
                    }} >{<ion-icon name='chevron-back-outline' />}</div>

                <div className={style.btnPag} >{currentPage}</div>

                <div className={style.btnPag}
                    onClick={() => {
                        if (currentPage < allCountries) paginado(currentPage + 1)
                    }}
                >
                    <ion-icon name='chevron-forward-outline' />
                </div>

            </div>
        </>
    )


}

export default Paginado