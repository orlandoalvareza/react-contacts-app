import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import ThemeContext from '../../context/theme-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const themeCtx = useContext(ThemeContext);

  const changeThemeHandler = () => {
    if (themeCtx.isDarkTheme) {
      themeCtx.onLightTheme();
    } else {
      themeCtx.onDarkTheme();
    }
  }

  return (
    <header className={classes.header}>
      <Link to='/' className={classes["app-name"]}>TouchBase</Link>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink 
              to='/' 
              className={({isActive}) => isActive ? classes.active : undefined}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/contacts' 
              className={({isActive}) => isActive ? classes.active : undefined}
              end
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/favorites' 
              className={({isActive}) => isActive ? classes.active : undefined}
              end
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <button onClick={changeThemeHandler}>{themeCtx.isDarkTheme ? 'Dark' : 'Light'}</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;