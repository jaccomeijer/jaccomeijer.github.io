export interface Head {
  cssUrls: string[]
  description: string
  favIconUrl: string
  generator: string
  title: string
}

export const Head = (props: Head) => {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="generator" content={props.generator} />

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
