import { EleventyData } from '../../../_data/eleventy-data-types'
import { TopicData } from '../../../green-lib/components/topic/topic'
import { addDateIconAuthor } from './add-date-icon-author'
import { BlogLayout } from './blog-layout'

export const createBlogOpener = (props: BlogLayout & EleventyData) => {
  let topic: TopicData | undefined
  if (props.page.date && props.openerTopic) {
    topic = structuredClone(props.openerTopic)

    addDateIconAuthor({ topic, date: props.page.date, icon: 'message-circle' })
  }

  return topic || {}
}
