import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { google } from "../firebase/firebaseConfig";
import { typesLog } from "../types/types";


export const loginGoogle = () => {

    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,google)
        .then(({user}) => {
            dispatch(loginSincronico(user.uid, user.displayName))

        })
        .catch(e => {
            console.log(e);
        })

    }
}

export const loginSincronico = (id, displayname) => {
    return {
        type: typesLog.login,
        payload: {
            id, 
            displayname
        }
    }
}


export const registerEmailAsync = (name,email,password) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(async ({user}) => {
            await updateProfile(auth.currentUser, {displayName: name})

            dispatch(registerSincronico(user.displayName,user.email, user.uid))
        })
        .catch(e => {
            console.log(e);
        })
    }

}

export const registerSincronico = (name, email, id) => {
    return {
        type: typesLog.register,
        payload: {
            email,
            id,
            name
        }
    }
}

export const loginEmail = (email, password) => {

    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(
                loginSincronico(user.uid, user.displayName)
            )
            console.log('bienvenido ', user.displayName )
        })
        .catch(e=> {
            console.log(e);
            console.log('no existís papá');
        })
    }
} 

export const logout = () => {
    return( dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(user => {
            console.log(user);
            dispatch(logoutSincrono())
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const logoutSincrono = () => {
   return{
       type: typesLog.logout,
       payload: {}
   }
}