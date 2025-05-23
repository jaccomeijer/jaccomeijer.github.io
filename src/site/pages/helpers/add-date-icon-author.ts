import { TopicData } from '../../../green-lib/components/topic/topic'

export interface AddDateIconAuthor {
  topic: TopicData
  date: string
  icon?: string
}

export const addDateIconAuthor = ({ topic, date, icon }: AddDateIconAuthor) => {
  const msec = Date.parse(date)
  const dateObj = new Date(msec)

  const dateFormat = new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  topic.labels = ['Jacco Meijer', '|', dateFormat.format(dateObj)]
  topic.order = msec
  topic.icon = icon
}
