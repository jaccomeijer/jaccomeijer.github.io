import { ActionData } from '../components/action/action'

export const getHrefAction = (action?: ActionData) => {
  if (!action?.url) {
    return
  }
  if (action.url && action.url.startsWith('http')) {
    return action.url
  }
  return '' + action.url
}
