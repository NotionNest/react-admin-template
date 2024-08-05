/** @type {import('tailwindcss').Config} */
export default {
  // 使用 "class" 模式时，Tailwind 会将 "dark" 类添加到根元素（通常是 <body> 元素）上，以指示页面当前处于深色模式
  // darkMode: "class",
  // 通过配置 content，Tailwind CSS 将会检索和构建包含需要的 CSS 样式的文件，并生成最终的 CSS 输出文件
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      basic: {
        1000: "#FFF7F7",
        950: "#053547",
        900: "#125167",
        800: "#10617a",
        700: "#087896",
        600: "#0092b3",
        500: "#00bfde",
        400: "#18dcf8",
        300: "#60efff",
        200: "#a1f7ff",
        150: "#F3FCFE",
        100: "#cdfcff",
        50: "#ebffff",
      },
    },
    fontFamily: {
      sans: ["Public Sans", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#000000",
        green: "#00A76F",
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        yellow: "#ffc82c",
        gray: "#637381",
      },
    },
  },
  plugins: [],
};
