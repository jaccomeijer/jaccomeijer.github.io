import { MenuItemElement } from './menu-item-element'

export interface MenuElement {
  className: string
  menuItems?: MenuItem[]
}

export type MenuItem = {
  children?: MenuItem[]
  heading?: string
  icon?: string
  navigationId?: string
  order?: number
  parentHeading?: string
  url?: string
}

export const MenuElement = (props: MenuElement) => {
  if (!props.menuItems) {
    return <>No submenu items</>
  }
  return (
    <ul role="list" className={props.className}>
      {props.menuItems.map((menuItem, index) => (
        <MenuItemElement menuItem={menuItem} key={index} />
      ))}
    </ul>
  )
}
