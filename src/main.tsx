import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import App from './App'
import { theme } from './theme/antd/theme'

import './theme/index.css'
import 'virtual:svg-icons-register'
import './locales/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <StyleProvider hashPriority="high">
        <App />
      </StyleProvider>
    </ConfigProvider>
  </React.StrictMode>,
)
