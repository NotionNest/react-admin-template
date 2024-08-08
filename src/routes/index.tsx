import { createBrowserRouter, Navigate, RouterProvider, useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import Dashboard from '@/pages/Dashboard'
import User from '@/pages/User'
import Blog from '@/pages/Blog'
import Login from '@/pages/sys/login/Login'
import Page404 from '@/pages/Page404'
import Zustand from '@/pages/test/Zustand'

import UnauthenticatedRoute from './UnauthenticatedRoute'
import AuthenticatedRoute from './AuthenticatedRoute'

function Routes() {
  const routesForPublic: RouteObject[] = []
  const routesForAuthenticatedOnly: RouteObject[] = [
    {
      path: '/',
      element: <AuthenticatedRoute />,
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
  ]

  // 仅用于未通过身份验证的路由
  const routesForNotAuthenticatedOnly: RouteObject[] = [
    {
      path: '/',
      element: <UnauthenticatedRoute />,
      children: [{ path: 'login', element: <Login />, index: true }],
    },
  ]

  const router = createBrowserRouter([
    ...routesForPublic,
    ...routesForNotAuthenticatedOnly,
    ...routesForAuthenticatedOnly,
  ])

  return <RouterProvider router={router} />
}

export default Routes
