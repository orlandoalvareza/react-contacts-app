import { Link } from 'react-router-dom';
import classes from './Error.module.css';

const Error = ({errorStatus, title, message}) => {
  return (
    <div className={classes["error-container"]}>
      <h1>{errorStatus}</h1>
      <h2>{title}</h2>
      <p>{message}</p>
      <Link to='/'>Go Home</Link>
    </div>
  )
}

export default Error;