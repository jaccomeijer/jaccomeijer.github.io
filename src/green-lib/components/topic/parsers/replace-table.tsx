/**
 *
 * Loop through child nodes and parse text nodes.
 *
 * New lines become table rows.
 *
 * Pipe characters define table cells.
 *
 */

import { Children, ReactNode } from 'react'

export const replaceTable = (children: ReactNode) => {
  let rows: ReactNode[] = []
  Children.forEach(children, (child) => {
    if (child && typeof child === 'string') {
      // Split into rows
      rows = child
        .split('\n')
        .filter((row) => row.length > 0)
        .reduce((result: any[], currentRow, index) => {
          result.push(
            <tr key={index}>
              {currentRow
                .split('|')
                .filter((cell) => cell.length > 0)
                .map((cell, index) => (
                  <td key={index}>{cell}</td>
                ))}
            </tr>,
          )
          return result
        }, [])
    } else if (child) {
      // This is something else, most likely a <br /> element
      rows.push(child)
    }
  })
  return rows
}

export const validTable = (children: ReactNode) => {
  const childArray = Children.toArray(children)
  return (
    childArray &&
    Array.isArray(childArray) &&
    childArray.length > 0 &&
    typeof childArray[0] === 'string' &&
    childArray[0][0] === '|'
  )
}
