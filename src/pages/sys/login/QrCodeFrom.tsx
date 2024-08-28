import { useTranslation } from 'react-i18next'
import { QRCode } from 'antd'
import { LoginStateEnum, useLoginStateContext } from './providers/LoginStateProvider'
import { ReturnButton } from './components/ReturnButton'

function QrCodeFrom() {
  const { t } = useTranslation()

  const { loginState, backToLogin } = useLoginStateContext()

  if (loginState !== LoginStateEnum.QR_CODE) return null
  return (
    <>
      <div className="xl:text-3x mb-4 text-2xl font-bold">{t('sys.login.qrSignInFormTitle')}</div>
      <div className="flex flex-col items-center">
        <QRCode value="https://ant.design/" size={300} />
        <p className="text-center text-sm">{t('sys.login.scanSign')}</p>
      </div>
      <ReturnButton onClick={backToLogin} />
    </>
  )
}

export default QrCodeFrom
