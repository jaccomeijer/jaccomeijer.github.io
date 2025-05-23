import { EleventyData } from '../../../_data/eleventy-data-types'
import { TopicData } from '../../../green-lib/components/topic/topic'
import { addDateIconAuthor } from './add-date-icon-author'
import { addReadMore } from './add-read-more'
import { BlogLayout } from './blog-layout'

export const blogOpenerByNavId = (props: BlogLayout & EleventyData, navId: string | string[]) => {
  const openerTopics: TopicData[] = []
  const searchIds = []
  if (Array.isArray(navId)) searchIds.push(...navId)
  else searchIds.push(navId)

  searchIds.forEach((navigationId) => {
    const navIdColl = props.collections.blog.find((coll) => coll.data.navigation?.id === navigationId)
    const topic = structuredClone(navIdColl?.data.openerTopic)
    if (!topic) {
      console.error(`===> ERROR: Could not find opener topic with navigation id: ${navigationId}`)
      return {}
    }
    addReadMore({ topic, url: navIdColl?.page.url })
    addDateIconAuthor({ topic, date: props.page.date })
    openerTopics.push(topic!)
  })

  return Array.isArray(navId) ? openerTopics : openerTopics[0]
}
