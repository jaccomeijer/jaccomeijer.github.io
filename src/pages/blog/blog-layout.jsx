import { Layout } from '../../layout/layout.jsx'
import { getOpenerTopics, addTopicLabels } from './get-opener-topics.js'
import { globals } from '../../config/globals.js'
import { blogImages } from './blog-images.js'
import { Topic, TopicList } from '@jaccomeijer/green-lib'

export const BlogLayout = props => {
  return (
    <Layout {...props}>
      <div class="s-popout">
        <Topic
          data-variant="headline"
          globals={globals}
          images={blogImages}
          swap-image={true}
          topic={addTopicLabels({ topic: props.page.frontmatter.topics.opener, page: props.page })}
        />
      </div>
      <div class="s-wrapper" style="--wrapper-width: 45rem">
        {props.children}
      </div>
      <hr />
      <TopicList
        class="s-grid u-grid-three-cols u-gap-m"
        data-variant="card"
        globals={globals}
        images={blogImages}
        topics={getOpenerTopics({ pages: props.pages, tag: 'blog' })}
      />
    </Layout>
  )
}
