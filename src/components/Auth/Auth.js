import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AuthContext from '../../context/auth-context';
import CodeIndicator from './CodeIndicator';
import image from '../../images/vicky-hladynets-uyaTT9u6AvI-unsplash.jpg';
import { faDeleteLeft, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import classes from './Auth.module.css';

const Auth = () => {
  const { onLogin } = useContext(AuthContext);
  const [enteredCode, setEnteredCode] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (enteredCode.length === 4 && enteredCode !== '1234') {
      setEnteredCode('');
      setIsCodeValid(false);
    }

    if (enteredCode === '1234') {
      onLogin();
      navigate('../contacts');
    }
  }, [enteredCode, navigate, onLogin])

  const enteredCodeHandler = (event) => {
    const value = event.target.value;  

    setIsCodeValid(true);  
    setEnteredCode(enteredCode + value);
  }

  const deleteValueHandler = () => {
    setEnteredCode(enteredCode.substring(0, enteredCode.length - 1));
  }

  const clearEnteredCodeHandler = () => {
    setEnteredCode('');
  }

  return (
    <div className={classes["login-container"]}>
      <div className={classes["login-header"]}>
        <img src={image} alt='contact'/>
        <h1>Welcome back, Sam!</h1>
        <h3>
          Please enter your access code.
          <span>(1234)</span>
        </h3>
      </div>
      <div className={classes["login-actions"]}>
        <div className={classes["access-code-container"]}>
          <CodeIndicator indicator={enteredCode.length} numberIndicator={1} isValid={isCodeValid}/>
          <CodeIndicator indicator={enteredCode.length} numberIndicator={2} isValid={isCodeValid}/>
          <CodeIndicator indicator={enteredCode.length} numberIndicator={3} isValid={isCodeValid}/>
          <CodeIndicator indicator={enteredCode.length} numberIndicator={4} isValid={isCodeValid}/>
        </div>
        <div className={classes["buttons-container"]}>
          <div className={classes["buttons-row"]}>
            <button onClick={enteredCodeHandler} value='1'>1</button>
            <button onClick={enteredCodeHandler} value='2'>2</button>
            <button onClick={enteredCodeHandler} value='3'>3</button>
          </div>
          <div className={classes["buttons-row"]}>
            <button onClick={enteredCodeHandler} value='4'>4</button>
            <button onClick={enteredCodeHandler} value='5'>5</button>
            <button onClick={enteredCodeHandler} value='6'>6</button>
          </div>
          <div className={classes["buttons-row"]}>
            <button onClick={enteredCodeHandler} value='7'>7</button>
            <button onClick={enteredCodeHandler} value='8'>8</button>
            <button onClick={enteredCodeHandler} value='9'>9</button>
          </div>
          <div className={classes["buttons-row"]}>
            <button onClick={clearEnteredCodeHandler}>
              <FontAwesomeIcon icon={faArrowRotateRight}/>
            </button>
            <button onClick={enteredCodeHandler} value='0'>0</button>
            <button onClick={deleteValueHandler}>
              <FontAwesomeIcon icon={faDeleteLeft}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth;