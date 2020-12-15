module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_font_face__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/font-face */ "./styles/font-face.ts");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_createApolloClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/createApolloClient */ "./utils/createApolloClient.ts");

var _jsxFileName = "/mnt/c/Users/Daniel/Code/Projects/GraqphQlNextJsAuthBoilerplate/web/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_7__["ApolloProvider"], {
    client: _utils_createApolloClient__WEBPACK_IMPORTED_MODULE_8__["client"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ChakraProvider"], {
      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__["theme"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["CSSReset"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["Global"], {
        styles: _styles_font_face__WEBPACK_IMPORTED_MODULE_6__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/font-face.ts":
/*!*****************************!*\
  !*** ./styles/font-face.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
@font-face {
  font-family: 'Fraunces';
  font-style: normal;
  font-weight: 400;
  src: url(/fonts/Fraunces-Regular.woff2);
  
}

@font-face {
  font-family: 'LibreFranklin';
  font-style: normal;
  font-weight: 400;
  src: url(/fonts/LibreFranklin-Regular.ttf);
}

`);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);

const theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["extendTheme"])({
  fonts: {
    body: "'LibreFranklin'",
    heading: "'Fraunces'"
  },
  components: {
    FormLabel: {
      baseStyle: {
        fontWeight: 600,
        fontSize: "0.8em"
      }
    },
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: "none"
        }
      }
    },
    Button: {
      baseStyle: {
        borderRadius: 0,
        fontWeight: "medium",
        _focus: {
          boxShadow: "none"
        }
      },
      variants: {
        black: props => ({
          bg: props.colorMode === "light" ? "#000000" : "#ffffff",
          color: props.colorMode === "light" ? "#ffffff" : "#000000",
          fontSize: "0.8em",
          fontWeight: 700,
          padding: "1.4em",
          _hover: {
            textDecoration: "none"
          }
        }),
        whiteWithBorder: {
          bg: "#ffffff",
          color: "#000000",
          fontSize: "0.8em",
          fontWeight: 800,
          padding: "1.4em",
          border: "1px"
        },
        transparent: {
          bg: "red",
          _focus: {
            outline: "none"
          }
        }
      },
      defaultProps: {
        variant: "black"
      }
    },
    Text: {
      variants: {
        smallText: {
          fontWeight: 600,
          fontSize: "0.8em",
          color: "#555555"
        }
      }
    },
    Input: {
      baseStyle: {
        padding: "1em"
      }
    }
  }
});

/***/ }),

/***/ "./utils/createApolloClient.ts":
/*!*************************************!*\
  !*** ./utils/createApolloClient.ts ***!
  \*************************************/
/*! exports provided: client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
  ssrMode: true,
  uri: "http://localhost:4000/graphql",
  credentials: "include",
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]()
});

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2ZvbnQtZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY3JlYXRlQXBvbGxvQ2xpZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCIsInRoZW1lIiwiZm9udEZhY2UiLCJleHRlbmRUaGVtZSIsImZvbnRzIiwiYm9keSIsImhlYWRpbmciLCJjb21wb25lbnRzIiwiRm9ybUxhYmVsIiwiYmFzZVN0eWxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiTGluayIsIl9mb2N1cyIsImJveFNoYWRvdyIsIkJ1dHRvbiIsImJvcmRlclJhZGl1cyIsInZhcmlhbnRzIiwiYmxhY2siLCJwcm9wcyIsImJnIiwiY29sb3JNb2RlIiwiY29sb3IiLCJwYWRkaW5nIiwiX2hvdmVyIiwidGV4dERlY29yYXRpb24iLCJ3aGl0ZVdpdGhCb3JkZXIiLCJib3JkZXIiLCJ0cmFuc3BhcmVudCIsIm91dGxpbmUiLCJkZWZhdWx0UHJvcHMiLCJ2YXJpYW50IiwiVGV4dCIsInNtYWxsVGV4dCIsIklucHV0IiwiQXBvbGxvQ2xpZW50Iiwic3NyTW9kZSIsInVyaSIsInByb2Nlc3MiLCJjcmVkZW50aWFscyIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBbUQ7QUFDakQsc0JBQ0UscUVBQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFQyxnRUFBeEI7QUFBQSwyQkFDRSxxRUFBQywrREFBRDtBQUFnQixXQUFLLEVBQUVDLG1EQUF2QjtBQUFBLDhCQUNFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLHFEQUFEO0FBQVEsY0FBTSxFQUFFQyx5REFBUUE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsU0FBRCxvQkFBZUgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0FBRWNGLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWhCQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNSSxLQUFLLEdBQUdFLG9FQUFXLENBQUM7QUFDL0JDLE9BQUssRUFBRTtBQUNMQyxRQUFJLEVBQUUsaUJBREQ7QUFFTEMsV0FBTyxFQUFFO0FBRkosR0FEd0I7QUFNL0JDLFlBQVUsRUFBRTtBQUNWQyxhQUFTLEVBQUU7QUFDVEMsZUFBUyxFQUFFO0FBQ1RDLGtCQUFVLEVBQUUsR0FESDtBQUVUQyxnQkFBUSxFQUFFO0FBRkQ7QUFERixLQUREO0FBT1ZDLFFBQUksRUFBRTtBQUNKSCxlQUFTLEVBQUU7QUFDVEksY0FBTSxFQUFFO0FBQ05DLG1CQUFTLEVBQUU7QUFETDtBQURDO0FBRFAsS0FQSTtBQWNWQyxVQUFNLEVBQUU7QUFDTk4sZUFBUyxFQUFFO0FBQ1RPLG9CQUFZLEVBQUUsQ0FETDtBQUVUTixrQkFBVSxFQUFFLFFBRkg7QUFHVEcsY0FBTSxFQUFFO0FBQ05DLG1CQUFTLEVBQUU7QUFETDtBQUhDLE9BREw7QUFRTkcsY0FBUSxFQUFFO0FBQ1JDLGFBQUssRUFBR0MsS0FBRCxLQUFZO0FBQ2pCQyxZQUFFLEVBQUVELEtBQUssQ0FBQ0UsU0FBTixLQUFvQixPQUFwQixHQUE4QixTQUE5QixHQUEwQyxTQUQ3QjtBQUVqQkMsZUFBSyxFQUFFSCxLQUFLLENBQUNFLFNBQU4sS0FBb0IsT0FBcEIsR0FBOEIsU0FBOUIsR0FBMEMsU0FGaEM7QUFHakJWLGtCQUFRLEVBQUUsT0FITztBQUlqQkQsb0JBQVUsRUFBRSxHQUpLO0FBS2pCYSxpQkFBTyxFQUFFLE9BTFE7QUFNakJDLGdCQUFNLEVBQUU7QUFDTkMsMEJBQWMsRUFBRTtBQURWO0FBTlMsU0FBWixDQURDO0FBV1JDLHVCQUFlLEVBQUU7QUFDZk4sWUFBRSxFQUFFLFNBRFc7QUFFZkUsZUFBSyxFQUFFLFNBRlE7QUFHZlgsa0JBQVEsRUFBRSxPQUhLO0FBSWZELG9CQUFVLEVBQUUsR0FKRztBQUtmYSxpQkFBTyxFQUFFLE9BTE07QUFNZkksZ0JBQU0sRUFBRTtBQU5PLFNBWFQ7QUFtQlJDLG1CQUFXLEVBQUU7QUFDWFIsWUFBRSxFQUFFLEtBRE87QUFFWFAsZ0JBQU0sRUFBRTtBQUNOZ0IsbUJBQU8sRUFBRTtBQURIO0FBRkc7QUFuQkwsT0FSSjtBQWtDTkMsa0JBQVksRUFBRTtBQUNaQyxlQUFPLEVBQUU7QUFERztBQWxDUixLQWRFO0FBb0RWQyxRQUFJLEVBQUU7QUFDSmYsY0FBUSxFQUFFO0FBQ1JnQixpQkFBUyxFQUFFO0FBQ1R2QixvQkFBVSxFQUFFLEdBREg7QUFFVEMsa0JBQVEsRUFBRSxPQUZEO0FBR1RXLGVBQUssRUFBRTtBQUhFO0FBREg7QUFETixLQXBESTtBQTZEVlksU0FBSyxFQUFFO0FBQ0x6QixlQUFTLEVBQUU7QUFDVGMsZUFBTyxFQUFFO0FBREE7QUFETjtBQTdERztBQU5tQixDQUFELENBQXpCLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNdkIsTUFBTSxHQUFHLElBQUltQywyREFBSixDQUFpQjtBQUNyQ0MsU0FBTyxFQUFFLElBRDRCO0FBRXJDQyxLQUFHLEVBQUVDLCtCQUZnQztBQUdyQ0MsYUFBVyxFQUFFLFNBSHdCO0FBSXJDQyxPQUFLLEVBQUUsSUFBSUMsNERBQUo7QUFKOEIsQ0FBakIsQ0FBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQLDJDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgQ1NTUmVzZXQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgZm9udEZhY2UgZnJvbSBcIi4uL3N0eWxlcy9mb250LWZhY2VcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vdXRpbHMvY3JlYXRlQXBvbGxvQ2xpZW50XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxDU1NSZXNldCAvPlxuICAgICAgICA8R2xvYmFsIHN0eWxlcz17Zm9udEZhY2V9IC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJleHBvcnQgZGVmYXVsdCBgXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnRnJhdW5jZXMnO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHNyYzogdXJsKC9mb250cy9GcmF1bmNlcy1SZWd1bGFyLndvZmYyKTtcclxuICBcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdMaWJyZUZyYW5rbGluJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBzcmM6IHVybCgvZm9udHMvTGlicmVGcmFua2xpbi1SZWd1bGFyLnR0Zik7XHJcbn1cclxuXHJcbmA7XHJcbiIsImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuICBmb250czoge1xyXG4gICAgYm9keTogXCInTGlicmVGcmFua2xpbidcIixcclxuICAgIGhlYWRpbmc6IFwiJ0ZyYXVuY2VzJ1wiLFxyXG4gIH0sXHJcblxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEZvcm1MYWJlbDoge1xyXG4gICAgICBiYXNlU3R5bGU6IHtcclxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMC44ZW1cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBMaW5rOiB7XHJcbiAgICAgIGJhc2VTdHlsZToge1xyXG4gICAgICAgIF9mb2N1czoge1xyXG4gICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIEJ1dHRvbjoge1xyXG4gICAgICBiYXNlU3R5bGU6IHtcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgZm9udFdlaWdodDogXCJtZWRpdW1cIixcclxuICAgICAgICBfZm9jdXM6IHtcclxuICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdmFyaWFudHM6IHtcclxuICAgICAgICBibGFjazogKHByb3BzKSA9PiAoe1xyXG4gICAgICAgICAgYmc6IHByb3BzLmNvbG9yTW9kZSA9PT0gXCJsaWdodFwiID8gXCIjMDAwMDAwXCIgOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvck1vZGUgPT09IFwibGlnaHRcIiA/IFwiI2ZmZmZmZlwiIDogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIwLjhlbVwiLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIxLjRlbVwiLFxyXG4gICAgICAgICAgX2hvdmVyOiB7XHJcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2hpdGVXaXRoQm9yZGVyOiB7XHJcbiAgICAgICAgICBiZzogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIwLjhlbVwiLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogODAwLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIxLjRlbVwiLFxyXG4gICAgICAgICAgYm9yZGVyOiBcIjFweFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJhbnNwYXJlbnQ6IHtcclxuICAgICAgICAgIGJnOiBcInJlZFwiLFxyXG4gICAgICAgICAgX2ZvY3VzOiB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0UHJvcHM6IHtcclxuICAgICAgICB2YXJpYW50OiBcImJsYWNrXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgVGV4dDoge1xyXG4gICAgICB2YXJpYW50czoge1xyXG4gICAgICAgIHNtYWxsVGV4dDoge1xyXG4gICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgZm9udFNpemU6IFwiMC44ZW1cIixcclxuICAgICAgICAgIGNvbG9yOiBcIiM1NTU1NTVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIElucHV0OiB7XHJcbiAgICAgIGJhc2VTdHlsZToge1xyXG4gICAgICAgIHBhZGRpbmc6IFwiMWVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICBzc3JNb2RlOiB0cnVlLFxyXG4gIHVyaTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VSVkVSX1VSTCxcclxuICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9