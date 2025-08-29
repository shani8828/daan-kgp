// GridBackground.optimized.jsx
import React, { useEffect, useRef } from "react";

export default function GridBackgroundOptimized() {
  const elRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0, rafId: null });

  useEffect(() => {
    const onMove = (e) => {
      posRef.current.x = e.clientX - window.innerWidth / 2;
      posRef.current.y = e.clientY - window.innerHeight / 2;

      if (!posRef.current.rafId) {
        posRef.current.rafId = requestAnimationFrame(() => {
          const x = posRef.current.x / 30;
          const y = posRef.current.y / 30;
          if (elRef.current) elRef.current.style.transform = `translate(${x}px, ${y}px)`;
          posRef.current.rafId = null;
        });
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (posRef.current.rafId) cancelAnimationFrame(posRef.current.rafId);
    };
  }, []);

  return (
    <div
      ref={elRef}
      className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-300 ease-out pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        animation: "moveGrid 20s linear infinite",
        transform: "translate(0px, 0px)",
      }}
    >
      <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] bg-cyan-500/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <style>{`@keyframes moveGrid {0%{background-position:0 0}100%{background-position:80px 80px}}`}</style>
    </div>
  );
}
