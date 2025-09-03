import { useEffect, useState } from "react";

const AnimatedCounter = ({ target = 95, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = Number(target) || 0;
    const stepTime = 30; // ms per frame
    const steps = Math.ceil(duration / stepTime);
    const step = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="text-3xl md:text-4xl lg:text-6xl font-bold flex items-center text-gray-900">
      {count}
    </div>
  );
};

export default AnimatedCounter;
