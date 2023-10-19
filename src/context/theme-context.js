import React, { useState } from "react";

const ThemeContext = React.createContext({
  isDarkTheme: false,
  onDarkTheme: () => {},
  onLightTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const darkThemeHandler = () => {
    setIsDarkTheme(true);
  }

  const lightThemeHandler = () => {
    setIsDarkTheme(false);
  }

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme: isDarkTheme,
        onDarkTheme: darkThemeHandler,
        onLightTheme: lightThemeHandler
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;