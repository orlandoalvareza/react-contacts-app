import React, { useState } from "react";

const LoginContext = React.createContext({
  isLogin: false,
  onLogin: () => {},
  onLogout: () => {}
});

export const LoginContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    setIsLogin(true);
  }

  const logoutHandler = () => {
    setIsLogin(false);
  }

  return (
    <LoginContext.Provider
      value={{
        isLogin: isLogin,
        onLogin: loginHandler,
        onLogout: logoutHandler
      }}
    >
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginContext;