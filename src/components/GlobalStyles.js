/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        /* superstylin from https://github.com/caiogondim/superstylin */

        /* Scale major third
––––––––––––––––––––––––––––––––– */

        /*
3.815rem
3.052rem
2.441rem
1.953rem
1.563rem
1.25rem
1rem
0.8rem
0.64rem
0.512rem
0.41rem
0.328rem
0.262rem
0.209rem
*/

        /* Root
––––––––––––––––––––––––––––––––– */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html {
          font-size: calc(1rem + 2px + ((100vw - 600px) / 250));
          font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir,
            'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial,
            sans-serif;
          margin: 0;
          padding: 0;
          text-decoration-skip-ink: 'auto';
        }

        body {
          padding: 0;
          margin: calc((100vh / 25) * 1.563) calc((100vw / 25) * 1.563);
          background-color: white;
          font-weight: 400;
          line-height: 1.563;
          color: #343334;
        }

        /* Typography
––––––––––––––––––––––––––––––––– */

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-bottom: 1rem;
          margin-top: 1em;
          font-weight: bold;
        }

        h1 {
          font-size: 3.052rem;
          letter-spacing: -0.15rem;
          line-height: 1;
        }

        h2 {
          font-size: 2.441rem;
          letter-spacing: -0.12rem;
          line-height: 1.2;
        }

        h3 {
          font-size: 1.953rem;
          letter-spacing: -0.09rem;
          line-height: 1.2;
        }

        h4 {
          font-size: 1.563rem;
          letter-spacing: -0.06rem;
          line-height: 1.3;
        }

        h5 {
          font-size: 1.25rem;
          letter-spacing: -0.03rem;
          line-height: 1.4;
        }

        h6 {
          font-size: 1rem;
          letter-spacing: 0;
          line-height: 1.5;
        }

        p {
          margin-bottom: 1.563rem;
        }

        p > *:last-child {
          margin-bottom: 0;
        }

        a {
          color: #343334;
          text-decoration: underline;
          text-decoration-color: #c0bfc0;
          -webkit-text-decoration-color: #c0bfc0;
        }

        a:hover {
          text-decoration: underline;
        }

        small {
          font-size: 0.888rem;
        }

        hr {
          border: 1px solid #343334;
          margin: 3.052rem 0;
        }

        /* Buttons
––––––––––––––––––––––––––––––––– */
        .button,
        input[type='submit'],
        input[type='reset'],
        input[type='button'],
        button {
          padding: 0.5rem 1.25rem;
          font-size: 1rem;
          border-radius: 0;
          border: 2px solid #d8d8d8;
          background-color: #d8d8d8;
          color: white;
          text-decoration: none;
          margin-bottom: 1rem;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          display: inline-block;
          line-height: initial;
        }

        .button:hover,
        input[type='submit']:hover,
        input[type='reset']:hover,
        input[type='button']:hover,
        button:hover {
          cursor: pointer;
          background-color: #c0bfc0;
          border: 2px solid #c0bfc0;
          color: white;
        }

        .button-primary,
        button.button-primary,
        input[type='submit'].button-primary,
        input[type='reset'].button-primary,
        input[type='button'].button-primary {
          color: white;
          background-color: #343334;
          border: 2px solid #343334;
        }

        .button-primary:hover,
        button.button-primary:hover,
        input[type='submit'].button-primary:hover,
        input[type='reset'].button-primary:hover,
        input[type='button'].button-primary:hover {
          color: white;
          background-color: #272727;
          border: 2px solid #272727;
        }

        .button-primary:focus,
        button.button-primary:focus,
        input[type='submit'].button-primary:focus,
        input[type='reset'].button-primary:focus,
        input[type='button'].button-primary:focus {
          border-color: #4178be;
        }

        /* Form
––––––––––––––––––––––––––––––––– */
        label {
          font-weight: bold;
          display: flex;
        }

        input[type='email'],
        input[type='text'],
        input[type='number'] {
          padding: 0.5rem;
          font-size: 1rem;
          border: 2px solid #f6f6f6;
          background-color: #f6f6f6;
          color: #343334;
          border-radius: 0;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }

        input[type='checkbox'] {
          display: inline-block;
          height: 1rem;
        }

        input:focus,
        select:focus,
        textarea:focus {
          border: 2px solid #5aaafa;
          outline: none;
        }

        input:invalid,
        select:invalid,
        textarea:invalid {
          border: 2px solid #ff7d87;
          box-shadow: none;
        }

        select {
          -webkit-appearance: none;
          padding: 0.5rem;
          font-size: 1rem;
          border: 2px solid #f6f6f6;
          color: #343334;
          border-radius: 0;
          height: 2.5rem;
          background-color: #f6f6f6;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.304 125.304"><path d="M62.652 103.895L0 21.41h125.304" fill="#343334"/></svg>');
          background-repeat: no-repeat;
          background-size: 1rem;
          background-position: center right 0.5rem;
        }

        textarea {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          font-size: 1rem;
          border: 2px solid #f6f6f6;
          color: #343334;
          border-radius: 0;
          resize: vertical;
          background-color: #f6f6f6;
          box-sizing: border-box;
          padding: 0.5rem;
          font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir,
            'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial,
            sans-serif;
        }

        input[type='checkbox'] {
          font-size: 1rem;
          border-radius: 0;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border: 2px solid #d8d8d8;
          width: 1rem;
          background-color: white;
          align-self: center;
          margin-right: 0.5rem;
        }

        input[type='checkbox']:focus,
        input[type='checkbox']:checked:focus {
          border-color: #5aaafa;
        }

        input[type='checkbox']:hover {
          cursor: pointer;
        }

        input[type='checkbox']:checked {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="78.369" height="78.369" viewBox="0 0 78.369 78.369"><path fill="white" d="M78.05 19.015l-48.592 48.59c-.428.43-1.12.43-1.548 0L.32 40.016c-.427-.426-.427-1.12 0-1.547l6.704-6.704c.428-.427 1.12-.427 1.548 0l20.113 20.112 41.113-41.113c.43-.427 1.12-.427 1.548 0l6.703 6.704c.427.427.427 1.12 0 1.548z"/></svg>');
          background-size: contain;
          background-color: #343334;
          border: 2px solid #343334;
        }

        input[type='radio'] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border-radius: 50%;
          border: 2px solid #d8d8d8;
          height: 1rem;
          width: 1rem;
          margin-right: 0.5rem;
          align-self: center;
          justify-content: center;
          position: relative;
          display: flex;
        }

        input[type='radio']:hover {
          cursor: pointer;
        }

        input[type='radio']:focus,
        input[type='radio']:checked:focus {
          border-color: #5aaafa;
        }

        input[type='radio']:checked {
          border: 2px solid #343334;
        }

        input[type='radio']:checked::before {
          content: '';
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          background-color: #343334;
          align-self: center;
          border-radius: 50%;
        }

        /* Tables
––––––––––––––––––––––––––––––––– */
        table {
          width: 100%;
          border-spacing: 0;
          margin-bottom: 1.563rem;
        }

        th,
        td {
          padding: 0.5rem 0.5rem 0.5rem 0;
          margin: 0;
        }

        th {
          font-weight: bold;
          text-align: left;
          border-bottom: 2px solid #d8d8d8;
        }

        td {
          border-bottom: 2px solid #eaeaea;
        }

        /* Code
––––––––––––––––––––––––––––––––– */
        code {
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
            Courier, monospace;
          font-size: 0.8rem;
          white-space: nowrap;
          background: #f6f6f6;
          padding: 0 0.328rem;
          display: inline-block;
          vertical-align: middle;
        }

        p > code {
          white-space: normal;
        }

        pre > code,
        .react-live {
          line-height: 1.563em;
          display: block;
          padding: 1rem;
          white-space: pre;
          margin-bottom: 1.563rem;
        }

        .prism-code {
          overflow: scroll;
        }

        /* Blockquote
––––––––––––––––––––––––––––––––– */
        blockquote {
          border-left: 0.25rem solid #f6f6f6;
          padding: 0 1rem;
          margin-bottom: 1.563rem;
        }

        /* List
––––––––––––––––––––––––––––––––– */
        ul {
          margin: 0;
          padding: 0;
          list-style: disc outside;
        }

        ol {
          list-style: decimal outside;
        }

        ol,
        ul {
          padding-left: 0;
          margin-top: 0;
          margin-bottom: 1.563rem;
        }

        li {
          margin-left: 1.953rem;
          margin-bottom: 0.64rem;
        }

        /* Keyboard
––––––––––––––––––––––––––––––––– */
        kbd {
          display: inline-block;
          padding: 0 0.328rem;
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
            Courier, monospace;
          font-size: 0.64rem;
          color: #343334;
          vertical-align: middle;
          background-color: #f9f9f9;
          border: solid 1px #d8d8d8;
          border-bottom: solid 2px #a6a5a6;
        }

        /* Abbreviation
––––––––––––––––––––––––––––––––– */
        abbr {
          text-decoration: none;
          border-bottom: 1px dashed #949394;
        }

        abbr:hover {
          cursor: help;
        }

        /* Spinner
----------- */
        .ss-spinner {
          width: 2rem;
          height: 2rem;
          border-top: 2px solid black;
          border-bottom: 2px solid black;
          border-left: 2px solid black;
          border-right: 2px solid transparent;
          border-radius: 50%;
          box-sizing: border-box;
          animation: ss-spin 1s infinite linear;
        }

        @keyframes ss-spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        /* Util
––––––––––––––––––––––––––––––––– */
        .u-readable {
          max-width: 60ch;
          width: 100%;
        }

        .u-full-width {
          width: 100%;
        }

        .u-separator {
          border-top: 2px solid #343334;
          padding-top: 0.5rem;
          margin-bottom: 2rem;
          width: 100%;
        }

        .u-horizontal-center {
          margin: 0 auto;
        }

        .accent {
          color: #76dc99;
        }
      `}
    />
  )
}
