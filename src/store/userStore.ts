import { useNavigate } from 'react-router-dom'
import { create } from 'zustand'
import userService, { SignInReq, SignInRes } from '@/api/services/userServices'
import { getItem, setItem } from '@/utils/storage'
import { UserInfo, UserToken } from '#/entity'
import { StorageEnum } from '#/enum'
import { useMutation } from '@tanstack/react-query'

type UserStore = {
  userInfo: Partial<UserInfo>
  userToken: UserToken
  actions: {
    setUserInfo: (userInfo: UserInfo) => void
    setUserToken: (token: UserToken) => void
  }
}

const useUserStore = create<UserStore>((set) => ({
  userInfo: getItem(StorageEnum.User) || {},
  userToken: getItem(StorageEnum.Token) || {},
  actions: {
    setUserInfo: (userInfo) => {
      set({ userInfo })
      setItem(StorageEnum.User, userInfo)
    },
    setUserToken: (userToken) => {
      set({ userToken })
      setItem(StorageEnum.Token, userToken)
    },
  },
}))

export const useUserInfo = () => useUserStore((state) => state.userInfo)
export const useUserToken = () => useUserStore((state) => state.userToken)
export const useUserActions = () => useUserStore((state) => state.actions)

export const useSignIn = () => {
  const { setUserToken, setUserInfo } = useUserActions()
  const signInMutation = useMutation({ mutationFn: userService.signin })
  const navigatge = useNavigate()

  const signIn = async (data: SignInReq) => {
    let res: SignInRes = {
      user: { id: '111', email: 'demo@admin.com', password: '123', username: 'admin' },
      accessToken: 'admin',
      refreshToken: 'admin',
    }
    try {
      res = await signInMutation.mutateAsync(data)
    } catch (error) {
      console.log(error)
    }

    console.log(res)

    const { user, accessToken, refreshToken } = res
    setUserToken({ accessToken, refreshToken })
    setUserInfo(user)

    navigatge('/dashboard', { replace: true })

    return res
  }

  return signIn
}
