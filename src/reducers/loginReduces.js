import { typesLog } from "../types/types";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case typesLog.login:
            
            return action.payload
    
        default:
            return state
    }

}

export const registerReducer = (state = {}, action ) => {

    switch (action.type) {
        case typesLog.register:
            
            return {
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name
            }
        
        default:
           return state;
        }

}