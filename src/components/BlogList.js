/** @jsx jsx */
// eslint-disable-next-line
import React, { useState, useMemo } from 'react'
import { Link } from 'gatsby'
import Flex from './Flex.js'

import { jsx, css } from '@emotion/core'

export default function BlogList({ nodes }) {
  const [renderingChunk, setRenderingChunk] = useState(0)
  const chunked = useMemo(() => {
    return nodes.reduce((chunked, node) => {
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
  }, [nodes])
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
          <button
            disabled={renderingChunk === 0}
            className={renderingChunk !== 0 && 'accent-bg'}
            onClick={() => setRenderingChunk(renderingChunk - 1)}
          >
            Previous Posts
          </button>
          <button
            disabled={renderingChunk === chunked.length - 1}
            className={renderingChunk !== chunked.length - 1 && 'accent-bg'}
            onClick={() =>
              setRenderingChunk(
                renderingChunk === chunked.length ? 0 : renderingChunk + 1
              )
            }
          >
            More Posts
          </button>
        </Flex>
      )}
    </>
  )
}
