import React from 'react'
//import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo-blockBuster.png'


export const Navbar = () => {


  //const navigate = useNavigate()
  //onClick={()=> navigate(`/favoritas`)}

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid offset-1 py-3">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="" width="80"  className="d-inline-block align-text-top"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active mx-3" aria-current="page" href="/">Todas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="/">Mas valoradas</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link  mx-3" href="/favoritas" >Mi lista</a>
        </li>
      </ul>
      <div className="col-lg-6 col-sm-10 ms-3 me-5">
      <form className='d-flex '>
        <input className="form-control rounded-0 rounded-start py-2" style={{width: "80%"}} type="search" placeholder="Busca tu película favorita" aria-label="Search"/>
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
