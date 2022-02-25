import React from 'react'
import '../styles/registroLogin.css'
import logo from '../assets/logo-blockBuster.png'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { registerEmailAsync } from '../actions/actionLogin'
import { useDispatch } from 'react-redux'


const Registro = () => {

   const dispatch = useDispatch()

    /*const handleGoogle = () => {
        dispatch(loginGoogle())
    } */
    const navigate = useNavigate()
    const [formValues, handleInputChange, reset] = useForm({
        nombre: '',
        email: '',
        pass: ''
    })
    const {nombre, email, pass} = formValues

    const handleRegistro = (e) => {
        e.preventDefault()
        dispatch(registerEmailAsync(nombre, email, pass))
        reset()
    }

    return (
        <div>
            <header className="header">
               <img src={logo} alt="" width="80"  className="d-inline-block header__img"/>
               <h4>BlockMaster</h4>
            </header>
            <section className="registro">
                <section className="registro__container">
                    <h2 className='text-center'>Registro</h2>
                    <form className="registro__container--form" onSubmit={handleRegistro}>
                        <input className="input" type="text" placeholder="Nombre"
                        name='nombre'
                        value={nombre}
                        onChange={handleInputChange}
                        />
                        <input className="input" type="text" placeholder="Correo" 
                        name='email'
                        value={email}
                        onChange={handleInputChange}
                        />
                        <input className="input" type="password" placeholder="Contraseña" 
                        name='pass'
                        value={pass}
                        onChange={handleInputChange}
                        />
                        <button className="button" type='submit'>Registrame</button>
                    </form>
                    <p className="registro__container--register mt-5"><span onClick={()=>navigate('/login')}>Ir a inicio sesión</span></p>
                </section>
            </section>
            <footer className="footer">
                <h5>Juan Camilo Osorio</h5>
            </footer>
        </div>
    )
}

export default Registro