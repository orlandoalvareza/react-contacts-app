// import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import ThemeContext from '../../context/theme-context';
import { faHouse, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';
import classes from './DropdownMenu.module.css';

const DropdownMenu = () => {
  // const { isLightTheme } = useContext(ThemeContext);

  // const themeMode = isLightTheme ? 'light' : 'dark';

  return (
    <ul className={classes.list}>
      <li>
        <FontAwesomeIcon icon={faHouse} className={classes["home-icon"]}/>
        <NavLink to='/' end >
          Home
        </NavLink>
      </li>
      <li>
        <FontAwesomeIcon icon={faUsers} className={classes["contacts-icon"]}/>
        <NavLink to='/contacts' end >
          Contacts
        </NavLink>
      </li>
      <li>
        <FontAwesomeIcon icon={faStar} className={classes["favorites-icon"]}/>
        <NavLink to='/favorites' end >
          Favorites
        </NavLink>
      </li>
    </ul>
  )
}

export default DropdownMenu;