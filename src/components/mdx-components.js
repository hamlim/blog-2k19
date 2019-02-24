/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from './Link.js'

function InlineCode(props) {
  return (
    <code
      css={css({
        color: `var(--inlineCode-text);`,
        backgroundColor: `var(--inlineCode-bg);`,
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
      })}
      {...props}
    />
  )
}

export default {
  a: Link,
  inlineCode: InlineCode,
}
