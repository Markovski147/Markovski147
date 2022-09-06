import { createContext, useState } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogin: () => { },
    onLogout: () => { },
    pleaseLogin: () => { }
})

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logIn = () => {
        setIsLoggedIn(true);
    }

    const logOut = () => {
        setIsLoggedIn(false);
    }
    
    const pleaseLogin = () => () => {
        alert('Please login to use shopping cart');
    }

    const contextValues = {
        isLoggedIn: isLoggedIn,
        onLogin: logIn,
        onLogout: logOut,
        pleaseLogin: pleaseLogin
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
