import { EleventyData } from '../../../_data/eleventy-data-types'
import { TopicData } from '../../../green-lib/components/topic/topic'
import { addReadMore } from './add-read-more'
import { BlogLayout } from './blog-layout'

export const allBlogOpeners = (props: BlogLayout & EleventyData) => {
  const collectionWithTag = props.collections.blog.filter((collection) => collection.data.openerTopic)

  const openerTopics: TopicData[] = collectionWithTag.map((collection) => {
    const openerTopic = structuredClone(collection.data.openerTopic!)

    const msec = Date.parse(collection.page.date)
    openerTopic.order = msec
    addReadMore({ topic: openerTopic, url: collection.page.url })

    return openerTopic
  })

  openerTopics.sort((a, b) => b?.order! - a?.order!)
  return openerTopics
}
