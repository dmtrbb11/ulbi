import { classNames } from "shared/lib/classNames/classNames";
import s from "./ThemeSwitcher.module.scss";
import { ThemeContext } from "app/providers/ThemeProvider";
import { useContext } from "react";

interface ThemeSwitcherProps {
  additionalClassName?: string;
}

const ThemeSwitcher = ({ additionalClassName }: ThemeSwitcherProps) => {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <button className={classNames(s.theme_btn, {})} onClick={changeTheme}>
      Theme
    </button>
  );
};

export default ThemeSwitcher;
