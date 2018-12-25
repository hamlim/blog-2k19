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
      }, "Matt Hamlin's Blog"), _react.default.createElement(_tag.MDXTag, {
        name: "p",
        components: components
      }, "Welcome to my blog, this is an initial v0.0.1 alpha version of the site, completly static and\ngenerated at build time."), _react.default.createElement(_tag.MDXTag, {
        name: "h3",
        components: components
      }, "Posts:"), _react.default.createElement(_fileContext.fileContext.Consumer, null, function (_ref) {
        var files = _ref.files;
        return _react.default.createElement("ul", null, files.map(function (file) {
          return _react.default.createElement("li", {
            key: file
          }, _react.default.createElement("a", {
            href: file.replace("posts/", "").replace(".mdx", ".html")
          }, file.replace("posts/", "").replace(".mdx", "")));
        }));
      }));
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