import { ActionData } from '../components/action/action'
import { getHrefAction } from './get-href-action'

export const getOnClickAction = (action?: ActionData) => {
  const url = getHrefAction(action)

  if (!url) {
    return 'false'
  }
  return `location.href='${url}';`
}
