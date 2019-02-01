import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from './header'
import GlobalStyles from './GlobalStyles.js'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import { transform } from '@babel/standalone'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { MDXProvider } from '@mdx-js/tag'

function Code({ children, className, ...props }) {
  // See: https://github.com/c8r/x0/blob/5d5956517b67dcc2ea66974ca629085c2d17f9c7/src/scope.js#L47
  const lang = className.replace(/^language-/, '')
  const type = lang.charAt(0)
  switch (type) {
    case '.': {
      return (
        <LiveProvider
          code={children}
          {...props}
          className={className.replace(/\.|!/, '')}
        >
          <LiveEditor />
        </LiveProvider>
      )
    }
    case '!': {
      return (
        <LiveProvider
          noInline
          transformCode={code =>
            `${
              transform(code, {
                presets: [['stage-0', { decoratorsLegacy: true }], 'react'],
              }).code
            }render(<Example />);`
          }
          code={children}
          scope={{
            Component: React.Component,
            Fragment: React.Fragment,
          }}
          {...props}
          className={className.replace(/\.|!/, '')}
        >
          <LivePreview />
          <LiveError />
          <LiveEditor />
        </LiveProvider>
      )
    }
    default: {
      return (
        <pre className={className} {...props}>
          {children}
        </pre>
      )
    }
  }
}

const Wrapper = styled.div({
  margin: '0 auto',
  maxWidth: 960,
  padding: '0px 1.0875rem 1.45rem',
  paddingTop: 0,
})

export default function Layout(
  props
) {
  let mdx;
  if (typeof props.data !== 'undefined') {
    mdx = props.data.mdx
  } else {
    mdx = { ...props.pageContext, code: { body: null } };
  }
  return (
    <>
      <GlobalStyles />
      <Helmet
        title={mdx.frontmatter.title}
        meta={[
          {
            name: 'description',
            content:
              'A blog about technology, web development, and other things.',
          },
          {
            name: 'keywords',
            content: 'blog, technology, web development',
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Header siteTitle={mdx.frontmatter.title} />
      <MDXProvider components={{ code: Code }}>
        <Wrapper>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </Wrapper>
      </MDXProvider>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`
