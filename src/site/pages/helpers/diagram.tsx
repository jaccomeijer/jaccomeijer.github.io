import { Picture } from '../../../green-lib/components/picture/picture'

export interface Diagram {
  caption?: string
  src: string
  width: string
}

export const Diagram = (props: Diagram) => {
  return (
    <div className="diagram s-popout s-block-space u-block-space-l">
      {/* @ts-expect-error */}
      <figure className="s-wrapper u-border-radius-rounded" style={{ '--wrapper-width': props.width }}>
        <Picture className="s-block-space u-block-space-s" src={props.src} />
        { props.caption && <figcaption>{props.caption}</figcaption> }
      </figure>
    </div>
  )
}
