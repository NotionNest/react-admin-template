import { useMutation } from '@tanstack/react-query'
import { UserInfo, UserToken } from '#/entity'
import { StorageEnum } from '#/enum'
import { getItem, setItem } from '@/utils/storage'
import { create } from 'zustand'

import userService, { SignInReq, SignInRes } from '@/api/services/userServices'
import { useNavigate } from 'react-router-dom'

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
  const { setUserInfo, setUserToken } = useUserActions()
  // @ts-ignore
  const signInMutation = useMutation(userService.signin)

  const navigatge = useNavigate()

  const signIn = async (data: SignInReq) => {
    let res: SignInRes = {
      user: { id: '11', email: 'de@admin.com', password: '123', username: 'admin' },
      accessToken: 'admin',
      refreshToken: 'admin',
    }
    try {
      // @ts-ignore
      res = await signInMutation.mutateAsync(data)
    } catch (error) {
      console.log(error)
    }
    const { user, accessToken, refreshToken } = res
    setUserToken({ accessToken, refreshToken })
    setUserInfo(user)

    navigatge('/dashboard', { replace: true })

    return res
  }

  return signIn
}
