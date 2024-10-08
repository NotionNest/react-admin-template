import { useUserToken } from '@/store/userStore'
import { Navigate } from 'react-router-dom'
import BasicLayout from '@/layouts'

/**
 * 判断用户是否有权限
 */
export default function AuthRouter() {
  const token = useUserToken()
  console.log('AuthenticatedRoute token', token)

  // if (!token.accessToken) {
  //   // 如果没有授权，则跳转到登录页面
  //   return <Navigate to="/login" replace />
  // }

  // 如果已经授权，则直接渲染子组件
  return <BasicLayout />
}
