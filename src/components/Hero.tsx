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
        className="object-cover rounded-full border-tui-accent border-4 shrink-0 w-[150px] h-[150px]"
        priority
      />
      <div className="flex flex-col items-center text-center md:text-left gap-4">
        <h1 className="text-4xl font-bold bg-tui-accent text-tui-bg px-2 inline-block self-center">
          {t("about.title")}
        </h1>
        <div className="text-lg font-mono h-8">
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
