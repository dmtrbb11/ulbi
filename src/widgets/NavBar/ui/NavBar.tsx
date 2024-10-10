import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import s from "./NavBar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavBarProps {
  additionalClassName?: string;
}

const NavBar = ({ additionalClassName }: NavBarProps) => {
  return (
    <div className={classNames(s.NavBar_wrapper, {}, [additionalClassName])}>
      <ThemeSwitcher />
      <div className={s.links_wrapper}>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
      </div>
    </div>
  );
};

export default NavBar;
