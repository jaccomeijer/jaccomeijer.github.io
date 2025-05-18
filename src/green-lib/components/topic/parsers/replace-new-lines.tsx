/**
 *
 * Loop through child nodes and parse text nodes. Replaces newline \n characters
 * with <br /> elements
 *
 */

import { Children, ReactNode } from 'react'

export const replaceNewlines = (children: ReactNode) => {
  const result: ReactNode[] = []
  Children.forEach(children, (child: ReactNode) => {
    if (child && typeof child === 'string') {
      result.push(
        child.split('<br />').reduce((children: any, textSegment, index) => {
          return [...children, index > 0 && <br key={index} />, textSegment]
        }, []),
      )
    } else if (child) {
      // This is something else, most likely a <br /> element
      result.push(child)
    }
  })

  return result
}
