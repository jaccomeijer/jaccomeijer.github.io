import { Picture } from '../../../green-lib/components/picture/picture'

export interface Diagram {
  width: string
  src: string
}

export const Diagram = (props: Diagram) => {
  return (
    <div className="diagram s-popout s-block-space u-block-space-l">
      {/* @ts-expect-error */}
      <div className="s-wrapper u-border-radius-rounded" style={{ '--wrapper-width': props.width }}>
        <Picture className="s-block-space u-block-space-s" src={props.src} />
      </div>
    </div>
  )
}
