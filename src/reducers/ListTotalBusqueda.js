import { types } from "../types/types"

const initialState = {
    totalBusqueda: [],
}

export const ListaTotalBusqueda = (state = initialState, action) => {
    switch (action.type) {
        case types.total: 
        return {
            totalBusqueda: action.payload
        }
        case types.top:
            return {
                totalBusqueda: action.payload
            }
        case types.busqueda:
            return {
                peliculas: state.peliculas.filter(peli => peli.id !== action.payload)
            }
        default:
            return state


    }
}