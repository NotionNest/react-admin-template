import { AppLocalePicker } from '@/components/app'
import { SvgIcon } from '@/components/icon'
import { Drawer } from 'antd'
import { useState } from 'react'
import UserSetting from './UserSetting'
import Sidebar from '../sidebar'

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <>
      <header className="bg-white sticky top-0 w-full">
        <div className="shadow-2 text-gray flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
          <div className="flex items-center">
            <button
              onClick={() => setDrawerOpen(true)}
              className="hover:bg-hover flex h-9 w-9 cursor-pointer items-center justify-center rounded-full lg:hidden"
            >
              <SvgIcon icon="ic-menu" size="24" />
            </button>

            <button className="hover:bg-hover flex h-9 w-9 cursor-pointer items-center justify-center rounded-full lg:hidden">
              <SvgIcon icon="ic-search" size="20" />
            </button>

            <span className="bg-hover flex h-6 cursor-pointer items-center justify-center rounded-md px-2 py-0 text-xs font-bold">
              ⌘K
            </span>
          </div>

          <div className="flex">
            <AppLocalePicker />
            <div>
              <button className="hover:bg-hover flex h-10 w-10 transform-none cursor-pointer items-center justify-center rounded-full hover:scale-105">
                <SvgIcon icon="ic-setting" size="24" />
              </button>
            </div>
            <UserSetting />
          </div>
        </div>
      </header>

      <Drawer
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closeIcon={false}
        width="auto"
      >
        <Sidebar closeSideBarDrawer={() => setDrawerOpen(false)} />
      </Drawer>
    </>
  )
}

export default Header
