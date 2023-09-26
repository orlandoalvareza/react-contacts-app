import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
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
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;