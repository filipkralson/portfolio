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
  { icon: FaJava, name: "java" },
  { icon: SiSpring, name: "spring" },
  { icon: SiNodedotjs, name: "nodejs" },
  { icon: SiPython, name: "python" },
  { icon: SiFlask, name: "flask" },
  { icon: SiHtml5, name: "html" },
  { icon: SiCss3, name: "css" },
  { icon: SiTypescript, name: "typescript" },
  { icon: SiReact, name: "react" },
  { icon: RiNextjsFill, name: "nextjs" },
  { icon: SiExpo, name: "expo" },
  { icon: SiTailwindcss, name: "tailwind" },
  { icon: SiFigma, name: "figma" },
  { icon: SiGooglecloud, name: "googlecloud" },
  { icon: SiSupabase, name: "supabase" },
  { icon: SiFastify, name: "fastify" },
  { icon: SiVercel, name: "vercel" },
  { icon: SiDocker, name: "docker" },
  { icon: SiMongodb, name: "mongodb" },
  { icon: SiMysql, name: "mysql" },
  { icon: SiPostgresql, name: "postgresql" },
  { icon: SiLinux, name: "linux" },
  { icon: SiGit, name: "git" },
  { icon: SiPostman, name: "postman" },
  { icon: SiSwagger, name: "swagger" },
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
        <div className="flex items-center gap-[4vh] p-[2vh] md:px-[4vh] min-w-max mx-auto">
          {icons.map((item, i) => (
            <item.icon
              key={i}
              title={t(`skillsData.${item.name}`)}
              className="text-[3vh] max-text-4xl text-tui-text hover:text-tui-accent transition-colors cursor-pointer shrink-0"
            />
          ))}
        </div>
      </div>
    </TerminalWindow>
  );
}
