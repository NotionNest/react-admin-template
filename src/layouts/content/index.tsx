import { PropsWithChildren } from 'react'
import BreadCrumb from './BreadCrumb'

function Content({ children }: PropsWithChildren) {
  return (
    <main className="border-[1px] border-gray-400 p-4">
      <BreadCrumb />
      {children}
    </main>
  )
}

export default Content
