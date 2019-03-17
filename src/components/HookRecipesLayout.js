import React, { useContext } from 'react'
import Helmet from 'react-helmet'
import { MDXProvider } from '@mdx-js/tag'
import { colorContext, Provider as ThemeProvider } from './color-theme'
import { preToCodeBlock } from 'mdx-utils'
import MDXComponents from './mdx-components.js'
import Code from './Code.js'

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
    content: 'A collection of common custom React hooks.',
  },
  {
    name: 'keywords',
    content: 'blog, technology, web development, react, react hooks',
  },
]

function Layout(props) {
  const { theme } = useContext(colorContext)

  return (
    <MDXProvider components={getComponents(theme)}>
      {props.children}
    </MDXProvider>
  )
}

export default function LayoutWrapper(props) {
  return (
    <ThemeProvider>
      <Helmet title="React Hooks Recipes" meta={meta}>
        <html lang="en" />
      </Helmet>
      <Layout {...props} />
    </ThemeProvider>
  )
}
