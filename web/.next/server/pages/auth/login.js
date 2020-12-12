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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-login */ "react-google-login");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _graphql_generated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/generated */ "./graphql/generated.tsx");
/* harmony import */ var _styles_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/icons */ "./styles/icons.tsx");

var _jsxFileName = "/mnt/c/Users/Daniel/Code/Projects/GraqphQlNextJsAuthBoilerplate/web/components/GoogleLoginButton.tsx";






const GoogleLoginButton = props => {
  const [{
    fetching
  }, googleLogin] = Object(_graphql_generated__WEBPACK_IMPORTED_MODULE_5__["useGoogleLoginMutation"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const responseGoogle = async response => {
    try {
      await googleLogin({
        email: response.profileObj.email,
        username: response.profileObj.givenName,
        password: "googleAuth"
      });
      return router.push("/");
    } catch (error) {
      return error;
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_google_login__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
      leftIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_icons__WEBPACK_IMPORTED_MODULE_6__["GoogleIcon"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }, undefined),
      children: "Inicia sesi\xF3n con Google"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
/*! exports provided: GoogleLoginDocument, useGoogleLoginMutation, LoginDocument, useLoginMutation, RegisterDocument, useRegisterMutation, MeDocument, useMeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginDocument", function() { return GoogleLoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGoogleLoginMutation", function() { return useGoogleLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginMutation", function() { return useLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterMutation", function() { return useRegisterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeDocument", function() { return MeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeQuery", function() { return useMeQuery; });
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
const MeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query me {
  me {
    user {
      id
      username
      email
    }
    errors {
      field
      message
    }
  }
}
    `;
function useMeQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: MeDocument
  }, options));
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
          lineNumber: 46,
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
          lineNumber: 54,
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
              lineNumber: 65,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
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
          lineNumber: 69,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @urql/exchange-graphcache */ "@urql/exchange-graphcache");
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);


const clientOptions = ssrExchange => ({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include"
  },
  exhanges: [urql__WEBPACK_IMPORTED_MODULE_1__["dedupExchange"], _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0__["cacheExchange"], ssrExchange, urql__WEBPACK_IMPORTED_MODULE_1__["fetchExchange"]]
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

/***/ "@urql/exchange-graphcache":
/*!********************************************!*\
  !*** external "@urql/exchange-graphcache" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@urql/exchange-graphcache");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR29vZ2xlTG9naW5CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0cy9hdXRoRm9ybUxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92YWxpZGF0aW9ucy92YWxpZGF0ZVVzZXJuYW1lLnRzIiwid2VicGFjazovLy8uL2dyYXBocWwvZ2VuZXJhdGVkLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL2xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaWNvbnMudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NyZWF0ZUNsaWVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB1cnFsL2V4Y2hhbmdlLWdyYXBoY2FjaGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtdXJxbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbG9naW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cnFsXCIiXSwibmFtZXMiOlsiRm9ybVdyYXBwZXIiLCJjaGlsZHJlbiIsIkZvcm1JbnB1dCIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInJlcXVpcmVkIiwidmFsaWRhdGlvbiIsImZpZWxkIiwiZm9ybSIsImVycm9ycyIsInRvdWNoZWQiLCJGb3JtSW5wdXRQYXNzd29yZCIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsInVzZVN0YXRlIiwiaGFuZGxlUGFzc3dvcmRWaXNpYmlsaXR5IiwicHJldlN0YXRlIiwiVmlld09mZkljb24iLCJHb29nbGVMb2dpbkJ1dHRvbiIsInByb3BzIiwiZmV0Y2hpbmciLCJnb29nbGVMb2dpbiIsInVzZUdvb2dsZUxvZ2luTXV0YXRpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZXNwb25zZUdvb2dsZSIsInJlc3BvbnNlIiwiZW1haWwiLCJwcm9maWxlT2JqIiwidXNlcm5hbWUiLCJnaXZlbk5hbWUiLCJwYXNzd29yZCIsInB1c2giLCJlcnJvciIsInByb2Nlc3MiLCJyZW5kZXJQcm9wcyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIkF1dGhGb3JtTGF5b3V0IiwidGl0bGUiLCJ2YWxpZGF0ZVVzZXJuYW1lIiwidmFsdWUiLCJsZW5ndGgiLCJ2YWxpZGF0ZUVtYWlsIiwicmVnIiwiUmVnRXhwIiwidGVzdCIsInZhbGlkYXRlUGFzc3dvcmQiLCJ2YWxpZGF0ZVBhc3N3b3JkUmVwZWF0IiwiY29uc29sZSIsImxvZyIsIkdvb2dsZUxvZ2luRG9jdW1lbnQiLCJncWwiLCJVcnFsIiwiTG9naW5Eb2N1bWVudCIsInVzZUxvZ2luTXV0YXRpb24iLCJSZWdpc3RlckRvY3VtZW50IiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsIk1lRG9jdW1lbnQiLCJ1c2VNZVF1ZXJ5Iiwib3B0aW9ucyIsInF1ZXJ5IiwiTG9naW4iLCJsb2dpbiIsInVzZXJuYW1lT3JFbWFpbCIsInZhbHVlcyIsInNldFN1Ym1pdHRpbmciLCJpc1N1Ym1pdHRpbmciLCJ3aXRoVXJxbENsaWVudCIsImNsaWVudE9wdGlvbnMiLCJzc3IiLCJHb29nbGVJY29uIiwiRmFjZWJvb2tJY29uIiwic3NyRXhjaGFuZ2UiLCJ1cmwiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsImV4aGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJmZXRjaEV4Y2hhbmdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQVdBO0FBQ0E7QUFDQTs7QUFXQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsa0JBQWtCLHFFQUFDLG9EQUFEO0FBQUssSUFBRSxFQUFFLEtBQVQ7QUFBQSxZQUFpQkE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF0Qzs7QUFFTyxNQUFNQyxTQUFTLEdBQUcsQ0FBQztBQUN4QkMsTUFEd0I7QUFFeEJDLE9BRndCO0FBR3hCQyxhQUh3QjtBQUl4QkMsTUFKd0I7QUFLeEJDLFVBTHdCO0FB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Ozs7Ozs7Ozs7OztBQ0hQLDZDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2F1dGgvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2F1dGgvbG9naW4udHN4XCIpO1xuIiwiaW1wb3J0IHtcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtTGFiZWwsXHJcbiAgSW5wdXQsXHJcbiAgRm9ybUVycm9yTWVzc2FnZSxcclxuICBJbnB1dEdyb3VwLFxyXG4gIEJ1dHRvbixcclxuICBJY29uLFxyXG4gIElucHV0UmlnaHRFbGVtZW50LFxyXG4gIEJveCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFZpZXdJY29uLCBWaWV3T2ZmSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHJlcXVpcmVkOiBib29sZWFuO1xyXG4gIHZhbGlkYXRpb24/OiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gPEJveCBtYj17XCIxZW1cIn0+e2NoaWxkcmVufTwvQm94PjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtSW5wdXQgPSAoe1xyXG4gIG5hbWUsXHJcbiAgbGFiZWwsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgdHlwZSxcclxuICByZXF1aXJlZCxcclxuICB2YWxpZGF0aW9uLFxyXG59OiBQcm9wcykgPT4gKFxyXG4gIDxGb3JtV3JhcHBlcj5cclxuICAgIDxGaWVsZCBuYW1lPXtuYW1lfSB2YWxpZGF0ZT17dmFsaWRhdGlvbn0+XHJcbiAgICAgIHsoeyBmaWVsZCwgZm9ybSB9KSA9PiAoXHJcbiAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICBpc0ludmFsaWQ9e2Zvcm0uZXJyb3JzW25hbWVdICYmIGZvcm0udG91Y2hlZFtuYW1lXX1cclxuICAgICAgICAgIGlzUmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0IHsuLi5maWVsZH0gdHlwZT17dHlwZX0gaWQ9e25hbWV9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cclxuICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9yc1tuYW1lXX08L0Zvcm1FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgKX1cclxuICAgIDwvRmllbGQ+XHJcbiAgPC9Gb3JtV3JhcHBlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtSW5wdXRQYXNzd29yZCA9ICh7XHJcbiAgbmFtZSxcclxuICBsYWJlbCxcclxuICBwbGFjZWhvbGRlcixcclxuICB0eXBlLFxyXG4gIHJlcXVpcmVkLFxyXG4gIHZhbGlkYXRpb24sXHJcbn06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVQYXNzd29yZFZpc2liaWxpdHkgPSAoKSA9PlxyXG4gICAgc2V0U2hvd1Bhc3N3b3JkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVdyYXBwZXI+XHJcbiAgICAgIDxGaWVsZCBuYW1lPXtuYW1lfSB2YWxpZGF0ZT17dmFsaWRhdGlvbn0+XHJcbiAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcclxuICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICBpc0ludmFsaWQ9e2Zvcm0uZXJyb3JzW25hbWVdICYmIGZvcm0udG91Y2hlZFtuYW1lXX1cclxuICAgICAgICAgICAgaXNSZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvRm9ybUxhYmVsPlxyXG5cclxuICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICAgIGlkPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0UmlnaHRFbGVtZW50IHdpZHRoPVwiM3JlbVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBvbkNsaWNrPXtoYW5kbGVQYXNzd29yZFZpc2liaWxpdHl9PlxyXG4gICAgICAgICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtWaWV3T2ZmSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBhcz17Vmlld09mZkljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0lucHV0UmlnaHRFbGVtZW50PlxyXG4gICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9yc1tuYW1lXX08L0Zvcm1FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRmllbGQ+XHJcbiAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR29vZ2xlTG9naW4gZnJvbSBcInJlYWN0LWdvb2dsZS1sb2dpblwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZUdvb2dsZUxvZ2luTXV0YXRpb24sXHJcbiAgdXNlUmVnaXN0ZXJNdXRhdGlvbixcclxufSBmcm9tIFwiLi4vZ3JhcGhxbC9nZW5lcmF0ZWRcIjtcclxuaW1wb3J0IHsgR29vZ2xlSWNvbiB9IGZyb20gXCIuLi9zdHlsZXMvaWNvbnNcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IEdvb2dsZUxvZ2luQnV0dG9uID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt7IGZldGNoaW5nIH0sIGdvb2dsZUxvZ2luXSA9IHVzZUdvb2dsZUxvZ2luTXV0YXRpb24oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSBhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGdvb2dsZUxvZ2luKHtcclxuICAgICAgICBlbWFpbDogcmVzcG9uc2UucHJvZmlsZU9iai5lbWFpbCxcclxuICAgICAgICB1c2VybmFtZTogcmVzcG9uc2UucHJvZmlsZU9iai5naXZlbk5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiZ29vZ2xlQXV0aFwiLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8R29vZ2xlTG9naW5cclxuICAgICAgY2xpZW50SWQ9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9DTElFTlRfSUR9XHJcbiAgICAgIGJ1dHRvblRleHQ9XCJMb2dpblwiXHJcbiAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgIGNvb2tpZVBvbGljeT17XCJzaW5nbGVfaG9zdF9vcmlnaW5cIn1cclxuICAgICAgcmVuZGVyPXsocmVuZGVyUHJvcHMpID0+IChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3JlbmRlclByb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgc2l6ZT1cInhsXCJcclxuICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJ3aGl0ZVdpdGhCb3JkZXJcIlxyXG4gICAgICAgICAgbGVmdEljb249ezxHb29nbGVJY29uIC8+fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEluaWNpYSBzZXNpw7NuIGNvbiBHb29nbGVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nLCBMaW5rLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBHb29nbGVMb2dpbkJ1dHRvbiB9IGZyb20gXCIuLi9Hb29nbGVMb2dpbkJ1dHRvblwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcclxuICB0eXBlOiBcImxvZ2luXCIgfCBcInNpZ251cFwiO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aEZvcm1MYXlvdXQgPSAoeyB0aXRsZSwgY2hpbGRyZW4sIHR5cGUgfTogUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICBoPVwiMTAwdmhcIlxyXG4gICAgICBtaW5XPVwiMzAwcHhcIlxyXG4gICAgICBtaW5IPVwiNzcwcHhcIlxyXG4gICAgICBwPXtbXCIwXCIsIFwiMFwiLCBcIjBcIiwgXCIzZW1cIiwgXCIzZW1cIl19XHJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICA+XHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgekluZGV4PXswfVxyXG4gICAgICAgIG9yZGVyPXsxfVxyXG4gICAgICAgIGg9XCIxMDAlXCJcclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiMTAwJVwiLCBcIjEwMCVcIiwgXCI1MCVcIiwgXCI2MCVcIl19XHJcbiAgICAgICAgbWluVz1cIjMwMHB4XCJcclxuICAgICAgICBwPVwiMmVtXCJcclxuICAgICAgICBiZ0ltYWdlPVwidXJsKCcvaW1hZ2VzL2F1aHRzY3JlZW4uanBnJylcIlxyXG4gICAgICAgIGJnU2l6ZT1cImNvdmVyXCJcclxuICAgICAgICBiZ1Bvcz1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtZW5kXCJcclxuICAgICAgICBwb3NpdGlvbj17W1wiYWJzb2x1dGVcIiwgXCJhYnNvbHV0ZVwiLCBcImFic29sdXRlXCIsIFwic3RhdGljXCIsIFwic3RhdGljXCJdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWRpbmcgdGV4dENvbG9yPVwiI2ZmZmZmZlwiPkJpZW52ZW5pZG88L0hlYWRpbmc+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBoPVwiOTB2aFwiXHJcbiAgICAgICAgbWluSD1cIjc3MHB4XCJcclxuICAgICAgICB3PXtbXCI5MCVcIiwgXCI5MCVcIiwgXCI5MCVcIiwgXCI1MCVcIiwgXCI0MCVcIl19XHJcbiAgICAgICAgYmdDb2xvcj1cIiNmZmZmZmZcIlxyXG4gICAgICAgIHpJbmRleD17MX1cclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IG09e1tcIjFlbVwiLCBcIjZlbVwiLCBcIjdlbVwiLCBcIjZlbVwiLCBcIjZlbVwiXX0+XHJcbiAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cIjIuNWVtXCIgbWI9XCIxZW1cIiBsZXR0ZXJTcGFjaW5nPVwid2lkZXJcIj5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPEJveCBtdD1cIjAuNWVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3R5cGUgPT09IFwibG9naW5cIiA/IFwiL2F1dGgvcmVnaXN0ZXJcIiA6IFwiL2F1dGgvbG9naW5cIn0+XHJcbiAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtYWxsVGV4dFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge3R5cGUgPT09IFwibG9naW5cIiA/IFwiQ3JlYXIgY3VlbnRhXCIgOiBcIkluaWNpYXIgc2VzacOzblwifVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IG10PVwiMmVtXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbWFsbFRleHRcIj5vPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBtdD1cIjJlbVwiPlxyXG4gICAgICAgICAgICA8R29vZ2xlTG9naW5CdXR0b24gLz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCB2YWxpZGF0ZVVzZXJuYW1lID0gKHZhbHVlPzogc3RyaW5nKTogU3RyaW5nID0+IHtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gXCJFbCB1c3VhcmlvIGVzIHJlcXVlcmlkb1wiO1xyXG4gIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoIDwgMykge1xyXG4gICAgcmV0dXJuIFwiRWwgdXN1YXJpbyBkZWJlIHRlbmVyIGFsIG1lbm9zIDMgbGV0cmFzXCI7XHJcbiAgfVxyXG4gIHJldHVybjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUVtYWlsID0gKHZhbHVlPzogc3RyaW5nKTogU3RyaW5nID0+IHtcclxuICBjb25zdCByZWcgPSBSZWdFeHAoL15bXFx3LVxcLl0rQChbXFx3LV0rXFwuKStbXFx3LV17Miw0fSQvZyk7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFwiRWwgZW1haWwgZXMgcmVxdWVyaWRvXCI7XHJcbiAgfSBlbHNlIGlmICghcmVnLnRlc3QodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gXCJJbnNlcnRhIHVuIGVtYWlsIGNvcnJlY3RvXCI7XHJcbiAgfVxyXG4gIHJldHVybjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVBhc3N3b3JkID0gKHZhbHVlPzogc3RyaW5nKTogU3RyaW5nID0+IHtcclxuICBjb25zdCByZWcgPSBSZWdFeHAoL14oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbYS16QS1aXSkuezgsfSQvZ20pO1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHJldHVybiBcIkxhIGNvbnRyYXNlw7FhIGVzIHJlcXVlcmlkYVwiO1xyXG4gIH0gZWxzZSBpZiAoIXJlZy50ZXN0KHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIGBMYSBjb250cmFzZcOxYSBkZWJlIGVuZXIgdW5hIGxvbmdpdHVkIGRlIGFsIG1lbm9zIDggY2FyYWN0ZXJlcy5cclxuICAgIENvbnRlbnRlciB1biBuw7ptZXJvLlxcblxyXG4gICAgQ29udGVuZXIgdW4gc8OtbWJvbG8uXFxuXHJcbiAgICBDb250ZW5lciB1bmEgbWF5w7pzdWNsYS5cXG5cclxuICAgIGA7XHJcbiAgfVxyXG4gIHJldHVybjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVBhc3N3b3JkUmVwZWF0ID0gKFxyXG4gIHBhc3N3b3JkOiBzdHJpbmcsXHJcbiAgdmFsdWU/OiBzdHJpbmdcclxuKTogU3RyaW5nID0+IHtcclxuICBjb25zb2xlLmxvZyhwYXNzd29yZCwgdmFsdWUpO1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHJldHVybiBcIlJlcHRpZSBsYSBjb250cmFzZcOxYVwiO1xyXG4gIH0gZWxzZSBpZiAodmFsdWUgIT09IHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gXCJMYXMgY29udHJhc2XDsWFzIG5vIGNvaW5jaWRlblwiO1xyXG4gIH1cclxuICByZXR1cm47XHJcbn07XHJcbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0ICogYXMgVXJxbCBmcm9tICd1cnFsJztcbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gVCB8IG51bGw7XG5leHBvcnQgdHlwZSBFeGFjdDxUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSB9O1xuZXhwb3J0IHR5cGUgTWFrZU9wdGlvbmFsPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS10/OiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBNYWtlTWF5YmU8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXTogTWF5YmU8VFtTdWJLZXldPiB9O1xuZXhwb3J0IHR5cGUgT21pdDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+O1xuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG4gIC8qKiBUaGUgamF2YXNjcmlwdCBgRGF0ZWAgYXMgc3RyaW5nLiBUeXBlIHJlcHJlc2VudHMgZGF0ZSBhbmQgdGltZSBhcyB0aGUgSVNPIERhdGUgc3RyaW5nLiAqL1xuICBEYXRlVGltZTogYW55O1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlcnknO1xuICBtZTogVXNlclJlc3BvbnNlO1xuICByZWZyZXNoVG9rZW46IFRva2VuUmVzcG9uc2U7XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyUmVzcG9uc2UgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJztcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8RmllbGRFcnJvcj4+O1xuICB1c2VyPzogTWF5YmU8VXNlcj47XG59O1xuXG5leHBvcnQgdHlwZSBGaWVsZEVycm9yID0ge1xuICBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InO1xuICBmaWVsZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1lc3NhZ2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlciA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyJztcbiAgaWQ6IFNjYWxhcnNbJ0lEJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgVG9rZW5SZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdUb2tlblJlc3BvbnNlJztcbiAgc3VjY2VzczogU2NhbGFyc1snQm9vbGVhbiddO1xuICBhY2Nlc3NUb2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIHJldm9rZVJlZnJlc2hUb2tlbkZvclVzZXI6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgcmVnaXN0ZXI6IFVzZXJUb2tlbjtcbiAgbG9naW46IFVzZXJUb2tlbjtcbiAgZ29vZ2xlTG9naW46IFVzZXJUb2tlbjtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZXZva2VSZWZyZXNoVG9rZW5Gb3JVc2VyQXJncyA9IHtcbiAgdXNlcklkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZWdpc3RlckFyZ3MgPSB7XG4gIHVzZXJuYW1lPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBlbWFpbD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkxvZ2luQXJncyA9IHtcbiAgdXNlcm5hbWU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGVtYWlsPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uR29vZ2xlTG9naW5BcmdzID0ge1xuICB1c2VybmFtZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZW1haWw/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJUb2tlbiA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyVG9rZW4nO1xuICB0b2tlbj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8VXNlckVycm9yPj47XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyRXJyb3IgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlckVycm9yJztcbiAgZmllbGQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBtZXNzYWdlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIEdvb2dsZUxvZ2luTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBlbWFpbD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgR29vZ2xlTG9naW5NdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBnb29nbGVMb2dpbjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyVG9rZW4nIH1cbiAgICAmIFBpY2s8VXNlclRva2VuLCAndG9rZW4nPlxuICAgICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVXNlckVycm9yJyB9XG4gICAgICAmIFBpY2s8VXNlckVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdXNlcm5hbWU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGVtYWlsPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGxvZ2luOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJUb2tlbicgfVxuICAgICYgUGljazxVc2VyVG9rZW4sICd0b2tlbic+XG4gICAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyRXJyb3InIH1cbiAgICAgICYgUGljazxVc2VyRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4gICAgKT4+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZW1haWw/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgcmVnaXN0ZXI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclRva2VuJyB9XG4gICAgJiBQaWNrPFVzZXJUb2tlbiwgJ3Rva2VuJz5cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJFcnJvcicgfVxuICAgICAgJiBQaWNrPFVzZXJFcnJvciwgJ2ZpZWxkJyB8ICdtZXNzYWdlJz5cbiAgICApPj4gfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIE1lUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG1lOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgeyB1c2VyPzogTWF5YmU8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAgICYgUGljazxVc2VyLCAnaWQnIHwgJ3VzZXJuYW1lJyB8ICdlbWFpbCc+XG4gICAgKT4sIGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICAgICAmIFBpY2s8RmllbGRFcnJvciwgJ2ZpZWxkJyB8ICdtZXNzYWdlJz5cbiAgICApPj4gfVxuICApIH1cbik7XG5cblxuZXhwb3J0IGNvbnN0IEdvb2dsZUxvZ2luRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gR29vZ2xlTG9naW4oJHVzZXJuYW1lOiBTdHJpbmcsICRlbWFpbDogU3RyaW5nLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgZ29vZ2xlTG9naW4odXNlcm5hbWU6ICR1c2VybmFtZSwgZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgIHRva2VuXG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdvb2dsZUxvZ2luTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPEdvb2dsZUxvZ2luTXV0YXRpb24sIEdvb2dsZUxvZ2luTXV0YXRpb25WYXJpYWJsZXM+KEdvb2dsZUxvZ2luRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCR1c2VybmFtZTogU3RyaW5nLCAkZW1haWw6IFN0cmluZywgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGxvZ2luKHVzZXJuYW1lOiAkdXNlcm5hbWUsIGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICB0b2tlblxuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpbk11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPihMb2dpbkRvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgUmVnaXN0ZXJEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBSZWdpc3RlcigkdXNlcm5hbWU6IFN0cmluZywgJGVtYWlsOiBTdHJpbmcsICRwYXNzd29yZDogU3RyaW5nISkge1xuICByZWdpc3Rlcih1c2VybmFtZTogJHVzZXJuYW1lLCBlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgdG9rZW5cbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVnaXN0ZXJNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz4oUmVnaXN0ZXJEb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IE1lRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgbWUge1xuICBtZSB7XG4gICAgdXNlciB7XG4gICAgICBpZFxuICAgICAgdXNlcm5hbWVcbiAgICAgIGVtYWlsXG4gICAgfVxuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZVF1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8TWVRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8TWVRdWVyeT4oeyBxdWVyeTogTWVEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07IiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIExpbmssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGb3JtaWssIEZvcm1pa0hlbHBlcnMgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtSW5wdXQsIEZvcm1JbnB1dFBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9ybUlucHV0XCI7XHJcbmltcG9ydCB7IEF1dGhGb3JtTGF5b3V0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9hdXRoRm9ybUxheW91dFwiO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZVBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdmFsaWRhdGlvbnMvdmFsaWRhdGVVc2VybmFtZVwiO1xyXG5pbXBvcnQgeyB1c2VMb2dpbk11dGF0aW9uIH0gZnJvbSBcIi4uLy4uL2dyYXBocWwvZ2VuZXJhdGVkXCI7XHJcbmltcG9ydCB7IGNsaWVudE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY3JlYXRlQ2xpZW50XCI7XHJcblxyXG5pbnRlcmZhY2UgUmVnaXN0ZXJWYWx1ZXMge1xyXG4gIHVzZXJuYW1lT3JFbWFpbDogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt7IGZldGNoaW5nIH0sIGxvZ2luXSA9IHVzZUxvZ2luTXV0YXRpb24oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtaWtcclxuICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIHVzZXJuYW1lT3JFbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgfX1cclxuICAgICAgb25TdWJtaXQ9e2FzeW5jIChcclxuICAgICAgICB2YWx1ZXM6IFJlZ2lzdGVyVmFsdWVzLFxyXG4gICAgICAgIHsgc2V0U3VibWl0dGluZyB9OiBGb3JtaWtIZWxwZXJzPFJlZ2lzdGVyVmFsdWVzPlxyXG4gICAgICApID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgYXdhaXQgbG9naW4oe1xyXG4gICAgICAgICAgICB1c2VybmFtZTogdmFsdWVzLnVzZXJuYW1lT3JFbWFpbCxcclxuICAgICAgICAgICAgZW1haWw6IHZhbHVlcy51c2VybmFtZU9yRW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgeyh7IGlzU3VibWl0dGluZywgdmFsdWVzIH0pID0+IChcclxuICAgICAgICA8QXV0aEZvcm1MYXlvdXQgdGl0bGU9XCJJbmljaWFyIHNlc2nDs25cIiB0eXBlPVwibG9naW5cIj5cclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lT3JFbWFpbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXN1YXJpbyBvIGVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2VydGEgdHUgdXN1YXJpbyBvIGVtYWlsXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtSW5wdXRQYXNzd29yZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2VydGEgdHUgY29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb249e3ZhbGlkYXRlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Qm94IHc9XCIxMDAlXCIgdGV4dEFsaWduPVwicmlnaHRcIiBtYj1cIjFlbVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtYWxsVGV4dFwiPntcIk9sdmlkYXN0ZSB0dSBjb250cmFzZcOxYT9cIn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwieGxcIlxyXG4gICAgICAgICAgICAgIG10PXs0fVxyXG4gICAgICAgICAgICAgIGlzRnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBJbmljaWFyIHNlc2nDs25cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9BdXRoRm9ybUxheW91dD5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjbGllbnRPcHRpb25zLCB7IHNzcjogZmFsc2UgfSkoTG9naW4pO1xyXG4iLCJpbXBvcnQgeyBJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdvb2dsZUljb24gPSAocHJvcHMpID0+IChcclxuICA8SWNvbiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB7Li4ucHJvcHN9PlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD1cIiNGQkJCMDBcIlxyXG4gICAgICBkPVwiTTExMy40NywzMDkuNDA4TDk1LjY0OCwzNzUuOTRsLTY1LjEzOSwxLjM3OEMxMS4wNDIsMzQxLjIxMSwwLDI5OS45LDAsMjU2XHJcblx0YzAtNDIuNDUxLDEwLjMyNC04Mi40ODMsMjguNjI0LTExNy43MzJoMC4wMTRsNTcuOTkyLDEwLjYzMmwyNS40MDQsNTcuNjQ0Yy01LjMxNywxNS41MDEtOC4yMTUsMzIuMTQxLTguMjE1LDQ5LjQ1NlxyXG5cdEMxMDMuODIxLDI3NC43OTIsMTA3LjIyNSwyOTIuNzk3LDExMy40NywzMDkuNDA4elwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD1cIiM1MThFRjhcIlxyXG4gICAgICBkPVwiTTUwNy41MjcsMjA4LjE3NkM1MTAuNDY3LDIyMy42NjIsNTEyLDIzOS42NTUsNTEyLDI1NmMwLDE4LjMyOC0xLjkyNywzNi4yMDYtNS41OTgsNTMuNDUxXHJcblx0Yy0xMi40NjIsNTguNjgzLTQ1LjAyNSwxMDkuOTI1LTkwLjEzNCwxNDYuMTg3bC0wLjAxNC0wLjAxNGwtNzMuMDQ0LTMuNzI3bC0xMC4zMzgtNjQuNTM1XHJcblx0YzI5LjkzMi0xNy41NTQsNTMuMzI0LTQ1LjAyNSw2NS42NDYtNzcuOTExaC0xMzYuODlWMjA4LjE3NmgxMzguODg3TDUwNy41MjcsMjA4LjE3Nkw1MDcuNTI3LDIwOC4xNzZ6XCJcclxuICAgIC8+XHJcbiAgICA8cGF0aFxyXG4gICAgICBmaWxsPVwiIzI4QjQ0NlwiXHJcbiAgICAgIGQ9XCJNNDE2LjI1Myw0NTUuNjI0bDAuMDE0LDAuMDE0QzM3Mi4zOTYsNDkwLjkwMSwzMTYuNjY2LDUxMiwyNTYsNTEyXHJcblx0Yy05Ny40OTEsMC0xODIuMjUyLTU0LjQ5MS0yMjUuNDkxLTEzNC42ODFsODIuOTYxLTY3LjkxYzIxLjYxOSw1Ny42OTgsNzcuMjc4LDk4Ljc3MSwxNDIuNTMsOTguNzcxXHJcblx0YzI4LjA0NywwLDU0LjMyMy03LjU4Miw3Ni44Ny0yMC44MThMNDE2LjI1Myw0NTUuNjI0elwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD1cIiNGMTQzMzZcIlxyXG4gICAgICBkPVwiTTQxOS40MDQsNTguOTM2bC04Mi45MzMsNjcuODk2Yy0yMy4zMzUtMTQuNTg2LTUwLjkxOS0yMy4wMTItODAuNDcxLTIzLjAxMlxyXG5cdGMtNjYuNzI5LDAtMTIzLjQyOSw0Mi45NTctMTQzLjk2NSwxMDIuNzI0bC04My4zOTctNjguMjc2aC0wLjAxNEM3MS4yMyw1Ni4xMjMsMTU3LjA2LDAsMjU2LDBcclxuXHRDMzE4LjExNSwwLDM3NS4wNjgsMjIuMTI2LDQxOS40MDQsNTguOTM2elwiXHJcbiAgICAvPlxyXG4gIDwvSWNvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGYWNlYm9va0ljb24gPSAocHJvcHMpID0+IChcclxuICA8SWNvbiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB7Li4ucHJvcHN9PlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD1cIiMzYjU5OTlcIlxyXG4gICAgICBkPVwiTTM4NCwxNzZoLTk2di02NGMwLTE3LjY2NCwxNC4zMzYtMzIsMzItMzJoMzJWMGgtNjRsMCwwYy01My4wMjQsMC05Niw0Mi45NzYtOTYsOTZ2ODBoLTY0djgwaDY0djI1Nmg5NlYyNTZoNjRMMzg0LDE3NnpcIlxyXG4gICAgLz5cclxuICA8L0ljb24+XHJcbik7XHJcbiIsImltcG9ydCB7IGNhY2hlRXhjaGFuZ2UgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xyXG5pbXBvcnQgeyBkZWR1cEV4Y2hhbmdlLCBmZXRjaEV4Y2hhbmdlIH0gZnJvbSBcInVycWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGllbnRPcHRpb25zID0gKHNzckV4Y2hhbmdlOiBhbnkpID0+ICh7XHJcbiAgdXJsOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRVJWRVJfVVJMLFxyXG4gIGZldGNoT3B0aW9uczoge1xyXG4gICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIGFzIGNvbnN0LFxyXG4gIH0sXHJcbiAgZXhoYW5nZXM6IFtkZWR1cEV4Y2hhbmdlLCBjYWNoZUV4Y2hhbmdlLCBzc3JFeGNoYW5nZSwgZmV0Y2hFeGNoYW5nZV0sXHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC11cnFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1sb2dpblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9