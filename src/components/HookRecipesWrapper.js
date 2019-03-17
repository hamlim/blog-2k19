/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import GlobalStyles from './GlobalStyles.js'

export default function Container(props) {
  return (
    <main
      css={css({
        color: 'var(--textNormal)',
        background: 'var(--bg)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
        minHeight: '100vh',
      })}
    >
      <GlobalStyles />
      <div
        css={css({
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        })}
      >
        {props.children}
      </div>
    </main>
  )
}
