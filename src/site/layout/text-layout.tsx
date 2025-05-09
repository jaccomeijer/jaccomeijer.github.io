import { EleventyData } from '../../_data/eleventy-data-types'
import { BaseLayout } from './base-layout'

export interface TextLayout {
  children: React.ReactNode
}

export const TextLayout = (props: TextLayout & EleventyData) => (
  <BaseLayout {...props}>
    {/* @ts-ignore */}
    <div className="s-wrapper" style={{ '--wrapper-width': '45rem' }}>
      <article className="markdown s-flex-column u-gap-0">{props.children}</article>
    </div>
  </BaseLayout>
)
