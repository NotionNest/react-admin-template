module.exports = {
  root: true, // 表示当前目录即为根目录，ESLint 规则将被限制到该目录下
  env: {
    browser: true, // 代码运行在浏览器环境中
    es2020: true, // 代码遵循 ES2020 规范
    node: true, // 代码运行在 Node.js 环境中
  },
  /* 解析器 */
  parser: '@typescript-eslint/parser', // 指定 ESLint 使用 @typescript-eslint/parser 解析器
  parserOptions: {
    project: ['./tsconfig.app.json', './tsconfig.node.json'], // 指定 TypeScript 配置文件
    ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
    sourceType: 'module', // 代码使用 ES 模块
    ecmaFeatures: {
      jsx: true, // 启用 JSX 语法
    },
    extraFileExtensions: ['.json'], // 额外的文件扩展名
  },
  settings: {
    // 识别 @ # alias
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'], // 使用 '@' 代表 './src' 目录
          ['#', './types'], // 使用 '#' 代表 './types' 目录
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // 支持的文件扩展名
      },
    },
  },
  /* ESLint 中基础配置需要继承的配置 */
  extends: [
    'prettier',
    'airbnb', // 使用 Airbnb JavaScript 风格指南
    'airbnb-typescript', // 使用 Airbnb TypeScript 风格指南
    'airbnb/hooks', // 使用 Airbnb React Hooks 风格指南
    'plugin:@typescript-eslint/recommended', // 使用 @typescript-eslint 推荐的规则
    'plugin:jsx-a11y/recommended', // 使用 jsx-a11y 推荐的规则
    'plugin:import/errors', // 使用 import 插件的错误规则
    'plugin:import/warnings', // 使用 import 插件的警告规则
    'prettier', // 启用 Prettier 相关的 ESLint 规则
    'plugin:prettier/recommended', // 使用 Prettier 插件推荐的规则
  ],
  /* ESLint文件所依赖的插件 */
  plugins: [
    '@typescript-eslint', // TypeScript 插件
    'prettier', // Prettier 插件
    'react', // React 插件
    'react-hooks', // React Hooks 插件
    'jsx-a11y', // JSX 可访问性插件
    'import', // import 插件
    'unused-imports', // 未使用导入检测插件
  ],
  /**
   * 定义规则
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    semi: ['error', 'never'], // 强制使用分号
    'no-console': 'off', // 允许使用 console
    // 'no-unused-vars': 'off', // 禁用 no-unused-vars 规则（使用 TypeScript 规则替代）
    // 'no-case-declarations': 'off', // 关闭 case 声明检查
    // 'no-use-before-define': 'off', // 关闭定义前使用检查（使用 TypeScript 规则替代）
    // 'no-param-reassign': 'off', // 允许修改函数参数
    // 'space-before-function-paren': 'off', // 关闭函数括号前空格检查
    // 'class-methods-use-this': 'off', // 关闭类方法必须使用 this 检查
    // 'jsx-a11y/click-events-have-key-events': 'off', // 关闭点击事件必须有键盘事件检查
    // 'jsx-a11y/interactive-supports-focus': 'off', // 关闭交互元素必须支持焦点检查
    // 'jsx-a11y/no-noninteractive-element-interactions': 'off', // 关闭非交互元素的交互事件检查
    // 'jsx-a11y/no-static-element-interactions': 'off', // 关闭静态元素的交互事件检查
    'react/react-in-jsx-scope': 'off', // 关闭 React 必须在 JSX 范围内检查（React 17 之后不再需要手动引入）
    // 'react/button-has-type': 'off', // 关闭按钮必须有 type 属性检查
    // 'react/require-default-props': 'off', // 关闭要求默认属性检查
    // 'react/no-array-index-key': 'off', // 关闭使用数组索引作为 key 的检查
    // 'react/jsx-props-no-spreading': 'off', // 关闭 JSX 属性展开检查
    // 'import/first': 'warn', // 警告：所有导入必须在其他代码之前
    // 'import/newline-after-import': 'warn', // 警告：导入后必须有空行
    // 'import/no-duplicates': 'warn', // 警告：禁止重复导入
    'import/no-extraneous-dependencies': 'off', // 关闭禁止使用未在 package.json 中声明的依赖项检查
    // 'import/prefer-default-export': 'off', // 关闭偏好默认导出的检查
    // 'import/no-cycle': 'off', // 关闭禁止循环依赖检查
    // // 'unused-imports/no-unused-imports-ts': 'warn', // 警告：未使用的导入
    // 'unused-imports/no-unused-vars-ts': [
    //   'warn',
    //   { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }, // 警告未使用的变量和参数，忽略以下划线开头的变量
    // ],
    // '@typescript-eslint/no-unused-vars': [
    //   'warn',
    //   {
    //     argsIgnorePattern: '^_',
    //     varsIgnorePattern: '^_',
    //   },
    // ],
    // '@typescript-eslint/no-unused-expressions': 'off', // 关闭未使用表达式检查
    // '@typescript-eslint/ban-ts-ignore': 'off', // 关闭禁止 @ts-ignore 注释检查
    // '@typescript-eslint/ban-ts-comment': 'off', // 关闭禁止 @ts-comment 注释检查
    // '@typescript-eslint/ban-types': 'off', // 关闭禁止某些类型的检查
    // '@typescript-eslint/explicit-function-return-type': 'off', // 关闭显式函数返回类型检查
    // '@typescript-eslint/no-explicit-any': 'off', // 关闭禁止使用 any 类型检查
    // '@typescript-eslint/no-var-requires': 'off', // 关闭禁止使用 require 语句检查
    // '@typescript-eslint/no-empty-function': 'off', // 关闭禁止空函数检查
    // '@typescript-eslint/no-use-before-define': 'off', // 关闭禁止在定义前使用检查
    // '@typescript-eslint/no-non-null-assertion': 'off', // 关闭禁止非空断言检查
    // '@typescript-eslint/no-shadow': 'off', // 关闭禁止变量声明遮蔽检查
    // '@typescript-eslint/explicit-module-boundary-types': 'off', // 关闭显式模块边界类型检查
  },
}
