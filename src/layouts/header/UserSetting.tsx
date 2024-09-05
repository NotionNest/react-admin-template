import Dropdown from 'antd/es/dropdown/dropdown'
import { Divider, theme, type DropDownProps, type MenuProps } from 'antd'
import { NavLink } from 'react-router-dom'
import userServices from '@/api/services/userServices'
import { useMutation } from '@tanstack/react-query'
import { useUserActions, useUserInfo } from '@/store/userStore'
import { useLoginStateContext } from '@/pages/sys/login/providers/LoginStateProvider'
import { cloneElement } from 'react'

const { useToken } = theme

export default function UserSetting() {
  const { token } = useToken()
  const logoutMutation = useMutation({ mutationFn: userServices.logout })
  const { backToLogin } = useLoginStateContext()
  const { clearUserInfoAndToken } = useUserActions()
  const { username, email } = useUserInfo()

  const logout = () => {
    try {
      logoutMutation.mutateAsync()
    } catch (error) {
      console.log('error', error)
    }
    clearUserInfoAndToken()
    backToLogin()
  }

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  }

  const menuStyle: React.CSSProperties = {
    boxShadow: 'none',
  }

  const dropdownRender: DropDownProps['dropdownRender'] = (menu) => (
    <div style={contentStyle}>
      <div className="flex flex-col items-start p-4">
        <div>{username}</div>
        <div>{email}</div>
      </div>
      <Divider style={{ margin: 0 }} />
      {cloneElement(menu as React.ReactElement, { style: menuStyle })}
    </div>
  )

  const items: MenuProps['items'] = [
    { label: <NavLink to="/dashboard">Home</NavLink>, key: '0' },
    { label: <NavLink to="/dashboard">Profile</NavLink>, key: '1' },
    { label: <NavLink to="/dashboard">Settings</NavLink>, key: '2' },
    { type: 'divider' },
    {
      label: (
        <button onClick={logout} className="text-orange font-bold">
          Logout
        </button>
      ),
      key: '3',
    },
  ]

  return (
    <Dropdown trigger={['click']} menu={{ items }} dropdownRender={dropdownRender}>
      <button className="hover:bg-hover flex h-10 w-10 transform-none cursor-pointer items-center justify-center rounded-full hover:scale-105">
        <img
          className="h-8 w-8 rounded-full"
          src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"
          alt="avatar"
        />
      </button>
    </Dropdown>
  )
}
