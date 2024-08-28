/** @type {import('tailwindcss').Config} */
export default {
  // 使用 "class" 模式时，Tailwind 会将 "dark" 类添加到根元素（通常是 <body> 元素）上，以指示页面当前处于深色模式
  // darkMode: "class",
  // 通过配置 content，Tailwind CSS 将会检索和构建包含需要的 CSS 样式的文件，并生成最终的 CSS 输出文件
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1600px',
    },
    colors: {
      basic: {
        1000: '#FFF7F7',
        950: '#053547',
        900: '#125167',
        800: '#10617a',
        700: '#087896',
        600: '#0092b3',
        500: '#00bfde',
        400: '#18dcf8',
        300: '#60efff',
        200: '#a1f7ff',
        150: '#F3FCFE',
        100: '#cdfcff',
        50: '#ebffff',
        black: '#000000',
        green: '#00A76F',
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        yellow: '#ffc82c',

        gray: '#637381',
        hover: '#63738114',
        'gray-100': '#F9FAFB',
        'gray-200': '#F4F6F8',
        'gray-300': '#DFE3E8',
        'gray-400': '#C4CDD5',
        'gray-500': '#F9FAFB',
        'gray-600': '#637381',
        'gray-700': '#454F5B',
        'gray-800': '#212B36',
        'gray-900': '#161C24',

        'primary-lighter': '#C8FAD6',
        'primary-light': '#5BE49B',
        primary: '#00A76F',
        'primary-dark': '#007867',
        'primary-darker': '#004B50',
      },
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
