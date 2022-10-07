import { createContext, useState } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogin: () => { },
    onLogout: () => { },
    loggedInUser: [],
    loginUser: () => { },
    sidebar: [],
    showSidebar: () => { },
    closeSidebar: () => { },
    isLoading: [],
    triggerLoading: () => { },
})

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logIn = () => {
        setIsLoggedIn(true);
    }

    const logOut = () => {
        setIsLoggedIn(false);
    }

    const [loggedInUser, setLoggedInUser] = useState();

    const loginUser = (user) => {
        setLoggedInUser(user);
    }

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const closeSidebar = () => setSidebar(false);

    const [isLoading, setIsLoading] = useState(true);

    const triggerLoading = () => {
        if (!isLoading) {
            return
        } else {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
    }

    const contextValues = {
        isLoggedIn: isLoggedIn,
        onLogin: logIn,
        onLogout: logOut,
        loggedInUser: loggedInUser,
        loginUser: loginUser,
        sidebar: sidebar,
        showSidebar: showSidebar,
        closeSidebar: closeSidebar,
        isLoading: isLoading,
        triggerLoading: triggerLoading
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
