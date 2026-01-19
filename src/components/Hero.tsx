"use client";

import Image from "next/image";
import { ReactTyped } from "react-typed";
import { useTranslation } from "react-i18next";
import "@/i18n";
import LanguageSwitch from "./LanguageSwitch";
import TerminalWindow from "./ui/TerminalWindow";

export default function Hero() {
  const { t } = useTranslation("common");
  const roles = (t("about.roles", { returnObjects: true }) as string[]) || [];

  return (
    <TerminalWindow
      title={t("titles.hero")}
      className="h-full"
      allowScroll={false}
      headerComponent={<LanguageSwitch />}
      center
    >
      <Image
        src="/profile_pic.jpg"
        alt={t("about.alt")}
        width={150}
        height={150}
        className="object-cover rounded-full border-tui-accent border-[0.4vh] shrink-0 w-[15vh] h-[15vh] max-w-[150px] max-h-[150px]"
        priority
      />
      <div className="flex flex-col items-center text-center md:text-left gap-[2vh]">
        <h1 className="text-[clamp(1.5rem,4vh,2.5rem)] font-bold bg-tui-accent text-tui-bg px-[1vh] inline-block self-center leading-tight">
          {t("about.title")}
        </h1>
        <div className="text-[clamp(0.9rem,1.8vh,1.2rem)] font-mono h-[3vh] min-h-6">
          <span className="text-tui-text">
            {"<"}
            <ReactTyped
              strings={roles}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="text-tui-text"
            />
            {"/>"}
          </span>
        </div>
      </div>
    </TerminalWindow>
  );
}
