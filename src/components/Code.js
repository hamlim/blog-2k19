import React from 'react'
import { Provider, Preview, Editor } from '@matthamlin/react-preview-editor'
import ErrorBoundary from './ErrorBoundary.js'
import { DarkThemeStyles } from './CodeStyles.js'
import { transform } from '@babel/standalone'
import { css } from 'theme-ui'

import { Details, Summary, DetailsBody } from './Details.js'

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

export default function Code({
  codeString,
  children,
  language,
  theme,
  ...props
}) {
  let code
  if (children) {
    code = children
  } else if (codeString) {
    code = codeString
  }
  if (props.collapsible && props.title) {
    return (
      <Details>
        <Summary>{props.title.replace(/-/g, ' ')}</Summary>
        <DetailsBody>
          {(() => {
            if (props.live) {
              return (
                <div
                  css={css({
                    pb: 2,
                  })}
                >
                  <DarkThemeStyles />
                  <Provider code={code} transformCode={transformCode}>
                    <ErrorBoundary>
                      <Preview />
                    </ErrorBoundary>
                    <pre className="language-">
                      <Editor getHighlighterProps={getHighlighterProps} />
                    </pre>
                  </Provider>
                </div>
              )
            } else {
              return (
                <div
                  css={css({
                    pb: 2,
                  })}
                >
                  <DarkThemeStyles />
                  <Provider code={code}>
                    <pre className="language-">
                      <Editor getHighlighterProps={getHighlighterProps} />
                    </pre>
                  </Provider>
                </div>
              )
            }
          })()}
        </DetailsBody>
      </Details>
    )
  }
  if (props.live) {
    return (
      <div
        css={css({
          pb: 2,
        })}
      >
        <DarkThemeStyles />
        <Provider code={code} transformCode={transformCode}>
          <ErrorBoundary>
            <Preview />
          </ErrorBoundary>
          <pre className="language-">
            <Editor getHighlighterProps={getHighlighterProps} />
          </pre>
        </Provider>
      </div>
    )
  } else {
    return (
      <div
        css={css({
          pb: 2,
        })}
      >
        <DarkThemeStyles />
        <Provider code={code}>
          <pre className="language-">
            <Editor getHighlighterProps={getHighlighterProps} />
          </pre>
        </Provider>
      </div>
    )
  }
}
