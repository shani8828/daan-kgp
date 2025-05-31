import React from 'react';

const BubbleBackground = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => {
    const value = [11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15][i % 20];
    return <span key={i} style={{ '--i': value }} className="bubble rounded-full"></span>;
  });

  return (
    <div className="absolute inset-0 overflow-hidden z-0 flex justify-evenly items-start w-full">
      <div className="bubbles relative flex rounded-full">{bubbles}</div>
    </div>
  );
};

export default BubbleBackground;
