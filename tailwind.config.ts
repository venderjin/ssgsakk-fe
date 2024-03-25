import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/images/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        footerCallcenter:
          "url('https://sui.ssgcdn.com/ui/m_ssg/img/v2/sp_footer.png')",
        "login-icon":
          "url(https://sui.ssgcdn.com/ui/m_ssg/img/sp_cmem_login.png)",
        "top-icon":
          "url('https://sui.ssgcdn.com/ui/m_ssg/img/com_v2/sp_top_cate.png')",
        "sns-icon":
          "url('https://sui.ssgcdn.com/ui/m_ssg/img/sprites/sp_cmemlogin_cico_20230912@2x.png')",
        "product-icon":
          "url('https://sui.ssgcdn.com/ui/m_ssg/img/sprites/sp_product_20240219@2x.png')",
        "product-opt-icon":
          "url('https://sui.ssgcdn.com/ui/m_ssg/img/sprites/sp_product_optbar_20230630@2x.png')",
      },
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
      colors: {
        "primary-red": "#ff5452",
      },
      keyframes: {
        "bottom-sheet-up": {
          "0%": { transform: "translateY(420px)" },
          "100%": { transform: "translateY(0)" },
        },
        "bottom-sheet-down": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(420px)" },
        },
        "left-sheet-right": {
          "0%": { transform: "translateX(-420px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
