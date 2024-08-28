export enum BasicStatus {
  DISABLE,
  ENABLE,
}

// 权限类型
export enum PermissionType {
  CATALOGUE,
  MENU,
  BUTTON,
}

export enum StorageEnum {
  User = 'USER',
  Token = 'TOKEN',
}

export enum ResultEnum {
  SUCCESS = 0,
  ERROR = -1,
  TIMEOUT = 401,
}
