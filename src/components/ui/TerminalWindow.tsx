"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

interface TerminalWindowProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
  noPadding?: boolean;
  allowScroll?: boolean;
  headerComponent?: React.ReactNode;
  center?: boolean;
}

export default function TerminalWindow({
  children,
  title = "terminal",
  className,
  noPadding = false,
  allowScroll = true,
  headerComponent,
  center = false,
}: TerminalWindowProps) {
  return (
    <div
      className={twMerge(
        "border-2 border-tui-border shadow-[0.5vh_0.5vh_0px_0px_rgba(0,0,0,1)] flex flex-col bg-white",
        className,
      )}
    >
      <div className="grid grid-cols-3 items-center px-[1vh] py-[0.5vh] border-b-2 border-tui-border bg-tui-dim relative min-h-[3.5vh] shrink-0">
        {/* Left: Title */}
        <div className="flex justify-start overflow-hidden">
          <span className="font-mono text-xs uppercase tracking-widest truncate">
            {title}
          </span>
        </div>

        {/* Center: Component */}
        <div className="flex justify-center z-10">{headerComponent}</div>

        {/* Right: Controls */}
        <div className="flex justify-end gap-[0.5vh]">
          <div className="w-[1.2vh] h-[1.2vh] border border-tui-border bg-white" />
          <div className="w-[1.2vh] h-[1.2vh] border border-tui-border bg-tui-accent" />
          <div className="w-[1.2vh] h-[1.2vh] border border-tui-border bg-black" />
        </div>
      </div>
      <div
        className={twMerge(
          "flex-1 min-h-0",
          !noPadding && "p-4",
          allowScroll ? "overflow-auto" : "overflow-hidden",
          center && "flex flex-col items-center justify-center gap-[4vh]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
