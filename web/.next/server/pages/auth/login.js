module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/login.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FormInput.tsx":
/*!**********************************!*\
  !*** ./components/FormInput.tsx ***!
  \**********************************/
/*! exports provided: FormInput, FormInputPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInput", function() { return FormInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInputPassword", function() { return FormInputPassword; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/mnt/c/Users/Daniel/Code/Projects/GraqphQlNextJsAuthBoilerplate/web/components/FormInput.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const FormWrapper = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  mb: "1em",
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 25,
  columnNumber: 39
}, undefined);

const FormInput = ({
  name,
  label,
  placeholder,
  type,
  required,
  validation
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormWrapper, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: name,
    validate: validation,
    children: ({
      field,
      form
    }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      isInvalid: form.errors[name] && form.touched[name],
      isRequired: required,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
        htmlFor: name,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], _objectSpread(_objectSpread({}, field), {}, {
        type: type,
        id: name,
        placeholder: placeholder
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormErrorMessage"], {
        children: form.errors[name]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 35,
  columnNumber: 3
}, undefined);
const FormInputPassword = ({
  name,
  label,
  placeholder,
  type,
  required,
  validation
}) => {
  const {
    0: showPassword,
    1: setShowPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);

  const handlePasswordVisibility = () => setShowPassword(prevState => !prevState);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: name,
      validate: validation,
      children: ({
        field,
        form
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
        isInvalid: form.errors[name] && form.touched[name],
        isRequired: required,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
          htmlFor: name,
          children: label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], _objectSpread(_objectSpread({}, field), {}, {
            type: showPassword ? "text" : "password",
            id: name,
            placeholder: placeholder
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["InputRightElement"], {
            width: "3rem",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              size: "sm",
              onClick: handlePasswordVisibility,
              children: showPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["ViewOffIcon"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 21
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["ViewOffIcon"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormErrorMessage"], {
          children: form.errors[name]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/GoogleLoginButton.tsx":
/*!******************************************!*\
  !*** ./components/GoogleLoginButton.tsx ***!
  \******************************************/
/*! exports provided: GoogleLoginButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginButton", function() { return GoogleLoginButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-login */ "react-google-login");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphql_generated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/generated */ "./graphql/generated.tsx");
/* harmony import */ var _styles_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/icons */ "./styles/icons.tsx");

var _jsxFileName = "/mnt/c/Users/Daniel/Code/Projects/GraqphQlNextJsAuthBoilerplate/web/components/GoogleLoginButton.tsx";





