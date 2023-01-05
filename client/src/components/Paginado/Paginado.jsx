import style from './Paginado.module.css'


function Paginado({ countriesPerPage, allCountries, paginado, currentPage }) {

    const numPage = []

    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        numPage.push(i)
    }


    return (
        <>
            <div className={style.container}>
                {
                    numPage.map(p => <button className={currentPage === p ? style.btn2 : style.btnPag}
                        key={p}
                        onClick={() => paginado(p)} >{p}</button>)
                }

            </div>
        </>
    )


}

export default Paginado