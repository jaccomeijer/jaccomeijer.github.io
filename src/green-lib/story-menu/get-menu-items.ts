import { Collection } from '../../_data/eleventy-data-types'
import { MenuItem } from './menu-element'

export const getMenuItems = (collection: Collection[]) => {
  // Get menu items from collections
  const menuItems: MenuItem[] = collection

    // Only use pages with props.navigation.heading
    .filter((col) => col.data.navigation?.heading)

    .map((col) => {
      const navigation = col.data.navigation

      const heading = navigation?.heading
      const icon = navigation?.icon
      const navigationId = navigation?.navigationId
      const order = navigation?.order
      const parentHeading = navigation?.parent
      let url = col.page.url

      // When props.navigation.navigationId is present, use the url of the
      // the collection that has the props.navigation.id set.
      if (navigation?.navigationId) {
        const collectionWithId = collection.find((c) => c.data.navigation?.id === navigationId)

        if (collectionWithId) {
          url = collectionWithId.page.url
        } else {
          console.log(`Warning: Could not find a page with props.navigation.id === '${navigationId}'`)
        }
      }

      return {
        heading,
        icon,
        navigationId,
        order,
        parentHeading,
        url,
      }
    })

  const menuItemsByHeading = menuItems.reduce((prev, current) => {
    if (current.heading) {
      prev[current.heading] = current
    }
    return prev
  }, {} as Record<string, MenuItem>)

  // Move entries with a parent to a children array
  const nestedMenuItems = []

  for (const menuItem of menuItems) {
    if (menuItem.parentHeading) {
      const parentMenuItem = menuItemsByHeading[menuItem.parentHeading]

      if (!parentMenuItem) {
        console.log(`Could not find parent with props.navigation.heading '${menuItem.parentHeading}'`)
        continue
      }
      if (!Array.isArray(parentMenuItem.children)) {
        parentMenuItem.children = []
      }
      parentMenuItem.children.push(menuItem)
    } else {
      nestedMenuItems.push(menuItem)
    }
  }

  const alphaSort = (a: MenuItem, b: MenuItem) => {
    const headingA = a.heading || ''
    const headingB = b.heading || ''

    return headingA.localeCompare(headingB)
  }
  const numberSort = (a: MenuItem, b: MenuItem) => {
    const numberA = a.order || 999
    const numberB = b.order || 999

    return numberA - numberB
  }

  // Sort main items alphabetically and then by number
  nestedMenuItems.sort(alphaSort)
  nestedMenuItems.sort(numberSort)

  // Sort child items alphabetically and then by number
  nestedMenuItems.forEach((item) => {
    if (!item.children) {
      return
    }
    item.children.sort(alphaSort)
  })
  nestedMenuItems.forEach((item) => {
    if (!item.children) {
      return
    }
    item.children.sort(numberSort)
  })

  return nestedMenuItems
}
