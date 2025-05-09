import { Collections } from '../../_data/eleventy-data-types'
import { addTopicAction } from './add-topic-action'
import { addTopicLabels } from './add-topic-labels'

export interface GetOpenerTopicByNavigationId {
  collections: Collections
  navigationId: string
}

export const getOpenerTopicByNavigationId = ({ collections, navigationId }: GetOpenerTopicByNavigationId) => {
  const collection = collections.all.find((p) => p.data.navigation?.id === navigationId)
  const openerTopic = structuredClone(collection?.data?.topics?.opener)

  if (!openerTopic) {
    console.error(`===> ERROR: Could not find opener topic with navigation id: ${navigationId}`)
    return {}
  }

  addTopicLabels({ pageDate: collection?.data.date, topic: openerTopic })
  addTopicAction({ page: collection?.page, topic: openerTopic })

  return openerTopic
}
