import { Navigate, useRoutes } from 'react-router-dom'

import Dashboard from '@/pages/Dashboard'
import User from '@/pages/User'
import Blog from '@/pages/Blog'
import Login from '@/pages/sys/login/Login'
import Page404 from '@/pages/Page404'
import Zustand from '@/pages/test/Zustand'

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      children: [
        { element: <Navigate to="/dashboard" />, index: true },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'user', element: <User /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/test',
      children: [
        {
          element: <Navigate to="/test/zustand" />,
          index: true,
        },
        {
          path: 'zustand',
          element: <Zustand />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '*',
      element: <Page404 />,
    },
  ])

  return routes
}
