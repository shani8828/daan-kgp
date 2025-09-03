import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const getISTTheme = () => {
    const now = new Date();
    const istTime = new Date(now.getTime() + 5.5 * 60 * 60000); // IST offset
    const hours = istTime.getHours();
    return hours >= 6 && hours < 18 ? "light" : "dark";
  };

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || getISTTheme());

  useEffect(() => {
    const applyTheme = (t) => {
      setTheme(t);
      document.documentElement.classList.toggle("dark", t === "dark");
    };

    applyTheme(theme);

    const getNextSwitchDelay = () => {
      const now = new Date();
      const istNow = new Date(now.getTime() + 5.5 * 60 * 60000);
      const hours = istNow.getHours();
      const nextHour = hours < 6 || hours >= 18 ? 6 : 18; // next 6 AM or 6 PM
      const nextSwitch = new Date(istNow);
      nextSwitch.setHours(nextHour, 0, 0, 0);
      return nextSwitch.getTime() - istNow.getTime();
    };

    const timer = setTimeout(function switchTheme() {
      const newTheme = theme === "light" ? "dark" : "light";
      applyTheme(newTheme);
      setTimeout(switchTheme, getNextSwitchDelay());
    }, getNextSwitchDelay());

    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 transition-all text-gray-900 dark:text-gray-400"
    >
      {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
};

export default ThemeToggle;