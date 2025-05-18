import { Libmetadata } from '../../../_data/eleventy-data-types'
import { Action } from '../action/action'

interface NavigationLegal {
  className?: string
  vendor?: Libmetadata['vendor']
  branding?: Libmetadata['branding']
}

export const NavigationLegal = (props: NavigationLegal) => (
  <nav className={['navigation-legal', props.className].join(' ')}>
    <div>{props.branding?.copyright}</div>
    <Action action={props.vendor} element="a">
      {props.vendor?.heading}
      <sup>{props.vendor?.version}</sup>
    </Action>
  </nav>
)
