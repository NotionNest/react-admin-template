import { UserInfo, UserToken } from '#/entity'
import apiClient from '../apiClient'

export interface SignInReq {
  username: string
  password: string
}
export interface SignUpReq extends SignInReq {
  email: string
}
export type SignInRes = UserToken & { user: UserInfo }

enum Api {
  SignIn = '/auth/signin',
  SignUp = '/auth/signup',
  Louout = '/auth/logout',
  Refresh = '/auth/refresh',
  User = '/user/',
}

const signin = (data: SignInReq) => apiClient.post<SignInRes>({ url: Api.SignIn, data })
const signup = (data: SignUpReq) => apiClient.post<SignInRes>({ url: Api.SignUp, data })
const logout = () => apiClient.get({ url: Api.Louout })
const findById = (id: string) => apiClient.get({ url: `${Api.User}${id}` })

export default {
  signin,
  signup,
  findById,
  logout,
}
