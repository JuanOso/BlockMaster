import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovieasync, readListAsync } from '../actions/crudFirebase';
//import ListaFavs from '../components/ListaFavs'

const Favs = () => {
    
    const dispatch = useDispatch(); 
    const {peliculas} = useSelector(store => store.Listado)

    
    useEffect(() => {
        dispatch(readListAsync())
        
    },[dispatch])
    

    return (
        <div>
            <h1 className='text-light text-center mt-5'>Peliculas favoritas</h1>
        
            <div className='d-flex col-10 offset-1 justify-content-center mt-5 flex-wrap'>
            {
                
                peliculas.map(peli => (
                    <div key={peli.id} className="card mx-1 mb-4" style={{width: "18rem"}}>
                      <img src={"https://image.tmdb.org/t/p/w500/" + peli.poster_path} className="card-img-top" alt="..."/>
                      <div className="card-body bg-dark d-flex flex-column justify-content-between" style={{height: 170}}>
                        <h6 className="card-title text-light">{peli.original_title}</h6>
                        <div className='d-flex flex-column'>
                        <button type='button' className="btn btn-warning">Notas</button>
                        <button type='button' className="btn btn-danger mt-2" onClick={() => dispatch(deleteMovieasync(peli.id))}>Eliminar</button>
                        </div>
                      </div>
                    </div>
                ))
                
            }  
            </div>
        </div>
    )
}

export default Favs