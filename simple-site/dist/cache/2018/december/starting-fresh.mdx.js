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
      }, "Starting Fresh"), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "Over the past two years or so I think I have tried to rewrite my personal site about 3 or 4 times.\nEach time with the same goal of making a simple blogging platform that gets out of the way and just\nlets me focus on the writing."), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "Since I find myself with two weeks off of work and its the end of the year / beginning of the next\nyear I figured I would go for another rewrite this time with the long term goal of doing the\nfollowing:"), _react.default.createElement(_tag.MDXTag, {
        name: "ul",
        components: components
      }, _react.default.createElement(_tag.MDXTag, {
        name: "li",
        components: components,
        parentName: "ul"
      }, _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components,
        parentName: "li"
      }, "Get the bootstrapping work out of the way and focus on the writing")), _react.default.createElement(_tag.MDXTag, {
        name: "li",
        components: components,
        parentName: "ul"
      }, _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components,
        parentName: "li"
      }, "Use this as an opportunity to test out personal projects like ", _react.default.createElement(_tag.MDXTag, {
        name: "inlineCode",
        components: components,
        parentName: "p"
      }, "native-bundler"), " and ", _react.default.createElement(_tag.MDXTag, {
        name: "inlineCode",
        components: components,
        parentName: "p"
      }, "reroute"))), _react.default.createElement(_tag.MDXTag, {
        name: "li",
        components: components,
        parentName: "ul"
      }, _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components,
        parentName: "li"
      }, "Be easy to setup and get running with simple additions as I go forward (i.e. scale out from an\ninitial product)"))), _react.default.createElement(_tag.MDXTag, {
        name: "h2",
        components: components
      }, "Where to start?"), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "A few months ago I was planning on kicking off this rewrite within the same repo and site that I\nhave currently, I started by updating to emotion v10, swapping react-router for reach router and\nchanging all my old content from markdown to mdx."), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "This was all too much work to do as part of a rewrite and I begin to question the benefit of doing\nsuch a task."), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "I decided the other day that it would be a lot simpler to just drop all the current infrastructure I\nhad around my previous blog and just start fresh."), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "My hope is that without all the technical debt the previous site had, I could get this one into a\ndecent spot without much work and focus on the writing."));
    }
  }]);

  return MDXContent;
}(_react.default.Component);

var _default = (0, _server.renderToStaticMarkup)(_react.default.createElement(_fileContext.fileContext.Provider, {
  value: {
    files: ["posts/2018/december/starting-fresh.mdx", "posts/index.mdx", "posts/testing.mdx"]
  }
}, _react.default.createElement(MDXContent, null)));

exports.default = _default;