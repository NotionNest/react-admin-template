import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loading from '@/components/app/Loading'

const lazyLoad = (Component: any) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
)

const Blog = lazy(() => import('@/pages/Blog'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Page404 = lazy(() => import('@/pages/Page404'))
const Login = lazy(() => import('@/pages/sys/login/Login'))
const User = lazy(() => import('@/pages/User'))
const AuthenticatedRoute = lazy(() => import('./AuthenticatedRoute'))

const routesForPublic: RouteObject[] = []
const routesForAuthenticatedOnly: RouteObject[] = [
  {
    path: '/',
    element: <AuthenticatedRoute />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <Dashboard />, index: true },
      { path: 'user', element: lazyLoad(<User />) },
      { path: 'blog', element: lazyLoad(<Blog />) },
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
