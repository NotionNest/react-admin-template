import { Navigate } from 'react-router-dom'
import { AppRouteObject } from '#/router'
import { lazy } from 'react'
import AuthRouter from './AuthRouter'

const Page404 = lazy(() => import('@/pages/Page404'))
const Login = lazy(() => import('@/pages/sys/login/Login'))

const modules = import.meta.glob('./modules/**/*.tsx', { eager: true })
const routeModuleList: AppRouteObject[] = []

Object.keys(modules).forEach((key) => {
  const mod = (modules as any)[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

console.log('routeModuleList', routeModuleList)

// root
export const RootRoute: AppRouteObject = {
  path: '/',
  element: <AuthRouter />,
  children: [
    {
      index: true,
      element: <Navigate to="dashboard" replace />,
    },
    ...routeModuleList,
  ],
}

// login
export const LoginRoute: AppRouteObject = {
  path: '/login',
  element: <Login />,
}

// 404
export const PageNotFoundRoute: AppRouteObject = {
  path: '*',
  element: <Page404 />,
}

export const basicRoutes = [LoginRoute, RootRoute, PageNotFoundRoute]
export const asyncRoutes = [RootRoute, PageNotFoundRoute]
