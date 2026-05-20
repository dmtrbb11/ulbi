import { classNames } from "shared/lib/classNames/classNames";
import s from "./SideBar.module.scss";
import React from "react";
import LangSwitcher from "widgets/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SideBarProps {
  additionalClassName?: string;
}

const SideBar = ({ additionalClassName }: SideBarProps) => {
  const [sideBarOpen, setSideBarOpen] = React.useState(false);
  const { t } = useTranslation();

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
        {sideBarOpen ? `${t("Закрыть")}` : `${t("Открыть")}`}
      </button>
      <div
        className={classNames(s.SideBar_content, {
          [s.open_content]: sideBarOpen,
        })}
      >
        <ThemeSwitcher additionalClassName={[s.sideBar_switcher]} />
        <LangSwitcher additionalClassName={[s.sideBar_lang_switcher]} />
      </div>
    </div>
  );
};

export default SideBar;
