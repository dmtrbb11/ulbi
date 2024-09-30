import React, { useContext, useState } from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { MainPageLazy } from "pages/MainPage";
import { AboutPageLazy } from "pages/AboutPage";
import { Suspense } from "react";
import { ThemeContext } from "./providers/ThemeProvider/lib/ThemeContext";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div
      className={classNames(
        "app",
        { click: true, hover: true, selectable: false },
        [theme]
      )}
    >
      <Link to={"/"}>Главная</Link>
      <br />
      <Link to={"/about"}>О сайте</Link>
      <button onClick={changeTheme}>Theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageLazy />} />
          <Route path={"/about"} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
