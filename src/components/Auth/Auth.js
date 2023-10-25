import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import AuthContext from '../../context/auth-context';
import image from '../../images/vicky-hladynets-uyaTT9u6AvI-unsplash.jpg';
import classes from './Auth.module.css';
import CodeIndicator from './CodeIndicator';

const Auth = () => {
  const [enteredCode, setEnteredCode] = useState('');
  const [codeIndicator, setCodeIndicator] = useState(0);
  const { onLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (enteredCode.length > 0) {
      setCodeIndicator(enteredCode.length);
    }

    if (enteredCode.length === 4 && enteredCode !== '1234') {
      console.log('error');
    }

    if (enteredCode === '1234') {
      onLogin();
      navigate('../contacts');
    }
  }, [enteredCode, navigate, onLogin])

  const enteredCodeHandler = (event) => {
    const value = event.target.value;    
    setEnteredCode(enteredCode + value);
  }

  const deleteValueHandler = () => {
    setCodeIndicator(codeIndicator - 1);
    setEnteredCode(enteredCode.substring(0, enteredCode.length - 1));
  }

  const clearEnteredCodeHandler = () => {
    setCodeIndicator(0);
    setEnteredCode('');
  }

  return (
    <div className={classes["login-container"]}>
      <div className={classes["login-header"]}>
        <img src={image} alt='contact'/>
        <h1>Welcome Sam!</h1>
        <h3>
          Please enter your access code.
          <span>(1234)</span>
        </h3>
      </div>
      <div className={classes["login-actions"]}>
        <div className={classes["access-code-container"]}>
          <CodeIndicator indicator={codeIndicator} numberIndicator={1}/>
          <CodeIndicator indicator={codeIndicator} numberIndicator={2}/>
          <CodeIndicator indicator={codeIndicator} numberIndicator={3}/>
          <CodeIndicator indicator={codeIndicator} numberIndicator={4}/>
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
            <button onClick={clearEnteredCodeHandler}>Clear</button>
            <button onClick={enteredCodeHandler} value='0'>0</button>
            <button onClick={deleteValueHandler}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth;