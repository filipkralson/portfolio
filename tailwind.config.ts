import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tui: {
          bg: "var(--background)",
          text: "var(--foreground)",
          accent: "var(--color-tui-accent)",
          border: "var(--color-tui-border)",
          dim: "var(--color-tui-dim)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
