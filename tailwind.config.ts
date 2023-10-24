import type { Config } from "tailwindcss";

//#TODO Escolher cores para borda, input e DARK MODE

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        content: "hsl(var(--content))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        emphasize: "hsl(var(--emphasize))",
        success: "hsl(var(--success))",
        error: "hsl(var(--error))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
