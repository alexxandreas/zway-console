(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/auto-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/auto-bind/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;


module.exports = function (self, options) {
  options = Object.assign({}, options);

  var filter = function filter(key) {
    var match = function match(pattern) {
      return typeof pattern === 'string' ? key === pattern : pattern.test(key);
    };

    if (options.include) {
      return options.include.some(match);
    }

    if (options.exclude) {
      return !options.exclude.some(match);
    }

    return true;
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.getOwnPropertyNames(self.constructor.prototype)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      var val = self[key];

      if (key !== 'constructor' && typeof val === 'function' && filter(key)) {
        self[key] = val.bind(self);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return self;
};

var excludedReactMethods = ['componentWillMount', 'UNSAFE_componentWillMount', 'render', 'getSnapshotBeforeUpdate', 'componentDidMount', 'componentWillReceiveProps', 'UNSAFE_componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'UNSAFE_componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount', 'componentDidCatch', 'setState', 'forceUpdate'];

module.exports.react = function (self, options) {
  options = Object.assign({}, options);
  options.exclude = (options.exclude || []).concat(excludedReactMethods);
  return module.exports(self, options);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.5.7'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;
 // 19.1.2.1 Object.assign(target, source, ...)

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }

  return T;
} : $assign;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');

var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', {
  assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js")
});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/helpers/json.js":
/*!*****************************!*\
  !*** ./src/helpers/json.js ***!
  \*****************************/
/*! exports provided: stringify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
var stringify = function stringify(obj, replacer, spaces) {
  return JSON.stringify(obj, serializer(replacer), spaces); //function serializer(replacer, cycleReplacer) {

  function serializer(replacer) {
    var stack = [],
        keys = []; //if (cycleReplacer == null) cycleReplacer = function(key, value) {

    var cycleReplacer = function cycleReplacer(key, value) {
      if (stack[0] === value) return "[Circular ~]";
      return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
    };

    return function (key, value) {
      if (stack.length > 0) {
        var thisPos = stack.indexOf(this);
        ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
        ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
        if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value);
      } else stack.push(value);

      return replacer == null ? value : replacer.call(this, key, value);
    };
  }
};

/***/ }),

/***/ "./src/server/WebServer.js":
/*!*********************************!*\
  !*** ./src/server/WebServer.js ***!
  \*********************************/
/*! exports provided: sendError, sendJSON, sendFile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendError", function() { return sendError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendJSON", function() { return sendJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendFile", function() { return sendFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebServer; });
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(auto_bind__WEBPACK_IMPORTED_MODULE_0__);
var _mimeTypes;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global _ fs ws controller */
// import _ from 'lodash';

