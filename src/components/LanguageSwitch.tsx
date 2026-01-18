"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;
  const currentLanguage = i18n.language;

  return (
    <div className="flex items-center gap-2 font-mono text-xs">
      <button
        onClick={() => i18n.changeLanguage("cs")}
        className={`hover:text-tui-accent transition-colors cursor-pointer ${
          currentLanguage === "cs"
            ? "text-tui-accent font-bold"
            : "text-tui-text"
        }`}
      >
        CZ
      </button>
      <span className="text-tui-text/50 cursor-default">/</span>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`hover:text-tui-accent transition-colors cursor-pointer ${
          currentLanguage === "en"
            ? "text-tui-accent font-bold"
            : "text-tui-text"
        }`}
      >
        EN
      </button>
    </div>
  );
}
