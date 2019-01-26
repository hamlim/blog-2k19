import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from './header'
import GlobalStyles from './GlobalStyles.js'

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
          code={children}
          {...props}
          className={className.replace(/\.|!/, '')}
        >
          <LiveEditor />
          <LiveError />
          <LivePreview />
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

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
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
          <Header siteTitle={data.site.siteMetadata.title} />
          <MDXProvider components={{ code: Code }}>
            <Wrapper>{children}</Wrapper>
          </MDXProvider>
        </>
      )}
    />
  </>
)

export default Layout
