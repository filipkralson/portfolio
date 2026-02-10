"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();

  // resolvedLanguage is more reliable than i18n.language for matching
  const currentLanguage = i18n.resolvedLanguage || i18n.language || "cs";

  const isCzech = currentLanguage.startsWith("cs");
  const isEnglish = currentLanguage.startsWith("en");

  return (
    <div className="flex items-center gap-2 font-mono text-xs">
      <button
        onClick={() => i18n.changeLanguage("cs")}
        className={`hover:text-tui-accent transition-colors cursor-pointer ${
          isCzech ? "text-tui-accent font-bold" : "text-tui-text"
        }`}
      >
        CZ
      </button>
      <span className="text-tui-text/50 cursor-default">/</span>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`hover:text-tui-accent transition-colors cursor-pointer ${
          isEnglish ? "text-tui-accent font-bold" : "text-tui-text"
        }`}
      >
        EN
      </button>
    </div>
  );
}
