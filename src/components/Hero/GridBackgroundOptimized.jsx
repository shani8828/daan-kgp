// GridBackgroundOptimized.jsx
import { useEffect, useRef } from "react";

export default function GridBackgroundOptimized() {
  const elRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0, rafId: null });

  useEffect(() => {
    const onMove = ({ clientX, clientY }) => {
      posRef.current.x = clientX - window.innerWidth / 2;
      posRef.current.y = clientY - window.innerHeight / 2;

      if (!posRef.current.rafId) {
        posRef.current.rafId = requestAnimationFrame(() => {
          if (elRef.current) {
            elRef.current.style.transform = `translate(${posRef.current.x / 30}px, ${
              posRef.current.y / 30
            }px)`;
          }
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
      aria-hidden="true"
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none transition-transform duration-300 ease-out bg-[length:40px_40px] animate-[moveGrid_20s_linear_infinite]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
      }}
    >
      <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />
      <style>{`
        @keyframes moveGrid {
          from { background-position: 0 0; }
          to { background-position: 80px 80px; }
        }
      `}</style>
    </div>
  );
}
