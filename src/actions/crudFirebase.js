import { addDoc, collection, getDocs, where, query, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { typesCrud } from "../types/types"


export const agregarLista = (pelicula, peliculas) => {
        
        console.log(peliculas);


        addDoc(collection(db, 'listaFavoritas'), pelicula) 
}

export const readListAsync  = () => {

        return async (dispatch) => {
        
        const querySnapshot = await getDocs(collection(db, 'listaFavoritas'))
        const listaPeliculas =[];
        querySnapshot.forEach((doc) => {
                listaPeliculas.push({
                        ...doc.data()
                })
        })
        dispatch(readList(listaPeliculas))
}

        
}

export const readList = (lista) => {
        return {
                type: typesCrud.read,
                payload: lista
        }
}

export const deleteMovieasync = (id) => {
        console.log(id);
        return async (dispatch) => {
                const momentanea = collection(db, 'listaFavoritas')
                const q = query(momentanea, where("id", "==", id))

                const datos = await getDocs(q);
                datos.forEach((peli) => {
                        deleteDoc(doc(db, 'listaFavoritas', peli.id))
                })
                dispatch(deleteMovie(id))
        }

}

export const deleteMovie = (id) => {
        return {
                type: typesCrud.delete,
                payload: id
        }
}

export const updateMovieAsync = (id, text) => {

       return async (dispatch) => {
                const momentanea = collection(db, 'listaFavoritas')
                const q = query(momentanea, where("id", "==", id))

                const datos = await getDocs(q);
                datos.forEach((peli) => {
                        updateDoc(doc(db, 'listaFavoritas', peli.id), {text: text})
                })
                dispatch(readListAsync())
       }
} 