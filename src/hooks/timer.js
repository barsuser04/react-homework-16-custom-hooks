import { useState, useEffect, useRef } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      countRef.current = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
    return () => clearInterval(countRef.current);
  }, [isActive]);

  const start = () => {
    setIsActive(true);
  };

  const stop = () => {
    setIsActive(false);
  };

  const restart = (initialTime = 60) => {
    setTime(initialTime);
    setIsActive(true);
  };

  return { time, start, stop, restart, isActive };
};

