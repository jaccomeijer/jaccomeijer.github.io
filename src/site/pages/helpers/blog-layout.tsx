import { EleventyData } from '../../../_data/eleventy-data-types'
import { TopicList } from '../../../green-lib/components/topic-list/topic-list'
import { Topic, TopicData } from '../../../green-lib/components/topic/topic'
import { allBlogOpeners } from './all-blog-openers'
import { BaseLayout } from '../../layout/base-layout'
import { createBlogOpener } from './create-blog-opener'

export interface BlogLayout {
  children: React.ReactNode
}

export const BlogLayout = (props: BlogLayout & EleventyData) => {
  const blogTopics = allBlogOpeners({ props, excludeCurrentPage: true })
  const openerTopic = createBlogOpener(props)

  return (
    <BaseLayout {...props}>
      <div className="markdown">
        <Topic variant="headline" swapImage={true} topic={openerTopic} />
      </div>
      {/* @ts-ignore */}
      <div className="s-wrapper" style={{ '--wrapper-width': '45rem' }}>
        <article className="markdown s-flex-column u-gap-0">{props.children}</article>
      </div>
      <div className="s-wrapper markdown">
        <hr />
        <h2>Other posts</h2>
        <TopicList className="s-grid u-grid-three-cols u-gap-m" variant="card" topics={blogTopics} />
      </div>
    </BaseLayout>
  )
}
