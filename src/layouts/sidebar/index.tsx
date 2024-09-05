import { Menu } from 'antd'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from '@/assets/icons/ic-logo.svg'
import type { MenuProps } from 'antd'
import { SvgIcon } from '@/components/icon'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Sider from 'antd/es/layout/Sider'

type MenuItem = Required<MenuProps>['items'][number]

type SidebarProps = {
  closeSideBarDrawer?: () => void
}

function Sidebar(props: SidebarProps) {
  const rootSubmenuKeys = ['management']
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const items: MenuItem[] = [
    {
      key: '/dashboard',
      label: `${t('sys.menu.dashboard')}`,
      icon: <SvgIcon icon="ic-dashboard" size="24" className="mr-6" />,
    },
    {
      key: 'management',
      label: `${t('sys.menu.management')}`,
      icon: <SvgIcon icon="ic-dashboard" size="24" className="mr-6" />,
      children: [
        {
          key: '/user',
          label: `${t('sys.menu.user.index')}`,
          icon: <SvgIcon icon="ic-user" size="24" className="mr-6" />,
        },
        {
          key: '/blog',
          label: `${t('sys.menu.blog')}`,
          icon: <SvgIcon icon="ic-blog" size="24" className="mr-6" />,
        },
      ],
    },
  ]

  const [collapsed, setCollapsed] = useState(false)
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['/dashboard'])

  useEffect(() => {
    setSelectedKeys([pathname])
  }, [pathname, openKeys])

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)

    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const onClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
    props?.closeSideBarDrawer?.()
  }

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={90}
      className="relative h-screen w-64 duration-300 ease-linear"
    >
      <NavLink to="/">
        <img className="mb-2 ml-8 mt-6 h-6 w-10" src={Logo} alt="logo" />
      </NavLink>

      <div className="pl-2">
        <Menu
          mode="inline"
          items={items}
          className="!border-none"
          defaultOpenKeys={openKeys}
          defaultSelectedKeys={selectedKeys}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          onOpenChange={onOpenChange}
          onClick={onClick}
        />
      </div>

      <button
        onClick={toggleCollapsed}
        className="absolute right-0 top-0 hidden h-6 w-6 translate-x-1/2 cursor-pointer select-none rounded-full border-[1px] border-dashed border-[#919eab33] text-center lg:block"
      >
        {collapsed ? (
          <SvgIcon icon="ic-right-arrow" size="16" />
        ) : (
          <SvgIcon icon="ic-left-arrow" size="16" />
        )}
      </button>
    </Sider>
  )
}

export default Sidebar
