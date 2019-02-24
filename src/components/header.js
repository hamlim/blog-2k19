/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'gatsby'
import { UncontrolledToggle as Toggle } from './Toggle.js'

export default function Header({ currentTheme, onThemeToggle }) {
  const hasTheme =
    typeof currentTheme !== 'undefined' && typeof onThemeToggle === 'function'
  return (
    <header
      css={css({
        display: hasTheme ? 'flex' : null,
        justifyContent: hasTheme ? 'space-between' : null,
      })}
    >
      <Link to="/">
        <mark className="accent-bg">Matt Hamlin</mark>
      </Link>
      {hasTheme ? (
        <Toggle checked={currentTheme === 'dark'} onChange={onThemeToggle} />
      ) : null}
    </header>
  )
}