const GoogleLoginButton = props => {
  const [{
    fetching
  }, googleLogin] = Object(_graphql_generated__WEBPACK_IMPORTED_MODULE_4__["useGoogleLoginMutation"])();

  const responseGoogle = async response => {
    try {
      return await googleLogin({
        email: response.profileObj.email,
        username: response.profileObj.givenName,
        password: "googleAuth"
      });
    } catch (error) {
      return error;
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_google_login__WEBPACK_IMPORTED_MODULE_3___default.a, {
    clientId: "967686666068-5bg4rsutbgd6agjveo6v4tbnkgf04ft3.apps.googleusercontent.com",
    buttonText: "Login",
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: "single_host_origin",
    render: renderProps => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: renderProps.onClick,
      disabled: renderProps.disabled,
      size: "xl",
      w: "100%",
      variant: "whiteWithBorder",
      leftIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_icons__WEBPACK_IMPORTED_MODULE_5__["GoogleIcon"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }, undefined),
      children: "Inicia sesi\xF3n con Google"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/layouts/authFormLayout.tsx":
/*!***********************************************!*\
  !*** ./components/layouts/authFormLayout.tsx ***!
  \***********************************************/
/*! exports provided: AuthFormLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFormLayout", function() { return AuthFormLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GoogleLoginButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GoogleLoginButton */ "./components/GoogleLoginButton.tsx");

var _jsxFileName = "/mnt/c/Users/Daniel/Code/Projects/GraqphQlNextJsAuthBoilerplate/web/components/layouts/authFormLayout.tsx";



const AuthFormLayout = ({
  title,
  children,
  type
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    w: "100%",
    h: "100vh",
    minW: "300px",
    minH: "770px",
    p: ["0", "0", "0", "3em", "3em"],
    justifyContent: "center",
    alignItems: "center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      zIndex: 0,
      order: 1,
      h: "100%",
      w: ["100%", "100%", "100%", "50%", "60%"],
      minW: "300px",
      p: "2em",
      bgImage: "url('/images/auhtscreen.jpg')",
      bgSize: "cover",
      bgPos: "center",
      alignItems: "flex-end",
      position: ["absolute", "absolute", "absolute", "static", "static"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
        textColor: "#ffffff",
        children: "Bienvenido"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      h: "90vh",
      minH: "770px",
      w: ["90%", "90%", "90%", "50%", "40%"],
      bgColor: "#ffffff",
      zIndex: 1,
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        m: ["1em", "6em", "7em", "6em", "6em"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
          fontSize: "2.5em",
          mb: "1em",
          letterSpacing: "wider",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          mt: "0.5em",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            href: type === "login" ? "/auth/register" : "/auth/login",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              variant: "smallText",
              textAlign: "center",
              children: type === "login" ? "Crear cuenta" : "Iniciar sesión"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          mt: "2em",
          textAlign: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            variant: "smallText",
            children: "o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          justifyContent: "space-between",
          mt: "2em",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GoogleLoginButton__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/validations/validateUsername.ts":
/*!****************************************************!*\
  !*** ./components/validations/validateUsername.ts ***!
  \****************************************************/
/*! exports provided: validateUsername, validateEmail, validatePassword, validatePasswordRepeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateUsername", function() { return validateUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePassword", function() { return validatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePasswordRepeat", function() { return validatePasswordRepeat; });
const validateUsername = value => {
  if (!value) {
    return "El usuario es requerido";
  } else if (value.length < 3) {
    return "El usuario debe tener al menos 3 letras";
  }

  return;
};
const validateEmail = value => {
  const reg = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

  if (!value) {
    return "El email es requerido";
  } else if (!reg.test(value)) {
    return "Inserta un email correcto";
  }

  return;
};
const validatePassword = value => {
  const reg = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);

  if (!value) {
    return "La contraseña es requerida";
  } else if (!reg.test(value)) {
    return `La contraseña debe ener una longitud de al menos 8 caracteres.
    Contenter un número.\n
    Contener un símbolo.\n
    Contener una mayúsucla.\n
    `;
  }

  return;
};
const validatePasswordRepeat = (password, value) => {
  console.log(password, value);

  if (!value) {
    return "Reptie la contraseña";
  } else if (value !== password) {
    return "Las contraseñas no coinciden";
  }

  return;
};

/***/ }),

/***/ "./graphql/generated.tsx":
/*!*******************************!*\
  !*** ./graphql/generated.tsx ***!
  \*******************************/
/*! exports provided: GoogleLoginDocument, useGoogleLoginMutation, LoginDocument, useLoginMutation, RegisterDocument, useRegisterMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginDocument", function() { return GoogleLoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGoogleLoginMutation", function() { return useGoogleLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginMutation", function() { return useLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterMutation", function() { return useRegisterMutation; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);


const GoogleLoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation GoogleLogin($username: String, $email: String, $password: String!) {
  googleLogin(username: $username, email: $email, password: $password) {
    token
    errors {
      field
      message
    }
  }
}
    `;
function useGoogleLoginMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](GoogleLoginDocument);
}
;
const LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Login($username: String, $email: String, $password: String!) {
  login(username: $username, email: $email, password: $password) {
    token
    errors {
      field
      message
    }
  }
}
    `;
function useLoginMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](LoginDocument);
}
;
const RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Register($username: String, $email: String, $password: String!) {
  register(username: $username, email: $email, password: $password) {
    token
    errors {
      field
      message
    }
  }
}
    `;
function useRegisterMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](RegisterDocument);
}
;

/***/ }),

/***/ "./pages/auth/login.tsx":
/*!******************************!*\
  !*** ./pages/auth/login.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-urql */ "next-urql");
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_urql__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/FormInput */ "./components/FormInput.tsx");
/* harmony import */ var _components_layouts_authFormLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layouts/authFormLayout */ "./components/layouts/authFormLayout.tsx");
/* harmony import */ var _components_validations_validateUsername__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/validations/validateUsername */ "./components/validations/validateUsername.ts");
/* harmony import */ var _graphql_generated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../graphql/generated */ "./graphql/generated.tsx");
/* harmony import */ var _utils_createClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/createClient */ "./utils/createClient.ts");

var _jsxFileName = "/mnt/c/Users/Daniel/Code/Projects/GraqphQlNextJsAuthBoilerplate/web/pages/auth/login.tsx";











