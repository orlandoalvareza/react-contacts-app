import React, { useState } from "react";

const AuthContext = React.createContext({
  isAuthenticated: false,
  onLogin: () => {},
  onLogout: () => {}
});

export const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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