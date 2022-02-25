import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovieasync, readListAsync, updateMovieAsync } from '../actions/crudFirebase';
import { Navbar } from '../components/Navbar';

const Favs = () => {

    const dispatch = useDispatch();
    const { peliculas } = useSelector(store => store.Listado)
    const [estadoModal, SetEstadoModal] = useState([])
    const {text } = estadoModal
    //console.log(text);

    const formik = useFormik({
        initialValues: {
            text: ""
        },
        onSubmit: (data) => {
            console.log(data);

            dispatch(updateMovieAsync(estadoModal.id, data.text))
        },

    })

    useEffect(() => {
        dispatch(readListAsync())

    }, [dispatch])

    const modalFav = (peli) => {
        SetEstadoModal(peli)
    }


    return (
        <div>
            <Navbar />
            <h1 className='text-light text-center mt-5'>Peliculas favoritas</h1>

            <div className='d-flex col-10 offset-1 justify-content-center mt-5 flex-wrap'>
                {

                    peliculas.map(peli => (
                        <div key={peli.id} className="card mx-1 mb-4" style={{ width: "18rem" }}>
                            <img src={"https://image.tmdb.org/t/p/w500/" + peli.poster_path} className="card-img-top" alt="..." />
                            <div className="card-body bg-dark d-flex flex-column justify-content-between" style={{ height: 170 }}>
                                <h6 className="card-title text-light">{peli.original_title}</h6>
                                <div className='d-flex flex-column'>
                                    <button type='button' className="btn btn-warning" onClick={() => modalFav(peli)} data-bs-toggle="modal" data-bs-target="#exampleModal">Notas</button>
                                    <button type='button' className="btn btn-danger mt-2" onClick={() => dispatch(deleteMovieasync(peli.id))}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{estadoModal.title}</h5>
                            </div>
                            <p><span className='fw-bold'>Nota:</span>{text}</p>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="modal-body w-100">
                                    <textarea
                                        type="text"
                                        className='w-100'
                                        name='text'
                                        //defaultValue={estadoModal.text}
                                        //value={formik.initialValues.text}
                                        style={{ height: 200 }}
                                        onChange={formik.handleChange}
                                        ></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Favs