import { Menu } from 'antd'
import { NavLink, useLocation, useNavigate, useMatches } from 'react-router-dom'
import Logo from '@/assets/icons/ic-logo.svg'
import type { MenuProps } from 'antd'
import { SvgIcon } from '@/components/icon'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Sider from 'antd/es/layout/Sider'
import { AppRouteObject } from '#/router'
import { MenuItemType } from 'antd/es/menu/interface'
import { getMenuRoutes } from '@/router/menus'

type SidebarProps = {
  closeSideBarDrawer?: () => void
}

function Sidebar(props: SidebarProps) {
  const navigate = useNavigate()
  const matches = useMatches()
  const { pathname } = useLocation()
  const { t } = useTranslation()

  // router -> menu
  const routeToMenu = useCallback(
    (items: AppRouteObject[]) => {
      console.log('routeToMenu')
      return items.map((item) => {
        const menuItem: any = {}
        const { meta, children } = item
        if (meta) {
          menuItem.key = meta.key
          menuItem.label = t(meta?.title)

          if (meta.icon) {
            menuItem.icon = <SvgIcon icon={meta.icon} size="20" className="mr-6" />
          }
        }

        if (children) {
          menuItem.children = routeToMenu(children)
        }
        return menuItem
      })
    },
    [t],
  )

  const [collapsed, setCollapsed] = useState(false)
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([''])
  const [menuList, setMenuList] = useState<MenuItemType[]>([])

  useEffect(() => {
    const openKeys = matches
      .filter((match) => match.pathname !== '/')
      .map((match) => match.pathname)
    setOpenKeys(openKeys)
    setSelectedKeys([pathname])
  }, [pathname, matches])

  useEffect(() => {
    const menuRoutes = getMenuRoutes()
    const menus = routeToMenu(menuRoutes)
    setMenuList(menus)
    console.log('created', menus)
  }, [routeToMenu])

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)

    if (latestOpenKey) {
      setOpenKeys([latestOpenKey])
    } else {
      setOpenKeys([])
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
      className="relative h-screen duration-300 ease-linear"
    >
      <NavLink to="/">
        <img className="mb-2 ml-8 mt-6 h-6 w-10" src={Logo} alt="logo" />
      </NavLink>

      <Menu
        mode="inline"
        items={menuList}
        className="!border-none"
        defaultOpenKeys={openKeys}
        defaultSelectedKeys={selectedKeys}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onOpenChange={onOpenChange}
        onClick={onClick}
      />

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
