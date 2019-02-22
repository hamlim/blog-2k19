/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'

export function LightThemeStyles() {
  return (
    <Global
      styles={css`
        pre[class*='language-'],
        code[class*='language-'] {
          margin-bottom: 1rem;
          color: #5c6e74;
          font-size: 16px;
          text-shadow: none;
          font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          direction: ltr;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          line-height: 1.5;
          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;
          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
        }
        pre[class*='language-']::selection,
        code[class*='language-']::selection,
        pre[class*='language-']::mozselection,
        code[class*='language-']::mozselection {
          text-shadow: none;
          background: #b5d5ff;
        }
        @media print {
          pre[class*='language-'],
          code[class*='language-'] {
            text-shadow: none;
          }
        }
        pre[class*='language-'] {
          padding: 1em;
          margin: 0.5em 0;
          overflow: auto;
          background: #f7f9fa;
        }
        :not(pre) > code[class*='language-'] {
          padding: 0.1em 0.3em;
          border-radius: 0.3em;
          color: #db4c69;
          background: #f7f9fa;
        }
        /*********************************************************
* Tokens
*/
        .namespace {
          opacity: 0.7;
        }
        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #888a85;
        }
        .token.punctuation {
          color: #009695;
        }
        .token.property,
        .token.tag,
        .token.boolean,
        .token.number,
        .token.constant,
        .token.symbol,
        .token.deleted {
          color: #51b1f1;
        }
        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
          color: #800000;
        }
        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string {
          color: #feb958;
          background: #f7f9fa;
        }
        .token.atrule,
        .token.attr-value,
        .token.keyword {
          color: #3465a4;
        }
        .token.function {
          color: #c44d58;
        }
        .token.regex,
        .token.important,
        .token.variable {
          color: #db7100;
        }
        .token.important,
        .token.bold {
          font-weight: bold;
        }
        .token.italic {
          font-style: italic;
        }
        .token.entity {
          cursor: help;
        }
        /*********************************************************
* Line highlighting
*/
        pre[data-line] {
          position: relative;
        }
        pre[class*='language-'] > code[class*='language-'] {
          position: relative;
          z-index: 1;
        }
        .line-highlight {
          position: absolute;
          left: 0;
          right: 0;
          padding: inherit 0;
          margin-top: 1em;
          background: #fffeb7;
          box-shadow: inset 5px 0 0 #f7d87c;
          z-index: 0;
          pointer-events: none;
          line-height: inherit;
          white-space: pre;
        }
      `}
    />
  )
}

export function DarkThemeStyles() {
  return (
    <Global
      styles={css`
        code[class*='language-'],
        pre[class*='language-'] {
          margin-bottom: 1rem;
          font-size: 16px;
          color: #a9b7c6;
          font-family: Consolas, Monaco, 'Andale Mono', monospace;
          direction: ltr;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          line-height: 1.5;

          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;

          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
        }

        pre[class*='language-']::-moz-selection,
        pre[class*='language-'] ::-moz-selection,
        code[class*='language-']::-moz-selection,
        code[class*='language-'] ::-moz-selection {
          color: inherit;
          background: rgba(33, 66, 131, 0.85);
        }

        pre[class*='language-']::selection,
        pre[class*='language-'] ::selection,
        code[class*='language-']::selection,
        code[class*='language-'] ::selection {
          color: inherit;
          background: rgba(33, 66, 131, 0.85);
        }

        /* Code blocks */
        pre[class*='language-'] {
          padding: 1em;
          margin: 0.5em 0;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #2b2b2b;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.cdata {
          color: #808080;
        }

        .token.delimiter,
        .token.boolean,
        .token.keyword,
        .token.selector,
        .token.important,
        .token.atrule {
          color: #cc7832;
        }

        .token.operator,
        .token.punctuation,
        .token.attr-name {
          color: #a9b7c6;
        }

        .token.tag,
        .token.tag .punctuation,
        .token.doctype,
        .token.builtin {
          color: #e8bf6a;
        }

        .token.entity,
        .token.number,
        .token.symbol {
          color: #6897bb;
        }

        .token.property,
        .token.constant,
        .token.variable {
          color: #9876aa;
        }

        .token.string,
        .token.char {
          color: #6a8759;
        }

        .token.attr-value,
        .token.attr-value .punctuation {
          color: #a5c261;
        }
        .token.attr-value .punctuation:first-child {
          color: #a9b7c6;
        }

        .token.url {
          color: #287bde;
          text-decoration: underline;
        }

        .token.function {
          color: #ffc66d;
        }

        .token.regex {
          background: #364135;
        }

        .token.bold {
          font-weight: bold;
        }

        .token.italic {
          font-style: italic;
        }

        .token.inserted {
          background: #294436;
        }

        .token.deleted {
          background: #484a4a;
        }

        /*code.language-css .token.punctuation {
	color: #cc7832;
}*/

        code.language-css .token.property,
        code.language-css .token.property + .token.punctuation {
          color: #a9b7c6;
        }

        code.language-css .token.id {
          color: #ffc66d;
        }

        code.language-css .token.selector > .token.class,
        code.language-css .token.selector > .token.attribute,
        code.language-css .token.selector > .token.pseudo-class,
        code.language-css .token.selector > .token.pseudo-element {
          color: #ffc66d;
        }
      `}
    />
  )
}
