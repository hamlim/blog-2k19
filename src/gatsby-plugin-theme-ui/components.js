import React from 'react'
import defaultComponents from './components'
import Code from '../components/Code'
import { preToCodeBlock } from 'mdx-utils'

export default {
  ...defaultComponents,
  code: Code,
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
