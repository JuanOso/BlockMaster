import React, { useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { topRatedAsync } from '../actions/actionTotalBusqueda';
import { agregarLista } from '../actions/crudFirebase';
import { AverageVote, BtnDespues, Card, CardBack, CardFront } from '../components/Listado';
import { Navbar } from '../components/Navbar';

const TopRated = () => {

    const dispatch = useDispatch();
    const favoritas = useSelector(store => store.Listado)

  
    const {totalBusqueda} = useSelector(store => store.Totales)
    
    
    
    useEffect(() => {
      dispatch(topRatedAsync())
      estilizar();
      
    }, [dispatch])
    
    const estilizar = (pagina = 1) => {
  
     
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      //revisar si el settimeout es la manera mas optima para ejecutar está funcion
      setTimeout(function getVotes() {
        let votes = document.getElementsByClassName('borderAzul')
  
        for (let element of votes) {
          if (element.id >= 7) {
            element.classList.remove('bordeAzul')
            element.classList.add('borderAmarillo')
          }
        }
      }, 300)
  
    }
  
  
  
    const handlePageClick = (data) => {
      let currentPage = data.selected + 1
      dispatch(topRatedAsync(currentPage))
      estilizar(currentPage)
    }
  
    
  
    return (
      <>
      <Navbar />
      <div className='mt-5 offset-1 col-10'>
        <h2 style={{ color: "white" }}>Mejor calificadas</h2>
        <div className='d-flex justify-content-start flex-wrap'>
          {
            totalBusqueda.map(peli => (
              <Card key={peli.id} >
                <CardFront className='card-front' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${peli.poster_path})` }}>
                  <AverageVote className='borderAzul' id={peli.vote_average}><i className="fa-solid fa-star me-2 colorMain"></i>{peli.vote_average}</AverageVote>
                </CardFront>
                <CardBack className='card-back'>
                  <h5 className='mt-3 text-dark ms-3 fw-bold'>{peli.original_title}</h5>
                  <p className='text-dark mb-3 ms-3 mt-3'><span className='fw-bold'>Sinopsis:<br></br></span> {peli.overview}</p>
                  <BtnDespues onClick={() => agregarLista(peli, favoritas.peliculas)}>Agregar a favoritas</BtnDespues>
                </CardBack>
              </Card>
            ))
  
          }
        </div>
  
        <div className='d-flex justify-content-center mt-3 mb-4'>
          <ReactPaginate
            previousLabel={'<<'}
            nextLabel={'>>'}
            breakLabel={'...'}
            pageCount={50}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active1 active'}
          />
        </div>
      </div>
      </>

    )
  }
  
export default TopRated