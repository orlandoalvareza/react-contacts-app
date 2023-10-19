import React, { useState } from "react";

const ThemeContext = React.createContext({
  isLightTheme: true,
  onChangeTheme: () => {}
});

export const ThemeContextProvider = (props) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const changeThemeHandler = () => {
    setIsLightTheme(isLightTheme => !isLightTheme);
  }

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme: isLightTheme,
        onChangeTheme: changeThemeHandler,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;