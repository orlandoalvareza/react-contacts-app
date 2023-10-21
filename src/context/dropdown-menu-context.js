import React, { useState } from "react";

const MenuContext = React.createContext({
  isMenuOpen: false,
  onDropdownMenu: () => {}
});

export const MenuContextProvider = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownMenuHandler = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
  }

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: isMenuOpen,
        onDropdownMenu: dropdownMenuHandler,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  )
}

export default MenuContext;