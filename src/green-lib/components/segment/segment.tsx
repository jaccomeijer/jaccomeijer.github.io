import { ActionData } from '../action/action'
import { Action } from '../action/action'

export interface Segment {
  actions?: ActionData[]
  className?: string
  pageUrl?: string
  actionClassName?: string
  element: 'a' | 'button'
}

export const Segment = (props: Segment) => {
  if (!props.actions) {
    return
  }
  const actions = props.actions || []

  return (
    <ul className={[props.className].join(' ')} role="list">
      {actions.map((action, index) => (
        <li key={index}>
          <Action
            action={action}
            active={props.pageUrl === action.url}
            className={props.actionClassName}
            element={props.element}
          />
        </li>
      ))}
    </ul>
  )
}
