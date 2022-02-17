import React from 'react'
import styled from 'styled-components'

const Button1 = styled.button`
    background-color: #FED941;;
    color: black;
    cursor: pointer;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 4px;
    border: none;
    font-family: 'Montserrat';
    font-size: 18px;
    margin-left: 1%;
    @media (max-width: 768px){
        font-size: 10px;
        font-weight: 600;
        padding: 3px 9px;
        margin-left: 3%;
    }
`
const Button2 = styled.button`
    background-color: #0C0E16;
    color: rgba(254, 217, 65, 1);
    cursor: pointer;
    font-weight: 700;
    border: 1px solid #FED941;
    border-radius: 4px;
    font-family: 'Montserrat';
    font-size: 18px;
    padding: 4px 12px;
    margin-left: 1%;
    @media (max-width: 768px){
        font-size: 10px;
        font-weight: 600;
        padding: 3px 9px;
        margin-left: 3%;
    }

`

export const Carrousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide col-10 offset-1 mt-5" data-bs-ride="carousel">

            <div className="carousel-inner d-block ">
                <div className="carousel-item active">
                    <div className='d-block w-100 heighImg imagen1 d-flex align-items-end justify-content-start'>
                        <div className='d-flex flex-direction-row w-75 mb-1'>
                            <Button1>VER TRAILER</Button1>
                            <Button2>VER DESPUÉS</Button2>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='d-block w-100 heighImg imagen2 d-flex align-items-end justify-content-start'>
                        <div className='d-flex flex-direction-row w-75 mb-1'>
                            <Button1>VER TRAILER</Button1>
                            <Button2>VER DESPUÉS</Button2>
                        </div>
                    </div>

                </div>
                <div className="carousel-item">
                    <div className='d-block w-100 heighImg imagen3 d-flex align-items-end justify-content-start'>
                        <div className='d-flex flex-direction-row w-75 mb-1'>
                            <Button1>VER TRAILER</Button1>
                            <Button2>VER DESPUÉS</Button2>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='d-block w-100 heighImg imagen4 d-flex align-items-end justify-content-start'>
                        <div className='d-flex flex-direction-row w-75 mb-1'>
                            <Button1>VER TRAILER</Button1>
                            <Button2>VER DESPUÉS</Button2>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='d-block w-100 heighImg imagen5 d-flex align-items-end justify-content-start'>
                        <div className='d-flex flex-direction-row w-75 mb-1'>
                            <Button1>VER TRAILER</Button1>
                            <Button2>VER DESPUÉS</Button2>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-indicators desplazar">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="" aria-label="Slide 5"></button>
            </div>
        </div>
    )
}
