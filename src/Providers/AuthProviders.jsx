import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
   const [user, setUser] = useState(null);


   return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
   )
};

export default AuthProviders;