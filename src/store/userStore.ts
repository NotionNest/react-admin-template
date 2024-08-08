import { UserInfo, UserToken } from '#/entity'
import { StorageEnum } from '#/enum'
import { getItem, setItem } from '@/utils/storage'
import { create } from 'zustand'

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
