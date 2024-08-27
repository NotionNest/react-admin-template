import { StyleProvider } from '@ant-design/cssinjs'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import App from './App'
import { theme } from './theme/antd/theme'

import './theme/index.css'
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register'
import './locales/i18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <StyleProvider hashPriority="high">
        <App />
      </StyleProvider>
    </ConfigProvider>
  </React.StrictMode>,
)
