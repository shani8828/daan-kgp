
import React, { useEffect } from "react";

const FlshPage = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      {/* Logo */}
      <img
        src="https://res.cloudinary.com/dubu8yxkm/image/upload/v1754643304/Logo_mnu1fh.avif"
        alt="DAAN KGP Logo"
        className="w-40 h-40 mb-4 animate-fade-in"
      />

      {/* Tagline */}
      <h1 className="text-lg font-semibold text-gray-800 opacity-0 animate-fade-in-delay">
        Connecting Dakshana Alumni at KGP
      </h1>

      {/* Animation styles */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease forwards;
          }
          .animate-fade-in-delay {
            animation: fadeIn 1s ease forwards;
            animation-delay: 0.5s;
          }
        `}
      </style>
    </div>
  );
};

export default FlshPage;
