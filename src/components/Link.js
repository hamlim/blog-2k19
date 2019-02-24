/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link as GatsbyLink } from 'gatsby'

export default function Link(props) {
  const Anchor = typeof props.to === 'string' ? GatsbyLink : 'a'
  return (
    <Anchor
      css={css({
        color: 'var(--textNormal)',
        background: 'var(--bg)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
      })}
      {...props}
    />
  )
}
