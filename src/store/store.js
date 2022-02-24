import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { ListCrud } from "../reducers/ListCrud";
import { ListaTotalBusqueda } from "../reducers/ListTotalBusqueda";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
    Listado: ListCrud,
    Totales: ListaTotalBusqueda
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )

)