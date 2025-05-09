import { TopicData } from '../../green-lib/components/topic/topic'

export interface AddTopicLabels {
  pageDate?: string
  topic: TopicData
}

export const addTopicLabels = ({ pageDate, topic }: AddTopicLabels) => {
  // Construct date
  if (pageDate) {
    const msec = Date.parse(pageDate)
    const date = new Date(msec)

    const dateFormat = new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })

    topic.labels = ['Jacco Meijer', '|', dateFormat.format(date)]
    topic.order = msec
  }
  return topic
}