var mimeTypes = (_mimeTypes = {
  "ez": "application/andrew-inset",
  "aw": "application/applixware",
  "atom": "application/atom+xml",
  "atomcat": "application/atomcat+xml",
  "atomsvc": "application/atomsvc+xml",
  "ccxml": "application/ccxml+xml",
  "cu": "application/cu-seeme",
  "davmount": "application/davmount+xml",
  "ecma": "application/ecmascript",
  "emma": "application/emma+xml",
  "epub": "application/epub+zip",
  "pfr": "application/font-tdpfr",
  "stk": "application/hyperstudio",
  "jar": "application/java-archive",
  "ser": "application/java-serialized-object",
  "class": "application/java-vm",
  "js": "application/javascript",
  "json": "application/json",
  "lostxml": "application/lost+xml",
  "hqx": "application/mac-binhex40",
  "cpt": "application/mac-compactpro",
  "mrc": "application/marc",
  "mathml": "application/mathml+xml",
  "mbox": "application/mbox",
  "mscml": "application/mediaservercontrol+xml",
  "mp4s": "application/mp4",
  "doc": "application/msword",
  "dot": "application/msword",
  "mxf": "application/mxf",
  "oda": "application/oda",
  "opf": "application/oebps-package+xml",
  "ogx": "application/ogg",
  "xer": "application/patch-ops-error+xml",
  "pdf": "application/pdf",
  "pgp": "application/pgp-encrypted",
  "prf": "application/pics-rules",
  "p10": "application/pkcs10",
  "p7s": "application/pkcs7-signature",
  "cer": "application/pkix-cert",
  "crl": "application/pkix-crl",
  "pkipath": "application/pkix-pkipath",
  "pki": "application/pkixcmp",
  "pls": "application/pls+xml",
  "cww": "application/prs.cww",
  "rdf": "application/rdf+xml",
  "rif": "application/reginfo+xml",
  "rnc": "application/relax-ng-compact-syntax",
  "rl": "application/resource-lists+xml",
  "rld": "application/resource-lists-diff+xml",
  "rs": "application/rls-services+xml",
  "rsd": "application/rsd+xml",
  "rss": "application/rss+xml",
  "rtf": "application/rtf",
  "sbml": "application/sbml+xml",
  "scq": "application/scvp-cv-request",
  "scs": "application/scvp-cv-response",
  "spq": "application/scvp-vp-request",
  "spp": "application/scvp-vp-response",
  "sdp": "application/sdp",
  "setpay": "application/set-payment-initiation",
  "setreg": "application/set-registration-initiation",
  "shf": "application/shf+xml",
  "rq": "application/sparql-query",
  "srx": "application/sparql-results+xml",
  "gram": "application/srgs",
  "grxml": "application/srgs+xml",
  "ssml": "application/ssml+xml",
  "plb": "application/vnd.3gpp.pic-bw-large",
  "psb": "application/vnd.3gpp.pic-bw-small",
  "pvb": "application/vnd.3gpp.pic-bw-var",
  "tcap": "application/vnd.3gpp2.tcap",
  "pwn": "application/vnd.3m.post-it-notes",
  "aso": "application/vnd.accpac.simply.aso",
  "imp": "application/vnd.accpac.simply.imp",
  "acu": "application/vnd.acucobol",
  "air": "application/vnd.adobe.air-application-installer-package+zip",
  "xdp": "application/vnd.adobe.xdp+xml",
  "xfdf": "application/vnd.adobe.xfdf",
  "azf": "application/vnd.airzip.filesecure.azf",
  "azs": "application/vnd.airzip.filesecure.azs",
  "azw": "application/vnd.amazon.ebook",
  "acc": "application/vnd.americandynamics.acc",
  "ami": "application/vnd.amiga.ami",
  "apk": "application/vnd.android.package-archive",
  "cii": "application/vnd.anser-web-certificate-issue-initiation",
  "fti": "application/vnd.anser-web-funds-transfer-initiation",
  "atx": "application/vnd.antix.game-component",
  "mpkg": "application/vnd.apple.installer+xml",
  "swi": "application/vnd.arastra.swi",
  "aep": "application/vnd.audiograph",
  "mpm": "application/vnd.blueice.multipass",
  "bmi": "application/vnd.bmi",
  "rep": "application/vnd.businessobjects",
  "cdxml": "application/vnd.chemdraw+xml",
  "mmd": "application/vnd.chipnuts.karaoke-mmd",
  "cdy": "application/vnd.cinderella",
  "cla": "application/vnd.claymore",
  "csp": "application/vnd.commonspace",
  "cdbcmsg": "application/vnd.contact.cmsg",
  "cmc": "application/vnd.cosmocaller",
  "clkx": "application/vnd.crick.clicker",
  "clkk": "application/vnd.crick.clicker.keyboard",
  "clkp": "application/vnd.crick.clicker.palette",
  "clkt": "application/vnd.crick.clicker.template",
  "clkw": "application/vnd.crick.clicker.wordbank",
  "wbs": "application/vnd.criticaltools.wbs+xml",
  "pml": "application/vnd.ctc-posml",
  "ppd": "application/vnd.cups-ppd",
  "car": "application/vnd.curl.car",
  "pcurl": "application/vnd.curl.pcurl",
  "rdz": "application/vnd.data-vision.rdz",
  "fe_launch": "application/vnd.denovo.fcselayout-link",
  "dna": "application/vnd.dna",
  "mlp": "application/vnd.dolby.mlp",
  "dpg": "application/vnd.dpgraph",
  "dfac": "application/vnd.dreamfactory",
  "geo": "application/vnd.dynageo",
  "mag": "application/vnd.ecowin.chart",
  "nml": "application/vnd.enliven",
  "esf": "application/vnd.epson.esf",
  "msf": "application/vnd.epson.msf",
  "qam": "application/vnd.epson.quickanime",
  "slt": "application/vnd.epson.salt",
  "ssf": "application/vnd.epson.ssf",
  "ez2": "application/vnd.ezpix-album",
  "ez3": "application/vnd.ezpix-package",
  "fdf": "application/vnd.fdf",
  "mseed": "application/vnd.fdsn.mseed",
  "gph": "application/vnd.flographit",
  "ftc": "application/vnd.fluxtime.clip",
  "fnc": "application/vnd.frogans.fnc",
  "ltf": "application/vnd.frogans.ltf",
  "fsc": "application/vnd.fsc.weblaunch",
  "oas": "application/vnd.fujitsu.oasys",
  "oa2": "application/vnd.fujitsu.oasys2",
  "oa3": "application/vnd.fujitsu.oasys3",
  "fg5": "application/vnd.fujitsu.oasysgp",
  "bh2": "application/vnd.fujitsu.oasysprs",
  "ddd": "application/vnd.fujixerox.ddd",
  "xdw": "application/vnd.fujixerox.docuworks",
  "xbd": "application/vnd.fujixerox.docuworks.binder",
  "fzs": "application/vnd.fuzzysheet",
  "txd": "application/vnd.genomatix.tuxedo",
  "ggb": "application/vnd.geogebra.file",
  "ggt": "application/vnd.geogebra.tool",
  "gmx": "application/vnd.gmx",
  "kml": "application/vnd.google-earth.kml+xml",
  "kmz": "application/vnd.google-earth.kmz",
  "gac": "application/vnd.groove-account",
  "ghf": "application/vnd.groove-help",
  "gim": "application/vnd.groove-identity-message",
  "grv": "application/vnd.groove-injector",
  "gtm": "application/vnd.groove-tool-message",
  "tpl": "application/vnd.groove-tool-template",
  "vcg": "application/vnd.groove-vcard",
  "zmm": "application/vnd.handheld-entertainment+xml",
  "hbci": "application/vnd.hbci",
  "les": "application/vnd.hhe.lesson-player",
  "hpgl": "application/vnd.hp-hpgl",
  "hpid": "application/vnd.hp-hpid",
  "hps": "application/vnd.hp-hps",
  "jlt": "application/vnd.hp-jlyt",
  "pcl": "application/vnd.hp-pcl",
  "pclxl": "application/vnd.hp-pclxl",
  "sfd-hdstx": "application/vnd.hydrostatix.sof-data",
  "x3d": "application/vnd.hzn-3d-crossword",
  "mpy": "application/vnd.ibm.minipay",
  "irm": "application/vnd.ibm.rights-management",
  "sc": "application/vnd.ibm.secure-container",
  "igl": "application/vnd.igloader",
  "ivp": "application/vnd.immervision-ivp",
  "ivu": "application/vnd.immervision-ivu",
  "qbo": "application/vnd.intu.qbo",
  "qfx": "application/vnd.intu.qfx",
  "rcprofile": "application/vnd.ipunplugged.rcprofile",
  "irp": "application/vnd.irepository.package+xml",
  "xpr": "application/vnd.is-xpr",
  "jam": "application/vnd.jam",
  "rms": "application/vnd.jcp.javame.midlet-rms",
  "jisp": "application/vnd.jisp",
  "joda": "application/vnd.joost.joda-archive",
  "karbon": "application/vnd.kde.karbon",
  "chrt": "application/vnd.kde.kchart",
  "kfo": "application/vnd.kde.kformula",
  "flw": "application/vnd.kde.kivio",
  "kon": "application/vnd.kde.kontour",
  "ksp": "application/vnd.kde.kspread",
  "htke": "application/vnd.kenameaapp",
  "kia": "application/vnd.kidspiration",
  "sse": "application/vnd.kodak-descriptor",
  "lbd": "application/vnd.llamagraphics.life-balance.desktop",
  "lbe": "application/vnd.llamagraphics.life-balance.exchange+xml",
  "123": "application/vnd.lotus-1-2-3",
  "apr": "application/vnd.lotus-approach",
  "pre": "application/vnd.lotus-freelance",
  "nsf": "application/vnd.lotus-notes",
  "org": "application/vnd.lotus-organizer",
  "scm": "application/vnd.lotus-screencam",
  "lwp": "application/vnd.lotus-wordpro",
  "portpkg": "application/vnd.macports.portpkg",
  "mcd": "application/vnd.mcd",
  "mc1": "application/vnd.medcalcdata",
  "cdkey": "application/vnd.mediastation.cdkey",
  "mwf": "application/vnd.mfer",
  "mfm": "application/vnd.mfmp",
  "flo": "application/vnd.micrografx.flo",
  "igx": "application/vnd.micrografx.igx",
  "mif": "application/vnd.mif",
  "daf": "application/vnd.mobius.daf",
  "dis": "application/vnd.mobius.dis",
  "mbk": "application/vnd.mobius.mbk",
  "mqy": "application/vnd.mobius.mqy",
  "msl": "application/vnd.mobius.msl",
  "plc": "application/vnd.mobius.plc",
  "txf": "application/vnd.mobius.txf",
  "mpn": "application/vnd.mophun.application",
  "mpc": "application/vnd.mophun.certificate",
  "xul": "application/vnd.mozilla.xul+xml",
  "cil": "application/vnd.ms-artgalry",
  "cab": "application/vnd.ms-cab-compressed",
  "xls": "application/vnd.ms-excel",
  "xlm": "application/vnd.ms-excel",
  "xla": "application/vnd.ms-excel",
  "xlc": "application/vnd.ms-excel",
  "xlt": "application/vnd.ms-excel",
  "xlw": "application/vnd.ms-excel",
  "xlam": "application/vnd.ms-excel.addin.macroenabled.12",
  "xlsb": "application/vnd.ms-excel.sheet.binary.macroenabled.12",
  "xlsm": "application/vnd.ms-excel.sheet.macroenabled.12",
  "xltm": "application/vnd.ms-excel.template.macroenabled.12",
  "eot": "application/vnd.ms-fontobject",
  "chm": "application/vnd.ms-htmlhelp",
  "ims": "application/vnd.ms-ims",
  "lrm": "application/vnd.ms-lrm",
  "cat": "application/vnd.ms-pki.seccat",
  "stl": "application/vnd.ms-pki.stl",
  "ppam": "application/vnd.ms-powerpoint.addin.macroenabled.12",
  "pptm": "application/vnd.ms-powerpoint.presentation.macroenabled.12",
  "sldm": "application/vnd.ms-powerpoint.slide.macroenabled.12",
  "ppsm": "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
  "potm": "application/vnd.ms-powerpoint.template.macroenabled.12",
  "docm": "application/vnd.ms-word.document.macroenabled.12",
  "dotm": "application/vnd.ms-word.template.macroenabled.12",
  "wpl": "application/vnd.ms-wpl",
  "xps": "application/vnd.ms-xpsdocument",
  "mseq": "application/vnd.mseq",
  "mus": "application/vnd.musician",
  "msty": "application/vnd.muvee.style",
  "nlu": "application/vnd.neurolanguage.nlu",
  "nnd": "application/vnd.noblenet-directory",
  "nns": "application/vnd.noblenet-sealer",
  "nnw": "application/vnd.noblenet-web",
  "ngdat": "application/vnd.nokia.n-gage.data",
  "n-gage": "application/vnd.nokia.n-gage.symbian.install",
  "rpst": "application/vnd.nokia.radio-preset",
  "rpss": "application/vnd.nokia.radio-presets",
  "edm": "application/vnd.novadigm.edm",
  "edx": "application/vnd.novadigm.edx",
  "ext": "application/vnd.novadigm.ext",
  "odc": "application/vnd.oasis.opendocument.chart",
  "otc": "application/vnd.oasis.opendocument.chart-template",
  "odb": "application/vnd.oasis.opendocument.database",
  "odf": "application/vnd.oasis.opendocument.formula",
  "odft": "application/vnd.oasis.opendocument.formula-template",
  "odg": "application/vnd.oasis.opendocument.graphics",
  "otg": "application/vnd.oasis.opendocument.graphics-template",
  "odi": "application/vnd.oasis.opendocument.image",
  "oti": "application/vnd.oasis.opendocument.image-template",
  "odp": "application/vnd.oasis.opendocument.presentation",
  "ods": "application/vnd.oasis.opendocument.spreadsheet",
  "ots": "application/vnd.oasis.opendocument.spreadsheet-template",
  "odt": "application/vnd.oasis.opendocument.text",
  "otm": "application/vnd.oasis.opendocument.text-master",
  "ott": "application/vnd.oasis.opendocument.text-template",
  "oth": "application/vnd.oasis.opendocument.text-web",
  "xo": "application/vnd.olpc-sugar",
  "dd2": "application/vnd.oma.dd2+xml",
  "oxt": "application/vnd.openofficeorg.extension",
  "pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "sldx": "application/vnd.openxmlformats-officedocument.presentationml.slide",
  "ppsx": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
  "potx": "application/vnd.openxmlformats-officedocument.presentationml.template",
  "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "xltx": "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
  "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "dotx": "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
  "dp": "application/vnd.osgi.dp",
  "str": "application/vnd.pg.format",
  "ei6": "application/vnd.pg.osasli",
  "efif": "application/vnd.picsel",
  "plf": "application/vnd.pocketlearn",
  "pbd": "application/vnd.powerbuilder6",
  "box": "application/vnd.previewsystems.box",
  "mgz": "application/vnd.proteus.magazine",
  "qps": "application/vnd.publishare-delta-tree",
  "ptid": "application/vnd.pvi.ptid1",
  "mxl": "application/vnd.recordare.musicxml",
  "musicxml": "application/vnd.recordare.musicxml+xml",
  "cod": "application/vnd.rim.cod",
  "rm": "application/vnd.rn-realmedia",
  "link66": "application/vnd.route66.link66+xml",
  "see": "application/vnd.seemail",
  "sema": "application/vnd.sema",
  "semd": "application/vnd.semd",
  "semf": "application/vnd.semf",
  "ifm": "application/vnd.shana.informed.formdata",
  "itp": "application/vnd.shana.informed.formtemplate",
  "iif": "application/vnd.shana.informed.interchange",
  "ipk": "application/vnd.shana.informed.package",
  "mmf": "application/vnd.smaf",
  "teacher": "application/vnd.smart.teacher",
  "dxp": "application/vnd.spotfire.dxp",
  "sfs": "application/vnd.spotfire.sfs",
  "sdc": "application/vnd.stardivision.calc",
  "sda": "application/vnd.stardivision.draw",
  "sdd": "application/vnd.stardivision.impress",
  "smf": "application/vnd.stardivision.math",
  "sdw": "application/vnd.stardivision.writer",
  "vor": "application/vnd.stardivision.writer",
  "sgl": "application/vnd.stardivision.writer-global",
  "sxc": "application/vnd.sun.xml.calc",
  "stc": "application/vnd.sun.xml.calc.template",
  "sxd": "application/vnd.sun.xml.draw",
  "std": "application/vnd.sun.xml.draw.template",
  "sxi": "application/vnd.sun.xml.impress",
  "sti": "application/vnd.sun.xml.impress.template",
  "sxm": "application/vnd.sun.xml.math",
  "sxw": "application/vnd.sun.xml.writer",
  "sxg": "application/vnd.sun.xml.writer.global",
  "stw": "application/vnd.sun.xml.writer.template",
  "svd": "application/vnd.svd",
  "xsm": "application/vnd.syncml+xml",
  "bdm": "application/vnd.syncml.dm+wbxml",
  "xdm": "application/vnd.syncml.dm+xml",
  "tao": "application/vnd.tao.intent-module-archive",
  "tmo": "application/vnd.tmobile-livetv",
  "tpt": "application/vnd.trid.tpt",
  "mxs": "application/vnd.triscape.mxs",
  "tra": "application/vnd.trueapp",
  "utz": "application/vnd.uiq.theme",
  "umj": "application/vnd.umajin",
  "unityweb": "application/vnd.unity",
  "uoml": "application/vnd.uoml+xml",
  "vcx": "application/vnd.vcx",
  "vis": "application/vnd.visionary",
  "vsf": "application/vnd.vsf",
  "wbxml": "application/vnd.wap.wbxml",
  "wmlc": "application/vnd.wap.wmlc",
  "wmlsc": "application/vnd.wap.wmlscriptc",
  "wtb": "application/vnd.webturbo",
  "wpd": "application/vnd.wordperfect",
  "wqd": "application/vnd.wqd",
  "stf": "application/vnd.wt.stf",
  "xar": "application/vnd.xara",
  "xfdl": "application/vnd.xfdl",
  "hvd": "application/vnd.yamaha.hv-dic",
  "hvs": "application/vnd.yamaha.hv-script",
  "hvp": "application/vnd.yamaha.hv-voice",
  "osf": "application/vnd.yamaha.openscoreformat",
  "osfpvg": "application/vnd.yamaha.openscoreformat.osfpvg+xml",
  "saf": "application/vnd.yamaha.smaf-audio",
  "spf": "application/vnd.yamaha.smaf-phrase",
  "cmp": "application/vnd.yellowriver-custom-menu",
  "zir,.zirz": "application/vnd.zul",
  "zaz": "application/vnd.zzazz.deck+xml",
  "vxml": "application/voicexml+xml",
  "hlp": "application/winhlp",
  "wsdl": "application/wsdl+xml",
  "wspolicy": "application/wspolicy+xml",
  "abw": "application/x-abiword",
  "ace": "application/x-ace-compressed",
  "aam": "application/x-authorware-map",
  "aas": "application/x-authorware-seg",
  "bcpio": "application/x-bcpio",
  "torrent": "application/x-bittorrent",
  "bz": "application/x-bzip",
  "vcd": "application/x-cdlink",
  "chat": "application/x-chat",
  "pgn": "application/x-chess-pgn",
  "cpio": "application/x-cpio",
  "csh": "application/x-csh",
  "wad": "application/x-doom",
  "ncx": "application/x-dtbncx+xml",
  "dtb": "application/x-dtbook+xml",
  "res": "application/x-dtbresource+xml",
  "dvi": "application/x-dvi",
  "bdf": "application/x-font-bdf",
  "gsf": "application/x-font-ghostscript",
  "psf": "application/x-font-linux-psf",
  "otf": "application/x-font-otf",
  "pcf": "application/x-font-pcf",
  "snf": "application/x-font-snf",
  "ttf,.ttc": "application/x-font-ttf",
  "woff": "application/font-woff",
  "spl": "application/x-futuresplash",
  "gnumeric": "application/x-gnumeric",
  "gtar": "application/x-gtar",
  "hdf": "application/x-hdf",
  "jnlp": "application/x-java-jnlp-file",
  "latex": "application/x-latex",
  "application": "application/x-ms-application",
  "wmd": "application/x-ms-wmd",
  "wmz": "application/x-ms-wmz",
  "xbap": "application/x-ms-xbap",
  "mdb": "application/x-msaccess",
  "obd": "application/x-msbinder",
  "crd": "application/x-mscardfile",
  "clp": "application/x-msclip",
  "wmf": "application/x-msmetafile",
  "mny": "application/x-msmoney",
  "pub": "application/x-mspublisher",
  "scd": "application/x-msschedule",
  "trm": "application/x-msterminal",
  "wri": "application/x-mswrite",
  "p7r": "application/x-pkcs7-certreqresp",
  "rar": "application/x-rar-compressed",
  "sh": "application/x-sh",
  "shar": "application/x-shar",
  "swf": "application/x-shockwave-flash",
  "xap": "application/x-silverlight-app",
  "sit": "application/x-stuffit",
  "sitx": "application/x-stuffitx",
  "sv4cpio": "application/x-sv4cpio",
  "sv4crc": "application/x-sv4crc",
  "tar": "application/x-tar",
  "tcl": "application/x-tcl",
  "tex": "application/x-tex",
  "tfm": "application/x-tex-tfm",
  "ustar": "application/x-ustar",
  "src": "application/x-wais-source",
  "fig": "application/x-xfig",
  "xpi": "application/x-xpinstall",
  "xenc": "application/xenc+xml",
  "xhtml": "application/xhtml+xml",
  "xht": "application/xhtml+xml",
  "xml": "application/xml",
  "xsl": "application/xml",
  "dtd": "application/xml-dtd",
  "xop": "application/xop+xml",
  "xslt": "application/xslt+xml",
  "xspf": "application/xspf+xml",
  "zip": "application/zip",
  "adp": "audio/adpcm",
  "mp4a": "audio/mp4",
  "eol": "audio/vnd.digital-winds",
  "dts": "audio/vnd.dts",
  "dtshd": "audio/vnd.dts.hd",
  "lvp": "audio/vnd.lucent.voice",
  "pya": "audio/vnd.ms-playready.media.pya",
  "ecelp4800": "audio/vnd.nuera.ecelp4800",
  "ecelp7470": "audio/vnd.nuera.ecelp7470",
  "ecelp9600": "audio/vnd.nuera.ecelp9600",
  "aac": "audio/x-aac",
  "m3u": "audio/x-mpegurl",
  "wax": "audio/x-ms-wax",
  "wma": "audio/x-ms-wma",
  "rmp": "audio/x-pn-realaudio-plugin",
  "wav": "audio/x-wav",
  "cdx": "chemical/x-cdx",
  "cif": "chemical/x-cif",
  "cmdf": "chemical/x-cmdf",
  "cml": "chemical/x-cml",
  "csml": "chemical/x-csml",
  "xyz": "chemical/x-xyz",
  "bmp": "image/bmp",
  "cgm": "image/cgm",
  "g3": "image/g3fax",
  "gif": "image/gif",
  "ief": "image/ief",
  "jp2": "image/jp2",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "jpe": "image/jpeg",
  "png": "image/png",
  "btif": "image/prs.btif",
  "svg": "image/svg+xml",
  "svgz": "image/svg+xml",
  "psd": "image/vnd.adobe.photoshop",
  "dwg": "image/vnd.dwg",
  "dxf": "image/vnd.dxf",
  "fbs": "image/vnd.fastbidsheet",
  "fpx": "image/vnd.fpx",
  "fst": "image/vnd.fst",
  "mmr": "image/vnd.fujixerox.edmics-mmr",
  "rlc": "image/vnd.fujixerox.edmics-rlc",
  "mdi": "image/vnd.ms-modi",
  "npx": "image/vnd.net-fpx",
  "wbmp": "image/vnd.wap.wbmp",
  "xif": "image/vnd.xiff",
  "ras": "image/x-cmu-raster",
  "cmx": "image/x-cmx",
  "ico": "image/x-icon",
  "pnm": "image/x-portable-anymap",
  "pbm": "image/x-portable-bitmap",
  "pgm": "image/x-portable-graymap",
  "ppm": "image/x-portable-pixmap",
  "rgb": "image/x-rgb",
  "xbm": "image/x-xbitmap",
  "xpm": "image/x-xpixmap",
  "xwd": "image/x-xwindowdump",
  "gdl": "model/vnd.gdl",
  "gtw": "model/vnd.gtw",
  "mts": "model/vnd.mts",
  "vtu": "model/vnd.vtu",
  "css": "text/css",
  "csv": "text/csv",
  "html": "text/html",
  "htm": "text/html",
  "txt": "text/plain",
  "text": "text/plain",
  "conf": "text/plain",
  "def": "text/plain",
  "log": "text/plain",
  "dsc": "text/prs.lines.tag",
  "rtx": "text/richtext",
  "tsv": "text/tab-separated-values",
  "curl": "text/vnd.curl",
  "dcurl": "text/vnd.curl.dcurl",
  "scurl": "text/vnd.curl.scurl",
  "mcurl": "text/vnd.curl.mcurl",
  "fly": "text/vnd.fly",
  "flx": "text/vnd.fmi.flexstor",
  "gv": "text/vnd.graphviz",
  "3dml": "text/vnd.in3d.3dml",
  "spot": "text/vnd.in3d.spot",
  "jad": "text/vnd.sun.j2me.app-descriptor",
  "wml": "text/vnd.wap.wml",
  "wmls": "text/vnd.wap.wmlscript",
  "java": "text/x-java-source",
  "etx": "text/x-setext",
  "uu": "text/x-uuencode",
  "vcs": "text/x-vcalendar",
  "vcf": "text/x-vcard",
  "3gp": "video/3gpp",
  "3g2": "video/3gpp2",
  "h261": "video/h261",
  "h263": "video/h263",
  "h264": "video/h264",
  "jpgv": "video/jpeg",
  "mp4": "video/mp4",
  "mp4v": "video/mp4",
  "mpg4": "video/mp4",
  "webm": "video/webm",
  "mpeg": "video/mpeg",
  "mpg": "video/mpeg",
  "mpe": "video/mpeg",
  "m1v": "video/mpeg",
  "m2v": "video/mpeg",
  "ogv": "video/ogg",
  "fvt": "video/vnd.fvt",
  "pyv": "video/vnd.ms-playready.media.pyv",
  "viv": "video/vnd.vivo",
  "f4v": "video/x-f4v",
  "fli": "video/x-fli",
  "flv": "video/x-flv",
  "wm": "video/x-ms-wm",
  "wmv": "video/x-ms-wmv",
  "wmx": "video/x-ms-wmx",
  "wvx": "video/x-ms-wvx",
  "avi": "video/x-msvideo",
  "movie": "video/x-sgi-movie",
  "ice": "x-conference/x-cooltalk",
  "indd": "application/x-indesign",
  "dat": "application/octet-stream",
  "gz": "application/x-gzip",
  "tgz": "application/x-tar"
}, _defineProperty(_mimeTypes, "tar", "application/x-tar"), _defineProperty(_mimeTypes, "epub", "application/epub+zip"), _defineProperty(_mimeTypes, "mobi", "application/x-mobipocket-ebook"), _defineProperty(_mimeTypes, "README", "text/plain"), _defineProperty(_mimeTypes, "LICENSE", "text/plain"), _defineProperty(_mimeTypes, "COPYING", "text/plain"), _defineProperty(_mimeTypes, "TODO", "text/plain"), _defineProperty(_mimeTypes, "ABOUT", "text/plain"), _defineProperty(_mimeTypes, "AUTHORS", "text/plain"), _defineProperty(_mimeTypes, "CONTRIBUTORS", "text/plain"), _mimeTypes);

