import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "background":{
          DEFAULT:'#111111',
          "invert":"#eeeeee"
        },
        "primary":"#111111",
        "complimentary":"#D4B046",
        "text":{
          DEFAULT:"#eeeeee",
          invert:"#111111"
        }

      },
      fontFamily: {
        Raleway: ['var(--font-raleway)'], // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
        Inter: ['var(--font-inter)'], // note: the bit that goes inside the var() function is the same variable name we defined in app.tsx
      }
    },
  },
  plugins: [],
};
export default config;
