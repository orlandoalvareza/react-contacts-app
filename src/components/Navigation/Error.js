import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ThemeContext from '../../context/theme-context';
import classes from './Error.module.css';

const Error = ({errorStatus, title, message}) => {
  const { isLightTheme } = useContext(ThemeContext);

  const themeMode = isLightTheme ? 'light' : 'dark';

  return (
    <div className={classes[`error-container__${themeMode}`]}>
      <h1>{errorStatus}</h1>
      <h2>{title}</h2>
      <p>{message}</p>
      <Link to='/'>Go Home</Link>
    </div>
  )
}

export default Error;