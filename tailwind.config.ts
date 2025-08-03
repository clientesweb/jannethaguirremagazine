import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        primary: {
          ...defaultConfig.theme.extend.colors.primary,
          DEFAULT: "#ec2b2f",
          50: "#fef2f2",
          100: "#fee2e2",
          500: "#ec2b2f",
          600: "#dc2626",
          700: "#b91c1c",
          foreground: "#ffffff",
        },
        contrast: {
          DEFAULT: "#efe6e8",
          50: "#faf9fa",
          100: "#efe6e8",
          200: "#e5d6d9",
        },
        chart: {
          "1": "#ec2b2f",
          "2": "#f97316",
          "3": "#eab308",
          "4": "#22c55e",
          "5": "#3b82f6",
        },
      },
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        ...defaultConfig.theme.extend.borderRadius,
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}

export default config
