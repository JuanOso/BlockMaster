import axios from "axios"
import { types } from "../types/types"

export const allMoviesAsync = (pagina = 1) => {

    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${pagina}`

    return (dispatch) => {
        axios.get(url)
            .then(response => {
                dispatch(allMovies(response.data.results))
            })
            .catch(error => {
                console.log(error)
            })
    }


}

export const allMovies = (lista) => {
    return {
        type: types.total,
        payload: lista
    }
}

export const topRatedAsync = (pagina = 1) => {

    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=bca456022767f1edade3f2c5efa82d09&language=en-US&page=${pagina}`

    return (dispatch) => {
        axios.get(url)
            .then(response => {
                dispatch(topRated(response.data.results))
            })
            .catch(error => {
                console.log(error)
            })
    }


}

export const topRated = (lista) => {
    return {
        type: types.top,
        payload: lista
    } 
}