import { classNames } from "shared/lib/classNames/classNames";
import s from "./ThemeSwitcher.module.scss";
import { ThemeContext } from "app/providers/ThemeProvider";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

interface ThemeSwitcherProps {
  additionalClassName: string[];
}

const ThemeSwitcher = ({ additionalClassName }: ThemeSwitcherProps) => {
  const { t } = useTranslation();
  const { changeTheme } = useContext(ThemeContext);
  return (
    <button
      className={classNames(s.theme_btn, {}, additionalClassName)}
      onClick={changeTheme}
    >
      {t("Тема")}
    </button>
  );
};

export default ThemeSwitcher;
