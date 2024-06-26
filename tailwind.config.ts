import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mexi-black': '#101010',
      },
      spacing: {
        header: '80px',
        'logo-big': '160px',
      },
    },
  },
  plugins: [],
};
export default config;
