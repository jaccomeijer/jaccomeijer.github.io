import { ActionData } from '../action/action'
import { Segment } from '../segment/segment'

export interface NavigationFooter {
  className?: string
  mainActions: ActionData[]
  pageUrl: string
  socialActions: ActionData[]
}

export const NavigationFooter = (props: NavigationFooter) => (
  <nav className={['navigation-footer', props.className].join(' ')}>
    <Segment actions={props.mainActions} element="a" pageUrl={props.pageUrl} />
    <Segment actions={props.socialActions} element="a" />
  </nav>
)
