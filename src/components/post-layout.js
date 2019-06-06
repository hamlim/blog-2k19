/** @jsx jsx */
import { jsx, css } from '@emotion/core'
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from './header'
import GlobalStyles from './GlobalStyles.js'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/react'
import { colorContext, Provider as ThemeProvider } from './color-theme'
import { preToCodeBlock } from 'mdx-utils'
import MDXComponents from './mdx-components.js'
import Code from './Code.js'

const Wrapper = styled.div({
  margin: '0 auto',
  maxWidth: 960,
  padding: '0px 1.0875rem 1.45rem',
  paddingTop: 0,
})

function getComponents(theme) {
  return {
    pre: preProps => {
      const props = preToCodeBlock(preProps)
      // if there's a codeString and some props, we passed the test
      if (props) {
        return <Code {...props} theme={theme} />
      } else {
        // it's possible to have a pre without a code in it
        return <pre {...preProps} />
      }
    },
    ...MDXComponents,
  }
}

const meta = [
  {
    name: 'description',
    content: 'A blog about technology, web development, and other things.',
  },
  {
    name: 'keywords',
    content: 'blog, technology, web development',
  },
]

function Layout(props) {
  let mdx
  if (typeof props.data !== 'undefined') {
    mdx = props.data.mdx
  } else {
    mdx = { ...props.pageContext, code: { body: null } }
  }

  const { theme, toggleTheme } = useContext(colorContext)

  return (
    <main
      css={css({
        color: 'var(--textNormal)',
        background: 'var(--bg)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
        minHeight: '100vh',
      })}
    >
      <GlobalStyles />
      <Wrapper>
        <Header currentTheme={theme} onThemeToggle={toggleTheme} />
        <MDXProvider components={getComponents(theme)}>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </MDXProvider>
      </Wrapper>
    </main>
  )
}

export default function LayoutWrapper(props) {
  let mdx
  if (typeof props.data !== 'undefined') {
    mdx = props.data.mdx
  } else {
    mdx = { ...props.pageContext, code: { body: null } }
  }
  return (
    <ThemeProvider>
      <Helmet title={mdx.frontmatter.title} meta={meta}>
        <html lang="en" />
      </Helmet>
      <Layout {...props} />
    </ThemeProvider>
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
