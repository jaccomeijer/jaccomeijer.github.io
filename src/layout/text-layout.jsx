import { BaseLayout } from './base-layout.jsx'

export const TextLayout = props => {
  return (
    <BaseLayout {...props}>
      <div class="s-wrapper" style="--wrapper-width: 45rem">
        <article class="markdown s-flex-column u-gap-0">
          {props.children}
        </article>
      </div>
    </BaseLayout>
  )
}
