import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: {
              DEFAULT: "#326596",
              50: "#e9e6e6",
              "100": "rgba(255,255,255,0.5)",
              "200": "rgba(47,79,79,1)",
              "600": "#fff5ee",
            },
            foreground: {
              "50": "#161616",
              "100": "#b8b8bb",
              "200": "#e9e6e6",
              "300": "rgba(47,79,79,1)",
              "400": "#b8860b",
            },
          },
        }, // light theme colors
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: {
              DEFAULT: "#0f0f18",
              50: "rgba(15,15,24,0.85)",
              "100": "rgba(255,255,255,0.1)",
            },
            foreground: {
              DEFAULT: "#e9e6e6",
              "50": "#161616",
              "100": "#808084",
              "200": "#e9e6e6",
            },
            default: {
              foreground: "#e9e6e6",
            },
          }, // dark theme colors
        },
      },
    }),
  ],
};
export default config;
