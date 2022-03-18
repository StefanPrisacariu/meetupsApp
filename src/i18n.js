import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ro"],
    fallbackLng: "ro",
    intterpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locale/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });

export default i18n;
