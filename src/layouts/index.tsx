import { Outlet } from 'react-router-dom'
import Header from './header'
import Sidebar from './sidebar'
import Content from './content'

function BasicLayout() {
  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        <div className="hidden border-r-[1px] border-dashed border-r-[#919eab33] lg:block">
          <Sidebar />
        </div>
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          <Content>
            <Outlet />
          </Content>
        </div>
      </div>
    </div>
    // <Layout className="!min-h-[100vh]">
    //   <Header />
    //   <Sider />
    //   <Outlet />
    // </Layout>
  )
}

export default BasicLayout
