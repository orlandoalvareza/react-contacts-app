import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from "framer-motion";

import AuthContext from '../../context/auth-context';
import CodeIndicator from './CodeIndicator';
import AuthButtons from './AuthButtons';
import classes from './Auth.module.css';
import AuthHeader from './AuthHeader';

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

  const animation = {
    x: [-10, 10, -5, 5, 0],
    transition: { duration: 0.5, times: [0, 0.2, 0.4, 0.6, 1] }
  };

  return (
    <div className={classes["login-container"]}>
      <AuthHeader/>
      <div className={classes["login-actions"]}>
        <motion.div 
          className={classes["access-code-container"]}
          animate={isCodeValid ? { x: 0 } : animation}
        >
          <CodeIndicator indicator={enteredCode.length} numberIndicator={1}/>
          <CodeIndicator indicator={enteredCode.length} numberIndicator={2}/>
          <CodeIndicator indicator={enteredCode.length} numberIndicator={3}/>
          <CodeIndicator indicator={enteredCode.length} numberIndicator={4}/>
        </motion.div>
        <AuthButtons 
          onEnteredCode={enteredCodeHandler}
          onClear={clearEnteredCodeHandler}
          onDelete={deleteValueHandler}
        />
      </div>
    </div>
  )
}

export default Auth;