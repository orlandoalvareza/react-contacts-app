import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import ThemeContext from '../../context/theme-context';
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
            <button onClick={changeThemeHandler}>
              {themeMode}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;