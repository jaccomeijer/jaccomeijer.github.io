import { Collections } from '../../_data/eleventy-data-types'
import { addTopicAction } from './add-topic-action'
import { addTopicLabels } from './add-topic-labels'

export interface GetOpenerTopics {
  collections: Collections
  tag: string
}

export const getOpenerTopics = ({ collections, tag }: GetOpenerTopics) => {
  const collectionsWithTag = collections.all
    .filter((collection) => Array.isArray(collection.data.tags))
    .filter((collection) => collection.data.tags.includes(tag))
    .filter((collection) => collection.data.topics?.opener)

  const topics = collectionsWithTag.map((collection) => {
    const openerTopic = structuredClone(collection.data.topics.opener)

    addTopicLabels({ pageDate: collection.data.date, topic: openerTopic })
    addTopicAction({ page: collection.page, topic: openerTopic })

    return openerTopic
  })

  topics.sort((a, b) => b.order! - a.order!)
  return topics
}
