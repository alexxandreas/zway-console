/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/client/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./src/client/components/App/styles.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/client/components/App/styles.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".src-client-components-App-__inspector___2n4Xx {\n  width: 100%;\n}\n\n.src-client-components-App-__preloader___3NCzO {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    z-index: 10;\n}", ""]);

// exports
exports.locals = {
	"inspector": "src-client-components-App-__inspector___2n4Xx",
	"preloader": "src-client-components-App-__preloader___3NCzO"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/client/components/Preloader/styles.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/client/components/Preloader/styles.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*import imageM from './preloaderM.svg';*/\n\n.src-client-components-Preloader-__root___1TPxE {\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain; \n    width: 24px;\n    height: 24px;\n    background-image: url(" + escape(__webpack_require__(/*! ./preloaderM.svg */ "./src/client/components/Preloader/preloaderM.svg")) + ");\n}\n", ""]);

// exports
exports.locals = {
	"root": "src-client-components-Preloader-__root___1TPxE"
};

/***/ }),

/***/ "./src/client/components/App/index.js":
/*!********************************************!*\
  !*** ./src/client/components/App/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_object_inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-object-inspector */ "./node_modules/react-object-inspector/lib/ObjectInspector.js");
/* harmony import */ var react_object_inspector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_object_inspector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_split_pane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-split-pane */ "./node_modules/react-split-pane/dist/index.esm.js");
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(auto_bind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-inspector */ "./node_modules/react-inspector/lib/index.js");
/* harmony import */ var react_inspector__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_inspector__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! brace */ "./node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-ace */ "./node_modules/react-ace/lib/index.js");
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var brace_mode_javascript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! brace/mode/javascript */ "./node_modules/brace/mode/javascript.js");
/* harmony import */ var brace_mode_javascript__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(brace_mode_javascript__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var brace_theme_monokai__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! brace/theme/monokai */ "./node_modules/brace/theme/monokai.js");
/* harmony import */ var brace_theme_monokai__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(brace_theme_monokai__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles */ "./src/client/components/App/styles.css");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Preloader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Preloader */ "./src/client/components/Preloader/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





 // import Terminal from 'terminal-in-react';













var inspectorNodeRenderer = function inspectorNodeRenderer(_ref, _ref2) {
  var depth = _ref.depth,
      name = _ref.name,
      data = _ref.data,
      isNonenumerable = _ref.isNonenumerable,
      expanded = _ref.expanded;
  var theme = _ref2.theme;

  var renderItem = function renderItem(data) {
    return depth === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_inspector__WEBPACK_IMPORTED_MODULE_5__["ObjectRootLabel"], {
      name: name,
      data: data
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_inspector__WEBPACK_IMPORTED_MODULE_5__["ObjectLabel"], {
      name: name,
      data: data,
      isNonenumerable: isNonenumerable
    });
  };

  if (typeof data === 'string') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data.split('\n').map(function (item, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i
      }, renderItem(item));
    }));
  } else {
    return renderItem(data);
  }
};

