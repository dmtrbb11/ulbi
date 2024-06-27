import React, { useContext, useState } from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { Suspense } from "react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const toggleTheme = () => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK);
    }
    if (theme === Theme.DARK) {
      setTheme(Theme.LIGHT);
    }
  };
  return (
    <div className={`app ${theme} `}>
      <button onClick={() => toggleTheme()}>Theme</button>
      <Link to={"/"}>Главная</Link>
      <br />
      <Link to={"/about"}>О сайте</Link>
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
