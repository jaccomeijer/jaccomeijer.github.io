import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { NodeHtmlMarkdown } from 'node-html-markdown'

import { readFile, writeFile } from 'fs/promises'

const content = await readFile('./content.json')

const data = JSON.parse(content)
const entries = data.entries

const removeLang = obj => {
  const result = {}

  Object.keys(obj).forEach(key => {
    result[key] = obj[key]['en-US']
  })
  return result
}

const byCat = {}

entries.forEach(entry => {
  const id = entry.sys?.contentType?.sys?.id || 'no-id'
  const cleanEnt = removeLang(entry.fields)

  if (Array.isArray(byCat[id])) {
    byCat[id].push(cleanEnt)
  } else {
    byCat[id] = []
  }
})

// const cats = ['page', 'topic', 'action', 'navigationSegment', 'globals', 'list']

// const extract = {
//   page: ['title', 'path', 'pageTopic', 'actionHeading', 'text'],
//   topic: ['title', 'variant', 'icon', 'heading', 'abstract'],
//   action: ['title', 'icon', 'heading', 'url'],
//   navigationSegment: ['title', 'actions'],
//   globals: [
//     'title',
//     'menuSegment',
//     'socialSegment',
//     'siteAuthor',
//     'siteDescription',
//     'siteHeading',
//     'siteKeywords',
//     'siteImage',
//   ],
//   list: [
//     'title',
//     'variant',
//     'topicVariant',
//     'wideView',
//     'orderBy',
//     'contentSource',
//   ],
// }

const out = []

await byCat.page.forEach(async pge => {

  const {
    title,
    variant,
    path,
    actionHeading,

    text,
    date,
    author,
  } = pge


  const html = documentToHtmlString(text)
  const mdText = NodeHtmlMarkdown.translate(html)

  const pushMe = {
    title,
    variant,
    path,
    actionHeading,
    date,
    author,
  }

  out.push(pushMe)

  const fileName = `./content/markdown${pushMe.path}.md`

  const fm = `---
date: ${date}
url: ${path}
---
`

  console.log(fileName)

  await writeFile(fileName, fm + mdText)
})

// await writeFile('./content/pages.json', JSON.stringify(out))


// byCat.list.forEach(list => {
//   console.log(list)
// })

// byCat.page.forEach(page => {
//   console.log(page)
// })
