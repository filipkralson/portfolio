"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import TerminalWindow from "./ui/TerminalWindow";

interface StatItem {
  year: string;
  text: string;
  details: string;
  company?: string;
  institution?: string;
  link: string;
}

export default function Stats() {
  const { t } = useTranslation("common");

  const education =
    (t("stats.education", { returnObjects: true }) as StatItem[]) || [];
  const jobs = (t("stats.jobs", { returnObjects: true }) as StatItem[]) || [];

  return (
    <TerminalWindow title={t("titles.stats")} className="h-full">
      <div className="font-mono text-sm space-y-4">
        <div>
          <h4 className="border-b border-tui-accent mb-2 text-tui-accent uppercase font-bold">
            [{t("stats.experienceTitle")}]
          </h4>
          <div className="space-y-4">
            {jobs.map((e, i) => (
              <div
                key={i}
                className="pl-2 border-l-2 border-dashed border-tui-dim"
              >
                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {e.year}
                  </span>
                  {e.link && (
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-tui-accent hover:underline opacity-70"
                    >
                      {e.company} ↗
                    </a>
                  )}
                </div>
                <p className="font-bold">{e.text}</p>
                <p className="text-xs opacity-75">{e.details}</p>
              </div>
            ))}
            <p className="text-xs text-tui-accent pl-2">
              {t("stats.otherProjects")}
            </p>
          </div>
        </div>
        <div>
          <h4 className="border-b border-tui-accent mb-2 text-tui-accent uppercase font-bold">
            [{t("stats.educationTitle")}]
          </h4>
          <div className="space-y-4">
            {education.map((e, i) => (
              <div
                key={i}
                className="pl-2 border-l-2 border-dashed border-tui-dim"
              >
                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {e.year}
                  </span>
                  {e.link && (
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-tui-accent hover:underline opacity-70"
                    >
                      {e.institution} ↗
                    </a>
                  )}
                </div>
                <p className="font-bold">{e.text}</p>
                <p className="text-xs opacity-75">{e.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TerminalWindow>
  );
}
