import React, { useContext, useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from './header'
import GlobalStyles from './GlobalStyles.js'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { preToCodeBlock } from 'mdx-utils'
import { Provider, Preview, Editor } from '@matthamlin/react-preview-editor'

import ErrorBoundary from './ErrorBoundary.js'
import { DarkThemeStyles, LightThemeStyles } from './CodeStyles.js'

import { transform } from '@babel/standalone'
import { MDXProvider } from '@mdx-js/tag'
import { colorContext, Provider as ThemeProvider } from './color-theme'

function transformCode(code) {
  return transform(code, {
    presets: [['stage-0', { decoratorsLegacy: true }], 'react'],
  }).code
}

function getHighlighterProps(props) {
  return {
    ...props,
    theme: undefined,
  }
}

function Code({ codeString, language, theme, ...props }) {
  if (props.live) {
    return (
      <>
        {theme === 'light' ? <LightThemeStyles /> : <DarkThemeStyles />}
        <Provider code={codeString} transformCode={transformCode}>
          <ErrorBoundary>
            <Preview />
          </ErrorBoundary>
          <pre>
            <Editor getHighlighterProps={getHighlighterProps} />
          </pre>
        </Provider>
      </>
    )
  } else {
    return (
      <>
        {theme === 'light' ? <LightThemeStyles /> : <DarkThemeStyles />}
        <Provider code={codeString}>
          <pre>
            <Editor getHighlighterProps={getHighlighterProps} />
          </pre>
        </Provider>
      </>
    )
  }
}

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

  const [showThemePicker, setShowThemePicker] = useState(false)

  useEffect(() => {
    function listener(event) {
      if (event.key === '?') {
        setShowThemePicker(showTheme => !showTheme)
      }
    }
    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  }, [])

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={mdx.frontmatter.title} />
      <MDXProvider components={getComponents(theme)}>
        {showThemePicker && (
          <>
            <label>
              <input
                type="radio"
                name="theme"
                checked={theme === 'light'}
                onChange={() => toggleTheme()}
              />
              Use light code theme
            </label>
            <label>
              <input
                type="radio"
                name="theme"
                checked={theme === 'dark'}
                onChange={() => toggleTheme()}
              />
              Use dark code theme
            </label>
          </>
        )}
        <Wrapper>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </Wrapper>
      </MDXProvider>
    </>
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
