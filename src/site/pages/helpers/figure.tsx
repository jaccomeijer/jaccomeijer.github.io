import { Picture } from '../../../green-lib/components/picture/picture'

export interface Figure {
  caption?: string
  figureNumber?: number
  src: string
  width: string
}

export const Figure = (props: Figure) => {
  return (
    <div className="figure s-popout s-block-space u-block-space-l">
      {/* @ts-expect-error */}
      <figure className="s-wrapper u-border-radius-rounded" style={{ '--wrapper-width': props.width }}>
        <Picture className="s-block-space u-block-space-s" src={props.src} />
        { props.figureNumber && <figcaption>Figure {props.figureNumber}. {props.caption}</figcaption> }
      </figure>
    </div>
  )
}
