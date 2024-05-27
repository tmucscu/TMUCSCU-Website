import { useEffect, useState } from "react";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const DarkModeButton = () => {
  const initialDarkModeState = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(initialDarkModeState);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <button
      className="text-white *:dark:text-white mr-8"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <LightModeIcon fontSize="large" />
      ) : (
        <DarkModeIcon fontSize="large" />
      )}
    </button>
  );
};

export default DarkModeButton;
