import { MenuItem } from './menu-element'

interface GetRootMenuAction {
  menuItems: MenuItem[]
  pageUrl: string
}

export const getRootMenuItem = ({ menuItems, pageUrl }: GetRootMenuAction) => {
  let rootMenuItem: MenuItem | undefined

  menuItems.forEach((menuAction) => {
    if (menuAction.url === pageUrl) {
      // Root menu item is active
      rootMenuItem = menuAction
      return
    }
    if (Array.isArray(menuAction.children)) {
      menuAction.children.forEach((subMenuAction) => {
        if (subMenuAction.url === pageUrl) {
          // Sub menu item is active, return root
          rootMenuItem = menuAction
        }
      })
    }
  })
  return rootMenuItem
}
