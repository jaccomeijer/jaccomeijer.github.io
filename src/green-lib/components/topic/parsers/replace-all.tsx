/**
 *
 * Combine multiple parsers
 *
 */

import { ReactNode } from 'react'
import { replaceTable, validTable } from './replace-table'
import { hasStar, replaceStars } from './replace-stars'
import { replaceNewlines } from './replace-new-lines'

export const replaceAll = (children: ReactNode): ReactNode => {
  let result = children
  if (validTable(result)) result = replaceTable(children)
  if (hasStar(result)) result = replaceStars(result)
  result = replaceNewlines(result)
  return result
}
