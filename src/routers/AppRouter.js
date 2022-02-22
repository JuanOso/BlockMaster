import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../container/Home'
import Favs from '../container/Favs'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { Navbar } from '../components/Navbar'


export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Provider store={store}>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favoritas" element={<Favs />} />
                    </Routes>
                </Provider>

            </BrowserRouter>

        )
    }
}
