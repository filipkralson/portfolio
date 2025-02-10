import type { Metadata } from "next";
import { Aleo } from "next/font/google";
import "./globals.css";
import React from "react";

const aleo = Aleo({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Filip Král | Portfolio",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aleo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
