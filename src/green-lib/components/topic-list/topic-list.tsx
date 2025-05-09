import { Topic, TopicData, TopicProps } from '../topic/topic'

export interface TopicList {
  className?: string
  topics: TopicData[]
  variant?: TopicProps['variant']
}

export const TopicList = (props: TopicList) => {
  if (!Array.isArray(props.topics)) {
    return <>props.topics must be an Array</>
  }
  return (
    <div className={props.className}>
      {props.topics.map((topic, index) => (
        <Topic variant={props.variant} topic={topic} key={index} />
      ))}
    </div>
  )
}
