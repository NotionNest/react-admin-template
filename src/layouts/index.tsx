import { Outlet } from 'react-router-dom'
import Header from './header'
import Sidebar from './sidebar'

function BasicLayout() {
  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <Header />
          <main>
            <div>
              <Outlet />
            </div>
          </main>
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
