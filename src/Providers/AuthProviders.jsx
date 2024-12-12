import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext } from 'react';
import app from '../Configs/Firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
   const [user, setUser] = useState(null);
   const provider = new GoogleAuthProvider();

   const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
   }

   const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
   }

   const googleLogin = () => {
    return signInWithPopup(auth, provider);
   }

   const logoutUser = () => {
    return signOut(auth);
   }
   

   const authInfo = {
    user,
    createUser,
    userSignIn,
    googleLogin,
    logoutUser
   }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProviders;