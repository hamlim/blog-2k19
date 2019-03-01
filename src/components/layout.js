/** @jsx jsx */
import { jsx, css } from '@emotion/core'
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from './header'
import GlobalStyles from './GlobalStyles.js'
import { colorContext, Provider as ThemeProvider } from './color-theme'
import { MDXProvider } from '@mdx-js/tag'
import MDXComponents from './mdx-components.js'

const Wrapper = styled.div({
  margin: '0 auto',
  maxWidth: 960,
  padding: '0px 1.0875rem 1.45rem',
  paddingTop: 0,
})

function LayoutImpl({ children }) {
  const { theme, toggleTheme } = useContext(colorContext)
  return (
    <>
      <GlobalStyles theme={theme} />
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
          <main
            css={css({
              color: 'var(--textNormal)',
              background: 'var(--bg)',
              transition: 'color 0.2s ease-out, background 0.2s ease-out',
              minHeight: '100vh',
            })}
          >
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

            <Wrapper>
              <Header currentTheme={theme} onThemeToggle={toggleTheme} />
              <MDXProvider components={MDXComponents}>{children}</MDXProvider>
            </Wrapper>
          </main>
        )}
      />
    </>
  )
}

export default function Layout(props) {
  return (
    <ThemeProvider>
      <LayoutImpl {...props} />
    </ThemeProvider>
  )
}
