import { BaseLayout } from './base-layout.jsx'

export const TextLayout = props => (
  <BaseLayout {...props}>
    <div className="s-wrapper" style={{ '--wrapper-width': '45rem' }}>
      <article className="markdown s-flex-column u-gap-0">
        {props.children}
      </article>
    </div>
  </BaseLayout>
)
