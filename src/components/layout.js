import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from './header'
import GlobalStyles from './GlobalStyles.js'

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
        query RegularSiteTitleQuery {
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
          <Wrapper>{children}</Wrapper>
        </>
      )}
    />
  </>
)

export default Layout
