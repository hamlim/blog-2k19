/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'

export function LightThemeStyles() {
  return (
    <Global
      styles={css`
        code[class*='language-'],
        pre[class*='language-'] {
          margin-bottom: 1rem;
          font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
            'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
            'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
            'Courier New', Courier, monospace;
          font-size: 16px;
          line-height: 1.375;
          direction: ltr;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;
          -webkit-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
          background: #fafbf9;
          color: #4299d7;
        }
        pre[class*='language-']::-moz-selection,
        pre[class*='language-'] ::-moz-selection,
        code[class*='language-']::-moz-selection,
        code[class*='language-'] ::-moz-selection {
          text-shadow: none;
          background: hsla(90, 43%, 90%, 0.6);
        }
        pre[class*='language-']::selection,
        pre[class*='language-'] ::selection,
        code[class*='language-']::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: hsla(90, 43%, 90%, 0.6);
        }
        pre[class*='language-'] {
          padding: 1em;
          margin: 0.5em 0;
          overflow: auto;
        }
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          border-radius: 0.3em;
        }
        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #bdc3b7;
        }
        .token.punctuation {
          color: #bdc3b7;
        }
        .token.namespace {
          opacity: 0.7;
        }
        .token.tag,
        .token.operator,
        .token.number {
          color: #1b6498;
        }
        .token.property,
        .token.function {
          color: #66a329;
        }
        .token.tag-id,
        .token.selector,
        .token.atrule-id {
          color: #4d8217;
        }
        code.language-javascript,
        .token.attr-name {
          color: #66a329;
        }
        code.language-css,
        code.language-scss,
        .token.boolean,
        .token.string,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .language-scss .token.string,
        .style .token.string,
        .token.attr-value,
        .token.keyword,
        .token.control,
        .token.directive,
        .token.unit,
        .token.statement,
        .token.regex,
        .token.atrule {
          color: #277fbe;
        }
        .token.placeholder,
        .token.variable {
          color: #8dcefc;
        }
        .token.deleted {
          text-decoration: line-through;
        }
        .token.inserted {
          border-bottom: 1px dotted #4d8217;
          text-decoration: none;
        }
        .token.italic {
          font-style: italic;
        }
        .token.important,
        .token.bold {
          font-weight: bold;
        }
        .token.important {
          color: #66a329;
        }
        .token.entity {
          cursor: help;
        }
        pre > code.highlight {
          outline: 0.4em solid #66a329;
          outline-offset: 0.4em;
        }
        .line-numbers .line-numbers-rows {
          border-right-color: #f3f4f1;
        }
        .line-numbers-rows > span:before {
          color: #d1d6cd;
        }
        .line-highlight {
          background: rgba(77, 130, 23, 0.2);
          background: -webkit-gradient(
            linear,
            left top,
            right top,
            color-stop(70%, rgba(77, 130, 23, 0.2)),
            to(rgba(77, 130, 23, 0))
          );
          background: linear-gradient(
            to right,
            rgba(77, 130, 23, 0.2) 70%,
            rgba(77, 130, 23, 0)
          );
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
          background-color: #011627;
          color: white;
          font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New,
            monospace;
          font-feature-settings: normal;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          line-height: 1.5;
          margin-bottom: 1rem;
          font-size: 16px;

          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;

          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
        }

        /* Code blocks */
        pre[class*='language-'] {
          overflow: auto;
          padding: 1.3125rem;
        }

        pre[class*='language-']::-moz-selection {
          /* Firefox */
          background: hsl(207, 4%, 16%);
        }

        pre[class*='language-']::selection {
          /* Safari */
          background: hsl(207, 4%, 16%);
        }

        /* Text Selection colour */
        pre[class*='language-']::-moz-selection,
        pre[class*='language-'] ::-moz-selection {
          text-shadow: none;
          background: hsla(0, 0%, 100%, 0.15);
        }

        pre[class*='language-']::selection,
        pre[class*='language-'] ::selection {
          text-shadow: none;
          background: hsla(0, 0%, 100%, 0.15);
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          border-radius: 0.3em;
          background: var(--inlineCode-bg);
          color: var(--inlineCode-text);
          padding: 0.15em 0.2em 0.05em;
          white-space: normal;
        }

        .token.attr-name {
          color: rgb(173, 219, 103);
          font-style: italic;
        }

        .token.comment {
          color: rgb(128, 147, 147);
        }

        .token.string,
        .token.url {
          color: rgb(173, 219, 103);
        }

        .token.variable {
          color: rgb(214, 222, 235);
        }

        .token.number {
          color: rgb(247, 140, 108);
        }

        .token.builtin,
        .token.char,
        .token.constant,
        .token.function {
          color: rgb(130, 170, 255);
        }

        .token.punctuation {
          color: rgb(199, 146, 234);
        }

        .token.selector,
        .token.doctype {
          color: rgb(199, 146, 234);
          font-style: 'italic';
        }

        .token.class-name {
          color: rgb(255, 203, 139);
        }

        .token.tag,
        .token.operator,
        .token.keyword {
          color: #ffa7c4;
        }

        .token.boolean {
          color: rgb(255, 88, 116);
        }

        .token.property {
          color: rgb(128, 203, 196);
        }

        .token.namespace {
          color: rgb(178, 204, 214);
        }
      `}
    />
  )
}
