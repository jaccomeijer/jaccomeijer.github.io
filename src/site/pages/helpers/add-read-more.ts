import { TopicData } from '../../../green-lib/components/topic/topic'

export interface AddReadMore {
  topic: TopicData
  url?: string
}

export const addReadMore = ({ topic, url }: AddReadMore) => {
  const action = {
    heading: 'read more',
    url,
  }

  topic.action = action
}
