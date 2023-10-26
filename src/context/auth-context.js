import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isAuthenticated: false,
  onLogin: () => {},
  onLogout: () => {}
});

export const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated');
    
    if (savedAuth) {
      setIsAuthenticated(savedAuth === 'true');
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  }

  const logoutHandler = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        onLogin: loginHandler,
        onLogout: logoutHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;