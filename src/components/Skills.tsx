"use client";

import {
  SiSpring,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiLinux,
  SiReact,
  SiExpo,
  SiFigma,
  SiNodedotjs,
  SiFastify,
  SiVercel,
  SiPython,
  SiFlask,
  SiGooglecloud,
  SiGit,
  SiPostman,
  SiSupabase,
  SiSwagger,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import TerminalWindow from "./ui/TerminalWindow";
import { useTranslation } from "react-i18next";

const icons = [
  { icon: FaJava },
  { icon: SiSpring },
  { icon: SiNodedotjs },
  { icon: SiPython },
  { icon: SiFlask },
  { icon: SiHtml5 },
  { icon: SiCss3 },
  { icon: SiTypescript },
  { icon: SiReact },
  { icon: RiNextjsFill },
  { icon: SiExpo },
  { icon: SiTailwindcss },
  { icon: SiFigma },
  { icon: SiGooglecloud },
  { icon: SiSupabase },
  { icon: SiFastify },
  { icon: SiVercel },
  { icon: SiDocker },
  { icon: SiMongodb },
  { icon: SiMysql },
  { icon: SiPostgresql },
  { icon: SiLinux },
  { icon: SiGit },
  { icon: SiPostman },
  { icon: SiSwagger },
];

export default function Skills() {
  const { t } = useTranslation("common");

  return (
    <TerminalWindow
      title={t("titles.skills")}
      className="h-full"
      noPadding
      allowScroll={false}
    >
      <div className="bg-white h-full w-full overflow-x-auto flex items-center scrollbar-thin scrollbar-thumb-tui-accent scrollbar-track-transparent">
        <div className="flex items-center gap-8 p-4 md:px-8 min-w-max mx-auto">
          {icons.map((item, i) => (
            <item.icon
              key={i}
              className="text-3xl text-tui-text hover:text-tui-accent transition-colors cursor-pointer shrink-0"
            />
          ))}
        </div>
      </div>
    </TerminalWindow>
  );
}