const Login = () => {
  const [{
    fetching
  }, login] = Object(_graphql_generated__WEBPACK_IMPORTED_MODULE_9__["useLoginMutation"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      usernameOrEmail: "",
      password: ""
    },
    onSubmit: async (values, {
      setSubmitting
    }) => {
      try {
        await login({
          username: values.usernameOrEmail,
          email: values.usernameOrEmail,
          password: values.password
        });
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    children: ({
      isSubmitting,
      values
    }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_authFormLayout__WEBPACK_IMPORTED_MODULE_7__["AuthFormLayout"], {
      title: "Iniciar sesi\xF3n",
      type: "login",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FormInput__WEBPACK_IMPORTED_MODULE_6__["FormInput"], {
          name: "usernameOrEmail",
          type: "text",
          label: "Usuario o email",
          placeholder: "Inserta tu usuario o email",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FormInput__WEBPACK_IMPORTED_MODULE_6__["FormInputPassword"], {
          name: "password",
          type: "password",
          label: "Contrase\xF1a",
          placeholder: "Inserta tu contrase\xF1a",
          required: true,
          validation: _components_validations_validateUsername__WEBPACK_IMPORTED_MODULE_8__["validatePassword"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          w: "100%",
          textAlign: "right",
          mb: "1em",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              variant: "smallText",
              children: "Olvidaste tu contraseña?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          size: "xl",
          mt: 4,
          isFullWidth: true,
          isLoading: isSubmitting,
          type: "submit",
          children: "Iniciar sesi\xF3n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_3__["withUrqlClient"])(_utils_createClient__WEBPACK_IMPORTED_MODULE_10__["clientOptions"], {
  ssr: false
})(Login));

/***/ }),

/***/ "./styles/icons.tsx":
/*!**************************!*\
  !*** ./styles/icons.tsx ***!
  \**************************/
/*! exports provided: GoogleIcon, FacebookIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleIcon", function() { return GoogleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookIcon", function() { return FacebookIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/mnt/c/Users/Daniel/Code/Projects/GraqphQlNextJsAuthBoilerplate/web/styles/icons.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const GoogleIcon = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], _objectSpread(_objectSpread({
  viewBox: "0 0 512 512"
}, props), {}, {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    fill: "#FBBB00",
    d: "M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256\r c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456\r C103.821,274.792,107.225,292.797,113.47,309.408z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    fill: "#518EF8",
    d: "M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451\r c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535\r c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    fill: "#28B446",
    d: "M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512\r c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771\r c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    fill: "#F14336",
    d: "M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012\r c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0\r C318.115,0,375.068,22.126,419.404,58.936z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined)]
}), void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);
const FacebookIcon = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], _objectSpread(_objectSpread({
  viewBox: "0 0 512 512"
}, props), {}, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    fill: "#3b5999",
    d: "M384,176h-96v-64c0-17.664,14.336-32,32-32h32V0h-64l0,0c-53.024,0-96,42.976-96,96v80h-64v80h64v256h96V256h64L384,176z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined)
}), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 34,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./utils/createClient.ts":
/*!*******************************!*\
  !*** ./utils/createClient.ts ***!
  \*******************************/
/*! exports provided: clientOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientOptions", function() { return clientOptions; });
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_0__);

const clientOptions = ssrExchange => ({
  url: "http://localhost:4000/graphql",
  exhanges: [urql__WEBPACK_IMPORTED_MODULE_0__["dedupExchange"], urql__WEBPACK_IMPORTED_MODULE_0__["cacheExchange"], ssrExchange, urql__WEBPACK_IMPORTED_MODULE_0__["fetchExchange"]]
});

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-urql":
/*!****************************!*\
  !*** external "next-urql" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-urql");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("urql");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR29vZ2xlTG9naW5CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0cy9hdXRoRm9ybUxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92YWxpZGF0aW9ucy92YWxpZGF0ZVVzZXJuYW1lLnRzIiwid2VicGFjazovLy8uL2dyYXBocWwvZ2VuZXJhdGVkLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL2xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaWNvbnMudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NyZWF0ZUNsaWVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC11cnFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1sb2dpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVycWxcIiJdLCJuYW1lcyI6WyJGb3JtV3JhcHBlciIsImNoaWxkcmVuIiwiRm9ybUlucHV0IiwibmFtZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJ2YWxpZGF0aW9uIiwiZmllbGQiLCJmb3JtIiwiZXJyb3JzIiwidG91Y2hlZCIsIkZvcm1JbnB1dFBhc3N3b3JkIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwidXNlU3RhdGUiLCJoYW5kbGVQYXNzd29yZFZpc2liaWxpdHkiLCJwcmV2U3RhdGUiLCJWaWV3T2ZmSWNvbiIsIkdvb2dsZUxvZ2luQnV0dG9uIiwicHJvcHMiLCJmZXRjaGluZyIsImdvb2dsZUxvZ2luIiwidXNlR29vZ2xlTG9naW5NdXRhdGlvbiIsInJlc3BvbnNlR29vZ2xlIiwicmVzcG9uc2UiLCJlbWFpbCIsInByb2ZpbGVPYmoiLCJ1c2VybmFtZSIsImdpdmVuTmFtZSIsInBhc3N3b3JkIiwiZXJyb3IiLCJwcm9jZXNzIiwicmVuZGVyUHJvcHMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJBdXRoRm9ybUxheW91dCIsInRpdGxlIiwidmFsaWRhdGVVc2VybmFtZSIsInZhbHVlIiwibGVuZ3RoIiwidmFsaWRhdGVFbWFpbCIsInJlZyIsIlJlZ0V4cCIsInRlc3QiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwidmFsaWRhdGVQYXNzd29yZFJlcGVhdCIsImNvbnNvbGUiLCJsb2ciLCJHb29nbGVMb2dpbkRvY3VtZW50IiwiZ3FsIiwiVXJxbCIsIkxvZ2luRG9jdW1lbnQiLCJ1c2VMb2dpbk11dGF0aW9uIiwiUmVnaXN0ZXJEb2N1bWVudCIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJMb2dpbiIsImxvZ2luIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlcm5hbWVPckVtYWlsIiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsInB1c2giLCJpc1N1Ym1pdHRpbmciLCJ3aXRoVXJxbENsaWVudCIsImNsaWVudE9wdGlvbnMiLCJzc3IiLCJHb29nbGVJY29uIiwiRmFjZWJvb2tJY29uIiwic3NyRXhjaGFuZ2UiLCJ1cmwiLCJleGhhbmdlcyIsImRlZHVwRXhjaGFuZ2UiLCJjYWNoZUV4Y2hhbmdlIiwiZmV0Y2hFeGNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztR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U0FEUDtBQUVFLEtBQUMsRUFBQztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREs7QUE2QkEsTUFBTWlELFlBQVksR0FBSWpELEtBQUQsaUJBQzFCLHFFQUFDLHFEQUFEO0FBQU0sU0FBTyxFQUFDO0FBQWQsR0FBZ0NBLEtBQWhDO0FBQUEseUJBQ0U7QUFDRSxRQUFJLEVBQUMsU0FEUDtBQUVFLEtBQUMsRUFBQztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREssQzs7Ozs7Ozs7Ozs7O0FDaENQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPTyxNQUFNOEMsYUFBYSxHQUFJSSxXQUFELEtBQXVCO0FBQ2xEQyxLQUFHLEVBQUUsK0JBRDZDO0FBRWxEQyxVQUFRLEVBQUUsQ0FBQ0Msa0RBQUQsRUFBZ0JDLGtEQUFoQixFQUErQkosV0FBL0IsRUFBNENLLGtEQUE1QztBQUZ3QyxDQUF2QixDQUF0QixDOzs7Ozs7Ozs7OztBQ1BQLDZDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2F1dGgvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2F1dGgvbG9naW4udHN4XCIpO1xuIiwiaW1wb3J0IHtcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtTGFiZWwsXHJcbiAgSW5wdXQsXHJcbiAgRm9ybUVycm9yTWVzc2FnZSxcclxuICBJbnB1dEdyb3VwLFxyXG4gIEJ1dHRvbixcclxuICBJY29uLFxyXG4gIElucHV0UmlnaHRFbGVtZW50LFxyXG4gIEJveCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFZpZXdJY29uLCBWaWV3T2ZmSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHJlcXVpcmVkOiBib29sZWFuO1xyXG4gIHZhbGlkYXRpb24/OiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gPEJveCBtYj17XCIxZW1cIn0+e2NoaWxkcmVufTwvQm94PjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtSW5wdXQgPSAoe1xyXG4gIG5hbWUsXHJcbiAgbGFiZWwsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgdHlwZSxcclxuICByZXF1aXJlZCxcclxuICB2YWxpZGF0aW9uLFxyXG59OiBQcm9wcykgPT4gKFxyXG4gIDxGb3JtV3JhcHBlcj5cclxuICAgIDxGaWVsZCBuYW1lPXtuYW1lfSB2YWxpZGF0ZT17dmFsaWRhdGlvbn0+XHJcbiAgICAgIHsoeyBmaWVsZCwgZm9ybSB9KSA9PiAoXHJcbiAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICBpc0ludmFsaWQ9e2Zvcm0uZXJyb3JzW25hbWVdICYmIGZvcm0udG91Y2hlZFtuYW1lXX1cclxuICAgICAgICAgIGlzUmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0IHsuLi5maWVsZH0gdHlwZT17dHlwZX0gaWQ9e25hbWV9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cclxuICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9yc1tuYW1lXX08L0Zvcm1FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgKX1cclxuICAgIDwvRmllbGQ+XHJcbiAgPC9Gb3JtV3JhcHBlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtSW5wdXRQYXNzd29yZCA9ICh7XHJcbiAgbmFtZSxcclxuICBsYWJlbCxcclxuICBwbGFjZWhvbGRlcixcclxuICB0eXBlLFxyXG4gIHJlcXVpcmVkLFxyXG4gIHZhbGlkYXRpb24sXHJcbn06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVQYXNzd29yZFZpc2liaWxpdHkgPSAoKSA9PlxyXG4gICAgc2V0U2hvd1Bhc3N3b3JkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVdyYXBwZXI+XHJcbiAgICAgIDxGaWVsZCBuYW1lPXtuYW1lfSB2YWxpZGF0ZT17dmFsaWRhdGlvbn0+XHJcbiAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcclxuICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICBpc0ludmFsaWQ9e2Zvcm0uZXJyb3JzW25hbWVdICYmIGZvcm0udG91Y2hlZFtuYW1lXX1cclxuICAgICAgICAgICAgaXNSZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvRm9ybUxhYmVsPlxyXG5cclxuICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICAgIGlkPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0UmlnaHRFbGVtZW50IHdpZHRoPVwiM3JlbVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBvbkNsaWNrPXtoYW5kbGVQYXNzd29yZFZpc2liaWxpdHl9PlxyXG4gICAgICAgICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtWaWV3T2ZmSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBhcz17Vmlld09mZkljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0lucHV0UmlnaHRFbGVtZW50PlxyXG4gICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9yc1tuYW1lXX08L0Zvcm1FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRmllbGQ+XHJcbiAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlR29vZ2xlTG9naW5NdXRhdGlvbixcclxuICB1c2VSZWdpc3Rlck11dGF0aW9uLFxyXG59IGZyb20gXCIuLi9ncmFwaHFsL2dlbmVyYXRlZFwiO1xyXG5pbXBvcnQgeyBHb29nbGVJY29uIH0gZnJvbSBcIi4uL3N0eWxlcy9pY29uc1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgR29vZ2xlTG9naW5CdXR0b24gPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3sgZmV0Y2hpbmcgfSwgZ29vZ2xlTG9naW5dID0gdXNlR29vZ2xlTG9naW5NdXRhdGlvbigpO1xyXG5cclxuICBjb25zdCByZXNwb25zZUdvb2dsZSA9IGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGF3YWl0IGdvb2dsZUxvZ2luKHtcclxuICAgICAgICBlbWFpbDogcmVzcG9uc2UucHJvZmlsZU9iai5lbWFpbCxcclxuICAgICAgICB1c2VybmFtZTogcmVzcG9uc2UucHJvZmlsZU9iai5naXZlbk5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiZ29vZ2xlQXV0aFwiLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8R29vZ2xlTG9naW5cclxuICAgICAgY2xpZW50SWQ9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9DTElFTlRfSUR9XHJcbiAgICAgIGJ1dHRvblRleHQ9XCJMb2dpblwiXHJcbiAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgIGNvb2tpZVBvbGljeT17XCJzaW5nbGVfaG9zdF9vcmlnaW5cIn1cclxuICAgICAgcmVuZGVyPXsocmVuZGVyUHJvcHMpID0+IChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3JlbmRlclByb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgc2l6ZT1cInhsXCJcclxuICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJ3aGl0ZVdpdGhCb3JkZXJcIlxyXG4gICAgICAgICAgbGVmdEljb249ezxHb29nbGVJY29uIC8+fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEluaWNpYSBzZXNpw7NuIGNvbiBHb29nbGVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nLCBMaW5rLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBHb29nbGVMb2dpbkJ1dHRvbiB9IGZyb20gXCIuLi9Hb29nbGVMb2dpbkJ1dHRvblwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcclxuICB0eXBlOiBcImxvZ2luXCIgfCBcInNpZ251cFwiO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aEZvcm1MYXlvdXQgPSAoeyB0aXRsZSwgY2hpbGRyZW4sIHR5cGUgfTogUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICBoPVwiMTAwdmhcIlxyXG4gICAgICBtaW5XPVwiMzAwcHhcIlxyXG4gICAgICBtaW5IPVwiNzcwcHhcIlxyXG4gICAgICBwPXtbXCIwXCIsIFwiMFwiLCBcIjBcIiwgXCIzZW1cIiwgXCIzZW1cIl19XHJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICA+XHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgekluZGV4PXswfVxyXG4gICAgICAgIG9yZGVyPXsxfVxyXG4gICAgICAgIGg9XCIxMDAlXCJcclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiMTAwJVwiLCBcIjEwMCVcIiwgXCI1MCVcIiwgXCI2MCVcIl19XHJcbiAgICAgICAgbWluVz1cIjMwMHB4XCJcclxuICAgICAgICBwPVwiMmVtXCJcclxuICAgICAgICBiZ0ltYWdlPVwidXJsKCcvaW1hZ2VzL2F1aHRzY3JlZW4uanBnJylcIlxyXG4gICAgICAgIGJnU2l6ZT1cImNvdmVyXCJcclxuICAgICAgICBiZ1Bvcz1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtZW5kXCJcclxuICAgICAgICBwb3NpdGlvbj17W1wiYWJzb2x1dGVcIiwgXCJhYnNvbHV0ZVwiLCBcImFic29sdXRlXCIsIFwic3RhdGljXCIsIFwic3RhdGljXCJdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWRpbmcgdGV4dENvbG9yPVwiI2ZmZmZmZlwiPkJpZW52ZW5pZG88L0hlYWRpbmc+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBoPVwiOTB2aFwiXHJcbiAgICAgICAgbWluSD1cIjc3MHB4XCJcclxuICAgICAgICB3PXtbXCI5MCVcIiwgXCI5MCVcIiwgXCI5MCVcIiwgXCI1MCVcIiwgXCI0MCVcIl19XHJcbiAgICAgICAgYmdDb2xvcj1cIiNmZmZmZmZcIlxyXG4gICAgICAgIHpJbmRleD17MX1cclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IG09e1tcIjFlbVwiLCBcIjZlbVwiLCBcIjdlbVwiLCBcIjZlbVwiLCBcIjZlbVwiXX0+XHJcbiAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cIjIuNWVtXCIgbWI9XCIxZW1cIiBsZXR0ZXJTcGFjaW5nPVwid2lkZXJcIj5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPEJveCBtdD1cIjAuNWVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3R5cGUgPT09IFwibG9naW5cIiA/IFwiL2F1dGgvcmVnaXN0ZXJcIiA6IFwiL2F1dGgvbG9naW5cIn0+XHJcbiAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtYWxsVGV4dFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge3R5cGUgPT09IFwibG9naW5cIiA/IFwiQ3JlYXIgY3VlbnRhXCIgOiBcIkluaWNpYXIgc2VzacOzblwifVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IG10PVwiMmVtXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbWFsbFRleHRcIj5vPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBtdD1cIjJlbVwiPlxyXG4gICAgICAgICAgICA8R29vZ2xlTG9naW5CdXR0b24gLz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCB2YWxpZGF0ZVVzZXJuYW1lID0gKHZhbHVlPzogc3RyaW5nKTogU3RyaW5nID0+IHtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gXCJFbCB1c3VhcmlvIGVzIHJlcXVlcmlkb1wiO1xyXG4gIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoIDwgMykge1xyXG4gICAgcmV0dXJuIFwiRWwgdXN1YXJpbyBkZWJlIHRlbmVyIGFsIG1lbm9zIDMgbGV0cmFzXCI7XHJcbiAgfVxyXG4gIHJldHVybjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUVtYWlsID0gKHZhbHVlPzogc3RyaW5nKTogU3RyaW5nID0+IHtcclxuICBjb25zdCByZWcgPSBSZWdFeHAoL15bXFx3LVxcLl0rQChbXFx3LV0rXFwuKStbXFx3LV17Miw0fSQvZyk7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFwiRWwgZW1haWwgZXMgcmVxdWVyaWRvXCI7XHJcbiAgfSBlbHNlIGlmICghcmVnLnRlc3QodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gXCJJbnNlcnRhIHVuIGVtYWlsIGNvcnJlY3RvXCI7XHJcbiAgfVxyXG4gIHJldHVybjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVBhc3N3b3JkID0gKHZhbHVlPzogc3RyaW5nKTogU3RyaW5nID0+IHtcclxuICBjb25zdCByZWcgPSBSZWdFeHAoL14oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbYS16QS1aXSkuezgsfSQvZ20pO1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHJldHVybiBcIkxhIGNvbnRyYXNlw7FhIGVzIHJlcXVlcmlkYVwiO1xyXG4gIH0gZWxzZSBpZiAoIXJlZy50ZXN0KHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIGBMYSBjb250cmFzZcOxYSBkZWJlIGVuZXIgdW5hIGxvbmdpdHVkIGRlIGFsIG1lbm9zIDggY2FyYWN0ZXJlcy5cclxuICAgIENvbnRlbnRlciB1biBuw7ptZXJvLlxcblxyXG4gICAgQ29udGVuZXIgdW4gc8OtbWJvbG8uXFxuXHJcbiAgICBDb250ZW5lciB1bmEgbWF5w7pzdWNsYS5cXG5cclxuICAgIGA7XHJcbiAgfVxyXG4gIHJldHVybjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVBhc3N3b3JkUmVwZWF0ID0gKFxyXG4gIHBhc3N3b3JkOiBzdHJpbmcsXHJcbiAgdmFsdWU/OiBzdHJpbmdcclxuKTogU3RyaW5nID0+IHtcclxuICBjb25zb2xlLmxvZyhwYXNzd29yZCwgdmFsdWUpO1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHJldHVybiBcIlJlcHRpZSBsYSBjb250cmFzZcOxYVwiO1xyXG4gIH0gZWxzZSBpZiAodmFsdWUgIT09IHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gXCJMYXMgY29udHJhc2XDsWFzIG5vIGNvaW5jaWRlblwiO1xyXG4gIH1cclxuICByZXR1cm47XHJcbn07XHJcbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0ICogYXMgVXJxbCBmcm9tICd1cnFsJztcbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gVCB8IG51bGw7XG5leHBvcnQgdHlwZSBFeGFjdDxUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSB9O1xuZXhwb3J0IHR5cGUgTWFrZU9wdGlvbmFsPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS10/OiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBNYWtlTWF5YmU8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXTogTWF5YmU8VFtTdWJLZXldPiB9O1xuZXhwb3J0IHR5cGUgT21pdDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+O1xuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBRdWVyeSA9IHtcbiAgX190eXBlbmFtZT86ICdRdWVyeSc7XG4gIHJlZnJlc2hUb2tlbjogVG9rZW5SZXNwb25zZTtcbn07XG5cbmV4cG9ydCB0eXBlIFRva2VuUmVzcG9uc2UgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVG9rZW5SZXNwb25zZSc7XG4gIHN1Y2Nlc3M6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgYWNjZXNzVG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgTXV0YXRpb24gPSB7XG4gIF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nO1xuICByZXZva2VSZWZyZXNoVG9rZW5Gb3JVc2VyOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIHJlZ2lzdGVyOiBVc2VyVG9rZW47XG4gIGxvZ2luOiBVc2VyVG9rZW47XG4gIGdvb2dsZUxvZ2luOiBVc2VyVG9rZW47XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmV2b2tlUmVmcmVzaFRva2VuRm9yVXNlckFyZ3MgPSB7XG4gIHVzZXJJZDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmVnaXN0ZXJBcmdzID0ge1xuICB1c2VybmFtZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZW1haWw/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25Mb2dpbkFyZ3MgPSB7XG4gIHVzZXJuYW1lPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBlbWFpbD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkdvb2dsZUxvZ2luQXJncyA9IHtcbiAgdXNlcm5hbWU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGVtYWlsPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyVG9rZW4gPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlclRva2VuJztcbiAgdG9rZW4/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGVycm9ycz86IE1heWJlPEFycmF5PFVzZXJFcnJvcj4+O1xufTtcblxuZXhwb3J0IHR5cGUgVXNlckVycm9yID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXJFcnJvcic7XG4gIGZpZWxkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbWVzc2FnZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBHb29nbGVMb2dpbk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZW1haWw/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIEdvb2dsZUxvZ2luTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgZ29vZ2xlTG9naW46IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclRva2VuJyB9XG4gICAgJiBQaWNrPFVzZXJUb2tlbiwgJ3Rva2VuJz5cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJFcnJvcicgfVxuICAgICAgJiBQaWNrPFVzZXJFcnJvciwgJ2ZpZWxkJyB8ICdtZXNzYWdlJz5cbiAgICApPj4gfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBlbWFpbD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBsb2dpbjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyVG9rZW4nIH1cbiAgICAmIFBpY2s8VXNlclRva2VuLCAndG9rZW4nPlxuICAgICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVXNlckVycm9yJyB9XG4gICAgICAmIFBpY2s8VXNlckVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdXNlcm5hbWU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGVtYWlsPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHJlZ2lzdGVyOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJUb2tlbicgfVxuICAgICYgUGljazxVc2VyVG9rZW4sICd0b2tlbic+XG4gICAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyRXJyb3InIH1cbiAgICAgICYgUGljazxVc2VyRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4gICAgKT4+IH1cbiAgKSB9XG4pO1xuXG5cbmV4cG9ydCBjb25zdCBHb29nbGVMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIEdvb2dsZUxvZ2luKCR1c2VybmFtZTogU3RyaW5nLCAkZW1haWw6IFN0cmluZywgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGdvb2dsZUxvZ2luKHVzZXJuYW1lOiAkdXNlcm5hbWUsIGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICB0b2tlblxuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHb29nbGVMb2dpbk11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxHb29nbGVMb2dpbk11dGF0aW9uLCBHb29nbGVMb2dpbk11dGF0aW9uVmFyaWFibGVzPihHb29nbGVMb2dpbkRvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgTG9naW5Eb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dpbigkdXNlcm5hbWU6IFN0cmluZywgJGVtYWlsOiBTdHJpbmcsICRwYXNzd29yZDogU3RyaW5nISkge1xuICBsb2dpbih1c2VybmFtZTogJHVzZXJuYW1lLCBlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgdG9rZW5cbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmcsICRlbWFpbDogU3RyaW5nLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgcmVnaXN0ZXIodXNlcm5hbWU6ICR1c2VybmFtZSwgZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgIHRva2VuXG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+KFJlZ2lzdGVyRG9jdW1lbnQpO1xufTsiLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgTGluaywgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIEZvcm1paywgRm9ybWlrSGVscGVycyB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tIFwibmV4dC11cnFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1JbnB1dCwgRm9ybUlucHV0UGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb3JtSW5wdXRcIjtcclxuaW1wb3J0IHsgQXV0aEZvcm1MYXlvdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL2F1dGhGb3JtTGF5b3V0XCI7XHJcbmltcG9ydCB7IHZhbGlkYXRlUGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy92YWxpZGF0aW9ucy92YWxpZGF0ZVVzZXJuYW1lXCI7XHJcbmltcG9ydCB7IHVzZUxvZ2luTXV0YXRpb24gfSBmcm9tIFwiLi4vLi4vZ3JhcGhxbC9nZW5lcmF0ZWRcIjtcclxuaW1wb3J0IHsgY2xpZW50T3B0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlscy9jcmVhdGVDbGllbnRcIjtcclxuXHJcbmludGVyZmFjZSBSZWdpc3RlclZhbHVlcyB7XHJcbiAgdXNlcm5hbWVPckVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3sgZmV0Y2hpbmcgfSwgbG9naW5dID0gdXNlTG9naW5NdXRhdGlvbigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybWlrXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICB1c2VybmFtZU9yRW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIH19XHJcbiAgICAgIG9uU3VibWl0PXthc3luYyAoXHJcbiAgICAgICAgdmFsdWVzOiBSZWdpc3RlclZhbHVlcyxcclxuICAgICAgICB7IHNldFN1Ym1pdHRpbmcgfTogRm9ybWlrSGVscGVyczxSZWdpc3RlclZhbHVlcz5cclxuICAgICAgKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGF3YWl0IGxvZ2luKHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHZhbHVlcy51c2VybmFtZU9yRW1haWwsXHJcbiAgICAgICAgICAgIGVtYWlsOiB2YWx1ZXMudXNlcm5hbWVPckVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHsoeyBpc1N1Ym1pdHRpbmcsIHZhbHVlcyB9KSA9PiAoXHJcbiAgICAgICAgPEF1dGhGb3JtTGF5b3V0IHRpdGxlPVwiSW5pY2lhciBzZXNpw7NuXCIgdHlwZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZU9yRW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlVzdWFyaW8gbyBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNlcnRhIHR1IHVzdWFyaW8gbyBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybUlucHV0UGFzc3dvcmRcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNlcnRhIHR1IGNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICB2YWxpZGF0aW9uPXt2YWxpZGF0ZVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEJveCB3PVwiMTAwJVwiIHRleHRBbGlnbj1cInJpZ2h0XCIgbWI9XCIxZW1cIj5cclxuICAgICAgICAgICAgICA8TGluaz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbWFsbFRleHRcIj57XCJPbHZpZGFzdGUgdHUgY29udHJhc2XDsWE/XCJ9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInhsXCJcclxuICAgICAgICAgICAgICBtdD17NH1cclxuICAgICAgICAgICAgICBpc0Z1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSW5pY2lhciBzZXNpw7NuXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvQXV0aEZvcm1MYXlvdXQ+XHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm1paz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY2xpZW50T3B0aW9ucywgeyBzc3I6IGZhbHNlIH0pKExvZ2luKTtcclxuIiwiaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHb29nbGVJY29uID0gKHByb3BzKSA9PiAoXHJcbiAgPEljb24gdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgey4uLnByb3BzfT5cclxuICAgIDxwYXRoXHJcbiAgICAgIGZpbGw9XCIjRkJCQjAwXCJcclxuICAgICAgZD1cIk0xMTMuNDcsMzA5LjQwOEw5NS42NDgsMzc1Ljk0bC02NS4xMzksMS4zNzhDMTEuMDQyLDM0MS4yMTEsMCwyOTkuOSwwLDI1NlxyXG5cdGMwLTQyLjQ1MSwxMC4zMjQtODIuNDgzLDI4LjYyNC0xMTcuNzMyaDAuMDE0bDU3Ljk5MiwxMC42MzJsMjUuNDA0LDU3LjY0NGMtNS4zMTcsMTUuNTAxLTguMjE1LDMyLjE0MS04LjIxNSw0OS40NTZcclxuXHRDMTAzLjgyMSwyNzQuNzkyLDEwNy4yMjUsMjkyLjc5NywxMTMuNDcsMzA5LjQwOHpcIlxyXG4gICAgLz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGZpbGw9XCIjNTE4RUY4XCJcclxuICAgICAgZD1cIk01MDcuNTI3LDIwOC4xNzZDNTEwLjQ2NywyMjMuNjYyLDUxMiwyMzkuNjU1LDUxMiwyNTZjMCwxOC4zMjgtMS45MjcsMzYuMjA2LTUuNTk4LDUzLjQ1MVxyXG5cdGMtMTIuNDYyLDU4LjY4My00NS4wMjUsMTA5LjkyNS05MC4xMzQsMTQ2LjE4N2wtMC4wMTQtMC4wMTRsLTczLjA0NC0zLjcyN2wtMTAuMzM4LTY0LjUzNVxyXG5cdGMyOS45MzItMTcuNTU0LDUzLjMyNC00NS4wMjUsNjUuNjQ2LTc3LjkxMWgtMTM2Ljg5VjIwOC4xNzZoMTM4Ljg4N0w1MDcuNTI3LDIwOC4xNzZMNTA3LjUyNywyMDguMTc2elwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD1cIiMyOEI0NDZcIlxyXG4gICAgICBkPVwiTTQxNi4yNTMsNDU1LjYyNGwwLjAxNCwwLjAxNEMzNzIuMzk2LDQ5MC45MDEsMzE2LjY2Niw1MTIsMjU2LDUxMlxyXG5cdGMtOTcuNDkxLDAtMTgyLjI1Mi01NC40OTEtMjI1LjQ5MS0xMzQuNjgxbDgyLjk2MS02Ny45MWMyMS42MTksNTcuNjk4LDc3LjI3OCw5OC43NzEsMTQyLjUzLDk4Ljc3MVxyXG5cdGMyOC4wNDcsMCw1NC4zMjMtNy41ODIsNzYuODctMjAuODE4TDQxNi4yNTMsNDU1LjYyNHpcIlxyXG4gICAgLz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGZpbGw9XCIjRjE0MzM2XCJcclxuICAgICAgZD1cIk00MTkuNDA0LDU4LjkzNmwtODIuOTMzLDY3Ljg5NmMtMjMuMzM1LTE0LjU4Ni01MC45MTktMjMuMDEyLTgwLjQ3MS0yMy4wMTJcclxuXHRjLTY2LjcyOSwwLTEyMy40MjksNDIuOTU3LTE0My45NjUsMTAyLjcyNGwtODMuMzk3LTY4LjI3NmgtMC4wMTRDNzEuMjMsNTYuMTIzLDE1Ny4wNiwwLDI1NiwwXHJcblx0QzMxOC4xMTUsMCwzNzUuMDY4LDIyLjEyNiw0MTkuNDA0LDU4LjkzNnpcIlxyXG4gICAgLz5cclxuICA8L0ljb24+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgRmFjZWJvb2tJY29uID0gKHByb3BzKSA9PiAoXHJcbiAgPEljb24gdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgey4uLnByb3BzfT5cclxuICAgIDxwYXRoXHJcbiAgICAgIGZpbGw9XCIjM2I1OTk5XCJcclxuICAgICAgZD1cIk0zODQsMTc2aC05NnYtNjRjMC0xNy42NjQsMTQuMzM2LTMyLDMyLTMyaDMyVjBoLTY0bDAsMGMtNTMuMDI0LDAtOTYsNDIuOTc2LTk2LDk2djgwaC02NHY4MGg2NHYyNTZoOTZWMjU2aDY0TDM4NCwxNzZ6XCJcclxuICAgIC8+XHJcbiAgPC9JY29uPlxyXG4pO1xyXG4iLCJpbXBvcnQge1xyXG4gIGNhY2hlRXhjaGFuZ2UsXHJcbiAgY3JlYXRlQ2xpZW50LFxyXG4gIGRlZHVwRXhjaGFuZ2UsXHJcbiAgZmV0Y2hFeGNoYW5nZSxcclxufSBmcm9tIFwidXJxbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsaWVudE9wdGlvbnMgPSAoc3NyRXhjaGFuZ2U6IGFueSkgPT4gKHtcclxuICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIixcclxuICBleGhhbmdlczogW2RlZHVwRXhjaGFuZ2UsIGNhY2hlRXhjaGFuZ2UsIHNzckV4Y2hhbmdlLCBmZXRjaEV4Y2hhbmdlXSxcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC11cnFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1sb2dpblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9