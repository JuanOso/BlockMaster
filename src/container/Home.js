import React from 'react'
import { Carrousel } from '../components/Carrousel'
import Listado from '../components/Listado'
import { Navbar } from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Carrousel />
            <Listado />
        </>
    )
}

export default Home