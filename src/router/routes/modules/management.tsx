import { AppRouteObject } from '#/router'
import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

const lazyLoad = (Component: any) => (
  <Suspense>
    <Component />
  </Suspense>
)

const User = lazy(() => import('@/pages/management/user'))
const Blog = lazy(() => import('@/pages/management/blog'))

const management: AppRouteObject = {
  path: '/management',
  meta: {
    title: 'sys.menu.management',
    icon: 'ic-management',
    key: '/management',
  },
  children: [
    {
      index: true,
      element: <Navigate to="user" replace />,
    },
    {
      path: 'user',
      element: lazyLoad(User),
      meta: {
        title: 'sys.menu.user',
        icon: 'ic-user',
        key: '/management/user',
      },
    },
    {
      path: 'blog',
      element: lazyLoad(Blog),
      meta: {
        title: 'sys.menu.blog',
        icon: 'ic-blog',
        key: '/management/blog',
      },
    },
  ],
}

export default management