var getMimeType = function getMimeType(path) {
  var ext = path.split("/").pop().split(".").pop();
  return mimeTypes[ext] || 'application/octet-stream';
};

var sendError = function sendError(status, body) {
  return {
    status: status,
    headers: {
      "Content-Type": "text/plain",
      "Connection": "keep-alive"
    },
    body: body
  };
};
var sendJSON = function sendJSON(data) {
  return {
    status: 200,
    headers: {
      "Content-Type": 'application/json',
      "Connection": "keep-alive"
    },
    body: data
  };
};
/**
 * Отправляет файл. Путь - от automation, т.е. 'modules/ModuleName/htdocs/...'
 */

var sendFile = function sendFile(path) {
  //const root = globals.fsRoot; //  'modules/MyHomeAutomation/';
  try {
    var contentType = getMimeType(path);
    var data = fs.load(path);

    try {
      data = (_readOnlyError("data"), decodeURIComponent(escape(data)));
    } catch (err) {}

    var result = {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Connection": "keep-alive"
      },
      body: data
    };
    return result;
  } catch (err) {
    console.log('sendFile Error (' + path + '): ' + err.toString());
    return sendError(500, err.toString() + "\n" + err.stack);
  }
};

var createListener = function createListener(baseName, handler) {
  global[baseName] = handler;
  ws.allowExternalAccess(baseName, controller.auth.ROLE.ANONYMOUS); // login required
};

