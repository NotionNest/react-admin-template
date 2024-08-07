import { SvgIcon } from '@/components/icon'
import AppLocalePicker from '@/components/app/AppLocalePicker'

function Dashboard() {
  return (
    <>
      <div>
        <SvgIcon icon="ic-locale_zh" className="mr-2" size="20" />
        <SvgIcon icon="ic-locale_en" className="mr-2" size="20" />
      </div>
      <AppLocalePicker />
    </>
  )
}

export default Dashboard
