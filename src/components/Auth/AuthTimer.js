import { useContext, useEffect, useState } from "react";

import ThemeContext from "../../context/theme-context";
import classes from './AuthTimer.module.css';

const AuthTimer = ({ onRestartCounter }) => {
  const [totalTime, setTotalTime] = useState(5);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const { isLightTheme } = useContext(ThemeContext);
  
  const themeMode = isLightTheme ? 'light' : 'dark';

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTotalTime(prevTotalTime => {
        if (prevTotalTime === 0) {
          setIsTimeOver(true);
          clearInterval(timerInterval);
        }
        return prevTotalTime - 1;
      });
    }, 1000); 
    
    return () => {
      clearInterval(timerInterval);
    };
  }, [])

  useEffect(() => {
    if (isTimeOver) {
      onRestartCounter();
    }
  }, [isTimeOver, onRestartCounter])

  const formattedTimer = () => {
    const minute = Math.floor(totalTime / 60);
    const second = totalTime - minute * 60;
    
    const secondCounter = second <= 9 ? '0' + second : second;
    const minuteCounter = minute <= 9 ? '0' + minute : minute;

    return `${minuteCounter}:${secondCounter}`;
  };

  return (
    <div className={classes["timer-container"]}>
      <div className={classes[`progress-container__${themeMode}`]}>
        <div className={classes["progress"]}>
        </div>
      </div>
      <div className={classes[`timer__${themeMode}`]}>
        {formattedTimer()}
      </div>
    </div>
  )
}

export default AuthTimer;