export interface Head {
  cssUrls: string[]
  description: string
  favIconUrl: string
  generator: string
  imageUrl: string
  siteUrl: string
  title: string
}

export const Head = (props: Head) => {
  return (
    <head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={props.description} />
      <meta name="generator" content={props.generator} />

      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.siteUrl} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.imageUrl} />

      <meta property="twitter:card" content={props.imageUrl} />
      <meta property="twitter:url" content={props.siteUrl} />
      <meta property="twitter:title" content="xxx" />
      <meta property="twitter:description" content={props.description} />
      <meta property="twitter:image" content={props.imageUrl} />

      <link rel="icon" type="image/x-icon" href={props.favIconUrl} />
      {props.cssUrls.map((cssUrl, key) => (
        <link key={key} rel="stylesheet" type="text/css" href={cssUrl} />
      ))}
      <script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token="9e4dcc33-86ff-4757-98bd-3c2123df9a4c"
        async
      ></script>
    </head>
  )
}
