import { typesCrud } from "../types/types"

const initialState = {
    peliculas: []
}

export const ListCrud = (state = initialState, action) => {
    switch (action.type) {
        case typesCrud.read: 
        return {
            peliculas: action.payload
        }
        default:
            return state
    }
}