var destroyListener = function destroyListener(baseName) {
  global[baseName] = undefined;
  ws.revokeExternalAccess(baseName);
};

var WebServer =
/*#__PURE__*/
function () {
  function WebServer(baseName) {
    _classCallCheck(this, WebServer);

    console.log("Starting WebServer at '".concat(baseName, "'"));
    auto_bind__WEBPACK_IMPORTED_MODULE_0___default()(this);
    this.baseName = baseName;
    this.routes = [];
    createListener(this.baseName, this._mainHandler);
  }

  _createClass(WebServer, [{
    key: "addRoute",
    value: function addRoute(route, handler) {
      var routeObject = {
        route: route,
        pattern: new RegExp('^' + route.replace(/:\w+/g, '([\\s\\S]+)') + '$'),
        // callback: scope ? handler.bind(scope) : handler
        handler: handler
      };
      this.routes.unshift(routeObject);
    } // обработчик всех запросов, пришедших на this.baseName

  }, {
    key: "_mainHandler",
    value: function _mainHandler(url, request) {
      var result = {
        status: 404
      };

      _.each(this.routes, function (route) {
        var args = url.match(route.pattern);

        if (args) {
          result = route.handler(args.slice(1));
          return false;
        }
      });

      return result;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      destroyListener(this.baseName);
      this.routes = [];
      console.log("WebServer at '".concat(this.baseName, "' stopped"));
    }
  }]);

  return WebServer;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

;
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WebServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebServer */ "./src/server/WebServer.js");
/* harmony import */ var _helpers_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/json */ "./src/helpers/json.js");
var _this = undefined;

