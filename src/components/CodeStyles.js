/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'

export function DarkThemeStyles() {
  return (
    <Global
      styles={css`
        pre {
          font-family: Consolas, Monaco, 'Andale Mono', monospace;
          background: #1d262f;
          color: #57718e;
          margin-bottom: 1.5em;
          padding: 0.5em;
        }
        /*
Name: Duotone Sea
Author: by Simurai, adapted from DuoTone themes by Simurai for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)

Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-sea-dark.css)
Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
*/

        code[class*='language-'],
        pre[class*='language-'] {
          font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
            'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
            'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
            'Courier New', Courier, monospace;
          font-size: 14px;
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
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
          background: #1d262f;
          color: #57718e;
        }

        pre[class*='language-']::-moz-selection,
        pre[class*='language-'] ::-moz-selection,
        code[class*='language-']::-moz-selection,
        code[class*='language-'] ::-moz-selection {
          text-shadow: none;
          background: #004a9e;
        }

        pre[class*='language-']::selection,
        pre[class*='language-'] ::selection,
        code[class*='language-']::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #004a9e;
        }

        /* Code blocks */
        pre[class*='language-'] {
          padding: 1em;
          margin: 0.5em 0;
          overflow: auto;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #4a5f78;
        }

        .token.punctuation {
          color: #4a5f78;
        }

        .token.namespace {
          opacity: 0.7;
        }

        .token.tag,
        .token.operator,
        .token.number {
          color: #0aa370;
        }

        .token.property,
        .token.function {
          color: #57718e;
        }

        .token.tag-id,
        .token.selector,
        .token.atrule-id {
          color: #ebf4ff;
        }

        code.language-javascript,
        .token.attr-name {
          color: #7eb6f6;
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
          color: #47ebb4;
        }

        .token.placeholder,
        .token.variable {
          color: #47ebb4;
        }

        .token.deleted {
          text-decoration: line-through;
        }

        .token.inserted {
          border-bottom: 1px dotted #ebf4ff;
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
          color: #7eb6f6;
        }

        .token.entity {
          cursor: help;
        }

        pre > code.highlight {
          outline: 0.4em solid #34659d;
          outline-offset: 0.4em;
        }

        /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
        .line-numbers .line-numbers-rows {
          border-right-color: #1f2932;
        }

        .line-numbers-rows > span:before {
          color: #2c3847;
        }

        /* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/
        .line-highlight {
          background: rgba(10, 163, 112, 0.2);
          background: -webkit-linear-gradient(
            left,
            rgba(10, 163, 112, 0.2) 70%,
            rgba(10, 163, 112, 0)
          );
          background: linear-gradient(
            to right,
            rgba(10, 163, 112, 0.2) 70%,
            rgba(10, 163, 112, 0)
          );
        }
      `}
    />
  )
}

