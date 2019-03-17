/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'gatsby'
import { useContext } from 'react'
import { colorContext } from './color-theme'
import { UncontrolledToggle as Toggle } from './Toggle.js'

export default function Header({ currentTheme, onThemeToggle }) {
  const context = useContext(colorContext)

  let actualTheme, actualToggleTheme
  if (typeof context.theme !== 'undefined') {
    actualTheme = context.theme
    actualToggleTheme = context.toggleTheme
  } else {
    actualTheme = currentTheme
    actualToggleTheme = onThemeToggle
  }

  const hasTheme =
    typeof actualTheme !== 'undefined' &&
    typeof actualToggleTheme === 'function'

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
        <Toggle checked={actualTheme === 'dark'} onChange={actualToggleTheme} />
      ) : null}
    </header>
  )
}
