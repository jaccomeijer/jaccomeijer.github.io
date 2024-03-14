export const addTopicLabels = ({ page, topic }) => {

  // Construct date
  if (page.frontmatter.date) {
    const msec = Date.parse(page.frontmatter.date)
    const date = new Date(msec)

    const dateFormat = new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })

    topic.labels = ['Jacco Meijer', '|', dateFormat.format(date)]
    topic.order = msec
  }
  return topic
}

export const addTopicAction = ({ page, topic }) => {

  // Construct action
  const action = {
    heading: 'Read more',
    url: page.url,
  }

  topic.action = action
}

export const getOpenerTopics = ({ pages, tag }) => {
  const pagesWithTag = pages
    .filter(page => Array.isArray(page.frontmatter.tags))
    .filter(page => page.frontmatter.tags.includes(tag))
    .filter(page => page.frontmatter.topics?.opener)

  const topics = pagesWithTag.map(page => {
    const openerTopic = structuredClone(page.frontmatter.topics.opener)

    addTopicLabels({ page, topic: openerTopic })
    addTopicAction({ page, topic: openerTopic })

    return openerTopic
  })

  topics.sort((a, b) => b.order - a.order)
  return topics
}

export const getOpenerTopicByNavigationId = ({ pages, navigationId }) => {
  const page = pages
    .find(p => p.frontmatter.navigation?.id === navigationId)
  const openerTopic = page?.frontmatter?.topics?.opener

  if (!openerTopic) {
    console.error(`===> ERROR: Could not find opener topic with navigation id: ${navigationId}`)
    return {}
  }

  addTopicLabels({ page, topic: openerTopic })
  addTopicAction({ page, topic: openerTopic })

  return openerTopic
}

export const getOpenerTopicsByNavigationIds = ({ pages, navigationIds }) => {
  const topics = []

  navigationIds.forEach(navigationId => {
    const topic = getOpenerTopicByNavigationId({ pages, navigationId })

    topics.push(topic)
  })

  return topics
}
