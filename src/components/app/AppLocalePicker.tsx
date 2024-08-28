import { Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { SvgIcon } from '../icon'

type Locale = 'zh' | 'en'

function AppLocalePicker() {
  const { i18n } = useTranslation()

  const [locale, setLocale] = useState<Locale>(() => {
    return i18n.resolvedLanguage as Locale
  })

  const localeList: MenuProps['items'] = [
    {
      key: 'zh_CN',
      label: 'Chinese',
      icon: <SvgIcon icon="ic-locale_zh_CN" className="mr-2" size="20" />,
    },
    {
      key: 'en_US',
      label: 'English',
      icon: <SvgIcon icon="ic-locale_en_US" className="mr-2" size="20" />,
    },
  ]

  const handleLocaleChange: MenuProps['onClick'] = ({ key }) => {
    setLocale(key as Locale)
    // 切换语言
    i18n.changeLanguage(key)
  }

  return (
    <Dropdown
      menu={{ items: localeList, onClick: handleLocaleChange }}
      placement="bottomRight"
      trigger={['click']}
      key={locale}
    >
      <button className="hover:bg-hover flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
        <SvgIcon icon={`ic-locale_${locale}`} size="24" />
      </button>
    </Dropdown>
  )
}

export default AppLocalePicker
