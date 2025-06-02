import { EleventyData } from '../../../_data/eleventy-data-types'
import { TopicData } from '../../../green-lib/components/topic/topic'
import { addDateIconAuthor } from './add-date-icon-author'
import { addReadMore } from './add-read-more'
import { BlogLayout } from './blog-layout'

interface AllBlogOpeners {
  excludeCurrentPage?: boolean
  props: BlogLayout & EleventyData
}

export const allBlogOpeners = ({ props }: AllBlogOpeners) => {
  const collectionWithTag = props.collections.blog.filter((collection) => collection.data.openerTopic)

  const openerTopics: TopicData[] = collectionWithTag
    .filter((collection) => collection.page.url !== props.page.url)
    .map((collection) => {
      const topic = structuredClone(collection.data.openerTopic!)

      addReadMore({ topic, url: collection.page.url })
      addDateIconAuthor({ topic, date: collection.page.date })

      return topic
    })

  openerTopics.sort((a, b) => b?.order! - a?.order!)
  return openerTopics
}
