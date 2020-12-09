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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/register.tsx");
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

/***/ "./pages/auth/register.tsx":
/*!*********************************!*\
  !*** ./pages/auth/register.tsx ***!
  \*********************************/
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

var _jsxFileName = "/mnt/c/Users/Daniel/Code/Projects/GraqphQlNextJsAuthBoilerplate/web/pages/auth/register.tsx";











const Register = () => {
  const [{
    fetching
  }, register] = Object(_graphql_generated__WEBPACK_IMPORTED_MODULE_9__["useRegisterMutation"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const sendData = () => {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      username: "",
      email: "",
      password: "",
      repeat_password: ""
    },
    onSubmit: async (values, {
      setSubmitting
    }) => {
      try {
        await register({
          username: values.username,
          email: values.email,
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
      title: "Registro",
      type: "signup",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FormInput__WEBPACK_IMPORTED_MODULE_6__["FormInput"], {
          name: "username",
          type: "text",
          label: "Usuario",
          placeholder: "Inserta tu usuario",
          required: true,
          validation: _components_validations_validateUsername__WEBPACK_IMPORTED_MODULE_8__["validateUsername"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FormInput__WEBPACK_IMPORTED_MODULE_6__["FormInput"], {
          name: "email",
          type: "text",
          label: "Email",
          placeholder: "Inserta tu email",
          required: true,
          validation: _components_validations_validateUsername__WEBPACK_IMPORTED_MODULE_8__["validateEmail"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
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
          lineNumber: 72,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FormInput__WEBPACK_IMPORTED_MODULE_6__["FormInputPassword"], {
          name: "repeat_password",
          type: "password",
          label: "Reptetir contrase\xF1a",
          placeholder: "Repite tu contrase\xF1a",
          required: true,
          validation: () => Object(_components_validations_validateUsername__WEBPACK_IMPORTED_MODULE_8__["validatePasswordRepeat"])(values.password, values.repeat_password)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          size: "xl",
          mt: 4,
          isFullWidth: true,
          isLoading: isSubmitting,
          type: "submit",
          children: "Crear cuenta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_3__["withUrqlClient"])(_utils_createClient__WEBPACK_IMPORTED_MODULE_10__["clientOptions"], {
  ssr: false
})(Register));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR29vZ2xlTG9naW5CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0cy9hdXRoRm9ybUxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92YWxpZGF0aW9ucy92YWxpZGF0ZVVzZXJuYW1lLnRzIiwid2VicGFjazovLy8uL2dyYXBocWwvZ2VuZXJhdGVkLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL3JlZ2lzdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaWNvbnMudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NyZWF0ZUNsaWVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC11cnFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1sb2dpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVycWxcIiJdLCJuYW1lcyI6WyJGb3JtV3JhcHBlciIsImNoaWxkcmVuIiwiRm9ybUlucHV0IiwibmFtZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJ2YWxpZGF0aW9uIiwiZmllbGQiLCJmb3JtIiwiZXJyb3JzIiwidG91Y2hlZCIsIkZvcm1JbnB1dFBhc3N3b3JkIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwidXNlU3RhdGUiLCJoYW5kbGVQYXNzd29yZFZpc2liaWxpdHkiLCJwcmV2U3RhdGUiLCJWaWV3T2ZmSWNvbiIsIkdvb2dsZUxvZ2luQnV0dG9uIiwicHJvcHMiLCJmZXRjaGluZyIsImdvb2dsZUxvZ2luIiwidXNlR29vZ2xlTG9naW5NdXRhdGlvbiIsInJlc3BvbnNlR29vZ2xlIiwicmVzcG9uc2UiLCJlbWFpbCIsInByb2ZpbGVPYmoiLCJ1c2VybmFtZSIsImdpdmVuTmFtZSIsInBhc3N3b3JkIiwiZXJyb3IiLCJwcm9jZXNzIiwicmVuZGVyUHJvcHMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJBdXRoRm9ybUxheW91dCIsInRpdGxlIiwidmFsaWRhdGVVc2VybmFtZSIsInZhbHVlIiwibGVuZ3RoIiwidmFsaWRhdGVFbWFpbCIsInJlZyIsIlJlZ0V4cCIsInRlc3QiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwidmFsaWRhdGVQYXNzd29yZFJlcGVhdCIsImNvbnNvbGUiLCJsb2ciLCJHb29nbGVMb2dpbkRvY3VtZW50IiwiZ3FsIiwiVXJxbCIsIkxvZ2luRG9jdW1lbnQiLCJ1c2VMb2dpbk11dGF0aW9uIiwiUmVnaXN0ZXJEb2N1bWVudCIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJSZWdpc3RlciIsInJlZ2lzdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwic2VuZERhdGEiLCJyZXBlYXRfcGFzc3dvcmQiLCJ2YWx1ZXMiLCJzZXRTdWJtaXR0aW5nIiwicHVzaCIsImlzU3VibWl0dGluZyIsIndpdGhVcnFsQ2xpZW50IiwiY2xpZW50T3B0aW9ucyIsInNzciIsIkdvb2dsZUljb24iLCJGYWNlYm9va0ljb24iLCJzc3JFeGNoYW5nZSIsInVybCIsImV4aGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJmZXRjaEV4Y2hhbmdlIl0sIm1hcHBp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O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvYXV0aC9yZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXV0aC9yZWdpc3Rlci50c3hcIik7XG4iLCJpbXBvcnQge1xyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1MYWJlbCxcclxuICBJbnB1dCxcclxuICBGb3JtRXJyb3JNZXNzYWdlLFxyXG4gIElucHV0R3JvdXAsXHJcbiAgQnV0dG9uLFxyXG4gIEljb24sXHJcbiAgSW5wdXRSaWdodEVsZW1lbnQsXHJcbiAgQm94LFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVmlld0ljb24sIFZpZXdPZmZJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcmVxdWlyZWQ6IGJvb2xlYW47XHJcbiAgdmFsaWRhdGlvbj86IGFueTtcclxufVxyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiA8Qm94IG1iPXtcIjFlbVwifT57Y2hpbGRyZW59PC9Cb3g+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1JbnB1dCA9ICh7XHJcbiAgbmFtZSxcclxuICBsYWJlbCxcclxuICBwbGFjZWhvbGRlcixcclxuICB0eXBlLFxyXG4gIHJlcXVpcmVkLFxyXG4gIHZhbGlkYXRpb24sXHJcbn06IFByb3BzKSA9PiAoXHJcbiAgPEZvcm1XcmFwcGVyPlxyXG4gICAgPEZpZWxkIG5hbWU9e25hbWV9IHZhbGlkYXRlPXt2YWxpZGF0aW9ufT5cclxuICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcclxuICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgIGlzSW52YWxpZD17Zm9ybS5lcnJvcnNbbmFtZV0gJiYgZm9ybS50b3VjaGVkW25hbWVdfVxyXG4gICAgICAgICAgaXNSZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPXtuYW1lfT57bGFiZWx9PC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXQgey4uLmZpZWxkfSB0eXBlPXt0eXBlfSBpZD17bmFtZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxyXG4gICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2Zvcm0uZXJyb3JzW25hbWVdfTwvRm9ybUVycm9yTWVzc2FnZT5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICApfVxyXG4gICAgPC9GaWVsZD5cclxuICA8L0Zvcm1XcmFwcGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1JbnB1dFBhc3N3b3JkID0gKHtcclxuICBuYW1lLFxyXG4gIGxhYmVsLFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIHR5cGUsXHJcbiAgcmVxdWlyZWQsXHJcbiAgdmFsaWRhdGlvbixcclxufTogUHJvcHMpID0+IHtcclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkVmlzaWJpbGl0eSA9ICgpID0+XHJcbiAgICBzZXRTaG93UGFzc3dvcmQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtV3JhcHBlcj5cclxuICAgICAgPEZpZWxkIG5hbWU9e25hbWV9IHZhbGlkYXRlPXt2YWxpZGF0aW9ufT5cclxuICAgICAgICB7KHsgZmllbGQsIGZvcm0gfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgIGlzSW52YWxpZD17Zm9ybS5lcnJvcnNbbmFtZV0gJiYgZm9ybS50b3VjaGVkW25hbWVdfVxyXG4gICAgICAgICAgICBpc1JlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPXtuYW1lfT57bGFiZWx9PC9Gb3JtTGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgICAgaWQ9e25hbWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXRSaWdodEVsZW1lbnQgd2lkdGg9XCIzcmVtXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIG9uQ2xpY2s9e2hhbmRsZVBhc3N3b3JkVmlzaWJpbGl0eX0+XHJcbiAgICAgICAgICAgICAgICAgIHtzaG93UGFzc3dvcmQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gYXM9e1ZpZXdPZmZJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtWaWV3T2ZmSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvSW5wdXRSaWdodEVsZW1lbnQ+XHJcbiAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2Zvcm0uZXJyb3JzW25hbWVdfTwvRm9ybUVycm9yTWVzc2FnZT5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9GaWVsZD5cclxuICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gXCJyZWFjdC1nb29nbGUtbG9naW5cIjtcclxuaW1wb3J0IHtcclxuICB1c2VHb29nbGVMb2dpbk11dGF0aW9uLFxyXG4gIHVzZVJlZ2lzdGVyTXV0YXRpb24sXHJcbn0gZnJvbSBcIi4uL2dyYXBocWwvZ2VuZXJhdGVkXCI7XHJcbmltcG9ydCB7IEdvb2dsZUljb24gfSBmcm9tIFwiLi4vc3R5bGVzL2ljb25zXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge31cclxuXHJcbmV4cG9ydCBjb25zdCBHb29nbGVMb2dpbkJ1dHRvbiA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCBbeyBmZXRjaGluZyB9LCBnb29nbGVMb2dpbl0gPSB1c2VHb29nbGVMb2dpbk11dGF0aW9uKCk7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlR29vZ2xlID0gYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgZ29vZ2xlTG9naW4oe1xyXG4gICAgICAgIGVtYWlsOiByZXNwb25zZS5wcm9maWxlT2JqLmVtYWlsLFxyXG4gICAgICAgIHVzZXJuYW1lOiByZXNwb25zZS5wcm9maWxlT2JqLmdpdmVuTmFtZSxcclxuICAgICAgICBwYXNzd29yZDogXCJnb29nbGVBdXRoXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxHb29nbGVMb2dpblxyXG4gICAgICBjbGllbnRJZD17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0NMSUVOVF9JRH1cclxuICAgICAgYnV0dG9uVGV4dD1cIkxvZ2luXCJcclxuICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgY29va2llUG9saWN5PXtcInNpbmdsZV9ob3N0X29yaWdpblwifVxyXG4gICAgICByZW5kZXI9eyhyZW5kZXJQcm9wcykgPT4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgICBkaXNhYmxlZD17cmVuZGVyUHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgICBzaXplPVwieGxcIlxyXG4gICAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIndoaXRlV2l0aEJvcmRlclwiXHJcbiAgICAgICAgICBsZWZ0SWNvbj17PEdvb2dsZUljb24gLz59XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgSW5pY2lhIHNlc2nDs24gY29uIEdvb2dsZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcsIExpbmssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdvb2dsZUxvZ2luQnV0dG9uIH0gZnJvbSBcIi4uL0dvb2dsZUxvZ2luQnV0dG9uXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xyXG4gIHR5cGU6IFwibG9naW5cIiB8IFwic2lnbnVwXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoRm9ybUxheW91dCA9ICh7IHRpdGxlLCBjaGlsZHJlbiwgdHlwZSB9OiBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICB3PVwiMTAwJVwiXHJcbiAgICAgIGg9XCIxMDB2aFwiXHJcbiAgICAgIG1pblc9XCIzMDBweFwiXHJcbiAgICAgIG1pbkg9XCI3NzBweFwiXHJcbiAgICAgIHA9e1tcIjBcIiwgXCIwXCIsIFwiMFwiLCBcIjNlbVwiLCBcIjNlbVwiXX1cclxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgID5cclxuICAgICAgPEZsZXhcclxuICAgICAgICB6SW5kZXg9ezB9XHJcbiAgICAgICAgb3JkZXI9ezF9XHJcbiAgICAgICAgaD1cIjEwMCVcIlxyXG4gICAgICAgIHc9e1tcIjEwMCVcIiwgXCIxMDAlXCIsIFwiMTAwJVwiLCBcIjUwJVwiLCBcIjYwJVwiXX1cclxuICAgICAgICBtaW5XPVwiMzAwcHhcIlxyXG4gICAgICAgIHA9XCIyZW1cIlxyXG4gICAgICAgIGJnSW1hZ2U9XCJ1cmwoJy9pbWFnZXMvYXVodHNjcmVlbi5qcGcnKVwiXHJcbiAgICAgICAgYmdTaXplPVwiY292ZXJcIlxyXG4gICAgICAgIGJnUG9zPVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIlxyXG4gICAgICAgIHBvc2l0aW9uPXtbXCJhYnNvbHV0ZVwiLCBcImFic29sdXRlXCIsIFwiYWJzb2x1dGVcIiwgXCJzdGF0aWNcIiwgXCJzdGF0aWNcIl19XHJcbiAgICAgID5cclxuICAgICAgICA8SGVhZGluZyB0ZXh0Q29sb3I9XCIjZmZmZmZmXCI+QmllbnZlbmlkbzwvSGVhZGluZz5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGg9XCI5MHZoXCJcclxuICAgICAgICBtaW5IPVwiNzcwcHhcIlxyXG4gICAgICAgIHc9e1tcIjkwJVwiLCBcIjkwJVwiLCBcIjkwJVwiLCBcIjUwJVwiLCBcIjQwJVwiXX1cclxuICAgICAgICBiZ0NvbG9yPVwiI2ZmZmZmZlwiXHJcbiAgICAgICAgekluZGV4PXsxfVxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggbT17W1wiMWVtXCIsIFwiNmVtXCIsIFwiN2VtXCIsIFwiNmVtXCIsIFwiNmVtXCJdfT5cclxuICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwiMi41ZW1cIiBtYj1cIjFlbVwiIGxldHRlclNwYWNpbmc9XCJ3aWRlclwiPlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8Qm94IG10PVwiMC41ZW1cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17dHlwZSA9PT0gXCJsb2dpblwiID8gXCIvYXV0aC9yZWdpc3RlclwiIDogXCIvYXV0aC9sb2dpblwifT5cclxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21hbGxUZXh0XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7dHlwZSA9PT0gXCJsb2dpblwiID8gXCJDcmVhciBjdWVudGFcIiA6IFwiSW5pY2lhciBzZXNpw7NuXCJ9XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggbXQ9XCIyZW1cIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtYWxsVGV4dFwiPm88L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIG10PVwiMmVtXCI+XHJcbiAgICAgICAgICAgIDxHb29nbGVMb2dpbkJ1dHRvbiAvPlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHZhbGlkYXRlVXNlcm5hbWUgPSAodmFsdWU/OiBzdHJpbmcpOiBTdHJpbmcgPT4ge1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHJldHVybiBcIkVsIHVzdWFyaW8gZXMgcmVxdWVyaWRvXCI7XHJcbiAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPCAzKSB7XHJcbiAgICByZXR1cm4gXCJFbCB1c3VhcmlvIGRlYmUgdGVuZXIgYWwgbWVub3MgMyBsZXRyYXNcIjtcclxuICB9XHJcbiAgcmV0dXJuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlRW1haWwgPSAodmFsdWU/OiBzdHJpbmcpOiBTdHJpbmcgPT4ge1xyXG4gIGNvbnN0IHJlZyA9IFJlZ0V4cCgvXltcXHctXFwuXStAKFtcXHctXStcXC4pK1tcXHctXXsyLDR9JC9nKTtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gXCJFbCBlbWFpbCBlcyByZXF1ZXJpZG9cIjtcclxuICB9IGVsc2UgaWYgKCFyZWcudGVzdCh2YWx1ZSkpIHtcclxuICAgIHJldHVybiBcIkluc2VydGEgdW4gZW1haWwgY29ycmVjdG9cIjtcclxuICB9XHJcbiAgcmV0dXJuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlUGFzc3dvcmQgPSAodmFsdWU/OiBzdHJpbmcpOiBTdHJpbmcgPT4ge1xyXG4gIGNvbnN0IHJlZyA9IFJlZ0V4cCgvXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlthLXpBLVpdKS57OCx9JC9nbSk7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFwiTGEgY29udHJhc2XDsWEgZXMgcmVxdWVyaWRhXCI7XHJcbiAgfSBlbHNlIGlmICghcmVnLnRlc3QodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gYExhIGNvbnRyYXNlw7FhIGRlYmUgZW5lciB1bmEgbG9uZ2l0dWQgZGUgYWwgbWVub3MgOCBjYXJhY3RlcmVzLlxyXG4gICAgQ29udGVudGVyIHVuIG7Dum1lcm8uXFxuXHJcbiAgICBDb250ZW5lciB1biBzw61tYm9sby5cXG5cclxuICAgIENvbnRlbmVyIHVuYSBtYXnDunN1Y2xhLlxcblxyXG4gICAgYDtcclxuICB9XHJcbiAgcmV0dXJuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlUGFzc3dvcmRSZXBlYXQgPSAoXHJcbiAgcGFzc3dvcmQ6IHN0cmluZyxcclxuICB2YWx1ZT86IHN0cmluZ1xyXG4pOiBTdHJpbmcgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBhc3N3b3JkLCB2YWx1ZSk7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFwiUmVwdGllIGxhIGNvbnRyYXNlw7FhXCI7XHJcbiAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiBcIkxhcyBjb250cmFzZcOxYXMgbm8gY29pbmNpZGVuXCI7XHJcbiAgfVxyXG4gIHJldHVybjtcclxufTtcclxuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgKiBhcyBVcnFsIGZyb20gJ3VycWwnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBNYWtlT3B0aW9uYWw8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXT86IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE1ha2VNYXliZTxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdOiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBPbWl0PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj47XG4vKiogQWxsIGJ1aWx0LWluIGFuZCBjdXN0b20gc2NhbGFycywgbWFwcGVkIHRvIHRoZWlyIGFjdHVhbCB2YWx1ZXMgKi9cbmV4cG9ydCB0eXBlIFNjYWxhcnMgPSB7XG4gIElEOiBzdHJpbmc7XG4gIFN0cmluZzogc3RyaW5nO1xuICBCb29sZWFuOiBib29sZWFuO1xuICBJbnQ6IG51bWJlcjtcbiAgRmxvYXQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgcmVmcmVzaFRva2VuOiBUb2tlblJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHR5cGUgVG9rZW5SZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdUb2tlblJlc3BvbnNlJztcbiAgc3VjY2VzczogU2NhbGFyc1snQm9vbGVhbiddO1xuICBhY2Nlc3NUb2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIHJldm9rZVJlZnJlc2hUb2tlbkZvclVzZXI6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgcmVnaXN0ZXI6IFVzZXJUb2tlbjtcbiAgbG9naW46IFVzZXJUb2tlbjtcbiAgZ29vZ2xlTG9naW46IFVzZXJUb2tlbjtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZXZva2VSZWZyZXNoVG9rZW5Gb3JVc2VyQXJncyA9IHtcbiAgdXNlcklkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZWdpc3RlckFyZ3MgPSB7XG4gIHVzZXJuYW1lPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBlbWFpbD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkxvZ2luQXJncyA9IHtcbiAgdXNlcm5hbWU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGVtYWlsPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uR29vZ2xlTG9naW5BcmdzID0ge1xuICB1c2VybmFtZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZW1haWw/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJUb2tlbiA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyVG9rZW4nO1xuICB0b2tlbj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8VXNlckVycm9yPj47XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyRXJyb3IgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlckVycm9yJztcbiAgZmllbGQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBtZXNzYWdlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIEdvb2dsZUxvZ2luTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBlbWFpbD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgR29vZ2xlTG9naW5NdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBnb29nbGVMb2dpbjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyVG9rZW4nIH1cbiAgICAmIFBpY2s8VXNlclRva2VuLCAndG9rZW4nPlxuICAgICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVXNlckVycm9yJyB9XG4gICAgICAmIFBpY2s8VXNlckVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdXNlcm5hbWU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGVtYWlsPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGxvZ2luOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJUb2tlbicgfVxuICAgICYgUGljazxVc2VyVG9rZW4sICd0b2tlbic+XG4gICAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyRXJyb3InIH1cbiAgICAgICYgUGljazxVc2VyRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4gICAgKT4+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZW1haWw/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgcmVnaXN0ZXI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclRva2VuJyB9XG4gICAgJiBQaWNrPFVzZXJUb2tlbiwgJ3Rva2VuJz5cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJFcnJvcicgfVxuICAgICAgJiBQaWNrPFVzZXJFcnJvciwgJ2ZpZWxkJyB8ICdtZXNzYWdlJz5cbiAgICApPj4gfVxuICApIH1cbik7XG5cblxuZXhwb3J0IGNvbnN0IEdvb2dsZUxvZ2luRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gR29vZ2xlTG9naW4oJHVzZXJuYW1lOiBTdHJpbmcsICRlbWFpbDogU3RyaW5nLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgZ29vZ2xlTG9naW4odXNlcm5hbWU6ICR1c2VybmFtZSwgZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgIHRva2VuXG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdvb2dsZUxvZ2luTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPEdvb2dsZUxvZ2luTXV0YXRpb24sIEdvb2dsZUxvZ2luTXV0YXRpb25WYXJpYWJsZXM+KEdvb2dsZUxvZ2luRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCR1c2VybmFtZTogU3RyaW5nLCAkZW1haWw6IFN0cmluZywgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGxvZ2luKHVzZXJuYW1lOiAkdXNlcm5hbWUsIGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICB0b2tlblxuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpbk11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPihMb2dpbkRvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgUmVnaXN0ZXJEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBSZWdpc3RlcigkdXNlcm5hbWU6IFN0cmluZywgJGVtYWlsOiBTdHJpbmcsICRwYXNzd29yZDogU3RyaW5nISkge1xuICByZWdpc3Rlcih1c2VybmFtZTogJHVzZXJuYW1lLCBlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgdG9rZW5cbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVnaXN0ZXJNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz4oUmVnaXN0ZXJEb2N1bWVudCk7XG59OyIsImltcG9ydCB7IEJveCwgQnV0dG9uLCBMaW5rLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgRm9ybWlrLCBGb3JtaWtIZWxwZXJzIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gXCJuZXh0LXVycWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybUlucHV0LCBGb3JtSW5wdXRQYXNzd29yZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvcm1JbnB1dFwiO1xyXG5pbXBvcnQgeyBBdXRoRm9ybUxheW91dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dHMvYXV0aEZvcm1MYXlvdXRcIjtcclxuaW1wb3J0IHtcclxuICB2YWxpZGF0ZUVtYWlsLFxyXG4gIHZhbGlkYXRlUGFzc3dvcmQsXHJcbiAgdmFsaWRhdGVQYXNzd29yZFJlcGVhdCxcclxuICB2YWxpZGF0ZVVzZXJuYW1lLFxyXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3ZhbGlkYXRpb25zL3ZhbGlkYXRlVXNlcm5hbWVcIjtcclxuaW1wb3J0IHsgdXNlUmVnaXN0ZXJNdXRhdGlvbiB9IGZyb20gXCIuLi8uLi9ncmFwaHFsL2dlbmVyYXRlZFwiO1xyXG5pbXBvcnQgeyBjbGllbnRPcHRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NyZWF0ZUNsaWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIFJlZ2lzdGVyVmFsdWVzIHtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICByZXBlYXRfcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3sgZmV0Y2hpbmcgfSwgcmVnaXN0ZXJdID0gdXNlUmVnaXN0ZXJNdXRhdGlvbigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHNlbmREYXRhID0gKCkgPT4ge307XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtaWtcclxuICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHJlcGVhdF9wYXNzd29yZDogXCJcIixcclxuICAgICAgfX1cclxuICAgICAgb25TdWJtaXQ9e2FzeW5jIChcclxuICAgICAgICB2YWx1ZXM6IFJlZ2lzdGVyVmFsdWVzLFxyXG4gICAgICAgIHsgc2V0U3VibWl0dGluZyB9OiBGb3JtaWtIZWxwZXJzPFJlZ2lzdGVyVmFsdWVzPlxyXG4gICAgICApID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgYXdhaXQgcmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICB1c2VybmFtZTogdmFsdWVzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHsoeyBpc1N1Ym1pdHRpbmcsIHZhbHVlcyB9KSA9PiAoXHJcbiAgICAgICAgPEF1dGhGb3JtTGF5b3V0IHRpdGxlPVwiUmVnaXN0cm9cIiB0eXBlPVwic2lnbnVwXCI+XHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXN1YXJpb1wiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNlcnRhIHR1IHVzdWFyaW9cIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb249e3ZhbGlkYXRlVXNlcm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNlcnRhIHR1IGVtYWlsXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICB2YWxpZGF0aW9uPXt2YWxpZGF0ZUVtYWlsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybUlucHV0UGFzc3dvcmRcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNlcnRhIHR1IGNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICB2YWxpZGF0aW9uPXt2YWxpZGF0ZVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEZvcm1JbnB1dFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInJlcGVhdF9wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlJlcHRldGlyIGNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcGl0ZSB0dSBjb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbj17KCkgPT5cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlUGFzc3dvcmRSZXBlYXQodmFsdWVzLnBhc3N3b3JkLCB2YWx1ZXMucmVwZWF0X3Bhc3N3b3JkKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwieGxcIlxyXG4gICAgICAgICAgICAgIG10PXs0fVxyXG4gICAgICAgICAgICAgIGlzRnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDcmVhciBjdWVudGFcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9BdXRoRm9ybUxheW91dD5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjbGllbnRPcHRpb25zLCB7IHNzcjogZmFsc2UgfSkoUmVnaXN0ZXIpO1xyXG4iLCJpbXBvcnQgeyBJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdvb2dsZUljb24gPSAocHJvcHMpID0+IChcclxuICA8SWNvbiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB7Li4ucHJvcHN9PlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD1cIiNGQkJCMDBcIlxyXG4gICAgICBkPVwiTTExMy40NywzMDkuNDA4TDk1LjY0OCwzNzUuOTRsLTY1LjEzOSwxLjM3OEMxMS4wNDIsMzQxLjIxMSwwLDI5OS45LDAsMjU2XHJcblx0YzAtNDIuNDUxLDEwLjMyNC04Mi40ODMsMjguNjI0LTExNy43MzJoMC4wMTRsNTcuOTkyLDEwLjYzMmwyNS40MDQsNTcuNjQ0Yy01LjMxNywxNS41MDEtOC4yMTUsMzIuMTQxLTguMjE1LDQ5LjQ1NlxyXG5cdEMxMDMuODIxLDI3NC43OTIsMTA3LjIyNSwyOTIuNzk3LDExMy40NywzMDkuNDA4elwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD1cIiM1MThFRjhcIlxyXG4gICAgICBkPVwiTTUwNy41MjcsMjA4LjE3NkM1MTAuNDY3LDIyMy42NjIsNTEyLDIzOS42NTUsNTEyLDI1NmMwLDE4LjMyOC0xLjkyNywzNi4yMDYtNS41OTgsNTMuNDUxXHJcblx0Yy0xMi40NjIsNTguNjgzLTQ1LjAyNSwxMDkuOTI1LTkwLjEzNCwxNDYuMTg3bC0wLjAxNC0wLjAxNGwtNzMuMDQ0LTMuNzI3bC0xMC4zMzgtNjQuNTM1XHJcblx0YzI5LjkzMi0xNy41NTQsNTMuMzI0LTQ1LjAyNSw2NS42NDYtNzcuOTExaC0xMzYuODlWMjA4LjE3NmgxMzguODg3TDUwNy41MjcsMjA4LjE3Nkw1MDcuNTI3LDIwOC4xNzZ6XCJcclxuICAgIC8+XHJcbiAgICA8cGF0aFxyXG4gICAgICBmaWxsPVwiIzI4QjQ0NlwiXHJcbiAgICAgIGQ9XCJNNDE2LjI1Myw0NTUuNjI0bDAuMDE0LDAuMDE0QzM3Mi4zOTYsNDkwLjkwMSwzMTYuNjY2LDUxMiwyNTYsNTEyXHJcblx0Yy05Ny40OTEsMC0xODIuMjUyLTU0LjQ5MS0yMjUuNDkxLTEzNC42ODFsODIuOTYxLTY3LjkxYzIxLjYxOSw1Ny42OTgsNzcuMjc4LDk4Ljc3MSwxNDIuNTMsOTguNzcxXHJcblx0YzI4LjA0NywwLDU0LjMyMy03LjU4Miw3Ni44Ny0yMC44MThMNDE2LjI1Myw0NTUuNjI0elwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD1cIiNGMTQzMzZcIlxyXG4gICAgICBkPVwiTTQxOS40MDQsNTguOTM2bC04Mi45MzMsNjcuODk2Yy0yMy4zMzUtMTQuNTg2LTUwLjkxOS0yMy4wMTItODAuNDcxLTIzLjAxMlxyXG5cdGMtNjYuNzI5LDAtMTIzLjQyOSw0Mi45NTctMTQzLjk2NSwxMDIuNzI0bC04My4zOTctNjguMjc2aC0wLjAxNEM3MS4yMyw1Ni4xMjMsMTU3LjA2LDAsMjU2LDBcclxuXHRDMzE4LjExNSwwLDM3NS4wNjgsMjIuMTI2LDQxOS40MDQsNTguOTM2elwiXHJcbiAgICAvPlxyXG4gIDwvSWNvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGYWNlYm9va0ljb24gPSAocHJvcHMpID0+IChcclxuICA8SWNvbiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB7Li4ucHJvcHN9PlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD1cIiMzYjU5OTlcIlxyXG4gICAgICBkPVwiTTM4NCwxNzZoLTk2di02NGMwLTE3LjY2NCwxNC4zMzYtMzIsMzItMzJoMzJWMGgtNjRsMCwwYy01My4wMjQsMC05Niw0Mi45NzYtOTYsOTZ2ODBoLTY0djgwaDY0djI1Nmg5NlYyNTZoNjRMMzg0LDE3NnpcIlxyXG4gICAgLz5cclxuICA8L0ljb24+XHJcbik7XHJcbiIsImltcG9ydCB7XHJcbiAgY2FjaGVFeGNoYW5nZSxcclxuICBjcmVhdGVDbGllbnQsXHJcbiAgZGVkdXBFeGNoYW5nZSxcclxuICBmZXRjaEV4Y2hhbmdlLFxyXG59IGZyb20gXCJ1cnFsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2xpZW50T3B0aW9ucyA9IChzc3JFeGNoYW5nZTogYW55KSA9PiAoe1xyXG4gIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiLFxyXG4gIGV4aGFuZ2VzOiBbZGVkdXBFeGNoYW5nZSwgY2FjaGVFeGNoYW5nZSwgc3NyRXhjaGFuZ2UsIGZldGNoRXhjaGFuZ2VdLFxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXVycWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLWxvZ2luXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cnFsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=