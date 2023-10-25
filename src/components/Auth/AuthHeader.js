import image from '../../images/vicky-hladynets-uyaTT9u6AvI-unsplash.jpg';
import classes from './AuthHeader.module.css';

const AuthHeader = () => {
  return (
    <div className={classes["login-header"]}>
      <img src={image} alt='contact'/>
      <h1>Welcome back, Sam!</h1>
      <h3>
        Please enter your access code.
        <span>(1234)</span>
      </h3>
    </div>
  )
}

export default AuthHeader;