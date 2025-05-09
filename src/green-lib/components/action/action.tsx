import { Icon } from '../icon/icon'
import { getOnClickAction } from '../../story-menu/get-on-click-action'
import { getHrefAction } from '../../story-menu/get-href-action'
import { createElement } from 'react'

export type ActionData = {
  icon?: string
  heading?: string
  url?: string
}

export type ActionProps = {
  action?: ActionData
  active?: boolean
  children?: React.ReactNode
  className?: string
  element: 'a' | 'button'
}

export const Action = (props: ActionProps) => {
  const allowedElements = ['a', 'button']

  if (!allowedElements.includes(props.element)) {
    return `Action.props.element is required. Valid: ${allowedElements.join(', ')}`
  }

  let elementType = 'a'

  const classList = [props.className]

  if (props.action?.icon) {
    classList.push('with-icon')
  }

  const elementProps: Record<string, string | undefined> = {
    'aria-label': props.action?.icon,
  }

  if (props.element === 'a') {
    classList.push('u-border-radius-rounded')
    const href = getHrefAction(props.action)

    // Without action url, render a div element without href
    if (href) {
      elementType = 'a'
      elementProps.href = href
    } else {
      elementType = 'div'
    }
  }
  if (props.active) {
    classList.push('active')
  }

  if (props.element === 'button') {
    elementType = 'button'
    elementProps.onClick = getOnClickAction(props.action)
    elementProps.element = 'button'
    classList.push('button', 'u-border-radius-rounded')
  }

  return createElement(
    elementType,
    { className: classList.join(' '), ...elementProps },
    <>
      {props.action?.icon && <Icon icon={props.action.icon} />}
      {props.children || props.action?.heading}
    </>,
  )
}
