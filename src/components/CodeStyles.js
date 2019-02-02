/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'

export default function CodeStyles({ theme }) {
  return (
    <Global
      styles={css`
        /*
      Name: Duotone Sea
      Author: by Simurai, adapted from DuoTone themes by Simurai for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
      
      Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-sea-dark.css)
      Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
      */
        code[class*='language-'],
        pre[class*='language-'],
        pre.prism-code {
          background: #2b2b2b;
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
