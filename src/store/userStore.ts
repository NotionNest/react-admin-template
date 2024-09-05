import { useNavigate } from 'react-router-dom'
import { create } from 'zustand'
import userService, { SignInReq } from '@/api/services/userServices'
import { getItem, removeItem, setItem } from '@/utils/storage'
import { UserInfo, UserToken } from '#/entity'
import { StorageEnum } from '#/enum'
import { useMutation } from '@tanstack/react-query'

type UserStore = {
  userInfo: Partial<UserInfo>
  userToken: UserToken
  actions: {
    setUserInfo: (userInfo: UserInfo) => void
    setUserToken: (token: UserToken) => void
    clearUserInfoAndToken: () => void
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
    clearUserInfoAndToken: () => {
      removeItem(StorageEnum.User)
      removeItem(StorageEnum.Token)
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
    const res = await signInMutation.mutateAsync(data)

    const { user, accessToken, refreshToken } = res
    setUserToken({ accessToken, refreshToken })
    setUserInfo(user)

    navigatge('/dashboard', { replace: true })

    return res
  }

  return signIn
}
