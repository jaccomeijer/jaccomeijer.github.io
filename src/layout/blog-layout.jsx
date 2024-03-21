import { getOpenerTopics, addTopicLabels } from '../pages/blog/get-opener-topics.js'
import { globals } from '../config/globals.js'
import { blogImages } from '../pages/blog/blog-images.js'
import { Topic, TopicList } from '@jaccomeijer/green-lib'
import { BaseLayout } from './base-layout.jsx'

export const BlogLayout = props => {
  return (
    <BaseLayout {...props}>
      <div class="markdown">
        <Topic
          data-variant="headline"
          globals={globals}
          images={blogImages}
          swap-image={true}
          topic={addTopicLabels({ 
            topic: { ...props.page.frontmatter.topics.opener, icon: 'message-circle' },
            page: props.page,
          })}
        />
      </div>
      <div class="s-wrapper" style="--wrapper-width: 45rem">
        <article class="markdown s-flex-column u-gap-0">
          {props.children}
        </article>
      </div>
      <div class="s-wrapper markdown">
        <hr />
        <TopicList
          class="s-grid u-grid-three-cols u-gap-m"
          data-variant="card"
          globals={globals}
          images={blogImages}
          topics={getOpenerTopics({ pages: props.pages, tag: 'blog' })}
        />
      </div>
    </BaseLayout>
  )
}
