import { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ThemeContext from '../../context/theme-context';
import MenuContext from '../../context/dropdown-menu-context';
import DropdownMenu from './DropdownMenu';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const { isLightTheme, onChangeTheme } = useContext(ThemeContext);
  const { isMenuOpen, onDropdownMenu } = useContext(MenuContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const resizeHandler = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const changeThemeHandler = () => {
    onChangeTheme();
  }

  const dropdownMenuHandler = () => {
    onDropdownMenu();
  }

  const themeMode = isLightTheme ? 'light' : 'dark';

  const linkClass = ({isActive}) => isActive ? classes["active"] : undefined;

  const appLogo = (
    <span className={classes[`app-logo__${themeMode}`]} >
      T
      <span>B</span>
    </span>
  );

  const themeButton = (
    <motion.button 
      className={classes["theme-button"]} 
      onClick={changeThemeHandler}
      whileHover={{ scale: 1.3 }}
      whileTap={{ rotate: 90 }}
      transition={{ type: 'spring', stiffness: 500 }} 
    >
      {themeMode === 'light' && (
        <FontAwesomeIcon 
          icon={faSun} 
          className={classes["sun-icon"]}
        />
      )}
      {themeMode === 'dark' && (
        <FontAwesomeIcon 
          icon={faMoon} 
          className={classes["moon-icon"]}
        />
      )}
    </motion.button>
  )

  return (
    <header className={classes[`header__${themeMode}`]}>
      <Link to='/' className={classes[`app-name__${themeMode}`]}>
        {isMobile ? appLogo : 'TouchBase'}
      </Link>
      <div>
        {!isMobile && (
          <nav>
            <ul className={classes.list}>
              <li>
                <NavLink to='/' className={linkClass} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/contacts' className={linkClass}>
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to='/favorites' className={linkClass}>
                  Favorites
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
        {themeButton}
        {isMobile && (
          <motion.button 
            className={classes["navigation-menu"]}
            onClick={dropdownMenuHandler} 
            whileTap={{ scale: 0.6 }}
            transition={{ type: 'spring', stiffness: 400 }} 
          >
            {isMenuOpen 
              ? <FontAwesomeIcon icon={faX} className={classes["close-menu-icon"]}/> 
              : <FontAwesomeIcon icon={faBars} className={classes["open-menu-icon"]}/>
            }
          </motion.button>
        )}
      </div>
      {isMenuOpen && <DropdownMenu />}
    </header>
  )
}

export default MainNavigation;