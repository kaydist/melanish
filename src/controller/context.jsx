import React, {
  useState,
  useMemo,
  useEffect,
  createContext,
  useCallback,
} from "react";

export const AppContext = createContext("");

function AppState({ children }) {
  const [theme, setTheme] = useState("");

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

    // if (lastTheme === null) {
    //   window.localStorage.setItem("theme", JSON.stringify("light"));
    // } else {
    //   if (lastTheme === "light" && theme === "dark") {
    //     document.documentElement.classList.add("dark");
    //     window.localStorage.setItem("theme", JSON.stringify("dark"));
    //   } else if (lastTheme === "dark" && theme === "light") {
    //     document.documentElement.classList.remove("dark");
    //     window.localStorage.setItem("theme", JSON.stringify("light"));
    //   } else if (lastTheme === "dark" && theme === "") {
    //     document.documentElement.classList.add("dark");
    //     setTheme("dark");
    //   } else if (lastTheme === "light" && theme === "") {
    //     document.documentElement.classList.remove("dark");
    //     setTheme("light");
    //   }
    // }
  }, [theme]);

  return (
    <AppContext.Provider value={[theme, setTheme]}>
      {children}
    </AppContext.Provider>
  );
}

export default AppState;
