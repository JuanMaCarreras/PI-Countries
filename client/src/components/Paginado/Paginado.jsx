import style from './Paginado.module.css'


function Paginado({ countriesPerPage, allCountries, paginado, currentPage}) {

    

    const numPage = []

    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        numPage.push(i)
    }


    return (
        <>
            <div className={style.container}>

                {
                    currentPage > 1 && (
                        <button className={style.btnPag} 
                            onClick={() => {
                                paginado(currentPage - 1);
                            }}
                        ><ion-icon name='chevron-back-outline' /></button>)
                }

                {
                    currentPage > 1 && (
                        <button className={style.btnPag} 
                            onClick={() => {
                                paginado(currentPage - 1);
                            }}
                        >{currentPage - 1}</button>)
                }

                <button className={style.currentPag} >{currentPage}</button>

                {
                    currentPage < numPage.length && currentPage > 0 && (
                        <button className={style.btnPag} 
                            onClick={() => {
                                paginado(currentPage + 1);
                            }}>{currentPage + 1}</button>)

                }

                {
                    currentPage < numPage.length && currentPage > 0 && (
                   
                        <button className={style.btnPag}
                            onClick={() => {
                                paginado(currentPage + 1)
                            }}
                        > <ion-icon name='chevron-forward-outline' /> </button>)

                }
            </div>
        </>
    )


}

export default Paginado