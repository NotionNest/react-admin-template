import { Dropdown, Button } from 'antd'
import type { MenuProps } from 'antd'
import { SvgIcon } from '../icon'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

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
      <Button type="text" className="flex cursor-pointer items-center justify-center">
        <SvgIcon icon={`ic-locale_${locale}`} size="20" />
      </Button>
    </Dropdown>
  )
}

export default AppLocalePicker
