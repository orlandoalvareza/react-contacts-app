import { useEffect, useState } from "react";

import classes from './AuthTimer.module.css';

const AuthTimer = ({ onRestartCounter }) => {
  const [totalTime, setTotalTime] = useState(700);
  const [isTimeOver, setIsTimeOver] = useState(false);

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
      <div className={classes["progress-container"]}>
        <div className={classes["progress"]}>
        </div>
      </div>
      <div className={classes["timer"]}>
        {formattedTimer()}
      </div>
    </div>
  )
}

export default AuthTimer;