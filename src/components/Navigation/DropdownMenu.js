import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ThemeContext from '../../context/theme-context';
import MenuContext from '../../context/dropdown-menu-context';
import { faHouse, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';
import classes from './DropdownMenu.module.css';

const DropdownMenu = () => {
  const { isLightTheme } = useContext(ThemeContext);
  const { onDropdownMenu } = useContext(MenuContext);

  const closeMenuHandler = () => {
    onDropdownMenu();
  }

  const themeMode = isLightTheme ? 'light' : 'dark';

  const linkClass = ({isActive}) => isActive ? classes["active"] : undefined;

  return (
    <ul className={classes[`list__${themeMode}`]}>
      <li>
        <NavLink 
          to='/' 
          onClick={closeMenuHandler} 
          className={linkClass} 
          end 
        >
          <FontAwesomeIcon icon={faHouse}/>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to='/contacts' 
          onClick={closeMenuHandler} 
          className={linkClass}
        >
          <FontAwesomeIcon icon={faUsers}/>
          Contacts
        </NavLink>
      </li>
      <li>
        <NavLink 
          to='/favorites' 
          onClick={closeMenuHandler} 
          className={linkClass}
        >
          <FontAwesomeIcon icon={faStar}/>
          Favorites
        </NavLink>
      </li>
    </ul>
  )
}

export default DropdownMenu;