import image from '../../images/vicky-hladynets-uyaTT9u6AvI-unsplash.jpg';
import classes from './Login.module.css';

const Login = () => {
  return (
    <div className={classes["login-container"]}>
      <div className={classes["login-header"]}>
        <img src={image} alt='contact'/>
        <h1>Welcome Sam!</h1>
        <h2>
          Please enter your access code.
          <span>(1234)</span>
        </h2>
      </div>
      <div className={classes["login-actions"]}>
        <div className={classes["access-code-container"]}>Input</div>
        <div className={classes["buttons-container"]}>
          <div className={classes["buttons-row"]}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
          <div className={classes["buttons-row"]}>
            <button>4</button>
            <button>5</button>
            <button>6</button>
          </div>
          <div className={classes["buttons-row"]}>
            <button>7</button>
            <button>8</button>
            <button>9</button>
          </div>
          <div className={classes["buttons-row"]}>
            <button>delete</button>
            <button>0</button>
            <button>login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;