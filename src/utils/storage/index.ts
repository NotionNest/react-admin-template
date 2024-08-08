import { StorageEnum } from '#/enum'

export function getItem<T>(key: StorageEnum): T | null {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
}

export function setItem<T>(key: StorageEnum, value: T) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function removeItem(key: StorageEnum) {
  localStorage.removeItem(key)
}

export function clearItems() {
  localStorage.clear()
}
