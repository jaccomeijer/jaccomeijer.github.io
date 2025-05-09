import { getHrefAction } from './get-href-action'
import { MenuItem } from './menu-element'

interface MenuItemElement {
  menuItem: MenuItem
}

export const MenuItemElement = (props: MenuItemElement) => (
  <li>
    <a href={getHrefAction(props.menuItem)}>{props.menuItem.heading}</a>
  </li>
)
