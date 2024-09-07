import { AppRouteObject } from '#/router'

const modules = import.meta.glob('../routes/modules/**/*.tsx', { eager: true })
const menuModules: AppRouteObject[] = []

Object.keys(modules).forEach((key) => {
  const mod = (modules as any)[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  menuModules.push(...modList)
})

export function getMenuRoutes() {
  const menuFilter = (item: AppRouteObject[]) => {
    return item.filter((item) => {
      const show = !item.meta?.hideMenu && item.path
      if (show && item.children) {
        item.children = menuFilter(item.children)
      }
      return show
    })
  }

  return menuFilter(menuModules)
}
