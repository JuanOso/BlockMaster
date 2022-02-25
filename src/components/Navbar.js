import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../actions/actionLogin'
import logo from '../assets/logo-blockBuster.png'




export const Navbar = () => {

  const [ubicacion, setUbicacion] = useState('')
  const {displayname} = useSelector(store => store.Log)

  const cutName = () => {
    const fName = displayname.split(' ')
    const firstName = fName[0]
    return firstName
  }

  const navegar = useNavigate()

  const dispatch = useDispatch();

  const handleLogout = () => {
      dispatch(logout())
      navegar("/login")
  }
  
  const search = useRef(null)

  useEffect(() => {
    getCoordenadas();
  },)


  const getCoordenadas = () => {
    navigator.geolocation.getCurrentPosition(position => {
     const { latitude, longitude } = position.coords;
     let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI';
     //console.log(latitude,longitude)
     getUbicacion(url);
   });
  }

   const getUbicacion = async(endpoint) => {
    const resp = await fetch(endpoint);
    const {results} = await resp.json();
    //console.log(results[0].address_components[3].long_name + ', ' + results[0].address_components[4].long_name )
    setUbicacion(results[0].address_components[3].long_name + ', ' + results[0].address_components[4].long_name)
  }

  const buscar = () => {
    console.log(search.current.value);
  }
   
 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid offset-1 py-3">
    <span className="navbar-brand" style={{cursor: 'pointer'}} onClick={()=> navegar('/')}>
      <img src={logo} alt="" width="80"  className="d-inline-block align-text-top"/>
    </span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <span style={{cursor: 'pointer'}} className="nav-link active mx-3" aria-current="page" onClick={()=> navegar('/')}>Todas</span>
        </li>
        <li className="nav-item">
        <span style={{cursor: 'pointer'}} className="nav-link  mx-3" onClick={()=> navegar('/mejores')}>Mas valoradas</span>
        </li>
        <li className="nav-item ">
          <span style={{cursor: 'pointer'}} className="nav-link  mx-3" onClick={()=> navegar('/favoritas')}>Mi lista</span>
        </li>
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{cursor: 'pointer'}}>
            {cutName()}
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li style={{cursor: 'pointer'}} onClick={()=> handleLogout()}><span className="dropdown-item" >Cerrar sesión</span></li>
          </ul>
        </li>
        <li className="nav-item ">
          <span className="nav-link  mx-3">{ubicacion}</span>
        </li>
      </ul>
      <div className="col-lg-6 col-sm-10 ms-3 me-5">
      <form className='d-flex '>
        <input className="form-control rounded-0 rounded-start py-2" style={{width: "80%"}} type="search" placeholder="Busca tu película favorita" aria-label="Search" ref={search} onChange={buscar}/>
        <span className="bgYellow mx-0 d-flex justify-content-center align-items-center" style={{width: "15%"}}>
            <i className="fa-solid fa-magnifying-glass "></i>
        </span>
      </form>
      </div>
    </div>
  </div>
</nav>
  )
}
