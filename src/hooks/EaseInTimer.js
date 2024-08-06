import { useEffect, useState } from "react";

function easeInQuad(t) {
    return t * t;
  }


function generateEaseInValue(t, maxValue) {
    const easedValue = easeInQuad(t);
    return Math.round(easedValue * maxValue);
  }

const EaseInTimer = ({ duration, maxValue }) => {
    const [value, setValue] = useState(0);
  
    useEffect(() => {
      const steps = 100; // Total number of steps
      let step = 0;
      const interval = duration / steps;
  
      const intervalId = setInterval(() => {
        const t = step / steps; // Normalize t to range from 0 to 1
        const newValue = generateEaseInValue(t, maxValue);
        setValue(newValue);
  
        if (step >= steps) {
          clearInterval(intervalId);
        } else {
          step++;
        }
      }, interval);
  
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [duration, maxValue]);
  
    return <div>{value}</div>;
  };
  
  export default EaseInTimer;