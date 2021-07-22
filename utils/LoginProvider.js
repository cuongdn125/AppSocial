import React, { useState, useEffect, createContext } from 'react';
import auth from '@react-native-firebase/auth';

export const LoginContext = createContext();

export default LoginProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);


    const onAuthStateChanged = (user) => {
        setUser(user);
        setLoading(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; 
      }, []);

    return(
        <LoginContext.Provider value={{user, isLoading}}>
            {children}
        </LoginContext.Provider>
    )
}