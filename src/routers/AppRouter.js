import React, { Component } from 'react'
import {  HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../container/Home'
import Favs from '../container/Favs'
import { Provider } from 'react-redux'
import { store } from '../store/store'
//import { Navbar } from '../components/Navbar'
import TopRated from '../container/TopRated'
import InicioSesion from '../components/LogIn'
import Registro from '../components/Registro'


export default class AppRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Provider store={store}>
                
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<InicioSesion />} />
                        <Route path="/registro" element={<Registro />} />
                        <Route path="/favoritas" element={<Favs />} />
                        <Route path="/mejores" element={<TopRated />} />
                    </Routes>
                </Provider>

            </HashRouter>

        )
    }
}
