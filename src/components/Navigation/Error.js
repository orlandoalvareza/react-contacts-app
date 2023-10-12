import classes from './Error.module.css';

const Error = ({title, message}) => {
  return (
    <div className={classes["error-container"]}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  )
}

export default Error;