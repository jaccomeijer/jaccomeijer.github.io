import { BaseLayout } from './base-layout.jsx'

export const WideLayout = props => {
  return (
    <BaseLayout {...props}>
      <div class="s-wrapper">
        <article class="markdown s-flex-column u-gap-0">
          {props.children}
        </article>
      </div>
    </BaseLayout>
  )
}
