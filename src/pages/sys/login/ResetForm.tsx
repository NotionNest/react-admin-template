import { useTranslation } from 'react-i18next'
import { LoginStateEnum, useLoginStateContext } from './useLogin'
import { SvgIcon } from '@/components/icon'
import { Button, Form, Input } from 'antd'
import { ReturnButton } from './components/ReturnButton'

function ResetForm() {
  const { t } = useTranslation()
  const { loginState, backToLogin } = useLoginStateContext()

  if (loginState !== LoginStateEnum.RESET_PASSWORD) return null

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  return (
    <>
      <div className="mb-8 text-center">
        <SvgIcon icon="ic-reset-password" size="100" />
      </div>
      <div className="mb-4 text-center text-2xl font-bold xl:text-3xl">
        {t('sys.login.forgetFormTitle')}
      </div>

      <Form name="normal_login" size="large" initialValues={{ remember: true }} onFinish={onFinish}>
        <p className="mb-4 h-14 text-center text-gray">{t('sys.login.forgetFormSecondTitle')}</p>
        <Form.Item
          name="email"
          rules={[{ required: true, message: t('sys.login.emaildPlaceholder') }]}
        >
          <Input placeholder={t('sys.login.email')} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full !bg-black">
            {t('sys.login.sendEmailButton')}
          </Button>
        </Form.Item>

        <ReturnButton onClick={backToLogin} />
      </Form>
    </>
  )
}

export default ResetForm
