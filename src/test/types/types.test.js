import '@testing-library/jest-dom';
import { collection, getDocs } from 'firebase/firestore';
import { agregarLista } from '../../actions/crudFirebase';
import { db } from '../../firebase/firebaseConfig';
import { ListaTotalBusqueda } from '../../reducers/ListTotalBusqueda';
import { types, typesCrud } from '../../types/types';


describe('Verificar types', () => {
    test('comparar objetos types principales', () => {
        expect(types).toEqual({
            total: 'total',
            busqueda: 'busqueda',
            top: 'top rated movies'
        })

    })
    test('comparar objetos types crud', () => {
        expect(typesCrud).toEqual({
            create: 'create',
            read: 'read',
            update: 'update',
            delete: 'delete'
        })

    })
})

describe('Verificar reducers', () => {
    test('debe recibir un array', () => {
        const accion = {
            type: types.total,
            payload: [1, 2]
        }
        const state = ListaTotalBusqueda('', accion)
        expect(typeof (state)).toEqual('object')

    })
})

describe('Verificar CRUD', () => {
    const movie = {
        name: 'Una prueba',
        description: 'Eliminalo cuando se haga el test'
    }
    agregarLista(movie)
    test('create', () => {
        
        
    


        expect(obtenerN).toEqual(9)

    })
})


/*         const readListAsync = async () => {
    
                const querySnapshot = await getDocs(collection(db, 'listaFavoritas'))
                const listaPeliculas = [];
                querySnapshot.forEach((doc) => {
                    listaPeliculas.push({
                        ...doc.data()
                    })
                })
            
            return listaPeliculas.length
        }
      
    
        const obtenerN = readListAsync()
     */
    
        /* const readListAsync2 = async() => {
    
             
    
                const querySnapshot = await getDocs(collection(db, 'listaFavoritas'))
                const listaPeliculas = [];
                querySnapshot.forEach((doc) => {
                    listaPeliculas.push({
                        ...doc.data()
                    })
                })
            
            return obtenerN2(listaPeliculas.length)
        }

        readListAsync2()

        const obtenerN2 = (n) => {
            return n.lenght
        } */