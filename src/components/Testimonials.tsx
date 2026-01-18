"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import TerminalWindow from "./ui/TerminalWindow";

export default function Testimonials() {
  const { t } = useTranslation("common");

  return (
    <TerminalWindow
      title={t("titles.testimonials")}
      className="h-full"
      noPadding
      allowScroll={false}
    >
      <div className="flex flex-col h-full relative p-4 overflow-y-auto">
        <h3 className="font-bold text-lg leading-tight mb-2 underline text-tui-accent">
          {t("testimonials.ecospirit.title")}
        </h3>
        <p className="text-sm md:text-base mb-6 bg-tui-dim/40 p-4 border-l-4 border-tui-accent italic relative text-tui-text">
          “{t("testimonials.ecospirit.description")}”
        </p>
        <div className="text-sm mt-auto">
          <p className="font-bold text-tui-text">
            {t("testimonials.ecospirit.author.name")}
          </p>
          <p className="text-tui-text/75 italic">
            {t("testimonials.ecospirit.author.position")}
          </p>
        </div>

        <div className="mt-6">
          <a
            href="https://www.ecospirit.cz"
            target="_blank"
            className="text-sm inline-flex items-center gap-2 text-tui-accent hover:underline font-bold"
          >
            {t("testimonials.ecospirit.linkBtn")} <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </TerminalWindow>
  );
}
