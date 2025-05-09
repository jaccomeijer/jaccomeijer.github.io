export interface Picture {
  alt?: string
  className?: string
  src: string
}

export const Picture = (props: Picture) => {
  return (
    <picture className={props.className}>
      <img src={props.src} alt={props.alt || 'Image without description'} />
    </picture>
  )
}
