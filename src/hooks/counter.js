import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = (num) => {
    setCount((prev) => prev + num);
  };

  const reset = () => {
    setCount(0);
  };

  const decrement = (num) => {
    setCount((prev) => prev - num);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
};
