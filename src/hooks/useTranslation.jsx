import { useState, useEffect, useCallback } from "react";
import { translations } from "../i18n/translations";

export function useTranslation() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "pt");
  const [_, setForceRender] = useState(0); // forçar re-render

  useEffect(() => {
    localStorage.setItem("lang", lang);
    setForceRender((prev) => prev + 1); // re-render imediato ao mudar idioma
  }, [lang]);

  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      let value = translations[lang];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    },
    [lang]
  );

  return { t, lang, setLang };
}
