export interface CarouselLayout {
  children: React.ReactNode
  delay: number
  globalCssUrl: string
}

const CE_URL = '/green-lib/components/carousel-layout'

export const CarouselLayout = (props: CarouselLayout) => {
  return (
    <carousel-layout delay={props.delay}>
      {/* @ts-ignore */}
      <template shadowrootmode="open">
        <div id="root-container">
          <div id="slider">{props.children}</div>
          <div id="dots"></div>
        </div>
        <link rel="stylesheet" type="text/css" href={props.globalCssUrl} />
        <link rel="stylesheet" type="text/css" href={CE_URL + '/carousel-layout-ce.css'} />
      </template>
      <script defer src={CE_URL + '/carousel-layout-ce.js'} />
    </carousel-layout>
  )
}
