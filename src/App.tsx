/*
 * @Author: aiden
 * @Date: 2024-08-20 20:45:21
 * @LastEditors: aiden
 * @LastEditTime: 2024-08-22 20:58:37
 * @Description:
 */
import { RouterProvider } from 'react-router-dom'
import router from './router'

export default function App() {
  return <RouterProvider router={router} />
}
