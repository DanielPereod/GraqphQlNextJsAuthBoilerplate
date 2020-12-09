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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/register.tsx");
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
    p: ["0", "0", "0", "3em", "3em"],
    justifyContent: "center",
    alignItems: "center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      zIndex: 0,
      order: 1,
      h: "100%",
      w: ["100%", "100%", "100%", "50%", "60%"],
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
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      h: "90vh",
      w: ["90%", "90%", "90%", "50%", "40%"],
      bgColor: "#ffffff",
      zIndex: 1,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        m: "6em",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
          fontSize: "2.5em",
          mb: "1em",
          letterSpacing: "wider",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          mt: "0.5em",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              variant: "smallText",
              textAlign: "center",
              children: type === "login" ? "Crear cuenta" : "Iniciar sesión"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          mt: "2em",
          textAlign: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            variant: "smallText",
            children: "o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          justifyContent: "space-between",
          mt: "2em",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GoogleLoginButton__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
/*! exports provided: GoogleLoginDocument, useGoogleLoginMutation, RegisterDocument, useRegisterMutation, LoginDocument, useLoginQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginDocument", function() { return GoogleLoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGoogleLoginMutation", function() { return useGoogleLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterMutation", function() { return useRegisterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginQuery", function() { return useLoginQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
const LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query Login($username: String, $email: String, $password: String!) {
  login(username: $username, email: $email, password: $password) {
    token
    errors {
      field
      message
    }
  }
}
    `;
function useLoginQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: LoginDocument
  }, options));
}
;

/***/ }),

/***/ "./pages/register.tsx":
/*!****************************!*\
  !*** ./pages/register.tsx ***!
  \****************************/
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
/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FormInput */ "./components/FormInput.tsx");
/* harmony import */ var _components_layouts_authFormLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layouts/authFormLayout */ "./components/layouts/authFormLayout.tsx");
/* harmony import */ var _components_validations_validateUsername__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/validations/validateUsername */ "./components/validations/validateUsername.ts");
/* harmony import */ var _graphql_generated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../graphql/generated */ "./graphql/generated.tsx");
/* harmony import */ var _utils_createClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/createClient */ "./utils/createClient.ts");

