import { BaseLayout } from './base-layout.jsx'

export const WideLayout = props => (
  <BaseLayout {...props}>
    <div className="s-wrapper">
      <article className="markdown s-flex-column u-gap-0">
        {props.children}
      </article>
    </div>
  </BaseLayout>
)
