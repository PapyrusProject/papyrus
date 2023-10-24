import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    //container: {}  #TODO vai querer setar um container específico || #TODO responsiveVariants TV
    extend: {
      colors:{
        background: 'var(--background)',
        content: 'var(--content)', 
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        emphasize: 'var(--emphasize)',
        success: 'var(--success)',
        error: 'var(--error)',
        border: 'var(--border)',
        input: 'var(--input)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}
export default config
