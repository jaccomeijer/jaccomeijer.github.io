import esbuildReload from './esbuild-reload.ce.js'
import localCss from '../css/local.bundle.css'
import indexCss from '@jaccomeijer/green-lib/index.bundle.css'

export const Head = props => {
  const frontmatter = props.page.frontmatter
  const assetUrl = props.globals.baseUrl + props.globals.assetUrl
  const stylesheets = [localCss, indexCss]
  const heading = frontmatter.topics?.opener?.heading
  let title = props.globals.metadata.branding.heading

  title = heading ? `${heading} - ${title}` : title

  return (<head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="description" content={frontmatter.description || props.globals.metadata.branding.description} />
    <meta name="generator" content={props.globals.metadata.content.generator} />

    <link rel="icon" type="image/x-icon" href={assetUrl + props.favicon} />
    {stylesheets.map((stylesheet, index) =>
      <link key={index} rel="stylesheet" type="text/css" href={assetUrl + stylesheet} />)}
    {props.enableReload &&
      <script defer src={assetUrl + esbuildReload} />
    }
    <script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token="9e4dcc33-86ff-4757-98bd-3c2123df9a4c" async></script>
  </head>)
}
