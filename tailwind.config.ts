import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        mintCream: '#F6FFF8',
        mintGreen: '#CCE3DE',
        azure: '#EAF4F4',
        cambridgeBlue: '#A4C3B2',
        viridian: '#6B9080',
      },
    },
  },
  plugins: [],
} satisfies Config;
