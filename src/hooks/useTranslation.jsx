
import { translations } from "../i18n/translations";

export function useTranslation() {
  const lang = localStorage.getItem("lang") || "pt";

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return { t, lang };
}