import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ThemeContext from '../../context/theme-context';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const { isLightTheme, onChangeTheme } = useContext(ThemeContext);

  const changeThemeHandler = () => {
    onChangeTheme();
  }

  const themeMode = isLightTheme ? 'light' : 'dark';

  const linkclass = ({isActive}) => isActive ? classes["active"] : undefined;

  return (
    <header className={classes[`header__${themeMode}`]}>
      <Link to='/' className={classes[`app-name__${themeMode}`]}>
        TouchBase
      </Link>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='/' className={linkclass} end >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/contacts' className={linkclass} end >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to='/favorites' className={linkclass} end >
              Favorites
            </NavLink>
          </li>
          <li>
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
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;