import React from 'react'
import '../styles/registroLogin.css'
import logo from '../assets/logo-blockBuster.png'
import { useDispatch } from 'react-redux'
import { loginEmail, loginGoogle } from '../actions/actionLogin'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'


const InicioSesion = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    const [values, handleInputChange, reset ] = useForm({
        email: '',
        password: ''
    })

    const {email, password} = values;

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginEmail(email, password))
    }



    return (
        <div>
            <header className="header">
               <img src={logo} alt="" width="80"  className="d-inline-block header__img"/>
               <h4>BlockMaster</h4>
            </header>
            <section className="registro">
                <section className="registro__container">
                    <h2 className='text-center'>Inicio sesión</h2>
                    <form className="registro__container--form" onSubmit={handleLogin}>
                       {/*  <input className="input" type="text" placeholder="Nombre" /> */}
                        <input className="input" type="text" placeholder="Correo"
                        value={email}
                        name={email}
                        onChange={handleInputChange}
                         />
                        <input className="input" type="password" placeholder="Contraseña" 
                        value={password}
                        name={password}
                        onChange={handleInputChange}
                        />
                        <button className="button" type='submit'>Iniciar sesión</button>
                        <h4 className='text-center mt-4'>Inicio con Google</h4>
                        <i className="fa-brands fa-google text-center mt-2 logoG mx-auto" onClick={handleGoogle}/>
                    </form>
                    <p className="registro__container--register mt-5"><span onClick={()=>navigate('/registro')}>Registrame con correo</span></p>
                </section>
            </section>
            <footer className="footer">
                <h5>Juan Camilo Osorio</h5>
            </footer>
        </div>
    )
}

export default InicioSesion