import React, { useState, useEffect, createContext } from "react";
import { useMemo } from "react";

export const AppContext = createContext("");

function AppState({ children }) {
  const [theme, setTheme] = useState("");
  const [pageChange, setPageChange] = useState(false);
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    let lastTheme = JSON.parse(window.localStorage.getItem("theme"));

    switch (lastTheme) {
      case null:
        window.localStorage.setItem("theme", JSON.stringify("light"));
        setTheme("light");
        break;

      case "light":
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
          window.localStorage.setItem("theme", JSON.stringify("dark"));
        } else {
          setTheme("light");
        }
        break;

      case "dark":
        if (theme === "light") {
          document.documentElement.classList.remove("dark");
          window.localStorage.setItem("theme", JSON.stringify("light"));
        } else {
          document.documentElement.classList.add("dark");
          setTheme("dark");
        }
        break;

      default:
        break;
    }
  }, [theme]);

  useEffect(() => {
    const cursor = document.querySelector(".mf-cursor");
    cursor.classList.remove("-text");
    cursor.classList.remove("-link-pointer");
    cursor.classList.remove("-media");
    setPageChange(false);
  }, [pageChange]);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        pageChange,
        setPageChange,
        preloaded,
        setPreloaded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppState;
