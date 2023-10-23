import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xsm': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1500px',
    },
    colors: {
      'black': "#000000",
      'primary': "#068FFF",
      'white': "#EEEEEE",
      'secondary': "#4E4FEB",
      'gray': "#D9D9D9",
    },
  },
  plugins: [],
}
export default config