/* global globals */
// Полифил для es5
// import '@babel/polyfill';
// import 'core-js/object/assign';



var webServer;

var start = function start() {
  console.log('module.js start');

  var rootHandler = function rootHandler() {
    return Object(_WebServer__WEBPACK_IMPORTED_MODULE_1__["sendFile"])(globals.fsRoot + 'htdocs/index.html');
  };

  webServer = new _WebServer__WEBPACK_IMPORTED_MODULE_1__["default"]('zwayconsole');
  webServer.addRoute('', rootHandler);
  webServer.addRoute('/', rootHandler);
  webServer.addRoute('/index.html', rootHandler);
  webServer.addRoute('/htdocs/:path', function (args) {
    return Object(_WebServer__WEBPACK_IMPORTED_MODULE_1__["sendFile"])(globals.fsRoot + 'htdocs/' + args[0]);
  });
  webServer.addRoute('/api/eval/:code', function (args) {
    var code = args[0];
    code = decodeURIComponent(code);

    try {
      var result = eval(code);
      if (result === undefined) result = 'undefined';
      result = Object(_helpers_json__WEBPACK_IMPORTED_MODULE_2__["stringify"])(result);
      return Object(_WebServer__WEBPACK_IMPORTED_MODULE_1__["sendJSON"])(result);
    } catch (err) {
      // var errObj = {
      //     text: err.toString(),
      //     stack: err.stack.replace('\\n', '\n')
      // };
      // return sendError(500, errObj);
      var stack = err.stack.replace('\\n', '\n');
      return Object(_WebServer__WEBPACK_IMPORTED_MODULE_1__["sendJSON"])(stack);
    }
  }, _this);
};

var stop = function stop() {
  console.log('module.js stop');
  webServer.destroy();
};

setTimeout(start, 1);
/* harmony default export */ __webpack_exports__["default"] = ({
  stop: stop
});

/***/ })

/******/ })));