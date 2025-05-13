import { EleventyData } from '../../../_data/eleventy-data-types'
import { TopicData } from '../../../green-lib/components/topic/topic'
import { BlogLayout } from './blog-layout'

export const createBlogOpener = (props: BlogLayout & EleventyData) => {
  let openerTopic: TopicData | undefined
  if (props.page.date && props.openerTopic) {
    openerTopic = structuredClone(props.openerTopic)

    const msec = Date.parse(props.page.date)
    const date = new Date(msec)

    const dateFormat = new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })

    openerTopic.labels = ['Jacco Meijer', '|', dateFormat.format(date)]
    openerTopic.icon = 'message-circle'
  }

  return openerTopic || {}
}
