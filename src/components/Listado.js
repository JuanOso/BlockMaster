import React, { useEffect } from 'react'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'
import { agregarLista } from '../actions/crudFirebase'
import { useDispatch, useSelector } from 'react-redux'
import { allMoviesAsync } from '../actions/actionTotalBusqueda'






export const Card = styled.div`
    width: 220px;
    height: 330px;
    margin: 1%;
    transform-style: preserve-3d;
    perspective: 600px;
    transition: 0.9s;
    overflow: hidden;
    &:hover .card-front {
      transform: rotateX(-180deg);
    } 
    &:hover .card-back {
      transform: rotateX(0deg);
    }
    @media (max-width: 768px){
        width: 330px;
        height: 495px;
    }

`

export const CardFront = styled.div`
  transform: rotateX(-180deg);
  height: 100%;
  width: 100%;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000;
  backface-visibility: hidden;
  transform: rotateX(0deg);
  transition: 0.5s;

`

export const CardBack = styled.div`
  transform: rotateX(0deg);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(254, 217, 65, 1);
  backface-visibility: hidden;
  transform: rotateX(180deg);
  transition: 0.5s;
  color: #ffffff;
  text-align: center;
  overflow-y: scroll;
  padding-right: 19px;
  box-sizing: content-box;
  @media (max-width: 768px){
    overflow: hidden;
        box-sizing: inherit;
  }
`

export const BtnDespues = styled.button`
  background-color: #0C0E16;
    color: rgba(254, 217, 65, 1);
    cursor: pointer;
    font-weight: 700;
    border: none;
    border-radius: 4px;
    font-family: 'Montserrat';
    font-size: 14px;
    padding: 4px 12px;
    margin-top: 5%;
    margin-bottom: 10%;
    margin-left: 19px;
    width: 90%;
    @media (max-width: 768px){
        width: 90%;
        font-size: 18px;
    }
`

export const AverageVote = styled.div`
  width: 35%;
  height: 15%;
  background-color: #0900008a;
  margin-top: 10%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  @media (max-width: 768px){
    padding-left: 1%;
    width: 25%;
    height: 10%;
  }
`


const Listado = () => {

  const dispatch = useDispatch();

  //const favoritas = useSelector(store => store.Listado)
  const {totalBusqueda} = useSelector(store => store.Totales)
  
  
  
  useEffect(() => {
    dispatch(allMoviesAsync())
    estilizar();
    
  }, [dispatch])
  
  const estilizar = (pagina = 1) => {

    let pixelsScroll;
    if (pagina === 1) {
      pixelsScroll = 0
    }
    else {
      pixelsScroll = 400
    }
    window.scroll({
      top: pixelsScroll,
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
    dispatch(allMoviesAsync(currentPage))
    estilizar(currentPage)
  }

  

  return (
    <div className='mt-5 offset-1 col-10'>
      <h2 style={{ color: "white" }}>Todas las películas</h2>
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
                <BtnDespues onClick={() => agregarLista(peli)}>Agregar a favoritas</BtnDespues>
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
  )
}

export default Listado