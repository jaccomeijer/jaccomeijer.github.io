import { EleventyData } from '../../_data/eleventy-data-types'
import { TopicList } from '../../green-lib/components/topic-list/topic-list'
import { Topic } from '../../green-lib/components/topic/topic'
import { BaseLayout } from './base-layout'
import { getOpenerTopics } from '../helpers/get-opener-topics'
import { addTopicLabels } from '../helpers/add-topic-labels'

export interface BlogLayout {
  children: React.ReactNode
}

export const BlogLayout = (props: BlogLayout & EleventyData) => {
  //TODO: use addTopicLabels
  const openerTopics = getOpenerTopics({ collections: props.collections, tag: 'blog' })
  const topicWithLabel = addTopicLabels({
    topic: { ...props.topics.opener, icon: 'message-circle' },
    pageDate: props.date,
  })

  return (
    <BaseLayout {...props}>
      <div className="markdown">
        <Topic variant="headline" swapImage={true} topic={topicWithLabel} />
      </div>
      {/* @ts-ignore */}
      <div className="s-wrapper" style={{ '--wrapper-width': '45rem' }}>
        <article className="markdown s-flex-column u-gap-0">{props.children}</article>
      </div>
      <div className="s-wrapper markdown">
        <hr />
        <h2>Other posts</h2>
        <TopicList className="s-grid u-grid-three-cols u-gap-m" variant="card" topics={openerTopics} />
      </div>
    </BaseLayout>
  )
}
