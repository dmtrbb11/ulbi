import React, { useContext, useState } from "react";
import "./styles/index.scss";
import { ThemeContext } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouterProvider } from "./providers/RouterProvider";
import { NavBar } from "widgets/NavBar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { SideBar } from "widgets/SideBar";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <SideBar />
      <AppRouterProvider />
    </div>
  );
};

export default App;
