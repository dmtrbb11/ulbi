import { useTranslation } from "react-i18next";
import i18n from "shared/config/i18n/i18n";
import { classNames } from "shared/lib/classNames/classNames";
import s from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  additionalClassName: string[];
}

const LangSwitcher = ({ additionalClassName }: LangSwitcherProps) => {
  const { t } = useTranslation();

  return (
    <button
      className={classNames(s.btn, {}, additionalClassName)}
      onClick={() => i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")}
    >
      {t("Язык")}
    </button>
  );
};

export default LangSwitcher;
