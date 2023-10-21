import { NavLink } from 'react-router-dom';

import classes from './DropdownMenu.module.css';

const DropdownMenu = () => {
  return (
    <ul className={classes.list}>
      <li>
        <NavLink to='/' end >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/contacts' end >
          Contacts
        </NavLink>
      </li>
      <li>
        <NavLink to='/favorites' end >
          Favorites
        </NavLink>
      </li>
    </ul>
  )
}

export default DropdownMenu;