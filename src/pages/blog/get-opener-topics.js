export const addTopicLabels = ({ page, topic }) => {

  // Construct date
  const msec = Date.parse(page.frontmatter.date)
  const date = new Date(msec)

  topic.labels = ['Jacco Meijer', '|', date.toLocaleDateString()]
  topic.order = msec
  return topic
}

export const getOpenerTopics = ({ pages, tag }) => {
  const pagesWithTag = pages
    .filter(page => Array.isArray(page.frontmatter.tags))
    .filter(page => page.frontmatter.tags.includes(tag))
    .filter(page => page.frontmatter.topics?.opener)

  const topics = pagesWithTag.map(page => {
    const openerTopic = structuredClone(page.frontmatter.topics.opener)

    addTopicLabels({ page, topic: openerTopic })

    // Construct action
    const action = {
      heading: 'Read more',
      url: page.url,
    }

    openerTopic.action = action

    return openerTopic
  })

  topics.sort((a, b) => b.order - a.order)
  return topics
}