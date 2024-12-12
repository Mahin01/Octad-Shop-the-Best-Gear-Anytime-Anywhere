import React, { useEffect } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
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

   const emailVerify = () => {
    return sendEmailVerification(auth.currentUser);
   }

   const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
   }

   const pwdChange = (email) => {
    return sendPasswordResetEmail(auth, email);
   }

   const googleLogin = () => {
    return signInWithPopup(auth, provider);
   }

   const logoutUser = () => {
    return signOut(auth);
   }

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        if (currentUser) {
            const user = currentUser;
            console.log(user);
        }
    });
        return () => {
            return unsubscribe();
        }
    }, [])
   

   const authInfo = {
    user,
    createUser,
    emailVerify,
    userSignIn,
    pwdChange,
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