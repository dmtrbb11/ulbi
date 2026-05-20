import { useTranslation } from "react-i18next";
import i18n from "shared/config/i18n/i18n";

const MainPage = () => {
  const { t } = useTranslation();

  return <div>{t("Welcome to React")}</div>;
};

export default MainPage;
