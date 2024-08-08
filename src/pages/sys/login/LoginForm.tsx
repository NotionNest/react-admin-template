import { Alert, Button, Checkbox, Col, Divider, Form, Input, Row } from 'antd'
import { useTranslation } from 'react-i18next'
import { LoginStateEnum, useLoginStateContext } from './providers/LoginStateProvider'
import { useState } from 'react'
import { SignInReq } from '@/api/services/userServices'

function LoginForm() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)

  const { loginState, setLoginState } = useLoginStateContext()

  if (loginState !== LoginStateEnum.LOGIN) return null

  const handleFinish = async ({ username, password }: SignInReq) => {
    console.log('Received values of form: ', { username, password })
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <>
      <div className="mb-4 text-2xl font-bold xl:text-3xl">{t('sys.login.signInFormTitle')}</div>

      <Form name="login" size="large" initialValues={{ remember: true }} onFinish={handleFinish}>
        <div className="mb-4 flex flex-col">
          <Alert
            description={`${t('sys.login.userName')}: demo@minimals.cc / ${t(
              'sys.login.password',
            )}: demo1234`}
            type="info"
            showIcon
          />
        </div>

        <Form.Item
          name="username"
          rules={[{ required: true, message: t('sys.login.accountPlaceholder') }]}
        >
          <Input placeholder={t('sys.login.userName')}></Input>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: t('sys.login.passwordPlaceholder') }]}
        >
          <Input.Password type="password" placeholder={t('sys.login.password')} />
        </Form.Item>

        <Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>{t('sys.login.rememberMe')}</Checkbox>
              </Form.Item>
            </Col>
            <Col span={12} className="text-right">
              <button
                className="!text-black !underline"
                onClick={() => setLoginState(LoginStateEnum.RESET_PASSWORD)}
              >
                {t('sys.login.forgetPassword')}
              </button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full !bg-black" loading={loading}>
            {t('sys.login.loginButton')}
          </Button>
        </Form.Item>

        <Row align="middle" gutter={8}>
          <Col span={9} flex="1">
            <Button
              className="w-full !text-sm"
              onClick={() => setLoginState(LoginStateEnum.MOBILE)}
            >
              {t('sys.login.mobileSignInFormTitle')}
            </Button>
          </Col>
          <Col span={9} flex="1">
            <Button
              className="w-full !text-sm"
              onClick={() => setLoginState(LoginStateEnum.QR_CODE)}
            >
              {t('sys.login.qrSignInFormTitle')}
            </Button>
          </Col>
          <Col span={6} flex="1" onClick={() => setLoginState(LoginStateEnum.REGISTER)}>
            <Button className="w-full !text-sm">{t('sys.login.signUpFormTitle')}</Button>
          </Col>
        </Row>

        <Divider className="!text-xs !text-[#00000073]">{t('sys.login.otherSignIn')}</Divider>

        <div className="flex cursor-pointer justify-around text-2xl">1, 2, 3</div>
      </Form>
    </>
  )
}
export default LoginForm
