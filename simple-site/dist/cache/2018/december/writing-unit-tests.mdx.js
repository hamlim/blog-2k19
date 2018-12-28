"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _fileContext = require("./src/file-context.js");

var _server = require("react-dom/server");

var _tag = require("@mdx-js/tag");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MDXContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MDXContent, _React$Component);

  function MDXContent(props) {
    var _this;

    _classCallCheck(this, MDXContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDXContent).call(this, props));
    _this.layout = null;
    return _this;
  }

  _createClass(MDXContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          components = _this$props.components,
          props = _objectWithoutProperties(_this$props, ["components"]);

      return _react.default.createElement(_tag.MDXTag, {
        name: "wrapper",
        components: components
      }, _react.default.createElement(_tag.MDXTag, {
        name: "h1",
        components: components
      }, "Writing (good) Software Tests"), _react.default.createElement(_tag.MDXTag, {
        name: "blockquote",
        components: components
      }, _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components,
        parentName: "blockquote"
      }, "Writing unit tests for code is surprisingly a hot button topic within software development. Many\ndevelopers have very strong opinions in how tests should be approached, written, and implemented.")), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "Over the past few months, several of our engineering departments have been pushing for more adoption\nof frontend unit tests for their code. Thanks to this push, our Frontend Platforms team has found\nthat we need to put a lot more effort into the documentation around unit testing. Several engineers,\nfrom both our team and other feature teams, have been writing docs, pairing with others to write\ntests, and writing guides and presentations around unit testing."), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "Through all this work, we have slowly shifted our mindset from approaching testing as something that\nis a consistent, unit-based, solid foundation for an application to something that is a bit more\nfluid, a bit farther away from testing each unit individually, and something that changes as the\napplication changes."), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "The key takeaway I have learned from a coworker is that the ", _react.default.createElement(_tag.MDXTag, {
        name: "strong",
        components: components,
        parentName: "p"
      }, "type"), " and ", _react.default.createElement(_tag.MDXTag, {
        name: "strong",
        components: components,
        parentName: "p"
      }, "value"), " of the tests you\nwrite depends on if you are writing the code for the application at the same time as the test or if\nyou write the test after the feature is code-complete."), _react.default.createElement(_tag.MDXTag, {
        name: "blockquote",
        components: components
      }, _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components,
        parentName: "blockquote"
      }, "Writing tests before a code-complete feature is completely different from writing them when the\nfeature is done")), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "We have found that a lot of the pain points around writing unit tests are a result of attempting to\nwrite unit tests after the feature is code complete and deployed to production."), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "A lot of our other learnings have been so simply summarized by this tweet by Guillermo Rauch:"), _react.default.createElement("blockquote", {
        className: "twitter-tweet tw-align-center",
        "data-lang": "en"
      }, _react.default.createElement("p", {
        lang: "en",
        dir: "ltr"
      }, "Write tests. Not too many. Mostly integration."), "\u2014 Guillermo Rauch (@rauchg)", " ", _react.default.createElement("a", {
        href: "https://twitter.com/rauchg/status/807626710350839808?ref_src=twsrc%5Etfw"
      }, "December 10, 2016")), _react.default.createElement("script", {
        async: true,
        src: "https://platform.twitter.com/widgets.js",
        charSet: "utf-8"
      }), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "This short tweet is packed with so much wisdom, the core takeaways we have had as a team have been:"), _react.default.createElement(_tag.MDXTag, {
        name: "ul",
        components: components
      }, _react.default.createElement(_tag.MDXTag, {
        name: "li",
        components: components,
        parentName: "ul"
      }, "Don't focus on code coverage"), _react.default.createElement(_tag.MDXTag, {
        name: "li",
        components: components,
        parentName: "ul"
      }, "Prefer integration tests over unit tests")), _react.default.createElement(_tag.MDXTag, {
        name: "h2",
        components: components
      }, "Don't Focus on Code Coverage"), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "Code coverage is one of those feel-good stats that we seek as developers, giving us a rush when we\nsee the coverage report come back with a higher percentage than we had previously. Unfortunately it\nhas absolutely no value to the end user of your application."), _react.default.createElement(_tag.MDXTag, {
        name: "blockquote",
        components: components
      }, _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components,
        parentName: "blockquote"
      }, "Users do not care what your code coverage percentage is")), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "You never see consumer products showcase these stats to their users in their footers, nor have I\never seen another developer choose an npm dependency on their code coverage percentage."), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "Your code will change, and your application will change as well, you shouldn't worry about how well\ncovered the code is, and instead focus on how well the user flow is covered. Do you have a test for\nthat checkout flow on site? What about for the user login flow? These are the things worth capturing\ncoverage for, real parts of the application and not the number of lines of code."), _react.default.createElement(_tag.MDXTag, {
        name: "h2",
        components: components
      }, "The Half-Life of Code and Tests"), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "In my experience, preferring to write integration tests rather than unit tests is even more\ncontentious than the point above about code coverage, many developers seem to extrapolate from TDD\nthat tests must be focused to units of code rather than writen for the larger picture of the feature\nor application as a whole. I think the key in this insight is not that through all stages of\ndevelopment you must be writing integration tests, but rather that ", _react.default.createElement(_tag.MDXTag, {
        name: "strong",
        components: components,
        parentName: "p"
      }, "over time"), " the tests that\nshould ", _react.default.createElement(_tag.MDXTag, {
        name: "strong",
        components: components,
        parentName: "p"
      }, "remain in the codebase"), " should be scoped as integration tests."), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "Many of the developers I have talked with consider tests as these solid, never changing pillars of a\ncodebase; however in my experience the type of tests, and the value of these tests, changes\ndramatically depending on what I am doing. If I am working on a refactor of a component for example,\nI may want to setup some visual regression tests, then I can refactor with confidence, and when the\nrefactor work is done I can tear down the tests."), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "Unfortunately many of our modern testing tools don't really communicate this ephemerality of testing\nsoftware, either through their implementation or through their documentation. This leads new\ndevelopers to approach writing tests as something to do once, ship it and then forget it."), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "Often these kinds of tests add the friction to development that so many developers worry about when\nthey try to get into testing their code. A good mental model for tests is that often pure unit tests\nshould have a short half-life within the codebase, meaning they only exist for a short amount of\ntime (frequently only during the very early stages of a new feature or application), and the\nhalf-life of integration tests is much longer and should remain in the codebase for the lifetime of\nthe feature."), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "The tests that I have found that are worth keeping around over time are these integration tests,\nones that aren't at all worried about the implementation of the feature but rather the user flow\nthrough the feature."), _react.default.createElement(_tag.MDXTag, {
        name: "hr",
        components: components
      }), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "If you have additional notes, thoughts, or comments about software testing I would enjoy hearing\nabout it. Feel free to reply to me on twitter\n", _react.default.createElement(_tag.MDXTag, {
        name: "a",
        components: components,
        parentName: "p",
        props: {
          href: "https://mobile.twitter.com/immatthamlin"
        }
      }, "@immatthamlin"), "."));
    }
  }]);

  return MDXContent;
}(_react.default.Component);

var _default = (0, _server.renderToStaticMarkup)(_react.default.createElement(_fileContext.fileContext.Provider, {
  value: {
    files: ["posts/2018/december/starting-fresh.mdx", "posts/2018/december/writing-unit-tests.mdx", "posts/_testing.draft.mdx", "posts/index.mdx"]
  }
}, _react.default.createElement(MDXContent, null)));

exports.default = _default;