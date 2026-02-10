"use client";

import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TerminalWindow from "./ui/TerminalWindow";

export default function AboutMe() {
  const { t } = useTranslation("common");

  return (
    <TerminalWindow
      title={t("titles.aboutMe")}
      className="h-full"
      headerComponent={
        <div className="flex gap-3">
          <a
            href="https://github.com/filipkralson"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-tui-accent transition-colors text-sm"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/filip-kral-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-tui-accent transition-colors text-sm"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      }
    >
      <div className="flex flex-col gap-4 p-2">
        <h3 className="font-bold text-lg text-tui-accent">
          {t("aboutMe.title")}
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-tui-text whitespace-pre-line">
          {t("aboutMe.description")}
        </p>
      </div>
    </TerminalWindow>
  );
}
