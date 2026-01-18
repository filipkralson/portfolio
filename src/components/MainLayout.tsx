"use client";

import React from "react";

/**
 * Main Layout Wrapper
 * Enforces the "One Page" constraint on desktop while allowing scrolling on mobile.
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-dvh w-full flex flex-col items-center justify-start md:justify-center p-4 md:p-0 lg:p-0 md:overflow-hidden md:h-screen bg-tui-bg">
      <div className="w-full h-auto md:w-[90vw] md:h-[90vh] flex flex-col md:grid md:grid-cols-12 md:grid-rows-12 gap-4">
        {children}
      </div>
    </main>
  );
}
