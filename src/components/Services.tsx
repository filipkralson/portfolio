"use client";

import { MdWeb, MdDraw, MdPhone } from "react-icons/md";
import { useTranslation } from "react-i18next";
import TerminalWindow from "./ui/TerminalWindow";

export default function Services() {
  const { t } = useTranslation("common");

  const services = [
    {
      icon: MdWeb,
      title: t("infoCards.web.title"),
      description: t("infoCards.web.description"),
    },
    {
      icon: MdDraw,
      title: t("infoCards.design.title"),
      description: t("infoCards.design.description"),
    },
    {
      icon: MdPhone,
      title: t("infoCards.brainstorming.title"),
      description: t("infoCards.brainstorming.description"),
    },
  ];

  return (
    <TerminalWindow
      title={t("titles.services")}
      className="h-full"
      noPadding
      allowScroll={false}
    >
      <div className="grid grid-cols-1 gap-[1vh] h-full overflow-y-auto p-[1.5vh]">
        {services.map((s, i) => (
          <div
            key={i}
            className="border border-tui-dim p-4 bg-tui-dim/20 hover:bg-tui-dim/40 transition-colors flex gap-4 items-start"
          >
            <s.icon className="text-[4vh] max-text-4xl text-tui-accent shrink-0" />
            <div>
              <h3 className="font-bold text-[clamp(0.9rem,2vh,1.1rem)] text-tui-text mb-0.5 underline decoration-tui-accent decoration-2 underline-offset-2">
                {s.title}
              </h3>
              <p className="text-[clamp(0.7rem,1.5vh,0.9rem)] opacity-80 leading-snug">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </TerminalWindow>
  );
}
