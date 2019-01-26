"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var styles = "/* superstylin from https://github.com/caiogondim/superstylin */\n\n/* Scale major third\n\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\n\n/*\n3.815rem\n3.052rem\n2.441rem\n1.953rem\n1.563rem\n1.25rem\n1rem\n0.8rem\n0.64rem\n0.512rem\n0.41rem\n0.328rem\n0.262rem\n0.209rem\n*/\n\n/* Root\n\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nhtml {\n  font-size: calc(1rem + 2px + ((100vw - 600px) / 250));\n  font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica,\n    ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  text-decoration-skip-ink: 'auto';\n}\n\nbody {\n  padding: 0;\n  margin: calc((100vh / 25) * 1.563) calc((100vw / 25) * 1.563);\n  background-color: white;\n  font-weight: 400;\n  line-height: 1.563;\n  color: #343334;\n}\n\n/* Typography\n\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-bottom: 1rem;\n  margin-top: 1em;\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 3.052rem;\n  letter-spacing: -0.15rem;\n  line-height: 1;\n}\n\nh2 {\n  font-size: 2.441rem;\n  letter-spacing: -0.12rem;\n  line-height: 1.2;\n}\n\nh3 {\n  font-size: 1.953rem;\n  letter-spacing: -0.09rem;\n  line-height: 1.2;\n}\n\nh4 {\n  font-size: 1.563rem;\n  letter-spacing: -0.06rem;\n  line-height: 1.3;\n}\n\nh5 {\n  font-size: 1.25rem;\n  letter-spacing: -0.03rem;\n  line-height: 1.4;\n}\n\nh6 {\n  font-size: 1rem;\n  letter-spacing: 0;\n  line-height: 1.5;\n}\n\np {\n  margin-bottom: 1.563rem;\n}\n\np > *:last-child {\n  margin-bottom: 0;\n}\n\na {\n  color: #343334;\n  text-decoration: underline;\n  text-decoration-color: #c0bfc0;\n  -webkit-text-decoration-color: #c0bfc0;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nsmall {\n  font-size: 0.888rem;\n}\n\nhr {\n  border: 1px solid #343334;\n  margin: 3.052rem 0;\n}\n\n/* Buttons\n\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\n.button,\ninput[type='submit'],\ninput[type='reset'],\ninput[type='button'],\nbutton {\n  padding: 0.5rem 1.25rem;\n  font-size: 1rem;\n  border-radius: 0;\n  border: 2px solid #d8d8d8;\n  background-color: #d8d8d8;\n  color: white;\n  text-decoration: none;\n  margin-bottom: 1rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  display: inline-block;\n  line-height: initial;\n}\n\n.button:hover,\ninput[type='submit']:hover,\ninput[type='reset']:hover,\ninput[type='button']:hover,\nbutton:hover {\n  cursor: pointer;\n  background-color: #c0bfc0;\n  border: 2px solid #c0bfc0;\n  color: white;\n}\n\n.button-primary,\nbutton.button-primary,\ninput[type='submit'].button-primary,\ninput[type='reset'].button-primary,\ninput[type='button'].button-primary {\n  color: white;\n  background-color: #343334;\n  border: 2px solid #343334;\n}\n\n.button-primary:hover,\nbutton.button-primary:hover,\ninput[type='submit'].button-primary:hover,\ninput[type='reset'].button-primary:hover,\ninput[type='button'].button-primary:hover {\n  color: white;\n  background-color: #272727;\n  border: 2px solid #272727;\n}\n\n.button-primary:focus,\nbutton.button-primary:focus,\ninput[type='submit'].button-primary:focus,\ninput[type='reset'].button-primary:focus,\ninput[type='button'].button-primary:focus {\n  border-color: #4178be;\n}\n\n/* Form\n\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\nlabel {\n  font-weight: bold;\n  display: flex;\n}\n\ninput[type='email'],\ninput[type='text'],\ninput[type='number'] {\n  padding: 0.5rem;\n  font-size: 1rem;\n  border: 2px solid #f6f6f6;\n  background-color: #f6f6f6;\n  color: #343334;\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\ninput[type='checkbox'] {\n  display: inline-block;\n  height: 1rem;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n  border: 2px solid #5aaafa;\n  outline: none;\n}\n\ninput:invalid,\nselect:invalid,\ntextarea:invalid {\n  border: 2px solid #ff7d87;\n  box-shadow: none;\n}\n\nselect {\n  -webkit-appearance: none;\n  padding: 0.5rem;\n  font-size: 1rem;\n  border: 2px solid #f6f6f6;\n  color: #343334;\n  border-radius: 0;\n  height: 2.5rem;\n  background-color: #f6f6f6;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 125.304 125.304\"><path d=\"M62.652 103.895L0 21.41h125.304\" fill=\"#343334\"/></svg>');\n  background-repeat: no-repeat;\n  background-size: 1rem;\n  background-position: center right 0.5rem;\n}\n\ntextarea {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  font-size: 1rem;\n  border: 2px solid #f6f6f6;\n  color: #343334;\n  border-radius: 0;\n  resize: vertical;\n  background-color: #f6f6f6;\n  box-sizing: border-box;\n  padding: 0.5rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica,\n    ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;\n}\n\ninput[type='checkbox'] {\n  font-size: 1rem;\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 2px solid #d8d8d8;\n  width: 1rem;\n  background-color: white;\n  align-self: center;\n  margin-right: 0.5rem;\n}\n\ninput[type='checkbox']:focus,\ninput[type='checkbox']:checked:focus {\n  border-color: #5aaafa;\n}\n\ninput[type='checkbox']:hover {\n  cursor: pointer;\n}\n\ninput[type='checkbox']:checked {\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"78.369\" height=\"78.369\" viewBox=\"0 0 78.369 78.369\"><path fill=\"white\" d=\"M78.05 19.015l-48.592 48.59c-.428.43-1.12.43-1.548 0L.32 40.016c-.427-.426-.427-1.12 0-1.547l6.704-6.704c.428-.427 1.12-.427 1.548 0l20.113 20.112 41.113-41.113c.43-.427 1.12-.427 1.548 0l6.703 6.704c.427.427.427 1.12 0 1.548z\"/></svg>');\n  background-size: contain;\n  background-color: #343334;\n  border: 2px solid #343334;\n}\n\ninput[type='radio'] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  border: 2px solid #d8d8d8;\n  height: 1rem;\n  width: 1rem;\n  margin-right: 0.5rem;\n  align-self: center;\n  justify-content: center;\n  position: relative;\n  display: flex;\n}\n\ninput[type='radio']:hover {\n  cursor: pointer;\n}\n\ninput[type='radio']:focus,\ninput[type='radio']:checked:focus {\n  border-color: #5aaafa;\n}\n\ninput[type='radio']:checked {\n  border: 2px solid #343334;\n}\n\ninput[type='radio']:checked::before {\n  content: '';\n  width: calc(100% - 4px);\n  height: calc(100% - 4px);\n  background-color: #343334;\n  align-self: center;\n  border-radius: 50%;\n}\n\n/* Tables\n\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\ntable {\n  width: 100%;\n  border-spacing: 0;\n  margin-bottom: 1.563rem;\n}\n\nth,\ntd {\n  padding: 0.5rem 0.5rem 0.5rem 0;\n  margin: 0;\n}\n\nth {\n  font-weight: bold;\n  text-align: left;\n  border-bottom: 2px solid #d8d8d8;\n}\n\ntd {\n  border-bottom: 2px solid #eaeaea;\n}\n\n/* Code\n\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\ncode {\n  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;\n  font-size: 0.8rem;\n  white-space: nowrap;\n  background: #f6f6f6;\n  padding: 0 0.328rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n\np > code {\n  white-space: normal;\n}\n\npre > code {\n  line-height: 1.563em;\n  display: block;\n  padding: 1rem;\n  white-space: pre;\n  margin-bottom: 1.563rem;\n  overflow: scroll;\n}\n\n/* Forces a new-line at the end of a code block for layout purposes. */\npre > code::after {\n  content: ' ';\n}\n\n/* Blockquote\n\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\nblockquote {\n  border-left: 0.25rem solid #f6f6f6;\n  padding: 0 1rem;\n  margin-bottom: 1.563rem;\n}\n\n/* List\n\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\nul {\n  margin: 0;\n  padding: 0;\n  list-style: disc outside;\n}\n\nol {\n  list-style: decimal outside;\n}\n\nol,\nul {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 1.563rem;\n}\n\nli {\n  margin-left: 1.953rem;\n  margin-bottom: 0.64rem;\n}\n\n/* Keyboard\n\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\nkbd {\n  display: inline-block;\n  padding: 0 0.328rem;\n  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;\n  font-size: 0.64rem;\n  color: #343334;\n  vertical-align: middle;\n  background-color: #f9f9f9;\n  border: solid 1px #d8d8d8;\n  border-bottom: solid 2px #a6a5a6;\n}\n\n/* Abbreviation\n\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\nabbr {\n  text-decoration: none;\n  border-bottom: 1px dashed #949394;\n}\n\nabbr:hover {\n  cursor: help;\n}\n\n/* Spinner\n----------- */\n.ss-spinner {\n  width: 2rem;\n  height: 2rem;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  border-left: 2px solid black;\n  border-right: 2px solid transparent;\n  border-radius: 50%;\n  box-sizing: border-box;\n  animation: ss-spin 1s infinite linear;\n}\n\n@keyframes ss-spin {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n/* Util\n\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\n.u-readable {\n  max-width: 60ch;\n  width: 100%;\n}\n\n.u-full-width {\n  width: 100%;\n}\n\n.u-separator {\n  border-top: 2px solid #343334;\n  padding-top: 0.5rem;\n  margin-bottom: 2rem;\n  width: 100%;\n}\n\n.u-horizontal-center {\n  margin: 0 auto;\n}\n";
exports.styles = styles;