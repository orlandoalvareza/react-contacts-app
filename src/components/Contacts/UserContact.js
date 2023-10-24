import { useContext } from 'react';

import ThemeContext from '../../context/theme-context';
import image from '../../images/vicky-hladynets-uyaTT9u6AvI-unsplash.jpg';
import classes from './UserContact.module.css';
import { Link } from 'react-router-dom';

const UserContact = () => {
  const { isLightTheme } = useContext(ThemeContext);

  const themeMode = isLightTheme ? 'light' : 'dark';

  return (
    <div className={classes[`profile-contact__${themeMode}`]}>
      <img src={image} alt='Profile'/>
      <div className={classes["profile-contact__info"]}>
        <Link to='-Ngb9S-waKTzueJroyeR?from=contacts'>
          <h2>Sam Williams</h2>
        </Link>
        <h3>My Card</h3>
      </div>
    </div>
  )
}

export default UserContact;