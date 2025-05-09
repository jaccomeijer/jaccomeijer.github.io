export interface Icon {
  className?: string
  icon?: string
  strokeWidth?: number
}

export const Icon = (props: Icon) => {
  const strokeWidth = props.strokeWidth || 2
  const iconSpriteUrl = '/feather-sprite.svg'

  return (
    <svg
      className={['icon', props.className].join(' ')}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <use href={`${iconSpriteUrl}#${props.icon}`} />
    </svg>
  )
}
