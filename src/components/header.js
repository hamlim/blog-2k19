import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <header>
      <Link to="/">
        <mark>Matt Hamlin</mark>
      </Link>
    </header>
  )
}
