import React, { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextType {
  theme?: Theme;
  changeTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({});

export const LOCAL_STOTAGE_THEME_KEY = "themeKEY";
