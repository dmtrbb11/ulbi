import React, { FC } from "react";
import {
  LOCAL_STOTAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../lib/ThemeContext";

const initialTheme =
  (localStorage.getItem(LOCAL_STOTAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(initialTheme);
  const toggleTheme = () => {
    if (theme === Theme.LIGHT) {
      localStorage.setItem(LOCAL_STOTAGE_THEME_KEY, Theme.DARK);
      setTheme(Theme.DARK);
    }
    if (theme === Theme.DARK) {
      localStorage.setItem(LOCAL_STOTAGE_THEME_KEY, Theme.LIGHT);
      setTheme(Theme.LIGHT);
    }
  };

  const themePropsMemo = React.useMemo(
    () => ({
      theme: theme,
      changeTheme: toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themePropsMemo}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
