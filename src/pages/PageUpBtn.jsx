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
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-2 md:p-3 rounded-lg shadow-gray-700 bg-gradient-to-tr from-red-400 to-red-200 border text-white shadow-lg hover:bg-gradient-to-tr hover:from-red-500 hover:to-red-300 hover:border-red-600 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <FaLongArrowAltUp  className="w-4 h-4 md:w-5 md:h-5"/>
      </button>
    )
  );
};

export default PageUpBtn;
