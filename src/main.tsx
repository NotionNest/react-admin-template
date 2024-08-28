import { StyleProvider } from '@ant-design/cssinjs'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from './App'
import { theme } from './theme/antd/theme'

import './theme/index.css'
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register'
import './locales/i18n'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // 失败重试次数
      // cacheTime: 300_000, // 缓存有效期 5m

      staleTime: 10_1000, // 数据变得 "陈旧"（stale）的时间 10s
      refetchOnWindowFocus: false, // 禁止窗口聚焦时重新获取数据
      refetchOnReconnect: false, // 禁止重新连接时重新获取数据
      refetchOnMount: false, // 禁止组件挂载时重新获取数据
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ConfigProvider theme={theme}>
        <StyleProvider hashPriority="high">
          <App />
        </StyleProvider>
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
