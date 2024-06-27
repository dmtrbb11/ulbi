import { useState } from "react";
import { LOCAL_STORAGE_THEME, Theme, ThemeContext } from "./ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME) as Theme) || Theme.LIGHT;

const ThemeContextProvider = () => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const toggleTheme = () => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK);
    }
    if (theme === Theme.DARK) {
      setTheme(Theme.LIGHT);
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: toggleTheme,
      }}
    ></ThemeContext.Provider>
  );
};

export default ThemeContextProvider;


