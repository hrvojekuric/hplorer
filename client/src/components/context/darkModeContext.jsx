import { useEffect, useState } from "react";
import { ModeContext } from "./MainContext";

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <ModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </ModeContext.Provider>
  );
};
