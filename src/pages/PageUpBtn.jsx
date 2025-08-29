import { useState, useEffect } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const PageUpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 200px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
      title="Page Up"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-2 md:p-3 rounded-lg shadow-gray-700 bg-gradient-to-tr from-gray-100 dark:from-gray-900 to-gray-200 dark:to-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg hover:bg-gradient-to-tr hover:from-gray-300 dark:hover:from-gray-700 hover:to-gray-400 dark:hover:text-gray-300 hover:border-gray-500 dark:hover:border-cyan-500 transition-all duration-300 text-red-600 dark:text-gray-400"
        aria-label="Scroll to top"
      >
        <FaLongArrowAltUp  className="w-4 h-4"/>
      </button>
    )
  );
};

export default PageUpBtn;
