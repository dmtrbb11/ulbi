import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import s from "./NavBar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { useTranslation } from "react-i18next";

interface NavBarProps {
  additionalClassName?: string;
}

const NavBar = ({ additionalClassName }: NavBarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.navbar_wrapper, {}, [])}>
      <div className={s.links_wrapper}>
        <Link to={"/"}>{t("Главная")}</Link>
        <Link to={"/about"}>{t("О сайте")}</Link>
      </div>
    </div>
  );
};

export default NavBar;
