// FlashPage.jsx with audio
import { useEffect } from "react";
import { motion } from "framer-motion";
// import introAudio from "./assets/intro.mp3"; // Short audio clip

export default function FlashPage({ onFinish }) {
//   useEffect(() => {
//     const audio = new Audio(introAudio);
//     audio.play();

//     const timer = setTimeout(() => {
//       audio.pause();
//       audio.currentTime = 0;
//       onFinish();
//     }, 3000); // 3 seconds

//     return () => {
//       clearTimeout(timer);
//       audio.pause();
//     };
//   }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <motion.img
        src="https://res.cloudinary.com/dubu8yxkm/image/upload/v1754643304/Logo_mnu1fh.avif"
        alt="DAAN KGP Logo"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
        className="w-40 h-40 mb-4"
      />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 3 }}
        className="text-lg font-semibold text-gray-800"
      >
        Connecting Dakshana Alumni at KGP
      </motion.h1>
    </div>
  );
}
