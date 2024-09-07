import { createHashRouter, RouteObject } from 'react-router-dom'
import { asyncRoutes } from './routes'

const router: any = createHashRouter(asyncRoutes as RouteObject[])

export default router
