import React from 'react'

const { createElement: h } = React

export default function Header() {
  return h('header', null, h('a', { href: '/' }, h('mark', null, "Matt Hamlin's Blog")))
}
