import { useTranslation } from 'react-i18next'
import AppLocalePicker from '@/components/app/AppLocalePicker'
import DashboardImg from '@/assets/images/dashboard.png'
import { LoginStateProvider } from './providers/LoginStateProvider'
import LoginForm from './LoginForm'
import MobileForm from './MobileForm'
import QrCodeFrom from './QrCodeFrom'
import RegisterForm from './RegisterForm'
import ResetForm from './ResetForm'

function Login() {
  const { t } = useTranslation()
  return (
    <main className="relative flex min-h-screen flex-row">
      <div
        className="hidden grow flex-col items-center justify-center gap-[80px] bg-center bg-no-repeat xl:flex"
        style={{
          background:
            'linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)) center center / cover no-repeat,url(/src/assets/background/overlay_2.jpg)',
        }}
      >
        <h3 className="text-2xl">{t('sys.login.signInPrimaryTitle')}</h3>
        <img className="max-w-[720px" src={DashboardImg} alt="" />
        <div className="flex flex-row gap-[16px] text-2xl">{t('sys.login.signInSecondTitle')}</div>
      </div>

      <div className="mx-auto flex w-full !min-w-[400px] max-w-[480px] flex-col justify-center border px-[16px] lg:px-[64px]">
        <LoginStateProvider>
          <LoginForm />
          <MobileForm />
          <QrCodeFrom />
          <RegisterForm />
          <ResetForm />
        </LoginStateProvider>
      </div>

      <div className="absolute right-0 top-0">
        <AppLocalePicker />
      </div>
    </main>
  )
}
export default Login
