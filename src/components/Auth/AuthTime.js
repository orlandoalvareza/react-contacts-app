import { useEffect, useState } from "react";

const AuthTime = ({ onRestartCounter }) => {
  const [totalTime, setTotalTime] = useState(2);
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

  return <div>{totalTime}</div>
}

export default AuthTime;