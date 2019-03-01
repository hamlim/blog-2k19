/** @jsx jsx */
import { jsx, css } from '@emotion/core'
// eslint-disable-next-line
import React, { useState, useMemo } from 'react'
import Link from './Link.js'
import Flex from './Flex.js'
import AccentButton from './AccentButton.js'

import { parseDate } from './utils/date-and-time.js'

function sortByDate(nodes) {
  const duplicate = [...nodes]
  duplicate.sort((nodeA, nodeB) => {
    const {
      node: {
        frontmatter: { publishDate: publishDateA },
      },
    } = nodeA
    const {
      node: {
        frontmatter: { publishDate: publishDateB },
      },
    } = nodeB
    let hasADate = typeof publishDateA !== 'undefined'
    let hasBDate = typeof publishDateB !== 'undefined'
    if (!hasADate && !hasBDate) {
      return 0
    } else if (!hasADate && hasBDate) {
      return 1
    } else if (hasADate && !hasBDate) {
      return -1
    } else if (hasADate && hasBDate) {
      let aDate = parseDate(publishDateA)
      let bDate = parseDate(publishDateB)
      if (aDate < bDate) {
        return 1
      } else if (bDate < aDate) {
        return -1
      }
      return 0
    } else {
      return 0
    }
  })
  return duplicate
}

export default function BlogList({ nodes }) {
  const sortedNodes = useMemo(() => sortByDate(nodes), [nodes])
  const [renderingChunk, setRenderingChunk] = useState(0)
  const chunked = useMemo(() => {
    return sortedNodes.reduce((chunked, node) => {
      if (
        Array.isArray(chunked[chunked.length - 1]) &&
        chunked[chunked.length - 1].length < 5
      ) {
        const [last, ...first] = chunked.reverse()
        return [...first, [...last, node]]
      } else {
        return [...chunked, [node]]
      }
    }, [])
  }, [sortedNodes])
  const list = chunked[renderingChunk]
  return (
    <>
      <ul>
        {list.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
      {chunked.length > 1 && (
        <Flex
          css={css`
            justify-content: space-around;
          `}
        >
          {renderingChunk === 0 ? (
            <div />
          ) : (
            <AccentButton onClick={() => setRenderingChunk(renderingChunk - 1)}>
              Previous Posts
            </AccentButton>
          )}
          {renderingChunk === chunked.length - 1 ? (
            <div />
          ) : (
            <AccentButton
              onClick={() =>
                setRenderingChunk(
                  renderingChunk === chunked.length ? 0 : renderingChunk + 1
                )
              }
            >
              More Posts
            </AccentButton>
          )}
        </Flex>
      )}
    </>
  )
}