export function LightThemeStyles() {
  return (
    <Global
      styles={css`
        /*

    Name:       Base16 Atelier Sulphurpool Light
    Author:     Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/sulphurpool)
    
    Prism template by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/prism/)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)
    
    */
        pre {
          font-family: Consolas, Monaco, 'Andale Mono', monospace;
          margin-bottom: 1.5em;
          padding: 0.5em;
        }

        code[class*='language-'],
        pre[class*='language-'],
        pre {
          font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
            'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
            'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
            'Courier New', Courier, monospace;
          font-size: 14px;
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
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
          background: #f5f7ff;
          color: #5e6687;
        }

        pre[class*='language-']::-moz-selection,
        pre[class*='language-'] ::-moz-selection,
        code[class*='language-']::-moz-selection,
        code[class*='language-'] ::-moz-selection {
          text-shadow: none;
          background: #dfe2f1;
        }

        pre[class*='language-']::selection,
        pre[class*='language-'] ::selection,
        code[class*='language-']::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #dfe2f1;
        }

        /* Code blocks */
        pre[class*='language-'] {
          padding: 1em;
          margin: 0.5em 0;
          overflow: auto;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #898ea4;
        }

        .token.punctuation {
          color: #5e6687;
        }

        .token.namespace {
          opacity: 0.7;
        }

        .token.operator,
        .token.boolean,
        .token.number {
          color: #c76b29;
        }

        .token.property {
          color: #c08b30;
        }

        .token.tag {
          color: #3d8fd1;
        }

        .token.string {
          color: #22a2c9;
        }

        .token.selector {
          color: #6679cc;
        }

        .token.attr-name {
          color: #c76b29;
        }

        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string {
          color: #22a2c9;
        }

        .token.attr-value,
        .token.keyword,
        .token.control,
        .token.directive,
        .token.unit {
          color: #ac9739;
        }

        .token.statement,
        .token.regex,
        .token.atrule {
          color: #22a2c9;
        }

        .token.placeholder,
        .token.variable {
          color: #3d8fd1;
        }

        .token.deleted {
          text-decoration: line-through;
        }

        .token.inserted {
          border-bottom: 1px dotted #202746;
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
          color: #c94922;
        }

        .token.entity {
          cursor: help;
        }

        pre > code.highlight {
          outline: 0.4em solid #c94922;
          outline-offset: 0.4em;
        }

        /* overrides color-values for the Line Numbers plugin
     * http://prismjs.com/plugins/line-numbers/
     */
        .line-numbers .line-numbers-rows {
          border-right-color: #dfe2f1;
        }

        .line-numbers-rows > span:before {
          color: #979db4;
        }

        /* overrides color-values for the Line Highlight plugin
     * http://prismjs.com/plugins/line-highlight/
     */
        .line-highlight {
          background: rgba(107, 115, 148, 0.2);
          background: -webkit-linear-gradient(
            left,
            rgba(107, 115, 148, 0.2) 70%,
            rgba(107, 115, 148, 0)
          );
          background: linear-gradient(
            to right,
            rgba(107, 115, 148, 0.2) 70%,
            rgba(107, 115, 148, 0)
          );
        }
      `}
    />
  )
}

export const duotoneDark = {
  plain: {
    backgroundColor: '#2a2734',
    color: '#9a86fd',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
      style: {
        color: '#6c6783',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['tag', 'operator', 'number'],
      style: {
        color: '#e09142',
      },
    },
    {
      types: ['property', 'function'],
      style: {
        color: '#9a86fd',
      },
    },
    {
      types: ['tag-id', 'selector', 'atrule-id'],
      style: {
        color: '#eeebff',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: '#c4b9fe',
      },
    },
    {
      types: [
        'boolean',
        'string',
        'entity',
        'url',
        'attr-value',
        'keyword',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'at-rule',
        'placeholder',
        'variable',
      ],
      style: {
        color: '#ffcc99',
      },
    },
    {
      types: ['deleted'],
      style: {
        textDecorationLine: 'line-through',
      },
    },
    {
      types: ['inserted'],
      style: {
        textDecorationLine: 'underline',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['important'],
      style: {
        color: '#c4b9fe',
      },
    },
  ],
}

export const seaTheme = {
  plain: {
    color: '#88b4e7',
    backgroundColor: '#1d262f',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(68, 76, 85)',
      },
    },
    {
      types: ['string', 'number', 'builtin'],
      style: {
        color: 'rgb(52, 254, 187)',
      },
    },
    {
      types: ['class-name', 'function'],
      style: {
        color: 'rgb(214, 233, 255)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(93, 140, 192)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(136, 180, 231)',
      },
    },
  ],
}

export const dracula = {
  plain: {
    color: '#F8F8F2',
    backgroundColor: '#282A36',
  },
  styles: [
    {
      types: ['prolog', 'constant', 'builtin'],
      style: {
        color: 'rgb(189, 147, 249)',
      },
    },
    {
      types: ['inserted', 'function'],
      style: {
        color: 'rgb(80, 250, 123)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)',
      },
    },
    {
      types: ['changed'],
      style: {
        color: 'rgb(255, 184, 108)',
      },
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        color: 'rgb(248, 248, 242)',
      },
    },
    {
      types: ['string', 'char', 'tag', 'selector'],
      style: {
        color: 'rgb(255, 121, 198)',
      },
    },
    {
      types: ['keyword', 'variable'],
      style: {
        color: 'rgb(189, 147, 249)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(98, 114, 164)',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(241, 250, 140)',
      },
    },
  ],
}