var _jsxFileName = "/mnt/c/Users/Daniel/Code/Projects/GraqphQlNextJsAuthBoilerplate/web/pages/register.tsx";











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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          w: "100%",
          textAlign: "right",
          mb: "1em",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              variant: "smallText",
              children: "Ya tienes una cuenta?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
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
          lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR29vZ2xlTG9naW5CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0cy9hdXRoRm9ybUxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92YWxpZGF0aW9ucy92YWxpZGF0ZVVzZXJuYW1lLnRzIiwid2VicGFjazovLy8uL2dyYXBocWwvZ2VuZXJhdGVkLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2ljb25zLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jcmVhdGVDbGllbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtdXJxbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbG9naW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cnFsXCIiXSwibmFtZXMiOlsiRm9ybVdyYXBwZXIiLCJjaGlsZHJlbiIsIkZvcm1JbnB1dCIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInJlcXVpcmVkIiwidmFsaWRhdGlvbiIsImZpZWxkIiwiZm9ybSIsImVycm9ycyIsInRvdWNoZWQiLCJGb3JtSW5wdXRQYXNzd29yZCIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsInVzZVN0YXRlIiwiaGFuZGxlUGFzc3dvcmRWaXNpYmlsaXR5IiwicHJldlN0YXRlIiwiVmlld09mZkljb24iLCJHb29nbGVMb2dpbkJ1dHRvbiIsInByb3BzIiwiZmV0Y2hpbmciLCJnb29nbGVMb2dpbiIsInVzZUdvb2dsZUxvZ2luTXV0YXRpb24iLCJyZXNwb25zZUdvb2dsZSIsInJlc3BvbnNlIiwiZW1haWwiLCJwcm9maWxlT2JqIiwidXNlcm5hbWUiLCJnaXZlbk5hbWUiLCJwYXNzd29yZCIsImVycm9yIiwicHJvY2VzcyIsInJlbmRlclByb3BzIiwib25DbGljayIsImRpc2FibGVkIiwiQXV0aEZvcm1MYXlvdXQiLCJ0aXRsZSIsInZhbGlkYXRlVXNlcm5hbWUiLCJ2YWx1ZSIsImxlbmd0aCIsInZhbGlkYXRlRW1haWwiLCJyZWciLCJSZWdFeHAiLCJ0ZXN0IiwidmFsaWRhdGVQYXNzd29yZCIsInZhbGlkYXRlUGFzc3dvcmRSZXBlYXQiLCJjb25zb2xlIiwibG9nIiwiR29vZ2xlTG9naW5Eb2N1bWVudCIsImdxbCIsIlVycWwiLCJSZWdpc3RlckRvY3VtZW50IiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsIkxvZ2luRG9jdW1lbnQiLCJ1c2VMb2dpblF1ZXJ5Iiwib3B0aW9ucyIsInF1ZXJ5IiwiUmVnaXN0ZXIiLCJyZWdpc3RlciIsInJvdXRlciIsInVzZVJvdXRlciIsInNlbmREYXRhIiwicmVwZWF0X3Bhc3N3b3JkIiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsInB1c2giLCJpc1N1Ym1pdHRpbmciLCJ3aXRoVXJxbENsaWVudCIsImNsaWVudE9wdGlvbnMiLCJzc3IiLCJHb29nbGVJY29uIiwiRmFjZWJvb2tJY29uIiwic3NyRXhjaGFuZ2UiLCJ1cmwiLCJleGhhbmdlcyIsImRlZHVwRXhjaGFuZ2UiLCJjYWNoZUV4Y2hhbmdlIiwiZmV0Y2hFeGNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFXQTtBQUNBO0FBQ0E7O0FBV0EsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELGtCQUFrQixxRUFBQyxvREFBRDtBQUFLLElBQUUsRUFBRSxLQUFUO0FBQUEsWUFBaUJBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBdEM7O0FBRU8sTUFBTUMsU0FBUyxHQUFHLENBQUM7QUFDeEJDLE1BRHdCO0FBRXhCQyxPQUZ3QjtBQUd4QkMsYUFId0I7QUFJeEJDLE1BSndCO0FBS3hCQyxVQUx3QjtBQU14QkM7QUFOd0IsQ0FBRCxrQkFRdkIscUVBQUMsV0FBRDtBQUFBLHlCQUNFLHFFQUFDLDRDQUFEO0FBQU8sUUFBSSxFQUFFTCxJQUFiO0FBQW1CLFlBQVEsRUFBRUssVUFBN0I7QUFBQSxjQUNHLENBQUM7QUFBRUMsV0FBRjtBQUFTQztBQUFULEtBQUQsa0JBQ0MscUVBQUMsNERBQUQ7QUFDRSxlQUFTLEVBQUVBLElBQUksQ0FBQ0MsTUFBTCxDQUFZUixJQUFaLEtBQXFCTyxJQUFJLENBQUNFLE9BQUwsQ0FBYVQsSUFBYixDQURsQztBQUVFLGdCQUFVLEVBQUVJLFFBRmQ7QUFBQSw4QkFJRSxxRUFBQywwREFBRDtBQUFXLGVBQU8sRUFBRUosSUFBcEI7QUFBQSxrQkFBMkJDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRSxxRUFBQyxzREFBRCxrQ0FBV0ssS0FBWDtBQUFrQixZQUFJLEVBQUVILElBQXhCO0FBQThCLFVBQUUsRUFBRUgsSUFBbEM7QUFBd0MsbUJBQVcsRUFBRUU7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixlQU1FLHFFQUFDLGlFQUFEO0FBQUEsa0JBQW1CSyxJQUFJLENBQUNDLE1BQUwsQ0FBWVIsSUFBWjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUks7QUF3QkEsTUFBTVUsaUJBQWlCLEdBQUcsQ0FBQztBQUNoQ1YsTUFEZ0M7QUFFaENDLE9BRmdDO0FBR2hDQyxhQUhnQztBQUloQ0MsTUFKZ0M7QUFLaENDLFVBTGdDO0FBTWhDQztBQU5nQyxDQUFELEtBT3BCO0FBQ1gsUUFBTTtBQUFBLE9BQUNNLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDQyxzREFBUSxDQUFDLEtBQUQsQ0FBaEQ7O0FBQ0EsUUFBTUMsd0JBQXdCLEdBQUcsTUFDL0JGLGVBQWUsQ0FBRUcsU0FBRCxJQUFlLENBQUNBLFNBQWpCLENBRGpCOztBQUVBLHNCQUNFLHFFQUFDLFdBQUQ7QUFBQSwyQkFDRSxxRUFBQyw0Q0FBRDtBQUFPLFVBQUksRUFBRWYsSUFBYjtBQUFtQixjQUFRLEVBQUVLLFVBQTdCO0FBQUEsZ0JBQ0csQ0FBQztBQUFFQyxhQUFGO0FBQVNDO0FBQVQsT0FBRCxrQkFDQyxxRUFBQyw0REFBRDtBQUNFLGlCQUFTLEVBQUVBLElBQUksQ0FBQ0MsTUFBTCxDQUFZUixJQUFaLEtBQXFCTyxJQUFJLENBQUNFLE9BQUwsQ0FBYVQsSUFBYixDQURsQztBQUVFLGtCQUFVLEVBQUVJLFFBRmQ7QUFBQSxnQ0FJRSxxRUFBQywwREFBRDtBQUFXLGlCQUFPLEVBQUVKLElBQXBCO0FBQUEsb0JBQTJCQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBTUUscUVBQUMsMkRBQUQ7QUFBQSxrQ0FDRSxxRUFBQyxzREFBRCxrQ0FDTUssS0FETjtBQUVFLGdCQUFJLEVBQUVLLFlBQVksR0FBRyxNQUFILEdBQVksVUFGaEM7QUFHRSxjQUFFLEVBQUVYLElBSE47QUFJRSx1QkFBVyxFQUFFRTtBQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFPRSxxRUFBQyxrRUFBRDtBQUFtQixpQkFBSyxFQUFDLE1BQXpCO0FBQUEsbUNBQ0UscUVBQUMsdURBQUQ7QUFBUSxrQkFBSSxFQUFDLElBQWI7QUFBa0IscUJBQU8sRUFBRVksd0JBQTNCO0FBQUEsd0JBQ0dILFlBQVksZ0JBQ1gscUVBQUMscURBQUQ7QUFBTSxrQkFBRSxFQUFFSyw0REFBV0E7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEVyxnQkFHWCxxRUFBQyxxREFBRDtBQUFNLGtCQUFFLEVBQUVBLDREQUFXQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLGVBdUJFLHFFQUFDLGlFQUFEO0FBQUEsb0JBQW1CVCxJQUFJLENBQUNDLE1BQUwsQ0FBWVIsSUFBWjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUNELENBNUNNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERQO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFJTyxNQUFNaUIsaUJBQWlCLEdBQUlDLEtBQUQsSUFBa0I7QUFDakQsUUFBTSxDQUFDO0FBQUVDO0FBQUYsR0FBRCxFQUFlQyxXQUFmLElBQThCQyxpRkFBc0IsRUFBMUQ7O0FBRUEsUUFBTUMsY0FBYyxHQUFHLE1BQU9DLFFBQVAsSUFBb0I7QUFDekMsUUFBSTtBQUNGLGFBQU8sTUFBTUgsV0FBVyxDQUFDO0FBQ3ZCSSxhQUFLLEVBQUVELFFBQVEsQ0FBQ0UsVUFBVCxDQUFvQkQsS0FESjtBQUV2QkUsZ0JBQVEsRUFBRUgsUUFBUSxDQUFDRSxVQUFULENBQW9CRSxTQUZQO0FBR3ZCQyxnQkFBUSxFQUFFO0FBSGEsT0FBRCxDQUF4QjtBQUtELEtBTkQsQ0FNRSxPQUFPQyxLQUFQLEVBQWM7QUFDZCxhQUFPQSxLQUFQO0FBQ0Q7QUFDRixHQVZEOztBQVdBLHNCQUNFLHFFQUFDLHlEQUFEO0FBQ0UsWUFBUSxFQUFFQywwRUFEWjtBQUVFLGNBQVUsRUFBQyxPQUZiO0FBR0UsYUFBUyxFQUFFUixjQUhiO0FBSUUsYUFBUyxFQUFFQSxjQUpiO0FBS0UsZ0JBQVksRUFBRSxvQkFMaEI7QUFNRSxVQUFNLEVBQUdTLFdBQUQsaUJBQ04scUVBQUMsdURBQUQ7QUFDRSxhQUFPLEVBQUVBLFdBQVcsQ0FBQ0MsT0FEdkI7QUFFRSxjQUFRLEVBQUVELFdBQVcsQ0FBQ0UsUUFGeEI7QUFHRSxVQUFJLEVBQUMsSUFIUDtBQUlFLE9BQUMsRUFBQyxNQUpKO0FBS0UsYUFBTyxFQUFDLGlCQUxWO0FBTUUsY0FBUSxlQUFFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxQkQsQ0FuQ00sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaUDtBQUNBO0FBQ0E7QUFRTyxNQUFNQyxjQUFjLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNyQyxVQUFUO0FBQW1CSztBQUFuQixDQUFELEtBQXNDO0FBQ2xFLHNCQUNFLHFFQUFDLHFEQUFEO0FBQ0UsS0FBQyxFQUFDLE1BREo7QUFFRSxLQUFDLEVBQUMsT0FGSjtBQUdFLEtBQUMsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixLQUFoQixFQUF1QixLQUF2QixDQUhMO0FBSUUsa0JBQWMsRUFBQyxRQUpqQjtBQUtFLGNBQVUsRUFBQyxRQUxiO0FBQUEsNEJBT0UscUVBQUMscURBQUQ7QUFDRSxZQUFNLEVBQUUsQ0FEVjtBQUVFLFdBQUssRUFBRSxDQUZUO0FBR0UsT0FBQyxFQUFDLE1BSEo7QUFJRSxPQUFDLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixLQUF6QixFQUFnQyxLQUFoQyxDQUpMO0FBS0UsT0FBQyxFQUFDLEtBTEo7QUFNRSxhQUFPLEVBQUMsK0JBTlY7QUFPRSxZQUFNLEVBQUMsT0FQVDtBQVFFLFdBQUssRUFBQyxRQVJSO0FBU0UsZ0JBQVUsRUFBQyxVQVRiO0FBVUUsY0FBUSxFQUFFLENBQUMsVUFBRCxFQUFhLFVBQWIsRUFBeUIsVUFBekIsRUFBcUMsUUFBckMsRUFBK0MsUUFBL0MsQ0FWWjtBQUFBLDZCQVlFLHFFQUFDLHdEQUFEO0FBQVMsaUJBQVMsRUFBQyxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFxQkUscUVBQUMsb0RBQUQ7QUFDRSxPQUFDLEVBQUMsTUFESjtBQUVFLE9BQUMsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixDQUZMO0FBR0UsYUFBTyxFQUFDLFNBSFY7QUFJRSxZQUFNLEVBQUUsQ0FKVjtBQUFBLDZCQU1FLHFFQUFDLG9EQUFEO0FBQUssU0FBQyxFQUFDLEtBQVA7QUFBQSxnQ0FDRSxxRUFBQyx3REFBRDtBQUFTLGtCQUFRLEVBQUMsT0FBbEI7QUFBMEIsWUFBRSxFQUFDLEtBQTdCO0FBQW1DLHVCQUFhLEVBQUMsT0FBakQ7QUFBQSxvQkFDR2dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUlHckMsUUFKSCxlQUtFLHFFQUFDLG9EQUFEO0FBQUssWUFBRSxFQUFDLE9BQVI7QUFBQSxpQ0FDRSxxRUFBQyxxREFBRDtBQUFBLG1DQUNFLHFFQUFDLHFEQUFEO0FBQU0scUJBQU8sRUFBQyxXQUFkO0FBQTBCLHVCQUFTLEVBQUMsUUFBcEM7QUFBQSx3QkFDR0ssSUFBSSxLQUFLLE9BQVQsR0FBbUIsY0FBbkIsR0FBb0M7QUFEdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGLGVBWUUscUVBQUMsb0RBQUQ7QUFBSyxZQUFFLEVBQUMsS0FBUjtBQUFjLG1CQUFTLEVBQUMsUUFBeEI7QUFBQSxpQ0FDRSxxRUFBQyxxREFBRDtBQUFNLG1CQUFPLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkYsZUFlRSxxRUFBQyxxREFBRDtBQUFNLHdCQUFjLEVBQUMsZUFBckI7QUFBcUMsWUFBRSxFQUFDLEtBQXhDO0FBQUEsaUNBQ0UscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrREQsQ0FuRE0sQzs7Ozs7Ozs7Ozs7O0FDVlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1pQyxnQkFBZ0IsR0FBSUMsS0FBRCxJQUE0QjtBQUMxRCxNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLFdBQU8seUJBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUEsS0FBSyxDQUFDQyxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDM0IsV0FBTyx5Q0FBUDtBQUNEOztBQUNEO0FBQ0QsQ0FQTTtBQVNBLE1BQU1DLGFBQWEsR0FBSUYsS0FBRCxJQUE0QjtBQUN2RCxRQUFNRyxHQUFHLEdBQUdDLE1BQU0sQ0FBQyxtQ0FBRCxDQUFsQjs7QUFDQSxNQUFJLENBQUNKLEtBQUwsRUFBWTtBQUNWLFdBQU8sdUJBQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxDQUFDRyxHQUFHLENBQUNFLElBQUosQ0FBU0wsS0FBVCxDQUFMLEVBQXNCO0FBQzNCLFdBQU8sMkJBQVA7QUFDRDs7QUFDRDtBQUNELENBUk07QUFVQSxNQUFNTSxnQkFBZ0IsR0FBSU4sS0FBRCxJQUE0QjtBQUMxRCxRQUFNRyxHQUFHLEdBQUdDLE1BQU0sQ0FBQyx1REFBRCxDQUFsQjs7QUFDQSxNQUFJLENBQUNKLEtBQUwsRUFBWTtBQUNWLFdBQU8sNEJBQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxDQUFDRyxHQUFHLENBQUNFLElBQUosQ0FBU0wsS0FBVCxDQUFMLEVBQXNCO0FBQzNCLFdBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQSxLQUpJO0FBS0Q7O0FBQ0Q7QUFDRCxDQVpNO0FBY0EsTUFBTU8sc0JBQXNCLEdBQUcsQ0FDcENoQixRQURvQyxFQUVwQ1MsS0FGb0MsS0FHekI7QUFDWFEsU0FBTyxDQUFDQyxHQUFSLENBQVlsQixRQUFaLEVBQXNCUyxLQUF0Qjs7QUFDQSxNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLFdBQU8sc0JBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUEsS0FBSyxLQUFLVCxRQUFkLEVBQXdCO0FBQzdCLFdBQU8sOEJBQVA7QUFDRDs7QUFDRDtBQUNELENBWE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ1A7QUFDQTtBQWtJTyxNQUFNbUIsbUJBQW1CLEdBQUdDLGtEQUFJO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVk87QUFZQSxTQUFTM0Isc0JBQVQsR0FBa0M7QUFDdkMsU0FBTzRCLGdEQUFBLENBQW9FRixtQkFBcEUsQ0FBUDtBQUNEO0FBQUE7QUFDTSxNQUFNRyxnQkFBZ0IsR0FBR0Ysa0RBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FWTztBQVlBLFNBQVNHLG1CQUFULEdBQStCO0FBQ3BDLFNBQU9GLGdEQUFBLENBQThEQyxnQkFBOUQsQ0FBUDtBQUNEO0FBQUE7QUFDTSxNQUFNRSxhQUFhLEdBQUdKLGtEQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVk87QUFZQSxTQUFTSyxhQUFULENBQXVCQyxPQUE4RCxHQUFHLEVBQXhGLEVBQTRGO0FBQ2pHLFNBQU9MLDZDQUFBO0FBQTRCTSxTQUFLLEVBQUVIO0FBQW5DLEtBQXFERSxPQUFyRCxFQUFQO0FBQ0Q7QUFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9LRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFTQSxNQUFNRSxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFNLENBQUM7QUFBRXJDO0FBQUYsR0FBRCxFQUFlc0MsUUFBZixJQUEyQk4sOEVBQW1CLEVBQXBEO0FBQ0EsUUFBTU8sTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTSxDQUFFLENBQXpCOztBQUNBLHNCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsaUJBQWEsRUFBRTtBQUNibEMsY0FBUSxFQUFFLEVBREc7QUFFYkYsV0FBSyxFQUFFLEVBRk07QUFHYkksY0FBUSxFQUFFLEVBSEc7QUFJYmlDLHFCQUFlLEVBQUU7QUFKSixLQURqQjtBQU9FLFlBQVEsRUFBRSxPQUNSQyxNQURRLEVBRVI7QUFBRUM7QUFBRixLQUZRLEtBR0w7QUFDSCxVQUFJO0FBQ0YsY0FBTU4sUUFBUSxDQUFDO0FBQ2IvQixrQkFBUSxFQUFFb0MsTUFBTSxDQUFDcEMsUUFESjtBQUViRixlQUFLLEVBQUVzQyxNQUFNLENBQUN0QyxLQUZEO0FBR2JJLGtCQUFRLEVBQUVrQyxNQUFNLENBQUNsQztBQUhKLFNBQUQsQ0FBZDtBQUtBOEIsY0FBTSxDQUFDTSxJQUFQLENBQVksR0FBWjtBQUNELE9BUEQsQ0FPRSxPQUFPbkMsS0FBUCxFQUFjO0FBQ2RnQixlQUFPLENBQUNDLEdBQVIsQ0FBWWpCLEtBQVo7QUFDRDtBQUNGLEtBckJIO0FBQUEsY0F1QkcsQ0FBQztBQUFFb0Msa0JBQUY7QUFBZ0JIO0FBQWhCLEtBQUQsa0JBQ0MscUVBQUMsaUZBQUQ7QUFBZ0IsV0FBSyxFQUFDLFVBQXRCO0FBQWlDLFVBQUksRUFBQyxRQUF0QztBQUFBLDZCQUNFLHFFQUFDLDJDQUFEO0FBQUEsZ0NBQ0UscUVBQUMsK0RBQUQ7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGNBQUksRUFBQyxNQUZQO0FBR0UsZUFBSyxFQUFDLFNBSFI7QUFJRSxxQkFBVyxFQUFDLG9CQUpkO0FBS0Usa0JBQVEsRUFBRSxJQUxaO0FBTUUsb0JBQVUsRUFBRTFCLHlGQUFnQkE7QUFOOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVVFLHFFQUFDLCtEQUFEO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxjQUFJLEVBQUMsTUFGUDtBQUdFLGVBQUssRUFBQyxPQUhSO0FBSUUscUJBQVcsRUFBQyxrQkFKZDtBQUtFLGtCQUFRLEVBQUUsSUFMWjtBQU1FLG9CQUFVLEVBQUVHLHNGQUFhQTtBQU4zQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZGLGVBa0JFLHFFQUFDLHVFQUFEO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxjQUFJLEVBQUMsVUFGUDtBQUdFLGVBQUssRUFBQyxlQUhSO0FBSUUscUJBQVcsRUFBQywwQkFKZDtBQUtFLGtCQUFRLEVBQUUsSUFMWjtBQU1FLG9CQUFVLEVBQUVJLHlGQUFnQkE7QUFOOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFsQkYsZUEyQkUscUVBQUMsdUVBQUQ7QUFDRSxjQUFJLEVBQUMsaUJBRFA7QUFFRSxjQUFJLEVBQUMsVUFGUDtBQUdFLGVBQUssRUFBQyx3QkFIUjtBQUlFLHFCQUFXLEVBQUMseUJBSmQ7QUFLRSxrQkFBUSxFQUFFLElBTFo7QUFNRSxvQkFBVSxFQUFFLE1BQ1ZDLHVHQUFzQixDQUFDa0IsTUFBTSxDQUFDbEMsUUFBUixFQUFrQmtDLE1BQU0sQ0FBQ0QsZUFBekI7QUFQMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEzQkYsZUFxQ0UscUVBQUMsb0RBQUQ7QUFBSyxXQUFDLEVBQUMsTUFBUDtBQUFjLG1CQUFTLEVBQUMsT0FBeEI7QUFBZ0MsWUFBRSxFQUFDLEtBQW5DO0FBQUEsaUNBQ0UscUVBQUMscURBQUQ7QUFBQSxtQ0FDRSxxRUFBQyxxREFBRDtBQUFNLHFCQUFPLEVBQUMsV0FBZDtBQUFBLHdCQUEyQjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckNGLGVBMkNFLHFFQUFDLHVEQUFEO0FBQ0UsY0FBSSxFQUFDLElBRFA7QUFFRSxZQUFFLEVBQUUsQ0FGTjtBQUdFLHFCQUFXLE1BSGI7QUFJRSxtQkFBUyxFQUFFSSxZQUpiO0FBS0UsY0FBSSxFQUFDLFFBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBbUZELENBdkZEOztBQXlGZUMsK0hBQWMsQ0FBQ0Msa0VBQUQsRUFBZ0I7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBaEIsQ0FBZCxDQUE4Q1osUUFBOUMsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSEE7QUFDQTtBQUVPLE1BQU1hLFVBQVUsR0FBSW5ELEtBQUQsaUJBQ3hCLHFFQUFDLHFEQUFEO0FBQU0sU0FBTyxFQUFDO0FBQWQsR0FBZ0NBLEtBQWhDO0FBQUEsMEJBQ0U7QUFDRSxRQUFJLEVBQUMsU0FEUDtBQUVFLEtBQUMsRUFBQztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBQ0UsUUFBSSxFQUFDLFNBRFA7QUFFRSxLQUFDLEVBQUM7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFhRTtBQUNFLFFBQUksRUFBQyxTQURQO0FBRUUsS0FBQyxFQUFDO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGLGVBbUJFO0FBQ0UsUUFBSSxFQUFDLFNBRFA7QUFFRSxLQUFDLEVBQUM7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLO0FBNkJBLE1BQU1vRCxZQUFZLEdBQUlwRCxLQUFELGlCQUMxQixxRUFBQyxxREFBRDtBQUFNLFNBQU8sRUFBQztBQUFkLEdBQWdDQSxLQUFoQztBQUFBLHlCQUNFO0FBQ0UsUUFBSSxFQUFDLFNBRFA7QUFFRSxLQUFDLEVBQUM7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLLEM7Ozs7Ozs7Ozs7OztBQ2hDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT08sTUFBTWlELGFBQWEsR0FBSUksV0FBRCxLQUF1QjtBQUNsREMsS0FBRyxFQUFFLCtCQUQ2QztBQUVsREMsVUFBUSxFQUFFLENBQUNDLGtEQUFELEVBQWdCQyxrREFBaEIsRUFBK0JKLFdBQS9CLEVBQTRDSyxrREFBNUM7QUFGd0MsQ0FBdkIsQ0FBdEIsQzs7Ozs7Ozs7Ozs7QUNQUCw2Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9yZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcmVnaXN0ZXIudHN4XCIpO1xuIiwiaW1wb3J0IHtcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtTGFiZWwsXHJcbiAgSW5wdXQsXHJcbiAgRm9ybUVycm9yTWVzc2FnZSxcclxuICBJbnB1dEdyb3VwLFxyXG4gIEJ1dHRvbixcclxuICBJY29uLFxyXG4gIElucHV0UmlnaHRFbGVtZW50LFxyXG4gIEJveCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFZpZXdJY29uLCBWaWV3T2ZmSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHJlcXVpcmVkOiBib29sZWFuO1xyXG4gIHZhbGlkYXRpb24/OiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gPEJveCBtYj17XCIxZW1cIn0+e2NoaWxkcmVufTwvQm94PjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtSW5wdXQgPSAoe1xyXG4gIG5hbWUsXHJcbiAgbGFiZWwsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgdHlwZSxcclxuICByZXF1aXJlZCxcclxuICB2YWxpZGF0aW9uLFxyXG59OiBQcm9wcykgPT4gKFxyXG4gIDxGb3JtV3JhcHBlcj5cclxuICAgIDxGaWVsZCBuYW1lPXtuYW1lfSB2YWxpZGF0ZT17dmFsaWRhdGlvbn0+XHJcbiAgICAgIHsoeyBmaWVsZCwgZm9ybSB9KSA9PiAoXHJcbiAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICBpc0ludmFsaWQ9e2Zvcm0uZXJyb3JzW25hbWVdICYmIGZvcm0udG91Y2hlZFtuYW1lXX1cclxuICAgICAgICAgIGlzUmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0IHsuLi5maWVsZH0gdHlwZT17dHlwZX0gaWQ9e25hbWV9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cclxuICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9yc1tuYW1lXX08L0Zvcm1FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgKX1cclxuICAgIDwvRmllbGQ+XHJcbiAgPC9Gb3JtV3JhcHBlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtSW5wdXRQYXNzd29yZCA9ICh7XHJcbiAgbmFtZSxcclxuICBsYWJlbCxcclxuICBwbGFjZWhvbGRlcixcclxuICB0eXBlLFxyXG4gIHJlcXVpcmVkLFxyXG4gIHZhbGlkYXRpb24sXHJcbn06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVQYXNzd29yZFZpc2liaWxpdHkgPSAoKSA9PlxyXG4gICAgc2V0U2hvd1Bhc3N3b3JkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVdyYXBwZXI+XHJcbiAgICAgIDxGaWVsZCBuYW1lPXtuYW1lfSB2YWxpZGF0ZT17dmFsaWRhdGlvbn0+XHJcbiAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcclxuICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICBpc0ludmFsaWQ9e2Zvcm0uZXJyb3JzW25hbWVdICYmIGZvcm0udG91Y2hlZFtuYW1lXX1cclxuICAgICAgICAgICAgaXNSZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvRm9ybUxhYmVsPlxyXG5cclxuICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICAgIGlkPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0UmlnaHRFbGVtZW50IHdpZHRoPVwiM3JlbVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBvbkNsaWNrPXtoYW5kbGVQYXNzd29yZFZpc2liaWxpdHl9PlxyXG4gICAgICAgICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtWaWV3T2ZmSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBhcz17Vmlld09mZkljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0lucHV0UmlnaHRFbGVtZW50PlxyXG4gICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9yc1tuYW1lXX08L0Zvcm1FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRmllbGQ+XHJcbiAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlR29vZ2xlTG9naW5NdXRhdGlvbixcclxuICB1c2VSZWdpc3Rlck11dGF0aW9uLFxyXG59IGZyb20gXCIuLi9ncmFwaHFsL2dlbmVyYXRlZFwiO1xyXG5pbXBvcnQgeyBHb29nbGVJY29uIH0gZnJvbSBcIi4uL3N0eWxlcy9pY29uc1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgR29vZ2xlTG9naW5CdXR0b24gPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3sgZmV0Y2hpbmcgfSwgZ29vZ2xlTG9naW5dID0gdXNlR29vZ2xlTG9naW5NdXRhdGlvbigpO1xyXG5cclxuICBjb25zdCByZXNwb25zZUdvb2dsZSA9IGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGF3YWl0IGdvb2dsZUxvZ2luKHtcclxuICAgICAgICBlbWFpbDogcmVzcG9uc2UucHJvZmlsZU9iai5lbWFpbCxcclxuICAgICAgICB1c2VybmFtZTogcmVzcG9uc2UucHJvZmlsZU9iai5naXZlbk5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiZ29vZ2xlQXV0aFwiLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8R29vZ2xlTG9naW5cclxuICAgICAgY2xpZW50SWQ9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9DTElFTlRfSUR9XHJcbiAgICAgIGJ1dHRvblRleHQ9XCJMb2dpblwiXHJcbiAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgIGNvb2tpZVBvbGljeT17XCJzaW5nbGVfaG9zdF9vcmlnaW5cIn1cclxuICAgICAgcmVuZGVyPXsocmVuZGVyUHJvcHMpID0+IChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3JlbmRlclByb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgc2l6ZT1cInhsXCJcclxuICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJ3aGl0ZVdpdGhCb3JkZXJcIlxyXG4gICAgICAgICAgbGVmdEljb249ezxHb29nbGVJY29uIC8+fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEluaWNpYSBzZXNpw7NuIGNvbiBHb29nbGVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nLCBMaW5rLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBHb29nbGVMb2dpbkJ1dHRvbiB9IGZyb20gXCIuLi9Hb29nbGVMb2dpbkJ1dHRvblwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcclxuICB0eXBlOiBcImxvZ2luXCIgfCBcInNpZ251cFwiO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aEZvcm1MYXlvdXQgPSAoeyB0aXRsZSwgY2hpbGRyZW4sIHR5cGUgfTogUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICBoPVwiMTAwdmhcIlxyXG4gICAgICBwPXtbXCIwXCIsIFwiMFwiLCBcIjBcIiwgXCIzZW1cIiwgXCIzZW1cIl19XHJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICA+XHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgekluZGV4PXswfVxyXG4gICAgICAgIG9yZGVyPXsxfVxyXG4gICAgICAgIGg9XCIxMDAlXCJcclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiMTAwJVwiLCBcIjEwMCVcIiwgXCI1MCVcIiwgXCI2MCVcIl19XHJcbiAgICAgICAgcD1cIjJlbVwiXHJcbiAgICAgICAgYmdJbWFnZT1cInVybCgnL2ltYWdlcy9hdWh0c2NyZWVuLmpwZycpXCJcclxuICAgICAgICBiZ1NpemU9XCJjb3ZlclwiXHJcbiAgICAgICAgYmdQb3M9XCJjZW50ZXJcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiXHJcbiAgICAgICAgcG9zaXRpb249e1tcImFic29sdXRlXCIsIFwiYWJzb2x1dGVcIiwgXCJhYnNvbHV0ZVwiLCBcInN0YXRpY1wiLCBcInN0YXRpY1wiXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxIZWFkaW5nIHRleHRDb2xvcj1cIiNmZmZmZmZcIj5CaWVudmVuaWRvPC9IZWFkaW5nPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBoPVwiOTB2aFwiXHJcbiAgICAgICAgdz17W1wiOTAlXCIsIFwiOTAlXCIsIFwiOTAlXCIsIFwiNTAlXCIsIFwiNDAlXCJdfVxyXG4gICAgICAgIGJnQ29sb3I9XCIjZmZmZmZmXCJcclxuICAgICAgICB6SW5kZXg9ezF9XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IG09XCI2ZW1cIj5cclxuICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwiMi41ZW1cIiBtYj1cIjFlbVwiIGxldHRlclNwYWNpbmc9XCJ3aWRlclwiPlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8Qm94IG10PVwiMC41ZW1cIj5cclxuICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtYWxsVGV4dFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge3R5cGUgPT09IFwibG9naW5cIiA/IFwiQ3JlYXIgY3VlbnRhXCIgOiBcIkluaWNpYXIgc2VzacOzblwifVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IG10PVwiMmVtXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbWFsbFRleHRcIj5vPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBtdD1cIjJlbVwiPlxyXG4gICAgICAgICAgICA8R29vZ2xlTG9naW5CdXR0b24gLz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHZhbGlkYXRlVXNlcm5hbWUgPSAodmFsdWU/OiBzdHJpbmcpOiBTdHJpbmcgPT4ge1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHJldHVybiBcIkVsIHVzdWFyaW8gZXMgcmVxdWVyaWRvXCI7XHJcbiAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPCAzKSB7XHJcbiAgICByZXR1cm4gXCJFbCB1c3VhcmlvIGRlYmUgdGVuZXIgYWwgbWVub3MgMyBsZXRyYXNcIjtcclxuICB9XHJcbiAgcmV0dXJuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlRW1haWwgPSAodmFsdWU/OiBzdHJpbmcpOiBTdHJpbmcgPT4ge1xyXG4gIGNvbnN0IHJlZyA9IFJlZ0V4cCgvXltcXHctXFwuXStAKFtcXHctXStcXC4pK1tcXHctXXsyLDR9JC9nKTtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gXCJFbCBlbWFpbCBlcyByZXF1ZXJpZG9cIjtcclxuICB9IGVsc2UgaWYgKCFyZWcudGVzdCh2YWx1ZSkpIHtcclxuICAgIHJldHVybiBcIkluc2VydGEgdW4gZW1haWwgY29ycmVjdG9cIjtcclxuICB9XHJcbiAgcmV0dXJuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlUGFzc3dvcmQgPSAodmFsdWU/OiBzdHJpbmcpOiBTdHJpbmcgPT4ge1xyXG4gIGNvbnN0IHJlZyA9IFJlZ0V4cCgvXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlthLXpBLVpdKS57OCx9JC9nbSk7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFwiTGEgY29udHJhc2XDsWEgZXMgcmVxdWVyaWRhXCI7XHJcbiAgfSBlbHNlIGlmICghcmVnLnRlc3QodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gYExhIGNvbnRyYXNlw7FhIGRlYmUgZW5lciB1bmEgbG9uZ2l0dWQgZGUgYWwgbWVub3MgOCBjYXJhY3RlcmVzLlxyXG4gICAgQ29udGVudGVyIHVuIG7Dum1lcm8uXFxuXHJcbiAgICBDb250ZW5lciB1biBzw61tYm9sby5cXG5cclxuICAgIENvbnRlbmVyIHVuYSBtYXnDunN1Y2xhLlxcblxyXG4gICAgYDtcclxuICB9XHJcbiAgcmV0dXJuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlUGFzc3dvcmRSZXBlYXQgPSAoXHJcbiAgcGFzc3dvcmQ6IHN0cmluZyxcclxuICB2YWx1ZT86IHN0cmluZ1xyXG4pOiBTdHJpbmcgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBhc3N3b3JkLCB2YWx1ZSk7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFwiUmVwdGllIGxhIGNvbnRyYXNlw7FhXCI7XHJcbiAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiBcIkxhcyBjb250cmFzZcOxYXMgbm8gY29pbmNpZGVuXCI7XHJcbiAgfVxyXG4gIHJldHVybjtcclxufTtcclxuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgKiBhcyBVcnFsIGZyb20gJ3VycWwnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBNYWtlT3B0aW9uYWw8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXT86IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE1ha2VNYXliZTxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdOiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBPbWl0PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj47XG4vKiogQWxsIGJ1aWx0LWluIGFuZCBjdXN0b20gc2NhbGFycywgbWFwcGVkIHRvIHRoZWlyIGFjdHVhbCB2YWx1ZXMgKi9cbmV4cG9ydCB0eXBlIFNjYWxhcnMgPSB7XG4gIElEOiBzdHJpbmc7XG4gIFN0cmluZzogc3RyaW5nO1xuICBCb29sZWFuOiBib29sZWFuO1xuICBJbnQ6IG51bWJlcjtcbiAgRmxvYXQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgcmVmcmVzaFRva2VuOiBUb2tlblJlc3BvbnNlO1xuICBsb2dpbjogVXNlclRva2VuO1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeUxvZ2luQXJncyA9IHtcbiAgdXNlcm5hbWU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGVtYWlsPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBUb2tlblJlc3BvbnNlID0ge1xuICBfX3R5cGVuYW1lPzogJ1Rva2VuUmVzcG9uc2UnO1xuICBzdWNjZXNzOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGFjY2Vzc1Rva2VuOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJUb2tlbiA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyVG9rZW4nO1xuICB0b2tlbj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8VXNlckVycm9yPj47XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyRXJyb3IgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlckVycm9yJztcbiAgZmllbGQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBtZXNzYWdlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uID0ge1xuICBfX3R5cGVuYW1lPzogJ011dGF0aW9uJztcbiAgcmV2b2tlUmVmcmVzaFRva2VuRm9yVXNlcjogU2NhbGFyc1snQm9vbGVhbiddO1xuICByZWdpc3RlcjogVXNlclRva2VuO1xuICBnb29nbGVMb2dpbjogVXNlclRva2VuO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblJldm9rZVJlZnJlc2hUb2tlbkZvclVzZXJBcmdzID0ge1xuICB1c2VySWQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblJlZ2lzdGVyQXJncyA9IHtcbiAgdXNlcm5hbWU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGVtYWlsPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uR29vZ2xlTG9naW5BcmdzID0ge1xuICB1c2VybmFtZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZW1haWw/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIEdvb2dsZUxvZ2luTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBlbWFpbD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgR29vZ2xlTG9naW5NdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBnb29nbGVMb2dpbjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyVG9rZW4nIH1cbiAgICAmIFBpY2s8VXNlclRva2VuLCAndG9rZW4nPlxuICAgICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVXNlckVycm9yJyB9XG4gICAgICAmIFBpY2s8VXNlckVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdXNlcm5hbWU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGVtYWlsPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHJlZ2lzdGVyOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJUb2tlbicgfVxuICAgICYgUGljazxVc2VyVG9rZW4sICd0b2tlbic+XG4gICAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyRXJyb3InIH1cbiAgICAgICYgUGljazxVc2VyRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4gICAgKT4+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dpblF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZW1haWw/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ2luUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgbG9naW46IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclRva2VuJyB9XG4gICAgJiBQaWNrPFVzZXJUb2tlbiwgJ3Rva2VuJz5cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJFcnJvcicgfVxuICAgICAgJiBQaWNrPFVzZXJFcnJvciwgJ2ZpZWxkJyB8ICdtZXNzYWdlJz5cbiAgICApPj4gfVxuICApIH1cbik7XG5cblxuZXhwb3J0IGNvbnN0IEdvb2dsZUxvZ2luRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gR29vZ2xlTG9naW4oJHVzZXJuYW1lOiBTdHJpbmcsICRlbWFpbDogU3RyaW5nLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgZ29vZ2xlTG9naW4odXNlcm5hbWU6ICR1c2VybmFtZSwgZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgIHRva2VuXG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdvb2dsZUxvZ2luTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPEdvb2dsZUxvZ2luTXV0YXRpb24sIEdvb2dsZUxvZ2luTXV0YXRpb25WYXJpYWJsZXM+KEdvb2dsZUxvZ2luRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBSZWdpc3RlckRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFJlZ2lzdGVyKCR1c2VybmFtZTogU3RyaW5nLCAkZW1haWw6IFN0cmluZywgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIHJlZ2lzdGVyKHVzZXJuYW1lOiAkdXNlcm5hbWUsIGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICB0b2tlblxuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWdpc3Rlck11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPihSZWdpc3RlckRvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgTG9naW5Eb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBMb2dpbigkdXNlcm5hbWU6IFN0cmluZywgJGVtYWlsOiBTdHJpbmcsICRwYXNzd29yZDogU3RyaW5nISkge1xuICBsb2dpbih1c2VybmFtZTogJHVzZXJuYW1lLCBlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgdG9rZW5cbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5RdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPExvZ2luUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PExvZ2luUXVlcnk+KHsgcXVlcnk6IExvZ2luRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59OyIsImltcG9ydCB7IEJveCwgQnV0dG9uLCBMaW5rLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgRm9ybWlrLCBGb3JtaWtIZWxwZXJzIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gXCJuZXh0LXVycWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybUlucHV0LCBGb3JtSW5wdXRQYXNzd29yZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1JbnB1dFwiO1xyXG5pbXBvcnQgeyBBdXRoRm9ybUxheW91dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dHMvYXV0aEZvcm1MYXlvdXRcIjtcclxuaW1wb3J0IHtcclxuICB2YWxpZGF0ZUVtYWlsLFxyXG4gIHZhbGlkYXRlUGFzc3dvcmQsXHJcbiAgdmFsaWRhdGVQYXNzd29yZFJlcGVhdCxcclxuICB2YWxpZGF0ZVVzZXJuYW1lLFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL3ZhbGlkYXRpb25zL3ZhbGlkYXRlVXNlcm5hbWVcIjtcclxuaW1wb3J0IHsgdXNlUmVnaXN0ZXJNdXRhdGlvbiB9IGZyb20gXCIuLi9ncmFwaHFsL2dlbmVyYXRlZFwiO1xyXG5pbXBvcnQgeyBjbGllbnRPcHRpb25zIH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZUNsaWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIFJlZ2lzdGVyVmFsdWVzIHtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICByZXBlYXRfcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3sgZmV0Y2hpbmcgfSwgcmVnaXN0ZXJdID0gdXNlUmVnaXN0ZXJNdXRhdGlvbigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHNlbmREYXRhID0gKCkgPT4ge307XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtaWtcclxuICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHJlcGVhdF9wYXNzd29yZDogXCJcIixcclxuICAgICAgfX1cclxuICAgICAgb25TdWJtaXQ9e2FzeW5jIChcclxuICAgICAgICB2YWx1ZXM6IFJlZ2lzdGVyVmFsdWVzLFxyXG4gICAgICAgIHsgc2V0U3VibWl0dGluZyB9OiBGb3JtaWtIZWxwZXJzPFJlZ2lzdGVyVmFsdWVzPlxyXG4gICAgICApID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgYXdhaXQgcmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICB1c2VybmFtZTogdmFsdWVzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHsoeyBpc1N1Ym1pdHRpbmcsIHZhbHVlcyB9KSA9PiAoXHJcbiAgICAgICAgPEF1dGhGb3JtTGF5b3V0IHRpdGxlPVwiUmVnaXN0cm9cIiB0eXBlPVwic2lnbnVwXCI+XHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXN1YXJpb1wiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNlcnRhIHR1IHVzdWFyaW9cIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb249e3ZhbGlkYXRlVXNlcm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNlcnRhIHR1IGVtYWlsXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICB2YWxpZGF0aW9uPXt2YWxpZGF0ZUVtYWlsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybUlucHV0UGFzc3dvcmRcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNlcnRhIHR1IGNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICB2YWxpZGF0aW9uPXt2YWxpZGF0ZVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEZvcm1JbnB1dFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInJlcGVhdF9wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlJlcHRldGlyIGNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcGl0ZSB0dSBjb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbj17KCkgPT5cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlUGFzc3dvcmRSZXBlYXQodmFsdWVzLnBhc3N3b3JkLCB2YWx1ZXMucmVwZWF0X3Bhc3N3b3JkKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJveCB3PVwiMTAwJVwiIHRleHRBbGlnbj1cInJpZ2h0XCIgbWI9XCIxZW1cIj5cclxuICAgICAgICAgICAgICA8TGluaz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbWFsbFRleHRcIj57XCJZYSB0aWVuZXMgdW5hIGN1ZW50YT9cIn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwieGxcIlxyXG4gICAgICAgICAgICAgIG10PXs0fVxyXG4gICAgICAgICAgICAgIGlzRnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDcmVhciBjdWVudGFcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9BdXRoRm9ybUxheW91dD5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjbGllbnRPcHRpb25zLCB7IHNzcjogZmFsc2UgfSkoUmVnaXN0ZXIpO1xyXG4iLCJpbXBvcnQgeyBJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdvb2dsZUljb24gPSAocHJvcHMpID0+IChcclxuICA8SWNvbiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB7Li4ucHJvcHN9PlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD1cIiNGQkJCMDBcIlxyXG4gICAgICBkPVwiTTExMy40NywzMDkuNDA4TDk1LjY0OCwzNzUuOTRsLTY1LjEzOSwxLjM3OEMxMS4wNDIsMzQxLjIxMSwwLDI5OS45LDAsMjU2XHJcblx0YzAtNDIuNDUxLDEwLjMyNC04Mi40ODMsMjguNjI0LTExNy43MzJoMC4wMTRsNTcuOTkyLDEwLjYzMmwyNS40MDQsNTcuNjQ0Yy01LjMxNywxNS41MDEtOC4yMTUsMzIuMTQxLTguMjE1LDQ5LjQ1NlxyXG5cdEMxMDMuODIxLDI3NC43OTIsMTA3LjIyNSwyOTIuNzk3LDExMy40NywzMDkuNDA4elwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD1cIiM1MThFRjhcIlxyXG4gICAgICBkPVwiTTUwNy41MjcsMjA4LjE3NkM1MTAuNDY3LDIyMy42NjIsNTEyLDIzOS42NTUsNTEyLDI1NmMwLDE4LjMyOC0xLjkyNywzNi4yMDYtNS41OTgsNTMuNDUxXHJcblx0Yy0xMi40NjIsNTguNjgzLTQ1LjAyNSwxMDkuOTI1LTkwLjEzNCwxNDYuMTg3bC0wLjAxNC0wLjAxNGwtNzMuMDQ0LTMuNzI3bC0xMC4zMzgtNjQuNTM1XHJcblx0YzI5LjkzMi0xNy41NTQsNTMuMzI0LTQ1LjAyNSw2NS42NDYtNzcuOTExaC0xMzYuODlWMjA4LjE3NmgxMzguODg3TDUwNy41MjcsMjA4LjE3Nkw1MDcuNTI3LDIwOC4xNzZ6XCJcclxuICAgIC8+XHJcbiAgICA8cGF0aFxyXG4gICAgICBmaWxsPVwiIzI4QjQ0NlwiXHJcbiAgICAgIGQ9XCJNNDE2LjI1Myw0NTUuNjI0bDAuMDE0LDAuMDE0QzM3Mi4zOTYsNDkwLjkwMSwzMTYuNjY2LDUxMiwyNTYsNTEyXHJcblx0Yy05Ny40OTEsMC0xODIuMjUyLTU0LjQ5MS0yMjUuNDkxLTEzNC42ODFsODIuOTYxLTY3LjkxYzIxLjYxOSw1Ny42OTgsNzcuMjc4LDk4Ljc3MSwxNDIuNTMsOTguNzcxXHJcblx0YzI4LjA0NywwLDU0LjMyMy03LjU4Miw3Ni44Ny0yMC44MThMNDE2LjI1Myw0NTUuNjI0elwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD1cIiNGMTQzMzZcIlxyXG4gICAgICBkPVwiTTQxOS40MDQsNTguOTM2bC04Mi45MzMsNjcuODk2Yy0yMy4zMzUtMTQuNTg2LTUwLjkxOS0yMy4wMTItODAuNDcxLTIzLjAxMlxyXG5cdGMtNjYuNzI5LDAtMTIzLjQyOSw0Mi45NTctMTQzLjk2NSwxMDIuNzI0bC04My4zOTctNjguMjc2aC0wLjAxNEM3MS4yMyw1Ni4xMjMsMTU3LjA2LDAsMjU2LDBcclxuXHRDMzE4LjExNSwwLDM3NS4wNjgsMjIuMTI2LDQxOS40MDQsNTguOTM2elwiXHJcbiAgICAvPlxyXG4gIDwvSWNvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGYWNlYm9va0ljb24gPSAocHJvcHMpID0+IChcclxuICA8SWNvbiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB7Li4ucHJvcHN9PlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD1cIiMzYjU5OTlcIlxyXG4gICAgICBkPVwiTTM4NCwxNzZoLTk2di02NGMwLTE3LjY2NCwxNC4zMzYtMzIsMzItMzJoMzJWMGgtNjRsMCwwYy01My4wMjQsMC05Niw0Mi45NzYtOTYsOTZ2ODBoLTY0djgwaDY0djI1Nmg5NlYyNTZoNjRMMzg0LDE3NnpcIlxyXG4gICAgLz5cclxuICA8L0ljb24+XHJcbik7XHJcbiIsImltcG9ydCB7XHJcbiAgY2FjaGVFeGNoYW5nZSxcclxuICBjcmVhdGVDbGllbnQsXHJcbiAgZGVkdXBFeGNoYW5nZSxcclxuICBmZXRjaEV4Y2hhbmdlLFxyXG59IGZyb20gXCJ1cnFsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2xpZW50T3B0aW9ucyA9IChzc3JFeGNoYW5nZTogYW55KSA9PiAoe1xyXG4gIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiLFxyXG4gIGV4aGFuZ2VzOiBbZGVkdXBFeGNoYW5nZSwgY2FjaGVFeGNoYW5nZSwgc3NyRXhjaGFuZ2UsIGZldGNoRXhjaGFuZ2VdLFxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXVycWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLWxvZ2luXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cnFsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=