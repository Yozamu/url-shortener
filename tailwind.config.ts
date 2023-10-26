import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          main: '#2e78f0',
          dark: '#2154a6',
        },
        error: {
          background: '#ffcdd2',
          text: '#8a150f',
        },
        primary: {
          main: '#f9fc3a',
          light: '#fffa94',
        },
        success: {
          background: '#c8e6c9',
          text: '#228a0f',
        },
      },
    },
  },
  plugins: [],
};
export default config;
