import { EleventyData } from '../../_data/eleventy-data-types'
import { BaseLayout } from './base-layout'

export interface WideLayout {
  children: React.ReactNode
}

export const WideLayout = (props: WideLayout & EleventyData) => {
  return (
    <BaseLayout {...props}>
      <div className="s-wrapper">
        <article className="markdown s-flex-column u-gap-0">{props.children}</article>
      </div>
    </BaseLayout>
  )
}
