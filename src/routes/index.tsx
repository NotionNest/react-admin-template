import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import Dashboard from '@/pages/Dashboard'
import User from '@/pages/User'
import Blog from '@/pages/Blog'
import Login from '@/pages/sys/login/Login'
import Page404 from '@/pages/Page404'

import AuthenticatedRoute from './AuthenticatedRoute'

const routesForPublic: RouteObject[] = []
const routesForAuthenticatedOnly: RouteObject[] = [
  {
    path: '/',
    element: <AuthenticatedRoute />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <Dashboard />, index: true },
      { path: 'user', element: <User /> },
      { path: 'blog', element: <Blog /> },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
]

const routesForNotAuthenticatedOnly: RouteObject[] = [{ path: '/login', element: <Login /> }]

const routes: RouteObject[] = [
  ...routesForPublic,
  ...routesForAuthenticatedOnly,
  ...routesForNotAuthenticatedOnly,
]

function Routes() {
  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}

export { routesForAuthenticatedOnly, routesForNotAuthenticatedOnly, routesForPublic }
export default Routes