var run = function run(command) {
  return new bluebird__WEBPACK_IMPORTED_MODULE_8___default.a(function (resolve, reject) {
    var encoded = encodeURIComponent(command);
    return axios__WEBPACK_IMPORTED_MODULE_4___default()({
      method: 'GET',
      url: 'api/eval/' + encoded // params: options.params,
      // data: options.data

    }).then(function (response) {
      var data = response && response.data || response; // return data;

      resolve(data); // if (typeof response.data == 'string') {
      //     var data = response.data;
      // }
      // else {
      //     var data = JSON.stringify(response.data, null, '  ');
      // }
      // return data;
    }, function (response) {
      var data = response && response.data || response; // return data;

      resolve(data); // if (typeof data != 'string') {
      //     data = JSON.stringify(data, null, '  ');
      // }
      // return data;
    }); // }
    // try {
    //     var result = eval(command);
    //     resolve(result);
    // } catch (err) {
    //     resolve(err.stack);
    // }
  });
};

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    auto_bind__WEBPACK_IMPORTED_MODULE_3___default()(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      output: undefined,
      input: '',
      editorHeight: null,
      editorWidth: null
    };
    return _this;
  }

  _createClass(App, [{
    key: "onInputChange",
    value: function onInputChange(newValue) {
      this.setState(function (state) {
        return _objectSpread({}, state, {
          input: newValue
        });
      });
    }
  }, {
    key: "runCommand",
    value: function runCommand() {
      var _this2 = this;

      var input = this.state.input;
      this.setState(function (state) {
        return _objectSpread({}, state, {
          showPrelader: true
        });
      }); // this.showPrelader();

      run(input).then(function (result) {
        // this.hidePreloader();
        _this2.setState(function (state) {
          return _objectSpread({}, state, {
            output: result,
            showPrelader: false
          });
        });
      });
    }
  }, {
    key: "onSplitPaneDragFinished",
    value: function onSplitPaneDragFinished() {
      var _this3 = this;

      var a = this.aceWrapper;
      this.setState(function (state) {
        return _objectSpread({}, state, {
          editorHeight: "".concat(_this3.aceWrapper.clientHeight, "px"),
          editorWidth: "".concat(_this3.aceWrapper.clientWidth, "px")
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          input = _this$state.input,
          output = _this$state.output,
          editorHeight = _this$state.editorHeight,
          editorWidth = _this$state.editorWidth,
          showPrelader = _this$state.showPrelader;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_split_pane__WEBPACK_IMPORTED_MODULE_2__["default"], {
        split: "horizontal",
        onDragFinished: this.onSplitPaneDragFinished,
        defaultSize: "70%"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_inspector__WEBPACK_IMPORTED_MODULE_5___default.a, {
        theme: "chromeDark",
        data: output,
        nodeRenderer: inspectorNodeRenderer
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: function ref(element) {
          return _this4.aceWrapper = element;
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_ace__WEBPACK_IMPORTED_MODULE_7___default.a, {
        mode: "javascript",
        theme: "monokai",
        onChange: this.onInputChange,
        name: "UNIQUE_ID_OF_DIV",
        width: editorWidth || '100%',
        height: editorHeight || '100%',
        value: input,
        commands: [{
          // commands is array of key bindings.
          name: 'run',
          //name for the key binding.
          bindKey: {
            win: 'Ctrl-Enter',
            mac: 'Command-Enter'
          },
          //key combination used for the command.
          exec: this.runCommand //function to execute when keys are pressed.

        }]
      }))), showPrelader && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Preloader__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: _styles__WEBPACK_IMPORTED_MODULE_11___default.a.preloader
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/client/components/App/styles.css":
/*!**********************************************!*\
  !*** ./src/client/components/App/styles.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!./styles.css */ "./node_modules/css-loader/index.js?!./src/client/components/App/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/client/components/Preloader/index.js":
/*!**************************************************!*\
  !*** ./src/client/components/Preloader/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/client/components/Preloader/styles.css");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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




var Preloader =
/*#__PURE__*/
function (_Component) {
  _inherits(Preloader, _Component);

  function Preloader() {
    _classCallCheck(this, Preloader);

    return _possibleConstructorReturn(this, _getPrototypeOf(Preloader).apply(this, arguments));
  }

  _createClass(Preloader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          props = _objectWithoutProperties(_this$props, ["className"]);

      var rootClass = "".concat(className || '', " ").concat(_styles__WEBPACK_IMPORTED_MODULE_1___default.a.root);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
        className: rootClass
      }, props));
    }
  }]);

  return Preloader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Preloader);

/***/ }),

/***/ "./src/client/components/Preloader/preloaderM.svg":
/*!********************************************************!*\
  !*** ./src/client/components/Preloader/preloaderM.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E%3Csvg xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.0' width='32px' height='32px' viewBox='0 0 128 128' xml:space='preserve'%3E%3Cg%3E%3ClinearGradient id='linear-gradient'%3E%3Cstop offset='0%25' stop-color='%23ffffff' fill-opacity='0'/%3E%3Cstop offset='100%25' stop-color='%23000000' fill-opacity='1'/%3E%3C/linearGradient%3E%3Cpath d='M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z' fill='url(%23linear-gradient)' fill-rule='evenodd'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 64 64' to='360 64 64' dur='1080ms' repeatCount='indefinite'%3E%3C/animateTransform%3E%3C/g%3E%3C/svg%3E\""

/***/ }),

/***/ "./src/client/components/Preloader/styles.css":
/*!****************************************************!*\
  !*** ./src/client/components/Preloader/styles.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!./styles.css */ "./node_modules/css-loader/index.js?!./src/client/components/Preloader/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/client/components/App/index.js");
// import _ from 'lodash';



Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('content'));

/***/ })

/******/ });
//# sourceMappingURL=app.js.map