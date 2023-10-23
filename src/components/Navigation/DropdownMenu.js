import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ThemeContext from '../../context/theme-context';
// import MenuContext from '../../context/dropdown-menu-context';
import { faHouse, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';
import classes from './DropdownMenu.module.css';

const DropdownMenu = () => {
  const { isLightTheme } = useContext(ThemeContext);
  // const { onDropdownMenu } = useContext(MenuContext);

  const themeMode = isLightTheme ? 'light' : 'dark';

  return (
    <ul className={classes[`list__${themeMode}`]}>
      <li>
        <FontAwesomeIcon icon={faHouse} className={classes["home-icon"]}/>
        <Link href='/' end >
          Home
        </Link>
      </li>
      <li>
        <FontAwesomeIcon icon={faUsers} className={classes["contacts-icon"]}/>
        <Link to='/contacts' end >
          Contacts
        </Link>
      </li>
      <li>
        <FontAwesomeIcon icon={faStar} className={classes["favorites-icon"]}/>
        <Link to='/favorites' end >
          Favorites
        </Link>
      </li>
    </ul>
  )
}

export default DropdownMenu;