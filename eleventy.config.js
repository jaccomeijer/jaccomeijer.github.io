import { pathToFileURL } from 'node:url'
import { evaluate } from '@mdx-js/mdx'
import { renderToStaticMarkup } from 'react-dom/server'
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img'
import browserslist from 'browserslist'
import { bundle, browserslistToTargets } from 'lightningcss'
import * as runtime from 'react/jsx-runtime'
import { build } from 'esbuild'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

import 'tsx'

export default function (eleventyConfig) {
  // Directories
  eleventyConfig.setOutputDirectory('docs')
  eleventyConfig.setInputDirectory('src')

  // Assets
  eleventyConfig.addPassthroughCopy({ 'node_modules/feather-icons/dist/feather-sprite.svg': 'feather-sprite.svg' })
  eleventyConfig.addPassthroughCopy({ 'src/assets/favicon/favicon.ico': 'favicon.ico' })
  eleventyConfig.addPassthroughCopy({
    'src/assets/fonts/Montserrat-VariableFont_wght.ttf': 'Montserrat-VariableFont_wght.ttf',
  })
  eleventyConfig.addPassthroughCopy({
    'src/assets/fonts/Exo-VariableFont_wght.ttf': 'Exo-VariableFont_wght.ttf',
  })

  // Plugins
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    widths: [400, 800, 1200],
    htmlOptions: {
      imgAttributes: {
        sizes: '100vw',
      },
    },
  })

  // MDX Template format
  eleventyConfig.addTemplateFormats('mdx')
  eleventyConfig.addExtension('mdx', {
    compile: async (inputContent, inputPath) => {
      const { default: mdxContent } = await evaluate(inputContent, {
        ...runtime,
        baseUrl: pathToFileURL(inputPath),
        remarkPlugins: [[remarkGfm]],
        rehypePlugins: [rehypeHighlight],
      })

      return async function (data) {
        let res = await mdxContent(data)
        return renderToStaticMarkup(res)
      }
    },
  })

  // CSS Template format
  const targets = browserslistToTargets(browserslist('> 0.2% and not dead'))
  eleventyConfig.addTemplateFormats('css')
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async (_inputContent, inputPath) => {
      const isLayout = inputPath.endsWith('layout.css')
      const isCustomElementCss = inputPath.endsWith('-ce.css')
      if (!isLayout && !isCustomElementCss) return
      return async () => {
        const { code } = bundle({
          filename: inputPath,
          minify: false,
          targets,
        })
        return code
      }
    },
  })

  // JS Template format
  eleventyConfig.addTemplateFormats('ts')
  eleventyConfig.addExtension('ts', {
    outputFileExtension: 'js',
    compile: async (_inputContent, inputPath) => {
      const isCustomElementJs = inputPath.endsWith('-ce.ts')
      if (!isCustomElementJs) return
      return async () => {
        let output = await build({
          target: 'es2020',
          entryPoints: [inputPath],
          minify: true,
          bundle: true,
          write: false,
        })

        return output.outputFiles[0].text
      }
    },
  })
}
