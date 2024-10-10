import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import s from "./SideBar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import React from "react";

interface SideBarProps {
  additionalClassName?: string;
}

const SideBar = ({ additionalClassName }: SideBarProps) => {
  const [sideBarOpen, setSideBarOpen] = React.useState(false);

  return (
    <div
      className={classNames(s.SideBar_wrapper, { [s.open]: sideBarOpen }, [
        additionalClassName,
      ])}
    >
      <button
        className={classNames(s.btn, {}, [])}
        onClick={() => setSideBarOpen((prev) => !prev)}
      >
        {sideBarOpen ? "Закрыть" : "Открыть"}
      </button>
    </div>
  );
};

export default SideBar;
