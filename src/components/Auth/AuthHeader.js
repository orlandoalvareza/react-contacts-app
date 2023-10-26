import { useContext } from 'react';

import ThemeContext from '../../context/theme-context';
import image from '../../images/vicky-hladynets-uyaTT9u6AvI-unsplash.jpg';
import classes from './AuthHeader.module.css';

const AuthHeader = () => {
  const { isLightTheme } = useContext(ThemeContext);
  
  const themeMode = isLightTheme ? 'light' : 'dark';

  return (
    <div className={classes[`login-header__${themeMode}`]}>
      <img src={image} alt='contact'/>
      <h1>Welcome back, Sam!</h1>
      <h3>
        Please enter your access code.
        <span>(123456)</span>
      </h3>
    </div>
  )
}

export default AuthHeader;