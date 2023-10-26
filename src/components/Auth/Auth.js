import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from "framer-motion";

import AuthContext from '../../context/auth-context';
import AuthHeader from './AuthHeader';
import CodeIndicator from './CodeIndicator';
import AuthButtons from './AuthButtons';
import Modal from '../UI/Modal';
import AuthTimer from './AuthTimer';
import classes from './Auth.module.css';

const Auth = () => {
  const { onLogin } = useContext(AuthContext);
  const [enteredCode, setEnteredCode] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(true);
  const [attemptsCounter, setAttemptsCounter] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (enteredCode.length === 6 && enteredCode !== '123456') {
      setAttemptsCounter(attemptsCounter + 1)
      setEnteredCode('');
      setIsCodeValid(false);
    }

    if (enteredCode === '123456') {
      onLogin();
      navigate('../contacts');
    }
  }, [enteredCode, attemptsCounter, navigate, onLogin])

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

  const restartAttemptsHandler = () => {
    setAttemptsCounter(0);
  }

  const animation = {
    x: [-10, 10, -5, 5, 0],
    transition: { duration: 0.5, times: [0, 0.2, 0.4, 0.6, 1] }
  };

  const failedAccessCode = (
    <Modal>
      <div className={classes["failed-information"]}>
        <h2>Access Denied</h2>
        <p>Please, try again in a moment.</p>
      </div>
      <AuthTimer onRestartCounter={restartAttemptsHandler}/>
    </Modal>
  )

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
          <CodeIndicator indicator={enteredCode.length} numberIndicator={5}/>
          <CodeIndicator indicator={enteredCode.length} numberIndicator={6}/>
        </motion.div>
        <AuthButtons 
          onEnteredCode={enteredCodeHandler}
          onClear={clearEnteredCodeHandler}
          onDelete={deleteValueHandler}
        />
      </div>
      {attemptsCounter === 3 && failedAccessCode}
    </div>
  )
}

export default Auth;