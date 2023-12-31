import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DropdownMenu from './DropdownMenu';
import AuthContext from '../../context/auth-context';
import ThemeContext from '../../context/theme-context';
import useScreenSize from '../../hooks/use-screen-size';
import { 
  faBars, 
  faX, 
  faRightToBracket,
  faArrowRightFromBracket 
} from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const { isAuthenticated, onLogout } = useContext(AuthContext);
  const { isLightTheme, onChangeTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useScreenSize();
  const navigate = useNavigate();

  const logoutHandler = () => {
    onLogout();
    navigate('/');
  }

  const changeThemeHandler = () => {
    onChangeTheme();
  }

  const dropdownMenuHandler = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen)
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

  const navigationMenu = (
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
  )

  const dropdownMenuButton = (
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
  )

  return (
    <header className={classes[`header__${themeMode}`]}>
      <Link to='/' className={classes[`app-name__${themeMode}`]}>
        {isMobile ? appLogo : 'TouchBase'}
      </Link>
      <div>
        {isAuthenticated && !isMobile && navigationMenu}
        {isAuthenticated && (
          <motion.button 
            className={classes["logout-button"]}
            onClick={logoutHandler} 
            whileHover={{ x: 2, opacity: 0.8 }}
            whileTap={{ scale: 0.8 }}
          >
            <FontAwesomeIcon 
              className={classes["logout-icon"]}
              icon={faArrowRightFromBracket}
            />
          </motion.button>
        )}
        {!isAuthenticated && (
          <motion.button 
            className={classes["login-button"]}
            whileHover={{ x: 2, opacity: 0.8 }}
            whileTap={{ scale: 0.8 }}
          >
            <Link to='/login' className={classes["login-link"]}>
              <FontAwesomeIcon 
                className={classes["login-icon"]}
                icon={faRightToBracket} 
              />
            </Link>
          </motion.button>
        )}
        {themeButton}
        {isAuthenticated && isMobile && dropdownMenuButton}
      </div>
      {isMenuOpen && <DropdownMenu onDropdownMenu={dropdownMenuHandler}/>}
    </header>
  )
}

export default MainNavigation;