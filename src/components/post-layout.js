import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from './header'
import GlobalStyles from './GlobalStyles.js'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { preToCodeBlock } from 'mdx-utils'
import { Provider, Preview, Editor } from '@matthamlin/react-preview-editor'

import ErrorBoundary from './ErrorBoundary.js'
import { CodeStyles, seaTheme } from './CodeStyles.js'

import { transform } from '@babel/standalone'
import { MDXProvider } from '@mdx-js/tag'

function transformCode(code) {
  return transform(code, {
    presets: [['stage-0', { decoratorsLegacy: true }], 'react'],
  }).code
}

function getHighlighterProps(props) {
  return {
    ...props,
    theme: seaTheme,
  }
}

function Code({ codeString, language, ...props }) {
  if (props.live) {
    return (
      <>
        <CodeStyles />
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
        <CodeStyles />
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

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
}

export default function Layout(props) {
  let mdx
  if (typeof props.data !== 'undefined') {
    mdx = props.data.mdx
  } else {
    mdx = { ...props.pageContext, code: { body: null } }
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
      <MDXProvider components={components}>
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
