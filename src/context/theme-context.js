import React, { useEffect, useState } from "react";

const ThemeContext = React.createContext({
  isLightTheme: true,
  onChangeTheme: () => {}
});

export const ThemeContextProvider = (props) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsLightTheme(savedTheme === 'true');
    }
  }, []);

  const changeThemeHandler = () => {
    const newTheme = !isLightTheme;

    setIsLightTheme(newTheme);
    localStorage.setItem('theme', newTheme.toString());
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