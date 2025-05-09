import { Collections } from '../../_data/eleventy-data-types'
import { TopicData } from '../../green-lib/components/topic/topic'
import { getOpenerTopicByNavigationId } from './get-opener-topic-by-navigation-id'

export interface GetOpenerTopicsByNavigationIds {
  collections: Collections
  navigationIds: string[]
}

export const getOpenerTopicsByNavigationIds = ({ collections, navigationIds }: GetOpenerTopicsByNavigationIds) => {
  const topics: TopicData[] = []

  navigationIds.forEach((navigationId) => {
    const topic = getOpenerTopicByNavigationId({ collections, navigationId })

    topics.push(topic)
  })

  return topics
}
