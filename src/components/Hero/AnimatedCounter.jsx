import { useEffect, useState } from "react";

const AnimatedCounter = ({ target = 95, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const incrementTime = 30; // update every 30ms

    const totalSteps = Math.floor(duration / incrementTime);
    const increment = end / totalSteps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [target, duration]);

  return (
    <div className="text-3xl md:text-4xl lg:text-6xl font-bold flex items-center">
      {count}
    </div>
  );
};

export default AnimatedCounter;
