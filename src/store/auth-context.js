import { createContext, useState } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogin: () => { },
    onLogout: () => { },
    loggedInUser: [],
    loginUser: () => { },
    sidebar: [],
    showSidebar: () => { },
    closeSidebar: () => { }
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

    const contextValues = {
        isLoggedIn: isLoggedIn,
        onLogin: logIn,
        onLogout: logOut,
        loggedInUser: loggedInUser,
        loginUser: loginUser,
        sidebar: sidebar,
        showSidebar: showSidebar,
        closeSidebar: closeSidebar
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
