import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from './header'
import GlobalStyles from './GlobalStyles.js'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { preToCodeBlock } from 'mdx-utils'

import CodeStyles, { dracula } from './CodeStyles.js'

import { transform } from '@babel/standalone'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { MDXProvider } from '@mdx-js/tag'

function Code({ codeString, language, ...props }) {
  if (props['react-live']) {
    let { 'react-live': omit, ...p } = props
    return (
      <>
        <CodeStyles />
        <LiveProvider
          noInline
          transformCode={code =>
            `${
              transform(code, {
                presets: [['stage-0', { decoratorsLegacy: true }], 'react'],
              }).code
            }render(<Example />);`
          }
          code={codeString}
          scope={{
            Component: React.Component,
            Fragment: React.Fragment,
          }}
          mountStylesheet={false}
          {...p}
          className={language}
        >
          <LivePreview />
          <LiveError />
          <LiveEditor />
        </LiveProvider>
      </>
    )
  } else {
    return (
      <>
        <CodeStyles />
        <Highlight
          {...defaultProps}
          theme={dracula}
          code={codeString}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
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
