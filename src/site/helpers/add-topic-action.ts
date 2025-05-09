import { Page } from '../../_data/eleventy-data-types'
import { TopicData } from '../../green-lib/components/topic/topic'

export interface AddTopicAction {
  page?: Page
  topic: TopicData
}

export const addTopicAction = ({ page, topic }: AddTopicAction) => {
  // Construct action
  const action = {
    heading: 'read more',
    url: page?.url || 'not-found',
  }

  topic.action = action
}
