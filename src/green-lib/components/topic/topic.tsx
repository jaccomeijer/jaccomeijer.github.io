import { createElement } from 'react'
import { Icon } from '../icon/icon'
import { Picture } from '../picture/picture'
import { Segment } from '../segment/segment'
import { Action } from '../action/action'
import { ActionData } from '../action/action'
import { getHrefAction } from '../../story-menu/get-href-action'
import Markdown from 'react-markdown'

export type TopicData = {
  abstract?: string
  action?: ActionData
  heading?: string
  icon?: string
  image?: string
  imageDescription?: string
  labels?: string[]
  order?: number
}

// Generic Topic component
export interface TopicProps {
  className?: string
  headingElement?: 'h1' | 'h2' | 'h3' | 'h4'
  pageUrl?: string
  swapImage?: boolean
  topic: TopicData
  variant?: 'block' | 'card' | 'featured' | 'headline' | 'hero' | 'profile' | 'quote' | 'showcase'
}

export const Topic = (props: TopicProps) => {
  if (!props.topic) {
    return <>props.topic is undefined</>
  }
  if (props.variant === 'hero' && !props.topic.image) {
    return <p>Image is required for Hero topics</p>
  }

  let actionClassName = 'fat-link'
  let headingElementType = 'h3'
  let variant = props.variant
  let headingClass
  const internalAction = Object.assign({}, props.topic.action)

  switch (variant) {
    case 'block':
      break
    case 'card':
      // Cards are fully clickable by wrapping an anchor, this means the internal
      // action must be disabled
      delete internalAction.url
      break
    case 'featured':
      headingElementType = 'h2'
      headingClass = 'display'
      break
    case 'headline':
      headingElementType = 'h1'
      headingClass = 'display'
      break
    case 'hero':
      headingElementType = 'h1'
      headingClass = 'display'
      break
    case 'profile':
      headingClass = 'display'
      break
    case 'quote':
      break
    case 'showcase':
      actionClassName = ''
      break

    default:
      variant = 'block'
      break
  }
  const topicClass = `topic-${variant}`

  const topicWithoutWrapper = (
    <div className={['topic', topicClass, props.className].join(' ')}>
      {props.topic.image && (
        <Picture
          alt={props.topic.imageDescription}
          className={['topic-picture', props.swapImage && 'u-order-2'].join(' ')}
          src={props.topic.image}
        />
      )}
      <div className="topic-content">
        {props.topic.icon && <Icon className="topic-icon" icon={props.topic.icon} />}
        {props.topic.labels && (
          <Segment
            actions={props.topic.labels.map((label) => ({ heading: label }))}
            className="topic-labels"
            element="a"
            pageUrl={props.pageUrl}
          />
        )}

        {props.topic.heading &&
          createElement(
            props.headingElement || headingElementType,
            { className: ['topic-heading', headingClass].join(' ') },
            <Markdown
              components={{
                p: 'span',
              }}
            >
              {props.topic.heading}
            </Markdown>,
          )}
        {props.topic.abstract && (
          <Markdown
            components={{
              p({ node, ...props }) {
                return <p className="topic-abstract" {...props} />
              },
              ul({ node, ...props }) {
                return <ul className="topic-abstract" {...props} />
              },
            }}
          >
            {props.topic.abstract}
          </Markdown>
        )}
        {props.topic.action && (
          <Action action={internalAction} className={['topic-action', actionClassName].join(' ')} element="a" />
        )}
      </div>
    </div>
  )

  if (variant === 'card') {
    const href = getHrefAction(props.topic.action)

    return <a href={href}>{topicWithoutWrapper}</a>
  }
  return topicWithoutWrapper
}
